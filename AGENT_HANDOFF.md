# AGENT_HANDOFF

Last updated: 2026-06-11

## 1. One-Sentence Project State

`Phil Lin的Bar` is currently a static GitHub Pages personal site with a dark cocktail-bar visual style, metadata-driven article lists/tags, separate static article-file direction, one public article, friend links, review placeholders, gallery placeholders, and no writer/editor feature.

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
- Placeholder public article `article-to-be-continue.html` deleted at user request.
- Friend page for StarCried and CrescentYves.
- Placeholder `酒评` and `摄影作品` pages.
- Removed writer/validation/editor pages and related code.
- Added context sealing files:
  - `AGENT_CONTEXT.md`
  - `AGENT_TODO.md`
  - `AGENT_CHANGELOG.md`
  - `AGENT_HANDOFF.md`

Follow-up after phase-one sealing:

- Deleted the placeholder article `To Be Continue` / `To Be Continued`.
- Cleared `window.BAR_POSTS` in `assets/content.js`.
- Added a right-side `吐槽` rail rendered from `window.BAR_GRIPES`.
- Published the first gripe with mood `烦恼`, emoji `😫`, and timestamp `2026-06-11 12:40:15`.

- Project-level preference localized from user request: skip visual verification by default unless the user explicitly asks later or a higher-priority instruction requires it.

## 3. Current Code State

- Static site only: no framework, no package manager, no backend, no database.
- Shared data:
  - `assets/content.js`
- Shared behavior:
  - `assets/site.js`
- Shared styling:
  - `assets/styles.css`
- Gripe rail:
  - `assets/gripes.js` stores static `window.BAR_GRIPES` entries.
  - `assets/site.js` injects the rail and handles page-size calculation and pagination.
  - `assets/styles.css` positions the rail on the right for desktop and makes it responsive on narrower screens.
  - Current scale strategy is scheme 2: keep gripe data separate from `assets/content.js` and render only the current page.
  - If gripe count grows enough to make `assets/gripes.js` heavy, remind the user about scheme 3 or 4: paginated static files or JSON on-demand loading.
- Verification preference:
  - Skip browser visual verification by default for this project.
  - Use file-level checks, reference searches, syntax checks when available, and static reasoning.
  - Report residual visual risk when skipping visual checks after frontend changes.
  - Never claim visual verification unless it was actually performed.
  - Keep attempting Git checks and `node --check` syntax checks when relevant.
  - Do not use Node REPL as a routine fallback for blocked `node --check` or browser verification.
- Article architecture:
  - Home/archive/tag pages read summary metadata from `assets/content.js`.
  - Real article bodies should live in separate HTML files, for example `article-my-post.html`.
  - There is currently one public article entry: `article-first-words-on-the-bar.html`.
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
- `tag-lab.html`: `生活日志` tag page.
- `tag-thoughts.html`: `一些思绪` tag page.
- `tag-recommendations.html`: `种草安利` tag page.
- `article.html`: dynamic article fallback.
- `article-first-words-on-the-bar.html`: first published article, tag `一些思绪`.
- `_drafts/article-format-reference.html`: retained non-public format/reference draft.
- `friends.html`: friend links, currently StarCried and CrescentYves.
- `reviews.html`: cocktail review placeholder page.
- `gallery.html`: gallery placeholder page.
- `about.html`: about page.
- `assets/content.js`: tags, article metadata, review metadata.
- `assets/gripes.js`: static gripe data.
- `assets/site.js`: canvas interaction and post rendering.
- `assets/styles.css`: shared visual system.
- `assets/posts/`: intended future article image folders.

## 6. Known Risks

- Git status/diff are unverified due missing Git command.
- Browser visual verification was not completed in the final sealed state.
- Article archive, recent posts, and `一些思绪` tag page depend on `assets/content.js` loading successfully.
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
   - `node --check assets/gripes.js`
5. Search for writer feature leftovers:
   - `write.html`
   - `editor.html`
   - `write-link`
   - `data-auth`
   - `data-editor`
   - `WRITER`
   - `撰写`
6. Skip browser visual verification by project preference unless the user explicitly asks later or a higher-priority instruction requires it. If requested or required, browser-check local pages:
   - `index.html`
   - `posts.html`
   - one tag page
   - one public article page after a new article is added
   - `friends.html`
7. Ask the user what phase two should do.
