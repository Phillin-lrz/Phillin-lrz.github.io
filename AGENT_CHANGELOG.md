# AGENT_CHANGELOG

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
