# Interior redesign — 2026-10-24

## Current scope

- Continue `codex/home-private-counter`; phase 1 homepage direction was confirmed by the user. Local files only, no staging/commit/merge/push/deployment.
- Removed the homepage “翻开酒单” action and adjusted the existing action/lyric spacing in place. The header menu anchor, seven CSS seals, four Martini categories and dynamic latest posts remain.
- `assets/interior.css` owns shared `--bar-*` tokens and page-family design rules. `styles.css` declares explicit `legacy, design` cascade layers and imports that file. The entire former stylesheet remains byte-for-byte inside the legacy layer to retain structural and detailed drink-label compatibility. Future design changes belong in the appropriate family in interior.css rather than further overrides in legacy.
- Home colors now reference shared tokens. Old interior SVG drink-label assets remain; no images, fonts, dependencies or content records were added.
- Reading pages use a calm serif measure and restrained metadata; archives use ruled entries; paired notes keep two sides and their reading rhythm. Tonight uses open notebook sections; private collection uses full-width dossiers and visit receipts; music uses a CSS record sleeve plus its existing track ledger; photography preserves original images and removes grading and extra decoration. About/friends/categories use the same type/color system with their own structures.
- Shared site.js initializes accessible mobile navigation, Escape/outside/link closing and skip links. Non-reading pages retain the original gripe rail and pagination inside a collapsible footer section. Reading pages keep the existing suppressed rail behavior.
- 138 root HTML consumers refresh only shared CSS/site.js cache versions. Except index.html's requested button removal and home.css version, their source changes are exclusively those asset URLs. No navigation route changes or film/music pages were introduced.

## Verification and fixes

- Syntax checks: site.js, home.js, content.js, gripes.js and gallery.js passed. `git diff --check` passed.
- Deterministic comparison against the start-of-phase snapshot: 138 HTML pages matched the allowlisted changes; content.js, gripes.js and gallery.js unchanged; legacy stylesheet preserved; no new missing local references; all 12 writing tracks retained.
- Local browser checked 14 representative pages at desktop 1440, tablet 768, mobile 390 and narrow mobile 320 widths. Document overflow and text-width checks passed. The final mobile header is a single 65px row.
- Fixed: overlapping paired cover titles; legacy implicit grid column collapsing alternating private-place cards; legacy mobile header direction/absolute icon; vertical filter controls. All six private-place cards were individually checked at desktop width after the grid fix.
- Functional browser tests: archive 56 → life 9 → reset 56; private collection all 6 → bars 2 → reset 6; gallery all 56 → bars 41 → reset 56; photo detail loaded with natural image width 952; writing playlist 12 tracks; paired Side B anchor navigation; mobile menu navigation/Escape; gripe pagination to 2/10; homepage 7 drink links, 4 variants, 4 recent rows and no removed button. No captured console errors.
- Key screenshots and JSON QA data: `C:/Users/Phil Lin/.codex/visualizations/2026/10/23/01a16998-8852-7fd2-b552-f3ecff8771f5/phase2-*` (desktop article, paired notes, tonight, private collection, playlist, photography and homepage; mobile examples and tablet examples).
- Browser testing is viewport emulation on the local desktop engine, not physical mobile hardware. Native Safari/older engines were not tested. Cascade layers require modern browsers. Reduced-motion rules and existing motion guard remain; the OS setting was not changed during testing.

## Rollback and next step

- This is a broad visual change. Phase-2 baseline copies of all affected source files are outside the repository at `.../phase2-baseline/` in the screenshot directory. Restore those copies and remove interior.css to return to the confirmed phase-1 design without discarding phase-1 work. Keep state records consistent when reverting.
- AGENTS.md and operation instructions were not changed; no instruction-file rollback is needed.
- Await user review. Film/music archive structure, URL changes, legacy stylesheet deletion/consolidation, merge and deployment are separate future scope. No remote state was inspected.
