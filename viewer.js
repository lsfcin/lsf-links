document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app');
  const params = new URLSearchParams(window.location.search);
  const docFile = params.get('doc') || document.body.dataset.markdown;

  if (!docFile) {
    app.innerHTML = '<p>Nenhum documento especificado.</p>';
    return;
  }

  // Processa GitHub Alerts antes do marked
  const alertRegex = /^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*$(?:\r?\n>.*)*/gim;
  const alertIcons = {
    NOTE: 'ℹ️ Nota',
    TIP: '💡 Dica',
    IMPORTANT: '📌 Importante',
    WARNING: '⚠️ Atenção',
    CAUTION: '🛑 Cuidado'
  };

  // one renderer for the page and the editor's preview, so the preview is what the page will show
  function render(md) {
    let processed = md.replace(alertRegex, (match) => {
      const lines = match.split(/\r?\n/);
      const typeMatch = lines[0].match(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i);
      const type = typeMatch ? typeMatch[1].toUpperCase() : 'NOTE';
      const bodyLines = lines.slice(1).map(l => l.replace(/^>\s?/, '')).join('\n');
      return `\n<div class="markdown-alert markdown-alert-${type.toLowerCase()}"><div class="markdown-alert-title">${alertIcons[type]}</div>\n\n${bodyLines}\n</div>\n`;
    });
    if (window.marked) {
      marked.setOptions({ gfm: true, breaks: false });
      processed = marked.parse(processed);
    }
    // Envolve tabelas em wrappers com scroll horizontal responsivo
    return processed.replace(/<table>/g, '<div class="table-wrapper"><table>').replace(/<\/table>/g, '</table></div>');
  }

  try {
    const res = await fetch(docFile);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    let rawMarkdown = await res.text();

    const titleMatch = rawMarkdown.match(/^#\s+(.+)$/m);
    if (titleMatch) document.title = titleMatch[1];

    // URLs e metadados dinâmicos
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const dir = document.body.dataset.dir || (pathSegments.length > 1 ? pathSegments[0] : (pathSegments[0] && !pathSegments[0].endsWith('.html') ? pathSegments[0] : 'techedu'));
    const pageCanonical = document.body.dataset.canonical || `academy/teaching/${dir}/`;
    // a doc opened through ?doc= lives beside the page: its canonical and public paths follow docFile
    const canonicalPath = params.get('doc') ? pageCanonical.replace(/[^/]*$/, '') + docFile : pageCanonical;
    const pageDir = `/${dir}/`;
    const rawUrl = pageDir + docFile;
    const sitePath = `${dir}/${docFile}`; // the path the editor and the slots write to
    const githubWebUrl = `https://github.com/lsfcin/lsf-links/blob/main/${dir}/${docFile}`;

    app.innerHTML = `
      <article class="markdown-body">${render(rawMarkdown)}</article>
      <footer>
        <div class="footer-actions">
          <button class="btn" id="copy-btn">copiar p/ IA (texto puro)</button>
          <a class="btn" href="${rawUrl}" target="_blank" rel="noopener">ver texto puro (raw)</a>
          <button class="btn" id="edit-btn">editar</button>
        </div>
        <div class="footer-meta">
          <div>fonte canônica: <code>${canonicalPath}</code></div>
          <div>deploy via <a href="https://pages.cloudflare.com/" target="_blank">cloudflare pages</a> · <a href="${githubWebUrl}" target="_blank">repositório público</a></div>
        </div>
      </footer>
      <div class="toast" id="toast"></div>
    `;
    const article = app.querySelector('article');
    const toast = document.getElementById('toast');
    const say = (text) => {
      toast.textContent = text;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2600);
    };

    // Links to our own .md open formatted, through this viewer, with the same footer
    const docBase = new URL(docFile, window.location.origin + pageDir);
    function relink(root) {
      root.querySelectorAll('a[href]').forEach((a) => {
        const href = a.getAttribute('href');
        if (/^([a-z]+:|\/\/|#)/i.test(href)) return;
        const target = new URL(href, docBase);
        if (!target.pathname.endsWith('.md') || !target.pathname.startsWith(pageDir)) return;
        a.href = `${pageDir}?doc=${encodeURIComponent(target.pathname.slice(pageDir.length))}${target.hash}`;
      });
    }
    relink(article);

    // Botão de cópia
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(rawMarkdown);
        say('markdown copiado para a área de transferência!');
        copyBtn.innerText = 'copiado!';
        setTimeout(() => { copyBtn.innerText = 'copiar p/ IA (texto puro)'; }, 2200);
      } catch (err) {
        window.location.href = rawUrl;
      }
    });

    // Editing and the delivery slots live in editor.js (the cap: core/norms/cap.md)
    const ed = document.createElement('script');
    ed.src = '/editor.js';
    ed.onload = () => window.lsfEditor({
      article, render, relink, say, sitePath, pageDir,
      get raw() { return rawMarkdown; },
      set raw(v) { rawMarkdown = v; },
    });
    document.head.appendChild(ed);

  } catch (e) {
    app.innerHTML = `<p style="color: red;">Erro ao carregar documento: ${e.message}</p>`;
  }
});
