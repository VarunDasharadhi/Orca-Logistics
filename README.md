# Orca Logistics

pnpm workspace monorepo for the Orca Transports Ltd site, its API, and supporting tooling. Built to run on [Replit](https://replit.com) in production, and locally on any machine for development.

## Packages

| Path | Package | What it is |
| --- | --- | --- |
| `artifacts/orca-transports` | `@workspace/orca-transports` | Public marketing site (React + Vite + Tailwind). Deployed as static files. |
| `artifacts/api-server` | `@workspace/api-server` | Express 5 API (bundled with esbuild, runs as a Node process). |
| `artifacts/mockup-sandbox` | `@workspace/mockup-sandbox` | Component/design preview canvas used only during development (Replit's built-in design tool). Not deployed to production. |
| `lib/db` | `@workspace/db` | Drizzle ORM schema + Postgres client, shared by packages that need DB access. |
| `lib/api-client-react` | `@workspace/api-client-react` | Generated React Query hooks for calling the API (Orval codegen). |
| `lib/api-zod` | `@workspace/api-zod` | Generated Zod schemas from the OpenAPI spec. |
| `lib/api-spec` | `@workspace/api-spec` | OpenAPI spec source, used to generate the two packages above. |
| `scripts` | — | Repo-level scripts (e.g. `post-merge.sh`, used by Replit). |

## Prerequisites

- **Node.js 24** (matches `.replit`'s `modules = ["nodejs-24"]`).
- **pnpm** — install with `npm install -g pnpm` (works without admin rights; `corepack enable` requires admin on Windows and can be skipped).
- **Git Bash** (Windows only) — the repo's scripts use POSIX shell syntax (`sh -c`, `export VAR=val &&`), so pnpm needs to run scripts through Git Bash instead of `cmd.exe`. See [Windows notes](#windows-notes) below.
- **Docker** (optional) — only needed if you want a local Postgres database. Nothing in the app currently requires a database to run (the `@workspace/db` schema is an empty scaffold and no code imports it yet), so this can be skipped entirely for day-to-day frontend/API work.

## Setup

```bash
pnpm install
```

On Windows, if `pnpm install` fails on a `preinstall`/`sh: not recognized` error, point pnpm at Git Bash first (one-time, machine-local, not committed to the repo):

```bash
pnpm config set script-shell "C:\Program Files\Git\bin\bash.exe"
```

## Environment variables

Each app package reads its `PORT`/`BASE_PATH` from a local `.env.local` file (gitignored) via `dotenv-cli`, so raw `/` values never get passed as shell arguments (see [Windows notes](#windows-notes) for why that matters). Copy the example files once:

```bash
cp artifacts/api-server/.env.local.example artifacts/api-server/.env.local
cp artifacts/orca-transports/.env.local.example artifacts/orca-transports/.env.local
cp artifacts/mockup-sandbox/.env.local.example artifacts/mockup-sandbox/.env.local
cp .env.example .env
```

| Variable | Used by | Purpose |
| --- | --- | --- |
| `PORT` | api-server, orca-transports, mockup-sandbox | Port each dev/prod service listens on. |
| `BASE_PATH` | orca-transports, mockup-sandbox | Vite `base` path. `/` for the main site, `/__mockup` for the design canvas (mirrors Replit's path-based router). |
| `DATABASE_URL` | `@workspace/db` (via `pnpm run db:push`) | Postgres connection string. Only needed if you're working on the DB schema. |

In production (Replit), these are supplied by each package's `.replit-artifact/artifact.toml` (`[services.env]` / `[services.production.env]`) instead — the `.env.local` files are a local-dev-only convenience and are never read there.

## Local development

```bash
pnpm run dev          # runs the API (8080) and the site (18151) together
pnpm run dev:api       # API only
pnpm run dev:web       # site only
pnpm run dev:mockup    # design/component preview canvas only (8081)
```

- Site: http://localhost:18151
- API health check: http://localhost:8080/api/healthz (also proxied through the site dev server at http://localhost:18151/api/healthz, mirroring how Replit's prod router serves both under one origin)

### Database (optional)

```bash
pnpm run db:up          # starts Postgres via docker-compose
pnpm run db:push        # push the Drizzle schema
pnpm run db:down        # stop Postgres
```

Requires Docker Desktop installed and running; not installed by this setup.

## Build

```bash
pnpm run typecheck   # typecheck all packages
pnpm run build       # typecheck + build all packages
```

## Production deployment

This repo deploys on **Replit** (autoscale), already fully configured — no additional deployment setup is required:

- `.replit` — root deployment config (`deploymentTarget = "autoscale"`, port mappings, post-merge hook that runs `pnpm --filter db push`).
- `artifacts/*/.replit-artifact/artifact.toml` — per-package build/run/health-check definitions:
  - `api-server`: builds with `pnpm --filter @workspace/api-server run build`, runs `node --enable-source-maps artifacts/api-server/dist/index.mjs`, health-checked at `/api/healthz`.
  - `orca-transports`: builds with `pnpm --filter @workspace/orca-transports run build`, served as static files from `dist/public` with SPA rewrites.
  - `mockup-sandbox`: development-only design canvas, no production service defined.

Replit's router merges these under one origin by path (`/` → site, `/api` → API, `/__mockup` → design canvas). Deploying means pushing to the branch Replit is configured to deploy from — there's no separate CI/CD pipeline in this repo.

## Windows notes

- pnpm's `script-shell` must point at Git Bash (see [Setup](#setup)) because the repo's own scripts use bash syntax.
- Native/platform-specific packages (esbuild, rollup, lightningcss, `@tailwindcss/oxide`) are excluded for every OS except Linux x64 (prod) and Windows x64 (local dev) in `pnpm-workspace.yaml`'s `overrides`. If you're on macOS or Windows ARM, you'll need to add your platform back in.
- `PORT`/`BASE_PATH` are read from `.env.local` files (via `dotenv-cli`) rather than passed inline as `KEY=value` shell arguments. Git Bash's MSYS runtime auto-converts anything that looks like a POSIX path — including a bare `BASE_PATH=/` on the command line, or in the environment of a freshly spawned bash process — into a Windows path (e.g. `/` becomes `C:\Program Files\Git\`), which silently broke Vite's `base` config. Loading these from a file sidesteps the conversion instead of trying to disable it (disabling it globally via `MSYS_NO_PATHCONV` breaks pnpm's own bin-shim path resolution for tools like `concurrently`).
