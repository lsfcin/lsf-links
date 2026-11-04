## Carry
name: enigmas-sistema | branch: feature/enigmas-sistema | root: /mnt/workspace/outputs/links
provider: anthropic | chain-deleg: deleg=anthropic→openai-codex (4a/4b by `codex exec`; agy from 2026-11-07)
level-map: anthropic | verified-on: 2026-11-04
test-cmd: `node --test test/*.test.mjs` | e2e-cmd: manual on a preview deploy (student test login, keyboard only, screen reader)
criticality: normal | verdict: standard
subtree: feature | supervision: io-signoff=yes arch-review=per-feature arch-review-supervised=yes
criteria:
C1 Admin logged in sees a toggle beside the word `enigmas` in the ai4good panel; one global state, on or off.
C2 Enigmas on: a student clicks their own enigma box (today blocked by `NO_SLOT` in painel.js:4), types the matrícula, and gets 3 questions of that deck (2 easy A–E + 1 hard numeric with per-student parameters) as cards, one "enviar".
C3 Grading on the server; the answer key never reaches the browser; only the 3 questions of the attempt do.
C4 Deck per student: right → leaves the deck; wrong → back to the bottom; exhausted → last right ones count and accumulate up to 3 (rules: academy/teaching/classes/ai4good/enigmas/CONTEXT.md § mecânica).
C5 3 right in the same attempt → the Function writes ◼ in that box on the page itself (same write path as the teacher's marks).
C6 Wrong → feedback of the probable error for that answer (never the right answer); collision → both feedbacks.
C7 Hard-question parameters = HMAC(secret, matrícula, question, attempt, bank version): same on reload.
C8 Only published banks open (13/11: perceptron, historia, crises, autocodificadores after d3 fix).
C9 Plain HTML/CSS/JS, any browser; card animation in CSS transform/opacity, honoring `prefers-reduced-motion`; feedback in `aria-live`; everything by keyboard.
C10 Login by matrícula only, as in the delivery slots (Lucas, 2026-11-04: enough; class is in person).
tasks:
T1 — lib: repo/branch per call, aluno(), markBox() — lib/index.js, functions/api/entrega.js, test/site.test.mjs — medium
T2 — publica.py: yaml → bank JSON with every hard combination precomputed — enigmas/{checa.py,ciclo.py,publica.py} — medium
T3 — publish the ready banks to `enigmas-site`, set ENIGMA_SECRET (orchestrator, needs network) — none in repo but .gitignore — low
T4 — lib/enigma.js: pure deck logic (order, serve, grade, close) — lib/enigma.js, test/enigma.test.mjs — medium/high effort
T5 — /api/enigma: serve and grade an attempt, write state and ◼ — functions/api/enigma.js, test/enigma.test.mjs — medium
T6 — /api/enigmas: public status + admin on/off — functions/api/enigmas.js, test/enigma.test.mjs — medium
T7 — enigma.js + enigma.css: the card UI in the popover — enigma.js, enigma.css — medium/high effort
T8 — painel.js: per-box click on `enigmas`, admin toggle, loads enigma.js — painel.js, test/site.test.mjs — medium
T9 — docs: enigmas CONTEXT routing + § site, ROADMAP item updated — enigmas/CONTEXT.md, ai4good/ROADMAP.md — low
context: /mnt/workspace/AGENTS.md, /mnt/workspace/outputs/links (no CONTEXT.md: read lib/index.js header, painel.js header, functions/api/entrega.js), /mnt/workspace/academy/teaching/classes/ai4good/enigmas/CONTEXT.md, logic reference /mnt/workspace/branches/virada/1322/app/cartas.js

## Contracts
Each section is pasted whole into the codex prompt of its task (1-plan § Plan, "Codex prompt per row"). Where this file and 1-plan disagree, this file wins (decisions D1–D5, 3-arch.md).

### Deck rule (C4, D3 — Lucas, 2026-11-04) — replaces 1-plan "Deck rule"
- A round = 3 cards: 2 easy + 1 hard. Box ◼ iff the 3 are right in the same round. No exhaustion exception.
- `baralho` (queue, 9 ids at start, order = ids sorted by hex HMAC(`ordem|${matricula}|${stem}|${id}`)); `acertos` (list, oldest first).
- Serve: hard = first hard id in `baralho`, else the oldest hard in `acertos`; easy = first 2 easy ids in `baralho`, filled from the oldest easy in `acertos`. Card order shown: easy, easy, hard.
- Grade, per card: right and from baralho → leaves baralho, appended to acertos; right and from acertos → stays; wrong → to the tail of baralho (removed from acertos if it came from there).
- Easy letters shuffled per round (D4): permutation of the bank's letters = sort by hex HMAC(`letras|${matricula}|${stem}|${qid}|${n}|${letra}`); the student answers the shown letter, the server maps it back.
- Hard combo (C7): uint32 BE of the first 4 bytes of HMAC(`combo|${matricula}|${stem}|${qid}|${n}|${versao}`) mod combos.length.
- HMAC = HMAC-SHA256, key = the UTF-8 bytes of the `ENIGMA_SECRET` string as stored (64 hex chars, not decoded).

### lib/baralho.js (T4) — pure, no I/O, `crypto.subtle` only
- `hmacHex(secret, msg) → Promise<string>`
- `novo(banco, matricula, secret) → Promise<Estado>`
- `servir(estado, banco, matricula, secret) → Promise<{estado, rodada}>` — `estado.aberta` set ⇒ same round back, nothing changes
- `corrigir(estado, banco, n, respostas, matricula, secret) → Promise<{estado, resultados, fechou}>` — `n === estado.ultima?.n` ⇒ `estado.ultima` back unchanged (idempotent, risk b); `n !== estado.aberta?.n` ⇒ throws `{status: 409}`; a hard answer that is not a number ⇒ throws `{status: 400}`, nothing graded
- `publico(rodada, banco) → Questao[]` — the only shape that leaves the server
- Types: `Estado = {versao, baralho: id[], acertos: id[], n: int, aberta: {n, ids: id[3], versao, combos: {qid: int}, letras: {qid: string[]}} | null, ultima: {n, resultados, fechou} | null, fechou: bool}`; `Questao = {id, tipo: 'facil'|'dificil', enunciado, alternativas?: {A..E: text}}`; `Resultado = {id, certo: bool, feedback: string[]}` (right → [parabens]; easy wrong → [feedback[original letter]]; hard wrong → every erros[].feedback within tolerance, or the fixed sentence of 1-plan)
- Invariants: no `correta`, `valor`, `erros`, `feedback`, `combos` in `publico` output; |baralho| + |acertos| = 9 always; `fechou` never goes back to false

### lib/index.js (T1)
- `readFile(env, path, {missing, repo, branch})`, `writeFile(env, path, text, sha, message, {repo, branch})` — defaults `lsfcin/lsf-links`, `main`
- stale = HTTP 409, or 422 whose body message mentions `sha`; any other 422 throws (panel: 422 is also a validation error)
- `retry3(step) → Promise<T|null>` — calls step up to 3 times while it returns `{stale: true}`; step rereads and recomputes each time; entrega.js and parecer.js use it
- `aluno(env, course, matricula, nome?) → Promise<string|null>` — entrega.js's lookup moved, 2 s delay on a miss

### painel.js (T1, T8) — ES module (D1)
- `export {parse, artefato, legend, draw, remark, readTsv}`; still sets `window.lsfPainel = mount` in a browser; editor.js sets `pjs.type = 'module'`; test/site.test.mjs imports the exports instead of `globalThis.lsfPainelCore`
- `draw(id, rows, links, info, abertas = null)` — `abertas: bool[13] | null`; true at k ⇒ enigma box k is a `<span data-k=k tabindex=0 role=button>`; other columns byte-identical to today

### functions/api/tentativa.js (T5) [was enigma.js]
- `POST {page, caixa: 0..12, matricula}` → `200 {n, questoes: Questao[]}` | `200 {fechou: true}`
- `POST {page, caixa, matricula, n, respostas: {id: string}}` → `200 {resultados: Resultado[], fechou}`
- check order: aberto (403) → caixa published in index (400) → `aluno` (401) → state. Bank versao in index ≠ `estado.aberta.versao` ⇒ drop the round and serve a new one (risk c: a round never changes under a reload).
- write order: `alunos/<matricula>.json` first, then ◼ via `remark` on `va1`/`enigmas` with retry3, commit `enigma: <nome> <stem>`
- repair (risk a): any request on a box whose state says `fechou` but whose mark is not `v` writes the ◼ again

### functions/api/enigmas.js (T6)
- `POST {}` → `{aberto, caixas: bool[13]}`; `POST {password, aberto: bool}` → `{aberto}` (passwordOk; wrong → 401, writes nothing)

### enigma.js + enigma.css (T7)
- `window.lsfEnigma(el, {popover, post, page, caixa, nome}) → void` — posts only to `tentativa`; renders `Questao[]`; `Resultado[]` into `aria-live="polite"`

### publica.py (T2) → store (T3)
- bank JSON as 1-plan § Plan; `alternativas` keep the yaml letters (the shuffle is the server's)
- T3 amended: `ENIGMA_SECRET` goes into core/tools/links/segredos.env and `cmd_secrets` ships it; set with `cfpages secrets --push`, Lucas's OK first. No .gitignore or segredos.env in lsf-links.

modules: lib/baralho.js · lib/index.js · painel.js · functions/api/tentativa.js · functions/api/enigmas.js · enigma.js · enigmas/publica.py — all specified in this file — status: locked
edges:
- publica.py bank JSON → tentativa.js readFile → baralho(banco) — MATCH (same schema)
- baralho.publico → tentativa.js response → enigma.js — Questao[] — MATCH
- baralho.corrigir → tentativa.js → enigma.js — Resultado[] — MATCH
- tentativa.js → painel.remark(md, 'va1', nome, 'enigmas', marks) → lib.writeFile — string — MATCH
- enigmas.js → painel.js draw(abertas) — bool[13] — MATCH
contract-check: n/a — lsf-links is not a code/ project with SPEC.md modules; edges checked by hand
io-signoff: requested → APPROVED by user 2026-11-04 (D1 ES module, D2 names, D3 deck rule, D4 accept + shuffle letters, D5 + risks a/b/c)
open for Loop 5: `cfpages secrets --push` sets production only, so a preview deploy has no GITHUB_TOKEN/ENIGMA_SECRET; the e2e runs on production behind the switch, or cmd_secrets also sets preview
