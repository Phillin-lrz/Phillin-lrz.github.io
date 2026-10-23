# Final typography, label and alignment polish — 2026-10-24

## Current state and authorized boundary

- Local-only `codex/home-private-counter`; no stage, commit, merge, push or deployment.
- Used AGENTS.md and its manual-acceptance override. Recovery reads: AGENT_BRIEF.md, AGENT_OP_PAGE_VISUAL.md, relevant handoff tail, AGENT_TITLE_METAL.md; inspected targeted source/diffs. No gated context or old changelog history was read. AGENTS.md was not edited in this request, so no instruction rollback is needed.
- User explicitly requested actual font comparisons, three homepage glyph screenshots, and desktop/tablet/mobile title/label inspection. That targeted work was performed. No unrelated test suite, JavaScript syntax check, git diff --check, recording or hardware performance benchmark was run.

## Homepage 的 — user confirmed keeping the current glyph

- Production index.html still uses its original Noto Serif SC 的. All homepage wordmark font rules, English faces/files, colors, sizes, spacing, two lines, alignment, position and surrounding whitespace remain unchanged.
- A: ChenYuluoyan 2.0 Thin, fine pen handwriting, .36em to keep the fine ink readable; one-glyph WOFF2 3,256 bytes. B: Noto Sans SC ExtraLight 200, restrained modern transition, .30em, 960 bytes. C: WenKai Lite Light, mature writing rhythm, .30em, 1,204 bytes. All use OFL 1.1; original licenses are saved beside the external specimens, with derivative names renamed to avoid RFNs. C was recommended during comparison. The user subsequently confirmed keeping the current glyph; **do not apply A/B/C. No selection is pending**.
- Each specimen was a copy of the actual homepage with a local-only font override and A/B/C marker. It measured and locked 的's original advance width before switching the glyph. At 1280px, both original English boxes stayed identical: Phil Lin x76.796875/y300/w359.7734375/h110.59375; Bar x119.421875/y410.59375/w169.578125/h110.59375. English computed font size 115.2px, weight 400, family Bar Signature and colors stayed identical.
- WOFF2 is a W3C standard implemented by all major browsers (https://www.w3.org/TR/WOFF2/); fonts are self-hosted subsets and need no OS-installed font. Browser viewport inspection is not physical macOS/iOS/Android testing.
- One external font download request containing the local title character set was rejected by automatic approval review. No local title data was transmitted by that rejected action. The safe replacement downloaded the public full Noto Serif source and performed all subsetting locally. No blocker remains.

## Implemented title and label refinements

- `assets/interior.css`: Chinese visual primary titles switch from Yozai Light to WenKai Lite Light after actual Tonight and mixed long-article comparison against Noto Serif SC ExtraLight 200. WenKai was chosen for mature, restrained pen movement without cartoon roundness. Latin primary titles retain the existing Oooh Baby title asset. Composite family Bar Title Editorial; current page-title subset 428 characters, 97,800 bytes; combined with unchanged Latin face 117,188 bytes. OFL notice and current usage are in assets/fonts/README.md and OFL-WenKai-Lite.txt. Body, nav, buttons, metadata, subheading fonts remain unchanged; paired-cover small kicker remains unchanged.
- Existing primary-title positions/margins/regions stay in place. Tracking is .015em, with balanced wrapping. Article titles retain 1.4 line height; narrow article font size becomes clamp(33px,8.8vw,38px). The Fruit Fly H1 contains only inline title-phrase spans around existing words to prevent awkward breaks; visible text is identical. No article body/content changed.
- `assets/home.css`: refine the existing seven CSS vessels within their unchanged containers. Martini gains a hollow line-cut bowl and fine liquid line; Gimlet rim/liquid line is cleaner; rocks/Sazerac meniscus and edge reflection are restrained; French 75 flute/stem/base join is corrected; Collins liquid/rim layers are lighter. Last Word retains its distinctive coupe/garnish. Seal material is simplified, preserving the existing cold palette. No menu order, dimensions, layout or motion rules changed.
- All 18 retained `assets/drink-labels/*.svg`: preserve their distinct silhouettes, names, garnishes, plates and URLs; remove noise/displacement/glow filters, normalize heavy garnish strokes, refine clean body strokes, align reflections to each existing cup geometry and add faint liquid lips. Glass/liquid fills are lighter. The active legacy label drop-shadow is removed in assets/styles.css. No image, photograph or AI asset was added.
- Shared/home CSS, imported interior CSS and SVG cache query: bar-final-type-20261024. All 138 public HTML files refresh only stylesheet URLs, except the title-only inline wrapping in article-fruit-fly-20260713.html. A source comparison against this task's snapshot found no other HTML differences. Script/data assets were not edited.

## Shared alignment fix and requested observations

- Root cause: .drink-glyph's 58px grid inherited an approximately 83px intrinsic child. Its implicit track overflowed the grid; scaling the child to .60 preserved a roughly 12.598px visual canvas displacement in both axes. The parent align-items:center alone could not fix it.
- Fix: set the shared grid tracks to minmax(0,1fr), size the actual inner canvas to the existing ~50px render size (3.12rem), and remove its scale. Retain the outer 58px glyph, parent 86.398px minimum height, 16px/12px gaps, margins and page positions. Define the caption line height and add a common 2px start padding (one-pixel optical ink adjustment) for Latin capitals/CJK. There are no per-drink top/margin/translate patches.
- Browser DOM observations: 17 representative routes at 1280x900, 820x1180 and 390x844, 51 views total; no primary-title horizontal overflow. Maximum actual canvas/text-container center difference 0.00390625px; all measured parent heights remained 86.3984375px. Includes all main sections, three article categories, notes, article reading, paired cover, place, playlist detail, photo detail and gripe detail.
- Visually inspected representative Tonight, article and actual-size label sheets. All 18 vector components were rendered at their real size on desktop/mobile, with a tablet sheet saved. Homepage seven CSS seal/cocktail line boxes have zero center delta, with unchanged 39px desktop / 32px mobile seal dimensions. The hollow Martini clipping was observed as supported in Chromium.
- Final acceptance remains the user's. Physical OS/device rasterization and hardware performance were not measured. Future new title glyphs may require subset refresh. Existing local preview http://127.0.0.1:8765/index.html remains available; it was not restarted/stopped. Viewport override was reset.

## Artifacts and rollback

External folder: `C:/Users/Phil Lin/.codex/visualizations/2026/10/23/01a16998-8852-7fd2-b552-f3ecff8771f5/`.

- Requested marked real-homepage crops: home-de-A.png, home-de-B.png, home-de-C.png.
- Inner font comparisons: inner-title-compare-A.png / B.png, inner-title-long-A.png / B.png.
- Final screenshots: final-tonight-desktop.png, final-tonight-tablet.png, final-tonight-mobile.png, final-article-mobile.png, final-home-desktop.png, final-home-mobile.png, final-labels-desktop.png, final-labels-tablet.png, final-labels-mobile.png. Numeric observations: final-polish-render-observations.json. Before alignment: final-polish-alignment-before.jpg.
- Temporary specimen pages and preview font copies were moved to final-polish-specimens/ outside the website. Candidate WOFF2 files and build source remain in final-polish-fonts/; build helpers and original downloaded fonts are external. No preview pages or preview font files remain among production routes/assets.
- Revert only this request using final-polish-baseline/: restore home.css/interior.css/styles.css, drink-labels/, saved public HTML files and fonts README (snapshot README.md). Remove title-editorial-light.woff2 and OFL-WenKai-Lite.txt only after reverting their references. Preserve prior uncommitted redesign work. No instruction-file rollback is necessary.

## Final user decision

The user said to keep the current version and not replace 的. This round is closed. Only handoff/font documentation was updated for this decision; website code, preview and branch remain unchanged. No verification or Git publication was requested or performed.
