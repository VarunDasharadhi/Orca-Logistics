# Orca-Logistics STATE

Git and any live dashboards outrank this file; check them before trusting a claim here.

This file holds only what is true right now. History and session narrative live in
`docs/journal/`, settled calls live in `DECISIONS.md`, gotcha detail lives in `docs/gotchas/`. It
is size-capped by `.githooks/pre-commit` (see `PROTOCOL.md`); move content out rather than
deleting it. Never describe uncommitted work here, `git status` covers that live and accurately.

## What this is

"Orca Transports Ltd" logistics marketing site plus its Express API, pnpm workspace monorepo
(see `AGENTS.md` for the package breakdown). Built for Replit production deploy. No other repo in
`~\repos\` depends on this or is depended on by it, as far as the repo's own files
show.

## Where the code stands

- Dormant since May 2026 apart from one session on 2026-07-09 that got local Windows dev working
  end to end (fixed a `pnpm-workspace.yaml` placeholder value and a missing-return-path bug,
  restored Windows native-binary support, worked around Git-Bash/MSYS path mangling, added an
  optional docker-compose Postgres scaffold, wrote the root `README.md`). That work is committed
  on `main` (`11bdc41`); local `main` is 1 commit ahead of `origin/main` (unpushed) as of today.
- 7 commits existed before that session, all from the original Replit-authored build (site
  design, branding, theme, "Published your App").
- `pnpm run typecheck` and `pnpm run build` both passed clean at the end of the 2026-07-09 session
  per the retired `HANDOFF.md`. Not re-run for this docs-only task; treat as unverified as of
  today.

## Open and reserved for Varun

- Whether to push `11bdc41` to `origin/main`.
- Install Docker Desktop only if DB work actually starts; nothing currently imports the `lib/db`
  schema.
- No other open items found in `README.md`, `replit.md`, or `git log`.

## Environment facts

- Deploy target: Replit, autoscale, via `.replit` plus each package's
  `.replit-artifact/artifact.toml`. No separate CI/CD pipeline; deploying means pushing to
  whichever branch Replit is configured to deploy from.
- Live URL: not stated in `README.md`, `replit.md`, or the retired `HANDOFF.md`; unknown from
  what's in the repo.
- Env var names in use (no values): `DATABASE_URL` (root `.env`, local Postgres only), `PORT` and
  `BASE_PATH` (per-package `.env.local`, dev-only; production gets these from Replit's own
  `artifact.toml` instead).

Last verified: 2026-09-10
