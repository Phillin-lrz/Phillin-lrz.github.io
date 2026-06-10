# AGENT_HANDOFF

Last updated: 2026-06-10

## 1. One-Sentence Project State

`Phil Lin的Bar` is currently a static GitHub Pages personal site with a dark cocktail-bar visual style, metadata-driven article lists/tags, separate static article-file direction, friend links, review placeholders, gallery placeholders, and no writer/editor feature.

## 2. Phase-One Completion Summary

Phase one is sealed. Verified first-stage work includes:

- Site branding/navigation around `Phil Lin的Bar`.
- Cocktail/bar visual redesign using CSS glyphs and canvas constellations.
- Article archive with tag filtering.
- Three tag landing pages:
  - `tag-lab.html`
  - `tag-thoughts.html`
  - `tag-recommendations.html`
- Lightweight article metadata in `assets/content.js`.
- Current public article `article-to-be-continue.html`.
- Friend page for StarCried.
- Placeholder `酒评` and `摄影作品` pages.
- Removed writer/validation/editor pages and related code.
- Added context sealing files:
  - `AGENT_CONTEXT.md`
  - `AGENT_TODO.md`
  - `AGENT_CHANGELOG.md`
  - `AGENT_HANDOFF.md`

## 3. Current Code State

- Static site only: no framework, no package manager, no backend, no database.
- Shared data:
  - `assets/content.js`
- Shared behavior:
  - `assets/site.js`
- Shared styling:
  - `assets/styles.css`
- Article architecture:
  - Home/archive/tag pages read summary metadata from `assets/content.js`.
  - Real article bodies should live in separate HTML files, for example `article-my-post.html`.
  - Future article images should go under `assets/posts/<article-id>/`.
- `article.html` remains as a dynamic compatibility fallback, but static article HTML files are the recommended primary path.

## 4. Current Git State

Verified:

- `.git/config` remote URL is `https://github.com/Phillin-lrz/Phillin-lrz.github.io.git`.

Not verified:

- `git status` could not be run because the shell reports `git` is not recognized.
- `git diff` could not be run for the same reason.
- No commit or push was performed during context sealing.

Before any future work, run `git status --short` and `git diff --stat` in an environment where Git is installed.

## 5. Important File Index

- `AGENT_CONTEXT.md`: full phase-one context, decisions, constraints, risks.
- `AGENT_TODO.md`: actionable completed/pending/phase-two tasks and validation checklist.
- `AGENT_CHANGELOG.md`: file-by-file change log with verification limits and rollback notes.
- `README.md`: human-facing maintenance notes.
- `index.html`: home page.
- `posts.html`: article archive and tag filter UI.
- `tag-lab.html`: `实验日志` tag page.
- `tag-thoughts.html`: `一些思绪` tag page.
- `tag-recommendations.html`: `种草安利` tag page.
- `article-to-be-continue.html`: current public article.
- `article.html`: dynamic article fallback.
- `_drafts/article-format-reference.html`: retained non-public format/reference draft.
- `friends.html`: friend links, currently StarCried.
- `reviews.html`: cocktail review placeholder page.
- `gallery.html`: gallery placeholder page.
- `about.html`: about page.
- `assets/content.js`: tags, article metadata, review metadata.
- `assets/site.js`: canvas interaction and post rendering.
- `assets/styles.css`: shared visual system.
- `assets/posts/`: intended future article image folders.

## 6. Known Risks

- Git status/diff are unverified due missing Git command.
- Browser visual verification was not completed in the final sealed state.
- `assets/cocktail-hero.png` and `assets/hero-workspace.png` appear present but currently unused; do not delete without user approval and reference search.
- `reviews.html` hardcodes review placeholder cards; `BAR_REVIEWS` is not yet wired to render reviews.
- `article.html` can confuse future article flow; current preferred flow is separate static article HTML plus index entry.
- Large/base64 article images should not be placed in `assets/content.js`.

## 7. Suggested Phase-Two Entry

Do not start phase two automatically. First ask the user to confirm the exact next objective.

Likely phase-two entry if user confirms Word conversion:

1. Receive `.docx` file from user.
2. Extract text and images.
3. Choose article id/slug with user or use a safe generated slug.
4. Save images to `assets/posts/<article-id>/`.
5. Generate `article-<article-id>.html`.
6. Add metadata entry to `assets/content.js`.
7. Verify JS syntax and browser article rendering.

## 8. Must-Read Files For New Conversation

Read these before editing code:

1. `AGENT_HANDOFF.md`
2. `AGENT_CONTEXT.md`
3. `AGENT_TODO.md`
4. `AGENT_CHANGELOG.md`
5. `README.md`
6. `assets/content.js`
7. `assets/site.js`
8. `assets/styles.css`

## 9. Forbidden Immediate Actions In New Conversation

- Do not start phase-two development without user confirmation.
- Do not rely on chat history or auto summaries as the only source of truth.
- Do not reintroduce `write.html`, `editor.html`, or the `撰写` feature unless explicitly requested.
- Do not put full article bodies or base64 images into `assets/content.js`.
- Do not delete unused image assets without approval.
- Do not install dependencies or migrate frameworks without approval.
- Do not claim git diff/status/browser verification unless actually run successfully.
- Do not make broad refactors before reading the four AGENT files.

## 10. Recovery Steps

1. Read the four AGENT files.
2. Attempt:
   - `git status --short`
   - `git diff --stat`
   - `git diff -- .`
3. If Git is unavailable, record that limitation in the next report.
4. Run:
   - `node --check assets/site.js`
   - `node --check assets/content.js`
5. Search for writer feature leftovers:
   - `write.html`
   - `editor.html`
   - `write-link`
   - `data-auth`
   - `data-editor`
   - `WRITER`
   - `撰写`
6. Browser-check local pages if browser tooling is available:
   - `index.html`
   - `posts.html`
   - one tag page
   - `article-to-be-continue.html`
   - `friends.html`
7. Ask the user what phase two should do.
