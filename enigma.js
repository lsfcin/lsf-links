// enigma.js — the three-card enigma rounds opened from a student's panel box.
(() => {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  window.lsfEnigma = (el, opts) => {
    const { popover, post, page, caixa, nome } = opts;
    if (!document.querySelector('link[data-lsf-enigma]')) {
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = '/enigma.css';
      css.setAttribute('data-lsf-enigma', '');
      document.head.appendChild(css);
    }
    const title = `<div class="popover-title">enigma · ${esc(nome)}</div>`;
    let matricula;

    // The editor removes the submitted form on success, so each step opens a new one.
    function show(html, submit, ok, focus) {
      popover(el, `${title}${html}`, submit, ok);
      const form = document.querySelector('.popover');
      form.classList.add('enigma-popover');
      form.querySelector(focus)?.focus();
    }

    function cards(questoes, respostas = null, resultados = []) {
      return `<div class="enigma-cards">${questoes.map((q, k) => {
        const result = resultados.find((r) => r.id === q.id);
        const state = result ? (result.certo ? ' enigma-right' : ' enigma-wrong') : '';
        const answer = respostas?.[q.id] || '';
        const input = q.tipo === 'facil'
          ? ['A', 'B', 'C', 'D', 'E'].map((a) => `<label class="enigma-choice"><input type="radio" name="${esc(q.id)}" value="${a}"${answer === a ? ' checked' : ''} required><span>${a}) ${esc(q.alternativas[a])}</span></label>`).join('')
          : `<label>resposta (número; vírgula ou ponto)<input name="${esc(q.id)}" inputmode="decimal" autocomplete="off" value="${esc(answer)}" required></label>`;
        const feedback = result ? `<div class="enigma-result"><p>${result.certo ? '✓ certa' : '✗ incorreta'}</p>${result.feedback.map((s) => `<p>${esc(s)}</p>`).join('')}</div>` : '';
        return `<fieldset class="enigma-card${state}"${respostas ? ' disabled' : ''}><legend tabindex="-1">questão ${k + 1} de 3</legend><p class="enigma-question">${esc(q.enunciado)}</p>${input}${feedback}</fieldset>`;
      }).join('')}</div>`;
    }

    async function round() {
      const data = await post('tentativa', { page, caixa, matricula });
      if (data.fechou) {
        show('<p role="status" aria-live="polite" tabindex="-1">◼ esta caixa já está fechada.</p>', null, 'ok', '[role="status"]');
        return;
      }
      const { n, questoes } = data;
      show(cards(questoes), async (respostas) => {
        const { resultados, fechou } = await post('tentativa', { page, caixa, matricula, n, respostas });
        const certas = resultados.filter((r) => r.certo).length;
        const summary = fechou ? '◼ caixa fechada!' : `${certas} de 3 certas. tente as 3 na mesma rodada.`;
        show(`${cards(questoes, respostas, resultados)}<p role="status" aria-live="polite" tabindex="-1">${summary}</p>`, fechou ? null : round, 'nova rodada', '[role="status"]');
        if (fechou) opts.onClose?.();
      }, 'enviar', 'legend');
    }

    show('<p class="popover-note">3 questões; o ◼ vem com as 3 certas na mesma rodada. sem IA.</p><label>matrícula<input name="matricula" inputmode="numeric" autocomplete="off" required></label>', async (data) => {
      matricula = data.matricula;
      await round();
    }, 'começar', 'input');
  };
})();
