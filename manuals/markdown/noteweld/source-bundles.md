# Source bundles and provenance

> Current bounded preview includes Markdown/Vim, connected notes, source-bundle imports and browser-session controls. Real Google/GitHub consent remains unverified and provider buttons stay disabled; billing is closed. Earlier release records describe their own milestones. Production source revision f612e01 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision f612e0130637ecf2d1cfbd2d1d1b5c1643013d42
Reviewed: 2026-10-19

## Import, review, edit

1. Export a fresh supported ZIP from Pageweft (plain, Obsidian or LLM preset) or Sonaweft. The original PDF/recording is included only if that exporter actually includes it. Keep your own original outside the service.
2. Sign in to Noteweld and choose **Source bundles**. Select the ZIP and **Validate and preview**. This parses and verifies it without saving notes.
3. Review filenames, categories, excerpts, file counts and archive SHA256. Original extraction, user corrections and AI notes retain distinct labels. Hashes validate internal consistency, not provenance authenticity, model accuracy or legal rights.
4. Choose **Use existing notes** (default) or deliberately create another note copy. Confirm that you may retain the files, then **Import all notes together**. All notes and their immutable archive commit in one transaction. A failed import saves neither. Retrying a lost acknowledgement with the same operation ID does not duplicate notes.
5. Open an imported note, edit and save normally. Private relative assets/source links resolve through owner-checked URLs; links between imported notes use stable internal IDs. Raw ZIP bytes remain unchanged. Your edited note is separate from its original source.
6. Download the **original ZIP** any time within the preview's artifact traffic allowance. Deleting a retained source preserves its notes but makes their source/asset links unavailable. Deleting your account removes both from live storage. Operator backups expire after seven days.

## Format and safety boundaries

Supported: `pageweft-export/v1` in `MANIFEST.json` with explicit files and notes; `instascript-export/v1` in `manifest.json` for Sonaweft. Old Pageweft demonstration archives without the current schema/index need a fresh export. Arbitrary ZIPs, vaults and account/wallet migrations are not accepted.

Every payload must be declared exactly once with SHA256. Validation checks CRC, UTF-8 notes, entry count, actual expanded sizes, path traversal/absolute/control paths, case collisions, symlinks, encryption and unsupported compression. Files are parsed in memory, never extracted as executable paths. Unsupported/missing relative references fail before import. Raw HTML is skipped; private PNG/JPEG/GIF/WebP assets may render, while external images remain deliberate links. Other retained content is served as a download with nosniff, restrictive CSP and no-store.

## Preview limits

- ZIP ≤4 MiB; ≤1,000 entries; ≤16 MiB per expanded file; ≤32 MiB expanded total; bounded parse time.
- 1–250 imported Markdown notes; ≤100 KB per rewritten note; existing 250 notes/2 MiB text/account capacity applies to the whole transaction.
- Retained archive storage ≤8 MiB/account and ≤64 MiB across this free preview, measured from original compressed bytes (database/base64 overhead is additional).
- Artifact admission conservatively counts the whole archive, even when opening one asset: 32 MiB/account/day, 128 MiB/preview/day and 512 MiB/preview/fixed 30-day window. These protect the preview; they are not provider bill ceilings. Notes and source deletion remain available when a read allowance is exhausted. Daily counter maintenance retains 35 days to preserve monthly windows.
- Imports are limited to 20/hour/account. Confirmed copies consume note capacity but reuse one retained archive. Removing individual imported notes does not remove the archive; source deletion is separate.

## Support and recovery

A 5xx response includes a support ID; report that ID without sending private documents or recovery keys. Retry rejected/failed imports only after reviewing the message. Lost passphrase recovery uses your saved private key or an actually configured, deliberately linked provider; email reset is not enabled. Source storage is not end-to-end encrypted. Do not keep sensitive or irreplaceable originals only in this preview.
