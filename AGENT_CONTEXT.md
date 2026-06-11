# AGENT_CONTEXT

Last updated: 2026-06-11

This file externalizes the verified phase-one project context. Do not treat chat history or auto summaries as authoritative. Reconfirm current state from repository files, command output, and validation results before future development.

## 2026-06-11 Project-Level Agent Preferences

- Skip visual verification by default for this project.
- Do not open browser visual checks unless the user explicitly asks later or a higher-priority instruction requires them.
- When frontend work is completed, report that visual verification was skipped by project preference and list residual visual risk if relevant.
- Use file-level checks, reference searches, syntax checks when available, and static reasoning instead.
- Never claim layout, screenshot, or browser visual verification unless it was actually performed.
- If future instructions conflict with this preference, state the conflict clearly.
- Keep Git checks and `node --check` syntax checks as project-level validation attempts when relevant.
- If Git or Node remains unavailable, record the exact limitation and continue with file-level checks.
- Do not use Node REPL as a routine fallback for blocked `node --check` or browser verification; reserve it for explicit runtime debugging requests or higher-priority requirements.

## 2026-06-11 Gripe Rail State

- The site now has a right-side `吐槽` rail rendered by `assets/site.js` on pages that load `assets/content.js`.
- Static gripe entries are stored in `window.BAR_GRIPES` inside `assets/gripes.js`; this is the GitHub Pages-compatible data pool, not a server database.
- Each gripe entry contains `text`, `mood`, `emoji`, and `publishedAt` with second-level precision.
- The first gripe is published with mood `烦恼`, emoji `😫`, and timestamp `2026-06-11 12:40:15`.
- The rail calculates a per-page display count from page height and uses previous/next pagination for additional gripes.
- Desktop layout reserves right-side space for the rail; narrow screens show it as a normal responsive block.
- Scheme 2 is the active implementation: gripe data is split out of `assets/content.js` into `assets/gripes.js`, while the DOM still renders only the current visible page of gripes.
- If gripe volume grows large enough for `assets/gripes.js` to become heavy, revisit scheme 3 or scheme 4: paginated static gripe files or JSON on-demand loading.
- Future reminder: when gripe count grows enough to create load or maintenance pressure, remind the user that scheme 3 and scheme 4 were discussed on 2026-06-11.

## 1. Current Project Goal

Build and maintain a static personal GitHub Pages website for `Phil Lin的Bar`, with a dark cocktail-bar visual language, article browsing, tags, friend links, cocktail review placeholder content, and gallery placeholder content.

The site is currently a static HTML/CSS/JavaScript site. There is no build pipeline, package manager, server backend, database, or framework configured in the repository.

## 2. Phase-One Original Goals

Verified from current repository state and request-driven implemented artifacts:

- Rename/site-brand the website as `Phil Lin的Bar`.
- Replace older guide/admin wording with `关于我`.
- Remove the placeholder public article `To Be Continue` / `To Be Continued`, and retain one draft/reference article outside public navigation.
- Add a friend-link page for `StarCried`, including avatar, name, description, and outbound link.
- Add home friend-link entry.
- Add `酒评` and `摄影作品` navigation pages.
- Redesign the site around a cocktail/bar mood using abstract CSS/canvas visuals rather than generated photographic backgrounds.
- Add article categories/tags: `生活日志`, `一些思绪`, `种草安利`.
- Add article archive filtering by tag.
- Add three tag pages linked from the home topic cards.
- Make recent home articles render from article metadata and show the newest up to three posts.
- Convert article management direction to a lightweight index plus separate article HTML files.
- Remove the earlier browser-only `撰写` feature and its validation/editor pages.
- Update repository references for GitHub username `Phillin-lrz` where verified in docs/config.

## 3. Phase-One Completed Content

Verified in files:

- `index.html`
  - Home page title is `Phil Lin的Bar | 酒鬼医学生的博客`.
  - Brand text is `Phil Lin的Bar`.
  - Navigation contains `首页`, `文章`, `酒评`, `摄影作品`, `友链`, `关于我`.
  - Hero uses cocktail labels and abstract glass glyphs: Martini, Old Fashioned, Whisky Sour, Paloma.
  - Topic cards link to:
    - `tag-lab.html`
    - `tag-thoughts.html`
    - `tag-recommendations.html`
  - Recent posts container uses `data-recent-posts`.

- `assets/content.js`
  - `window.BAR_TAGS` has exactly `["生活日志", "一些思绪", "种草安利"]`.
  - `window.BAR_POSTS` contains one public article entry for `article-first-words-on-the-bar.html`.
  - `window.BAR_REVIEWS` contains placeholder review metadata.

- `posts.html`
  - Article archive has tag filter buttons for `全部`, `生活日志`, `一些思绪`, `种草安利`.
  - Article list is rendered into `data-post-list`.

- Tag pages:
  - `tag-lab.html` renders posts with `data-tag-posts="生活日志"`.
  - `tag-thoughts.html` renders posts with `data-tag-posts="一些思绪"`.
  - `tag-recommendations.html` renders posts with `data-tag-posts="种草安利"`.

- Article pages:
  - One public static article page currently exists: `article-first-words-on-the-bar.html`.
  - `article.html` is a dynamic fallback/detail renderer for posts that include inline `content` in `content.js`; current recommended pattern is separate static article HTML files, so this dynamic page is retained for compatibility but is not the primary authoring path.
  - `_drafts/article-format-reference.html` is retained as a format/reference draft and is not linked from public page lists.

- Friend links:
  - `friends.html` contains a StarCried friend card.
  - StarCried outbound URL is `https://starcried.github.io/`.
  - Avatar file is `assets/starcried-avatar.png`.
  - `friends.html` contains a CrescentYves friend card.
  - CrescentYves outbound URL is `https://crescentyves.me/`.
  - Avatar file is `assets/crescentyves-avatar.jpg`.

- Pages added or retained:
  - `reviews.html` shows cocktail-review placeholder cards.
  - `gallery.html` shows gallery placeholder tiles.
  - `about.html` is the about page.

- Visual design:
  - `assets/styles.css` defines the dark cocktail/bar palette and glass glyph styling.
  - `assets/site.js` creates a fixed canvas background with cocktail-shaped constellations and pointer connections.

- Removed feature:
  - `write.html` and `editor.html` no longer exist.
  - Searches found no remaining `write.html`, `editor.html`, `write-link`, `data-auth`, `data-editor`, `WRITER`, or `撰写` references after removal.

- GitHub username references:
  - `.git/config` remote is `https://github.com/Phillin-lrz/Phillin-lrz.github.io.git`.
  - README deployment docs reference `Phillin-lrz.github.io`.

## 4. Explicitly Not Done In Phase One

- No second-stage development has started.
- No backend, authentication, CMS, database, or server-side publishing system exists.
- No dependency installation or framework migration was performed.
- No automated deployment was run.
- No commit was created in this session because the available shell cannot run `git`.
- No visual browser screenshot verification was completed in the final sealed state. Browser automation attempts in earlier work were blocked by local sandbox issues; current seal verification is file and JavaScript syntax based.
- No custom domain configuration was added.
- No comment system was added.
- No real cocktail review content or real photography portfolio content was authored beyond placeholders.
- One Word document was published as `article-first-words-on-the-bar.html`.

## 5. Current Code Architecture Understanding

Static site architecture:

- HTML files are route/page files.
- `assets/styles.css` is the shared visual system and responsive layout file.
- `assets/site.js` provides:
  - particle/cocktail-constellation canvas background
  - particle toggle persistence via `localStorage`
  - accent button support for any remaining `[data-accent]` controls
  - post rendering from `window.BAR_POSTS`
  - article archive filtering
  - tag page rendering
  - dynamic article rendering fallback
- `assets/content.js` is a lightweight metadata index.
- Public article bodies should live in separate article HTML files. `assets/content.js` should point to those files via `url`. It currently has one public article entry.
- Article images should be placed under `assets/posts/<article-id>/` when generated from Word or other rich sources.

## 6. Key Files And Modules

- `index.html`: home page; hero, topic cards, feature cards, friend entry, recent article container.
- `posts.html`: article archive and filter UI.
- `tag-lab.html`: tag landing page for `生活日志`.
- `tag-thoughts.html`: tag landing page for `一些思绪`.
- `tag-recommendations.html`: tag landing page for `种草安利`.
- `article.html`: dynamic article fallback for metadata-driven inline content.
- `article-first-words-on-the-bar.html`: first published article, tag `一些思绪`.
- `_drafts/article-format-reference.html`: non-public reference article template.
- `reviews.html`: cocktail review placeholder page.
- `gallery.html`: gallery placeholder page.
- `friends.html`: StarCried friend-link page.
- `about.html`: about page.
- `assets/content.js`: article tag/review metadata.
- `assets/gripes.js`: static gripe-column data.
- `assets/site.js`: canvas interaction and post rendering logic.
- `assets/styles.css`: shared CSS, dark bar visual language.
- `assets/starcried-avatar.png`: StarCried avatar.
- `assets/crescentyves-avatar.jpg`: CrescentYves avatar.
- `assets/posts/.gitkeep`: placeholder for future article image directories.
- `README.md`: human maintenance notes.

## 7. Key Technical Decisions

### Decision: Use static HTML/CSS/JS only

Reason:
- The repository is a static GitHub Pages site with no package/build system.
- Avoided unnecessary dependencies and deployment complexity.

Alternatives not chosen:
- React/Vue/Svelte app.
- Static-site generator migration.
- Server-backed CMS.

### Decision: Keep `content.js` as metadata index only

Reason:
- Full article bodies and base64 images make `content.js` too large and fragile.
- Metadata index allows home/archive/tag pages to stay fast and simple.

Alternatives not chosen:
- Store every article body inside `content.js`.
- Store articles in browser `localStorage`.
- Build a backend writing API.

### Decision: Use separate HTML files for article bodies

Reason:
- GitHub Pages can serve static article files directly.
- Easier to edit, review, rollback, and attach images by relative path.

Alternatives not chosen:
- One dynamic `article.html?id=...` page as the primary route.
- Client-only generated articles.

### Decision: Remove the `撰写` feature

Reason:
- User explicitly requested deletion.
- Client-side write/auth pages created confusion because a static site cannot write permanent files to the repo.

Alternatives not chosen:
- Keep hidden editor.
- Keep local-only publishing.
- Add backend authentication.

### Decision: Abstract cocktail/bar design, not photographic background

Reason:
- User requested recognizable cocktail mood without direct generated image background.
- CSS glyphs and canvas constellations satisfy the visual direction while staying lightweight.

Alternatives not chosen:
- Generated bitmap hero background.
- Realistic bar/cocktail photo background.

### Decision: Cache-busting query string `bar-clean-20260610`

Reason:
- Previous changes appeared stale in browser; query version helps force updated CSS/JS.

Alternatives not chosen:
- Leave old query string.
- Introduce build-hash tooling.

## 8. Current Constraints

- Static GitHub Pages only.
- No server-side write capability.
- No database schema exists.
- No package manager or bundler exists.
- `git` command is unavailable in the current shell environment; git status/diff could not be executed.
- In-app browser automation is unreliable/blocked in this environment.
- Keep CSS/JS paths relative for GitHub Pages portability.
- Avoid storing large base64 images in `content.js`.
- Use `assets/posts/<article-id>/` for future post images.

## 9. Non-Goals / Do Not Violate

- Do not start phase-two development before reading these context files and confirming scope.
- Do not rely on chat history as the only memory source.
- Do not introduce new dependencies without explicit approval.
- Do not migrate to a framework without explicit approval.
- Do not create a backend/CMS/auth system without explicit approval.
- Do not change the public navigation labels casually.
- Do not store long article bodies or base64 images in `assets/content.js`.
- Do not delete compatibility files unless a replacement path and rollback are clear.
- Do not expand diff scope into unrelated refactors.
- Do not remove `article.html` unless all links and compatibility expectations are audited.
- Do not claim git diff/status/browser verification unless commands actually ran successfully.

## 10. Known Risks

- `git` command is unavailable, so actual working-tree state and diff are not verified through git.
- Browser visual verification could not be completed during final sealing.
- `assets/cocktail-hero.png` and `assets/hero-workspace.png` exist; current verified pages do not reference them, but they increase repository size.
- `article.html` renders `post.content` if present, but current recommended metadata-only pattern does not include content. It remains a compatibility fallback.
- The article archive, recent posts, and tag pages now show empty states until a new public article is added.
- `reviews.html` currently hardcodes review placeholder cards instead of rendering from `window.BAR_REVIEWS`; `BAR_REVIEWS` is currently metadata documentation/future hook.
- `data-accent` logic remains in `site.js`, but current visible pages may not use it.
- Word-to-HTML conversion is not yet implemented; future conversion must preserve images and paths carefully.
- External link `https://starcried.github.io/` was not revalidated during this sealing pass.

## 11. Most Likely Information To Be Lost After Context Folding

- The `撰写` feature was intentionally removed; do not restore it unless user asks.
- `content.js` should remain a lightweight article index only.
- Public article bodies should be separate HTML files.
- `article.html` is compatibility/fallback, not the primary article-authoring path.
- Git and JavaScript syntax verification were limited by environment, so future work should re-run them when tools are available.
- Browser visual verification is skipped by project preference unless explicitly requested or required by a higher-priority instruction.
- The GitHub remote in `.git/config` is already updated to `Phillin-lrz`.
- `assets/cocktail-hero.png` is present but should be treated as unused unless verified otherwise.

## 12. Must Reconfirm Before Phase Two

- User's exact phase-two goal and whether it includes Word document conversion.
- Whether the site should keep the current title `Phil Lin的Bar | 酒鬼医学生的博客`.
- Whether `article.html` should remain as fallback or be removed after all articles are static.
- Whether `reviews.html` should be data-driven from `BAR_REVIEWS`.
- Whether unused image assets may be deleted.
- Whether Git is available in the user's actual terminal and whether latest changes have been committed/pushed.
- Whether the online GitHub Pages site reflects local files after deployment.

## 13. Current Acceptance Criteria And Status

- Context externalized to repo files: pending at time of writing this file, completed when all four AGENT files exist.
- First-stage site state recoverable from files: satisfied by `AGENT_CONTEXT.md`, `AGENT_TODO.md`, `AGENT_CHANGELOG.md`, `AGENT_HANDOFF.md` once created.
- No second-stage development started: satisfied.
- Verified not relying on chat only: satisfied for major facts by reading current files and command output.
- JavaScript syntax validation: to be recorded after final check.
- Git status/diff validation: not satisfied because `git` command is unavailable in current environment.
- Browser visual validation: not satisfied in this sealing pass.
