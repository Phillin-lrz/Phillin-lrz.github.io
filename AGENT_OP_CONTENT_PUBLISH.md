# AGENT_OP_CONTENT_PUBLISH

Use this operation file for publishing new site content and editing existing content or endnotes. Apply the Cup-bottom Endnotes section to every new article and endnote revision.

## Covers

- New article pages: `article-*.html`.
- Existing article/note content edits and endnote revisions.
- New bar notes: `note-*.html`.
- New gripe entries in `assets/gripes.js`.
- Content created from pasted text, Word text, screenshots, or user-provided source material.
- Metadata updates in `assets/content.js`.
- Asset query string refreshes when content data changes.

## Default Read Set

Read only:

- `AGENT_BRIEF.md`
- this file
- the target content/data files needed for the task

Read `AGENT_HANDOFF.md` only for unfinished or dirty-worktree continuation. Read `AGENT_TODO.md` only when category/phase planning is genuinely needed.

Do not default-read `AGENT_CONTEXT.md`, `AGENT_CHANGELOG.md`, or `AGENT_CHANGELOG_ARCHIVE.md`.

## Deep Read Gate

Before reading any deeper state file, ask the user for confirmation and name the exact file plus reason.

Allowed only when:

- The user asks to follow or restore an older publishing rule.
- The content boundary is unclear after checking current target files.
- Current files conflict with the brief/handoff/todo state.
- A rollback or historical audit becomes part of the task.

`AGENT_CHANGELOG_ARCHIVE.md` is not allowed for normal publishing.

## Common Target Files

- `assets/content.js`
- `assets/gripes.js`
- `article-*.html`
- `note-*.html`
- `gripe-*.html`
- the eight `assets/content.js` consumer pages when content-data cache strings must refresh: `article.html`, `index.html`, `notes.html`, `posts.html`, `reviews.html`, `tag-lab.html`, `tag-recommendations.html`, and `tag-thoughts.html`
- `assets/posts/` or `assets/gripes/` when media is involved

## Verification

- Run `node --check assets/content.js` when `assets/content.js` changes.
- Run `node --check assets/gripes.js` when `assets/gripes.js` changes.
- Run `node --check assets/site.js` only when rendering logic changes.
- Use file-level checks and searches for links, ids, and asset query strings.
- Cache-bust only the resource that changed. A post/note/place metadata change updates only the `assets/content.js` query on its eight consumer pages; do not refresh CSS, badge, gripe, or site-script queries unless those assets changed.
- Static article, note, place, gallery, playlist, and detail pages must not load `assets/content.js` unless they contain a documented `BAR_*` rendering hook.
- Extract DOCX content once. Preserve paragraph and semantic separator order, compare source-to-HTML locally, and report counts plus mismatches instead of printing the full extraction repeatedly.
- Skip visual browser verification by project preference unless the user explicitly asks.

## State Logging

At the end of the whole operation, write one concise entry to `AGENT_CHANGELOG.md`.
Update `AGENT_HANDOFF.md` only if future work needs to remember the published item.
Update `AGENT_BRIEF.md` only for durable workflow-level facts, not every post.

## Cup-bottom Endnotes / 杯底注释写作与编辑规范

### 2.1 核心定义

**杯底注释是从整篇文章中提炼出来的一句思想或情感评注，是文章在正文结束以后留下的浓缩余味。**

它不同于文章摘要，也不同于正文的最后一句。

正文可以负责铺陈、分析、解释、梳理事情的经过，保持理性和克制。

杯底注释则可以更加凝练、主观、鲜明，甚至情感更浓烈。

它允许作者表达那些在正文中没有直接说出口，或者由于理性分析而被适度压抑的情绪。

包括但不限于：

- 喜欢与眷恋。
- 感激与温柔。
- 遗憾与不甘。
- 疲惫与委屈。
- 矛盾与犹豫。
- 愤怒与失望。
- 释然或仍然放不下。
- 对某件事情更直接的个人判断。

情绪可以鲜明，但必须有正文依据。

**杯底注释不需要继续解释为什么会产生这些感情。正文已经承担了这个任务。**

### 2.2 核心写作原则

**第一，必须从全文中提炼。**

杯底注释应当建立在整篇文章真正讨论的经历、思想、情绪或矛盾之上。

不能只读文章标题或摘要，就机械生成一句看似相关的文字。

尤其不能随机挑选正文中的某个次要细节，硬写成一句与全文精神无关的补充。

**第二，允许比正文更有情绪。**

正文的冷静与克制，不必完全延续到杯底注释。

如果全文的情感基础足够充分，注释可以更加直白、热烈、悲伤或不甘。

不需要为了维护成熟、理性、洒脱的形象而压抑真实感情。

但不得虚构作者的经历、意愿或情绪。

**第三，凝练而完整。**

杯底注释通常以一至两句话为宜。

它应该有独立的表达，而不是需要另一段解释才能成立的半成品。

可以使用文学性语言、比喻、反讽或幽默，但它们只是表达手段，不是硬性要求。

**第四，可以概括全文，但不能机械复述。**

这是非常重要的区别。

杯底注释可以总结正文的思想，浓缩正文的感情，也可以与正文结尾表达相同的主题。

禁止的是直接复制正文末句，或仅通过替换近义词、调整语序来重复同一句话。

**提炼不等于摘录，浓缩不等于复述。**

**第五，忠实于作者。**

作者的文章可以理性、锋利、幽默，也可以温柔、感性。

杯底注释同样应当保持这种个人表达风格。

不要为了追求文学效果而擅自宣称作者已经成长、释怀、遗忘或得到了某个人生答案。

允许思想和情绪保持矛盾。

### 2.3 明确禁止的写法

以后发布或修改文章时，应避免：

1. 直接复制正文最后一句或最后几个自然段。
2. 只修改少量字词，再把正文结尾当作注释。
3. 将文章摘要缩短成一句话。
4. 使用与具体文章缺乏联系的通用哲理。
5. 每篇都写成「有些事情……」「真正的……」「原来……」等固定句型。
6. 为了与正文不同而强行转移话题。
7. 为了活泼而强行制造笑点。
8. 为了感人而过度渲染感情。
9. 擅自替作者编造个人经历或感情结论。
10. 把杯底注释变成没有独立表达价值的形式化填充。

但不要反过来将所有哲理、比喻、总结、幽默都列为禁忌。

这些表达方式可以使用，前提是适合具体文章。

### 2.4 写作流程

以后新文章的处理顺序应当是：

1. 阅读或完成完整正文。
2. 理解全文的主要思想、情绪、重要矛盾以及作者真正想表达的东西。
3. 确认正文结尾已经完整。
4. 独立构思杯底注释。
5. 判断其中是否有一种值得浓缩、突出或更坦率表达的感受。
6. 根据文章本身决定注释的情感强度。
7. 核查新注释是否忠实于正文，以及是否与正文末句机械重复。
8. 如果作者已经提供指定注释，优先准确保留，不擅自改写。
9. 原稿没有提供注释时，由 Codex 按上述规范自行撰写并添加，不得直接省略。组文的序言及每篇独立文章分别提炼、分别添加在各自正文页，不以目录页的一条总注释替代。

不需要强制每篇注释保持同样的情感浓度。

有些文章适合冷静的判断，有些适合强烈的感情，有些则适合轻松的幽默。

**统一的是杯底注释的功能，而不是所有文章的语气。**

每篇新文章默认必须有杯底注释，只有作者明确要求不添加时才省略。若阅读全文后仍没有足够可靠的内容可以提炼，不要凭空生成或默默跳过，应说明具体缺口并请作者澄清；不能仅因原稿未提供注释而认定依据不足。

### 2.5 重要范例

以下早期杯底注释可以作为学习参照。

《两瓶酒后，找回写字的手感》：

> 酒精不是答案，只是偶尔让噪声低一点。

《Fallback》：

> 后路不是环境，是有人一次次没有收回的信任。

《117.》：

> 有些酒不在菜单上，才更能说明自己真正想点什么。

《实验和复习双开的一天》：

> 有些日子不是轻松过去的，是被一点点续航过去的。

这些注释并非与正文无关的题外话。

它们从全文出发，将已经展开的思想或情感凝练成了有独立表达的一句话。

其中有些偏向思考，有些偏向情绪，有些带有隐喻。

不要机械模仿其句式，应当学习其与全文之间的关系。

本次更新的 11 篇文章也可以作为不同情感浓度的实例。
