# Codex project instructions

## User override — manual acceptance only (2026-10-24)

The user performs acceptance testing. This rule supersedes automatic verification requirements elsewhere in this file and the operation/state files.

- Do not automatically run tests, syntax checks, `git diff --check`, browser checks, screenshots, recordings, performance checks, or other acceptance workflows unless the user explicitly requests them for the current task.
- Source inspection and Git status/diff reads needed to understand or safely edit existing work are still allowed; they are not an acceptance phase.
- Complete authorized code changes and hand them over for the user's manual testing. Do not describe unperformed checks as passed.
- Preserve a running local preview when the user is using it to test. Do not merge, publish, or deploy without explicit authorization.

This repository is a static GitHub Pages website for `Phil Lin的Bar`.

Use this file as the primary Codex project-level instruction entry. Keep business documentation in `README.md`; keep durable agent state in the `AGENT_*.md` files.

## Codex context preservation rules

This project uses repository-level state files to prevent loss of important information during long Codex sessions, automatic context compaction, summarization, or truncated conversation history.

### Communication rule

Codex must not send optional commentary. Only send user-facing messages when they are necessary for clarification, blocker reporting, or final completion.

Before starting non-trivial work, Codex must read `AGENT_BRIEF.md` as the low-token state entry. Read `AGENT_HANDOFF.md` only when continuing unfinished work, recovering a compacted/uncertain session, or investigating a dirty worktree. Read `AGENT_TODO.md` only for planning, phase selection, or an explicit pending-work audit.

Codex must treat these files as durable project memory while avoiding repeated reads within the same uncompacted task. Chat history alone is not a reliable source of truth.

After reading the low-token state entry, Codex must choose the matching operation file(s) and read only those operation files before task-specific source files:

- `AGENT_OP_CONTENT_PUBLISH.md`
- `AGENT_OP_PLAYLISTS.md`
- `AGENT_OP_PLACES.md`
- `AGENT_OP_PAGE_VISUAL.md`
- `AGENT_OP_FRONTEND_LOGIC.md`
- `AGENT_OP_DEPLOY_GIT.md`
- `AGENT_OP_PROJECT_STATE.md`
- `AGENT_OP_RECOVERY_AUDIT.md`

Operation files are routing files for reducing token use. They must not be used as broad permission to read deeper history.

Read deeper state files only when the chosen operation file allows it and the user has confirmed the read:

- Read `AGENT_CONTEXT.md` for multi-file structural work, architecture questions, uncertain project rules, or work that may affect older decisions.
- Read `AGENT_CHANGELOG.md` for recent change history, rollback notes, or regression checks.
- Read `AGENT_CHANGELOG_ARCHIVE.md` only for older history, detailed audits, old regressions, or rollback beyond the current changelog.

Before reading `AGENT_CONTEXT.md`, `AGENT_CHANGELOG.md`, or `AGENT_CHANGELOG_ARCHIVE.md`, Codex must ask the user for confirmation and state the exact file and reason. If the user explicitly asks to inspect one of those files, that counts as confirmation for that file only.

### Startup procedure for new Codex sessions

At the beginning of a new session, before modifying code, Codex must:

1. Read this project instruction file.
2. Read `AGENT_BRIEF.md`.
3. Check `git status --short` and `git diff --stat`.
4. Choose and read the matching `AGENT_OP_*.md` file(s).
5. Read `AGENT_HANDOFF.md` only when the worktree is dirty, prior work is unfinished, or the task is a continuation/recovery.
6. Read `AGENT_TODO.md` only for planning, phase selection, or pending-work audits.
7. Inspect targeted diffs for files already changed; use the large-diff policy below instead of dumping an unbounded full diff.
8. Decide whether any deeper state file is needed; if yes, ask the user before reading it.
9. Summarize:
   - confirmed project state
   - current phase
   - pending work
   - known risks
   - safe next step

Codex must not modify code until this recovery step is complete.

### If context is compacted or uncertain

If Codex suspects that the conversation was compacted, summarized, truncated, or that earlier instructions may have been lost, Codex must immediately stop making new code changes and recover state by rereading:

- this project instruction file
- `AGENT_BRIEF.md`
- `AGENT_HANDOFF.md`
- `git status --short`
- `git diff --stat`
- targeted diffs for changed semantic files

Read `AGENT_TODO.md` during recovery only when unresolved scope or phase selection is part of the uncertainty.

If the recovered brief/handoff/todo state is insufficient, Codex must then read the smallest deeper file that resolves the uncertainty:

- `AGENT_CONTEXT.md` for project rules and architecture.
- `AGENT_CHANGELOG.md` for recent change history.
- `AGENT_CHANGELOG_ARCHIVE.md` for old detailed history.

The deeper file still requires user confirmation before reading unless the user explicitly requested that file.

After recovery, Codex must clearly distinguish:

- confirmed facts
- uncertain facts
- assumptions
- risks
- next safe action

Codex must not treat a compacted conversation summary as fully reliable.

### Project-level safety requirements

Codex must not:

- modify unrelated files
- expand the task scope without explicit user approval
- introduce new dependencies without recording the reason
- delete or rewrite large sections without recording risk and rollback
- continue adding changes on top of unexplained test failures
- claim verification unless the relevant command was actually run or the relevant output was inspected
- start a new phase before the handoff and context files are current
- read `AGENT_CONTEXT.md`, `AGENT_CHANGELOG.md`, or `AGENT_CHANGELOG_ARCHIVE.md` without user confirmation

### Local-only website change policy

All website changes are local-only by default. Completing a request means editing the local workspace files and running relevant local verification.

- Do not stage or commit changes, push or otherwise update `origin`, authenticate with GitHub, inspect GitHub Pages or CI deployment state, or perform any other remote Git/GitHub operation unless the user explicitly requests that exact Git or remote operation in the current request.
- Treat requests such as “发布”, “发吐槽”, “发文章”, “部署”, or “更新网站” as authorization to update local site files only. These terms do not authorize a commit, push, or remote deployment.
- Do not spend tool calls or tokens troubleshooting remote credentials, checking remote freshness, or attempting alternate push methods during ordinary website work.
- A later explicit user instruction may authorize a specific Git or remote operation for that request only; it does not change this project default.

### Project-level verification preference

For this project, skip visual verification by default. Do not open browser visual checks unless the user explicitly asks for them later or a higher-priority instruction makes them mandatory.

When visual verification is skipped, Codex must:

- say that visual verification was skipped by project preference
- rely on file-level checks, reference searches, syntax checks when available, and static reasoning
- never claim that layout or screenshots were visually verified
- record any remaining visual risk when the change affects the frontend

If a future instruction conflicts with this preference, Codex must mention the conflict clearly instead of silently ignoring either instruction.

### Project-level command verification policy

For this project, keep attempting Git and JavaScript syntax checks when relevant:

- Keep `git status --short`, `git diff --stat`, and `git diff --check` as baseline project checks.
- Inspect `git diff -- .` directly when the changed-line count is at most 400 lines.
- For larger diffs, inspect semantic files with targeted `git diff -- <paths>` calls. Audit bulk mechanical edits with deterministic counts and an allowlist of permitted changed-line patterns; print only unexpected lines or failing hunks.
- Do not dump successful full-file reads, complete DOCX extraction output, or multi-thousand-line diffs into the conversation. Return counts, exit codes, and mismatches; expand only the evidence needed to diagnose a failure.
- Read long source content only once per uncompacted task. Perform exact source-to-output comparisons locally and report counts plus differing nodes.
- Keep `node --check assets/site.js`, `node --check assets/content.js`, and `node --check assets/gripes.js` as JavaScript syntax checks when those files are relevant.
- If `git` or `node` is unavailable, record the exact limitation and continue with file-level checks.
- Do not use Node REPL as a routine fallback for blocked `node --check` or browser verification. Use Node REPL only if the user explicitly requests deeper runtime debugging or a higher-priority instruction requires it.

### Completion requirement

Before reporting a task as complete, Codex must ensure that any relevant project state has been reflected in the durable state files and must report:

- what project instruction file was used
- what state files were read or updated
- what changed
- how it was verified
- what risks remain
- how to roll back the instruction-file change if needed

## 杯底注释写作规则

杯底注释是从全文中提炼的独立思想或情感评注。它可以比正文更加鲜明、主观和浓烈，也可以概括全文，但不得机械摘录正文末句、套用通用金句、强行制造文学效果或虚构作者的感情。所有新文章与注释修订均需遵守 `AGENT_OP_CONTENT_PUBLISH.md` 中的详细写作规范。
