# Local vault sync and devices

> Current preview includes email signup/reset, Google/GitHub sign-in, private managed media, user-owned Google Drive uploads, Markdown/Vim, connected notes and source imports. Paid checkout is closed. Managed attachment E2EE is a planned requirement, not an available feature. Earlier release records retain their dated scope. Reviewed source revision fe0ff51 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.

Source baseline: Owner-access repository, revision fe0ff516cabfebf5b602d704deb1eb4e969ec4d8
Reviewed: 2026-11-12

## Connect deliberately

The source CLI needs Node.js 24.13+ and locked dependencies. Connect a chosen Markdown folder to a compatible server, open the printed URL in your browser and approve the named device/scope in **Account → Devices & agents**. Never enter passwords/recovery keys into an agent or pairing prompt. Grants expire after 90 days and can be revoked earlier.

Prepare/download the initial snapshot, review and confirm its digest. Preparation does not overwrite visible files. For an existing Obsidian vault, first import its ZIP on the website and explicitly adopt that source. Exact commands are provided with the access-controlled source.

## Daily work and conflicts

Edit locally online or offline. Preview pushes/pulls/conflicts, then confirm that exact preview. Divergent edits retain local text plus a separate cloud copy for an explicit decision. Local deletion never silently deletes a cloud note; cloud deletion never silently erases a local file. Adopt deliberate renames before editing moved content. New local notes require include-new preview. Keep the sync journal when moving the vault.

New local media uses managed storage with existing limits, without silently falling back to Drive. Plugins/configuration are not executed. Reader scopes read, Agent scopes propose for review, and Sync scopes read/update notes/files. None manages account settings, providers or billing. Scopes cover the complete account, not selected folders.

Credentials live outside the vault in private files, not an encrypted keychain. Revocation blocks future access but does not erase downloaded files. Reset/sign-out-all invalidates grants; restored clients reconnect. Actual CLI/PostgreSQL/browser and hosted journeys exercised two-way edits, conflicts, R2 bytes, new notes and revocation. See the separately qualified [desktop alpha](/manuals/noteweld/desktop/).
