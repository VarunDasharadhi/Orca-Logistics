# Agent instructions

This file is the shared contract for every harness that reads `AGENTS.md` directly, rather than
`CLAUDE.md`. Claude Code reads it too, via `CLAUDE.md`'s `@AGENTS.md` import. Keep this file
authoritative and self-contained; don't assume the reader has also seen `CLAUDE.md`.

## What this is

"Orca Transports Ltd" logistics marketing site plus its API, in a pnpm workspace monorepo:
`artifacts/orca-transports` (React + Vite + Tailwind marketing site), `artifacts/api-server`
(Express 5 API, bundled with esbuild), `artifacts/mockup-sandbox` (Replit's design-preview canvas,
dev-only, not deployed), `lib/db` (Drizzle ORM + Postgres schema, an empty scaffold nothing
currently imports), `lib/api-client-react` / `lib/api-zod` / `lib/api-spec` (generated API client
packages from an OpenAPI spec). Built to run on Replit in production and locally for development.

Dormant since May 2026 apart from one session on 2026-07-09 that got local Windows dev working end
to end; no code changes since. No sibling repo (`..\<repo>`) is referenced in any tracked file
(checked `README.md`, `replit.md`, and the retired `HANDOFF.md`); as far as those show, this repo
stands alone.

## Session start

Read `STATE.md` and `GOTCHAS.md` first, both short. Git and any live dashboards outrank any prose
claim about current state; check them before trusting a claim here. `DECISIONS.md` is the
append-only dated decision log: read it before reopening a settled call, add a line when you make
a new one, never rewrite an existing dated line.

Full protocol for what to read on entry, what to write on exit, and what to do when something
unexpected happens: `~\.agents\PROTOCOL.md`.

## Stack and run commands

Node 24, pnpm workspace, TypeScript 5.9. Each package's role is above; `artifacts/**` are the
apps, `lib/**` are shared libraries.

- `pnpm install`. On Windows, if it fails on a `preinstall`/`sh: not recognized` error, first run
  `pnpm config set script-shell "C:\Program Files\Git\bin\bash.exe"` (machine-local, not
  committed) because the repo's own scripts use bash syntax.
- `pnpm run dev` (API + site together), `pnpm run dev:api`, `pnpm run dev:web`, `pnpm run
  dev:mockup` (design-preview canvas only).
- `pnpm run db:up` / `db:push` / `db:down`: optional local Postgres via `docker-compose.yml`.
  Unused as of today, no code imports the DB schema yet; requires Docker Desktop, not installed by
  this setup.
- Full setup, env vars, and Windows/MSYS gotchas: `README.md`.

## Verification gate

`pnpm run typecheck` then `pnpm run build` (the root `build` script runs typecheck first, then
builds every package with an `--if-present run build`). No test script exists in `package.json`;
these are the only codified gates. Both passed clean at the end of the 2026-07-09 dev-setup
session per the retired `HANDOFF.md`; not re-run for this docs-only task.

This gate is non-negotiable for any harness or agent making code changes here, not just Claude
Code. A change that has not run the gate clean is not done. Do not commit with `--no-verify`. If a
cap or a gate step is genuinely wrong for the content, say so and get it changed rather than
routing around it.

## Repo boundaries

No sibling repo in `..\<repo>` is referenced anywhere in `README.md`, `replit.md`, or the retired
`HANDOFF.md`; this repo appears to stand alone, not part of a coordinated multi-repo system.
Production deploy target is Replit (autoscale), configured via `.replit` and each package's
`.replit-artifact/artifact.toml`; that and GitHub outrank any prose claim here about deploy
state.

## Writing style

No em dashes anywhere (user-facing copy, comments, docs). Natural, human phrasing; errors say what
happened and what to do next. Match the surrounding code's conventions.
