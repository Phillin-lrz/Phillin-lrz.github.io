# AGENT_TODO

Last updated: 2026-06-11

Use this file before starting phase two or any future multi-file work. Do not rely on chat history as the only source of truth.

## 1. Phase One Completed

- [x] Confirmed repository is a static site with root HTML pages and shared assets.
- [x] Confirmed `index.html` brands site as `Phil Lin的Bar`.
- [x] Confirmed navigation includes `首页`, `文章`, `酒评`, `摄影作品`, `友链`, `关于我`.
- [x] Confirmed no `撰写` nav entry remains in HTML pages.
- [x] Confirmed `write.html` and `editor.html` are deleted from the working tree.
- [x] Confirmed `assets/site.js` no longer contains writer/auth/editor functions.
- [x] Confirmed `assets/styles.css` no longer contains writer/auth/editor styles.
- [x] Confirmed `assets/content.js` uses lightweight article index entries.
- [x] Deleted the placeholder public article index `to-be-continue`.
- [x] Deleted `article-to-be-continue.html`.
- [x] Confirmed tag archive pages exist:
  - `tag-lab.html`
  - `tag-thoughts.html`
  - `tag-recommendations.html`
- [x] Confirmed `posts.html` has tag filter buttons for all three tags.
- [x] Confirmed `friends.html` contains StarCried and CrescentYves friend cards and avatars.
- [x] Added right-side `吐槽` rail rendering from static `window.BAR_GRIPES` data.
- [x] Published first gripe entry with second-level timestamp.
- [x] Split gripe data into `assets/gripes.js` so `assets/content.js` stays focused on article/review metadata.
- [x] Confirmed `reviews.html` and `gallery.html` exist with placeholder content.
- [x] Confirmed `.git/config` remote URL is `https://github.com/Phillin-lrz/Phillin-lrz.github.io.git`.
- [x] Confirmed JavaScript syntax for `assets/site.js` and `assets/content.js` in the final check.

## 2. Phase-One Remaining Issues

- [ ] Run `git status --short` once Git is available; current environment cannot find `git`.
- [ ] Run `git diff --stat` and `git diff -- .` once Git is available; current environment cannot find `git`.
- [ ] Keep attempting relevant `node --check` commands when JavaScript files change; if Node is unavailable, record the limitation.
- [ ] Do not use Node REPL as a routine fallback for blocked `node --check` or browser verification.
- [ ] Visual verification is skipped by current project preference unless the user explicitly asks for it later or a higher-priority instruction requires it.
- [ ] If visual verification is skipped after frontend changes, report residual visual risk instead of claiming browser/layout verification.
- [ ] Verify `assets/cocktail-hero.png` and `assets/hero-workspace.png` are truly unused before deleting or keeping intentionally.
- [ ] Decide whether `article.html` should remain as compatibility fallback or be removed after static article pages are fully adopted.
- [ ] Decide whether `BAR_REVIEWS` should render `reviews.html` dynamically or remain a future data hook.
- [ ] Verify the online GitHub Pages deployment reflects local files after push.

## 3. Phase-Two Candidate Tasks

- [x] Implement broad abstract cocktail-bar visual redesign:
  - Home page becomes a bar-menu style board.
  - Secondary pages present as different drink identities.
  - Mouse interaction includes a bar cursor and menu drink hover labels.
  - Existing copy mostly preserved.
  - Friend-link avatars restored unchanged per user clarification.
  - Screenshots not generated because user chose direct `.html` review.
- [x] Published approved Word article preview:
  - Confirmed `preview-20260611.html` was acceptable.
  - Generated final static article HTML at `article-first-words-on-the-bar.html`.
  - Added one metadata object to `assets/content.js` with tag `一些思绪`.
  - Deleted `preview-20260611.html`.
  - Verified generated article path from metadata.
- [ ] Implement broader Word-to-article conversion workflow:
  - Extract text and images from a provided `.docx`.
  - Save images to `assets/posts/<article-id>/`.
  - Generate `article-<article-id>.html`.
  - Add one metadata object to `assets/content.js`.
  - Verify generated article path from `posts.html`.
- [ ] Add a reusable article HTML template for generated articles, based on `_drafts/article-format-reference.html`.
- [ ] Make `reviews.html` render from `window.BAR_REVIEWS` instead of hardcoded placeholder cards.
- [ ] If gripe count grows large, revisit scheme 3 or 4 for the gripe rail: paginated static files or JSON on-demand loading.
- [ ] Add real photography entries to `gallery.html` and decide image folder structure, likely `assets/gallery/`.
- [ ] Add better empty-state text for tag pages with no articles.
- [ ] Add a small documentation section showing how to manually add a new static article.
- [ ] Reassess whether `article.html` dynamic fallback is still needed after static article generation is stable.
- [ ] Audit all pages for consistent footer text and theme toggle labels.
- [ ] Consider moving repeated header/nav/footer into a generation workflow only if user approves introducing tooling.

## 4. Current Blockers

- [ ] `git` is not available in current shell; cannot produce authoritative git status or diff.
- [ ] In-app browser automation has been unreliable/blocked; visual verification cannot be claimed until a browser check succeeds.
- [x] One Word document has been published as `article-first-words-on-the-bar.html`.
- [ ] No explicit phase-two scope has been approved after first-stage sealing.

## 5. Needs Human Confirmation

- [ ] Confirm whether phase two should start with Word-to-article conversion.
- [ ] Confirm whether article file names should use English slugs, pinyin, or generated ids.
- [ ] Confirm whether new article images should be compressed/resized or preserved as-is.
- [ ] Confirm whether unused assets `assets/cocktail-hero.png` and `assets/hero-workspace.png` may be deleted.
- [ ] Confirm whether the public site title should remain `Phil Lin的Bar | 酒鬼医学生的博客`.
- [ ] Confirm whether `article.html?id=...` should remain publicly available as fallback.
- [ ] Confirm whether review/gallery content should stay placeholder until manually authored.

## 6. Validation Steps That Must Not Be Skipped

- [ ] Before future development, read:
  - `AGENT_CONTEXT.md`
  - `AGENT_TODO.md`
  - `AGENT_CHANGELOG.md`
  - `AGENT_HANDOFF.md`
  - `README.md`
- [ ] Attempt `git status --short`; record if unavailable.
- [ ] Attempt `git diff --stat`; record if unavailable.
- [ ] Run JavaScript syntax checks:
  - `node --check assets/site.js`
  - `node --check assets/content.js`
  - `node --check assets/gripes.js`
- [ ] Search for accidental writer resurrection:
  - `write.html`
  - `editor.html`
  - `write-link`
  - `data-auth`
  - `data-editor`
  - `WRITER`
  - `撰写`
- [ ] Search for stale cache query strings before finalizing:
  - old values such as `bar-export-20260610` or earlier.
- [ ] Skip browser visual verification by project preference unless the user explicitly asks for it later or a higher-priority instruction requires it.
- [ ] If browser visual verification is requested or required, browser-check at least:
  - `index.html`
  - `posts.html`
  - one tag page
  - one public article page after a new article is added
  - `friends.html`
- [ ] If Word conversion is implemented, verify:
  - generated article HTML opens
  - all extracted image paths resolve
  - `assets/content.js` syntax remains valid
  - article appears in home recent posts when date is newest
  - article appears in the correct tag page

## 7. Recommended First Step Next Time

1. Read `AGENT_HANDOFF.md`.
2. Read this file and `AGENT_CONTEXT.md`.
3. Run or attempt:
   - `git status --short`
   - `git diff --stat`
   - `node --check assets/site.js`
   - `node --check assets/content.js`
   - `node --check assets/gripes.js`
4. Ask the user to confirm the exact phase-two objective before changing code.
