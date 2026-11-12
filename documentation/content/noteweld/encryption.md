{
  "title": "Encryption and storage privacy",
  "description": "Current provider encryption, the planned client-key attachment E2EE boundary and recovery responsibilities.",
  "date": "2026-11-12",
  "weight": 220,
  "project": "Noteweld",
  "category": "Reference",
  "notice": "Current preview includes email signup/reset, Google/GitHub sign-in, private managed media, user-owned Google Drive uploads, Markdown/Vim, connected notes and source imports. Paid checkout is closed. Managed attachment E2EE is a planned requirement, not an available feature. Earlier release records retain their dated scope. Reviewed source revision fe0ff51 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/noteweld/encryption.md"
}

## Current behavior

Hosted managed attachments are private to the signed-in account and stored in two R2 buckets. Cloudflare encrypts objects at rest and HTTPS protects transfers, but the application can read contents. This is not end-to-end encryption. Google's Drive encryption also protects files at rest/in transit; the current Noteweld integration adds no client-key E2EE. The private-server profile encrypts attachments with administrator-held keys, which also is not E2EE.

## Planned paid attachment privacy

The paid managed-cloud direction is to encrypt supported attachments on an approved user device before upload and decrypt only on approved user devices. The server and storage provider would receive ciphertext without the unwrapped file key. This is a design requirement, not a shipped or purchasable feature.

An initial attachment-only feature would not make note text, titles, search, account records or payment information E2EE. Its exact metadata scope must be documented; ciphertext sizes and access timing remain visible. Processing a decrypted copy with a cloud AI/OCR/transcription service is a separate disclosure requiring an explicit user action.

## Keys and recovery

The intended design uses user-held recovery material and deliberate device enrollment. An email/account-password reset must not secretly recover an encryption key. Without an approved device or the user's recovery material, support would be unable to decrypt files. Revocation cannot erase plaintext already downloaded.

Browser playback, large-file bounds, desktop/CLI sync, downloads and vault exports all need compatible client-side handling. Existing plaintext files require explicit client-mediated migration; old backups cannot be retroactively made secret by relabeling them. Current file-size and type limits remain until their replacements are qualified.

Implementation and independent security review, corruption/wrong-key tests, real device/browser journeys and encrypted backup/restore acceptance must precede an E2EE claim. Web users still trust delivered client code; a compromised device or malicious replacement client can access unlocked data.

Compare [storage choices](/manuals/noteweld/media-storage/) and [private-server responsibilities](/manuals/noteweld/private-server/).

Primary references: [R2 data security](https://developers.cloudflare.com/r2/reference/data-security/) and [Google Drive encryption](https://support.google.com/drive/answer/10519333?hl=en).
