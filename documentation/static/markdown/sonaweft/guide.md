# Using Sonaweft

Reviewed: 2026-10-19

## Hear a completed example

[Open the original example](https://sonaweft.amirgomaa.com/example) to hear source audio, inspect the actual recognition/review and download a hashed bundle. This precomputed example does not start another transcription job.

## Upload and inspect

The hosted workflow accepts authorized English audio/video up to 64 MiB and 60 minutes. Upload a file and inspect its duration/quote before confirming work. The hosted application does not download arbitrary platform URLs or use your browser cookies.

An available free sample processes the first 30 seconds, transcription only. It is once per workspace/IP hash and subject to small global and admission quotas. The owner reports app domains approved; paid packs stay closed until seller/payout and genuine payment acceptance pass.

## Decide whether to use AI review

Review is optional and requires consent to send transcript text to DeepSeek. Source audio is not sent to that text provider. Standard/advanced review choices have different quoted service tariffs; current values are in the [technical overview](/manuals/sonaweft/overview/).

Original recognition, user corrections, generated notes and separately sourced research remain different artifacts. A generated summary or scholarly metadata match does not certify that a claim is true.

## Listen, correct and export

Open timestamped segments, listen to the corresponding source and search the text. Save corrections as a separate revision; the original recognition remains available. Conflicts or failed saves need resolution before you rely on the edit.

Export original Markdown/text/JSON/SRT/VTT, corrected Markdown/JSON and optional notes/research questions. The versioned `instascript-export/v1` bundle includes identity, timing, provenance and hashes. You can preview/import that bundle through [Noteweld sources](/manuals/noteweld/source-bundles/), preserving original/corrected/AI labels and retained files within its bounds.

Failed selected processing releases its reservation; an explicit retry gets a fresh quote and may reuse retained recognition. Do not blindly create a second job after an uncertain response.

## Local CLI and retention

The standalone CLI also supports authorized URLs through its own local tools. Local model downloads, platform access and optional provider charges are separate from the hosted service. Follow the [CLI setup](/manuals/sonaweft/overview/#local-cli), not the archived agent/demo scripts.

Hosted source/results expire after 48 hours and are removed by scheduled cleanup. Download outputs while retained. Use the immediate source/result delete controls to close access, return active holds and remove files; bounded in-flight processing buffers expire when their operation exits. Financial records remain separate. Manual speaker labels are annotations; automatic diarization, verified speaker identity and certified transcription are not claimed.

## Direct sources and source review

The hosted importer accepts authorized public HTTPS direct media or RSS/Atom feeds with bounded, checked redirects. It does not download arbitrary webpages/YouTube, access private feeds or use browser cookies. Inspect before confirming. Selected-time-span quotes create a separate result with its original recording offset; earlier results and edits remain.

Use playback speed/selection loop, source-linked quotes, listening cues and glossary candidates to review uncertain material. These are transparent symptoms, not calibrated truth scores. Optional AI suggestions can be staged/dismissed deliberately and saved as user corrections; original ASR stays unchanged. Read [the source-workflow release](/manuals/sonaweft/source-workflow-release/) for controls, deletion and diagnostic boundaries.
