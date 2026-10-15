// POST {password, path, text, sha} → {sha}. A save from a stale version is refused, never merged:
// whoever opened the file last would silently erase what was saved in between.
import { allowed, json, passwordOk, writeFile } from '../../lib/index.js';

export async function onRequestPost({ request, env }) {
  const { password, path, text, sha } = await request.json().catch(() => ({}));
  if (!(await passwordOk(env, password))) return json({ error: 'senha incorreta' }, 401);
  if (!allowed(path) || typeof text !== 'string') return json({ error: `${path} não é editável daqui` }, 400);
  const done = await writeFile(env, path, text, sha, `editor: ${path}`);
  if (done.stale) return json({ error: 'o arquivo mudou desde que você abriu: copie seu texto, recarregue e cole de novo' }, 409);
  return json(done);
}
