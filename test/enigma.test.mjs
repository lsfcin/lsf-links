import test from 'node:test';
import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { onRequestPost as tentativa } from '../functions/api/tentativa.js';
import { onRequestPost as enigmas } from '../functions/api/enigmas.js';

globalThis.crypto ??= webcrypto;
const STORE = 'lsfcin/academy-teaching', SITE = 'lsfcin/lsf-links';
const PAGE_PATH = 'ai4good/disciplina.md', STATE_PATH = 'alunos/111.json';
const MARKS = 'v--v------v--', BOX = 5;
const PAGE = `# Curso\n<!-- painel:dados-va1\nedson: git=v--, enigmas=${MARKS}, tex=--v-\nvinicius: git=---, enigmas=-------------\n-->\n<!-- painel:dados-va2\nedson: enigmas=-------------\n-->\n`;
const BUSY = { error: 'muita gente agora: tente de novo em alguns segundos' };
const env = { GITHUB_TOKEN: 'token', EDIT_PASSWORD: 'pw', ENIGMA_SECRET: 'segredo literal',
  TURMAS: JSON.stringify({ ai4good: { matriculas: { edson: '111', vinicius: '222' } } }) };
const banco = {
  stem: 'perceptron', versao: 'v1',
  faceis: ['A', 'B', 'C', 'D'].map((correta, i) => ({
    id: `f${i}`, enunciado: `Pergunta ${i}`, correta, parabens: 'Muito bem!',
    alternativas: { A: 'um', B: 'dois', C: 'três', D: 'quatro', E: 'cinco' },
    feedback: { A: 'Reveja A', B: 'Reveja B', C: 'Reveja C', D: 'Reveja D', E: 'Reveja E' },
  })),
  dificeis: ['d0', 'd1'].map((id) => ({ id, tolerancia: 0.01, parabens: 'Muito bem!', combos: [
    { enunciado: `Calcule ${id}: primeiro caso`, valor: 2.5, erros: [{ valor: 4, feedback: 'Reveja a soma' }] },
    { enunciado: `Calcule ${id}: segundo caso`, valor: 7.5, erros: [] },
  ] })),
};
const index = () => ({ caixas: Array.from({ length: 13 }, (_, k) => k === BOX ? banco.stem : null), versoes: { [banco.stem]: banco.versao } });

// Every read and write is isolated by repo + branch + path, just like GitHub contents.
function fakeWorld(t, overrides = {}) {
  const settings = { ...env, ...overrides };
  const storeBranch = settings.ENIGMA_STORE_BRANCH || 'enigmas-site';
  const pageBranch = settings.ENIGMA_PAGE_BRANCH || 'main';
  const files = new Map(), commits = [], calls = [], conflicts = new Map();
  let serial = 0;
  const key = (repo, branch, path) => `${repo}|${branch}|${path}`;
  const put = (repo, branch, path, value) => files.set(key(repo, branch, path), {
    text: typeof value === 'string' ? value : JSON.stringify(value), sha: `s${++serial}`,
  });
  const get = (repo, branch, path) => files.get(key(repo, branch, path));
  const store = (path) => get(STORE, storeBranch, path);
  const setStore = (path, value) => put(STORE, storeBranch, path, value);
  const page = () => get(SITE, pageBranch, PAGE_PATH).text;
  const setPage = (value) => put(SITE, pageBranch, PAGE_PATH, value);
  const fail = (repo, branch, path, count, change) => conflicts.set(key(repo, branch, path), { count, change });
  const conflictState = (count, change) => fail(STORE, storeBranch, STATE_PATH, count, change);
  const conflictPage = (count, change) => fail(SITE, pageBranch, PAGE_PATH, count, change);
  const state = () => JSON.parse(store(STATE_PATH).text);
  setStore('aberto.json', { aberto: true });
  setStore('bancos/index.json', index());
  setStore(`bancos/${banco.stem}.json`, banco);
  setPage(PAGE);
  t.mock.method(globalThis, 'fetch', async (url, init = {}) => {
    const u = new URL(url);
    assert.equal(u.origin, 'https://api.github.com');
    const match = u.pathname.match(/^\/repos\/([^/]+\/[^/]+)\/contents\/(.+)$/);
    assert.ok(match, url);
    const [, repo, path] = match;
    const body = init.method ? JSON.parse(init.body) : null;
    const branch = body ? body.branch : u.searchParams.get('ref');
    const fileKey = key(repo, branch, path), file = files.get(fileKey);
    calls.push({ repo, branch, path, method: init.method || 'GET' });
    if (!body) return file
      ? { ok: true, status: 200, json: async () => ({ content: Buffer.from(file.text).toString('base64'), sha: file.sha }) }
      : { ok: false, status: 404 };
    assert.equal(init.method, 'PUT');
    const conflict = conflicts.get(fileKey);
    if (conflict?.count > 0) {
      conflict.count--;
      if (conflict.change) put(repo, branch, path, conflict.change(file?.text));
      return { ok: false, status: 409 };
    }
    if (body.sha !== file?.sha) return { ok: false, status: 409 };
    const text = Buffer.from(body.content, 'base64').toString('utf8');
    put(repo, branch, path, text);
    commits.push({ repo, branch, path, message: body.message, text });
    return { ok: true, status: 200, json: async () => ({ content: { sha: files.get(fileKey).sha } }) };
  });
  const post = async (handler, body) => {
    const r = await handler({ request: new Request('https://site/api', { method: 'POST', body: JSON.stringify(body) }), env: settings });
    const json = await r.json();
    assert.doesNotMatch(JSON.stringify(json), /correta|valor|erros|combos/);
    return { status: r.status, json };
  };
  return { files, commits, calls, storeBranch, pageBranch, store, setStore, page, setPage, state,
    conflictState, conflictPage, fail,
    attempt: (body = {}) => post(tentativa, { page: PAGE_PATH, caixa: BOX, matricula: '111', ...body }),
    status: (body = {}) => post(enigmas, body),
  };
}

// The answer key is read exclusively from the fixture and persisted private round metadata.
function answers(world) {
  const round = world.state()[banco.stem].aberta;
  return Object.fromEntries(round.ids.map((id) => {
    const easy = banco.faceis.find((q) => q.id === id);
    return [id, easy ? 'ABCDE'[round.letras[id].indexOf(easy.correta)]
      : String(banco.dificeis.find((q) => q.id === id).combos[round.combos[id]].valor)];
  }));
}
const marked = (page = PAGE) => page.replace(`enigmas=${MARKS}`, `enigmas=${MARKS.slice(0, BOX)}v${MARKS.slice(BOX + 1)}`);
const writes = (w, path) => w.calls.filter((c) => c.method === 'PUT' && c.path === path);

test('closed or missing aberto takes precedence over invalid page, box and matrícula', async (t) => {
  const w = fakeWorld(t);
  for (const missing of [false, true]) {
    if (missing) w.files.delete(`${STORE}|${w.storeBranch}|aberto.json`);
    else w.setStore('aberto.json', { aberto: false });
    assert.equal((await w.attempt({ page: '../bad', caixa: -1, matricula: '999' })).status, 403);
  }
  assert.ok(w.calls.every((c) => c.path === 'aberto.json'));
  assert.deepEqual(w.commits, []);
});

test('invalid page, non-integer/out-of-range and unpublished boxes precede authentication', async (t) => {
  const w = fakeWorld(t);
  for (const body of [{ page: 'viewer.js' }, { page: 'ai4good/../x.md' },
    ...[-1, 13, 1.5, '5', null, 0].map((caixa) => ({ caixa }))]) {
    assert.equal((await w.attempt({ ...body, matricula: '999' })).status, 400);
  }
  assert.deepEqual(w.commits, []);
  assert.ok(!w.calls.some((c) => c.path.startsWith('alunos/')));
});

test('wrong matrícula returns 401 without reading or writing student state', async (t) => {
  const w = fakeWorld(t);
  assert.equal((await w.attempt({ matricula: '999' })).status, 401);
  assert.deepEqual(w.commits, []);
  assert.ok(!w.calls.some((c) => c.path.startsWith('alunos/')));
});

test('serving twice persists and reuses the same n and public questions', async (t) => {
  const w = fakeWorld(t);
  const first = await w.attempt();
  assert.equal(first.status, 200);
  assert.deepEqual(Object.keys(first.json).sort(), ['n', 'questoes']);
  assert.equal(first.json.n, 1);
  assert.equal(first.json.questoes.filter((q) => q.tipo === 'facil').length, 2);
  assert.equal(first.json.questoes.filter((q) => q.tipo === 'dificil').length, 1);
  const state = w.state();
  assert.equal(state[banco.stem].aberta.n, first.json.n);
  assert.deepEqual(await w.attempt({ matricula: '1.1-1' }), first);
  assert.deepEqual(w.state(), state);
  assert.equal(w.page(), PAGE);
});

test('3/3 commits student state before one mark, preserving all other page data', async (t) => {
  const w = fakeWorld(t);
  const { json: { n } } = await w.attempt();
  w.commits.length = 0;
  const result = await w.attempt({ n, respostas: answers(w) });
  assert.equal(result.status, 200);
  assert.deepEqual(Object.keys(result.json).sort(), ['fechou', 'resultados']);
  assert.equal(result.json.fechou, true);
  assert.equal(result.json.resultados.length, 3);
  assert.ok(result.json.resultados.every((r) => r.certo));
  assert.equal(w.state()[banco.stem].fechou, true);
  assert.deepEqual(w.commits.map(({ repo, branch, path, message }) => ({ repo, branch, path, message })), [
    { repo: STORE, branch: 'enigmas-site', path: STATE_PATH, message: 'enigma: edson perceptron' },
    { repo: SITE, branch: 'main', path: PAGE_PATH, message: 'enigma: edson perceptron' },
  ]);
  assert.equal(w.page(), marked());
  w.commits.length = 0;
  assert.deepEqual(await w.attempt(), { status: 200, json: { fechou: true } });
  assert.deepEqual(await w.attempt({ n, respostas: {} }), { status: 200, json: { fechou: true } });
  assert.deepEqual(w.commits, []);
});

test('2/3 stores results without marking and a resend preserves them during the next round', async (t) => {
  const w = fakeWorld(t);
  const { json: { n } } = await w.attempt();
  const respostas = answers(w), hard = w.state()[banco.stem].aberta.ids[2];
  respostas[hard] = '999';
  w.commits.length = 0;
  const result = await w.attempt({ n, respostas });
  assert.equal(result.status, 200);
  assert.equal(result.json.fechou, false);
  assert.equal(result.json.resultados.filter((r) => r.certo).length, 2);
  assert.deepEqual(w.commits.map((c) => c.path), [STATE_PATH]);
  assert.equal(w.page(), PAGE);
  assert.equal((await w.attempt()).json.n, n + 1);
  const state = w.state();
  assert.deepEqual(await w.attempt({ n, respostas: {} }), result);
  assert.deepEqual(w.state(), state);
});

test('bad answers and stale n become JSON errors and write nothing', async (t) => {
  const w = fakeWorld(t);
  const { json: { n } } = await w.attempt();
  const state = w.state(), respostas = answers(w), hard = state[banco.stem].aberta.ids[2];
  w.commits.length = 0;
  for (const [body, status] of [
    [{ n: n + 1, respostas }, 409], [{ n: String(n), respostas }, 409],
    [{ n, respostas: { ...respostas, [hard]: 'oops' } }, 400], [{ n, respostas: {} }, 400],
    [{ n, respostas: null }, 400], [{ n }, 400],
  ]) {
    const result = await w.attempt(body);
    assert.equal(result.status, status);
    assert.equal(typeof result.json.error, 'string');
  }
  assert.deepEqual(w.state(), state);
  assert.deepEqual(w.commits, []);
});

test('a new bank version drops the open round but keeps existing progress and other banks', async (t) => {
  const w = fakeWorld(t);
  await w.attempt();
  const old = w.state();
  old.other = { untouched: true };
  w.setStore(STATE_PATH, old);
  w.setStore('bancos/index.json', { ...index(), versoes: { [banco.stem]: 'v2' } });
  const revised = structuredClone(banco);
  revised.versao = 'v2';
  for (const q of revised.faceis) q.enunciado = 'Revisada';
  for (const q of revised.dificeis) for (const combo of q.combos) combo.enunciado = 'Revisada';
  w.setStore(`bancos/${banco.stem}.json`, revised);
  assert.equal((await w.attempt({ n: 1, respostas: answers(w) })).status, 409);
  const result = await w.attempt();
  assert.equal(result.status, 200);
  assert.ok(result.json.questoes.every((q) => q.enunciado === 'Revisada'));
  assert.equal(w.state()[banco.stem].aberta.versao, 'v2');
  assert.deepEqual(w.state()[banco.stem].baralho, old[banco.stem].baralho);
  assert.deepEqual(w.state().other, old.other);
});

test('a closed state repairs a missing mark on both serve and grade requests', async (t) => {
  const w = fakeWorld(t);
  const { json: { n } } = await w.attempt();
  await w.attempt({ n, respostas: answers(w) });
  const state = w.state();
  for (const body of [{}, { n, respostas: {} }]) {
    w.setPage(PAGE);
    w.commits.length = 0;
    assert.deepEqual(await w.attempt(body), { status: 200, json: { fechou: true } });
    assert.equal(w.page(), marked());
    assert.deepEqual(w.state(), state);
    assert.deepEqual(w.commits.map((c) => c.path), [PAGE_PATH]);
  }
});

test('a stale page write rereads marks and preserves a concurrent mark and other code', async (t) => {
  const w = fakeWorld(t);
  const { json: { n } } = await w.attempt();
  const raced = PAGE.replace(`enigmas=${MARKS}`, `enigmas=${MARKS.slice(0, 2)}v${MARKS.slice(3)}`).replace('tex=--v-', 'tex=v-v-');
  w.conflictPage(1, () => raced);
  const result = await w.attempt({ n, respostas: answers(w) });
  assert.equal(result.status, 200);
  assert.equal(w.page(), raced.replace(/(edson: git=v--, enigmas=)([v-]+)/, (_, prefix, marks) => `${prefix}${marks.slice(0, BOX)}v${marks.slice(BOX + 1)}`));
  assert.equal(writes(w, PAGE_PATH).length, 2);
});

test('state retry rereads and reapplies the grade to concurrent state, keeping other banks', async (t) => {
  const w = fakeWorld(t);
  const { json: { n } } = await w.attempt();
  w.conflictState(1, (text) => {
    const state = JSON.parse(text);
    state.other = { fechou: true };
    state[banco.stem].baralho.reverse();
    return JSON.stringify(state);
  });
  assert.equal((await w.attempt({ n, respostas: answers(w) })).status, 200);
  assert.deepEqual(w.state().other, { fechou: true });
  const storedGrade = w.state()[banco.stem];
  const initialIds = w.commits[0] && JSON.parse(w.commits[0].text)[banco.stem].baralho;
  assert.deepEqual(storedGrade.baralho, initialIds.toReversed().filter((id) => !storedGrade.acertos.includes(id)));
  assert.equal(w.page(), marked());
});

test('reloading the open round serves it again without a commit', async (t) => {
  const w = fakeWorld(t);
  const first = await w.attempt();
  const state = w.state();
  w.commits.length = 0;
  assert.deepEqual(await w.attempt(), first);
  assert.deepEqual(w.state(), state);
  assert.deepEqual(w.commits, []);
});

test('three stale state writes return 409 before any page write', async (t) => {
  const w = fakeWorld(t);
  const { json: { n } } = await w.attempt();
  const state = w.state();
  w.commits.length = 0;
  w.conflictState(3);
  assert.deepEqual(await w.attempt({ n, respostas: answers(w) }), { status: 409, json: BUSY });
  assert.deepEqual(w.state(), state);
  assert.deepEqual(w.commits, []);
  assert.equal(writes(w, PAGE_PATH).length, 0);
});

test('three stale page writes retain closure, return 409, then repair on reload', async (t) => {
  const w = fakeWorld(t);
  const { json: { n } } = await w.attempt();
  w.conflictPage(3);
  assert.deepEqual(await w.attempt({ n, respostas: answers(w) }), { status: 409, json: BUSY });
  assert.equal(w.state()[banco.stem].fechou, true);
  assert.equal(w.page(), PAGE);
  assert.deepEqual(await w.attempt(), { status: 200, json: { fechou: true } });
  assert.equal(w.page(), marked());
});

test('custom store and page branches are honored on every read and write', async (t) => {
  const w = fakeWorld(t, { ENIGMA_STORE_BRANCH: 'store-test', ENIGMA_PAGE_BRANCH: 'page-test' });
  const { json: { n } } = await w.attempt();
  assert.equal((await w.attempt({ n, respostas: answers(w) })).status, 200);
  assert.equal(w.page(), marked());
  assert.equal((await w.status({ password: 'pw', aberto: false })).status, 200);
  assert.ok(w.calls.some((c) => c.repo === SITE));
  assert.ok(w.calls.every((c) => c.branch === (c.repo === STORE ? 'store-test' : 'page-test')));
});

test('T6 public status lists exactly 13 published flags, and missing aberto means false', async (t) => {
  const w = fakeWorld(t);
  const caixas = index().caixas.map((stem) => stem !== null);
  assert.deepEqual(await w.status(), { status: 200, json: { aberto: true, caixas } });
  w.files.delete(`${STORE}|${w.storeBranch}|aberto.json`);
  assert.deepEqual(await w.status(), { status: 200, json: { aberto: false, caixas } });
  assert.deepEqual(w.commits, []);
});

test('T6 authenticated toggle flips the file, retries stale writes and can create it', async (t) => {
  const w = fakeWorld(t);
  w.fail(STORE, w.storeBranch, 'aberto.json', 1, () => ({ aberto: true }));
  assert.deepEqual(await w.status({ password: 'pw', aberto: false }), { status: 200, json: { aberto: false } });
  assert.deepEqual(JSON.parse(w.store('aberto.json').text), { aberto: false });
  assert.equal(writes(w, 'aberto.json').length, 2);
  w.files.delete(`${STORE}|${w.storeBranch}|aberto.json`);
  assert.deepEqual(await w.status({ password: 'pw', aberto: true }), { status: 200, json: { aberto: true } });
  assert.deepEqual(JSON.parse(w.store('aberto.json').text), { aberto: true });
});

test('T6 wrong password writes nothing', async (t) => {
  const w = fakeWorld(t);
  assert.equal((await w.status({ password: 'wrong', aberto: false })).status, 401);
  assert.deepEqual(w.commits, []);
  assert.equal(writes(w, 'aberto.json').length, 0);
  assert.deepEqual(JSON.parse(w.store('aberto.json').text), { aberto: true });
});

test('T6 exhausted retries return the busy 409 response', async (t) => {
  const w = fakeWorld(t);
  w.fail(STORE, w.storeBranch, 'aberto.json', 3);
  assert.deepEqual(await w.status({ password: 'pw', aberto: false }), { status: 409, json: BUSY });
  assert.deepEqual(w.commits, []);
});
