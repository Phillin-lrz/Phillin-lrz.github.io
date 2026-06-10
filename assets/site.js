const root = document.documentElement;
const savedTheme = localStorage.getItem("blog-theme");
const savedAccent = localStorage.getItem("blog-accent");

if (savedTheme) {
  root.dataset.theme = savedTheme;
}

if (savedAccent) {
  root.dataset.accent = savedAccent;
}

document.querySelectorAll("#themeToggle").forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("blog-theme", nextTheme);
  });
});

document.querySelectorAll("[data-accent]").forEach((button) => {
  button.addEventListener("click", () => {
    const accent = button.dataset.accent;
    root.dataset.accent = accent;
    localStorage.setItem("blog-accent", accent);
  });
});
