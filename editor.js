// editor.js — what writes back to the site: the password-gated editor, and the popover painel.js delivers through.
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

  // A small form that opens right below what was clicked; one at a time. Without onSubmit it only shows.
  function popover(anchor, html, onSubmit, ok = 'ok') {
    document.querySelectorAll('.popover').forEach((p) => p.remove());
    const box = document.createElement('form');
    box.className = 'popover';
    const submit = onSubmit ? `<button class="btn btn-primary">${ok}</button>` : '';
    box.innerHTML = `${html}<div class="popover-actions"><button type="button" class="btn" data-close>${onSubmit ? 'cancelar' : 'fechar'}</button>${submit}</div><div class="popover-error"></div>`;
    document.body.appendChild(box);
    const r = anchor.getBoundingClientRect();
    const left = Math.max(8, Math.min(r.left + window.scrollX, window.scrollX + document.documentElement.clientWidth - box.offsetWidth - 8));
    box.style.left = `${left}px`;
    box.style.top = `${r.bottom + window.scrollY + 6}px`;
    box.querySelector('[data-close]').onclick = () => box.remove();
    box.querySelector('input')?.focus();
    box.onsubmit = async (e) => {
      e.preventDefault();
      if (!onSubmit) return;
      const err = box.querySelector('.popover-error');
      const btn = box.querySelector('.btn-primary');
      err.textContent = '';
      btn.disabled = true;
      btn.textContent = 'aguarde…';
      try {
        await onSubmit(Object.fromEntries(new FormData(box)));
        box.remove();
      } catch (x) {
        err.textContent = x.message;
        btn.disabled = false;
        btn.textContent = ok;
      }
    };
  }

  // The panel (delivery, legend, the teacher's marks) lives in painel.js; the editor re-draws it after a save.
  let painel = () => {};
  const pjs = document.createElement('script');
  pjs.src = '/painel.js';
  pjs.onload = () => { painel = window.lsfPainel(ctx, { popover, post, password: () => remembered() }); };
  document.head.appendChild(pjs);

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
        <div class="editor-handle" title="arraste; duplo clique volta ao meio"></div>
        <article class="markdown-body editor-preview"></article>
      </div>`;
    document.body.appendChild(pane);
    const area = pane.querySelector('textarea');
    const preview = pane.querySelector('.editor-preview');
    area.value = text;
    // the handle between the halves: drag to resize (20–80%), double-click back to half; the browser remembers it
    const split = pane.querySelector('.editor-split');
    const handle = pane.querySelector('.editor-handle');
    const setSplit = (pct) => split.style.setProperty('--split', `${pct}%`);
    try { const s = Number(localStorage.getItem('lsf-split')); if (s) setSplit(s); } catch {}
    const keep = (pct) => { setSplit(pct); try { localStorage.setItem('lsf-split', pct); } catch {} };
    handle.onpointerdown = (e) => {
      e.preventDefault();
      handle.setPointerCapture(e.pointerId);
      const r = split.getBoundingClientRect();
      handle.onpointermove = (m) => setSplit(Math.round(Math.min(80, Math.max(20, ((m.clientX - r.left) / r.width) * 100))));
      handle.onpointerup = () => { handle.onpointermove = null; keep(parseFloat(split.style.getPropertyValue('--split')) || 50); };
    };
    handle.ondblclick = () => keep(50);
    const update = () => { preview.innerHTML = render(area.value); };
    const save = async () => {
      const btn = pane.querySelector('[data-act=save]');
      btn.disabled = true;
      try {
        current = (await post('save', { password, path: sitePath, text: area.value, sha: current })).sha;
        ctx.raw = area.value;
        article.innerHTML = render(ctx.raw);
        relink(article);
        painel();
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
