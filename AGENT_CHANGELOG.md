# AGENT_CHANGELOG

## 2026-10-08 - Linked prior note in 归去来兮

- Linked the inline title `《只爱陌生人》` in `article-guiqulaixi-20261008.html` to `note-only-love-strangers.html`, after confirming the earlier note discusses 陶渊明、王羲之 and the two classical texts. Preserved visible body text and paragraph order.
- Verified the local target, the single inline link and `git diff --check`. Browser visual verification skipped by project preference; link appearance remains unreviewed visually. Local-only; no Git writes or remote operations.

## 2026-10-08 - Published 归去来兮

- Added `article-guiqulaixi-20261008.html` from `归去来兮-20261008.docx` under `一些思绪`, dated 2026-10-08. Preserved the source title and all 113 body paragraphs in order; omitted the final empty paragraph.
- Registered the article in `assets/content.js`, refreshed only its eight consumer-page cache keys to `bar-content-20261008-guiqulaixi`, and synchronized `AGENT_BRIEF.md`. No shared CSS or rendering logic changes.
- Verified exact source-to-HTML comparison (0 mismatches), unique article id, all eight cache consumers, balanced HTML tags, 15 local references (0 missing), `node --check assets/content.js`, and `git diff --check`. Browser visual verification skipped by project preference; article layout remains unreviewed visually. Local-only; no stage, commit, push, or remote checks.

## 2026-09-23 - Published Letters

- Added `article-letters-20260923.html` from `Letters-20260923.docx` under `一些思绪`, registered it in `assets/content.js`, refreshed the content cache key on the eight consumer pages, and updated `AGENT_BRIEF.md`.

## 2026-09-19

- Published the local `一些思绪` article `花样年华` from `花样年华-20260919.docx` as `article-in-the-mood-for-love-20260919.html`, added its `BAR_POSTS` record, refreshed only the eight content-data cache references, and synchronized the brief's cache-version fact. Source comparison passed for 209 paragraphs and 24 separators; template shell, asset references, syntax, existing-data preservation, links, cache scope, and whitespace checks passed. Visual verification was skipped by project preference, so long-page layout remains unverified. Rollback: remove the article page and metadata record, then restore the prior eight content cache references and brief version. No commit, push, new dependencies, or CSS/rendering changes.

## 2026-09-17

- Published local Paired Notes 02 from `只爱陌生人-SIDE A-260917.docx` and `Room Tone-SIDE B-260917.docx`: `note-only-love-strangers.html`, `note-room-tone.html`, and `paired-only-love-strangers-room-tone.html`. Added two paired `一些思绪` records and refreshed only the eight content-data cache references; synchronized the brief's cache-version fact. Source comparisons passed for Side A (263 paragraphs / 144 separators) and Side B (226 / 146) in both reading modes; syntax, pair-card grouping, existing-data preservation, links, and cache checks passed. Visual verification skipped by project preference, so long-page layout remains unverified. Rollback: remove the three new pages and two metadata records, restore the prior content cache references and brief version. No commit, push, new dependencies, or rendering/CSS changes.

## 2026-09-15

- Published the local article `2046` from `2046-20260915.docx` as `article-2046-20260915.html`, added it to `assets/content.js`, and refreshed only the eight content-data cache references to `bar-content-20260915-2046`.

- 2026-09-14 分类更正：按用户确认，将 `Undercurrent` / `Vacancy` 双联篇及 `Fallen Angel` 从 `吧台札记` 调整为 `一些思绪`；三条记录迁入 `BAR_POSTS`，同步修正独立页标签、返回入口和内容数据缓存版本，正文保持不变。

- 2026-09-14：从两份 DOCX 本地新增首组 `PAIRED NOTES 01`（Side A `Undercurrent` / Side B `Vacancy`），生成双联篇主页面与两张独立札记页；扩展 `BAR_NOTES` 配对元数据和首页/札记/文章列表组合卡渲染，加入密到疏的纯 CSS 阅读结构与移动端适配，并分别刷新共享 CSS/站点逻辑和八个内容数据消费者的缓存版本。正文以 188/187 个文本段落及 91/97 个语义分隔符逐项核对；按项目偏好未做浏览器视觉验证。回滚时删除三张新页面和两条札记数据，移除 paired 渲染/CSS，恢复前一版缓存键及本条状态记录。

- 2026-09-12：从 `Fallen Angel.docx` 本地发布题为 `Fallen Angel` 的吧台札记，新增独立页面与 `BAR_NOTES` 元数据，并刷新八个 `assets/content.js` 消费页的缓存版本。

- 2026-09-02：新增一条关于为 5h 额度提前完整重置的吐槽，刷新全部 122 个 `assets/gripes.js` HTML 消费页缓存版本，并同步当前缓存状态。

- 2026-09-02：从 `None of the Above.docx` 本地发布同名吧台札记，新增独立页面与 `BAR_NOTES` 元数据，并刷新八个 `assets/content.js` 消费页的缓存版本。

## 2026-09-01 — Made all website work local-only by default

- Added a durable rule to `AGENTS.md`: publishing, deployment, and ordinary site-change requests authorize local file edits and local verification only.
- Updated `AGENT_BRIEF.md`, `AGENT_OP_DEPLOY_GIT.md`, and `AGENT_HANDOFF.md` so Codex must not stage, commit, push, authenticate, troubleshoot remote credentials, or inspect remote deployment state unless the user explicitly requests the exact Git/remote operation.

## 2026-09-01 — Published an experiment-schedule gripe locally with screenshot

- Added the user-provided gripe about the lighter experiment schedule and being roasted, with mood `被锐评`, emoji `😶`, and publication time `2026-09-01 11:09:24`.
- Added `gripe-experiment-schedule-roast.html` and the supplied screenshot at `assets/gripes/experiment-schedule-roast.png`.
- Refreshed the `assets/gripes.js` cache key to `bar-gripe-20260901-schedule-roast` on all 121 current HTML consumers.
- Committed the change locally as `ef8dc28`; the user explicitly requested local-only deployment, so `origin` was not updated.

## 2026-08-30 — Prepared a new gripe about avoiding the cell room

- Added the user-provided gripe to `assets/gripes.js` with mood `逃避`, emoji `🙈`, and publication time `2026-08-30 12:15:53`.
- Refreshed the `assets/gripes.js` cache key to `bar-gripe-20260830-cell-room` on all 120 current HTML consumers.
- Verification: `node --check assets/gripes.js`, reference-count checks, `git diff --check`, targeted diff inspection, and status/stat review.
- Committed the site changes locally as `6189616`; HTTPS push failed for lack of credentials, and SSH access was unavailable, so the remote site has not yet been updated.

## 2026-08-28 — Added Sober Company-Ash and Zoom inN gallery photos

- Imported 18 optimized photos: DSC04390–DSC04398 as Sober Company-Ash and DSC04401–DSC04409 as Zoom inN; expanded the gallery to 56 photos, added 18 static detail pages, synchronized downstream photo numbers/navigation, and refreshed only the `assets/gallery.js` cache key on `gallery.html`.
- Verification: `node --check assets/gallery.js`, a 56-photo source/detail/title/index/navigation audit, an 18-image dimension audit, `git diff --check`, targeted diffs, and final status/stat checks. Browser visual verification was skipped by project preference.
- Rollback: remove the two new photo ranges and 18 detail pages, restore the previous Zoom inN note/navigation and downstream indices, revert the gallery cache key, and restore the 38-photo count in `AGENT_BRIEF.md`.

- 2026-08-27: Published `No Pending Tasks.docx` locally as `article-no-pending-tasks-20260827.html` under “一些思绪,” added its `BAR_POSTS` metadata, and refreshed only the eight `assets/content.js` consumer cache keys to `bar-content-20260827-no-pending`.

- 2026-08-26: Published `还有什么更好的-20260826.docx` locally as `article-what-could-be-better-20260826.html` under “一些思绪,” added its `BAR_POSTS` metadata, and refreshed only the eight `assets/content.js` consumer cache keys to `bar-content-20260826-better`.

- 2026-08-25: Published `Collapse.docx` as `article-collapse-20260825.html` under “一些思绪,” added its `BAR_POSTS` metadata, and refreshed only the eight `assets/content.js` consumer cache keys to `bar-content-20260825-collapse`.

- 2026-08-24: Reduced default Codex context usage by compacting low-token state, routing handoff/todo reads by task need, limiting successful verification output, and scoping `assets/content.js` loading/cache refreshes to its eight actual consumer pages. Historical handoff entries were checked against the recent and archived changelogs before removal; no unique entry required migration.

- 2026-08-24: Published `article-ten-pm-20260824.html` from `晚上十点.docx` as `一些思绪`, preserving 120 body paragraphs and 16 semantic separator lines; added article metadata and refreshed HTML asset cache strings to `bar-art-20260824-ten-pm`.

- 2026-08-24: Published `Not in the mood-On the House` from the DOCX first line as `一些思绪`, preserving 229 body paragraphs and 40 Word horizontal rules; added post metadata and refreshed public asset cache strings to `bar-art-20260824-on-the-house`.

- 2026-08-24: Published `117.1` from the 2026-08-23 DOCX as `一些思绪`, preserving 196 body paragraphs and 20 Word horizontal rules; added post metadata and refreshed public asset cache strings to `bar-art-20260823-117-1`.

- 2026-08-21: Published `Not in the mood-After Hours` as a bar note with 184 verbatim body paragraphs and all 14 Word horizontal-rule shapes preserved as semantic article breaks; added `BAR_NOTES` metadata and refreshed public asset cache strings to `bar-art-20260821-after-hours`.

## 2026-07-29 — Remove the global background frame

- Traced the border visible around every page to inherited `body::after` styles in `assets/styles.css`: the current background overlay reset its inset but retained an earlier border, radius, and inset shadow.
- Explicitly reset `border`, `border-radius`, and `box-shadow` on the current overlay while preserving its subtle background texture.
- Refreshed public HTML stylesheet query strings to `bar-art-20260729-background-frame`.
- Visual browser verification was skipped by project preference; verification used cascade inspection, reference searches, and Git diff checks.

Last updated: 2026-07-31

This file now stores only recent, high-value change records. Older detailed history was moved to `AGENT_CHANGELOG_ARCHIVE.md` on 2026-07-04 to reduce default Codex token usage.

## 2026-07-27 Gallery Published and Playlist Structure Corrected

User provided `C:\Users\Phil Lin\Desktop\临时用\gallery updated.docx` and asked to upload the photos, grouping them by marked places where useful. User also clarified the playlist page should not be a single playlist detail: it should list playlist titles/simple descriptions, with separate detail pages.

- Extracted 39 embedded photos from the Word document.
- Optimized the photos as JPEG files under `assets/gallery/<place-slug>/`.
- Added `assets/gallery.js` with eight groups: `Bar 233`, `起飞`, `ZOOMINN`, `Sober Company（二代）`, `Pony Up`, `Bar Blanc`, `某意大利餐厅`, and `出去吃饭的合照`.
- Rebuilt `gallery.html` from a placeholder into a filterable location-group gallery using `data-gallery-list`.
- Added gallery rendering/filter logic to `assets/site.js`.
- Added responsive gallery layout styles to `assets/styles.css`.
- Created `playlist-writing.html` for the new `写作` playlist.
- Rebuilt `playlist.html` as a playlist index page with a simple description and link to the `写作` detail page.
- Follow-up correction: the old six playlist detail pages remain deleted.
- Follow-up correction: the former `宿舍 1108` gallery group was reclassified as outing meal/group photos.
- Follow-up correction: `ZOOMINN` photos 02/03/04, `Bar 233` photo 01, and `Bar Blanc` photo 02 were rotation-corrected; `Bar Blanc` photo 05 was deleted, leaving 38 retained gallery photos.
- Added one generated `gallery-*.html` detail page for each retained photo, with the full image, caption text, original-image link, previous/next navigation, and gallery return link.
- Added per-photo titles/captions/detail URLs to `assets/gallery.js`, and made gallery cards link to their detail pages.
- Updated homepage playlist/gallery copy so it no longer implies only one playlist or an empty gallery.
- Refreshed HTML asset query strings to `bar-art-20260727-gallery-playlists`.
- Verified with `node --check assets/site.js`, `node --check assets/content.js`, `node --check assets/gripes.js`, and `node --check assets/gallery.js`.
- Visual browser verification was skipped by project preference.

Rollback:

- Delete `assets/gallery.js` and the `assets/gallery/` folder.
- Restore the prior `gallery.html`, `playlist.html`, `index.html`, `assets/site.js`, and `assets/styles.css` from git.
- Delete `playlist-writing.html` if reverting the new `写作` detail page, and restore the old six playlist detail pages only if the user asks for that older state.
- Restore the previous HTML asset query string from git.
- Remove this changelog entry if reverting the gallery/playlist correction.

## 2026-07-27 Place Published - 九玖时光咖啡

User provided `C:\Users\Phil Lin\Desktop\自己\自己总要写点东西\九玖时光咖啡-20260727.docx` and asked to upload it as `私藏`.

- Extracted the Word document text and confirmed no embedded media files were present.
- Added `九玖时光咖啡` as a new `咖啡店` place in `BAR_PLACES`.
- Generated stable place archive `place-jiujiu-time-cafe.html`.
- Generated visit/article page `article-jiujiu-time-cafe-20260727.html`.
- Added metadata id `jiujiu-time-cafe-20260727` to `assets/content.js`.
- Visit score and overall score: `9.0`.
- Recorded drinks/items: `气泡水`, `咖啡`, and `康普茶`.
- Refreshed HTML asset query strings to `bar-art-20260727-jiujiu-cafe`.
- Visual verification was skipped by project preference.

Rollback:

- Delete `place-jiujiu-time-cafe.html`.
- Delete `article-jiujiu-time-cafe-20260727.html`.
- Remove the `jiujiu-time-cafe` place and `jiujiu-time-cafe-20260727` post entries from `assets/content.js`.
- Restore the previous HTML asset query string from git.
- Remove this changelog entry if reverting the publication.

## 2026-07-27 Playlist Replaced - Writing

User asked to delete all existing playlists and add one new playlist named `写作`, based on a screenshot of 12 tracks.

- Replaced `playlist.html` with the new `写作` playlist page.
- Removed old playlist detail pages: `playlist-after-ddl.html`, `playlist-chungking.html`, `playlist-drinking.html`, `playlist-faye-fable.html`, `playlist-faye-restless.html`, and `playlist-only-lovers.html`.
- Updated homepage playlist copy so it points to the single `写作` playlist.
- Added `AGENT_OP_PLAYLISTS.md` and listed it in `AGENTS.md` / `AGENT_BRIEF.md` as the operation file for playlist maintenance.
- Refreshed HTML asset query strings to `bar-art-20260727-writing-playlist`; later 2026-07-27 place publication refreshed them again to `bar-art-20260727-jiujiu-cafe`.
- Visual verification was skipped by project preference.

Rollback:

- Restore deleted `playlist-*.html` files from git.
- Restore the previous `playlist.html` and homepage playlist copy from git.
- Remove `AGENT_OP_PLAYLISTS.md` and its routing entries from `AGENTS.md` / `AGENT_BRIEF.md` if reverting the operation-file addition.
- Restore the previous HTML asset query string from git.
- Remove this changelog entry if reverting the playlist replacement.

## 2026-07-13 Article Published - Fruit Fly Recommendation

User provided `C:\Users\Phil Lin\Desktop\自己\自己总要写点东西\Fruit Fly-20260713.docx` and asked to upload it as `种草安利`.

- Extracted the Word document text and confirmed no embedded media files were present.
- Published it as a normal `种草安利` article.
- Generated final static article file `article-fruit-fly-20260713.html`.
- Added metadata id `fruit-fly-20260713` to `assets/content.js`.
- Final title: `《Fruit Fly》：一首冷静到最后突然决堤的歌`.
- Publication date: `2026-07-13`.
- Refreshed HTML asset query strings to `bar-art-20260713-fruit-fly-rec`.
- Visual verification was skipped by project preference.

Rollback:

- Delete `article-fruit-fly-20260713.html`.
- Remove the `fruit-fly-20260713` entry from `assets/content.js`.
- Restore the previous HTML asset query string from git.
- Remove this changelog entry if reverting the publication.

## 2026-07-13 Article Published - About Fruit Fly

User provided `C:\Users\Phil Lin\Desktop\自己\自己总要写点东西\About Fruit Fly-10160713.docx` and asked to upload it as `一些思绪`.

- Extracted the Word document text and confirmed no embedded media files were present.
- Published it as a normal `一些思绪` article.
- Generated final static article file `article-about-fruit-fly.html`.
- Added metadata id `about-fruit-fly` to `assets/content.js`.
- Final title: `About Fruit Fly`.
- Publication date: `2026-07-13`.
- Refreshed HTML asset query strings to `bar-art-20260713-fruit-fly`.
- Visual verification was skipped by project preference.

Rollback:

- Delete `article-about-fruit-fly.html`.
- Remove the `about-fruit-fly` entry from `assets/content.js`.
- Restore the previous HTML asset query string from git.
- Remove this changelog entry if reverting the publication.

## 2026-07-07 Article Published - Did Not Overthread Today

User provided `C:\Users\Phil Lin\Desktop\自己\自己总要写点东西\20260707.docx` and asked to upload it as `一些思绪`.

- Extracted the Word document text and confirmed no embedded media files were present.
- Published it as a normal `一些思绪` article.
- Generated final static article file `article-did-not-overthread-today.html`.
- Added metadata id `did-not-overthread-today` to `assets/content.js`.
- Final title: `今天没有继续犯病`.
- Publication date: `2026-07-07`.
- Refreshed HTML asset query strings to `bar-art-20260707-overthread`.
- Visual verification was skipped by project preference.

Rollback:

- Delete `article-did-not-overthread-today.html`.
- Remove the `did-not-overthread-today` entry from `assets/content.js`.
- Restore the previous HTML asset query string from git.
- Remove this changelog entry if reverting the publication.

## 2026-07-05 Article Published - Cat

User provided `C:\Users\Phil Lin\Desktop\自己\自己总要写点东西\猫-20260705.docx` and asked to upload it as `一些思绪`.

- Extracted the Word document text and confirmed no embedded media files were present.
- Published it as a normal `一些思绪` article.
- Generated final static article file `article-cat-20260705.html`.
- Added metadata id `cat-20260705` to `assets/content.js`.
- Final title: `猫`.
- Publication date: `2026-07-05`.
- Refreshed HTML asset query strings to `bar-art-20260705-cat`.
- Visual verification was skipped by project preference.

Rollback:

- Delete `article-cat-20260705.html`.
- Remove the `cat-20260705` entry from `assets/content.js`.
- Restore the previous HTML asset query string from git.
- Remove this changelog entry if reverting the publication.

## 2026-07-05 Article Published - So Tired

User provided `C:\Users\Phil Lin\Desktop\自己\自己总要写点东西\20260705.docx`, specified the tag `一些思绪`, and chose the final title `好累。`.

- Extracted the Word document text and confirmed no embedded media files were present.
- Published it as a normal `一些思绪` article.
- Generated final static article file `article-so-tired.html`.
- Added metadata id `so-tired` to `assets/content.js`.
- Final title: `好累。`.
- Publication date: `2026-07-05`.
- Refreshed HTML asset query strings to `bar-art-20260705-so-tired`.
- Visual verification was skipped by project preference.

Rollback:

- Delete `article-so-tired.html`.
- Remove the `so-tired` entry from `assets/content.js`.
- Restore the previous HTML asset query string from git.
- Remove this changelog entry if reverting the publication.

## 2026-07-04 Bar Note Published - About Past

User provided `C:\Users\Phil Lin\Desktop\自己\自己总要写点东西\About Past-20260704.docx` and asked to upload the note.

- Extracted the Word document text and confirmed no embedded media files were present.
- Published it as a `吧台札记` because the piece is a short reflective note rather than a full life-log article.
- Generated final static note file `note-about-past.html`.
- Added metadata id `about-past` to `assets/content.js`.
- Final title: `About Past`.
- Mood: `回望`.
- Publication date: `2026-07-04`.
- Refreshed HTML asset query strings to `bar-art-20260704-about-past`.
- Visual verification was skipped by project preference.

Rollback:

- Delete `note-about-past.html`.
- Remove the `about-past` entry from `assets/content.js`.
- Restore the previous HTML asset query string from git.
- Remove this changelog entry if reverting the publication.

## 2026-07-04 Token Recovery Rule Slimming

User asked why token usage had grown and then approved the low-token state-file plan.

- Added `AGENT_BRIEF.md` as the lightweight startup entry.
- Moved the former full `AGENT_CHANGELOG.md` to `AGENT_CHANGELOG_ARCHIVE.md`.
- Recreated `AGENT_CHANGELOG.md` as a compact recent changelog.
- Updated `AGENTS.md` so default recovery reads `AGENT_BRIEF.md`, `AGENT_HANDOFF.md`, and `AGENT_TODO.md` first.
- Changed deeper reads to be task-based:
  - `AGENT_CONTEXT.md` for structural, architectural, uncertain, or multi-file work.
  - `AGENT_CHANGELOG.md` for recent rollback/change history.
  - `AGENT_CHANGELOG_ARCHIVE.md` for older history, detailed audits, old regressions, or older rollback needs.
- Updated durable state guidance in `AGENT_TODO.md` and `AGENT_HANDOFF.md`.
- Visual verification was skipped by project preference because this is an instruction/state-file change, not a frontend rendering change.

Rollback:

- Move `AGENT_CHANGELOG_ARCHIVE.md` back to `AGENT_CHANGELOG.md`.
- Delete `AGENT_BRIEF.md`.
- Restore the previous `AGENTS.md` startup procedure requiring all four state files every time.
- Remove this entry from the recreated changelog if reverting fully.

## 2026-07-04 Operation File Routing

User clarified that operation types should be grouped and each operation type should have its own `.md` file. User also required that Codex ask for confirmation before reading deeper files such as `AGENT_CONTEXT.md`, `AGENT_CHANGELOG.md`, or `AGENT_CHANGELOG_ARCHIVE.md`.

- Added seven operation files:
  - `AGENT_OP_CONTENT_PUBLISH.md`
  - `AGENT_OP_PLACES.md`
  - `AGENT_OP_PAGE_VISUAL.md`
  - `AGENT_OP_FRONTEND_LOGIC.md`
  - `AGENT_OP_DEPLOY_GIT.md`
  - `AGENT_OP_PROJECT_STATE.md`
  - `AGENT_OP_RECOVERY_AUDIT.md`
- Updated `AGENTS.md` so the workflow is brief/handoff/todo, git status/diff, matching operation file, target files, execution, verification, then one final changelog entry.
- Added a hard rule that `AGENT_CONTEXT.md`, `AGENT_CHANGELOG.md`, and `AGENT_CHANGELOG_ARCHIVE.md` require user confirmation before reading, unless the user explicitly asked to inspect that exact file.
- Updated `AGENT_BRIEF.md`, `AGENT_TODO.md`, `AGENT_HANDOFF.md`, and `AGENT_CONTEXT.md` to reflect operation-file routing.
- Visual verification was skipped by project preference because this is a project-rule/state-file change, not a frontend rendering change.

Rollback:

- Delete the seven `AGENT_OP_*.md` files.
- Remove operation-file routing and the deep-read confirmation rule from `AGENTS.md`, `AGENT_BRIEF.md`, `AGENT_TODO.md`, `AGENT_HANDOFF.md`, and `AGENT_CONTEXT.md`.
- Remove this changelog entry.

2026-07-29 article: Published `7.29日程` from `7.29日程.docx` as `article-july-29-schedule.html`, preserving the user's original schedule wording and presenting the 40 items as morning/afternoon/evening schedule cards. Follow-up added two embedded dinner photos under the `18:00 晚饭` section from the DOCX. Updated `assets/content.js`, `assets/styles.css`, asset query strings, `AGENT_BRIEF.md`, and `AGENT_HANDOFF.md`. Visual verification skipped by project preference.

2026-07-30 article: Published `好饿。` from `D:\Download\好饿.docx` as `article-gpt-says-eat-something.html`, preserving the 35 source paragraphs as article body text. Added metadata id `gpt-says-eat-something` to `assets/content.js`; the DOCX contained no embedded media. Refreshed public HTML asset query strings to `bar-art-20260730-hungry`. Visual verification skipped by project preference.

2026-07-31 article: Published `我管不住我自己。` from `C:\Users\Phil Lin\Desktop\自己\自己总要写点东西\我管不住我自己。.docx` as `article-cannot-control-myself.html`. Classified it as `一些思绪` rather than `吧台札记` because it is a full reflective essay, not a short fragment. Preserved 79 extracted paragraphs as body text; the DOCX contained no embedded media. Added metadata id `cannot-control-myself` to `assets/content.js` and refreshed public HTML asset query strings to `bar-art-20260731-cannot-control`. Visual verification skipped by project preference.

2026-08-09: Published `article-not-in-the-mood-20260809.html` from `Not in the mood-20260809.docx` as `一些思绪`, added `not-in-the-mood-20260809` to `assets/content.js`, refreshed HTML asset query strings to `bar-art-20260809-not-in-the-mood`, and skipped visual verification by project preference.

2026-08-11: Published `article-fallback-20260811.html` from `D:\Download\Fallback.docx` as `一些思绪`, added `fallback-20260811` to `assets/content.js`, refreshed HTML asset query strings to `bar-art-20260811-fallback`, and skipped visual verification by project preference.

2026-08-21: Published `article-117-20260821.html` from `117.docx` as `一些思绪`, added `one-seventeen-20260821` to `assets/content.js`, refreshed HTML asset query strings to `bar-art-20260821-117`, and skipped visual verification by project preference.

2026-08-21 update: Re-extracted latest `117.docx` and updated `article-117-20260821.html` to 291 body paragraphs, updated the `assets/content.js` summary, refreshed HTML asset query strings to `bar-art-20260821-117-v2`, and skipped visual verification by project preference.

2026-08-21 update: Restored 19 Word separator lines in `article-117-20260821.html` as semantic `<hr class="article-break">` elements, added stable `.article-break` styling in `assets/styles.css`, refreshed HTML asset query strings to `bar-art-20260821-117-v3`, and skipped visual verification by project preference.

## 2026-09-17 — Add Nash Hong Dreamland friend link

- Added Nash Hong Dreamland to `friends.html`, with description `for everything reachable.` and URL `https://naalh4.github.io/`.
- Copied the user-provided image to `assets/nash-hong-dreamland-avatar.jpg`; reused the existing friend-card styles.
- Local-only change. File/reference checks and `git diff --check` passed; browser visual verification skipped by project preference. Long-title wrapping remains visually unverified.
- Rollback: remove the added card and avatar asset. Project instruction files were not changed.

## 2026-10-13 — Days of Being Wild local article

- Added `article-days-of-being-wild-20261013.html` from the supplied DOCX, classified as `一些思绪`; replaced the source title `想逃一天` with the requested `Days of Being Wild`. Preserved all 153 body paragraphs and 10 internal separators; ignored the final empty paragraph. Source DOCX left unchanged.
- Added the newest `BAR_POSTS` entry and refreshed only the content-data cache on its eight consumer pages to `bar-content-20261013-days-of-being-wild`; synchronized the cache snapshot in `AGENT_BRIEF.md`.
- Verification: exact source-to-HTML paragraph comparison passed with zero mismatches; all local page references exist; `node --check assets/content.js` and `git diff --check` passed. Browser visual verification skipped by project preference; rendering and layout remain unverified.
- Local files only; no stage, commit, push, or remote check. Rollback: remove the new article and metadata entry, restore the eight cache references and brief snapshot, and remove this log entry. `AGENTS.md` was unchanged.

## 2026-10-16 — 烟花 local article

- Added `article-fireworks-20261016.html` from the supplied DOCX as `烟花`, classified as `一些思绪`, dated 2026-10-16. Preserved the ordered 72 body paragraphs and five internal separators; used the source title as the page title and omitted the final empty paragraph. The source DOCX is unchanged.
- Added the newest `BAR_POSTS` entry and refreshed only the content-data cache on its eight consumer pages to `bar-content-20261016-fireworks`; synchronized the cache snapshot in `AGENT_BRIEF.md`.
- Verification: exact source-to-HTML paragraph/separator comparison passed with zero mismatches; local references exist; title/date/category and eight cache references checked. `node --check assets/content.js` and `git diff --check` passed. Browser visual verification skipped by project preference; layout remains unverified.
- Local files only; no stage, commit, push, or remote check. Rollback: remove the new article and metadata entry, restore the eight cache references and brief snapshot, and remove this log entry. `AGENTS.md` was unchanged.

## 2026-10-16 — Ashes of Time local article

- Added `article-ashes-of-time-20261016.html` from the supplied DOCX, retaining the title `Ashes of Time`, classified as `一些思绪`, dated 2026-10-16. Preserved all 184 body paragraphs and 15 internal separators in order; source DOCX unchanged.
- Added the newest `BAR_POSTS` entry and refreshed only the content-data cache on its eight consumer pages to `bar-content-20261016-ashes-of-time`; synchronized the cache snapshot in `AGENT_BRIEF.md`.
- Verification: exact source-to-HTML paragraph/separator comparison passed with zero mismatches; local links, title/date/category and all eight cache references checked. `node --check assets/content.js` and `git diff --check` passed. Browser visual verification skipped by project preference; layout remains unverified.
- Local files only; no stage, commit, push, or remote check. Rollback: remove the new article and metadata entry, restore the eight cache references and brief snapshot, and remove this log entry. `AGENTS.md` unchanged.

## 2026-10-20 — 老家 local article

- Added `article-laojia-20261020.html` from the supplied DOCX, retaining the title `老家`, classified as `一些思绪`, dated 2026-10-20. Preserved all 91 body paragraphs and four internal separators in order; omitted the final empty paragraph. Source DOCX unchanged.
- Added the newest `BAR_POSTS` entry and refreshed only the content-data cache on its eight consumer pages to `bar-content-20261020-laojia`; synchronized the cache snapshot in `AGENT_BRIEF.md`.
- Verification: exact source-to-HTML paragraph/separator comparison passed with zero mismatches; local references, title/date/category and all eight cache references checked. `node --check assets/content.js` and `git diff --check` passed. Browser visual verification skipped by project preference; layout remains unverified.
- Local files only; no stage, commit, push, or remote check. Rollback: remove the new article and metadata entry, restore the eight cache references and brief snapshot, and remove this log entry. `AGENTS.md` unchanged.

## 2026-10-21 — 杯底注释专项修订与永久写作规范

- 原有注释存在机械复述正文结尾、偏离全文核心思想或情感等问题；按作者已确定的文字逐字替换 11 条注释，不重新创作或润色。
- 文章范围：`article-collapse-20260825.html`、`article-no-pending-tasks-20260827.html`、`note-upstairs.html`、`article-2046-20260915.html`、`article-in-the-mood-for-love-20260919.html`、`article-letters-20260923.html`、`article-guiqulaixi-20261008.html`、`article-days-of-being-wild-20261013.html`、`article-fireworks-20261016.html`、`article-ashes-of-time-20261016.html`、`article-laojia-20261020.html`。仅修改 `article-endnote` 中的注释文字，保留前缀和 HTML 结构；正文、标题、摘要、日期、标签及其他文章均未改动。
- `AGENTS.md` 增加强制性规则；`AGENT_OP_CONTENT_PUBLISH.md` 完整保存作者提供的第二部分规范（定义、原则、禁忌、流程及范例），并将既有文章/注释修订纳入读取入口；`AGENT_BRIEF.md` 增加简短索引。
- 验证范围为上述 11 篇 HTML 与本次四个指令/状态文件：11 条注释与指定文案逐字一致；与 HEAD 比较，注释外全文及 HTML 标签序列无差异；完整写作规范与用户第二部分原文一致；文件清单和 `git diff --check` 检查通过。无 JavaScript、CSS、共享资源或缓存版本改动，无需 JS 语法检查。
- 按项目偏好跳过浏览器视觉验证，较长注释的实际换行未作视觉检查。启动工作区干净，无冲突；仅本地编辑，未 stage、commit、push 或部署。
- 回滚：恢复上述 11 篇文章的原注释；删除 `AGENTS.md` 本次新增章节、操作文件新增规范及入口扩展、Brief 索引（并恢复原更新时间），删除本条日志。无需改动其他文件。

## 2026-10-23 — Millennium Mambo（本地内容更新）

- 将用户提供的 Word《Millennium Mambo》加入「一些思绪」，日期 2026-10-23；新增 article-millennium-mambo-20261023.html，保留 170 个正文段落及指定杯底注释，无图片。
- assets/content.js 新增文章索引；仅刷新八个真实消费者的 content.js 缓存版本为 bar-content-20261023-millennium-mambo。
- 验证：正文逐段及杯底注释与 DOCX 提取结果完全一致；15 处本地引用存在；八页缓存引用匹配；node --check assets/content.js、git diff --check 通过。
- 按项目偏好跳过浏览器视觉验证，排版仍有未实测风险。仅本地修改，未暂存、提交或执行远程操作；AGENTS.md 未变更。
- 回滚：删除新增文章页，撤销本次索引、八页缓存版本和本条日志；保留其他已有修改。

## 2026-10-24 — Local homepage reference integration

- Branch `codex/home-private-counter`: recompose index.html with home.css/home.js; preserve badge, real dynamic recent content, paired links, seven drink seals/four Martini categories, existing navigation and gripe paging. Shared site.js adds opt-in rows/count; inner pages and data untouched.
- Syntax/diff checks, local reference and renderer checks, responsive browser QA and representative inner-page regressions passed. Screenshots and phase/rollback details recorded in AGENT_HOME_REDESIGN.md. Physical mobile/Safari remain unverified. No commit/push/merge/deployment.

## 2026-10-24 — Phase 2 shared interior design

- Removed homepage menu action and rebalanced spacing. Added interior.css shared tokens/page-family design in an explicit cascade layer; retained legacy structures/artwork. Added mobile navigation/skip links and collapsible non-reading gripe sections in site.js.
- Refreshed only shared CSS/site.js URLs on 138 HTML pages. Deterministic audit confirms all article/track/place/photo content and data unchanged. Responsive/function checks, syntax and diff checks passed; fixes and screenshot locations recorded in AGENT_INTERIOR_REDESIGN.md.
- Work remains local on codex/home-private-counter. No instruction-file edits, new dependencies, routes, images, commits, merges or deployment. Physical mobile/Safari/older engines remain unverified.

## 2026-10-24 — Navigation and notes follow-up

- Removed homepage film/music top links, added friends to all 138 public main navigations (including standard navigation on five brand-only headers), and removed the notes rule panel. Preserved content shelves, cocktail menu, motion behavior and content data.
- All 138 headers and body-preservation allowlist checks passed; JS syntax and diff checks passed. Visual checks skipped per project preference. No Git commit/merge/push/deployment.

## 2026-10-24 — Homepage signature and finite motion

- Self-hosted licensed Chorus/Noto glyph fonts apply only to the large homepage wordmark; two left-aligned lines read Phil Lin / 的Bar. Removed continuous particle/cursor code; added finite entrance, reveal and seal feedback with reduced-motion support. Content/rendering/navigation logic preserved.
- User canceled recording and then further acceptance checks; handed over to manual testing with local preview retained. Added the manual-acceptance override to AGENTS.md and recorded details/rollback in AGENT_SIGNATURE_MOTION.md. No merge, push or deployment.

## 2026-10-24 — Title-only font refinement from supplied reference

- Changed homepage signature to a locally served Oooh Baby subset, preserving the two-line left alignment and title block metrics. Inner primary titles now use self-hosted Noto Sans SC ExtraLight 200. Included original OFL licenses and limited font glyph subsets; preserved other typography, layout, content and animation code.
- Per explicit task request, inspected actual desktop/mobile title rendering only. No broader acceptance, syntax, performance or regression checks. Details and rollback: AGENT_TITLE_FONTS.md. No publication or Git commit/merge/push.

## 2026-10-24 — Handwritten primary titles and cool-metal details

- Selected self-hosted Yozai Light plus Oooh Baby Latin after actual browser comparisons; retained homepage wordmark typography. Updated only primary-title typography, text roles, existing CSS/SVG label palettes/strokes and applicable CSS asset versions. No content/layout/navigation/motion changes.
- Added OFL notice and font documentation; recorded exact scope, rendering-only observations, manual-acceptance limits and rollback in AGENT_TITLE_METAL.md. Broad checks were not run; preview preserved; no commit/push/deployment.

## 2026-10-24 — Final type / labels / shared optical alignment

- Preserved the formal homepage 的 and frozen English wordmark; prepared marked A/B/C actual-homepage crops for the user's selection. C recommended, replacement pending choice.
- Selected self-hosted WenKai Lite Light primary titles after real comparisons; refined existing CSS/SVG labels and fixed the shared oversized-grid-child alignment cause without per-drink offsets or external size changes. Added title-only word grouping to the mixed Fruit Fly headline; visible content unchanged.
- Completed explicitly requested 3-size observations of 17 route types; no title overflow observed. Scope, licenses, manual acceptance limits, screenshots and rollback recorded in AGENT_FINAL_POLISH.md; preview preserved; no Git write/remote operation.

## 2026-10-24 — User retained the current wordmark

- User declined further replacement of homepage 的 and confirmed keeping the current version. Closed the A/B/C selection in brief, handoff, final-polish record and font README. Website code, preview and development branch are unchanged. Followed AGENTS.md; no instruction-file change, tests, checks or publication.

## 2026-10-24 — Homepage shelf links
- Added missing local homepage links for 堕落天使 → note-upstairs.html, 2046 → article-2046-20260915.html, and Fruit Fly → article-fruit-fly-20260713.html.
- Source inspection confirmed existing destination pages. No automated acceptance or browser checks were run under AGENTS.md's manual-acceptance rule. No commit, push, or deployment. Rollback: restore these three anchors to their prior span elements in index.html.


## 2026-10-24 — 今晚近况更新
- 按用户提供的原文更新 tonight.html 的开场白、当前状态标题与正文、最近在听/喝/写/学及余味；保留标点和现有布局。
- 依据 AGENTS.md 人工验收规则，未运行自动测试、语法检查或视觉检查；仅本地修改，未提交、推送或部署。


## 2026-10-24 — 全站 D 冷铬酒标
- 按用户选择，将首页七款及 125 个公开内页的现有酒标替换为共享原生 CSS 冷铬图形，保留尺寸、排版与交互；同步文章模板、样式缓存及状态记录。友链页保留猫喝 Collins 特征。
- 只进行了必要源码与定向 diff 阅读；按 AGENTS.md 要求未执行自动测试或视觉验收，保留现有本地预览，未提交、推送或部署。范围与回滚见 AGENT_DRINK_ICONS.md。


## 2026-10-24 — 《重庆森林》
- 将用户提供的 DOCX 添加为「一些思绪」文章 article-chungking-express-20261024.html，按源文档顺序写入 392 个非空正文段落及 7 个分隔，保留加粗、斜体和指定繁体杯底注释。
- 新增文章数据，刷新八个 content.js 消费页面的缓存，并连接首页「重庆森林」电影索引；沿用当前 CSS 冷铬酒标及文章布局。
- 依据 AGENTS.md 的人工验收规则，仅进行必要源内容与模板阅读，未执行自动对比、测试、语法检查或视觉检查。保留现有预览，未提交、推送或部署。回滚素材在外部工作目录 chungking-before-publish/，回滚时保留后续更改并移除本次新增文章。

## 2026-10-24 — 背景、动效入口与摄影筛选栏
- 修复摄影分类按钮与分隔线间距；删除首页顶部酒单入口和独立动效开关，改由所有页面右上角按钮统一控制动效；玻璃背景常驻，内页与首页共用背景色调及材质变量。
- 保留原内容、酒标、文字布局及原交互；刷新相关 CSS/脚本缓存。依据 AGENTS.md 仅阅读必要源码与定向 diff，未执行自动或视觉验收，保留现有预览及之前的文章改动。未提交/推送/部署。详见 AGENT_SCENE_MOTION.md 与外部回滚快照。


## 2026-10-24 — 标题区分隔线上移
- 将各页标题区分隔线在原盒内上移：列表页桌面 20px、正文页桌面 16px、移动端 12px。保留标题、筛选栏、正文和容器原有位置；删除旧玻璃装饰留下的移动端隐藏规则，使分隔线在窄屏保持一致。
- 刷新共享 CSS 缓存，更新 AGENT_BRIEF.md。依据 AGENTS.md 未运行自动测试、语法检查或视觉检查；保留本地预览，未提交/推送/部署。回滚快照在外部工作目录 heading-rules-before-apply/；AGENTS.md 未修改。
