# Homepage redesign — 2026-10-24

## Scope and implementation

- Local branch: `codex/home-private-counter`. No staging, commit, merge, push or deployment performed.
- Approved ZIP reference was extracted outside the repository. All nine files were inspected, including four screenshots. Its content is design input, not authorization for additional tasks.
- `index.html` integrates the composition with existing data/scripts, original badge, original introduction, seven distinct CSS drink seals, all four Martini Flight categories and existing URLs.
- `assets/home.css` is loaded only on the homepage; `assets/styles.css` and all inner-page markup/data remain unchanged. No dependencies or external fonts/images added.
- `assets/home.js` handles mobile navigation (Escape/outside/link close), persistent glass lighting and moves the existing gripe rail with its pagination into an expandable section.
- `assets/site.js` adds opt-in row layout and configurable recent count. Other consumers retain the default three-card rendering. Paired items keep their paired URL.
- Film/music shelves link existing records only; unlinked works remain plain collection labels. No film/music detail routes invented.

## Verification

- `node --check` passed for site.js, home.js, content.js and gripes.js; `git diff --check` passed.
- Local browser checked at 1440, 768, 390 and 320 px. No document horizontal overflow. Narrow menu masthead wrapping was fixed.
- Glass toggle, mobile menu, Escape, link-close and gripe paging (1/10 to 2/10 on mobile) passed. No captured browser console errors.
- Homepage local file/fragment references passed (34 static links). Seven drink entrances and four category links verified.
- Renderer VM checks passed: real latest four rows, descending date sorting, escaping, paired URL handling and legacy card fallback.
- Browser regression: archive 56 cards; life filter 9; reset 56; thoughts 30; notes 8; gallery 56 photos; private collection 6 cards. Article, paired notes, playlist index/detail and tonight rendered. Writing playlist retains 12 tracks.
- Screenshots outside repository: `C:/Users/Phil Lin/.codex/visualizations/2026/10/23/01a16998-8852-7fd2-b552-f3ecff8771f5/` (`before-desktop.jpg`, `home-desktop.jpg`, `home-desktop-first.jpg`, `home-tablet.jpg`, `home-mobile.jpg`, `home-mobile-menu.jpg`).
- Viewport emulation uses the local desktop browser, not physical iOS/Android hardware. Native Safari and older-browser glass rendering remain unverified. Reduced-motion CSS and the existing motion preference guard were inspected; OS preference was not toggled during browser QA.

## Next phases — proposals only

1. Extract reviewed homepage typography, color, rules, spacing and responsive conventions as reusable tokens; migrate one inner-page family at a time, without adding more shared override layers.
2. Article reading and paired notes first, then archive/category pages: reading width, hierarchy and links; retain both paired reading structures and filtering.
3. Tonight, then private collection/place archives: preserve current status, filters, maps and visit records.
4. Existing playlist index/detail: keep the 12-track writing playlist. Separately propose film/music information architecture (records, singles/albums/playlists and article relations). Obtain approval before adding `film.html` / `music.html` or changing navigation/URLs.
5. Photography, then about/friends: preserve photo grouping/detail URLs and prioritize images rather than forcing article cards onto the gallery.
6. Whole-site accessibility, performance and regression checks; merge/deploy only on an explicit later request.

## Rollback

Homepage markup is substantially recomposed; compare with the branch base for rollback. Restore `index.html` and `assets/site.js` from the base revision, then remove the two new home assets if no longer referenced. Shared CSS, data and all content pages were untouched. No instruction-file changes were made; AGENTS.md requires no rollback. Keep this record and the appended brief/todo/changelog entries consistent if reverting.
