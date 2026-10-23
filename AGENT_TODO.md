# AGENT_TODO

Last updated: 2026-08-24

Read this file only for planning, phase selection, or an explicit pending-work audit. Completed history belongs in the changelog files.

## Workflow State

- [x] Keep `AGENT_BRIEF.md` as the default low-token state entry.
- [x] Route ordinary tasks through the matching `AGENT_OP_*.md` file.
- [x] Read `AGENT_HANDOFF.md` only for continuation, dirty-worktree recovery, or uncertain/compacted sessions.
- [x] Require user confirmation before reading `AGENT_CONTEXT.md`, `AGENT_CHANGELOG.md`, or `AGENT_CHANGELOG_ARCHIVE.md`.
- [x] Scope `assets/content.js` to its eight actual consumer pages.
- [x] Use asset-specific cache refreshes instead of a site-wide shared version bump.
- [x] Use compact success output and detailed failure output for verification.

## Open Project Decisions

- [ ] Decide whether `article.html` should remain as a compatibility fallback now that published articles are static files.
- [ ] Verify `assets/cocktail-hero.png` and `assets/hero-workspace.png` are unused before deciding whether to remove them.
- [ ] Revisit gripe-rail pagination or on-demand loading if the gripe collection becomes large.
- [ ] Audit footer text and theme-toggle labels only when the user requests a consistency pass.
- [ ] Consider a shared generation workflow for repeated headers/nav/footers only with explicit user approval.
- [ ] Improve empty states on tag pages if the user requests archive polish.
- [ ] Confirm the live GitHub Pages deployment after the next requested push.

## Current Constraints

- Browser visual verification is skipped by project preference unless explicitly requested or required by a higher-priority instruction.
- Do not claim remote deployment success without inspecting the remote result.
- Do not restore removed writer/editor or Word-publication tooling unless the user explicitly requests it.
- Do not read deeper state files without the required user confirmation.

## Planning Entry Point

1. Read `AGENT_BRIEF.md`.
2. Check `git status --short` and `git diff --stat`.
3. Read the operation file matching the requested work.
4. Use this todo only to choose among the open decisions above.

## Homepage follow-up — 2026-10-24

- [x] Integrate and locally verify the approved homepage on `codex/home-private-counter`.
- [ ] User review of homepage; only then choose the next inner-page family from `AGENT_HOME_REDESIGN.md`.
- [ ] Propose film/music record structure separately before creating new routes or changing navigation.
