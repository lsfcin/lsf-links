// painel.js — the course page's progress panel, made clickable: who delivered what, what each box is, and the delivery itself.
// Drawn from the page's own <!-- painel:dados-… --> block, character for character what painel.py draws, with
// spans in it: names stick left, points stick right, and only the boxes scroll. editor.js mounts it.
const NO_SLOT = new Set(['enigmas']); // answered in class: nothing to deliver
const DONE = '◼', PENDING = '◻';
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// [{id, rows: [[name, [[code, marks]]]]}] in page order — the same reading as painel.py parse()
function parse(md) {
  return [...md.matchAll(/<!--\s*painel:dados-([\w-]+)[^\n]*\n([\s\S]*?)-->/g)].map((m) => ({
    id: m[1],
    rows: m[2].trim().split('\n').map((line) => {
      const i = line.indexOf(':');
      return [line.slice(0, i).trim(), line.slice(i + 1).split(',').filter((c) => c.trim()).map((c) => c.trim().split('='))];
    }),
  }));
}

// an artefato file says its code and numbers its items: `código no painel:** \`mlp·c\`` and `1. [ ] **título:**`
function artefato(md, doc) {
  const code = md.match(/código no painel:\*\*\s*`([^`]+)`/);
  if (!code) return null;
  const title = (md.match(/^#\s.*·\s*(.+)$/m) || [])[1] || code[1];
  return { code: code[1], title: title.trim(), doc, items: [...md.matchAll(/^\d+\.\s*\[[ x]\]\s*\*\*([^*]+?):?\*\*/gm)].map((m) => m[1]) };
}

// codes without an artefato are named by the legend under the panel: `> **cmp:** competidores e contribuição`
function legend(md) {
  const out = {};
  md.split('\n').filter((l) => l.startsWith('> **')).forEach((l) => {
    for (const m of l.matchAll(/\*\*([^*]+)\*\*([^·]*)/g)) {
      const colon = m[1].endsWith(':');
      const key = m[1].replace(/:$/, '').trim();
      out[key] = colon ? m[2].trim() : `${key} ${m[2].trim()}`;
    }
  });
  return out;
}

const doneCount = (m) => [...m].filter((x) => x === 'v').length;

// "name\tcode" → value, from a tsv the site writes (entregas.tsv, pareceres.tsv); a parecer cell escapes \n and \\
function readTsv(tsv, unescape = false) {
  const out = new Map();
  tsv.split('\n').filter((l) => l && !l.startsWith('#')).forEach((l) => {
    const [n, c, v] = l.split('\t');
    if (v) out.set(`${n}\t${c}`, unescape ? v.replace(/\\(n|\\)/g, (_, x) => (x === 'n' ? '\n' : '\\')) : v);
  });
  return out;
}

// one panel as HTML whose text is painel.py's drawing; links: Set of "name\tcode", info(code) → {title, items}
function draw(id, rows, links, info) {
  const width = Math.max(...rows.map(([n]) => n.length));
  const live = (c) => (NO_SLOT.has(c) ? ' off"' : '" tabindex="0" role="button"');
  const head = rows[0][1].map(([c, m], gi) => `<span class="hd${live(c)} data-col="${gi}" title="${esc(info(c).title)}">${esc(c)}</span>${' '.repeat(Math.max(0, m.length - c.length))}`).join(' ');
  const lines = rows.map(([name, items], ri) => {
    const groups = items.map(([c, m], gi) => {
      const its = info(c).items;
      const boxes = [...m].map((x, k) => `<span title="${esc(`${k + 1} · ${its[k] || `item ${k + 1}`}`)}">${x === 'v' ? DONE : PENDING}</span>`).join('');
      return `<span class="g${links.has(`${name}\t${c}`) ? ' has' : ''}${live(c)} data-row="${ri}" data-col="${gi}">${boxes}</span>`;
    }).join(' ');
    const pts = String(2 * items.reduce((s, [, m]) => s + doneCount(m), 0)).padStart(2, '0').padStart(3);
    return `<span class="ln"><span class="nm" data-row="${ri}">${' '.repeat(width - name.length)}<span class="who">${esc(name)}</span>   </span>${groups} <span class="pts">${pts} pts</span></span>`;
  });
  const label = `nota ${id.replace(/\D/g, '')}`.padStart(7);
  return `<span class="ln"><span class="nm">${' '.repeat(width + 3)}</span>${head} <span class="pts">${label}</span></span>${lines.join('')}`;
}

// the page text with one student's marks for one code replaced, inside that panel's data block only
function remark(md, id, name, code, marks) {
  return md.replace(new RegExp(`<!--\\s*painel:dados-${reEsc(id)}(?=\\s)[\\s\\S]*?-->`), (block) =>
    block.replace(new RegExp(`^(${reEsc(name)}:(?:[^\\n]*?,)?\\s*${reEsc(code)}=)[v-]+`, 'm'), `$1${marks}`));
}

function mount(ctx, { popover, post, password }) {
  const { article, sitePath, pageDir, say } = ctx;
  const links = new Map(); // "name\tcode" → url
  let notes = new Map(); // "name\tcode" → the teacher's parecer
  const infos = {};
  let names = {};
  const info = (c) => infos[c] || { title: names[c] || names[c.replace(/\d+$/, '')] || c, items: [] };

  function anchorOf(id) {
    const walk = document.createTreeWalker(article, NodeFilter.SHOW_COMMENT);
    for (let n = walk.nextNode(); n; n = walk.nextNode()) {
      if (n.data.trim() !== `painel-${id}:start`) continue;
      let el = n.nextSibling;
      while (el && (el.nodeType !== 1 || el.classList.contains('painel-hint'))) el = el.nextSibling; // the hint sits between, after the first draw
      return el && el.tagName === 'PRE' ? el : null;
    }
    return null;
  }

  function render() {
    names = legend(ctx.raw);
    for (const { id, rows } of parse(ctx.raw)) {
      const pre = anchorOf(id);
      if (!pre) continue;
      pre.classList.add('painel');
      pre.querySelector('code').innerHTML = draw(id, rows, new Set(links.keys()), info);
      if (!pre.previousElementSibling?.classList.contains('painel-hint')) {
        pre.insertAdjacentHTML('beforebegin', '<p class="painel-hint"><span class="has">azul</span> = entregue · cinza = a entregar · toque num código ou nas suas caixas</p>');
      }
      pre.onclick = (e) => { const el = e.target.closest('.g:not(.off), .hd:not(.off)'); if (el) open(id, rows, el); };
      pre.onkeydown = (e) => { const el = e.target.closest('.g:not(.off), .hd:not(.off)'); if (el && e.key === 'Enter') open(id, rows, el); };
      pre.onmouseover = (e) => aim(pre, e, true);
      pre.onmouseout = (e) => aim(pre, e, false);
    }
  }

  function aim(pre, e, on) {
    const el = e.target.closest('.g:not(.off)');
    if (!el) return;
    pre.querySelector(`.hd[data-col="${el.dataset.col}"]`)?.classList.toggle('aim', on);
    pre.querySelector(`.nm[data-row="${el.dataset.row}"]`)?.classList.toggle('aim', on);
  }

  const form = (who) => `${who ? '' : '<p class="popover-note">a matrícula diz quem você é (e marca a sua dupla junto).</p>'}
    <label>matrícula<input name="matricula" inputmode="numeric" autocomplete="off" required></label>
    <label>link do artefato<input name="url" type="url" placeholder="https://" required></label>
    <p class="popover-note">confira numa aba anônima que o link abre sem login. no overleaf, use o link de leitura (share → view only: overleaf.com/read/…).</p>`;

  function open(id, rows, el) {
    const gi = +el.dataset.col;
    const [code, width] = [rows[0][1][gi][0], rows[0][1][gi][1].length];
    const { title, items, doc } = info(code);
    const its = Array.from({ length: width }, (_, k) => items[k] || `item ${k + 1}`);
    const sub = `<div class="popover-note">${esc(title)}${doc ? ` · <a href="${pageDir}?doc=${encodeURIComponent(doc)}" target="_blank" rel="noopener">ver definição ↗</a>` : ''}</div>`;
    const deliver = (nome) => async ({ matricula, url }) => {
      const { nomes } = await post('entrega', { page: sitePath, nome, codigo: code, matricula, url });
      nomes.forEach((n) => links.set(`${n}\t${code}`, url.trim()));
      render();
      say('entregue!');
    };
    if (el.classList.contains('hd')) {
      const n = rows.filter(([name]) => links.has(`${name}\t${code}`)).length;
      return popover(el, `<div class="popover-title"><code>${esc(code)}</code> · artefato</div>${sub}
        <ol class="painel-items">${its.map((t) => `<li>${esc(t)}</li>`).join('')}</ol>
        <div class="popover-note">${width} itens · ${2 * width} pts · ${n}/${rows.length} entregaram</div>${form(null)}`, deliver(undefined), 'entregar');
    }
    const ri = +el.dataset.row;
    const nome = rows[ri][0];
    const marks = rows[ri][1][gi][1];
    const url = links.get(`${nome}\t${code}`);
    const top = `<div class="popover-title"><code>${esc(code)}</code> · ${esc(nome)}</div>${sub}`;
    const score = `<div class="popover-note">${2 * doneCount(marks)}/${2 * width} pts</div>`;
    const openLink = url ? `<a class="btn" href="${esc(url)}" target="_blank" rel="noopener">abrir entrega ↗</a>` : '';
    const note = notes.get(`${nome}\t${code}`) || '';
    const pw = password();
    if (pw) {
      const boxes = [...marks].map((x, k) => `<li><label class="painel-check"><input type="checkbox" name="i${k}"${x === 'v' ? ' checked' : ''}>${esc(its[k])}</label></li>`).join('');
      const noteBox = `<label>parecer (público, como o painel)<textarea name="parecer" placeholder="o que falta para cada item e como chegar lá">${esc(note)}</textarea></label>`;
      return popover(el, `${top}<ul class="painel-items">${boxes}</ul>${score}${noteBox}`, async (data) => {
        const next = its.map((_, k) => (data[`i${k}`] ? 'v' : '-')).join('');
        if (next !== marks) {
          const { text, sha } = await post('load', { password: pw, path: sitePath });
          const changed = remark(text, id, nome, code, next);
          await post('save', { password: pw, path: sitePath, text: changed, sha });
          ctx.raw = changed;
        }
        if (data.parecer.trim() !== note.trim()) {
          await post('parecer', { password: pw, page: sitePath, nome, codigo: code, texto: data.parecer });
          notes.set(`${nome}\t${code}`, data.parecer.trim());
        }
        render();
        say('salvo: no ar em ~1 min');
      }, 'salvar', openLink);
    }
    const list = `<ul class="painel-items">${[...marks].map((x, k) => `<li><span class="painel-box">${x === 'v' ? DONE : PENDING}</span> ${esc(its[k])}</li>`).join('')}</ul>`;
    const shown = `${top}${list}${score}${note ? `<div class="painel-parecer">${esc(note)}</div>` : ''}`;
    if (!url) return popover(el, `${shown}${form(nome)}`, deliver(nome), 'entregar');
    // delivered: the link can be swapped (the marks stay), behind a button so a look never opens a keyboard
    popover(el, shown, null, 'ok', `${openLink}<button type="button" class="btn" data-swap>trocar link</button>`);
    document.querySelector('.popover [data-swap]').onclick = () => popover(el, `${top}${form(nome)}`, deliver(nome), 'trocar', openLink);
  }

  // the legend comes from the artefatos the page links; the links and pareceres from the two tsv beside it
  const docs = [...new Set([...ctx.raw.matchAll(/\]\((artefatos\/[^)\s]+\.md)\)/g)].map((m) => m[1]))];
  const tsv = (name) => fetch(`${pageDir}${name}`, { cache: 'no-store' }).then((r) => (r.ok ? r.text() : '')).catch(() => '');
  Promise.all([
    tsv('entregas.tsv'),
    tsv('pareceres.tsv'),
    ...docs.map((doc) => fetch(`${pageDir}${doc}`).then((r) => (r.ok ? r.text() : '')).then((t) => artefato(t, doc)).catch(() => null)),
  ]).then(([delivered, judged, ...arts]) => {
    readTsv(delivered).forEach((u, k) => links.set(k, u));
    notes = readTsv(judged, true);
    arts.filter(Boolean).forEach((a) => { infos[a.code] = a; });
    render();
  });
  render();
  return render;
}

if (typeof window !== 'undefined') window.lsfPainel = mount;
else globalThis.lsfPainelCore = { parse, artefato, legend, draw, remark, readTsv };
