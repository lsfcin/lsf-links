import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac, webcrypto } from 'node:crypto';
import { hmacHex, novo, servir, corrigir, publico } from '../lib/baralho.js';

globalThis.crypto ??= webcrypto;
const secret = '0123456789abcdef'.repeat(4);
const matricula = '202600123';
const letters = ['A', 'B', 'C', 'D', 'E'];

// Build the small bank without a publisher or external files.
function easy(id, correta) {
  return { id, enunciado: `Questão ${id}`, correta, parabens: `Acertou ${id}`,
    alternativas: { A: 'alfa', B: 'beta', C: 'gama', D: 'delta', E: 'épsilon' },
    feedback: { A: 'erro A', B: 'erro B', C: 'erro C', D: 'erro D', E: 'erro E' } };
}
const banco = {
  stem: 'perceptron', versao: 'v1',
  faceis: [easy('f1', 'A'), easy('f2', 'B'), easy('f3', 'C'), easy('f4', 'D'), easy('f5', 'E'), easy('f6', 'A')],
  dificeis: ['d1', 'd2', 'd3'].map((id) => ({ id, tolerancia: 0.01, parabens: `Acertou ${id}`,
    combos: [
      { enunciado: `Calcule ${id}, caso 0`, valor: 2.5, erros: [
        { valor: 4, feedback: 'reveja o sinal' }, { valor: 4.005, feedback: 'reveja a soma' },
      ] },
      { enunciado: `Calcule ${id}, caso 1`, valor: 7.5, erros: [
        { valor: 4, feedback: 'reveja o sinal' }, { valor: 4.005, feedback: 'reveja a soma' },
      ] },
      { enunciado: `Calcule ${id}, caso 2`, valor: -2.5, erros: [] },
    ] })),
};
const allIds = [...banco.faceis, ...banco.dificeis].map((q) => q.id);

// Compute expectations independently of the module's Web Crypto implementation.
function digest(msg) {
  return createHmac('sha256', secret).update(msg).digest();
}

// Sort ids or letters by the contract's full hexadecimal digest.
function ordered(values, prefix) {
  return [...values].sort((a, b) => digest(`${prefix}|${a}`).toString('hex') < digest(`${prefix}|${b}`).toString('hex') ? -1 : 1);
}

// Make a valid state with a chosen queue and chronological success list.
async function state(queue, successes = allIds.filter((id) => !queue.includes(id))) {
  return { ...await novo(banco, matricula, secret), baralho: [...queue], acertos: [...successes] };
}

// Serve the next round with the shared fixture identity.
function serve(estado) {
  return servir(estado, banco, matricula, secret);
}

// Grade fixture answers against a stored round.
function grade(estado, respostas, n = estado.aberta.n) {
  return corrigir(estado, banco, n, respostas, matricula, secret);
}

// Answer using displayed letters and the selected numeric combo.
function answers(rodada, right = true) {
  return Object.fromEntries(rodada.ids.map((id) => {
    const q = banco.faceis.find((q) => q.id === id);
    if (q) {
      const original = right ? q.correta : letters.find((l) => l !== q.correta);
      return [id, letters[rodada.letras[id].indexOf(original)]];
    }
    const hard = banco.dificeis.find((q) => q.id === id);
    return [id, right ? String(hard.combos[rodada.combos[id]].valor) : '999'];
  }));
}

// Check both the count invariant and the stronger no-loss/no-duplicate property.
function conserved(estado) {
  assert.equal(estado.baralho.length + estado.acertos.length, 9);
  assert.deepEqual([...estado.baralho, ...estado.acertos].sort(), [...allIds].sort());
}

test('HMAC-SHA256 uses the literal UTF-8 secret, not hex-decoded bytes', async () => {
  const msg = 'matrícula|ação';
  assert.equal(await hmacHex(secret, msg), digest(msg).toString('hex'));
  assert.notEqual(await hmacHex(secret, msg), createHmac('sha256', Buffer.from(secret, 'hex')).update(msg).digest('hex'));
});

test('new states have nine HMAC-ordered ids and the exact initial fields', async () => {
  const estado = await novo(banco, matricula, secret);
  assert.deepEqual(estado, { versao: banco.versao,
    baralho: ordered(allIds, `ordem|${matricula}|${banco.stem}`),
    acertos: [], n: 0, aberta: null, ultima: null, fechou: false });
  assert.deepEqual(await novo(banco, matricula, secret), estado);
  conserved(estado);
});

test('two independent calls choose the same ids, unsigned BE combo and letter permutations', async () => {
  const first = await serve(await novo(banco, matricula, secret));
  const second = await serve(await novo(banco, matricula, secret));
  assert.deepEqual(first, second);
  const { estado, rodada } = first;
  assert.equal(estado.n, 0);
  assert.equal(rodada.n, 1);
  assert.equal(rodada.versao, banco.versao);
  assert.deepEqual(rodada.ids, [
    ...estado.baralho.filter((id) => id.startsWith('f')).slice(0, 2),
    estado.baralho.find((id) => id.startsWith('d')),
  ]);
  for (const id of rodada.ids.slice(0, 2)) {
    assert.deepEqual(rodada.letras[id], ordered(letters, `letras|${matricula}|${banco.stem}|${id}|1`));
  }
  const id = rodada.ids[2];
  const hash = digest(`combo|${matricula}|${banco.stem}|${id}|1|${banco.versao}`);
  assert.equal(rodada.combos[id], hash.readUInt32BE(0) % 3);
  conserved(estado);
});

test('every hard id uses the round number and bank version in its unsigned combo', async () => {
  for (let n = 1; n <= 8; n++) {
    for (const id of ['d1', 'd2', 'd3']) {
      const s = { ...await state(['f1', 'f2', id]), n: n - 1 };
      const { rodada } = await serve(s);
      assert.equal(rodada.combos[id], digest(`combo|${matricula}|${banco.stem}|${id}|${n}|v1`).readUInt32BE(0) % 3);
      assert.deepEqual(rodada.letras.f1, ordered(letters, `letras|${matricula}|${banco.stem}|f1|${n}`));
    }
  }
  const revised = { ...banco, versao: 'v2' };
  const { rodada } = await servir(await novo(revised, matricula, secret), revised, matricula, secret);
  const id = rodada.ids[2];
  assert.equal(rodada.versao, 'v2');
  assert.equal(rodada.combos[id], digest(`combo|${matricula}|${banco.stem}|${id}|1|v2`).readUInt32BE(0) % 3);
});

test('serving stores exactly the round metadata without mutating the input state or bank', async () => {
  const original = await novo(banco, matricula, secret);
  const snapshot = structuredClone({ original, banco });
  const { estado, rodada } = await serve(original);
  assert.deepEqual({ original, banco }, snapshot);
  assert.deepEqual(estado.aberta, rodada);
  assert.deepEqual(Object.keys(rodada).sort(), ['combos', 'ids', 'letras', 'n', 'versao']);
  assert.deepEqual(Object.keys(rodada.combos), [rodada.ids[2]]);
  assert.deepEqual(Object.keys(rodada.letras).sort(), rodada.ids.slice(0, 2).sort());
});

test('reload returns the same open round and leaves the state untouched', async () => {
  const { estado, rodada } = await serve(await novo(banco, matricula, secret));
  const snapshot = structuredClone(estado);
  const reloaded = await serve(estado);
  assert.deepEqual(reloaded, { estado: snapshot, rodada });
  assert.deepEqual(estado, snapshot);
});

test('wrong ids move to the queue tail in card order', async () => {
  const { estado, rodada } = await serve(await novo(banco, matricula, secret));
  const expected = [...estado.baralho.filter((id) => !rodada.ids.includes(id)), ...rodada.ids];
  const result = await grade(estado, answers(rodada, false));
  assert.deepEqual(result.estado.baralho, expected);
  assert.deepEqual(result.estado.acertos, []);
  assert.ok(result.resultados.every((r) => !r.certo));
  conserved(result.estado);
});

test('right cards leave the queue, append to successes, and 3/3 closes', async () => {
  const { estado, rodada } = await serve(await novo(banco, matricula, secret));
  const result = await grade(estado, answers(rodada));
  assert.deepEqual(result.estado.baralho, estado.baralho.filter((id) => !rodada.ids.includes(id)));
  assert.deepEqual(result.estado.acertos, rodada.ids);
  assert.equal(result.fechou, true);
  assert.equal(result.estado.fechou, true);
  assert.equal(result.estado.n, rodada.n);
  assert.equal(result.estado.aberta, null);
  assert.deepEqual(result.estado.ultima, { n: rodada.n, resultados: result.resultados, fechou: true });
  assert.deepEqual(result.resultados, rodada.ids.map((id) => ({ id, certo: true, feedback: [`Acertou ${id}`] })));
  conserved(result.estado);
});

test('2/3 does not close, including when the remaining queue is exhausted', async () => {
  const { estado, rodada } = await serve(await state(['f1', 'f2', 'd1']));
  const respostas = answers(rodada);
  respostas.d1 = '999';
  const result = await grade(estado, respostas);
  assert.equal(result.resultados.filter((r) => r.certo).length, 2);
  assert.equal(result.fechou, false);
  assert.equal(result.estado.fechou, false);
  assert.deepEqual(result.estado.baralho, ['d1']);
  conserved(result.estado);
});

test('serve fills missing easy cards from the oldest successes after queued easy cards', async () => {
  const { rodada } = await serve(await state(['d2', 'f3', 'd1'], ['f6', 'd3', 'f1', 'f5', 'f2', 'f4']));
  assert.deepEqual(rodada.ids, ['f3', 'f6', 'd2']);
});

test('serve falls back to the oldest hard success when only easy ids remain queued', async () => {
  const { rodada } = await serve(await state(['f4', 'f2'], ['f6', 'd3', 'f1', 'd1', 'f3', 'd2', 'f5']));
  assert.deepEqual(rodada.ids, ['f4', 'f2', 'd3']);
});

test('an empty queue still serves two easy and one hard from the oldest successes', async () => {
  const { rodada } = await serve(await state([], ['d2', 'f6', 'f3', 'd1', 'f1', 'f2', 'f4', 'd3', 'f5']));
  assert.deepEqual(rodada.ids, ['f6', 'f3', 'd2']);
});

test('right-from-acertos stays in its chronological position', async () => {
  const { estado, rodada } = await serve(await state(['d1']));
  const old = [...estado.acertos];
  const respostas = answers(rodada);
  respostas.d1 = '999';
  const result = await grade(estado, respostas);
  assert.deepEqual(result.estado.acertos, old);
  assert.deepEqual(result.estado.baralho, ['d1']);
  assert.equal(result.fechou, false);
  conserved(result.estado);
});

test('a correct hard card from acertos stays in place while queued easy cards move', async () => {
  const { estado, rodada } = await serve(await state(['f1', 'f2']));
  const old = [...estado.acertos];
  const result = await grade(estado, answers(rodada));
  assert.deepEqual(result.estado.acertos, [...old, 'f1', 'f2']);
  assert.deepEqual(result.estado.baralho, []);
  assert.equal(result.fechou, true);
  conserved(result.estado);
});

test('an empty queue provides no exception to requiring 3/3 in the same round', async () => {
  const { estado, rodada } = await serve(await state([]));
  const respostas = answers(rodada);
  respostas[rodada.ids[2]] = '999';
  const result = await grade(estado, respostas);
  assert.equal(result.fechou, false);
  assert.equal(result.estado.fechou, false);
  assert.deepEqual(result.estado.baralho, [rodada.ids[2]]);
  conserved(result.estado);
});

test('wrong-from-acertos is removed from successes and appended to the queue', async () => {
  const { estado, rodada } = await serve(await state(['d1']));
  const result = await grade(estado, answers(rodada, false));
  assert.deepEqual(result.estado.acertos, estado.acertos.filter((id) => !rodada.ids.includes(id)));
  assert.deepEqual(result.estado.baralho, rodada.ids);
  conserved(result.estado);
});

test('shuffled shown letters map back for both correct answers and wrong feedback', async () => {
  const { estado, rodada } = await serve(await state(['f1', 'f2', 'd1']));
  const respostas = answers(rodada);
  const q = banco.faceis[0];
  assert.notEqual(respostas.f1, q.correta);
  const wrongOriginal = 'E';
  respostas.f2 = letters[rodada.letras.f2.indexOf(wrongOriginal)];
  const result = await grade(estado, respostas);
  assert.deepEqual(result.resultados[0], { id: 'f1', certo: true, feedback: [q.parabens] });
  assert.deepEqual(result.resultados[1], { id: 'f2', certo: false, feedback: ['erro E'] });
});

test('hard answers accept decimal commas, decimal points and surrounding spaces', async () => {
  for (const given of [' 2,5 ', ' 2.5 ', 2.5]) {
    const { estado, rodada } = await serve(await state(['f1', 'f2', 'd1']));
    estado.aberta.combos.d1 = 0;
    const result = await grade(estado, { ...answers(rodada), d1: given });
    assert.equal(result.resultados[2].certo, true);
    assert.deepEqual(result.resultados[2].feedback, ['Acertou d1']);
  }
});

test('hard correctness includes tolerance plus epsilon, and rejects beyond it', async () => {
  for (const [given, certo] of [[2.51, true], [2.5100000005, true], [2.510000002, false], [2.49, true]]) {
    const { estado, rodada } = await serve(await state(['f1', 'f2', 'd1']));
    estado.aberta.combos.d1 = 0;
    const result = await grade(estado, { ...answers(rodada), d1: String(given) });
    assert.equal(result.resultados[2].certo, certo);
  }
});

test('a hard error collision returns every matching feedback, with no epsilon outside tolerance', async () => {
  const { estado, rodada } = await serve(await state(['f1', 'f2', 'd1']));
  estado.aberta.combos.d1 = 0;
  const result = await grade(estado, { ...answers(rodada), d1: '4' });
  assert.deepEqual(result.resultados[2], { id: 'd1', certo: false, feedback: ['reveja o sinal', 'reveja a soma'] });
  const outside = await grade(estado, { ...answers(rodada), d1: '4.0150000005' });
  assert.deepEqual(outside.resultados[2].feedback, ['não bate com nenhum erro previsto: refaça as etapas com calma']);
});

test('an unexpected hard error returns the fixed feedback sentence', async () => {
  const { estado, rodada } = await serve(await novo(banco, matricula, secret));
  const respostas = answers(rodada);
  respostas[rodada.ids[2]] = '999';
  const result = await grade(estado, respostas);
  assert.deepEqual(result.resultados[2].feedback, ['não bate com nenhum erro previsto: refaça as etapas com calma']);
});

test('non-numeric hard answers throw 400 before grading anything and leave state untouched', async () => {
  for (const given of ['oops', '2.5abc', '', '  ', 'Infinity', 'NaN', '2,5,0', Infinity, -Infinity, NaN, null, undefined, true, [], {}]) {
    const { estado, rodada } = await serve(await novo(banco, matricula, secret));
    const snapshot = structuredClone(estado);
    const respostas = answers(rodada);
    respostas[rodada.ids[2]] = given;
    await assert.rejects(grade(estado, respostas), { status: 400 });
    assert.deepEqual(estado, snapshot);
  }
});

test('resend of last n returns the stored results without grading, even during a newer round', async () => {
  const { estado, rodada } = await serve(await novo(banco, matricula, secret));
  const first = await grade(estado, answers(rodada, false));
  for (const s of [first.estado, (await serve(first.estado)).estado]) {
    const snapshot = structuredClone(s);
    const again = await grade(s, {}, rodada.n);
    assert.deepEqual(again, { estado: snapshot, resultados: first.resultados, fechou: first.fechou });
    assert.deepEqual(s, snapshot);
  }
});

test('stale or unknown n throws 409 and leaves state untouched', async () => {
  const { estado } = await serve(await novo(banco, matricula, secret));
  for (const s of [estado, await novo(banco, matricula, secret)]) {
    for (const n of [-1, 0, 2, '1']) {
      const snapshot = structuredClone(s);
      await assert.rejects(grade(s, {}, n), { status: 409 });
      assert.deepEqual(s, snapshot);
    }
  }
  const first = await grade(estado, answers(estado.aberta, false));
  const next = await serve(first.estado);
  const second = await grade(next.estado, answers(next.rodada, false));
  const snapshot = structuredClone(second.estado);
  await assert.rejects(grade(second.estado, {}, 1), { status: 409 });
  assert.deepEqual(second.estado, snapshot);
});

test('mixed rounds conserve every id and grading leaves its input state untouched', async () => {
  let estado = await novo(banco, matricula, secret);
  for (let i = 0; i < 12; i++) {
    const served = await serve(estado);
    conserved(served.estado);
    const snapshot = structuredClone(served.estado);
    const right = answers(served.rodada);
    const wrong = answers(served.rodada, false);
    const respostas = Object.fromEntries(served.rodada.ids.map((id, j) => [id, (i + j) % 3 ? right[id] : wrong[id]]));
    const result = await grade(served.estado, respostas);
    assert.deepEqual(served.estado, snapshot);
    conserved(result.estado);
    assert.equal(result.fechou, false);
    estado = result.estado;
  }
});

test('fechou never goes back to false after later wrong answers', async () => {
  let { estado, rodada } = await serve(await novo(banco, matricula, secret));
  ({ estado } = await grade(estado, answers(rodada)));
  for (let i = 0; i < 6; i++) {
    ({ estado, rodada } = await serve(estado));
    const result = await grade(estado, answers(rodada, false));
    estado = result.estado;
    assert.equal(result.fechou, true);
    assert.equal(estado.fechou, true);
    conserved(estado);
  }
});

test('publico returns only question text and relabelled alternatives, leaking no private keys', async () => {
  const { rodada } = await serve(await novo(banco, matricula, secret));
  const snapshot = structuredClone({ banco, rodada });
  const questoes = publico(rodada, banco);
  assert.deepEqual(questoes, rodada.ids.map((id) => {
    const q = banco.faceis.find((q) => q.id === id);
    return q ? { id, tipo: 'facil', enunciado: q.enunciado,
      alternativas: Object.fromEntries(rodada.letras[id].map((original, i) => [letters[i], q.alternativas[original]])) }
      : { id, tipo: 'dificil', enunciado: banco.dificeis.find((q) => q.id === id).combos[rodada.combos[id]].enunciado };
  }));
  const forbidden = new Set(['correta', 'valor', 'erros', 'feedback', 'combos']);
  JSON.stringify(questoes, (key, value) => { assert.ok(!forbidden.has(key), key); return value; });
  assert.deepEqual({ banco, rodada }, snapshot);
});
