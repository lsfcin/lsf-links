// What the site's Functions share: which files the browser may write, where a delivered link goes in
// a course page, whether that link opens without a login, and the GitHub round trip that commits it.
// The publish repo is the site; a commit here is what `cfpages pull` brings home to the workspace.

const REPO = 'lsfcin/lsf-links';
const BRANCH = 'main';

// Only course pages and their artefacts: everything with a home in the workspace, nothing else.
// viewer.js, _redirects and functions/ are never written from a browser.
export function allowed(path) {
  return typeof path === 'string' && /^(ai4good|techedu)\/[\w\-./]+\.md$/.test(path) && !path.includes('..');
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// The page declares the slots (the student's line under "## entregue" lists the codes); the links
// live in <course>/entregas.tsv, because 240 URLs would push the page past the workspace's size cap.
export function hasSlot(md, name, code) {
  const start = md.search(/^## entregue\s*$/m);
  if (start < 0) return false;
  const line = md.slice(start).match(new RegExp(`^- \\*\\*${escape(name)}\\*\\* \\|.*$`, 'm'));
  return Boolean(line) && line[0].includes(`\`${code}\``);
}

export const TSV_HEAD = '# aluno\tcódigo\tlink — escrito pelo site (functions/api/entrega.js); uma linha por entrega\n';

// One row per (student, code): a new link replaces the old one, never piles up beside it.
export function upsert(tsv, name, code, url) {
  const rows = (tsv || TSV_HEAD).split('\n').filter((l) => l && !(l.split('\t')[0] === name && l.split('\t')[1] === code));
  return [...rows, `${name}\t${code}\t${url}`].join('\n') + '\n';
}

const LOGIN = /accounts\.google\.com|ServiceLogin|\/login|\/signin|\/sign_in/i;

// null when the link may go in; otherwise the sentence the student reads. A slow site lets the link
// in rather than make anyone wait: the check is a courtesy, never a gate on the delivery itself.
export async function linkProblem(url, fetcher = fetch, ms = 3000) {
  let u;
  try { u = new URL(url); } catch { return 'isso não é um link (comece com https://)'; }
  if (u.protocol !== 'https:' || /[\s()]/.test(url)) return 'o link precisa começar com https:// e não ter espaços';
  if (/(^|\.)overleaf\.com$/.test(u.hostname) && !u.pathname.startsWith('/read/')) {
    return 'no overleaf, use o link de leitura: share → link sharing → view only (overleaf.com/read/…)';
  }
  const stop = new AbortController();
  const timer = setTimeout(() => stop.abort(), ms);
  try {
    const res = await fetcher(url, { redirect: 'manual', signal: stop.signal, headers: { 'user-agent': 'Mozilla/5.0' } });
    const to = res.headers.get('location') || '';
    if (res.status >= 300 && res.status < 400 && LOGIN.test(to)) return 'o link pede login: deixe-o público ("qualquer pessoa com o link")';
    if ([401, 403, 404].includes(res.status)) return `o link não abre sem login (erro ${res.status}): deixe-o público`;
    return null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

const enc = (text) => { let b = ''; for (const x of new TextEncoder().encode(text)) b += String.fromCharCode(x); return btoa(b); };
const dec = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\n/g, '')), (c) => c.charCodeAt(0)));

function gh(env, path, init = {}) {
  return fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    ...init,
    headers: { authorization: `Bearer ${env.GITHUB_TOKEN}`, accept: 'application/vnd.github+json', 'user-agent': 'lsf-links', ...(init.headers || {}) },
  });
}

export async function readFile(env, path, { missing = false } = {}) {
  const res = await gh(env, `${path}?ref=${BRANCH}`);
  if (missing && res.status === 404) return { text: '', sha: undefined };
  if (!res.ok) throw new Error(`github ${res.status}`);
  const body = await res.json();
  return { text: dec(body.content), sha: body.sha };
}

// sha is the version the writer started from: GitHub answers 409 when someone saved in between.
export async function writeFile(env, path, text, sha, message) {
  const res = await gh(env, path, { method: 'PUT', body: JSON.stringify({ message, content: enc(text), sha, branch: BRANCH }) });
  if (res.status === 409 || res.status === 422) return { stale: true };
  if (!res.ok) throw new Error(`github ${res.status}`);
  return { sha: (await res.json()).content.sha };
}

async function digest(s) {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)));
}

// Compared as digests, so the time taken never says how much of a guess was right. A wrong guess
// waits 2 s: there is no store here to count attempts, so the delay is what makes guessing slow.
export async function passwordOk(env, given) {
  const [a, b] = await Promise.all([digest(String(given || '')), digest(env.EDIT_PASSWORD || '\0unset')]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  if (diff) await new Promise((r) => setTimeout(r, 2000));
  return diff === 0 && Boolean(env.EDIT_PASSWORD);
}

export const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8' } });
