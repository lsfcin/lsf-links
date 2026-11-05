// POST {page, nome?, codigo, matricula, url} → {nomes}: a student puts a link in their own slot.
// Without nome (delivered from the panel's header) the matrícula says who the student is.
// The roster is the TURMAS secret: {"ai4good": {"matriculas": {"andreza": "…"}, "duplas": [["edson", "vinicius"]]}}.
// A pair delivers once and both slots fill. The link goes to <course>/entregas.tsv, not to the page.
import { allowed, aluno, hasSlot, json, linkProblem, readFile, retry3, upsert, writeFile } from '../../lib/index.js';

export async function onRequestPost({ request, env }) {
  const { page, codigo, matricula, url, ...body } = await request.json().catch(() => ({}));
  if (!allowed(page)) return json({ error: 'página desconhecida' }, 400);
  const course = page.split('/')[0];
  const nome = await aluno(env, course, matricula, body.nome);
  if (!nome) return json({ error: body.nome ? 'essa matrícula não é a de ' + body.nome : 'matrícula não encontrada na turma' }, 401);
  const problem = await linkProblem(String(url || '').trim());
  if (problem) return json({ error: problem }, 400);
  const turma = JSON.parse(env.TURMAS || '{}')[course];
  const dupla = (turma.duplas || []).find((d) => d.includes(nome)) || [nome];
  const { text: md } = await readFile(env, page);
  if (!dupla.every((n) => hasSlot(md, n, codigo))) return json({ error: `não há slot ${codigo} para ${nome}` }, 400);
  const path = `${course}/entregas.tsv`;
  // Two students delivering at once race on the same file: the loser rereads and tries again.
  const done = await retry3(async () => {
    const { text, sha } = await readFile(env, path, { missing: true });
    let tsv = text;
    for (const n of dupla) tsv = upsert(tsv, n, codigo, url.trim());
    return writeFile(env, path, tsv, sha, `entrega: ${dupla.join(' + ')} ${codigo}`);
  });
  if (done) return json({ nomes: dupla });
  return json({ error: 'muita gente entregando agora: tente de novo em alguns segundos' }, 409);
}
