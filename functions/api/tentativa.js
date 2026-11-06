// POST {page, caixa, matricula, n?, respostas?} → {n, questoes} | {resultados, fechou} | {fechou: true}: serve or grade an enigma round and repair its panel mark.
import { allowed, aluno, corrigir, json, novo, parse, publico, readFile, remark, retry3, servir, writeFile } from '../../lib/index.js';

const busy = () => json({ error: 'muita gente agora: tente de novo em alguns segundos' }, 409);

export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(() => ({})) || {};
  const { page, caixa, matricula, n, respostas } = body;
  const store = { repo: 'lsfcin/academy-teaching', branch: env.ENIGMA_STORE_BRANCH || 'enigmas-site' };
  const opened = await readFile(env, 'aberto.json', { ...store, missing: true });
  if (!opened.text || !JSON.parse(opened.text).aberto) return json({ error: 'enigmas fechados' }, 403);
  if (!allowed(page) || !Number.isInteger(caixa) || caixa < 0 || caixa > 12) {
    return json({ error: 'página ou caixa desconhecida' }, 400);
  }
  const { text: published } = await readFile(env, 'bancos/index.json', store);
  const index = JSON.parse(published), stem = index.caixas[caixa];
  if (!stem) return json({ error: 'caixa não publicada' }, 400);
  const nome = await aluno(env, page.split('/')[0], matricula);
  if (!nome) return json({ error: 'matrícula não encontrada na turma' }, 401);

  const id = String(matricula).replace(/\D/g, '');
  const path = `alunos/${id}.json`, message = `enigma: ${nome} ${stem}`;
  const grading = Object.hasOwn(body, 'n') || Object.hasOwn(body, 'respostas');
  let banco;
  let done;
  try {
    done = await retry3(async () => {
      const { text, sha } = await readFile(env, path, { ...store, missing: true });
      const states = text ? JSON.parse(text) : {};
      let estado = states[stem];
      const before = JSON.stringify(estado ?? null);
      if (estado?.fechou) return { reply: { fechou: true }, fechou: true };
      banco ||= JSON.parse((await readFile(env, `bancos/${stem}.json`, store)).text);
      estado ||= await novo(banco, id, env.ENIGMA_SECRET);
      // An old round cannot be served or graded against the revised answer key.
      if (index.versoes[stem] !== estado.aberta?.versao) estado.aberta = null;
      let reply;
      if (grading) {
        if (!respostas || typeof respostas !== 'object' || Array.isArray(respostas)) throw { status: 400 };
        const result = await corrigir(estado, banco, n, respostas, id, env.ENIGMA_SECRET);
        estado = result.estado;
        reply = { resultados: result.resultados, fechou: result.fechou };
      } else {
        const served = await servir(estado, banco, id, env.ENIGMA_SECRET);
        estado = served.estado;
        reply = { n: served.rodada.n, questoes: publico(served.rodada, banco) };
      }
      // A reload of the open round changes nothing: no commit for it.
      if (JSON.stringify(estado) === before) return { reply, fechou: estado.fechou };
      states[stem] = estado;
      const saved = await writeFile(env, path, JSON.stringify(states), sha, message, store);
      return saved.stale ? saved : { reply, fechou: estado.fechou };
    });
  } catch (error) {
    if (error.status === 400 || error.status === 409) {
      return json({ error: error.status === 400 ? 'respostas inválidas' : 'rodada desatualizada' }, error.status);
    }
    throw error;
  }
  if (!done) return busy();

  // Closure is durable before the page write, so a later request can repair a failed mark.
  if (done.fechou) {
    const pageOptions = { repo: 'lsfcin/lsf-links', branch: env.ENIGMA_PAGE_BRANCH || 'main' };
    const marked = await retry3(async () => {
      const { text, sha } = await readFile(env, page, pageOptions);
      const marks = parse(text).find((p) => p.id === 'va1')?.rows
        .find(([name]) => name === nome)?.[1].find(([code]) => code === 'enigmas')?.[1];
      if (!marks || caixa >= marks.length) return { error: 'não há essa caixa no painel' };
      if (marks[caixa] === 'v') return { ok: true };
      const next = `${marks.slice(0, caixa)}v${marks.slice(caixa + 1)}`;
      return writeFile(env, page, remark(text, 'va1', nome, 'enigmas', next), sha, message, pageOptions);
    });
    if (!marked) return busy();
    if (marked.error) return json({ error: marked.error }, 400);
  }
  return json(done.reply);
}
