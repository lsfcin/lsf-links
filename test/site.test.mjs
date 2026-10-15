import test from 'node:test';
import assert from 'node:assert/strict';
const L = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const site = await import(`${L}/lib/index.js`);
const { onRequestPost: entrega } = await import(`${L}/functions/api/entrega.js`);
const { onRequestPost: save } = await import(`${L}/functions/api/save.js`);

const PAGE = `# x\n\n## entregue\n\nrepos.\n\n- **edson** | \`git\` · \`mlp·c\` · \`brw\`\n- **vinicius** | \`git\` · \`mlp·c\` · \`brw\`\n- **andreza** | [\`git\`](https://github.com/a/b) · \`brw\`\n\n---\n\n## outra\n\n- **edson** | \`brw\`\n`;

test('allowed: course md only', () => {
  assert.ok(site.allowed('ai4good/disciplina.md'));
  assert.ok(site.allowed('ai4good/artefatos/brw/modelo.md'));
  for (const p of ['viewer.js', '_redirects', 'ai4good/../x.md', 'functions/api/save.js', 'outro/x.md']) assert.ok(!site.allowed(p), p);
});

test('a slot exists only where the entregue section declares it', () => {
  assert.ok(site.hasSlot(PAGE, 'edson', 'mlp·c'));
  assert.ok(!site.hasSlot(PAGE, 'edson', 'pitch'));
  assert.ok(!site.hasSlot(PAGE, 'ninguem', 'git'));
});

test('a new link replaces the old one for the same student and code', () => {
  let tsv = site.upsert('', 'edson', 'brw', 'https://a/');
  tsv = site.upsert(tsv, 'andreza', 'brw', 'https://b/');
  tsv = site.upsert(tsv, 'edson', 'brw', 'https://c/');
  assert.equal(tsv, `${site.TSV_HEAD}andreza\tbrw\thttps://b/\nedson\tbrw\thttps://c/\n`);
});

const res = (status, location) => ({ status, headers: { get: () => location } });
test('linkProblem', async () => {
  assert.equal(await site.linkProblem('https://ok/', async () => res(200)), null);
  assert.match(await site.linkProblem('https://docs.google.com/d/1', async () => res(302, 'https://accounts.google.com/ServiceLogin?x')), /login/);
  assert.match(await site.linkProblem('https://github.com/a/priv', async () => res(404)), /404/);
  assert.match(await site.linkProblem('https://www.overleaf.com/project/abc', async () => res(200)), /overleaf/);
  assert.equal(await site.linkProblem('https://www.overleaf.com/read/abc', async () => res(200)), null);
  assert.match(await site.linkProblem('nada'), /link/);
  const slow = (u, { signal }) => new Promise((_, rej) => signal.addEventListener('abort', () => rej(new Error('abort'))));
  const t0 = Date.now();
  assert.equal(await site.linkProblem('https://slow/', slow, 100), null);
  assert.ok(Date.now() - t0 < 1000);
});

// a fake GitHub holding the course page (and whatever gets written), and student links that are all public
function fakeWorld(text) {
  const repo = { files: { 'ai4good/disciplina.md': { text, sha: 's0' } }, n: 0, commits: [] };
  globalThis.fetch = async (url, init = {}) => {
    if (!String(url).startsWith('https://api.github.com/')) return res(200);
    const path = String(url).split('/contents/')[1].split('?')[0];
    const file = repo.files[path];
    if (!init.method) {
      if (!file) return { ok: false, status: 404 };
      return { ok: true, status: 200, json: async () => ({ content: Buffer.from(file.text).toString('base64'), sha: file.sha }) };
    }
    const body = JSON.parse(init.body);
    if (body.sha !== file?.sha) return { ok: false, status: 409 };
    repo.files[path] = { text: Buffer.from(body.content, 'base64').toString('utf8'), sha: `s${++repo.n}` };
    repo.commits.push(body.message);
    return { ok: true, status: 200, json: async () => ({ content: { sha: repo.files[path].sha } }) };
  };
  return repo;
}
const env = { GITHUB_TOKEN: 't', EDIT_PASSWORD: 'pw', TURMAS: JSON.stringify({ ai4good: { matriculas: { edson: '111', vinicius: '222', andreza: '333' }, duplas: [['edson', 'vinicius']] } }) };
const post = (body) => ({ request: new Request('https://x/api', { method: 'POST', body: JSON.stringify(body) }), env });

test('a pair delivers once and both slots fill', async () => {
  const repo = fakeWorld(PAGE);
  const r = await entrega(post({ page: 'ai4good/disciplina.md', nome: 'vinicius', codigo: 'brw', matricula: '222', url: 'https://d/1' }));
  assert.equal(r.status, 200);
  assert.deepEqual((await r.json()).nomes, ['edson', 'vinicius']);
  assert.equal(repo.files['ai4good/entregas.tsv'].text, `${site.TSV_HEAD}edson\tbrw\thttps://d/1\nvinicius\tbrw\thttps://d/1\n`);
  assert.equal(repo.files['ai4good/disciplina.md'].text, PAGE);
  assert.deepEqual(repo.commits, ['entrega: edson + vinicius brw']);
});

test('a code the page does not list as a slot is refused', async () => {
  const repo = fakeWorld(PAGE);
  const r = await entrega(post({ page: 'ai4good/disciplina.md', nome: 'edson', codigo: 'pitch', matricula: '111', url: 'https://d/1' }));
  assert.equal(r.status, 400);
  assert.deepEqual(repo.commits, []);
});

test('a wrong matrícula writes nothing', async () => {
  const repo = fakeWorld(PAGE);
  const r = await entrega(post({ page: 'ai4good/disciplina.md', nome: 'andreza', codigo: 'brw', matricula: '111', url: 'https://d/1' }));
  assert.equal(r.status, 401);
  assert.deepEqual(repo.commits, []);
});

test('save refuses a stale version and a bad password', async () => {
  const repo = fakeWorld(PAGE);
  assert.equal((await save(post({ password: 'pw', path: 'ai4good/disciplina.md', text: 'novo', sha: 'velho' }))).status, 409);
  assert.equal((await save(post({ password: 'no', path: 'ai4good/disciplina.md', text: 'novo', sha: 's0' }))).status, 401);
  assert.equal((await save(post({ password: 'pw', path: 'viewer.js', text: 'x', sha: 's0' }))).status, 400);
  assert.equal((await save(post({ password: 'pw', path: 'ai4good/disciplina.md', text: 'novo', sha: 's0' }))).status, 200);
  assert.equal(repo.files['ai4good/disciplina.md'].text, 'novo');
  assert.deepEqual(repo.commits, ['editor: ai4good/disciplina.md']);
});
