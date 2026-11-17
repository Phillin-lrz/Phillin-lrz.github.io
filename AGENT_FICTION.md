# Paper Plane / 纸境

Updated: 2026-11-17

## Confirmed scope

- User chose the recommended name 纸境 and explicitly requires a standalone section, alongside 文章. Paper Plane has no parent relationship to Martini / Martini Flight.
- `fiction.html` is the independent section index. Main navigation uses 纸境; the homepage has its own numbered Paper Plane pouring immediately after the article menu and its four subcategories.
- Existing public root-page navigation includes this section after 文章. The article filters and their four subcategories are unchanged.
- The user's 18 designated works have been migrated, including four works retained as two paired collections and three children of the intact Dou collection. Eight other works received directed prose edits and retain their original categories. See AGENT_FICTION_MIGRATION.md.

## Implementation

- `assets/fiction.css?v=bar-fiction-20261117-faceted` is loaded by index.html, fiction.html, the 18 migrated works and two paired collection pages. It contains the shared cold-chrome coupe with defined light/dark facets, restrained amber reflections and no garnish and scoped fiction-page layout. Existing shared CSS, title fonts and motion controls are retained.
- The hero uses a native inline SVG paper plane, silver/ice-blue folds and a small muted warm reflection. The tagline is 从一张纸，去往另一种人生。
- `assets/fiction.js?v=bar-fiction-20261117-zhijing` is loaded only by fiction.html. The authoritative `window.BAR_FICTION` collection lives in content.js, separate from BAR_POSTS / BAR_NOTES and the Martini archive. fiction.html now loads content.js before site.js and fiction.js.
- Future catalogue records require a stable id, title, url and publishedAt (ISO date), with optional form and summary. Forms can be 短篇小说 / 半虚构叙事 / 连载 · 第 N 章 as appropriate to actual works.
- The renderer sorts by publication date descending and reuses collapsePairedNotes / pairedNoteCard from site.js, yielding 16 list entries for 18 works. Ordinary entries use DOM textContent and optional series-directory links. It displays the empty state only when there are no works. site.js's article archive excludes fiction, while homepage recent writing opts into both collections. Legacy article.html?id= links for migrated records redirect to the retained static URL.
- The Dou parent record retains all five ordered groupEntries, each with its own tag. Shared collection cards and the static directory show these individual identities; all original previous/next/directory links are retained.
- Future work-detail pages should show Paper Plane · 纸境 above the title and activate fiction.html in main navigation. Preserve original URLs where possible when migrating, and preserve existing work bodies and cup-bottom endnotes.
- Homepage menu now has eight pourings; existing 02–07 became 03–08. Martini's four subcategories remain intact.

## Manual acceptance and remaining limits

- The user explicitly requested checks for this migration. Three JavaScript syntax checks, git diff --check, nine groups of source/rendering invariants and 34-page HTTP checks passed. The earlier feature-construction turn had no automated acceptance, in accordance with its narrower authorization.
- Browser observation covered the fiction index, both paired pages, Dou directory, thought-filter interaction, homepage and a migrated Dou detail. Fiction rendered 18 works / 16 groups (14 ordinary entries and two paired cards), with no horizontal overflow at the default desktop viewport and no captured browser error logs. No mobile/device-wide acceptance or performance test was performed.
- The previous 8765 preview was not running (ECONNREFUSED). A new localhost-only static server is running in exec session 15525 from the external artifact directory; retain it for the user's manual acceptance.
- User acceptance remains pending for edited prose and mobile/intermediate-width typography and layout. Shared subset font assets were not regenerated.
- No new dependencies, commits, staging, push or deployment. AGENTS.md was not changed.

## Rollback

- Remove the fiction.html anchor from the existing main navigation and remove the homepage's Paper Plane menu row and fiction.css link. Restore the original menu numbers and SEVEN POURINGS footer.
- Remove the three new feature files (fiction.html, assets/fiction.css, assets/fiction.js) if no later content migration depends on them.
- Remove this task's appended entries from AGENT_BRIEF.md, AGENT_HANDOFF.md and AGENT_CHANGELOG.md if rolling back the section entirely. AGENTS.md was not changed.
- Do not revert later user edits or migrated works as part of this rollback.
- To roll back only the migration/editing pass while keeping the initial standalone section, use the pre-task snapshot in the external artifact directory recorded by AGENT_FICTION_MIGRATION.md. Restore only the migration-touched source files; do not use a broad git reset/checkout that would discard the initial navigation/section work.
