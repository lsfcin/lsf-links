// editor.js — what writes back to the site: the password-gated editor and the delivery slots.
// viewer.js loads it once the page is drawn and hands over what both use; viewing never waits on it.
window.lsfEditor = (ctx) => {
  const { article, render, relink, say, sitePath, pageDir } = ctx;
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = '/editor.css';
  document.head.appendChild(css);

  const post = async (action, body) => {
    const r = await fetch(`/api/${action}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
    const data = await r.json().catch(() => ({ error: `erro ${r.status}` }));
    if (!r.ok) throw new Error(data.error || `erro ${r.status}`);
    return data;
  };

  // A small form that opens right below what was clicked; one at a time.
  function popover(anchor, html, onSubmit) {
    document.querySelectorAll('.popover').forEach((p) => p.remove());
    const box = document.createElement('form');
    box.className = 'popover';
    box.innerHTML = `${html}<div class="popover-actions"><button type="button" class="btn" data-close>cancelar</button><button class="btn btn-primary">ok</button></div><div class="popover-error"></div>`;
    document.body.appendChild(box);
    const r = anchor.getBoundingClientRect();
    const left = Math.max(8, Math.min(r.left + window.scrollX, window.scrollX + document.documentElement.clientWidth - box.offsetWidth - 8));
    box.style.left = `${left}px`;
    box.style.top = `${r.bottom + window.scrollY + 6}px`;
    box.querySelector('[data-close]').onclick = () => box.remove();
    box.querySelector('input')?.focus();
    box.onsubmit = async (e) => {
      e.preventDefault();
      const err = box.querySelector('.popover-error');
      const ok = box.querySelector('.btn-primary');
      err.textContent = '';
      ok.disabled = true;
      ok.textContent = 'aguarde…';
      try {
        await onSubmit(Object.fromEntries(new FormData(box)));
        box.remove();
      } catch (x) {
        err.textContent = x.message;
        ok.disabled = false;
        ok.textContent = 'ok';
      }
    };
  }

  const linkCode = (c, url) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    c.classList.remove('slot');
    c.replaceWith(a);
    a.appendChild(c);
  };

  // Delivery slots: under "## entregue" the page lists each student's codes; entregas.tsv beside it
  // holds the links. A code with a row becomes a link, one without is a slot its student can fill.
  async function slots(root) {
    const heading = [...root.querySelectorAll('h2')].find((h) => h.textContent.trim() === 'entregue');
    if (!heading) return;
    const tsv = await fetch(`${pageDir}entregas.tsv`, { cache: 'no-store' }).then((r) => (r.ok ? r.text() : '')).catch(() => '');
    const delivered = {};
    tsv.split('\n').filter((l) => l && !l.startsWith('#')).forEach((l) => {
      const [n, c, u] = l.split('\t');
      if (u) delivered[`${n}\t${c}`] = u;
    });
    for (let el = heading.nextElementSibling; el && !/^(H2|HR)$/.test(el.tagName); el = el.nextElementSibling) {
      el.querySelectorAll('li').forEach((li) => {
        const nome = li.querySelector('strong')?.textContent.trim();
        li.querySelectorAll('code').forEach((code) => {
          if (!nome || code.closest('a')) return;
          const url = delivered[`${nome}\t${code.textContent}`];
          if (url) return linkCode(code, url);
          code.classList.add('slot');
          code.tabIndex = 0;
          code.title = `entregar ${code.textContent}`;
          const open = () => popover(code, `
              <div class="popover-title">entregar <code>${code.textContent}</code> · ${nome}</div>
              <label>matrícula<input name="matricula" inputmode="numeric" autocomplete="off" required></label>
              <label>link do artefato<input name="url" type="url" placeholder="https://" required></label>
              <p class="popover-note">confira numa aba anônima que o link abre sem login. no overleaf, use o link de leitura (share → view only: overleaf.com/read/…).</p>`,
            async ({ matricula, url }) => {
              const { nomes } = await post('entrega', { page: sitePath, nome, codigo: code.textContent, matricula, url });
              // the page itself catches up on the next deploy (~1 min); fill the slots now
              root.querySelectorAll('li').forEach((other) => {
                if (!nomes.includes(other.querySelector('strong')?.textContent.trim())) return;
                other.querySelectorAll('code.slot').forEach((c) => {
                  if (c.textContent === code.textContent) linkCode(c, url.trim());
                });
              });
              say('entregue!');
            });
          code.onclick = open;
          code.onkeydown = (e) => { if (e.key === 'Enter') open(); };
        });
      });
    }
  }
  slots(article);

  // The editor opens only after the server accepts the password; the tab remembers it until closed.
  const GENERATED = ['<!-- painel:dados-', '<!-- habilidades:start -->'];
  const remember = (pw) => { try { sessionStorage.setItem('lsf-edit', pw); } catch {} };
  const remembered = () => { try { return sessionStorage.getItem('lsf-edit'); } catch { return null; } };
  const editBtn = document.getElementById('edit-btn');

  async function openEditor(password) {
    const { text, sha } = await post('load', { password, path: sitePath });
    let current = sha;
    document.body.classList.add('editing');
    const pane = document.createElement('div');
    pane.className = 'editor';
    const warn = GENERATED.some((m) => text.includes(m))
      ? '<div class="editor-warn">esta página tem blocos gerados (painel, habilidades): o desenho deles é refeito no próximo publish. edite os dados (painel:dados-…, arvore.yaml), não o desenho.</div>'
      : '';
    pane.innerHTML = `
      <div class="editor-bar">
        <code>${sitePath}</code>
        <span class="editor-actions">
          <button class="btn" data-act="update" title="Ctrl+Enter">atualizar</button>
          <button class="btn btn-primary" data-act="save" title="Ctrl+S">salvar</button>
          <button class="btn" data-act="close">fechar</button>
        </span>
      </div>
      ${warn}
      <div class="editor-split">
        <textarea spellcheck="false"></textarea>
        <article class="markdown-body editor-preview"></article>
      </div>`;
    document.body.appendChild(pane);
    const area = pane.querySelector('textarea');
    const preview = pane.querySelector('.editor-preview');
    area.value = text;
    const update = () => { preview.innerHTML = render(area.value); };
    const save = async () => {
      const btn = pane.querySelector('[data-act=save]');
      btn.disabled = true;
      try {
        current = (await post('save', { password, path: sitePath, text: area.value, sha: current })).sha;
        ctx.raw = area.value;
        article.innerHTML = render(ctx.raw);
        relink(article);
        slots(article);
        say('salvo: no ar em ~1 min');
      } catch (x) {
        say(x.message);
      } finally {
        btn.disabled = false;
      }
    };
    const close = () => {
      if (area.value !== ctx.raw && area.value !== text && !confirm('fechar sem salvar?')) return;
      pane.remove();
      document.body.classList.remove('editing');
    };
    pane.querySelector('[data-act=update]').onclick = update;
    pane.querySelector('[data-act=save]').onclick = save;
    pane.querySelector('[data-act=close]').onclick = close;
    area.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); update(); }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') { e.preventDefault(); save(); }
    });
    update();
    area.focus();
  }

  editBtn.addEventListener('click', async () => {
    const saved = remembered();
    if (saved) {
      try { return await openEditor(saved); } catch { remember(''); }
    }
    popover(editBtn, '<div class="popover-title">editar esta página</div><label>senha<input name="password" type="password" required></label>',
      async ({ password }) => {
        await post('login', { password });
        remember(password);
        await openEditor(password);
      });
  });

};
