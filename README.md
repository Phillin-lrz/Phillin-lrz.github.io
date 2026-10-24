# Phil Lin的Bar 博客模板

这是一个可直接发布到 GitHub Pages 的静态个人网站，核心气质是 `Phil Lin的Bar`：文字、酒、照片、音乐线索和私人档案。

## 预览

直接用浏览器打开 `index.html` 即可预览。

## 修改网站装饰

- 站点名称：全局搜索并替换 `Phil Lin的Bar`
- 颜色：修改 `assets/styles.css` 里的 `--accent`、`--paper`、`--ink`
- 导航：修改每个页面顶部的 `nav`
- 页脚：修改每个页面底部的 `footer`
- 徽章：保留 `assets/bar-badge.png`，不要直接替换成模板图

## 页面结构

- `index.html`：Bar Counter / 吧台首页
- `posts.html`：Martini / 文章归档
- `tag-lab.html`：Gibson / 生活日志
- `tag-thoughts.html`：Dirty Martini / 一些思绪
- `tag-recommendations.html`：Vesper / 种草安利
- `notes.html`：Hanky Panky / 吧台札记，收纳比吐槽长、但还不算完整文章的中段想法
- `tonight.html`：Gimlet / 今晚状态，合并 Now 和 Aftertaste
- `reviews.html`：Boulevardier / 酒柜，非专业酒评记录
- `playlist.html`：Sazerac / 夜间歌单，不放播放器和歌词
- `gallery.html`：French 75 / 摄影作品
- `friends.html`：Tom Collins / 友链
- `about.html`：Last Word / 关于我

## 发布文章

推荐使用“文章索引 + 单独文章文件”的结构。`assets/content.js` 里的 `window.BAR_POSTS` 只保存摘要信息，不保存整篇正文。

```js
{
  id: "unique-post-id",
  title: "文章标题",
  tag: "生活日志",
  publishedAt: "2026-06-10",
  summary: "文章摘要。",
  url: "article-my-first-post.html",
}
```

标签使用下面几类之一：

- `生活日志`
- `一些思绪`
- `种草安利`
- `吧台札记`

添加后，首页最近文章、文章归档、标签页会自动更新。首页最近文章只展示按发布时间排序的最近三篇。吧台札记也会进入最近文章和文章归档，但另有 `notes.html` 作为只看札记的专门入口。

1. 复制 `_drafts/article-format-reference.html`
2. 改成新的文章文件名，例如 `article-my-first-post.html`
3. 修改文章标题、发布时间、标签和正文
4. 在 `assets/content.js` 中新增对应文章，并把 `url` 指向这个 HTML 文件

### 文章页面格式

以后新增文章建议保持下面这个大概结构：

- 文件名使用 `article-英文或拼音短标题.html`，例如 `article-my-first-post.html`
- 页面主体使用 `article-layout drink-page drink-martini`
- 文章页酒标统一使用 `martini-glyph`，显示名为 `Martini · 文章正文`
- 正文放在 `<article class="article">` 内，顶部使用 `<header class="article-header">`
- 标题使用 `<h1>`，日期和标签使用 `发布时间：YYYY-MM-DD · 标签：标签名`
- 摘要放在标题区最后一个段落，正文再接若干 `<p>` 或 `<section>`
- 右侧栏保留 `article-aside`，放文章标签和“回到文章归档”按钮
- 如果文章有图片，放到 `assets/posts/<文章id>/`，不要把大图或 base64 放进 `assets/content.js`


### Group Notes 系列阅读

`group-notes-doujingtong.html` 是 Group Notes / Vol. 01「窦靖童 Part1」的总目录。五篇正文独立保存：

- `group-dou-00.html`：00 窦靖童（序言）
- `group-dou-01-shiyan.html`：01 誓言
- `group-dou-02-gaibian.html`：02 改变
- `group-dou-03-kongzhongfeiren.html`：03 空中飞人
- `group-dou-04-fruit-fly.html`：04 Fruit Fly

正文页顶部和末尾都可返回目录，末尾提供相邻篇目链接；序言是起点，Fruit Fly 是终点。系列保留「一些思绪」分类，只将总目录作为一条 `BAR_POSTS` 记录，首页最近文章、文章归档与标签页因此各显示一个系列入口。该条目使用 `kind: "group-notes"`、`groupNumber`、`groupCredit` 和 `groupEntries`；每个篇目保存标题、原有目录说明与独立 URL。主标题为「窦靖童 Part1」，`GROUP NOTES / VOL. 01` 单独展示。五篇正文不单独进入索引，也不使用 Paired Notes 的元数据。

系列采用平面五联折页：宽屏归档中序言区域占约三成宽度，放整组标题、引入文字和序言链接，四首歌各占一栏。首页使用同一组件的紧凑版，序言位于左侧并跨两行，四篇歌曲随笔在右侧排成两列；手机先展示序言，再展示两列篇目。歌名全部横排，沿用炭黑、青灰与银色细分隔线，序言只带轻微暗酒红底色。主标题和「完整目录」进入总目录，序言及歌曲篇目直接进入对应正文，不使用覆盖整卡的透明链接。系列目录采用文字标题区和纵向目录。悬停只改变文字及栏目底色，没有书脊、玻璃薄片、立体阴影或位移动效。

本组正文以作者确认的《Group_Notes_窦靖童_五篇完整修订版.docx》为准；Word 封面和目录不作为正文。保留段落、原有分隔、引用与强调，没有另写杯底注释。系列样式独立放在 `assets/group-notes.css`，由六个系列页面及首页、文章归档、三个标签页加载，使用独立选择器控制正文和索引样式；不增加播放器、字体、图库、音频或框架依赖。旧《Fruit Fly》两篇和《烟花》继续作为独立文章保留。

## 新增酒柜记录

在 `assets/content.js` 里的 `window.BAR_REVIEWS` 中新增条目。`reviews.html` 会自动渲染酒名、类型、场景、渠道、风味、醉意、当晚情绪和是否会再喝等字段。

## 新增吐槽

吐槽栏由 `assets/site.js` 自动显示在每个页面右侧，数据保存在独立的 `assets/gripes.js` 的 `window.BAR_GRIPES` 中。每条吐槽包含短句、心情、emoji 和精确到秒的发布时间。吐槽建议控制在 50 字左右，尽量不要超过 100 字。

```js
{
  text: "很短的一句话。",
  mood: "烦恼",
  emoji: "😫",
  publishedAt: "2026-06-11 12:40:15",
}
```

这是静态 GitHub Pages 方案里的数据池，不是服务端数据库。新增更多吐槽后，右侧栏目会按页面高度自动决定每页显示条数，剩余吐槽可以通过栏目底部的分页按钮查看。吐槽数量继续增大时，可以再升级为分页静态文件或 JSON 按需加载。

## 新增吧台札记

吧台札记用于收纳 300 到 1200 字左右的半成型想法：比吐槽长，但不要求像正式文章一样完整展开。它算作文章系统的一种标签，会出现在首页最近文章和 `posts.html` 文章归档里；`notes.html` 是只看札记的专门入口。入口在首页 Martini Flight 的变体区，不单独加入顶部导航，避免首页和移动端导航继续变挤。

札记索引保存在 `assets/content.js` 的 `window.BAR_NOTES` 中，列表页是 `notes.html`。每条札记仍然应该有自己的独立 HTML 页面；旧的 `_drafts` 札记模板已删除，后续新增时参考现有 `note-*.html` 正式页面的结构。

```js
{
  id: "unique-note-id",
  title: "札记标题",
  tag: "吧台札记",
  publishedAt: "2026-06-24",
  mood: "一点想法",
  summary: "札记摘要。",
  url: "note-my-bar-note.html",
}
```

新增札记时：

1. 参考现有 `note-*.html` 页面，新建新的札记文件名，例如 `note-my-bar-note.html`
2. 修改标题、发布时间、摘要和正文
3. 保持 `drink-page drink-hanky-panky`、`hanky-panky-glyph` 和返回 `notes.html` 的链接结构
4. 在 `assets/content.js` 的 `window.BAR_NOTES` 中新增对应条目
5. 如果修改了 `assets/content.js`、`assets/site.js` 或 `assets/styles.css`，同步刷新 HTML 里的资源版本号

## 新增摄影作品

在 `gallery.html` 的 `gallery-grid` 中复制一个 `photo-tile` 模块，修改标题和状态即可。如果要展示真实照片，把模块内容改成图片和文字说明，并把图片放入 `assets` 文件夹。

## 部署到 GitHub Pages

1. 创建 GitHub 仓库 `Phillin-lrz.github.io`
2. 上传本目录中的所有文件
3. 进入仓库 Settings -> Pages
4. 选择发布分支并保存
5. 等待部署完成后访问 `https://phillin-lrz.github.io/`

用户名变更后，请确认仓库名和远程地址都使用 `Phillin-lrz.github.io`，这样 GitHub Pages 才会作为个人主页发布。
