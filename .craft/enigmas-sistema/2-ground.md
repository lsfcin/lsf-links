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

## Ground
branch-created: feature/enigmas-sistema (existed, pushed) base: main — lsf-links has no develop and sits outside code/, so the gitflow gate does not bind
paths: 16/16 ok (8 existing; 8 new with parent present: lib/enigma.js, test/enigma.test.mjs, functions/api/enigma.js, functions/api/enigmas.js, enigma.js, enigma.css, .gitignore, enigmas/publica.py) | missing: none
test-cmd-runs: yes after a fix — `node --test test/` errors on Node 24.16 (MODULE_NOT_FOUND: a directory is not a test path); Carry test-cmd amended in 0/1 to `node --test test/*.test.mjs` (14 pass, 0 fail) instead of a RETURN to Loop 1 for one token
cleanup: removed stale untracked functions/api/lib/index.d.ts (2026-10-14 stub of an older lib/index.js); kept functions/jsconfig.json (stub config for functions/_middleware.js) and committed it
