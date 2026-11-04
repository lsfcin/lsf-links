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

## Architecture
Decisions D1–D5 (Lucas, 2026-11-04, outside panel codex gpt-6.1-sol: ../../../enigmas-sistema-panel.md) override the 1-plan where they differ; 1-plan names in brackets. Contracts: 3b-contracts.md.
- lib/index.js — GitHub round trip and roster — `readFile(env, path, {missing, repo, branch})`, `writeFile(env, path, text, sha, message, {repo, branch})`, `aluno(env, course, matricula, nome?) → nome|null` (2 s delay on a miss), `retry3(fn) → result|null` (the 3-try stale loop entrega/parecer already repeat; D1) — T1
- painel.js — becomes an ES module (D1): `export {parse, artefato, legend, draw, remark, readTsv}`, editor.js loads it with `type=module`; the Function imports `remark`/`parse` from it (no `markBox` clone); `NO_SLOT` loses `enigmas`; `draw(id, rows, links, info, abertas?)` marks enigma boxes `data-k tabindex=0 role=button` when `abertas[k]` — T1, T8
- lib/baralho.js [lib/enigma.js] — pure deck rule, no I/O — `ordem(ids, matricula, stem, secret) → ids`, `comboIndex(secret, matricula, stem, qid, n, versao, len) → int`, `servir(estado, banco, matricula, secret) → {estado, questoes}`, `corrigir(estado, banco, respostas, matricula, secret) → {estado, resultados, fechou}`, `publico(questao) → questao` (strips `correta`, `valor`, `erros`, `feedback`) — T4
- functions/api/tentativa.js [functions/api/enigma.js] — POST serve/grade one attempt; reads aberto, index, bank, `alunos/<matricula>.json` from the store; writes state then ◼ via `remark` with `retry3`; commit `enigma: <nome> <stem>` — T5
- functions/api/enigmas.js — POST {} → status; POST {password, aberto} → toggle — T6
- enigma.js + enigma.css — browser cards, `window.lsfEnigma(el, {popover, post, page, caixa, nome})` — T7
- enigmas/checa.py — gains `preenche(texto, env)` (moved from ciclo.py:54-57) — T2
- enigmas/publica.py — yaml → bank JSON + index.json; `--dry DIR` or PUT via `gh api` — T2
- core/tools/links/cfpages — `cmd_secrets` also ships `ENIGMA_SECRET` from core/tools/links/segredos.env (the site's existing secret path; deploy is git push, so no file in lsf-links) — T3

## Evaluation
criteria-coverage: C1→painel.js toggle + enigmas.js · C2→painel.js click + enigma.js + tentativa.js serve · C3→baralho.publico + tentativa.js · C4→baralho.servir/corrigir · C5→tentativa.js + painel.remark · C6→baralho.corrigir · C7→baralho.comboIndex · C8→index.json + tentativa.js check · C9→enigma.js/css · C10→lib.aluno
boundaries: C3/C4/C6/C7 unit tests on baralho (pure); C1/C5/C8/C10 Function tests on a fake GitHub keyed repo+branch+path; C2/C9 Loop 5 manual (keyboard, screen reader, reduced motion); C3 also a test that no response JSON holds `correta`/`valor`/`erros`
store privacy (C3): `lsfcin/academy-teaching` is private (checked 2026-11-04 via gh api)
home sync: ◼ lands in lsf-links main; `cfpages publish` pulls before it writes (cfpages:152), so a workspace publish never drops a mark
verdict: PASS

## Concept-Symmetry Review
checklist: alike-look-alike=issue (D1: entrega/parecer each inline the stale loop; markBox would be a 2nd `remark`) · naming-coherent=issue (D2: `lib/enigma.js` vs `enigma.js`, `/api/enigma` vs `/api/enigmas` differ by one letter for two ideas) · boundaries-consistent=ok (one writer per store file) · model-sound=ok
codegraph: not run (site repo has 6 modules; checklist covered it)
dedup: `remark` (painel.js) ≈ planned `markBox`; stale loop ×2 (entrega.js, parecer.js) → ×3 with tentativa
supervised: findings shown → user verdict: OK (D1 painel.js as ES module + retry3; D2 baralho/tentativa/enigmas)
verdict: PASS
