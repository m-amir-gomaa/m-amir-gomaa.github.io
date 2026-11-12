# Anki text-card handoff

> Current preview includes email signup/reset, Google/GitHub sign-in, private managed media, user-owned Google Drive uploads, Markdown/Vim, connected notes and source imports. Paid checkout is closed. Managed attachment E2EE is a planned requirement, not an available feature. Earlier release records retain their dated scope. Reviewed source revision fe0ff51 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision fe0ff516cabfebf5b602d704deb1eb4e969ec4d8
Reviewed: 2026-11-12

## Preview, export, import

The optional source CLI accepts explicitly authored card batches with a stable external ID, question/answer, local source path, exact file hash and verbatim supporting quote. It checks visible vault bytes before export. Human review still determines accuracy and useful retrieval; a matching quote alone does not make a good card.

Preview the batch, inspect its digest and confirm export to a new UTF-8 tab-separated file. Active HTML and Anki sound syntax are escaped. No model call, Noteweld account or AnkiWeb credential is needed.

Create **Noteweld Recall v1** in Anki with fields **NoteweldID, Question, Answer, Source**, NoteweldID first, and one Recall card template. Import into the intended deck, review field mapping/duplicate-update settings and confirm. Keep IDs stable on later imports to update the same notes/cards while preserving scheduling. Omitted cards are not deleted. Exact CLI/template/agent instructions accompany the source.

This is text-only: no app export button, automatic live-deck writes, synthetic ratings, cloze/image/audio generation or duplicate FSRS. Anki owns scheduling. Installed Anki 26.09.3 imported real CLI output three times into a temporary collection; one synthetic review and later text updates preserved note/card IDs, checked scheduling fields and exact review rows. The owner's profile/AnkiWeb were untouched.
