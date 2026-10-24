# 全站冷铬酒标 — 2026-10-24

## 用户决定与边界

- 用户选择 D「冷铬金属器物」，要求所有页面的酒标统一修改。
- 用户明确要求可以通过 CSS 实现的不要生图；本次网站实现完全使用 CSS 渐变、圆角、裁切及装饰元素，无生成图片或新依赖。
- 保留原页面排版、酒标外框、菜单行高、列宽、字号、文字位置、间距、链接与动效容器。
- 首页外框仍为桌面 39px、移动端 32px；内页原有区域仍为 58px、内部画布 3.12rem。移动端内部图形使用原有 520px 断点。

## 实现

- 新增 `assets/drink-icons.css`，使用独立的 `bar-drink` / `drink-part-*` 类名，在 `styles.css` 的 design layer 中导入。
- 125 个公开内页的现有酒标改用共享装饰元素，另同步现有 `_drafts/article-format-reference.html` 的酒标模板。
- 首页七个菜单酒标使用同一套冷铬样式；保留 `hp-seal` 容器和现有动效钩子，四个 Martini 子分类入口继续保持原文字排布。
- Gibson、Dirty Martini、Vesper、Hanky Panky 分别通过杯型比例、洋葱、橄榄、柠檬皮、橙皮与酒液色调区分。
- 标准 Martini 保留单橄榄；首页 Martini Flight 用四个小点标识组合。友链页保留猫、Collins 和吸管特征及原点击链接。
- 现有 SVG 文件保留；迁移后的酒标通过限定的背景覆盖关闭旧图形，新 CSS 不影响其他背景。
- 共刷新 139 个共享样式引用（138 个根目录公开 HTML 加一个现有草稿模板），以及首页自己的 home.css 引用。新 CSS 版本为 `bar-chrome-icons-20261024`；字体、数据、SVG、interior.css 和脚本版本不变。

## 验收与限制

- 依据 `AGENTS.md` 的 manual-acceptance override，用户执行验收。
- 本次实施只进行了必要的源代码与定向 Git diff 阅读；没有执行自动测试、语法检查、git diff --check、浏览器检查、截图、录像或性能检查。
- 较早的 D 方案图是提案素材，不代表本次全站落地已通过视觉验收。尤其新增的猫喝 Collins 及各设备上的小尺寸金属反光仍需用户手动查看。
- 原端口 8765 本地预览未停止或重启；未提交、推送、合并或部署。

## 回滚

- 修改前的工作区原始字节保存在：`C:/Users/Phil Lin/.codex/visualizations/2026/10/24/01a16c59-e85c-7470-9806-2f9c59785bc4/chrome-before-apply/`。
- 快照包含本轮之前已完成的首页链接修复与今晚文案。回滚时按快照恢复本轮涉及的 HTML、assets/styles.css、assets/home.css，移除新增 assets/drink-icons.css，并同步本记录与状态文件；如之后有新工作，必须逐文件保留后续更改。
- 本轮没有修改 `AGENTS.md`，不涉及指令文件回滚。

## 状态来源

- 采用项目 `AGENTS.md`。
- 本会话已读取 `AGENT_BRIEF.md`、`AGENT_HANDOFF.md`、`AGENT_FINAL_POLISH.md`；本轮读取视觉、前端逻辑与项目状态操作说明以及目标源码。
- 未读取需要用户确认的 `AGENT_CONTEXT.md`、`AGENT_CHANGELOG.md` 或历史归档。变更日志仅追加本轮记录。
