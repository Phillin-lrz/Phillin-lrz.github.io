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
const particles = [];
const pointer = { x: 0, y: 0, active: false };
const particleCount = window.matchMedia("(max-width: 640px)").matches ? 42 : 82;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function createParticle() {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.55,
    vy: (Math.random() - 0.5) * 0.55,
    size: Math.random() * 2.2 + 0.8,
  };
}

function resetParticles() {
  particles.length = 0;
  for (let i = 0; i < particleCount; i += 1) {
    particles.push(createParticle());
  }
}

function draw() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
    if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(178, 242, 255, 0.78)";
    ctx.fill();
  });

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const a = particles[i];
      const b = particles[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (distance < 132) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(102, 227, 255, ${0.2 * (1 - distance / 132)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  if (pointer.active) {
    particles.forEach((particle) => {
      const distance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
      if (distance < 180) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(pointer.x, pointer.y);
        ctx.strokeStyle = `rgba(255, 122, 217, ${0.22 * (1 - distance / 180)})`;
        ctx.stroke();
      }
    });
  }

  requestAnimationFrame(draw);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  resetParticles();
});

window.addEventListener("pointermove", (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  pointer.active = true;
});

window.addEventListener("pointerleave", () => {
  pointer.active = false;
});

resizeCanvas();
resetParticles();
draw();
