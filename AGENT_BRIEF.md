# AGENT_BRIEF

Last updated: 2026-10-21

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

- 杯底注释长期规范：所有新文章与注释修订必须读取并遵守 `AGENT_OP_CONTENT_PUBLISH.md` 的「Cup-bottom Endnotes / 杯底注释写作与编辑规范」章节。

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
- `assets/content.js` uses `bar-content-20261020-laojia` only on its eight real consumer pages: `article.html`, `index.html`, `notes.html`, `posts.html`, `reviews.html`, and the three tag pages.
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

## Homepage redesign — 2026-10-24

- Local-only branch `codex/home-private-counter` integrates the approved homepage reference. See `AGENT_HOME_REDESIGN.md` for scope, verification, remaining limits, proposed phases and rollback.
- Home-only assets: `assets/home.css` and `assets/home.js`, version `bar-home-20261024`. Homepage site.js URL uses `bar-site-20261024-home`; other pages retain existing URLs and default rendering.
- The shared recent renderer now supports opt-in rows and count; preserve paired URLs and default card mode. Existing gripe rail is moved into the homepage expandable section with handlers retained.

## Interior redesign — 2026-10-24

- Phase 2 continues on `codex/home-private-counter`; see `AGENT_INTERIOR_REDESIGN.md` for architecture, verification, screenshots and rollback to the phase-1 snapshot.
- Shared stylesheet URL: `bar-design-20261024`; it imports `assets/interior.css?v=bar-interior-20261024` in a named design layer. Shared site.js URL: `bar-site-20261024-interiors`. Both are refreshed on 138 root HTML consumers; data/image URLs are unchanged.
- Homepage stylesheet URL: `bar-home-20261024-refine`. The “翻开酒单” button is removed; the header menu anchor and complete cocktail menu remain.
- Maintain design tokens/page-family rules in interior.css. Preserve the legacy layer for structures and original drink-label assets until separately audited. Mobile interior navigation and collapsible non-reading gripe sections are initialized by site.js.

## Navigation follow-up — 2026-10-24

- Homepage top film/music anchors removed; collection shelves and the existing cocktail-menu anchor remain. All 138 root public pages now have one friends link in the top main navigation; five formerly brand-only headers received the existing standard navigation.
- Removed notes.html's note-rule section. Article data and note rendering remain unchanged. Motion controls remain unchanged: particle canvas is ~7% opacity, mobile defaults off, photography hides it; the separate homepage glass button controls hero glass lighting.
- Static header/content comparison and JS syntax/diff checks passed. Browser visual verification skipped for this small follow-up per project preference; narrow-header visual risk remains.

## Manual testing and signature/motion follow-up — 2026-10-24

- User now performs acceptance testing. AGENTS.md's manual-acceptance override supersedes older automatic-check requirements: no automatic tests, syntax checks, browser checks, screenshots, recordings or performance checks unless explicitly requested for the current task.
- Signature/motion implementation, font licenses, cancellation state, running preview and rollback are recorded in AGENT_SIGNATURE_MOTION.md. No further acceptance checks were run after cancellation; final acceptance is the user's.
- Preview left running at http://127.0.0.1:8765/index.html for the user's manual testing. Do not interrupt it while they are using it.

## Title-only typography — 2026-10-24

- Current homepage signature is the self-hosted Oooh Baby subset; 的 retains the Noto Serif glyph. Primary inner-page titles use Noto Sans SC ExtraLight 200, subset to current titles. Read AGENT_TITLE_FONTS.md for exact scope, licenses and rollback.
- CSS versions are bar-title-fonts-20261024. Body/subheading/nav/button fonts, layout, content and animations were not changed. Only explicitly requested title-rendering inspection was performed; general acceptance remains manual.
- Preview restarted at http://127.0.0.1:8765/index.html (exec session 23862). Preserve it for the user's testing.

## Handwritten titles and cool-metal palette — 2026-10-24

- Inner visual primary titles now use self-hosted Yozai Light Chinese and Oooh Baby Latin, selected after real browser comparison. Homepage signature font/two-line layout is unchanged. Current CSS and SVG query token is bar-cool-hand-20261024.
- Shared text roles and retained CSS/SVG labels use titanium silver/ice-blue tones with restrained rose/wine accents. No content, navigation, structure or animation changes. Read AGENT_TITLE_METAL.md and assets/fonts/README.md for font provenance, subset maintenance, scope, targeted rendering observations and external rollback snapshot.
- Only user-requested typography rendering was inspected; broad acceptance remains manual. Preserve the existing port-8765 preview. No commit/push/deployment.

## Final typography / labels — 2026-10-24

- Inner visual primary titles now use WenKai Lite Light, with the existing signature Latin face; Yozai is inactive. Shared CSS/SVG cache token: bar-final-type-20261024. Body/nav/button/subheading/metadata fonts are unchanged.
- Fixed the shared 58px drink-portrait grid's oversized scaled child, preserving external dimensions/gaps; refined seven CSS vessels and 18 retained SVG labels. No layout, content, animation or function redesign.
- User confirmed keeping the current homepage 的; do not apply A/B/C. The font comparison is closed. All current website code stays as-is, including the frozen English wordmark.
- See AGENT_FINAL_POLISH.md for scope, licenses, explicit three-size rendering observations, screenshots, manual-acceptance limits and rollback. Local preview at port 8765 is preserved; no commit/push/deployment.

## 全站冷铬酒标 — 2026-10-24

- 用户已选择 D 冷铬金属器物方案，所有公开页面的现有酒标统一为原生 CSS 图形。新增 assets/drink-icons.css，由 styles.css 的 design layer 导入；首页与内页共享材质实现。
- 现有布局与酒标外框不变；首页仍为 39px/32px（520px 断点），内页仍为 58px 区域和 3.12rem 画布。友链页保留猫喝 Collins 特征。
- 当前共享 styles.css 与首页 home.css 的 URL token 为 bar-chrome-icons-20261024；其他字体、数据、脚本、SVG 与 interior.css token 不变。
- 详见 AGENT_DRINK_ICONS.md 的范围、手动验收限制和外部回滚快照。本轮未执行自动测试或视觉验收，保留现有 8765 预览，未提交/推送/部署。


## 背景与动效控制统一 — 2026-10-24

- 当前共享 CSS/site.js 和首页 home.css/home.js URL token 为 bar-scene-motion-20261024；interior.css 导入使用同一 token。酒标、字体和数据资源版本不变。
- 首页顶部「酒单」入口与导航内独立动效开关已删除。所有页面右上角 themeToggle 统一控制动效并共享 bar-motion 偏好；玻璃背景永久显示，旧 bar-home-glass 设置不再使用。
- 首页和内页共用青灰/炭黑/暗酒红背景变量，内页增加常驻玻璃层。摄影筛选栏改为独立底部留白与分隔线，按钮自然换行。
- 详见 AGENT_SCENE_MOTION.md 的实现、人工验收限制与外部回滚快照。未运行自动测试或浏览器验收，保留 8765 预览，未提交/推送/部署。


## 标题分隔线上移 — 2026-10-24

- 标题区分隔线在原有盒内上移：列表页桌面 20px、文章页桌面 16px、移动端 12px；原有标题与后续内容位置、间距不变。共享 styles.css 与 interior.css token 为 bar-heading-rule-20261024；脚本和首页专属资源仍为 bar-scene-motion-20261024。
- 本轮仅按 AGENTS.md 阅读必要源代码，未运行自动或视觉验收。回滚快照：外部工作目录 heading-rules-before-apply/；保留现有 8765 预览，未提交/推送/部署。
