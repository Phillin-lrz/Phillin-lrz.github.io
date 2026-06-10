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
