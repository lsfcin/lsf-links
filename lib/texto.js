// texto.js — a page's markdown inside its own HTML, for a reader that runs no JavaScript (NotebookLM, curl,
// a search engine): the viewer page is a shell that says "carregando...", and without this that is all they get.
// Shared by both Cloudflare sites: lucassf.pages.dev (functions/_middleware.js) and ufrpe.pages.dev, whose
// build (academy/administration/ufrpe-sites/publicar.py) takes this file from main.

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// The script runs before the <pre> is parsed, so a browser never shows the raw text; the viewer then replaces #app.
const ESCONDE = '<script>document.documentElement.classList.add("js")</script><style>.js #bruto{display:none}#bruto{white-space:pre-wrap}</style>';

// Which .md the page shows: ?doc= first, then <body data-markdown>, the same order the viewers read.
// Only a .md of the same site; anything else leaves the page as it is.
export function alvo(html, url) {
  const doc = url.searchParams.get('doc') || html.match(/<body\b[^>]*\sdata-markdown="([^"]+)"/)?.[1];
  if (!doc) return null;
  const md = new URL(doc, url);
  return md.origin === url.origin && md.pathname.endsWith('.md') ? new URL(md.pathname, url.origin) : null;
}

// The text goes inside #app, where "carregando..." was; the page keeps everything else.
export function embutir(html, md) {
  return html.replace(/(<div\b[^>]*\bid="app"[^>]*>)[\s\S]*?(<\/div>)/, (_, abre, fecha) => `${abre}${ESCONDE}<pre id="bruto">${esc(md)}</pre>${fecha}`);
}

// A Pages Function step. Only a GET answered 200 with HTML is touched: a short name's 302, the .md itself
// and every asset pass as they came. A page naming a .md the deploy lacks is a real 404, not the shell.
export async function comTexto({ request, env, next }) {
  const res = await next();
  if (request.method !== 'GET' || res.status !== 200 || !(res.headers.get('content-type') || '').includes('text/html')) return res;
  const html = await res.text();
  const igual = () => new Response(html, res);
  try {
    const url = new URL(request.url);
    const md = alvo(html, url);
    if (!md) return igual();
    const doc = await env.ASSETS.fetch(md.href);
    if (!doc.ok || (doc.headers.get('content-type') || '').includes('text/html')) {
      const nada = await env.ASSETS.fetch(new URL('/404.html', url.origin).href);
      return new Response(nada.ok ? await nada.text() : 'não encontrado', { status: 404, headers: { 'content-type': 'text/html; charset=utf-8' } });
    }
    const headers = new Headers(res.headers);
    // Every ?doc= of one page shares the shell's ETag; without this a browser would keep a stale document.
    headers.delete('etag');
    headers.delete('content-length');
    headers.set('cache-control', 'no-cache');
    return new Response(embutir(html, await doc.text()), { status: 200, headers });
  } catch {
    return igual();
  }
}
