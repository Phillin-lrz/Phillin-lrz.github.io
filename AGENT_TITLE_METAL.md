# Primary titles and cool-metal refinement — 2026-10-24

## Scope and state

- Local branch remains `codex/home-private-counter`. This task makes no commit, staging, merge, push or deployment.
- Followed AGENTS.md and its manual-acceptance override. Read AGENT_BRIEF.md, AGENT_OP_PAGE_VISUAL.md, the relevant tail of AGENT_HANDOFF.md and AGENT_TITLE_FONTS.md for recovery. No gated context/changelog history was read. AGENTS.md was not changed and needs no rollback.
- This record supersedes AGENT_TITLE_FONTS.md's inner-title selection only. The homepage's Oooh Baby font, original font asset, two-line markup, sizes, weight, spacing and position remain unchanged; its text colors follow this task's authorized palette.

## Implementation

- `assets/interior.css`: page-level visual H1s use a composite Bar Title Hand face: Yozai Light Chinese with Oooh Baby Latin. The paired cover's visual primary work names also use it; its small H1 kicker and all normal H2/subheadings keep their original fonts. Long article titles have a lower desktop maximum size and 1.4 line height, balanced wrapping and overflow wrapping. All titles remain selectable HTML text.
- `assets/fonts/`: self-hosted WOFF2 files `title-handwritten-yozai.woff2` (99,428 bytes), `title-signature-latin.woff2` (19,388 bytes), `OFL-Yozai.txt`, updated README with official sources and licenses. Chinese subset includes 428 current title/metadata/ASCII characters; the official source supports all of them. Internal derivative names avoid the reserved font names. FontTools/Brotli were installed only in the external work folder for asset preparation; no site runtime dependency was added.
- Shared palette: background #0B1118; primary #E5E8E5; secondary #AEBCC2; reading #D4DCDD; quiet #91A4AC; metal #BDC9CA; ice #8BAFBC; rose #A3949E. Existing wine tone is retained. Existing brass selectors alias the metal token instead of adding new override layers. Legacy hardcoded text accents were routed to the shared roles where necessary.
- `assets/home.css`: only text colors and existing independent CSS seal/vessel colors, edge reflections and hover colors changed. Existing vessel shapes, dimensions, layout and animation behavior are retained. The accessible skip link retains dark text on a pale surface.
- All 18 existing `assets/drink-labels/*.svg`: preserve names, paths and distinct illustrations; retune the warm metal into cool silver, mute liquid colors, reduce decorative noise/glow and slightly refine the heavier strokes. These are retained code-native vector assets, not new photographic or AI imagery. `assets/styles.css` removes the active warm label glow and refreshes the SVG URLs.
- Shared/home stylesheet versions and imported design CSS now use `bar-cool-hand-20261024`. All 138 public HTML consumers refresh only the applicable CSS URLs; index.html also routes one existing inline text color to the palette. Content, navigation, layout markup, animations, links, scripts and data were not modified.

## Requested browser comparison and limits

- Compared actual local browser renders of Long Cang, Zhi Mang Xing, LXGW WenKai Light, ChenYuluoyan Thin and Yozai Light next to the homepage signature. Selected Yozai Light for its thin, relaxed pen strokes and simplified-title coverage. Long Cang/Zhi Mang Xing showed stronger brush weight, WenKai was more formal, and ChenYuluoyan visibly mixed with fallback because 70 current subset characters were missing.
- Looked at the resulting Tonight title, the mixed Chinese/English Fruit Fly article title on desktop and a 390x844 viewport, and the homepage's retained signature with cool-metal seals. The article H1 computed as Bar Title Hand, desktop 52.48px with 73.472px line height, width 740px, two lines and no horizontal overflow. Mobile rendering showed three readable lines without clipping. This is targeted typography observation explicitly requested by the user, not full-site acceptance.
- No automated tests, syntax checks, git diff --check, performance checks, recordings or general acceptance workflows were run. Physical Windows/macOS/iOS/Android coverage and final subjective acceptance remain the user's. New title characters may need refreshing the subset. Local preview remains running at http://127.0.0.1:8765/index.html (existing session 23862); it was not restarted or stopped. Temporary viewport override was reset.
- Source diffs were read to keep edits within scope. One unintended low-contrast skip-link text color found during source inspection was corrected before handoff.

## Artifacts and rollback

- External work folder: `C:/Users/Phil Lin/.codex/visualizations/2026/10/23/01a16998-8852-7fd2-b552-f3ecff8771f5/`.
- `title-font-compare-brush.jpg`, `title-font-compare-light.jpg`, `title-font-compare-final.jpg`; final `cool-hand-tonight.jpg`, `cool-hand-article-desktop.jpg`, `cool-hand-article-mobile.jpg`, `cool-hand-home.jpg`.
- Temporary specimen HTML and rejected font candidates were moved into external `title-font-candidates/`, outside the website. Original downloaded font files and build helpers also stay outside the repo.
- Baseline sources are under external `title-metal-baseline/`: home.css, interior.css, styles.css, fonts README (saved as README.md), all 138 public HTML files and the drink-labels directory. Restore only these files and their corresponding asset URL versions to revert this follow-up; remove the new font files/license only after removing references. Preserve all earlier uncommitted redesign work. No instruction-file rollback is needed.
