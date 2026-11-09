{
  "title": "Technical overview",
  "description": "Hosted workflow, processing tariff, local CLI, deployment and limits.",
  "date": "2026-11-09",
  "weight": 30,
  "project": "Sonaweft",
  "category": "Reference",
  "notice": "Current public preview supports verified email-first signup, mailed resets for verified addresses and existing private-key recovery. Processing may be temporarily unavailable; completed examples remain open. Dedicated Google/GitHub registration and genuine consent remain open. Paid checkout is closed. Dated release records describe their own checkpoints. Production source revision 423e5a1 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses. This is an explicitly reviewed public summary; private operational and learner details are omitted.",
  "sourceurl": "",
  "download": "markdown/sonaweft/overview.md"
}

## Hosted transcription workflow

Sonaweft runs Python/FastAPI, a serialized SQLite ledger and hosted speech workers on Modal behind Cloudflare. Inspect authorized English audio/video up to 64 MiB / 60 minutes before confirming transcription. The eligible free sample transcribes the first thirty seconds, subject to private availability. Completed examples start no inference.

Listen to timestamped segments, keep immutable recognition separate from saved corrections, and optionally consent to transcript-text review by DeepSeek. Audio is not sent to that text provider. Public HTTPS direct media/RSS sources use checked redirects; arbitrary platform pages, private cookies and unrestricted URL downloads are not supported. Recognition, corrections, optional AI notes and scholarly metadata are separate evidence.

## Current service tariff

Configured one-time processing packs are $5/$10; checkout remains closed. Transcription is $0.15/job plus $0.015/started minute; standard review is $0.25 plus $0.020/minute; advanced review is $0.35 plus $0.025/minute. A sixty-minute job is respectively $1.05, $1.45 or $1.85 at those service tariffs. They are not actual measured provider reimbursements or guaranteed margins.

Reservations settle on successful selected work and release on failure. Explicit retries get fresh quotes and may reuse retained recognition. Source/results expire after 48 hours, so download them. [Verified email/recovery](/manuals/sonaweft/accounts/) is deployed; genuine OAuth consent and commercial payment acceptance remain separate. Accounts/balances do not merge across apps.

## Local CLI

The standalone source CLI uses tested Python 3.13, FFmpeg/FFprobe and yt-dlp for supported authorized sources. Local recognition uses CPU/int8; model downloads and optional provider charges are separate from hosted usage. Compatibility command/import names remain. Source installation commands are provided with the owner-access repository; archived agent scripts are not required.

## Evidence and output

Actual hosted short-audio recognition, correction/history/export browser journeys and real synthetic account/recovery acceptance have recorded evidence. The completed example is an attributed NOAA scientific interview. Export text/Markdown/JSON/subtitles and a hashed source-linked archive; Noteweld can preview/import it. No automatic diarization, verified speaker identity, universal accuracy, representative long-recording cost margin or live payment is claimed. [Using Sonaweft](/manuals/sonaweft/guide/) explains the practical flow.
