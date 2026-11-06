// The enigma deck rule, pure: order a student's cards, serve a round of 2 easy + 1 hard, grade it, and
// say what may leave the server. No I/O; crypto.subtle only, so it runs in Node and in Workers.
const labels = ['A', 'B', 'C', 'D', 'E'];

// Sign text with the secret's literal UTF-8 bytes and return lowercase hex.
export async function hmacHex(secret, msg) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(msg));
  return Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

// Order ids or original letters by their full HMAC hex strings.
async function ordered(values, secret, prefix) {
  const signed = await Promise.all(values.map(async (value) => ({
    value, hex: await hmacHex(secret, `${prefix}|${value}`),
  })));
  signed.sort((a, b) => a.hex < b.hex ? -1 : a.hex > b.hex ? 1 : 0);
  return signed.map(({ value }) => value);
}

// Create the initial queue and empty round history for one student and bank.
export async function novo(banco, matricula, secret) {
  const ids = [...banco.faceis, ...banco.dificeis].map((q) => q.id);
  return {
    versao: banco.versao,
    baralho: await ordered(ids, secret, `ordem|${matricula}|${banco.stem}`),
    acertos: [], n: 0, aberta: null, ultima: null, fechou: false,
  };
}

// Reuse an open round or select two easy cards and one hard, falling back to successes.
export async function servir(estado, banco, matricula, secret) {
  if (estado.aberta) return { estado, rodada: estado.aberta };
  const available = [...estado.baralho, ...estado.acertos];
  const easy = new Set(banco.faceis.map((q) => q.id));
  const hard = new Set(banco.dificeis.map((q) => q.id));
  const ids = [
    ...available.filter((id) => easy.has(id)).slice(0, 2),
    available.find((id) => hard.has(id)),
  ];
  const n = estado.n + 1;
  const rodada = { n, ids, versao: banco.versao, combos: {}, letras: {} };
  await Promise.all(ids.map(async (id) => {
    const q = banco.faceis.find((q) => q.id === id);
    if (q) {
      rodada.letras[id] = await ordered(Object.keys(q.alternativas), secret,
        `letras|${matricula}|${banco.stem}|${id}|${n}`);
    } else {
      const q = banco.dificeis.find((q) => q.id === id);
      const hex = await hmacHex(secret, `combo|${matricula}|${banco.stem}|${id}|${n}|${banco.versao}`);
      // Eight hex digits represent the first four bytes as an unsigned big-endian integer.
      rodada.combos[id] = parseInt(hex.slice(0, 8), 16) % q.combos.length;
    }
  }));
  return { estado: { ...estado, aberta: rodada }, rodada };
}

// Parse a finite numeric answer, including decimal commas, without coercing empty values.
function numero(given) {
  if (typeof given !== 'number' && typeof given !== 'string') throw { status: 400 };
  if (typeof given === 'string') {
    if (!given.trim()) throw { status: 400 };
    given = Number(given.trim().replace(',', '.'));
  }
  if (!Number.isFinite(given)) throw { status: 400 };
  return given;
}

// Grade a round atomically, preserving previous results on resend and closure forever.
export async function corrigir(estado, banco, n, respostas, matricula, secret) {
  if (estado.ultima && n === estado.ultima.n) {
    return { estado, resultados: estado.ultima.resultados, fechou: estado.ultima.fechou };
  }
  if (!estado.aberta || n !== estado.aberta.n) throw { status: 409 };
  const rodada = estado.aberta;
  const resultados = rodada.ids.map((id) => {
    const q = banco.faceis.find((q) => q.id === id);
    if (q) {
      const i = labels.indexOf(String(respostas[id] ?? '').trim().toUpperCase());
      if (i < 0 || i >= rodada.letras[id].length) throw { status: 400 };
      const original = rodada.letras[id][i];
      const certo = original === q.correta;
      return { id, certo, feedback: [certo ? q.parabens : q.feedback[original]] };
    }
    const hard = banco.dificeis.find((q) => q.id === id);
    const combo = hard.combos[rodada.combos[id]];
    const given = numero(respostas[id]);
    const certo = Math.abs(given - combo.valor) <= hard.tolerancia + 1e-9;
    const feedback = certo ? [hard.parabens] : combo.erros
      .filter((erro) => Math.abs(given - erro.valor) <= hard.tolerancia)
      .map((erro) => erro.feedback);
    if (!feedback.length) feedback.push('não bate com nenhum erro previsto: refaça as etapas com calma');
    return { id, certo, feedback };
  });
  let baralho = [...estado.baralho], acertos = [...estado.acertos];
  for (const { id, certo } of resultados) {
    if (certo) {
      if (baralho.includes(id)) {
        baralho = baralho.filter((other) => other !== id);
        acertos.push(id);
      }
    } else {
      baralho = [...baralho.filter((other) => other !== id), id];
      acertos = acertos.filter((other) => other !== id);
    }
  }
  const fechou = estado.fechou || resultados.every((r) => r.certo);
  const ultima = { n, resultados, fechou };
  return {
    estado: { ...estado, baralho, acertos, n, aberta: null, ultima, fechou },
    resultados, fechou,
  };
}

// Expose only prompts and relabelled easy alternatives for the stored round.
export function publico(rodada, banco) {
  return rodada.ids.map((id) => {
    const q = banco.faceis.find((q) => q.id === id);
    if (q) {
      return {
        id, tipo: 'facil', enunciado: q.enunciado,
        alternativas: Object.fromEntries(rodada.letras[id].map((original, i) => [labels[i], q.alternativas[original]])),
      };
    }
    const hard = banco.dificeis.find((q) => q.id === id);
    return { id, tipo: 'dificil', enunciado: hard.combos[rodada.combos[id]].enunciado };
  });
}
