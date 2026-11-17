/* Paper Plane catalogue lives in content.js. Reuse the shared paired-note
   component so Side A / Side B remain one connected reading experience. */

(() => {
  const list = document.querySelector("[data-fiction-list]");
  if (!list) return;
  const works = collapsePairedNotes(window.BAR_FICTION || []).sort((a, b) =>
    String(b.publishedAt || "").localeCompare(String(a.publishedAt || "")),
  );
  if (!works.length) {
    list.hidden = true;
    document.querySelector("[data-fiction-empty]").hidden = false;
    return;
  }

  function element(tag, className, value) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value) node.textContent = value;
    return node;
  }

  const fragment = document.createDocumentFragment();
  works.forEach((work) => {
    if (work.kind === "paired-note") {
      const template = document.createElement("template");
      template.innerHTML = pairedNoteCard(work, "h3");
      fragment.append(template.content);
      return;
    }
    const entry = element("article", "fiction-entry");
    const card = element("a", "post-card fiction-card");
    card.href = work.url;
    const meta = element("span", "post-date");
    meta.append(element("span", "fiction-form", work.form || "纸境 · 文学叙事"));
    if (work.publishedAt) {
      const date = element("time", "", work.publishedAt);
      date.dateTime = work.publishedAt;
      meta.append(date);
    }
    card.append(meta, element("h3", "", work.title));
    if (work.summary) card.append(element("p", "", work.summary));
    card.append(element("span", "read-more", "阅读故事 ↗"));
    entry.append(card);
    if (work.seriesUrl) {
      const series = element("a", "fiction-series", `专题目录 / ${work.seriesTitle}`);
      series.href = work.seriesUrl;
      entry.append(series);
    }
    fragment.append(entry);
  });
  list.replaceChildren(fragment);
  list.hidden = false;
  document.querySelector("[data-fiction-empty]").hidden = true;
  document.querySelector("[data-fiction-count]").textContent = `${String(window.BAR_FICTION.length).padStart(2, "0")} 篇 / ${works.length} 组`;
})();
