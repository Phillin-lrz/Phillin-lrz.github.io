# Codex project instructions

This repository is a static GitHub Pages website for `Phil Lin的Bar`.

Use this file as the primary Codex project-level instruction entry. Keep business documentation in `README.md`; keep durable agent state in the `AGENT_*.md` files.

## Codex context preservation rules

This project uses repository-level state files to prevent loss of important information during long Codex sessions, automatic context compaction, summarization, or truncated conversation history.

Before starting any non-trivial work in this project, Codex must first read:

- `AGENT_CONTEXT.md`
- `AGENT_TODO.md`
- `AGENT_CHANGELOG.md`
- `AGENT_HANDOFF.md`

Codex must treat these files as the durable project memory. Chat history alone is not a reliable source of truth.

### Startup procedure for new Codex sessions

At the beginning of a new session, before modifying code, Codex must:

1. Read this project instruction file.
2. Read `AGENT_CONTEXT.md`.
3. Read `AGENT_TODO.md`.
4. Read `AGENT_CHANGELOG.md`.
5. Read `AGENT_HANDOFF.md`.
6. Check `git status`.
7. Check the current diff.
8. Summarize:
   - confirmed project state
   - current phase
   - pending work
   - known risks
   - safe next step

Codex must not modify code until this recovery step is complete.

### If context is compacted or uncertain

If Codex suspects that the conversation was compacted, summarized, truncated, or that earlier instructions may have been lost, Codex must immediately stop making new code changes and recover state by rereading:

- this project instruction file
- `AGENT_CONTEXT.md`
- `AGENT_TODO.md`
- `AGENT_CHANGELOG.md`
- `AGENT_HANDOFF.md`
- `git status`
- `git diff`

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

### Completion requirement

Before reporting a task as complete, Codex must ensure that any relevant project state has been reflected in the durable state files and must report:

- what project instruction file was used
- what state files were read or updated
- what changed
- how it was verified
- what risks remain
- how to roll back the instruction-file change if needed
