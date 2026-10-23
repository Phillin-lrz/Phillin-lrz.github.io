# AGENT_HANDOFF

Last updated: 2026-09-14

Use this file only for unfinished-work continuity, dirty-worktree recovery, or compacted/uncertain sessions. Completed history belongs in `AGENT_CHANGELOG.md` and `AGENT_CHANGELOG_ARCHIVE.md`.

## Current Handoff State

- `Phil Lin的Bar` is a static GitHub Pages site with root HTML pages and shared files under `assets/`.
- The workload/cell-room gripe is committed locally as `6189616`, with deployment state in `97537a7`.
- A new screenshot-backed gripe about a lighter experiment schedule and being roasted is committed locally as `ef8dc28`.
- No content-publication task is unfinished. The user explicitly requested local-only deployment, so the pending commits must not be pushed to `origin` unless they later ask.
- The durable project rule now makes every website change local-file-only by default; do not stage, commit, push, authenticate, or check remote deployment state unless the user explicitly requests that exact Git/remote operation.

## Current Cache Policy

- Cache versions are asset-scoped; do not refresh every asset when only one changes.
- Shared CSS and `assets/site.js` use `bar-art-20260914-paired-notes`; the badge retains `bar-art-20260824-ten-pm`.
- `assets/gripes.js` uses `bar-gripe-20260902-five-hour-reset` on all 122 current HTML consumers.
- `assets/content.js` uses `bar-content-20260914-paired-thoughts` on exactly eight consumer pages:
  - `article.html`
  - `index.html`
  - `notes.html`
  - `posts.html`
  - `reviews.html`
  - `tag-lab.html`
  - `tag-recommendations.html`
  - `tag-thoughts.html`
- Static article, note, place, gallery, playlist, gripe-detail, and gallery-detail pages do not need `assets/content.js` unless a documented `BAR_*` rendering hook is added.
- Paired notes use two `BAR_POSTS` records tagged `一些思绪`, with shared `pairId`, `pairSide`, and `pairUrl` fields; list renderers collapse them into one paired card while the individual URLs remain shareable.
- `assets/gripes.js` remains global because `assets/site.js` may inject the gripe rail on any public page.

## Current Verification Policy

- Baseline checks are `git status --short`, `git diff --stat`, and `git diff --check`.
- Inspect semantic files with targeted diffs.
- For more than 400 changed lines, audit bulk mechanical edits with deterministic counts and changed-line allowlists; print only unexpected lines or failing hunks.
- Run `node --check` only for relevant JavaScript files.
- DOCX source-to-HTML checks should return title, counts, and mismatches rather than repeated full extraction output.
- Browser visual verification remains skipped by project preference unless explicitly requested or required by a higher-priority instruction.

## Known Risks

- Visual layout is not browser-verified by default.
- Local `main` is two commits ahead of the locally tracked `origin/main`; these two commits remain local by explicit user request.
- Some old state text may contain inherited mojibake; do not perform broad encoding cleanup without a separate request.

## Next Safe Step

For later ordinary publishing, start from `AGENT_BRIEF.md` and the matching operation file, edit and verify local files only, and stop. Do not perform Git writes or remote operations unless the user explicitly requests the exact operation.

## Current redesign handoff — 2026-10-24 (supersedes historical visual/cache state above)

- User confirmed the homepage direction and authorized phase-2 interior redesign on `codex/home-private-counter`. Local implementation and verification are complete; review is pending. No commit, merge, push or deployment is authorized by this task.
- Read `AGENT_INTERIOR_REDESIGN.md` for implementation, responsive/function checks, screenshots and phase-2 rollback. Phase-1 records remain in AGENT_HOME_REDESIGN.md.
- Shared assets now use CSS `bar-design-20261024` and site.js `bar-site-20261024-interiors` on 138 HTML pages. home.css uses `bar-home-20261024-refine`; content, gripe, gallery and badge versions are unchanged.
- Shared CSS uses explicit legacy/design layers; add future visual edits to the existing page-family rules in interior.css. Keep content bodies, paired-note structures, 12 writing tracks and gallery/place data intact.
- Film/music archive proposals and any route changes remain future scope. Do not read deeper state files without the existing confirmation gate.

## Signature/motion handoff — 2026-10-24

- Homepage signature and finite motion changes are ready for user testing. Read AGENT_SIGNATURE_MOTION.md for implementation and rollback. Reference image was not available; exact image alignment remains unconfirmed.
- User canceled recordings and all further automatic acceptance workflows. Follow the new AGENTS.md manual-acceptance override. No further checks were run after cancellation.
- Local preview remains http://127.0.0.1:8765/index.html (exec session 70541); preserve it for manual testing. Work remains local on codex/home-private-counter.

## Title typography handoff — 2026-10-24

- Reference image is now available and was used for title lettering only. Current title font implementation and limited rendering observations are in AGENT_TITLE_FONTS.md. No other visual redesign or motion change was made.
- Homepage uses the Oooh Baby subset and existing Noto Serif 的. Inner primary titles use Noto Sans SC ExtraLight 200. Licenses are bundled under assets/fonts/; CSS cache token is bar-title-fonts-20261024.
- Keep normal acceptance testing manual. The user's current request permitted actual title-rendering inspection only. Preview remains http://127.0.0.1:8765/index.html (session 23862).

## Handwritten-title / cool-metal handoff — 2026-10-24

- Local typography/palette task is implemented on codex/home-private-counter. AGENT_TITLE_METAL.md records the exact scope and rollback; assets/fonts/README.md records the OFL fonts and title subset maintenance. This supersedes the prior inner Noto Sans title selection, while the homepage font and two-line arrangement remain frozen.
- Added self-hosted Yozai Light Chinese plus Oooh Baby Latin for visual primary titles only. Recolored existing CSS seals and 18 SVG labels to cool metal; shared text hierarchy is gray-white/blue-gray, retaining wine and rose accents. Body/nav/subheading/button fonts, page structure, content/data and animation logic are unchanged. CSS/SVG version: bar-cool-hand-20261024.
- The user explicitly requested actual browser font comparisons. Compared five legal fonts and inspected Tonight, a long mixed article title on desktop/390px, and the homepage. No broad acceptance, test commands, syntax checks, diff checks or performance workflows were performed. Manual acceptance remains the user's; future new glyphs can require rebuilding the small title subset.
- Existing local preview http://127.0.0.1:8765/index.html remains running (session 23862); leave it available. No Git write or remote operation authorized.

## Final polish handoff — 2026-10-24

- Current local implementation: WenKai Lite Light visual primary titles, precise shared drink-portrait alignment, refined original CSS/SVG labels. Cache token bar-final-type-20261024. Read AGENT_FINAL_POLISH.md for exact scope and rollback; assets/fonts/README.md reflects current fonts.
- Final user decision: keep the existing formal homepage 的 and the current implementation; A/B/C will not be applied. No title-font selection remains pending. The comparison crops are historical references only.
- User explicitly requested this task's browser comparisons and desktop/tablet/mobile title/label checks. 17 representative routes x 3 viewports showed no primary-title horizontal overflow and canvas/text-center error below .004px. No unrelated automatic tests, syntax/diff checks, video or hardware benchmark. General acceptance remains manual.
- All temporary comparison HTML/font copies were moved outside the site. Preserve http://127.0.0.1:8765/index.html for manual testing; no commit, push, merge or deployment.
