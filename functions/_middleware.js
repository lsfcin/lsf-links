// Every /api failure reaches the page as a sentence, never a bare 500: the person at the form is the
// one who has to say what went wrong.
import { json } from '../lib/index.js';

export async function onRequest({ next }) {
  try {
    return await next();
  } catch (e) {
    const hint = /github 40[13]/.test(e.message) ? ' (o token do site não pode gravar: avise o professor)' : '';
    return json({ error: `o servidor falhou: ${e.message}${hint}` }, 500);
  }
}
