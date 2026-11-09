{
  "title": "Anki text-card handoff",
  "description": "Review source-grounded text cards with stable import identities.",
  "date": "2026-11-09",
  "weight": 280,
  "project": "Noteweld",
  "category": "Guide",
  "notice": "Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision b4944d8 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/anki.md"
}

## Preview, export, import

The optional source CLI accepts explicitly authored card batches with a stable external ID, question/answer, local source path, exact file hash and verbatim supporting quote. It checks visible vault bytes before export. Human review still determines accuracy and useful retrieval; a matching quote alone does not make a good card.

Preview the batch, inspect its digest and confirm export to a new UTF-8 tab-separated file. Active HTML and Anki sound syntax are escaped. No model call, Noteweld account or AnkiWeb credential is needed.

Create **Noteweld Recall v1** in Anki with fields **NoteweldID, Question, Answer, Source**, NoteweldID first, and one Recall card template. Import into the intended deck, review field mapping/duplicate-update settings and confirm. Keep IDs stable on later imports to update the same notes/cards while preserving scheduling. Omitted cards are not deleted. Exact CLI/template/agent instructions accompany the source.

This is text-only: no app export button, automatic live-deck writes, synthetic ratings, cloze/image/audio generation or duplicate FSRS. Anki owns scheduling. Installed Anki 26.09.3 imported real CLI output three times into a temporary collection; one synthetic review and later text updates preserved note/card IDs, checked scheduling fields and exact review rows. The owner's profile/AnkiWeb were untouched.
