{
  "title": "Reviewed agent proposals",
  "description": "Allow reading and proposed changes with separate human acceptance.",
  "date": "2026-11-09",
  "weight": 260,
  "project": "Noteweld",
  "category": "Guide",
  "notice": "Current preview includes verified-email signup/reset, private managed media, user-owned Google Drive uploads, the forest interface, appearance customization, Markdown/Vim, connected notes and source imports. Google/GitHub sign-in are configured; full owner link/unlink acceptance remains pending. Billing is closed. Earlier release records describe dated milestones. Production source revision f3ee71e is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/agent-access.md"
}

## Review before accepting

An explicitly paired Agent can list/read owned notes and submit complete Markdown creation/update proposals. It cannot approve itself, directly delete notes, manage providers or billing. Open **Account → Devices & agents → Review agent proposals**, compare the text/reason, then accept or reject. Accepted work uses ordinary ownership, revisions, quotas and history. A stale revision or revoked/expired device refuses acceptance. Checklist updates are unsupported.

The optional stdio MCP bridge exposes list_notes, read_note, propose_note and proposal_status. Device bearer access is separate from browser cookies; only the authenticated owner approves. Installation does not pair an account or change a model. Portable human/agent instructions accompany the source.

Grants expire after 90 days and cover the entire account. Drafts/receipts expire after seven days, with bounded counts, bytes and submission rates. Backups retain accepted notes/history but omit grants and pending proposals. Real DeepTutor MCP transport, CLI, PostgreSQL and browser decisions were exercised without invoking a model or changing its account/configuration. Hosted checks covered read/propose, review/history, duplicate/stale refusal and revocation; they do not create another owner's grant.
