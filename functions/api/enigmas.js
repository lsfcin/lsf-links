// POST {} → {aberto, caixas: bool[13]}; POST {password, aberto: bool} → {aberto}: report publication or toggle enigma access.
import { json, passwordOk, readFile, retry3, writeFile } from '../../lib/index.js';

export async function onRequestPost({ request, env }) {
  const { password, aberto } = await request.json().catch(() => ({})) || {};
  const store = { repo: 'lsfcin/academy-teaching', branch: env.ENIGMA_STORE_BRANCH || 'enigmas-site' };
  if (typeof aberto === 'boolean') {
    if (!await passwordOk(env, password)) return json({ error: 'senha inválida' }, 401);
    const done = await retry3(async () => {
      const { sha } = await readFile(env, 'aberto.json', { ...store, missing: true });
      return writeFile(env, 'aberto.json', JSON.stringify({ aberto }), sha,
        `enigma: ${aberto ? 'abrir' : 'fechar'}`, store);
    });
    if (!done) return json({ error: 'muita gente agora: tente de novo em alguns segundos' }, 409);
    return json({ aberto });
  }
  const [opened, published] = await Promise.all([
    readFile(env, 'aberto.json', { ...store, missing: true }),
    readFile(env, 'bancos/index.json', store),
  ]);
  const index = JSON.parse(published.text);
  return json({ aberto: opened.text ? JSON.parse(opened.text).aberto : false,
    caixas: index.caixas.map((stem) => stem !== null) });
}
