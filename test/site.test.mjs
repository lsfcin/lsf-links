import test from 'node:test';
import assert from 'node:assert/strict';
const L = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const site = await import(`${L}/lib/index.js`);
const { onRequestPost: entrega } = await import(`${L}/functions/api/entrega.js`);
const { onRequestPost: save } = await import(`${L}/functions/api/save.js`);
const { onRequestPost: parecer } = await import(`${L}/functions/api/parecer.js`);

const PAGE = `# x\n\n<!-- painel:dados-va2\nedson: git=---, mlp·c=-----, brw=---\nvinicius: git=---, mlp·c=-----, brw=---\nandreza: git=vvv, mlp·c=-----, brw=---\n-->\n\n## outra\n\n- **edson** | \`pitch\`\n`;

test('allowed: course md only', () => {
  assert.ok(site.allowed('ai4good/disciplina.md'));
  assert.ok(site.allowed('ai4good/artefatos/brw/modelo.md'));
  for (const p of ['viewer.js', '_redirects', 'ai4good/../x.md', 'functions/api/save.js', 'outro/x.md']) assert.ok(!site.allowed(p), p);
});

test('a slot exists only where the panel data declares it', () => {
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

test('readFile and writeFile use the chosen repo and branch, with site defaults', async (t) => {
  const calls = [];
  t.mock.method(globalThis, 'fetch', async (url, init) => {
    calls.push({ url, init });
    return { ok: true, status: 200, json: async () => init.method
      ? { content: { sha: 's1' } }
      : { content: Buffer.from('matrícula').toString('base64'), sha: 's0' } };
  });
  const options = { repo: 'lsfcin/academy-teaching', branch: 'enigmas-site' };
  const path = 'ai4good/disciplina.md';
  assert.deepEqual(await site.readFile(env, path, options), { text: 'matrícula', sha: 's0' });
  assert.equal(calls[0].url, `https://api.github.com/repos/lsfcin/academy-teaching/contents/${path}?ref=enigmas-site`);
  assert.deepEqual(await site.writeFile(env, path, 'matrícula', 's0', 'teste', options), { sha: 's1' });
  assert.equal(calls[1].url, `https://api.github.com/repos/lsfcin/academy-teaching/contents/${path}`);
  assert.deepEqual(JSON.parse(calls[1].init.body), {
    message: 'teste', content: Buffer.from('matrícula').toString('base64'), sha: 's0', branch: 'enigmas-site',
  });
  await site.readFile(env, path);
  await site.writeFile(env, path, '', 's0', 'teste');
  assert.equal(calls[2].url, `https://api.github.com/repos/lsfcin/lsf-links/contents/${path}?ref=main`);
  assert.equal(calls[3].url, `https://api.github.com/repos/lsfcin/lsf-links/contents/${path}`);
  assert.equal(JSON.parse(calls[3].init.body).branch, 'main');
});

test('writeFile retries conflicts and sha validation errors, but throws other errors', async (t) => {
  for (const [status, message, stale] of [
    [409, '', true], [422, 'sha does not match', true], [422, 'Invalid SHA', true],
    [422, 'content is not valid Base64', false], [500, 'server error', false],
  ]) {
    t.mock.method(globalThis, 'fetch', async () => ({ ok: false, status, json: async () => ({ message }) }));
    const write = site.writeFile(env, 'ai4good/entregas.tsv', '', 's0', 'teste');
    if (stale) assert.deepEqual(await write, { stale: true });
    else await assert.rejects(write, new RegExp(`github ${status}`));
  }
});

test('retry3 stops at the first non-stale result and returns null after three stale writes', async () => {
  const result = { sha: 's1' };
  for (const stale of [0, 1, 2, 3]) {
    let calls = 0;
    assert.equal(await site.retry3(async () => ++calls <= stale ? { stale: true } : result), stale === 3 ? null : result);
    assert.equal(calls, Math.min(stale + 1, 3));
  }
  const error = new Error('validation failed');
  let calls = 0;
  await assert.rejects(site.retry3(async () => { calls++; throw error; }), (e) => e === error);
  assert.equal(calls, 1);
});

test('aluno identifies a matrícula with digits only and requires the given name to match', async () => {
  assert.equal(await site.aluno(env, 'ai4good', '3.3-3'), 'andreza');
  assert.equal(await site.aluno(env, 'ai4good', '2.2-2', 'vinicius'), 'vinicius');
  const start = Date.now();
  assert.equal(await site.aluno(env, 'ai4good', '111', 'andreza'), null);
  assert.ok(Date.now() - start >= 2000);
  assert.equal(await site.aluno(env, 'ai4good', '999'), null);
  assert.equal(await site.aluno(env, 'unknown', '111'), null);
});

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

test('delivered from the header, the matrícula says who the student is', async () => {
  const repo = fakeWorld(PAGE);
  const r = await entrega(post({ page: 'ai4good/disciplina.md', codigo: 'git', matricula: '333', url: 'https://d/2' }));
  assert.deepEqual((await r.json()).nomes, ['andreza']);
  assert.deepEqual(repo.commits, ['entrega: andreza git']);
  const missing = await entrega(post({ page: 'ai4good/disciplina.md', codigo: 'git', matricula: '999', url: 'https://d/2' }));
  assert.equal(missing.status, 401);
  assert.deepEqual(await missing.json(), { error: 'matrícula não encontrada na turma' });
});

test('a wrong matrícula writes nothing', async () => {
  const repo = fakeWorld(PAGE);
  const r = await entrega(post({ page: 'ai4good/disciplina.md', nome: 'andreza', codigo: 'brw', matricula: '111', url: 'https://d/1' }));
  assert.equal(r.status, 401);
  assert.deepEqual(await r.json(), { error: 'essa matrícula não é a de andreza' });
  assert.deepEqual(repo.commits, []);
});

test('a parecer is one escaped cell per student and code; empty removes it; only the teacher writes', async () => {
  const repo = fakeWorld(PAGE);
  const body = { password: 'pw', page: 'ai4good/disciplina.md', nome: 'edson', codigo: 'brw', texto: 'falta a prova.\npasso 3\t\\ fim ' };
  assert.equal((await parecer(post({ ...body, password: 'no' }))).status, 401);
  assert.equal((await parecer(post({ ...body, codigo: 'pitch' }))).status, 400);
  assert.equal((await parecer(post(body))).status, 200);
  assert.equal(repo.files['ai4good/pareceres.tsv'].text, `${site.PARECER_HEAD}edson\tbrw\tfalta a prova.\\npasso 3 \\\\ fim\n`);
  assert.equal((await parecer(post({ ...body, texto: '  ' }))).status, 200);
  assert.equal(repo.files['ai4good/pareceres.tsv'].text, site.PARECER_HEAD);
  assert.deepEqual(repo.commits, ['parecer: edson brw', 'parecer: edson brw']);
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

test('entrega and parecer reread after conflicts and keep their messages when retries run out', async (t) => {
  for (const [handler, file, body, success, error] of [
    [entrega, 'entregas.tsv', { matricula: '333', url: 'https://d/1' }, { nomes: ['andreza'] }, 'muita gente entregando agora: tente de novo em alguns segundos'],
    [parecer, 'pareceres.tsv', { password: 'pw', texto: 'revisar' }, { ok: true }, 'o arquivo mudou agora: tente de novo em alguns segundos'],
  ]) {
    for (const conflicts of [1, 3]) {
      const repo = fakeWorld(PAGE);
      const fetcher = globalThis.fetch;
      const path = `ai4good/${file}`;
      let reads = 0, writes = 0;
      const mock = t.mock.method(globalThis, 'fetch', async (url, init = {}) => {
        if (String(url).includes(`/contents/${path}`)) {
          if (!init.method) reads++;
          else {
            assert.equal(JSON.parse(init.body).sha, repo.files[path]?.sha);
            if (++writes <= conflicts) {
              repo.files[path] = { text: `edson\tgit\tconcurrent-${writes}\n`, sha: `race${writes}` };
              return { ok: false, status: 409 };
            }
          }
        }
        return fetcher(url, init);
      });
      const r = await handler(post({ page: 'ai4good/disciplina.md', nome: 'andreza', codigo: 'brw', ...body }));
      assert.equal(r.status, conflicts === 3 ? 409 : 200);
      assert.deepEqual(await r.json(), conflicts === 3 ? { error } : success);
      assert.equal(reads, conflicts === 3 ? 3 : 2);
      assert.equal(writes, reads);
      assert.equal(repo.commits.length, conflicts === 3 ? 0 : 1);
      if (conflicts === 1) {
        assert.ok(repo.files[path].text.includes('edson\tgit\tconcurrent-1\n'));
        assert.ok(repo.files[path].text.includes(`andreza\tbrw\t${body.url || body.texto}\n`));
      }
      mock.mock.restore();
    }
  }
});

// painel.js draws the panel from its data block: stripped of its spans, it must be painel.py's drawing, character for character
const P = await import(`${L}/painel.js`);
const COURSE = `${L}/ai4good/disciplina.md`; // the published mirror: cfpages publish keeps it equal to the workspace page
test('the clickable panel is the text painel.py drew, on the real page', async () => {
  const md = (await import('node:fs')).readFileSync(COURSE, 'utf8');
  const panels = P.parse(md);
  assert.ok(panels.length >= 2);
  for (const { id, rows } of panels) {
    const html = P.draw(id, rows, new Set(), () => ({ title: '', items: [] }));
    const text = html.replace(/<span class="ln">/g, '\n').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').slice(1);
    const drawn = md.match(new RegExp(`<!-- painel-${id}:start -->\n\`\`\`text\n([\\s\\S]*?)\n\`\`\``))[1];
    assert.equal(text.split('\n').map((l) => l.trimEnd()).join('\n'), drawn);
    for (const [name, items] of rows) for (const [code] of items) assert.ok(site.hasSlot(md, name, code), `${name} ${code}`);
  }
});

test('remark changes one student, one code, one panel', () => {
  const md = '<!-- painel:dados-va1\nana: git=---, tex=----\nbia: git=---, tex=----\n-->\n<!-- painel:dados-va2\nana: git=---\n-->';
  assert.equal(P.remark(md, 'va1', 'ana', 'tex', 'vv--'), md.replace('ana: git=---, tex=----', 'ana: git=---, tex=vv--'));
  assert.equal(P.remark(md, 'va1', 'bia', 'git', 'v--'), md.replace('bia: git=---', 'bia: git=v--'));
});

test('an artefato names its code and items; the legend names the rest', () => {
  const a = P.artefato('# [3] artefato · base git repo\n\n> **código no painel:** `git`  \n\n1. [ ] **commit inaugural:** x\n2. [ ] **árvore integrada:** y\n', 'artefatos/3.md');
  assert.deepEqual(a, { code: 'git', title: 'base git repo', doc: 'artefatos/3.md', items: ['commit inaugural', 'árvore integrada'] });
  assert.deepEqual(P.legend('> **cmp:** competidores · **artigo** técnico final\n'), { cmp: 'competidores', artigo: 'artigo técnico final' });
});

test('readTsv gives back the parecer the server escaped, line breaks and backslashes intact', () => {
  const text = 'linha 1\nlinha 2 \\ com barra';
  const tsv = site.upsert('', 'edson', 'brw', site.cell(text), site.PARECER_HEAD);
  assert.equal(P.readTsv(tsv, true).get('edson\tbrw'), text);
  assert.equal(P.readTsv(`${site.TSV_HEAD}andreza\tgit\thttps://a/\n`).get('andreza\tgit'), 'https://a/');
});
