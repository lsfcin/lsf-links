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
tasks: <Loop 1>
context: /mnt/workspace/AGENTS.md, /mnt/workspace/outputs/links (no CONTEXT.md: read lib/index.js header, painel.js header, functions/api/entrega.js), /mnt/workspace/academy/teaching/classes/ai4good/enigmas/CONTEXT.md, logic reference /mnt/workspace/branches/virada/1322/app/cartas.js

## Decisions (Lucas, 2026-11-04; outside panel = Codex gpt-6.1-sol)
- Window: global on/off toggle beside `enigmas` in the panel, admin only (Lucas's own option; panel had offered per-student extra time — not needed: global switch).
- Answer: 3 together, one submit (panel agreed).
- Banks for 13/11: only the audited ones (panel agreed).
- Storage: the existing private repo `lsfcin/academy-teaching` (holds the yaml banks already), not a new repo (panel preferred a new repo + own token; Lucas: private is enough).
- Matrícula-only login stands (panel warned it identifies but does not prove identity).

## Open for Loop 1
- Site writes to academy-teaching must not collide with the workspace's subtree pushes: proposed a separate branch (e.g. `enigmas-site`) holding published banks as JSON + one deck json per student + the on/off state. Needs Lucas's yes.
- `GITHUB_TOKEN` must cover academy-teaching (contents read/write): Lucas checks the fine-grained token.
- Publish step: yaml → JSON for the ready banks (python, workspace side).

executor: orchestrator model=anthropic/claude-opus-5-5 level=max deleg=none

## Open items resolved (Lucas, 2026-11-04)
- Branch `enigmas-site` in `lsfcin/academy-teaching`: yes. The site writes only there; `main` stays the workspace's.
- `GITHUB_TOKEN` (fine-grained, no expiration) now covers academy-teaching: verified `contents/` 200, `push: true`. Same token value, so no Cloudflare secret change.
- Coding for 4a/4b goes to `codex exec` (workspace-write, in a worktree of lsf-links on `feature/enigmas-sistema`); Loop 1 must write task rows small enough for one `codex exec` each, with the exact prompt file per row.
- Banks for 13/11 so far: perceptron, historia, crises ready; regressao-linear v1 (Flash reviewer pilot, 1 framing blocker revised); autocodificadores re-running.

executor: orchestrator model=anthropic/claude-opus-5-5 level=max deleg=none
