# AGENT_HANDOFF

Last updated: 2026-09-14

Use this file only for unfinished-work continuity, dirty-worktree recovery, or compacted/uncertain sessions. Completed history belongs in `AGENT_CHANGELOG.md` and `AGENT_CHANGELOG_ARCHIVE.md`.

## Current Handoff State

- `Phil Lin的Bar` is a static GitHub Pages site with root HTML pages and shared files under `assets/`.
- The workload/cell-room gripe is committed locally as `6189616`, with deployment state in `97537a7`.
- A new screenshot-backed gripe about a lighter experiment schedule and being roasted is committed locally as `ef8dc28`.
- No content-publication task is unfinished. The user explicitly requested local-only deployment, so the pending commits must not be pushed to `origin` unless they later ask.
- The durable project rule now makes every website change local-file-only by default; do not stage, commit, push, authenticate, or check remote deployment state unless the user explicitly requests that exact Git/remote operation.

## Current Cache Policy

- Cache versions are asset-scoped; do not refresh every asset when only one changes.
- Shared CSS and `assets/site.js` use `bar-art-20260914-paired-notes`; the badge retains `bar-art-20260824-ten-pm`.
- `assets/gripes.js` uses `bar-gripe-20260902-five-hour-reset` on all 122 current HTML consumers.
- `assets/content.js` uses `bar-content-20260914-paired-thoughts` on exactly eight consumer pages:
  - `article.html`
  - `index.html`
  - `notes.html`
  - `posts.html`
  - `reviews.html`
  - `tag-lab.html`
  - `tag-recommendations.html`
  - `tag-thoughts.html`
- Static article, note, place, gallery, playlist, gripe-detail, and gallery-detail pages do not need `assets/content.js` unless a documented `BAR_*` rendering hook is added.
- Paired notes use two `BAR_POSTS` records tagged `一些思绪`, with shared `pairId`, `pairSide`, and `pairUrl` fields; list renderers collapse them into one paired card while the individual URLs remain shareable.
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

## Current redesign handoff — 2026-10-24 (supersedes historical visual/cache state above)

- User confirmed the homepage direction and authorized phase-2 interior redesign on `codex/home-private-counter`. Local implementation and verification are complete; review is pending. No commit, merge, push or deployment is authorized by this task.
- Read `AGENT_INTERIOR_REDESIGN.md` for implementation, responsive/function checks, screenshots and phase-2 rollback. Phase-1 records remain in AGENT_HOME_REDESIGN.md.
- Shared assets now use CSS `bar-design-20261024` and site.js `bar-site-20261024-interiors` on 138 HTML pages. home.css uses `bar-home-20261024-refine`; content, gripe, gallery and badge versions are unchanged.
- Shared CSS uses explicit legacy/design layers; add future visual edits to the existing page-family rules in interior.css. Keep content bodies, paired-note structures, 12 writing tracks and gallery/place data intact.
- Film/music archive proposals and any route changes remain future scope. Do not read deeper state files without the existing confirmation gate.

## Signature/motion handoff — 2026-10-24

- Homepage signature and finite motion changes are ready for user testing. Read AGENT_SIGNATURE_MOTION.md for implementation and rollback. Reference image was not available; exact image alignment remains unconfirmed.
- User canceled recordings and all further automatic acceptance workflows. Follow the new AGENTS.md manual-acceptance override. No further checks were run after cancellation.
- Local preview remains http://127.0.0.1:8765/index.html (exec session 70541); preserve it for manual testing. Work remains local on codex/home-private-counter.

## Title typography handoff — 2026-10-24

- Reference image is now available and was used for title lettering only. Current title font implementation and limited rendering observations are in AGENT_TITLE_FONTS.md. No other visual redesign or motion change was made.
- Homepage uses the Oooh Baby subset and existing Noto Serif 的. Inner primary titles use Noto Sans SC ExtraLight 200. Licenses are bundled under assets/fonts/; CSS cache token is bar-title-fonts-20261024.
- Keep normal acceptance testing manual. The user's current request permitted actual title-rendering inspection only. Preview remains http://127.0.0.1:8765/index.html (session 23862).

## Handwritten-title / cool-metal handoff — 2026-10-24

- Local typography/palette task is implemented on codex/home-private-counter. AGENT_TITLE_METAL.md records the exact scope and rollback; assets/fonts/README.md records the OFL fonts and title subset maintenance. This supersedes the prior inner Noto Sans title selection, while the homepage font and two-line arrangement remain frozen.
- Added self-hosted Yozai Light Chinese plus Oooh Baby Latin for visual primary titles only. Recolored existing CSS seals and 18 SVG labels to cool metal; shared text hierarchy is gray-white/blue-gray, retaining wine and rose accents. Body/nav/subheading/button fonts, page structure, content/data and animation logic are unchanged. CSS/SVG version: bar-cool-hand-20261024.
- The user explicitly requested actual browser font comparisons. Compared five legal fonts and inspected Tonight, a long mixed article title on desktop/390px, and the homepage. No broad acceptance, test commands, syntax checks, diff checks or performance workflows were performed. Manual acceptance remains the user's; future new glyphs can require rebuilding the small title subset.
- Existing local preview http://127.0.0.1:8765/index.html remains running (session 23862); leave it available. No Git write or remote operation authorized.

## Final polish handoff — 2026-10-24

- Current local implementation: WenKai Lite Light visual primary titles, precise shared drink-portrait alignment, refined original CSS/SVG labels. Cache token bar-final-type-20261024. Read AGENT_FINAL_POLISH.md for exact scope and rollback; assets/fonts/README.md reflects current fonts.
- Final user decision: keep the existing formal homepage 的 and the current implementation; A/B/C will not be applied. No title-font selection remains pending. The comparison crops are historical references only.
- User explicitly requested this task's browser comparisons and desktop/tablet/mobile title/label checks. 17 representative routes x 3 viewports showed no primary-title horizontal overflow and canvas/text-center error below .004px. No unrelated automatic tests, syntax/diff checks, video or hardware benchmark. General acceptance remains manual.
- All temporary comparison HTML/font copies were moved outside the site. Preserve http://127.0.0.1:8765/index.html for manual testing; no commit, push, merge or deployment.

## 全站酒标 handoff — 2026-10-24

- 用户已选择 D，冷铬 CSS 酒标已本地应用于首页七款及 125 个公开内页，现有文章模板同步。所有外框、行高、文字布局与原交互保持原设置。
- 共享图形位于 assets/drink-icons.css；styles.css 与首页 home.css 当前 URL token 为 bar-chrome-icons-20261024。原 SVG 保留作历史资源。详见 AGENT_DRINK_ICONS.md。
- 用户手动验收：本次实施未运行测试、语法检查、diff --check、浏览器或截图检查。原 8765 预览保持运行；无 Git 写入或远程操作。


## 背景与动效控制 handoff — 2026-10-24

- 用户要求的摄影筛选栏修复、首页顶部酒单入口删除、右上角统一动效按钮、玻璃常驻及全站背景色调统一已本地实现。范围和回滚见 AGENT_SCENE_MOTION.md。
- 当前共享 CSS/site.js 与首页资源 token 为 bar-scene-motion-20261024。右上角 themeToggle 共享 bar-motion；旧 glass 开关及首页导航内 hp-motion 控件已删除。
- 本轮只读源码和定向 diff，没有自动测试、语法检查、浏览器或截图验收。用户继续手动测试；8765 预览未动，前一轮《重庆森林》的本地改动保留。无提交、推送或部署。


## Group Notes 索引显示 handoff — 2026-10-25

- 本地新增 Group Notes 01「窦靖童 Part1」（用户后续指定的系列名称；序言篇名仍为「窦靖童」），详见 AGENT_GROUP_NOTES.md。用户已确认本次 Word 为正文权威来源；仍只有一个归档记录与六个独立系列页面。
- 用户不满意玻璃薄页和金属书脊，比较四种方案并授权试做「平面五联折页＋冷刊排版」。最新为序言约三成＋四首歌的平面分栏；首页共用 groupNoteCard 的 compact 配置，序言在左跨两行、歌曲在右排两列；手机序言置顶。全横排标题、细线、轻微底色分区，没有玻璃图形、书脊、立体阴影或位移动效；系列目录保持文字标题区与纵向清单。数据及正文不改，保持与 paired-note 分支独立。
- content token 仍为 bar-content-20261025-dou-part1（八个消费者）；group-notes.css 更新为 bar-group-notes-20261025-flat-fold（十一页）。index/posts/三个标签页的 site.js token 更新为 bar-site-20261025-flat-fold，其他页保留原 token。前一版外部回滚快照 group-notes-before-flat-fold/ 及细节见 AGENT_GROUP_NOTES.md。
- 手动验收覆盖规则持续生效；本次未运行自动或浏览器检查。保留现有 8765 预览，无提交/推送/部署；AGENTS.md 未改。


## 杯底注释补齐与默认要求 — 2026-10-29

- 用户明确：原稿没有杯底注释时，由 Codex 阅读完整正文后自行撰写。组文每篇独立文章（包括序言）都要在各自正文页添加，不能只在目录页添加一条。
- 已为《2018.》以及「窦靖童 Part1」的序言、《誓言》《改变》《空中飞人》《Fruit Fly》六个正文页分别添加独立注释，正文不变。沿用 article-endnote 样式，无资源版本变动。
- AGENTS.md、AGENT_BRIEF.md 和 AGENT_OP_CONTENT_PUBLISH.md 已同步此要求，撤销“原稿未提供可不强制新增”的兜底条款。作者指定注释仍优先保留；明确要求不添加时遵从作者。
- 遵循手动验收规则：未运行自动或视觉验收，注释措辞及页面呈现待用户确认。保留现有预览；未提交、推送或部署。

## Paper Plane / 纸上航行 handoff — 2026-11-17

- 用户已选择「Paper Plane · 纸上航行」，明确要求与「文章」同级，不能归入 Martini / Martini Flight。独立首页酒单入口、现有公开根页面主导航和 fiction.html 已本地搭建。
- 独立样式与作品目录：assets/fiction.css、assets/fiction.js，版本 bar-fiction-20261117。BAR_FICTION 当前为空，未迁移现有文章；等待用户指定作品后再处理迁移与正文身份。
- 后续迁移须保持小说独立归档、Paper Plane 酒标和 fiction.html 导航高亮，保留原正文及杯底注释。详见 AGENT_FICTION.md 的字段、范围、人工验收限制和回滚。
- 仅进行源代码与定向 Git diff 阅读；未运行测试、语法检查、diff --check、浏览器或截图验收。既有 8765 预览未动，未暂存/提交/推送/部署，AGENTS.md 未改。


## 纸上航行迁移与编辑 handoff — 2026-11-17

- 本轮已迁移用户指定 A 组 18 篇到 content.js 的独立 BAR_FICTION，fiction.js 复用共享双联组件，18 篇显示为 16 组；B 组八篇在原栏目完成 22 处局部编辑，未重写其他正文。A 组正文／杯底注释／标题／日期和所有原 URL 保留。
- 窦靖童专题仍为五篇完整目录：誓言、改变、Fruit Fly 属于纸上航行；序言和空中飞人仍为一些思绪。共享系列入口标出各篇栏目，原编号和前后篇导航不变。两个双联合集与独立侧页均保留。
- content/site/fiction 版本及回滚见 AGENT_FICTION.md、AGENT_FICTION_MIGRATION.md。本次用户明确授权检查：三份 JS 语法、diff --check、九组不变量及链接检查、34 页 HTTP 和关键页面桌面浏览器观察通过；移动端及文章措辞仍由用户复查。
- 原 8765 预览未运行，现已创建本机静态预览（exec 会话 15525），保留给用户验收。已有未提交栏目与导航改动保留；当前分支 main，无暂存、提交、推送或部署；AGENTS.md 未改。


## 栏目更名：纸境 — 2026-11-17

- 按用户要求将对外栏目名「纸上航行」统一改为「纸境」；保留 Paper Plane 鸡尾酒身份、fiction.html 与全部文章 URL、18 篇作品及两组双联结构。
- 同步公开页面主导航、首页酒单、栏目标题与 description、正文栏目标识、侧栏、返回链接、专题归属和 JS 数据／渲染文案；仅刷新修改过的 content/site/fiction JS 资源版本，CSS 与视觉布局不变。
- 使用 AGENTS.md，读取 brief、visual 操作文件及必要 handoff／源码／Git 差异；更新当前 brief 和 AGENT_FICTION.md。按本次任务的手动验收规则，未运行测试、语法／diff 检查或浏览器视觉验收；两字标题的字体回退效果由用户复查。8765 预览未动，无暂存／提交／推送／部署，AGENTS.md 未修改。
- 如需仅撤销本次更名，可按外部 paper-realm-rename-baseline.json 的更名前工作文件恢复本次涉及的名称与 JS 缓存引用，保留其他既有修改。


## Paper Plane 酒标纠正 — 2026-11-17

- 用户明确酒标应画鸡尾酒本身。已删除杯沿纸飞机装饰，调整为浅口高脚 coupe、橙珊瑚色酒液、冷银玻璃边缘；不加冰块或装饰。依据 IBA Paper Plane 配方（https://iba-world.com/iba-cocktail/paper-plane/），四种原料等量、滤入冰镇鸡尾酒杯、无 garnish。
- 仅修改 assets/fiction.css 的 Paper Plane 酒标规则，更新其 22 个 HTML 消费者的 CSS 缓存引用为 bar-fiction-20261117-coupe；栏目 hero 的独立折纸插图、文章及其他酒标保持原样。
- 使用 AGENTS.md、brief、视觉操作文件和必要 handoff／源代码。更新当前栏目说明及状态记录。本次未运行自动或视觉验收；实际酒标效果待用户手动确认。既有预览未动，无暂存／提交／推送／部署，AGENTS.md 未改。若需撤销，仅恢复 Paper Plane CSS 规则及本次 CSS 版本引用，不覆盖其他未提交修改。


## Paper Plane 酒标材质统一 — 2026-11-17

- 根据用户反馈，撤回上一版独立透明玻璃杯与高亮酒液处理。Paper Plane 杯身现复用其他酒标的 --material 冷铬渐变，酒液采用同等透明度和低饱和的暖琥珀色；杯型与无装饰设定保留。
- 仅修改 fiction.css 的杯身与酒液材质，22 个既有消费者更新 CSS 版本为 bar-fiction-20261117-chrome；布局尺寸未改。使用 AGENTS.md、brief、视觉操作文件及必要 handoff／源码，已更新当前栏目记录。未运行自动或视觉验收，材质与并排效果待用户手动确认；预览未动，无提交／推送／部署；AGENTS.md 未改，无指令文件回滚事项。


## Paper Plane 切面冷铬＋琥珀映光 — 2026-11-17

- 用户选择推荐的 A 为主、少量 B。沿用共享 --material 冷铬材质和原杯型，增强杯腹明暗切面、杯沿锐光及液面层次，杯梗和底座带少量琥珀反射；无纸飞机装饰。
- 改动仅涉及 fiction.css 酒标规则及其 22 个既有 HTML 消费者的 CSS 版本（bar-fiction-20261117-faceted）。使用 AGENTS.md、brief、视觉操作文件及必要 handoff／源码；已更新当前状态。未运行自动或视觉验收，小尺寸反光与色彩强度待用户人工确认；预览未动，无提交／推送／部署，AGENTS.md 未改。
- 更改前 CSS 备份：外部任务目录 paper-plane-before-faceted.css。仅撤销本轮时恢复对应酒标规则与 CSS 版本，不覆盖其他既有修改。


## 栏目右侧物件插图 — 2026-11-17

- 用户批准将纸境右侧插图的艺术语言扩展到其他栏目。已为 posts、tonight、reviews、playlist、gallery、friends、about 及三个 tag 页面、notes 共 11 页增加独立 SVG、标题下中文附句和图下酒名小字；原栏目介绍保留。
- 插图分别为散页、台灯、地图、唱片、底片、双椅、钥匙、手帐、金属线、棱镜、杯垫便签。新增 assets/section-art.css 与 assets/heading-art/，仅 11 个消费者加载，版本 bar-section-art-20261117。纸境原飞机、现有酒标、首页、正文、数据与功能未改。
- 使用 AGENTS.md、brief、视觉操作文件及必要 handoff／源码；更新 brief 并新增 AGENT_SECTION_ART.md，记录范围、手动验收风险及外部 section-art-before.json 回滚来源。本轮仅读取源码和定向 Git diff，未运行自动或视觉验收；既有预览未动，无暂存／提交／推送／部署，AGENTS.md 未改。


## 全栏目「冷银与夜色」原生 SVG — 2026-11-17

- 用户认可冷色全栏目例图和原生 SVG 唱片／翻页日志试稿，授权整套落实。现已替换其余 11 个栏目插图：唱片、日志直接采用试稿源码，另九幅为弧面散页、半开窗、折叠地图、窗光相片、双吧椅、冷银钥匙、展开折信、酒红书签、卷角便签。纸境原飞机保留。
- 全部为原生 SVG 路径／渐变／剪裁／样式，无嵌入生成图片及新依赖。统一 520×350 固有尺寸，11 页更新 SVG 缓存版本 bar-section-art-20261117-coded；CSS、栏目文案、酒标、正文与数据功能保持现有实现。旧五幅替换意象已从公开资产移除，保存在外部快照。
- 使用 AGENTS.md、brief、视觉操作文件及必要 handoff／源码，更新 AGENT_SECTION_ART.md 与 brief。仅阅读源码、Git 状态与定向 diff，未运行测试、语法检查、diff --check、浏览器或截图验收；本轮实际明暗和移动端效果由用户人工确认。保留既有预览与上一轮未提交改动，无暂存／提交／推送／部署，AGENTS.md 未改。
- 回滚快照：外部任务目录 section-art-before-coded.json，包含本轮替换前的 11 个页面、11 幅图及标题区 CSS；仅恢复对应资源和图片引用，保留其他工作。


## 三幅插图优化与附句归位 — 2026-11-17

- 按用户反馈重画种草安利（完整薄册＋自然垂落的酒红书签）和一些思绪（柔和展开的信纸＋浅折痕），优化纸境的翼面渐变、纸边厚度和细薄折线，保留实际鸡尾酒酒标。
- 全部 12 个栏目页的中文附句由标题下移到插图 figcaption，中文在上、英文酒名小字在下；原栏目介绍保留。figure 取消整体 aria-hidden，图片继续作为装饰性空 alt。纸境现引用独立 paper-plane.svg，并共用 section-art.css。
- CSS 版本 bar-section-art-20261117-captions；上述三幅 SVG 版本 bar-section-art-20261117-refined，其余九幅仍为 coded。未改数据、正文或功能；已更新 brief、AGENT_SECTION_ART.md 和 AGENT_FICTION.md。
- 使用 AGENTS.md、brief、视觉操作文件及必要 handoff／源码；仅作源代码和定向 Git diff 阅读，未运行自动或视觉验收。三幅实际观感与图下文字换行待用户人工确认；既有预览未动，无暂存／提交／推送／部署，AGENTS.md 未改。回滚快照为外部 section-art-before-captions.json，包含 12 页、共享插图 CSS 与两个旧 SVG，保留本轮之前的未提交工作。
