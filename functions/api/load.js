// POST {password, path} → {text, sha}: the file as GitHub holds it now, not as the last deploy served it.
import { allowed, json, passwordOk, readFile } from '../../lib/index.js';

export async function onRequestPost({ request, env }) {
  const { password, path } = await request.json().catch(() => ({}));
  if (!(await passwordOk(env, password))) return json({ error: 'senha incorreta' }, 401);
  if (!allowed(path)) return json({ error: `${path} não é editável daqui` }, 400);
  return json(await readFile(env, path));
}
