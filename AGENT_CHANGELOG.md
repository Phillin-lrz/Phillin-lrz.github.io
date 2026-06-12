# AGENT_CHANGELOG

Last updated: 2026-06-12

## 2026-06-12 Abstract Bar Menu Redesign

User requested a broad visual redesign while preserving the cocktail-bar concept, avoiding realistic images/scenes where possible, and making the home page feel like a bar menu where each menu item is a drink leading to a page.

- Rebuilt `index.html` hero area as a menu board with drink/page pairings: `Paper Plane · 文章`, `Highball · 生活日志`, `Old Fashioned · 一些思绪`, `Paloma · 种草安利`, `Negroni · 酒评`, `French 75 · 摄影作品`, `Tom Collins · 友链`, and `Martini · 关于我`.
- Added drink identity badges to secondary pages and article pages.
- Added abstract CSS drink glyphs, dot fields, line grids, polygon overlays, and menu-card styling in `assets/styles.css`.
- Added a lightweight pointer-following bar cursor in `assets/site.js`; hovering menu drinks shows the drink name.
- Kept existing page copy mostly unchanged, except for necessary drink/page labels.
- Initially replaced friend avatars with abstract marks, then restored the original avatar images after user clarified that all friend-link information and avatars must remain unchanged.
- User changed the preview requirement: do not generate screenshots; they will open `.html` files directly for review.
- Verification performed: `node --check assets/site.js`, `node --check assets/content.js`, `node --check assets/gripes.js`, `git status --short`, `git diff --stat`, `git diff -- .`, and `Select-String` confirming the only `<img>` tags are the two friend-link avatars in `friends.html`.
- Visual browser screenshots were not generated because the user explicitly cancelled screenshot generation and chose direct HTML review.
- Follow-up refinement: user disliked the orphaned `Martini · 关于我` tile and requested less blank space. The home menu is now a strict 4-by-2 grid, `menu-drink-large` was removed, a CSS-only abstract bar shelf was added near the menu header, and the Friends/recent-posts blocks were combined into a two-column `home-followup` section.
- Later correction: user clarified that the Friends/recent-posts area did not need layout changes. Restored that area to the original `split-section` structure, kept the strict 4-by-2 home menu, and expanded the abstract alcohol motifs across the site with CSS-only base-spirit bottle shadows, wine/coupe forms, and craft-beer foam/tap-like accents.
- Additional refinement: user felt some graphics were too abstract and the left side of the home `Phil Lin的Bar` title felt empty. Added a CSS-only `menu-emblem` beside the title with a coupe-like glass, stirring spoon, citrus/olive accents, and strengthened drink glyphs with more recognizable liquid, ice, bubbles, garnish, and foam details.
- Badge asset generation: user asked Codex to generate a site badge image. Generated an abstract cocktail/bar badge and copied it to `assets/bar-badge.png`. Replaced the text `B` brand mark across public pages with this image and used the same badge beside the home heading.
- Latest title/glyph refinement: user felt the Paper Plane graphic was too casual and the large home title badge looked unsophisticated. Replaced the large home heading badge with a smaller `menu-kicker` lockup using the generated badge, menu label, and year. Reworked `.paper-plane-glyph` to read as a coupe-style cocktail with an abstract folded-paper garnish instead of a loose paper-airplane icon.
- Background decision: user rejected the standalone D/E preview pages and chose the earlier recommended A+E direction. Deleted `previews/background-d-star-cellar.html` and `previews/background-e-menu-paper.html`. Updated the formal `assets/styles.css` background to combine dark menu-paper texture, subtle foil border, and restrained cocktail-blueprint lines/nodes.
- Visual bugfix: user reported abstract graphics were misaligned on subpages, especially five unexplained vertical lines in the upper-left area. The cause was the recipe-tick pseudo-element shared by `.drink-heading::before` and `.article-header::before`. Restricted that tick decoration to `.menu-board .menu-intro::after` only, and disabled it on subpage/article headings.
- Visual bugfix: user reported every subpage drink icon was misaligned. The cause was the subpage `.drink-portrait` rule shrinking the internal `.drink-glyph > span` box while the glyph pseudo-elements still used full-size rem geometry. Changed subpage drink icons to keep the full glyph box and scale it uniformly with `transform: scale(0.62)`.
- Subpage drink badge sizing: user asked for the drink icon and text beside it to be larger and better fit the badge box. Increased `.drink-portrait` gap, padding, min-height, font size, icon frame, and glyph scale from `0.62` to `0.72`.

## 2026-06-12 Gripe Added

User provided a gripe text and mood `无语`.

- Added a second `window.BAR_GRIPES` entry to `assets/gripes.js`.
- Published gripe: `最近一直在感觉自己很忙和自己很闲之间来回跳跃。`
- Recorded mood as `无语`, emoji as `😶`, and timestamp as `2026-06-12 12:29:58`.
- Updated `AGENT_CONTEXT.md` and `AGENT_HANDOFF.md` so future recovery sees the current gripe count and latest entry.
- Visual verification skipped by project preference.

## 2026-06-11 Command Validation Policy

User reviewed repeated command failures and decided the project should keep Git checks and `node --check`, skip browser visual verification by default, and stop using Node REPL as a routine fallback.

- Keep attempting `git status --short`, `git diff --stat`, and `git diff -- .` for recovery and diff awareness.
- Keep attempting `node --check` for relevant JavaScript files, including `assets/site.js`, `assets/content.js`, and `assets/gripes.js`.
- Continue skipping browser visual verification by project preference unless explicitly requested or required by higher-priority instructions.
- Do not attempt Node REPL fallback as a routine substitute for blocked `node --check` or blocked browser verification.
- If Git or Node commands fail, record the exact limitation and rely on file-level checks.

## 2026-06-11 Project Preferences Localized

User asked whether global-related settings could be written into this project's durable AGENT files, and requested that they be transferred if effective.

- Added a project-level preference to `AGENTS.md`: skip visual verification by default unless the user explicitly asks later or a higher-priority instruction requires it.
- Added the same preference to `AGENT_CONTEXT.md`, including the requirement to report skipped visual verification and residual visual risk.
- Updated `AGENT_TODO.md` validation steps so browser visual checks are conditional instead of default.
- Preserved the gripe scale-up reminder in project state: if `assets/gripes.js` becomes too heavy, remind the user about scheme 3 or scheme 4.
- Clarified that project files can achieve this effect for this repository because startup recovery requires reading `AGENTS.md` and the AGENT state files before non-trivial work.
- Limitation: this affects this repository's project workflow; it does not erase any separate global memory note that may also exist.

## 2026-06-11 Gripe Data Split

User chose scheme 2 for gripe rail scaling and asked to remember scheme 3/4 for future upgrades.

- Moved `window.BAR_GRIPES` out of `assets/content.js`.
- Added `assets/gripes.js` as the dedicated static gripe data file.
- Updated all HTML pages to load `gripes.js` between `content.js` and `site.js`.
- Kept the existing rendering behavior: only the current visible page of gripes is rendered into the DOM.
- Documented scheme 3 and scheme 4 as future upgrade paths if the gripe count makes `assets/gripes.js` too large.
- Scheme 3: split static gripe data into paginated files and load the needed page.
- Scheme 4: move gripe data into JSON and fetch it on demand.
- Added an ad-hoc memory note so future work can remind the user of this discussion.
- Verification performed: confirmed `BAR_GRIPES` now lives in `assets/gripes.js` and every HTML page loads `content.js`, `gripes.js`, then `site.js`.
- Verification blocked: `node --check` could not run because `node.exe` returned access denied; `git status` could not run because `git` is not recognized.
- Visual verification skipped per user global preference.

## 2026-06-11 Gripe Rail Added

User requested a right-side `吐槽` column on every page with forum-like pagination and a first gripe entry.

- Added `window.BAR_GRIPES` to `assets/content.js`.
- Published first gripe: `做实验永远都要留出实验时间10%-50%的计划时间余量，不然就会完蛋。`
- Recorded mood as `烦恼`, emoji as `😫`, and timestamp as `2026-06-11 12:40:15`.
- Updated `assets/site.js` to inject a `吐槽` rail on pages that load `assets/content.js`.
- The rail calculates a per-page display count from page height and paginates additional entries with previous/next controls.
- Updated `assets/styles.css` to reserve desktop right-side space and provide responsive layout on narrow screens.
- Updated `_drafts/article-format-reference.html` to load `../assets/content.js` so the rail can render there too.
- Updated README and AGENT state files with the static data-pool behavior.
- Limitation: this is a static GitHub Pages data pool, not a real server backend or user-submitted database.
- Verification performed: searched for `BAR_GRIPES`, gripe rail selectors, the first gripe text, and confirmed every HTML page loads `content.js` plus `site.js`.
- Verification blocked: `node --check` could not run because `node.exe` returned access denied, and browser visual verification could not run because the browser runtime was blocked by the current sandbox.

## 2026-06-11 Friend Link Added

User requested a new friend link for CrescentYves.

- Added CrescentYves to `friends.html`.
- Copied the provided avatar image to `assets/crescentyves-avatar.jpg`.
- Linked the card to `https://crescentyves.me/`.
- Added spacing to `.friend-showcase` so multiple friend cards are separated.
- Updated AGENT context and handoff files with the new friend-link state.
- Verification performed: confirmed the copied avatar file exists and searched for CrescentYves references.
- Verification blocked: browser visual verification could not run because the browser runtime was blocked by the current sandbox.

## 2026-06-11 Word Article Published

User provided `20260611.docx` and requested Codex choose the title and summary, with tag `一些思绪`.

- Read the Word document from the user-provided desktop path after permission was granted.
- Extracted six text paragraphs and confirmed no embedded media files were present.
- Generated `preview-20260611.html` as a review-only article preview.
- Updated the preview layout so the tag line and summary sit directly under the title instead of in the sidebar.
- After user approval, generated the final article file `article-first-words-on-the-bar.html`.
- Added a `BAR_POSTS` metadata entry pointing to `article-first-words-on-the-bar.html`.
- Deleted `preview-20260611.html`.
- Proposed title: `把第一杯文字放上吧台`.
- Proposed summary: `凌晨实验后写下的网站开篇：关于这个个人空间的来处、栏目、酒、摄影，以及一个不急着被定义的自我介绍。`
- The article now appears through the home recent-posts area, `posts.html`, and `tag-thoughts.html`.

Important limitation: `git` is not available in the current shell, so this changelog is based on current file state, repository scans, `.git/config`, and JavaScript syntax checks. It is not an authoritative git diff. Re-run `git status` and `git diff` when Git is available.

## 2026-06-11 Tag Rename

User changed the first home topic card to `生活日志` and requested all remaining site references be renamed consistently.

- Updated tag metadata in `assets/content.js`.
- Updated archive filter copy and filter value in `posts.html`.
- Updated `tag-lab.html` title, heading, and `data-tag-posts` value.
- Updated remaining visible copy in `about.html` and README examples.
- Updated AGENT state files so future recovery treats `生活日志` as the first article tag.

## 2026-06-11 Article Deletion

User requested deletion of the placeholder article named `To Be Continued` / `To Be Continue`.

- Deleted `article-to-be-continue.html`.
- Cleared `window.BAR_POSTS` in `assets/content.js`, leaving no public article entries.
- Updated `AGENT_CONTEXT.md`, `AGENT_TODO.md`, and `AGENT_HANDOFF.md` so future recovery does not restore or assume the deleted article.
- Expected behavior: home recent posts, article archive, and tag pages display their empty states until a new article is added.
- Verification performed: runtime references were searched in public HTML/assets/README scope; no old article references were found.
- Verification blocked: `node --check assets/content.js` and `node --check assets/site.js` could not run because `node.exe` returned access denied in the current environment; Node REPL fallback also failed due sandbox setup.
- Verification still required: JavaScript syntax check and browser visual check.
- Git status/diff remain unavailable if `git` is still not recognized in the current shell.

## Verification Performed During Context Sealing

- Project structure listed with PowerShell `Get-ChildItem`.
- Current files read directly with `Get-Content -Raw -Encoding UTF8`.
- `.git/config` read directly; remote URL is `https://github.com/Phillin-lrz/Phillin-lrz.github.io.git`.
- `git status --short` attempted and failed because `git` command was not recognized.
- `git diff --stat` and `git diff -- .` attempted and failed because `git` command was not recognized.
- `node --check assets/site.js` executed successfully using bundled Node.
- `node --check assets/content.js` executed successfully using bundled Node.
- Search for removed writer artifacts returned no matches for `write.html`, `editor.html`, `write-link`, `data-auth`, `data-editor`, `WRITER`, `撰写`, and stale `bar-export-20260610` after cleanup.

## File Changes

### `index.html`

- Type: modified
- Reason: Home page for the static personal site.
- Behavior change:
  - Shows `Phil Lin的Bar` branding.
  - Navigation links to home, articles, reviews, gallery, friends, and about.
  - Home topic cards link to the three tag pages.
  - Recent posts render into `data-recent-posts` from `assets/content.js`.
  - `撰写` entry is removed.
  - CSS/JS query version is `bar-clean-20260610`.
- Potential risk:
  - Recent posts depend on `assets/content.js` and `assets/site.js` loading successfully.
  - Browser layout not visually verified in final sealing pass.
- Executed verification:
  - File read directly.
  - Search confirmed no writer entry remains.
  - `assets/site.js` syntax check passed.
- Not executed:
  - Browser visual screenshot check.
  - Git diff comparison.
- Rollback:
  - Revert `index.html` from git once git is available, or restore from a known backup.

### `posts.html`

- Type: modified
- Reason: Add tag-based article archive filtering.
- Behavior change:
  - Article cards render into `data-post-list`.
  - Filter buttons support all posts and three tags.
  - `撰写` entry is removed.
- Potential risk:
  - If `BAR_POSTS` has invalid dates or tags, sorting/filtering may produce unexpected order or empty views.
- Executed verification:
  - File read directly.
  - `assets/site.js` syntax check passed.
- Not executed:
  - Browser click test of filter buttons.
  - Git diff comparison.
- Rollback:
  - Restore previous `posts.html` from git or backup.

### `tag-lab.html`

- Type: added
- Reason: Tag landing page for `生活日志`.
- Behavior change:
  - Renders posts matching `data-tag-posts="生活日志"`.
- Potential risk:
  - Empty state appears if there are no matching posts.
- Executed verification:
  - File read directly.
  - Shared script syntax check passed.
- Not executed:
  - Browser visual check.
  - Git diff comparison.
- Rollback:
  - Delete `tag-lab.html` and remove links from `index.html` if reverting tag pages.

### `tag-thoughts.html`

- Type: added
- Reason: Tag landing page for `一些思绪`.
- Behavior change:
  - Renders posts matching `data-tag-posts="一些思绪"`.
- Potential risk:
  - Depends on exact tag text matching `assets/content.js`.
- Executed verification:
  - File read directly.
  - Shared script syntax check passed.
- Not executed:
  - Browser visual check.
  - Git diff comparison.
- Rollback:
  - Delete `tag-thoughts.html` and remove links from `index.html` if reverting tag pages.

### `tag-recommendations.html`

- Type: added
- Reason: Tag landing page for `种草安利`.
- Behavior change:
  - Renders posts matching `data-tag-posts="种草安利"`.
- Potential risk:
  - Empty state appears until posts with this tag exist.
- Executed verification:
  - File read directly.
  - Shared script syntax check passed.
- Not executed:
  - Browser visual check.
  - Git diff comparison.
- Rollback:
  - Delete `tag-recommendations.html` and remove links from `index.html` if reverting tag pages.

### `assets/content.js`

- Type: added/modified, exact git origin pending confirmation
- Reason: Central metadata index for tags, posts, and review placeholders.
- Behavior change:
  - Defines `window.BAR_TAGS`.
  - Defines lightweight `window.BAR_POSTS`, currently with one published article entry.
  - Defines `window.BAR_REVIEWS` placeholder metadata.
  - No longer stores article body `content`; the placeholder article entry was removed.
- Potential risk:
  - Syntax errors in this file break article rendering across home/archive/tag pages.
  - `BAR_REVIEWS` is not currently used by `reviews.html`.
- Executed verification:
  - File read directly.
  - Bundled Node `--check` passed.
- Not executed:
  - Browser render verification.
  - Git diff comparison.
- Rollback:
  - Restore previous `assets/content.js` from git or backup.

### `assets/site.js`

- Type: modified
- Reason: Add cocktail canvas interaction and article rendering; later remove writer/editor logic.
- Behavior change:
  - Creates fixed canvas background with cocktail-shaped constellations and pointer lines.
  - Toggles canvas visibility via `localStorage` key `blog-particles`.
  - Renders recent posts, archive list, tag pages, and dynamic article fallback.
  - No writer/auth/editor/download functions remain.
- Potential risk:
  - Canvas is created on every page; visual or performance impact should be browser-checked.
  - `article.html` displays summary only if post metadata does not include `content`.
  - Date sorting depends on valid ISO-like `publishedAt`.
- Executed verification:
  - File read directly.
  - Bundled Node `--check` passed.
  - Search confirmed writer identifiers removed.
- Not executed:
  - Browser interaction/canvas visual check.
  - Git diff comparison.
- Rollback:
  - Restore previous `assets/site.js` from git or backup.

### `assets/styles.css`

- Type: modified
- Reason: Implement dark cocktail/bar visual system and page/card layouts; later remove writer/editor styles.
- Behavior change:
  - Defines dark bar palette, glass glyphs, topic cards, article cards, gallery tiles, friend profile, responsive layouts.
  - No writer/auth/editor styles remain.
- Potential risk:
  - Visual layout not final-screenshot verified.
  - Some unused legacy selectors may remain, such as `intro-grid article` when current home topic cards use `.topic-card`.
- Executed verification:
  - File read directly.
  - Search confirmed writer style identifiers removed.
- Not executed:
  - Browser visual check across desktop/mobile.
  - CSS lint.
  - Git diff comparison.
- Rollback:
  - Restore previous `assets/styles.css` from git or backup.

### `article-to-be-continue.html`

- Type: deleted
- Reason: User requested deletion of the placeholder article named `To Be Continued` / `To Be Continue`.
- Behavior change:
  - The article is no longer directly accessible as a local file.
  - Metadata includes `发布时间：2026-06-10 · 标签：一些思绪`.
  - No metadata entry points to this article from `assets/content.js`.
- Potential risk:
  - Any external bookmark to `article-to-be-continue.html` will 404 after deployment.
- Executed verification:
  - `Test-Path article-to-be-continue.html` returned `False`.
  - Reference search found no runtime references outside AGENT state documentation.
- Not executed:
  - Browser visual check.
  - Git diff comparison.
- Rollback:
  - Restore the file from git or backup and add a matching entry back to `assets/content.js`.

### `article.html`

- Type: added
- Reason: Dynamic article fallback/detail renderer.
- Behavior change:
  - Reads `?id=` and tries to find matching `BAR_POSTS` entry.
  - Displays `post.content` when available; otherwise displays summary text.
- Potential risk:
  - Current recommended architecture uses static per-article HTML, so this may confuse future authors if not documented.
  - Direct URLs with missing ids show a not-found message.
- Executed verification:
  - File read directly.
  - Shared script syntax check passed.
- Not executed:
  - Browser URL query test.
  - Git diff comparison.
- Rollback:
  - Delete only after auditing all `url` values and external links.

### `_drafts/article-format-reference.html`

- Type: modified
- Reason: Retained non-public format/reference article.
- Behavior change:
  - Uses new nav labels and new GitHub username references.
  - Uses `发布时间` format.
  - Remains under `_drafts` and is not linked from public article lists.
- Potential risk:
  - It still contains a full article-like page and could be visited directly if path known, but is not linked publicly.
- Executed verification:
  - File read directly.
- Not executed:
  - Browser visual check.
  - Git diff comparison.
- Rollback:
  - Restore previous draft or remove from repo if user decides no draft reference is needed.

### `about.html`

- Type: added/modified, exact git origin pending confirmation
- Reason: Replaces old guide/admin concepts with an about page.
- Behavior change:
  - Shows personal profile/about cards.
  - Includes contact email text.
  - No writer entry remains.
- Potential risk:
  - Personal details/contact email should be reconfirmed before public deployment if privacy matters.
- Executed verification:
  - File read directly.
- Not executed:
  - Browser visual check.
  - Git diff comparison.
- Rollback:
  - Restore previous about/guide page from git or backup.

### `friends.html`

- Type: added/modified, exact git origin pending confirmation
- Reason: Friend-link page.
- Behavior change:
  - Shows StarCried card with avatar and description.
  - Links externally to `https://starcried.github.io/`.
- Potential risk:
  - External URL not revalidated during sealing.
  - Avatar image must remain at `assets/starcried-avatar.png`.
- Executed verification:
  - File read directly.
  - Asset file presence observed in file listing.
- Not executed:
  - Browser visual check.
  - External URL check.
  - Git diff comparison.
- Rollback:
  - Restore/delete `friends.html` and remove home link if reverting friend-link feature.

### `reviews.html`

- Type: added
- Reason: Add `酒评` navigation/page.
- Behavior change:
  - Displays hardcoded cocktail review placeholder cards with `亟待创作` style content.
- Potential risk:
  - Not currently data-driven from `BAR_REVIEWS`; duplicate source of truth may confuse future changes.
- Executed verification:
  - File read directly.
- Not executed:
  - Browser visual check.
  - Git diff comparison.
- Rollback:
  - Delete page and remove nav/home feature links if reverting review feature.

### `gallery.html`

- Type: added
- Reason: Add `摄影作品` navigation/page.
- Behavior change:
  - Displays gallery-style placeholder tiles.
- Potential risk:
  - No real images yet; future image layout should be browser-checked.
- Executed verification:
  - File read directly.
- Not executed:
  - Browser visual check.
  - Git diff comparison.
- Rollback:
  - Delete page and remove nav/home feature links if reverting gallery feature.

### `assets/starcried-avatar.png`

- Type: added, based on file listing and page references
- Reason: Avatar for StarCried friend link.
- Behavior change:
  - Used by `friends.html`.
- Potential risk:
  - Binary asset cannot be meaningfully diffed in current text-only changelog.
- Executed verification:
  - File presence observed in recursive file listing.
- Not executed:
  - Visual inspection during sealing.
  - Git diff comparison.
- Rollback:
  - Remove file only if `friends.html` no longer references it or reference is updated.

### `assets/posts/.gitkeep`

- Type: added
- Reason: Preserve intended future article image directory.
- Behavior change:
  - No user-visible behavior.
- Potential risk:
  - None known.
- Executed verification:
  - File presence observed in recursive file listing.
- Not executed:
  - Git diff comparison.
- Rollback:
  - Remove if article image folder strategy changes.

### `assets/cocktail-hero.png`

- Type: existing binary asset; phase attribution pending confirmation
- Reason:
  - Current verified pages do not reference this file.
  - It may be a leftover from an earlier design attempt.
- Behavior change:
  - No current behavior observed from file references.
- Potential risk:
  - Adds repository weight.
- Executed verification:
  - File presence observed.
  - Current key HTML/CSS/JS reads did not show references.
- Not executed:
  - Full binary history check.
  - Git diff comparison.
- Rollback:
  - Do not delete until user approves and `rg "cocktail-hero"` confirms no references.

### `assets/hero-workspace.png`

- Type: existing binary asset; phase attribution pending confirmation
- Reason:
  - Current README still mentions replacing it as an old home image note, but current verified `index.html` does not reference it.
- Behavior change:
  - No current behavior observed from home page.
- Potential risk:
  - README may be stale for this asset.
- Executed verification:
  - File presence observed.
  - Current `index.html` read did not reference it.
- Not executed:
  - Full reference search for all files in final sealing.
  - Git diff comparison.
- Rollback:
  - Do not delete until user approves and references are audited.

### `README.md`

- Type: modified
- Reason: Maintenance documentation for static site and GitHub Pages deployment.
- Behavior change:
  - Documents metadata-index article structure.
  - Documents Word-to-article direction.
  - Documents GitHub Pages deployment using `Phillin-lrz`.
  - No longer documents writer/editor feature.
- Potential risk:
  - Some older lines may still mention obsolete concepts, such as `assets/hero-workspace.png`; re-audit before relying on README as full spec.
- Executed verification:
  - File read directly.
- Not executed:
  - Git diff comparison.
- Rollback:
  - Restore previous README from git or backup.

### `write.html`

- Type: deleted
- Reason: User requested deletion of writer feature and related pages.
- Behavior change:
  - Validation page no longer exists.
- Potential risk:
  - Any external bookmark to `write.html` will 404.
- Executed verification:
  - `Test-Path write.html` returned `False`.
  - Search found no `write.html` references.
- Not executed:
  - Git diff comparison.
- Rollback:
  - Restore from git or previous backup only if writer feature is explicitly requested again.

### `editor.html`

- Type: deleted
- Reason: User requested deletion of writer feature and related pages.
- Behavior change:
  - Browser-side article editor no longer exists.
- Potential risk:
  - Any external bookmark to `editor.html` will 404.
- Executed verification:
  - `Test-Path editor.html` returned `False`.
  - Search found no `editor.html` references.
- Not executed:
  - Git diff comparison.
- Rollback:
  - Restore from git or previous backup only if writer feature is explicitly requested again.

### `.git/config`

- Type: modified outside normal tracked files, based on current config
- Reason: Point local remote to new GitHub username.
- Behavior change:
  - `origin` now points to `https://github.com/Phillin-lrz/Phillin-lrz.github.io.git`.
- Potential risk:
  - `.git/config` is local-only and not committed.
  - Push still depends on Git being installed and authentication being valid.
- Executed verification:
  - File read directly.
- Not executed:
  - `git remote -v`, because `git` command is unavailable.
- Rollback:
  - Use `git remote set-url origin <old-or-correct-url>` when Git is available, or carefully edit `.git/config` manually.

### `AGENT_CONTEXT.md`

- Type: added
- Reason: Context sealing and anti-context-folding hardening.
- Behavior change:
  - No site runtime behavior.
- Potential risk:
  - Can become stale; update before cross-stage or multi-file changes.
- Executed verification:
  - Created in this sealing pass.
- Not executed:
  - Git diff comparison.
- Rollback:
  - Delete only if project adopts another equivalent handoff/context system.

### `AGENT_TODO.md`

- Type: added
- Reason: Preserve actionable next steps and validation requirements.
- Behavior change:
  - No site runtime behavior.
- Potential risk:
  - Can become stale.
- Executed verification:
  - Created in this sealing pass.
- Not executed:
  - Git diff comparison.
- Rollback:
  - Delete only if project adopts another equivalent task/handoff system.

### `AGENT_CHANGELOG.md`

- Type: added
- Reason: Preserve verified phase-one changes and limitations.
- Behavior change:
  - No site runtime behavior.
- Potential risk:
  - Not a substitute for real git diff; rerun git checks when available.
- Executed verification:
  - Created in this sealing pass.
- Not executed:
  - Git diff comparison.
- Rollback:
  - Delete only if project adopts another equivalent changelog.

### `AGENT_HANDOFF.md`

- Type: added after this changelog
- Reason: Concise future-agent recovery file.
- Behavior change:
  - No site runtime behavior.
- Potential risk:
  - Can become stale.
- Executed verification:
  - To be created in this sealing pass.
- Not executed:
  - Git diff comparison.
- Rollback:
  - Delete only if project adopts another equivalent handoff file.
