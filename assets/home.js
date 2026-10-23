/* Homepage controls; content and archives remain owned by site.js/content.js. */
(() => {
  const menu = document.getElementById("mobileNav");
  const nav = document.getElementById("siteNav");
  const narrow = window.matchMedia("(max-width: 1050px)");
  function setMenu(open, restoreFocus = false) {
    nav.classList.toggle("open", open);
    menu.setAttribute("aria-expanded", String(open));
    menu.textContent = open ? "CLOSE ×" : "MENU ＋";
    if (restoreFocus) menu.focus();
  }
  menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") setMenu(false, true);
  });
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menu.contains(event.target)) setMenu(false);
  });
  narrow.addEventListener("change", () => setMenu(false));

  const light = document.getElementById("lightToggle");
  const stage = document.getElementById("stage");
  let glass = true;
  try { glass = localStorage.getItem("bar-home-glass") !== "off"; } catch { /* Storage can be unavailable. */ }
  function syncLight() {
    stage.classList.toggle("dark", !glass);
    light.setAttribute("aria-pressed", String(glass));
    light.textContent = glass ? "✧" : "◌";
  }
  light.addEventListener("click", () => {
    glass = !glass;
    syncLight();
    try { localStorage.setItem("bar-home-glass", glass ? "on" : "off"); } catch { /* Keep the control usable. */ }
  });
  syncLight();

  // Move the existing rail, including its pagination handlers, without duplicating data.
  const rail = document.querySelector("[data-gripe-rail]");
  const destination = document.querySelector("[data-home-gripes]");
  if (rail && destination) destination.append(rail);

  // Finite entrance/reveal feedback. No canvas, pointer tracking or animation loop.
  const activeAnimations = new Set();
  const revealTargets = [...document.querySelectorAll(".hp-menu-paper, .hp-writing-row, .hp-shelf, .hp-gripes")];
  let observer;
  function enabled() { return document.documentElement.dataset.motion === "on"; }
  function animate(element, frames, options) {
    if (!element || !enabled() || !element.animate) return;
    const animation = element.animate(frames, options);
    activeAnimations.add(animation);
    animation.finished.catch(() => {}).finally(() => activeAnimations.delete(animation));
  }
  function configureMotion() {
    observer?.disconnect();
    activeAnimations.forEach((animation) => animation.cancel());
    activeAnimations.clear();
    revealTargets.forEach((element) => element.classList.remove("motion-reveal", "is-visible"));
    if (!enabled()) return;
    document.querySelectorAll(".hp-h1-first, .hp-h1-last").forEach((line, index) => {
      animate(line, [{ opacity: 0, transform: "translate3d(0,18px,0)" }, { opacity: 1, transform: "translate3d(0,0,0)" }],
        { duration: 900, delay: index * 150, easing: "cubic-bezier(.2,.7,.2,1)", fill: "backwards" });
    });
    if (!stage.classList.contains("dark")) animate(stage.querySelector(".hp-light-panel"),
      [{ opacity: 0, transform: "translate3d(28px,0,0) skewX(-8deg)" }, { opacity: 1, transform: "translate3d(0,0,0) skewX(-8deg)" }],
      { duration: 1200, easing: "cubic-bezier(.2,.7,.2,1)" });
    if (!("IntersectionObserver" in window)) return;
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: .07, rootMargin: "0px 0px -24px 0px" });
    revealTargets.forEach((element) => {
      element.classList.add("motion-reveal");
      observer.observe(element);
    });
  }
  window.addEventListener("bar-motion-change", configureMotion);
  configureMotion();
  document.querySelector(".hp-menu-list").addEventListener("pointerdown", (event) => {
    const item = event.target.closest(".hp-menu-item");
    if (!item) return;
    animate(item.querySelector(".hp-seal"),
      [{ transform: "scale(1)" }, { transform: "scale(.9) rotate(-5deg)", offset: .45 }, { transform: "scale(1)" }],
      { duration: 260, easing: "ease-out" });
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) activeAnimations.forEach((animation) => animation.cancel());
  });
})();
