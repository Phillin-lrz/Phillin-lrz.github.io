const root = document.documentElement;
const savedParticles = localStorage.getItem("blog-particles");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const compactMotionQuery = window.matchMedia("(max-width: 720px)");
const reduceMotion = reduceMotionQuery.matches;
const defaultMotionOff = reduceMotion || compactMotionQuery.matches;

if (savedParticles) {
  root.dataset.particles = savedParticles;
} else if (defaultMotionOff) {
  root.dataset.particles = "off";
}

function updateMotionButton(button) {
  const isOff = root.dataset.particles === "off";
  button.setAttribute("aria-pressed", String(!isOff));
  button.title = reduceMotion ? "系统已减少动态效果" : isOff ? "打开烛光微粒" : "关闭烛光微粒";
  button.setAttribute("aria-label", button.title);
}

document.querySelectorAll("#themeToggle").forEach((button) => {
  updateMotionButton(button);
  if (reduceMotion) {
    button.disabled = true;
  }
  button.addEventListener("click", () => {
    if (reduceMotion) return;
    const next = root.dataset.particles === "off" ? "on" : "off";
    root.dataset.particles = next;
    localStorage.setItem("blog-particles", next);
    updateMotionButton(button);
    if (next === "on") {
      if (!canvas) {
        initAmbientMotion();
      } else if (!animationFrame) {
        startTime = performance.now();
        draw();
      }
    }
  });
});

document.querySelectorAll("[data-accent]").forEach((button) => {
  button.addEventListener("click", () => {
    const accent = button.dataset.accent;
    root.dataset.accent = accent;
    localStorage.setItem("blog-accent", accent);
  });
});

const pointer = { x: 0, y: 0, active: false };
let barNodes = [];
let startTime = performance.now();
let canvas = null;
let cursor = null;
let ctx = null;
let animationFrame = null;

const cocktailConstellations = [
  {
    name: "Martini",
    tone: "rgba(255, 241, 204,",
    points: [
      [0.12, 0.22], [0.25, 0.22], [0.19, 0.38], [0.19, 0.53], [0.13, 0.62], [0.25, 0.62],
    ],
    links: [[0, 1], [0, 2], [1, 2], [2, 3], [3, 4], [3, 5]],
  },
  {
    name: "Old Fashioned",
    tone: "rgba(240, 164, 58,",
    points: [
      [0.72, 0.22], [0.86, 0.22], [0.84, 0.52], [0.74, 0.52], [0.77, 0.38], [0.82, 0.34],
    ],
    links: [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [3, 4], [2, 5]],
  },
  {
    name: "Coupe",
    tone: "rgba(255, 210, 138,",
    points: [
      [0.34, 0.66], [0.52, 0.66], [0.48, 0.78], [0.38, 0.78], [0.43, 0.86], [0.36, 0.92], [0.5, 0.92],
    ],
    links: [[0, 1], [0, 3], [1, 2], [2, 3], [2, 4], [3, 4], [4, 5], [4, 6]],
  },
  {
    name: "Highball",
    tone: "rgba(154, 155, 93,",
    points: [
      [0.56, 0.2], [0.64, 0.2], [0.65, 0.54], [0.55, 0.54], [0.58, 0.34], [0.63, 0.42], [0.68, 0.16],
    ],
    links: [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [1, 6]],
  },
];

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  buildNodes();
}

function buildNodes() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  barNodes = cocktailConstellations.flatMap((shape) =>
    shape.points.map(([x, y], index) => ({
      x: x * width,
      y: y * height,
      baseX: x * width,
      baseY: y * height,
      index,
      shape,
      size: index === 0 || index === 1 ? 2.8 : 2.1,
      phase: Math.random() * Math.PI * 2,
    })),
  );
}

function drawNode(node, time) {
  const bob = Math.sin(time / 900 + node.phase) * 2.5;
  node.x = node.baseX + Math.cos(time / 1200 + node.phase) * 1.8;
  node.y = node.baseY + bob;

  ctx.beginPath();
  ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
  ctx.fillStyle = `${node.shape.tone} 0.82)`;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(node.x, node.y, node.size * 3.2, 0, Math.PI * 2);
  ctx.strokeStyle = `${node.shape.tone} 0.08)`;
  ctx.stroke();
}

function drawConstellationLines(time) {
  let offset = 0;
  cocktailConstellations.forEach((shape) => {
    shape.links.forEach(([a, b]) => {
      const from = barNodes[offset + a];
      const to = barNodes[offset + b];
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.strokeStyle = `${shape.tone} ${0.18 + Math.sin(time / 1200 + a) * 0.04})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });
    offset += shape.points.length;
  });
}

function drawPointerConnections() {
  if (!pointer.active) return;

  barNodes.forEach((node) => {
    const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y);
    if (distance < 210) {
      const alpha = 0.32 * (1 - distance / 210);
      ctx.beginPath();
      ctx.moveTo(node.x, node.y);
      ctx.lineTo(pointer.x, pointer.y);
      ctx.strokeStyle = `rgba(255, 210, 138, ${alpha})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
  });

  ctx.beginPath();
  ctx.arc(pointer.x, pointer.y, 7, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255, 241, 204, 0.42)";
  ctx.stroke();
}

function drawGarnishes(time) {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const garnishPoints = [
    [0.9, 0.36, "#9a9b5d"], [0.08, 0.72, "#f0a43a"], [0.68, 0.82, "#9f2f28"],
  ];

  garnishPoints.forEach(([x, y, color], index) => {
    const px = x * width + Math.sin(time / 1400 + index) * 7;
    const py = y * height + Math.cos(time / 1100 + index) * 5;
    ctx.beginPath();
    ctx.ellipse(px, py, 12, 5, Math.PI / 5, 0, Math.PI * 2);
    ctx.strokeStyle = `${color}99`;
    ctx.stroke();
  });
}

function draw() {
  if (root.dataset.particles === "off") {
    animationFrame = null;
    return;
  }
  const time = performance.now() - startTime;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  drawGarnishes(time);
  drawConstellationLines(time);
  barNodes.forEach((node) => drawNode(node, time));
  drawPointerConnections();
  animationFrame = requestAnimationFrame(draw);
}

function shouldStartAmbientMotion() {
  return !reduceMotion && !compactMotionQuery.matches && root.dataset.particles !== "off";
}

function initAmbientMotion() {
  if (!shouldStartAmbientMotion()) return;

  canvas = document.createElement("canvas");
  canvas.id = "particleCanvas";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  cursor = document.createElement("div");
  cursor.className = "bar-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.dataset.hidden = "true";
  document.body.append(cursor);

  ctx = canvas.getContext("2d");
  if (!ctx) return;

  function syncCursorPosition() {
    if (!pointer.active) return;
    cursor.dataset.hidden = "false";
    cursor.style.left = `${pointer.x}px`;
    cursor.style.top = `${pointer.y}px`;
  }

  function moveCursor(event) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
    syncCursorPosition();
  }

  function hideCursor() {
    pointer.active = false;
    cursor.dataset.hidden = "true";
  }

  window.addEventListener("resize", resizeCanvas);

  window.addEventListener("pointermove", moveCursor);
  document.addEventListener("pointerover", moveCursor);
  window.addEventListener("mousemove", moveCursor);
  document.addEventListener("mouseover", moveCursor);
  window.addEventListener("pointerleave", hideCursor);
  window.addEventListener("mouseleave", hideCursor);
  window.addEventListener("pointerenter", syncCursorPosition);
  window.addEventListener("mouseenter", syncCursorPosition);

  document.querySelectorAll("[data-drink]").forEach((item) => {
    const activateDrink = () => {
      cursor.dataset.drink = item.dataset.drink || "";
      cursor.dataset.active = "true";
    };
    const clearDrink = () => {
      cursor.dataset.drink = "";
      cursor.dataset.active = "false";
    };

    item.addEventListener("pointerenter", activateDrink);
    item.addEventListener("mouseenter", activateDrink);
    item.addEventListener("pointerleave", clearDrink);
    item.addEventListener("mouseleave", clearDrink);
  });

  resizeCanvas();
  draw();
}

initAmbientMotion();

const NOTE_TAG = "吧台札记";

function normalizedNotes() {
  const builtInNotes = window.BAR_NOTES || [];
  return builtInNotes.map((note) => ({
    ...note,
    tag: note.tag || NOTE_TAG,
    kind: "note",
    url: noteUrl(note),
  }));
}

function allPosts() {
  const builtInPosts = window.BAR_POSTS || [];
  return collapsePairedNotes([...builtInPosts, ...normalizedNotes()]).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function postUrl(post) {
  return post.url || `article.html?id=${encodeURIComponent(post.id)}`;
}

function postCard(post, heading = "h2") {
  if (post.kind === "paired-note") return pairedNoteCard(post, heading);
  const title = escapeHtml(post.title);
  const summary = escapeHtml(post.summary || "尚未填写简介。");
  const tag = escapeHtml(post.tag);
  const date = escapeHtml(post.publishedAt);
  const isNote = post.kind === "note" || post.tag === NOTE_TAG;
  const metaPrefix = isNote ? "札记" : "发布时间";
  const readMore = isNote ? "读这条札记" : "阅读全文";
  return `
    <a class="post-card${isNote ? " note-card" : ""}" href="${postUrl(post)}">
      <span class="post-date">${metaPrefix}：${date} · ${tag}</span>
      <${heading}>${title}</${heading}>
      <p>${summary}</p>
      <span class="read-more">${readMore}</span>
    </a>
  `;
}

function allNotes() {
  return collapsePairedNotes(normalizedNotes()).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

function noteUrl(note) {
  return note.url || `note-${encodeURIComponent(note.id)}.html`;
}

function noteCard(note, heading = "h2") {
  if (note.kind === "paired-note") return pairedNoteCard(note, heading);
  const title = escapeHtml(note.title);
  const summary = escapeHtml(note.summary || "这条札记还没有写简介。");
  const date = escapeHtml(note.publishedAt);
  const mood = escapeHtml(note.mood || NOTE_TAG);
  return `
    <a class="post-card note-card" href="${noteUrl(note)}">
      <span class="post-date">札记：${date} · ${mood}</span>
      <${heading}>${title}</${heading}>
      <p>${summary}</p>
      <span class="read-more">读这条札记</span>
    </a>
  `;
}

function collapsePairedNotes(items) {
  const pairs = new Map();

  items.forEach((item) => {
    if (!item.pairId) return;
    const pair = pairs.get(item.pairId) || [];
    pair.push(item);
    pairs.set(item.pairId, pair);
  });

  const emitted = new Set();
  return items.flatMap((item) => {
    if (!item.pairId) return [item];
    if (emitted.has(item.pairId)) return [];
    emitted.add(item.pairId);

    const sides = (pairs.get(item.pairId) || [item]).sort((a, b) =>
      String(a.pairSide).localeCompare(String(b.pairSide)),
    );
    return [{
      id: item.pairId,
      kind: "paired-note",
      tag: item.tag || NOTE_TAG,
      publishedAt: item.publishedAt,
      title: sides.map((side) => side.title).join(" / "),
      summary: item.pairSummary || item.summary,
      pairNumber: item.pairNumber || "01",
      pairSubtitle: item.pairSubtitle || "Two notes from the same night.",
      pairUrl: item.pairUrl,
      sides,
    }];
  });
}

function pairedNoteCard(pair, heading = "h2") {
  const pairUrl = escapeHtml(pair.pairUrl || "notes.html");
  const number = escapeHtml(pair.pairNumber || "01");
  const date = escapeHtml(pair.publishedAt);
  const subtitle = escapeHtml(pair.pairSubtitle || "Two notes from the same night.");
  const sides = pair.sides.map((side) => `
    <div class="paired-card-side paired-card-side-${escapeHtml(String(side.pairSide).toLowerCase())}">
      <span>SIDE ${escapeHtml(side.pairSide)}</span>
      <${heading}>${escapeHtml(side.title)}</${heading}>
      <p>${escapeHtml(side.pairDeck || side.summary || "")}</p>
    </div>
  `).join("");
  const sideLinks = pair.sides.map((side) =>
    `<a href="${escapeHtml(noteUrl(side))}">Read Side ${escapeHtml(side.pairSide)} separately</a>`,
  ).join("");

  return `
    <article class="post-card paired-note-card">
      <a class="paired-card-cover" href="${pairUrl}" aria-label="阅读 Paired Notes ${number}：${escapeHtml(pair.title)}"></a>
      <div class="paired-card-heading">
        <span class="post-date">PAIRED NOTES ${number} · ${date}</span>
        <span>${subtitle}</span>
      </div>
      <div class="paired-card-sides">${sides}</div>
      <nav class="paired-card-links" aria-label="双联篇独立阅读入口">${sideLinks}</nav>
    </article>
  `;
}

function renderNoteList() {
  document.querySelectorAll("[data-note-list]").forEach((container) => {
    const notes = allNotes();
    container.innerHTML = notes.length
      ? notes.map((note) => noteCard(note, "h2")).join("")
      : '<article class="post-card note-card"><span class="post-date">Hanky Panky · 吧台札记</span><h2>札记杯还空着</h2><p>这里以后放 300 到 1200 字左右的半成型想法：比吐槽长一点，比正式文章松一点。</p></article>';
  });
}

function renderRecentPosts() {
  document.querySelectorAll("[data-recent-posts]").forEach((container) => {
    const posts = allPosts().slice(0, 3);
    container.innerHTML = posts.length
      ? posts.map((post) => postCard(post, "h3")).join("")
      : '<article class="post-card"><span class="post-date">尚无文章</span><h3>亟待创作</h3><p>新的文字还在吧台后面准备。</p></article>';
  });
}

function renderPostList(tag = "all") {
  const container = document.querySelector("[data-post-list]");
  if (!container) return;
  const posts = tag === "all" ? allPosts() : allPosts().filter((post) => post.tag === tag);
  container.innerHTML = posts.length
    ? posts.map((post) => postCard({ ...post }, "h2")).join("")
    : '<article class="post-card"><span class="post-date">亟待创作</span><h2>这个标签还没有文章</h2><p>新的内容会在发布后出现在这里。</p></article>';
}

function initPostFilters() {
  const filters = document.querySelector("[data-post-filters]");
  if (!filters) return;
  renderPostList();
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter-tag]");
    if (!button) return;
    filters.querySelectorAll("[data-filter-tag]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderPostList(button.dataset.filterTag);
  });
}

function renderTagPages() {
  document.querySelectorAll("[data-tag-posts]").forEach((container) => {
    const tag = container.dataset.tagPosts;
    const posts = allPosts().filter((post) => post.tag === tag);
    container.innerHTML = posts.length
      ? posts.map((post) => postCard(post, "h2")).join("")
      : `<article class="post-card"><span class="post-date">${escapeHtml(tag)}</span><h2>亟待创作</h2><p>这个分类还在等待第一篇文章。</p></article>`;
  });
}

function renderArticlePage() {
  const page = document.querySelector("[data-article-page]");
  if (!page) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const post = allPosts().find((item) => item.id === id);
  const title = page.querySelector("[data-article-title]");
  const tag = page.querySelector("[data-article-tag]");
  const meta = page.querySelector("[data-article-meta]");
  const summary = page.querySelector("[data-article-summary]");
  const content = page.querySelector("[data-article-content]");
  const tagRow = page.querySelector("[data-article-tag-row]");
  const info = page.querySelector("[data-article-info]");
  const endnote = page.querySelector("[data-article-endnote]");

  if (!post) {
    title.textContent = "文章没有找到";
    tag.textContent = "Not Found";
    meta.textContent = "发布时间：未知";
    if (summary) summary.textContent = "";
    content.innerHTML = "<p>这篇文章还没有写入 assets/content.js，或者对应的文章 id 已经变更。</p>";
    tagRow.innerHTML = "<span>未知</span>";
    if (info) info.textContent = "没有匹配到文章信息。";
    if (endnote) endnote.textContent = "杯底注释：没有找到这一杯，就先回到归档。";
    return;
  }

  document.title = `${post.title} | Phil Lin的Bar`;
  title.textContent = post.title;
  tag.textContent = post.tag;
  meta.textContent = `发布时间：${post.publishedAt} · 标签：${post.tag}`;
  if (summary) summary.textContent = post.summary || "";
  content.innerHTML = post.content || "";
  tagRow.innerHTML = `<span>${escapeHtml(post.tag)}</span>`;
  if (info) info.textContent = `一篇归入「${post.tag}」的文章，发布于 ${post.publishedAt}。`;
  if (endnote) endnote.textContent = `杯底注释：${post.aftertaste || "这篇文章先留在这里，余味慢慢往后走。"}`;
}

function reviewArray(items = []) {
  return Array.isArray(items) ? items : [];
}

function reviewMatches(review, filter) {
  if (!filter || filter === "all") return true;
  const tags = reviewArray(review.tags);
  return review.type === filter || tags.includes(filter) || reviewArray(review.goodFor).includes(filter);
}

function ratingLabel(key) {
  return {
    atmosphere: "氛围",
    foodDrink: "出品",
    value: "性价比",
    solo: "独处",
    revisit: "再去",
  }[key] || key;
}

function scoreBar(key, value = 0) {
  const score = Math.max(0, Math.min(10, Number(value) || 0));
  return `
    <div class="review-rating">
      <span>${ratingLabel(key)}</span>
      <div class="review-meter" aria-hidden="true"><i style="width: ${score * 10}%"></i></div>
      <strong>${score.toFixed(score % 1 ? 1 : 0)}</strong>
    </div>
  `;
}

function chipList(items = []) {
  return reviewArray(items).map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function drinkList(drinks = []) {
  const items = reviewArray(drinks);
  if (!items.length) return "";
  return `<span class="visit-drinks">${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</span>`;
}

function visitItems(visit) {
  return visit.drinks || visit.items || visit.dishes || [];
}

function placeVisits(place) {
  return reviewArray(place.visits).sort((a, b) => {
    const dateDiff = new Date(b.date || b.visitAt || 0).getTime() - new Date(a.date || a.visitAt || 0).getTime();
    if (dateDiff) return dateDiff;
    return Number(b.no || 0) - Number(a.no || 0);
  });
}

function placeScore(place) {
  const scores = placeVisits(place).map((visit) => Number(visit.score)).filter(Number.isFinite);
  if (scores.length) {
    return scores.reduce((total, score) => total + score, 0) / scores.length;
  }
  const fallback = Number(place.overallScore || place.score);
  return Number.isFinite(fallback) && fallback > 0 ? fallback : null;
}

function scoreStamp(score) {
  if (score === null) {
    return `
      <div class="review-stamp is-unscored" aria-label="待评分">
        <span>--</span>
        <small>待评分</small>
      </div>
    `;
  }
  return `
    <div class="review-stamp" aria-label="总评分 ${score.toFixed(1)} 分">
      <span>${score.toFixed(1)}</span>
      <small>/ 10</small>
    </div>
  `;
}

function visitTimeline(place) {
  const visits = placeVisits(place).slice(0, 4);
  if (!visits.length) return "";
  return `
    <div class="visit-timeline" aria-label="${escapeHtml(place.name || "去处")} 到访记录">
      <span class="mini-label">Visit Receipts</span>
      ${visits.map((visit) => `
        <a class="visit-mini" href="${escapeHtml(visit.url || "#")}">
          <span>#${String(visit.no || 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(visit.label || visit.title || "一次到访")}</strong>
          <small>${escapeHtml(visit.date || "")}${visit.score ? ` · ${Number(visit.score).toFixed(1)}` : ""}</small>
          ${drinkList(visitItems(visit))}
        </a>
      `).join("")}
    </div>
  `;
}

function reviewCard(review, index) {
  const ratings = review.ratings || {};
  const ratingKeys = ["atmosphere", "foodDrink", "value", "solo", "revisit"];
  const name = escapeHtml(review.name || review.title || "未命名去处");
  const type = escapeHtml(review.type || "去处");
  const area = escapeHtml(review.area || "地点待补");
  const visits = placeVisits(review);
  const date = escapeHtml(review.latestVisitAt || review.date || visits[0]?.date || "日期待补");
  const score = placeScore(review);
  const url = review.url ? escapeHtml(review.url) : "";
  const visitCount = Number(review.visitCount || visits.length || 0);
  const visitMeta = visitCount ? ` · ${visitCount} 次记录` : "";
  const readMore = url ? `<a class="read-more" href="${url}">打开店铺档案</a>` : "";
  return `
    <article class="cellar-card review-card${index === 0 ? " featured" : ""}">
      ${scoreStamp(score)}
      <div class="cellar-card-main">
        <span class="post-date">${type} · ${area} · 最近 ${date}${visitMeta}</span>
        <h2>${name}</h2>
        <p class="review-oneline">${escapeHtml(review.oneLine || "今晚先记到这里。")}</p>
        <p>${escapeHtml(review.notes || "")}</p>
        <div class="review-tags">${chipList(review.tags)}</div>
        ${visitTimeline(review)}
        ${readMore}
      </div>
      <div class="review-scorecard">
        <div class="review-ratings">
          ${ratingKeys.map((key) => scoreBar(key, ratings[key])).join("")}
        </div>
        <dl class="review-scene">
          <div><dt>适合</dt><dd>${chipList(review.goodFor)}</dd></div>
          <div><dt>推荐</dt><dd>${chipList(review.recommended)}</dd></div>
          <div><dt>不适合</dt><dd>${chipList(review.notFor)}</dd></div>
        </dl>
      </div>
    </article>
  `;
}

function renderReviewList(filter = "all") {
  document.querySelectorAll("[data-review-list]").forEach((container) => {
    const reviews = (window.BAR_PLACES || window.BAR_REVIEWS || []).filter((review) => reviewMatches(review, filter));
    container.innerHTML = reviews.length
      ? reviews.map((review, index) => reviewCard(review, index)).join("")
      : '<article class="cellar-card review-card"><span class="post-date">Place Map</span><h2>这一格还空着</h2><p>没有符合筛选的去处。换一个标签，或者等下次回来再补。</p></article>';
  });
}

function initReviewFilters() {
  const filters = document.querySelector("[data-review-filters]");
  if (!filters) return;
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-review-filter]");
    if (!button) return;
    filters.querySelectorAll("[data-review-filter]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderReviewList(button.dataset.reviewFilter);
  });
}

function allGalleryGroups() {
  return window.BAR_GALLERY_GROUPS || [];
}

function galleryMatches(group, filter) {
  if (!filter || filter === "all") return true;
  return group.type === filter || reviewArray(group.tags).includes(filter);
}

function galleryPhotoCard(photo, group, index) {
  const title = escapeHtml(group.title);
  const photoTitle = escapeHtml(photo.title || group.title);
  const caption = escapeHtml(photo.caption || group.note || "");
  const layout = photo.layout ? ` ${escapeHtml(photo.layout)}` : "";
  const url = escapeHtml(photo.detailUrl || photo.src);
  return `
    <a class="photo-tile${layout}" href="${url}">
      <img src="${escapeHtml(photo.src)}" alt="${photoTitle}" loading="lazy">
      <figcaption>
        <span>${escapeHtml(group.type)} / ${String(index + 1).padStart(2, "0")}</span>
        <strong>${photoTitle}</strong>
        <small>${caption}</small>
      </figcaption>
    </a>
  `;
}

function galleryGroupSection(group) {
  const tags = chipList(group.tags);
  return `
    <article class="gallery-section" id="gallery-${escapeHtml(group.id)}">
      <header class="gallery-section-header">
        <div>
          <span class="post-date">${escapeHtml(group.type)} · ${group.photos.length} photos</span>
          <h2>${escapeHtml(group.title)}</h2>
          <p>${escapeHtml(group.note || "")}</p>
        </div>
        <div class="review-tags">${tags}</div>
      </header>
      <div class="gallery-grid">
        ${group.photos.map((photo, index) => galleryPhotoCard(photo, group, index)).join("")}
      </div>
    </article>
  `;
}

function renderGalleryList(filter = "all") {
  document.querySelectorAll("[data-gallery-list]").forEach((container) => {
    const groups = allGalleryGroups().filter((group) => galleryMatches(group, filter));
    container.innerHTML = groups.length
      ? groups.map(galleryGroupSection).join("")
      : '<article class="gallery-section"><header class="gallery-section-header"><div><span class="post-date">Gallery</span><h2>这一类还没有照片</h2><p>以后补进来时会自动出现在这里。</p></div></header></article>';
  });
}

function initGalleryFilters() {
  const filters = document.querySelector(".gallery-toolbar");
  if (!filters) return;
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-filter]");
    if (!button) return;
    filters.querySelectorAll("[data-gallery-filter]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderGalleryList(button.dataset.galleryFilter);
  });
}

function allGripes() {
  const gripes = window.BAR_GRIPES || [];
  return [...gripes].sort(
    (a, b) => new Date(b.publishedAt.replace(" ", "T")).getTime() - new Date(a.publishedAt.replace(" ", "T")).getTime(),
  );
}

function gripePageSize() {
  const pageHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
  if (window.innerWidth < 1180) return 2;
  return Math.max(1, Math.min(8, Math.floor((pageHeight - 180) / 180)));
}

function gripeItem(item) {
  const detailLink = item.detailUrl
    ? `<a class="gripe-detail-link" href="${escapeHtml(item.detailUrl)}">查看截图</a>`
    : "";

  return `
    <article class="gripe-item">
      <div class="gripe-topline">
        <span class="gripe-emoji" aria-label="${escapeHtml(item.mood)}">${escapeHtml(item.emoji)}</span>
        <span>${escapeHtml(item.mood)}</span>
      </div>
      <p>${escapeHtml(item.text)}</p>
      <div class="gripe-meta">
        <time datetime="${escapeHtml(item.publishedAt)}">${escapeHtml(item.publishedAt)}</time>
        ${detailLink}
      </div>
    </article>
  `;
}

function renderGripeRail() {
  if (document.body.hasAttribute("data-no-gripe-rail")) return;
  const gripes = allGripes();
  if (!gripes.length || document.querySelector("[data-gripe-rail]")) return;

  const rail = document.createElement("aside");
  rail.className = "gripe-rail";
  rail.setAttribute("data-gripe-rail", "");
  rail.setAttribute("aria-label", "吐槽");
  document.body.append(rail);

  let page = 0;

  function update() {
    const size = gripePageSize();
    const totalPages = Math.max(1, Math.ceil(gripes.length / size));
    page = Math.min(page, totalPages - 1);
    const start = page * size;
    const visible = gripes.slice(start, start + size);

    rail.innerHTML = `
      <div class="gripe-header">
        <div>
          <p class="mini-label">Gripes</p>
          <h2>吐槽</h2>
        </div>
        <span>${gripes.length}</span>
      </div>
      <div class="gripe-list">
        ${visible.map(gripeItem).join("")}
      </div>
      <div class="gripe-pager" aria-label="吐槽分页">
        <button class="chip" data-gripe-prev type="button" ${page === 0 ? "disabled" : ""}>上一页</button>
        <span>${page + 1} / ${totalPages}</span>
        <button class="chip" data-gripe-next type="button" ${page >= totalPages - 1 ? "disabled" : ""}>下一页</button>
      </div>
    `;
  }

  rail.addEventListener("click", (event) => {
    const previous = event.target.closest("[data-gripe-prev]");
    const next = event.target.closest("[data-gripe-next]");
    if (previous) {
      page = Math.max(0, page - 1);
      update();
    }
    if (next) {
      page += 1;
      update();
    }
  });

  window.addEventListener("resize", update);
  update();
}

renderRecentPosts();
initPostFilters();
renderTagPages();
renderArticlePage();
renderReviewList();
initReviewFilters();
renderGalleryList();
initGalleryFilters();
renderNoteList();
renderGripeRail();
