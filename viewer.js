document.addEventListener('DOMContentLoaded', async () => {
  const app = document.getElementById('app');
  const params = new URLSearchParams(window.location.search);
  const docFile = params.get('doc') || document.body.dataset.markdown;

  if (!docFile) {
    app.innerHTML = '<p>Nenhum documento especificado.</p>';
    return;
  }

  try {
    const res = await fetch(docFile);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rawMarkdown = await res.text();

    // Extrai o primeiro título # para o <title> da página
    const titleMatch = rawMarkdown.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      document.title = `${titleMatch[1]} · TecEdu`;
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

    let processed = rawMarkdown.replace(alertRegex, (match) => {
      const lines = match.split(/\r?\n/);
      const firstLine = lines[0];
      const typeMatch = firstLine.match(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i);
      const type = typeMatch ? typeMatch[1].toUpperCase() : 'NOTE';
      const bodyLines = lines.slice(1).map(l => l.replace(/^>\s?/, '')).join('\n');
      return `\n<div class="markdown-alert markdown-alert-${type.toLowerCase()}"><div class="markdown-alert-title">${alertIcons[type]}</div>\n\n${bodyLines}\n</div>\n`;
    });

    // Configura marked
    if (window.marked) {
      marked.setOptions({
        gfm: true,
        breaks: false
      });
      processed = marked.parse(processed);
    }

    // Envolve tabelas em wrappers com scroll horizontal responsivo
    processed = processed.replace(/<table>/g, '<div class="table-wrapper"><table>');
    processed = processed.replace(/<\/table>/g, '</table></div>');

    // URLs e metadados dinâmicos
    const fileName = docFile.split('/').pop();
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const dir = document.body.dataset.dir || (pathSegments.length > 1 ? pathSegments[0] : (pathSegments[0] && !pathSegments[0].endsWith('.html') ? pathSegments[0] : 'techedu'));
    const courseTitle = document.body.dataset.course || 'Tecnologias na Educação · 2026.2';
    const canonicalPath = document.body.dataset.canonical || `academy/teaching/${dir}/`;
    const rawUrl = docFile;
    const githubDevUrl = `https://github.dev/lsfcin/lsf-links/blob/main/${dir}/${fileName}`;
    const githubWebUrl = `https://github.com/lsfcin/lsf-links/blob/main/${dir}/${fileName}`;

    app.innerHTML = `
      <div class="top-bar">
        <div class="top-bar-meta">
          <span>🎓 <strong>${courseTitle}</strong></span>
        </div>
        <div class="top-bar-actions">
          <button class="btn btn-primary" id="copy-btn">📋 Copiar p/ Agente (RAW)</button>
          <a class="btn" href="${rawUrl}" target="_blank" rel="noopener">⬇️ Ver RAW</a>
          <a class="btn" href="${githubDevUrl}" target="_blank" rel="noopener" title="Editar online via VS Code no navegador">✏️ Editar (github.dev)</a>
        </div>
      </div>
      <article class="markdown-body">
        ${processed}
      </article>
      <footer>
        <div>Fonte canônica: <code>${canonicalPath}</code></div>
        <div>Deploy via <a href="https://pages.cloudflare.com/" target="_blank">Cloudflare Pages</a> · <a href="${githubWebUrl}" target="_blank">Repositório Público</a></div>
      </footer>
      <div class="toast" id="toast">Markdown copiado para a área de transferência!</div>
    `;

    // Botão de cópia
    const copyBtn = document.getElementById('copy-btn');
    const toast = document.getElementById('toast');
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(rawMarkdown);
        toast.classList.add('show');
        copyBtn.innerText = '✓ Copiado!';
        setTimeout(() => {
          toast.classList.remove('show');
          copyBtn.innerText = '📋 Copiar p/ Agente (RAW)';
        }, 2200);
      } catch (err) {
        window.location.href = rawUrl;
      }
    });

  } catch (e) {
    app.innerHTML = `<p style="color: red;">Erro ao carregar documento: ${e.message}</p>`;
  }
});
