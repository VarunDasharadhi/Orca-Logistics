# DECISIONS

Append-only, dated, one line per decision plus the why. Read before reopening a settled call.
Never rewrite or delete an existing dated line; if a decision is later reversed, append a new line
saying so rather than editing the old one.

- 2026-07-09: Did not install Docker Desktop or WSL2, because the local Postgres scaffold added
  that session was not yet used by any code in the codebase.
- 2026-07-09: Moved `PORT`/`BASE_PATH` out of inline shell args into gitignored `.env.local` files
  per package, loaded via `dotenv-cli`, because a blanket `MSYS_NO_PATHCONV=1` fix for Git Bash
  mangling a bare `BASE_PATH=/` into a Windows path broke `concurrently`'s own module resolution
  instead.
