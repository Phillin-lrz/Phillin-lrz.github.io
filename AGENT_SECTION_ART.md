# 栏目右侧物件插图 — 2026-11-17

## Approved scope

用户认可纸境右侧纸飞机的表现，最初批准为其他七个主栏目和四个文章子栏目落实「图案＋附句」。后续范围包含纸境在内，共 12 个栏目页。右侧主视觉表现栏目意象，左侧小酒标继续对应实际鸡尾酒。

后续用户否定了初版过于简陋的线稿和暖黄复古例图，认可「冷银与夜色」全栏目例图，随后认可原生 SVG 唱片／翻页日志试稿并要求全套落实。当前以这两幅代码试稿的冷灰材质、曲面与分层细节为基准；不嵌入生成图片，不再使用初版的台灯、线团、棱镜和杯垫组合。

| 页面 | 插图文件（assets/heading-art/） | 插图下中文附句 |
| --- | --- | --- |
| posts.html | loose-pages.svg：三张悬起的弧面散页 | 写完的，先放在这里。 |
| fiction.html | paper-plane.svg：冷银翼面与细薄折线 | 从一张纸，去往另一种人生。 |
| tonight.html | open-window.svg：半开的窗和一束斜光 | 今晚先这样，明天再说。 |
| reviews.html | folded-map.svg：折叠街区地图和手画圆圈 | 一些地方，值得绕一点路。 |
| playlist.html | record-sleeve.svg：封套与半露唱片 | 有些声音，适合一直放着。 |
| gallery.html | photo-print.svg：单张窗光与桌沿相片 | 当时没多想，后来留了下来。 |
| friends.html | bar-stools.svg：两张相邻的吧椅 | 隔着屏幕，也算邻座。 |
| about.html | bar-key.svg：冷银钥匙与细节切面 | 关于这个地方，也关于我。 |
| tag-lab.html | pocket-journal.svg：曲面翻页、分层书页与酒红书签 | 日子一天天过，偶尔记一笔。 |
| tag-thoughts.html | unfolded-letter.svg：柔和展开的信纸与浅折痕 | 想到哪里，先写到哪里。 |
| tag-recommendations.html | bookmark.svg：完整薄册与自然垂落的酒红书签 | 喜欢的，值得多说几句。 |
| notes.html | torn-note.svg：卷角、纸边与手写便签 | 还没想完，先写下来。 |

## Implementation

- assets/section-art.css 由上述 12 页加载，URL token 为 bar-section-art-20261117-captions。bookmark.svg、unfolded-letter.svg 和 paper-plane.svg 使用 bar-section-art-20261117-refined，其余九幅使用 bar-section-art-20261117-coded。
- 12 幅图全部为 520×350 独立原生 SVG，使用曲线路径、渐变、局部剪裁、细密沟槽、分层纸边及金属反光；没有嵌入位图、外部字体、依赖或客户端脚本。纸境原内联飞机已迁为独立 SVG，并统一采用共享插图容器；实际鸡尾酒酒标未改。
- record-sleeve.svg / pocket-journal.svg 直接来自用户认可的两幅代码试稿；其余九幅采用同组灰阶、冷银描边和局部酒红。原有五幅被替换的意象文件已移出公开资源集合，其源码保存在本轮外部回滚快照。
- 标题区使用 opt-in section-art-heading，左侧 section-art-copy 保留酒标、原英文眉题、主标题及原介绍。根据用户明确要求，中文附句已从标题下移到右侧 figcaption，英文「酒名 — PHIL LIN’S BAR」小字排在中文下方，图下有细分隔线。图片本身使用空 alt，figure 不再 aria-hidden，以便保留中文附句的可读语义。
- 宽屏左右分栏；720px 以下堆叠，插图右对齐，宽度 68%、最大 280px，沿用纸境的处理方向。
- 未修改共享 styles.css / interior.css、数据、筛选、链接、文章正文、首页或现有鸡尾酒酒标；本轮纸境页面仅调整主视觉及附句位置。新样式只作用于 opt-in 标题区域。

## Inspection and acceptance

- 遵循 AGENTS.md 手动验收覆盖规则：本轮仅阅读源代码、Git 状态与定向 diff，未运行测试、语法检查、diff --check、浏览器检查、截图或性能验收。
- 图案的实际明暗、窄屏留白、长介绍的标题区高度仍需用户人工验收；不宣称已视觉验证。
- 当前替换阶段同样没有运行自动或浏览器验收；先前向用户展示的两幅代码试稿确实曾在独立预览中渲染，但不能据此声称已验证本轮 11 个线上／本地页面。
- 原有本地预览未启动、停止或重启；保留用户当前预览。无暂存、提交、推送或部署。AGENTS.md 未修改。

## Rollback

- 改动前 11 个页面的完整工作文件保存在外部任务目录 section-art-before.json：C:/Users/Phil Lin/.codex/visualizations/2026/11/17/01a1e80d-d7ba-7272-b7bf-a6e8c4ced15e/。
- 如只撤销本轮，恢复这些页面的标题区与 section-art.css 引用，移除新建的 section-art.css 和 heading-art 下本轮 11 个 SVG；保留之后的用户改动。
- 移除本轮状态记录即可撤销文档变更。没有 AGENTS.md 指令文件变更需要回滚。
- 只撤销本次「冷银与夜色」代码版替换时，使用同一外部目录的 section-art-before-coded.json：包含替换前 11 个页面、11 个原 SVG 和 section-art.css。恢复相应 SVG／图片引用，移除仅本次新增的五个图案文件；不要覆盖后续用户改动。此快照保留了上一轮尚未提交的栏目标题区改动，不能用宽泛 Git reset 代替。
- 只撤销本次三幅优化与附句移动时，使用 section-art-before-captions.json：包含本轮改动前 12 页、section-art.css、bookmark.svg、unfolded-letter.svg；原纸飞机内联源码保留在 fiction.html 快照中。恢复对应范围后，仅在无引用时移除本轮新增 paper-plane.svg。
