// Every /api failure reaches the page as a sentence, never a bare 500: the person at the form is the
// one who has to say what went wrong. Then every page carries its own markdown, for readers without JavaScript.
import { comTexto, json } from '../lib/index.js';

// One function, not an array of steps: wrangler bundles the generated .d.ts beside it, and a declared const breaks the build.
export async function onRequest(context) {
  try {
    return await comTexto(context);
  } catch (e) {
    const hint = /github 40[13]/.test(e.message) ? ' (o token do site não pode gravar: avise o professor)' : '';
    return json({ error: `o servidor falhou: ${e.message}${hint}` }, 500);
  }
}
