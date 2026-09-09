# HANDOFF, RETIRED 2026-09-10

This file is retired. Never append new session entries here. Current facts are in `STATE.md`,
dated decisions in `DECISIONS.md`, gotchas in `GOTCHAS.md`, session narrative in
`docs/journal/`. This file's content below is kept as history only.

# Orca Logistics

## Latest session (2026-07-09, evening) — Local dev environment working end to end on Windows

### What was done
1. **pnpm install fixed on Windows** — installed pnpm via `npm install -g pnpm` (corepack needs admin rights this machine doesn't have). Set `pnpm config set script-shell` to Git Bash (machine-local, not committed) since the repo's scripts use `sh -c` / `export VAR=val &&` syntax that `cmd.exe` can't run.
2. **Two pre-existing, non-Windows-specific bugs fixed** — `pnpm-workspace.yaml` had a literal placeholder `allowBuilds: { esbuild: set this to true or false }` causing `[ERR_PNPM_IGNORED_BUILDS]`, fixed to `esbuild: true`. `WhyChooseUs.tsx` had a `useEffect` missing a return path in one branch, tripping `noImplicitReturns` and blocking typecheck/build; added `return undefined;`.
3. **Windows native-binary support restored** — `pnpm-workspace.yaml` overrides excluded all non-Linux platforms (esbuild, rollup, lightningcss, tailwindcss-oxide), which broke Vite/Tailwind entirely on Windows. Re-enabled `win32-x64` only, left every other platform excluded.
4. **MSYS/Git-Bash env-var mangling fixed** — Git Bash auto-converts anything that looks like a POSIX path, including a bare `BASE_PATH=/`, into a Windows path (`/` became `C:\Program Files\Git\`), breaking Vite's `base` config. A blanket `MSYS_NO_PATHCONV=1` fix broke `concurrently`'s own module resolution instead. Fixed properly by moving `PORT`/`BASE_PATH` out of inline shell args into gitignored `.env.local` files per package, loaded via `dotenv-cli`. Removed `cross-env` (no longer needed).
5. **Root `pnpm run build` fixed** — `orca-transports` and `mockup-sandbox` require `PORT`/`BASE_PATH` at build time too, not just dev. Wrapped their `build` scripts with the same `dotenv -e .env.local --` pattern. Verified safe for the real Replit prod build: `dotenv-cli` no-ops silently when `.env.local` is missing, so Replit's own `artifact.toml`-supplied env vars pass through untouched.
6. **Local Postgres scaffolding added** — `docker-compose.yml` plus `pnpm run db:up` / `db:push` / `db:down`, not yet used (DB schema is an empty scaffold, nothing imports it).
7. **Docs written** — root `README.md` (setup, env vars, dev commands, DB setup, Windows/MSYS gotchas, production deployment path), with a one-line pointer added to `replit.md` so content isn't duplicated.
8. Cleaned up two empty `dev-stdout.log` / `dev-stderr.log` files left over from an earlier failed attempt.

### Current state
- Dev servers run locally end to end: site on `http://localhost:18151`, API on `http://localhost:8080/api/healthz`, both verified with curl returning 200. Dev proxy `localhost:18151/api/healthz` also verified working.
- `pnpm run typecheck` and `pnpm run build` both pass cleanly across the whole workspace.
- Nothing from this session is committed yet. All changes are unstaged in the working tree (`.gitignore`, `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `vite.config.ts`, `WhyChooseUs.tsx`, `replit.md` modified; `README.md`, `docker-compose.yml`, `.env.example`, and per-package `.env.local.example` files untracked).
- Production deploy target is Replit (autoscale), already fully configured via `.replit` and per-package `.replit-artifact/artifact.toml`. No changes were made to the actual deployment path, only documented.
- Docker Desktop and WSL2 were deliberately not installed (not needed yet, no DB usage in the codebase currently).

### Next steps
1. Review `git status` / `git diff` and commit the local-dev setup changes.
2. Copy the `.env.local.example` files to `.env.local` (already done locally this session, but gitignored so a fresh clone needs this step) and copy `.env.example` to `.env`.
3. If DB work starts, install Docker Desktop and run `pnpm run db:up` then `pnpm run db:push`.
