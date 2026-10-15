// POST {page, nome?, codigo, matricula, url} → {nomes}: a student puts a link in their own slot.
// Without nome (delivered from the panel's header) the matrícula says who the student is.
// The roster is the TURMAS secret: {"ai4good": {"matriculas": {"andreza": "…"}, "duplas": [["edson", "vinicius"]]}}.
// A pair delivers once and both slots fill. The link goes to <course>/entregas.tsv, not to the page.
import { allowed, hasSlot, json, linkProblem, readFile, upsert, writeFile } from '../../lib/index.js';

export async function onRequestPost({ request, env }) {
  const { page, codigo, matricula, url, ...body } = await request.json().catch(() => ({}));
  if (!allowed(page)) return json({ error: 'página desconhecida' }, 400);
  const course = page.split('/')[0];
  const turma = JSON.parse(env.TURMAS || '{}')[course];
  const given = String(matricula || '').replace(/\D/g, '');
  const nome = body.nome || Object.keys(turma?.matriculas || {}).find((n) => turma.matriculas[n] === given);
  const certa = turma && turma.matriculas[nome];
  if (!certa || given !== certa) {
    await new Promise((r) => setTimeout(r, 2000));
    return json({ error: nome ? 'essa matrícula não é a de ' + nome : 'matrícula não encontrada na turma' }, 401);
  }
  const problem = await linkProblem(String(url || '').trim());
  if (problem) return json({ error: problem }, 400);
  const dupla = (turma.duplas || []).find((d) => d.includes(nome)) || [nome];
  const { text: md } = await readFile(env, page);
  if (!dupla.every((n) => hasSlot(md, n, codigo))) return json({ error: `não há slot ${codigo} para ${nome}` }, 400);
  const path = `${course}/entregas.tsv`;
  // Two students delivering at once race on the same file: the loser rereads and tries again.
  for (let attempt = 0; attempt < 3; attempt++) {
    const { text, sha } = await readFile(env, path, { missing: true });
    let tsv = text;
    for (const n of dupla) tsv = upsert(tsv, n, codigo, url.trim());
    const done = await writeFile(env, path, tsv, sha, `entrega: ${dupla.join(' + ')} ${codigo}`);
    if (!done.stale) return json({ nomes: dupla });
  }
  return json({ error: 'muita gente entregando agora: tente de novo em alguns segundos' }, 409);
}
