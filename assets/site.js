const root = document.documentElement;
const savedParticles = localStorage.getItem("blog-particles");

if (savedParticles) {
  root.dataset.particles = savedParticles;
}

document.querySelectorAll("#themeToggle").forEach((button) => {
  button.addEventListener("click", () => {
    const next = root.dataset.particles === "off" ? "on" : "off";
    root.dataset.particles = next;
    localStorage.setItem("blog-particles", next);
  });
});

document.querySelectorAll("[data-accent]").forEach((button) => {
  button.addEventListener("click", () => {
    const accent = button.dataset.accent;
    root.dataset.accent = accent;
    localStorage.setItem("blog-accent", accent);
  });
});

const canvas = document.createElement("canvas");
canvas.id = "particleCanvas";
canvas.setAttribute("aria-hidden", "true");
document.body.prepend(canvas);

const ctx = canvas.getContext("2d");
const pointer = { x: 0, y: 0, active: false };
let barNodes = [];
let startTime = performance.now();

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
  const time = performance.now() - startTime;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  drawGarnishes(time);
  drawConstellationLines(time);
  barNodes.forEach((node) => drawNode(node, time));
  drawPointerConnections();
  requestAnimationFrame(draw);
}

window.addEventListener("resize", resizeCanvas);

window.addEventListener("pointermove", (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.active = true;
});

window.addEventListener("pointerleave", () => {
  pointer.active = false;
});

resizeCanvas();
draw();

const WRITER_SESSION_KEY = "bar-writer-authenticated";
const WRITER_PASSWORD = "ChunkingExpress940714:";

function allPosts() {
  const builtInPosts = window.BAR_POSTS || [];
  return [...builtInPosts].sort(
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
  const title = escapeHtml(post.title);
  const summary = escapeHtml(post.summary || "尚未填写简介。");
  const tag = escapeHtml(post.tag);
  const date = escapeHtml(post.publishedAt);
  return `
    <a class="post-card" href="${postUrl(post)}">
      <span class="post-date">发布时间：${date} · ${tag}</span>
      <${heading}>${title}</${heading}>
      <p>${summary}</p>
      <span class="read-more">阅读全文</span>
    </a>
  `;
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
    ? posts.map((post, index) => postCard({ ...post }, index === 0 ? "h2" : "h3")).join("")
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
      ? posts.map((post, index) => postCard(post, index === 0 ? "h2" : "h3")).join("")
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
  const content = page.querySelector("[data-article-content]");
  const tagRow = page.querySelector("[data-article-tag-row]");

  if (!post) {
    title.textContent = "文章没有找到";
    tag.textContent = "Not Found";
    meta.textContent = "发布时间：未知";
    content.innerHTML = "<p>这篇文章还没有写入 assets/content.js，或者对应的文章 id 已经变更。</p>";
    tagRow.innerHTML = "<span>未知</span>";
    return;
  }

  document.title = `${post.title} | Phil Lin的Bar`;
  title.textContent = post.title;
  tag.textContent = post.tag;
  meta.textContent = `发布时间：${post.publishedAt} · 标签：${post.tag}`;
  content.innerHTML = post.content || `<p>${escapeHtml(post.summary || "")}</p>`;
  tagRow.innerHTML = `<span>${escapeHtml(post.tag)}</span>`;
}

function summarizeContent(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  const text = temp.textContent.trim();
  return text.length > 72 ? `${text.slice(0, 72)}...` : text || "尚未填写简介。";
}

function slugifyTitle(title) {
  const basic = title.trim().toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-").replace(/^-|-$/g, "");
  return `${basic || "post"}-${Date.now().toString(36)}`;
}

function escapeTemplateLiteral(value) {
  return String(value)
    .replaceAll("\\", "\\\\")
    .replaceAll("`", "\\`")
    .replaceAll("${", "\\${");
}

function buildContentJsEntry(post) {
  return `{
    id: ${JSON.stringify(post.id)},
    title: ${JSON.stringify(post.title)},
    tag: ${JSON.stringify(post.tag)},
    publishedAt: ${JSON.stringify(post.publishedAt)},
    summary: ${JSON.stringify(post.summary)},
    url: ${JSON.stringify(post.url)},
    content: \`${escapeTemplateLiteral(post.content)}\`,
  },`;
}

function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function initAuthForm() {
  const form = document.querySelector("[data-auth-form]");
  if (!form) return;
  const message = form.querySelector("[data-auth-message]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const password = new FormData(form).get("password");
    if (password === WRITER_PASSWORD) {
      sessionStorage.setItem(WRITER_SESSION_KEY, "true");
      window.location.href = "editor.html";
      return;
    }
    message.textContent = "密码不正确。";
  });
}

function setDefaultPublishTime(form) {
  const input = form.elements.publishedAt;
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  input.value = now.toISOString().slice(0, 16);
}

function initEditor() {
  const page = document.querySelector("[data-editor-page]");
  if (!page) return;
  if (sessionStorage.getItem(WRITER_SESSION_KEY) !== "true") {
    window.location.href = "write.html";
    return;
  }

  const form = page.querySelector("[data-editor-form]");
  const editor = page.querySelector("[data-rich-editor]");
  const message = page.querySelector("[data-editor-message]");
  setDefaultPublishTime(form);

  page.querySelectorAll("[data-command]").forEach((button) => {
    button.addEventListener("click", () => {
      editor.focus();
      document.execCommand(button.dataset.command, false, null);
    });
  });

  page.querySelector("[data-font-name]").addEventListener("change", (event) => {
    editor.focus();
    document.execCommand("fontName", false, event.target.value);
  });

  page.querySelector("[data-font-size]").addEventListener("change", (event) => {
    editor.focus();
    document.execCommand("fontSize", false, event.target.value);
  });

  page.querySelector("[data-image-input]").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      editor.focus();
      document.execCommand("insertImage", false, reader.result);
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  });

  function collectPost() {
    const data = new FormData(form);
    const title = String(data.get("title") || "").trim();
    const publishValue = String(data.get("publishedAt") || "");
    const content = editor.innerHTML.trim();
    if (!title || !publishValue || !content) {
      message.textContent = "标题、发布时间和内容都需要填写。";
      return null;
    }
    const id = slugifyTitle(title);
    return {
      id,
      title,
      tag: String(data.get("tag")),
      publishedAt: publishValue.slice(0, 10),
      summary: summarizeContent(content),
      url: `article.html?id=${id}`,
      content,
    };
  }

  page.querySelector("[data-publish-now]").addEventListener("click", () => {
    const post = collectPost();
    if (!post) return;
    const code = buildContentJsEntry(post);
    downloadTextFile(`${post.id}.txt`, code);
    message.textContent = "已下载 txt。把里面的对象复制到 assets/content.js 的 BAR_POSTS 数组里即可上线。";
  });
}

renderRecentPosts();
initPostFilters();
renderTagPages();
renderArticlePage();
initAuthForm();
initEditor();
