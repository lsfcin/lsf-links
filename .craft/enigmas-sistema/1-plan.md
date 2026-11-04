## Carry
name: enigmas-sistema | branch: feature/enigmas-sistema | root: /mnt/workspace/outputs/links
provider: anthropic | chain-deleg: deleg=anthropic→openai-codex (4a/4b by `codex exec`; agy from 2026-11-07)
level-map: anthropic | verified-on: 2026-11-04
test-cmd: `node --test test/` | e2e-cmd: manual on a preview deploy (student test login, keyboard only, screen reader)
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

## Plan
branch: feature/enigmas-sistema (lsf-links, base `main` — lsf-links has no `develop`; it is a site repo outside `code/`, so the gitflow gate does not bind; Loop 2 confirms). `enigmas/` = /mnt/workspace/academy/teaching/classes/ai4good/enigmas.
Fixed facts every row may rely on:
- Store = repo `lsfcin/academy-teaching`, branch `enigmas-site` (orphan). One writer per file: `bancos/index.json` + `bancos/<stem>.json` (publica.py only); `aberto.json` `{"aberto":bool}` (/api/enigmas only); `alunos/<matricula>.json` (/api/enigma only). The page `ai4good/disciplina.md` stays in `lsfcin/lsf-links` `main`.
- Box k (0-based) of `enigmas=` in panel `va1` ↔ CAIXAS[k] = historia, regressao-linear, perceptron, autocodificadores, redes-convolucionais, redes-de-grafos, redes-recorrentes, memoria-longa-de-curto-prazo, redes-adversariais, professor-aluno, transformers, autoaprimoramento, crises (cronograma `[1]` order). Stem = yaml file name, not its `deck:` field. `index.json` = `{"caixas":[stem|null ×13], "versoes":{stem: v}}`; null = not published → box closed (C8).
- Bank JSON: `{stem, versao, faceis:[{id, enunciado, alternativas, correta, feedback, parabens}], dificeis:[{id, tolerancia, parabens, combos:[{enunciado, valor, erros:[{valor, feedback}]}]}]}`; versao = first 12 hex of sha256(yaml bytes). Workers forbid eval, so no expression reaches JS.
- Hard params (C7): combo index = uint32 big-endian of the first 4 bytes of HMAC-SHA256(ENIGMA_SECRET, `${matricula}|${stem}|${qid}|${n}|${versao}`) mod combos.length; n = attempt number, starts at 1.
- Deck rule (C4 — proposal, Lucas confirms at the 3b I/O sign-off): queues F (easy ids) and D (hard ids), initial order = ids sorted by HMAC hex of `${matricula}|${stem}|${id}`. An attempt serves the heads: min(2,|F|) easy + min(1,|D|) hard; stored as `aberta:{n, ids}` so a reload serves the same attempt. Right → id leaves its queue; wrong → id to the tail. Full attempt (3 served) all right → close. A short attempt (<3 served) = exhausted: `acumulado` starts at the rights of the last full attempt, adds each short attempt's rights; close at acumulado ≥ 3, or when F and D are both empty.
- Hard answer: accepts `2,5`/`2.5`/spaces; not a number → 400, attempt not graded. Right iff |given − valor| ≤ tolerancia + 1e-9. Wrong → every `erros[].feedback` within tolerance (collision = all of them, C6); none matches → fixed sentence `"não bate com nenhum erro previsto: refaça as etapas com calma"`. Easy wrong → `feedback[letter]`. Right → `parabens`.
- Codex prompt per row: `.craft/enigmas-sistema/codex/Tn.md` = this row's text + its `3b-contracts.md` section + "touch only the files column; run `node --test test/`". Written by the 4a/4b executor before each `codex exec`.

| id | task | files | done-when | level | effort |
|----|------|-------|-----------|------|--------|
| T1 | `readFile`/`writeFile` take optional `{repo, branch}` (default `lsfcin/lsf-links`, `main`); move entrega.js's matrícula lookup into `aluno(env, course, matricula, nome?) → nome|null` (keeps the 2 s delay on failure) and call it from entrega.js; add `markBox(md, panelId, name, code, k) → md` setting char k of that student's marks to `v` inside that panel block only | lib/index.js, functions/api/entrega.js, test/site.test.mjs | existing tests green; new tests: markBox changes exactly one char, other panel untouched; readFile with repo hits `/repos/lsfcin/academy-teaching/contents/…?ref=enigmas-site` | medium | medium |
| T2 | move ciclo.py's `{param}` fill into `checa.preenche(texto, env)` (ciclo calls it); new `publica.py <stem>… [--dry DIR]`: refuses a bank with checa bloqueantes, writes bank JSON (schema above; every `itertools.product` combo, values via `checa.calc`, tol via `checa.tolerancia`) and index.json; without --dry PUTs via `gh api` to the store | enigmas/checa.py, enigmas/ciclo.py, enigmas/publica.py | `python3 publica.py perceptron historia crises --dry /tmp/x` exits 0, 3 bank files + index with those 3 stems at boxes 2,0,12; no `{` left in any combo enunciado; `python3 checa.py perceptron.yaml` output unchanged | medium | medium |
| T3 | orchestrator (not codex: needs network): create orphan `enigmas-site` with `aberto.json` `{"aberto":false}`; run publica.py for the banks Lucas marks ready; generate ENIGMA_SECRET (`openssl rand -hex 32`) into gitignored `segredos.env` (add `.gitignore` first) and, with Lucas's OK, `wrangler pages secret put` for preview + production | .gitignore, segredos.env (untracked) | `gh api repos/lsfcin/academy-teaching/contents/bancos/index.json?ref=enigmas-site` 200; `git check-ignore segredos.env` matches | low | low |
| T4 | pure functions, no I/O: `ordem`, `servir(estado, banco, matricula, secret)`, `corrigir(estado, banco, respostas, …) → {resultados, fechou, estado}`, `comboIndex` — exactly the rules above; crypto via `crypto.subtle` (Node ≥18 and Workers) | lib/enigma.js, test/enigma.test.mjs | tests cover: same index on two calls; wrong id to tail; right leaves; full 3/3 closes; 2/3 does not; exhausted accumulation closes at 3; collision returns 2 feedbacks; no `correta`/`valor`/`erros` in `servir` output | medium | high |
| T5 | POST {page, caixa, matricula} → {n, questoes}; same + {respostas:{id: answer}} → {resultados, fechou}. Order of checks: aberto → caixa published → aluno → box already `v` (→ {fechou:true}). State + ◼ written with the 3-try stale loop of entrega.js; ◼ via markBox on `va1`/`enigmas`, commit `enigma: <nome> <stem>` | functions/api/enigma.js, test/enigma.test.mjs | fake GitHub keyed by repo+branch+path; tests: closed → 403; unpublished box → 400; wrong matrícula → 401; response JSON never contains the correct letter field, any `valor`, or `erros`; 3/3 commits ◼ to lsf-links main | medium | medium |
| T6 | POST {} → {aberto, caixas: [bool ×13]}; POST {password, aberto} → sets aberto.json (passwordOk, wrong → 401) | functions/api/enigmas.js, test/enigma.test.mjs | tests: status without password; toggle flips the file; wrong password writes nothing | medium | low |
| T7 | `window.lsfEnigma(el, {popover, post, page, caixa, nome})`: matrícula form → 3 cards (A–E radios; hard = text input inputmode=decimal), one "enviar"; results in an `aria-live="polite"` region; flip/slide in CSS transform+opacity only, none under `prefers-reduced-motion: reduce`; all controls reachable by Tab, submit by Enter | enigma.js, enigma.css | `node --check enigma.js`; grep: no `@keyframes` property other than transform/opacity; reduced-motion block present; manual keyboard pass in Loop 5 | medium | high |
| T8 | drop `enigmas` from NO_SLOT; boxes of the enigmas group get `data-k`, `tabindex=0`, `role=button` when /api/enigmas says aberto and caixas[k]; click/Enter on a box opens lsfEnigma (loaded once); with password, a toggle button right after the `enigmas` header posts /api/enigmas | painel.js, test/site.test.mjs | `draw()` test: open set → enigma boxes focusable with data-k; closed → `off` as today; other columns' output byte-identical to before | medium | medium |
| T9 | enigmas/CONTEXT.md: routing row for publica.py, one-paragraph § site (store, files, deck rule); ROADMAP `[enigmas-sistema]`: coding is Codex, plan pointer | enigmas/CONTEXT.md, ai4good/ROADMAP.md | both files under the caps (`core/run tools/wos` limits pass) | low | low |

## Plan Review (adversarial, assume small executors)
Pass 1 → 2 → 3:
- FATAL: Workers have no `eval`; a medium model would port checa's calc to JS → precompute every combo in T2 (schema fixed above).
- FATAL: "exhausted… accumulate" (C4) is not a rule a coder can implement → rule spelled exactly above; flagged as proposal for Lucas at the 3b sign-off (io-signoff=yes), not silently decided.
- FATAL: box index ↔ deck unstated → CAIXAS list from the cronograma pinned; stem vs `deck:` field (perceptron differs) pinned.
- FATAL: codex sandbox has no network and writes only its worktree → T3 is orchestrator-run; T2/T9 run with `codex exec --cd enigmas/` on the workspace branch, commit by the orchestrator.
- FATAL: the existing fake GitHub keys by path only → T5 done-when demands a repo+branch-keyed fake.
- risk: ENIGMA_SECRET is a new Cloudflare secret and lsf-links has no .gitignore → T3 adds it before writing segredos.env; secret set only with Lucas's OK.
- risk: easy questions can be brute-forced across attempts (wrong letter is revealed) → accepted for in-person class with the global switch; shown to Lucas at sign-off.
- risk: clone gate — matrícula lookup and fill loop are moved, not copied (T1, T2).
- Pass 3: zero unresolved FATALs. ROADMAP pointer added to ai4good/ROADMAP.md `[enigmas-sistema]`.
verdict: PASS

executor: craft-high model=anthropic/claude-opus-5-5 level=high deleg=anthropic→openai-codex
