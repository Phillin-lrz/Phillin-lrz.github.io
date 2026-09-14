# AGENT_BRIEF

Last updated: 2026-09-14

This is the lightweight startup file for Codex work in this repository. Read this file first, then read only the operation file and source files required by the task type.

## Project Snapshot

- Static GitHub Pages site for `Phil Lin的Bar`.
- No framework, backend, database, package manager, or build pipeline is configured.
- Main shared files:
  - `assets/content.js`: posts, notes, places, review metadata.
  - `assets/gripes.js`: right-side gripe data.
  - `assets/site.js`: rendering and interaction logic.
  - `assets/styles.css`: shared visual system.
- Public content is mostly static root HTML files.
- Article bodies should live in independent `article-*.html` files.
- Bar notes should live in independent `note-*.html` files.
- Place records use stable `place-*.html` archive pages plus independent visit/article pages.

## Current Operating Rules

- Default to low-token startup: read this file, check Git status/stat, and then read the matching operation file.
- Read `AGENT_HANDOFF.md` only for unfinished work, dirty-worktree recovery, or compacted/uncertain sessions.
- Read `AGENT_TODO.md` only for planning, phase selection, or pending-work audits.
- Then choose the matching operation file:
  - `AGENT_OP_CONTENT_PUBLISH.md`
  - `AGENT_OP_PLAYLISTS.md`
  - `AGENT_OP_PLACES.md`
  - `AGENT_OP_PAGE_VISUAL.md`
  - `AGENT_OP_FRONTEND_LOGIC.md`
  - `AGENT_OP_DEPLOY_GIT.md`
  - `AGENT_OP_PROJECT_STATE.md`
  - `AGENT_OP_RECOVERY_AUDIT.md`
- Do not read `AGENT_CONTEXT.md`, `AGENT_CHANGELOG.md`, or `AGENT_CHANGELOG_ARCHIVE.md` by default.
- Before reading `AGENT_CONTEXT.md`, `AGENT_CHANGELOG.md`, or `AGENT_CHANGELOG_ARCHIVE.md`, ask the user for confirmation and name the exact file plus reason.
- Skip visual browser verification by project preference unless the user explicitly asks for it or a higher-priority instruction requires it.
- Keep using `git status --short`, `git diff --stat`, and `git diff --check`; inspect targeted diffs and use allowlist audits for large mechanical changes.
- Run `node --check assets/site.js`, `node --check assets/content.js`, and `node --check assets/gripes.js` when those files are relevant.
- Do not use Node REPL as a routine fallback for blocked `node --check` or browser verification.
- All website changes, including requests phrased as publishing or deployment, are local-file-only by default. Do not stage, commit, push, authenticate, or check remote deployment state unless the user explicitly requests that exact Git/remote operation in the current request.

## Current State To Remember

- Asset cache versions are scoped by resource. Shared CSS and site logic use `bar-art-20260914-paired-notes`; the badge retains `bar-art-20260824-ten-pm`; gripe data uses `bar-gripe-20260902-five-hour-reset`. Update only the asset that changed.
- `assets/content.js` uses `bar-content-20260914-paired-thoughts` only on its eight real consumer pages: `article.html`, `index.html`, `notes.html`, `posts.html`, `reviews.html`, and the three tag pages.
- `Undercurrent` / `Vacancy` is the first paired-note item: two `BAR_POSTS` records tagged `一些思绪` collapse into one list card through shared `pairId` metadata while retaining separate URLs and the static paired reading page `paired-undercurrent-vacancy.html`.
- `assets/gallery.js` uses `bar-gallery-20260828-ash-zoom-inn` on `gallery.html`.
- `BAR_PLACES` exists and powers the `reviews.html` / private-place map flow.
- Sober Company-Ash, Making Gelato, Q Taro, Zoom inN, and DEMO have place/visit structures.
- `gallery.html` now renders 56 location-group photos from `assets/gallery.js`, with optimized images under `assets/gallery/<place-slug>/` and generated `gallery-*.html` detail pages for each retained photo.
- `playlist.html` must remain a playlist index page; currently only `playlist-writing.html` is kept as a playlist detail page.
- The explicit GitHub Pages workflow exists at `.github/workflows/pages.yml`, with `.nojekyll` at the root.
- Word publishing tooling was removed on 2026-07-01; future publishing is direct static file editing unless the user asks to restore tooling.
- `AGENT_CHANGELOG_ARCHIVE.md` contains the full pre-2026-07-04 historical changelog.

## Safe Default Workflow

1. Read `AGENT_BRIEF.md`.
2. Check `git status --short` and `git diff --stat`.
3. Choose and read the matching `AGENT_OP_*.md` file(s).
4. Read handoff/todo only when their routing conditions apply.
5. Read target source files directly and ask before any deeper state-file read.
6. Make the smallest relevant change.
7. Run relevant checks with compact success output and detailed failure output.
8. Write one concise `AGENT_CHANGELOG.md` entry after all operations finish when project state changed.

## Current Known Risks

- Some existing state files contain mojibake text inherited from earlier Windows/encoding issues; do not fix broad text encoding unless the user asks.
- Visual layout risk remains whenever CSS or frontend markup changes because visual verification is skipped by default.
- Local files may intentionally differ from the online GitHub Pages site; do not inspect or reconcile the remote site unless the user explicitly requests it.
