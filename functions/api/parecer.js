// POST {password, page, nome, codigo, texto} → {ok}: the teacher's note under one student's boxes, public like the panel.
// It goes to <course>/pareceres.tsv beside entregas.tsv, never to the page; an empty texto removes it.
import { allowed, cell, hasSlot, json, PARECER_HEAD, passwordOk, readFile, upsert, writeFile } from '../../lib/index.js';

export async function onRequestPost({ request, env }) {
  const { password, page, nome, codigo, texto } = await request.json().catch(() => ({}));
  if (!(await passwordOk(env, password))) return json({ error: 'senha incorreta' }, 401);
  if (!allowed(page)) return json({ error: 'página desconhecida' }, 400);
  const { text: md } = await readFile(env, page);
  if (!hasSlot(md, nome, codigo)) return json({ error: `não há slot ${codigo} para ${nome}` }, 400);
  const path = `${page.split('/')[0]}/pareceres.tsv`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const { text, sha } = await readFile(env, path, { missing: true });
    const done = await writeFile(env, path, upsert(text, nome, codigo, cell(texto), PARECER_HEAD), sha, `parecer: ${nome} ${codigo}`);
    if (!done.stale) return json({ ok: true });
  }
  return json({ error: 'o arquivo mudou agora: tente de novo em alguns segundos' }, 409);
}
