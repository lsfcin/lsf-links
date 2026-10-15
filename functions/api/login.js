// POST {password} → 200 when it opens the editor. Nothing else is opened without it.
import { json, passwordOk } from '../../lib/index.js';

export async function onRequestPost({ request, env }) {
  const { password } = await request.json().catch(() => ({}));
  return (await passwordOk(env, password)) ? json({ ok: true }) : json({ error: 'senha incorreta' }, 401);
}
