# AGENT_HANDOFF

Last updated: 2026-09-01

Use this file only for unfinished-work continuity, dirty-worktree recovery, or compacted/uncertain sessions. Completed history belongs in `AGENT_CHANGELOG.md` and `AGENT_CHANGELOG_ARCHIVE.md`.

## Current Handoff State

- `Phil Lin的Bar` is a static GitHub Pages site with root HTML pages and shared files under `assets/`.
- The workload/cell-room gripe is committed locally as `6189616`, with deployment state in `97537a7`.
- A new screenshot-backed gripe about a lighter experiment schedule and being roasted is committed locally as `ef8dc28`.
- No content-publication task is unfinished. The user explicitly requested local-only deployment, so the pending commits must not be pushed to `origin` unless they later ask.
- The durable project rule now makes every website change local-file-only by default; do not stage, commit, push, authenticate, or check remote deployment state unless the user explicitly requests that exact Git/remote operation.

## Current Cache Policy

- Cache versions are asset-scoped; do not refresh every asset when only one changes.
- Shared CSS, badge, and `assets/site.js` retain `bar-art-20260824-ten-pm`.
- `assets/gripes.js` uses `bar-gripe-20260902-five-hour-reset` on all 122 current HTML consumers.
- `assets/content.js` uses `bar-content-20260912-upstairs` on exactly eight consumer pages:
  - `article.html`
  - `index.html`
  - `notes.html`
  - `posts.html`
  - `reviews.html`
  - `tag-lab.html`
  - `tag-recommendations.html`
  - `tag-thoughts.html`
- Static article, note, place, gallery, playlist, gripe-detail, and gallery-detail pages do not need `assets/content.js` unless a documented `BAR_*` rendering hook is added.
- `assets/gripes.js` remains global because `assets/site.js` may inject the gripe rail on any public page.

## Current Verification Policy

- Baseline checks are `git status --short`, `git diff --stat`, and `git diff --check`.
- Inspect semantic files with targeted diffs.
- For more than 400 changed lines, audit bulk mechanical edits with deterministic counts and changed-line allowlists; print only unexpected lines or failing hunks.
- Run `node --check` only for relevant JavaScript files.
- DOCX source-to-HTML checks should return title, counts, and mismatches rather than repeated full extraction output.
- Browser visual verification remains skipped by project preference unless explicitly requested or required by a higher-priority instruction.

## Known Risks

- Visual layout is not browser-verified by default.
- Local `main` is two commits ahead of the locally tracked `origin/main`; these two commits remain local by explicit user request.
- Some old state text may contain inherited mojibake; do not perform broad encoding cleanup without a separate request.

## Next Safe Step

For later ordinary publishing, start from `AGENT_BRIEF.md` and the matching operation file, edit and verify local files only, and stop. Do not perform Git writes or remote operations unless the user explicitly requests the exact operation.
