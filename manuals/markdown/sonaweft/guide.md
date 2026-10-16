# Using Sonaweft

Reviewed: 2026-10-16

## Hear a completed example

[Open the original example](https://m-amir-gomaa--sonaweft-web-app.us-east.modal.run/example) to hear source audio, inspect the actual recognition/review and download a hashed bundle. This precomputed example does not start another transcription job.

## Upload and inspect

The hosted workflow accepts authorized English audio/video up to 64 MiB and 60 minutes. Upload a file and inspect its duration/quote before confirming work. The hosted application does not download arbitrary platform URLs or use your browser cookies.

An available free sample processes the first 30 seconds, transcription only. It is once per workspace/IP hash and subject to small global and admission quotas. Paid processing packs remain closed while Paddle approval and actual payment tests are outstanding.

## Decide whether to use AI review

Review is optional and requires consent to send transcript text to DeepSeek. Source audio is not sent to that text provider. Standard/advanced review choices have different quoted service tariffs; current values are in the [technical overview](/manuals/sonaweft/overview/).

Original recognition, user corrections, generated notes and separately sourced research remain different artifacts. A generated summary or scholarly metadata match does not certify that a claim is true.

## Listen, correct and export

Open timestamped segments, listen to the corresponding source and search the text. Save corrections as a separate revision; the original recognition remains available. Conflicts or failed saves need resolution before you rely on the edit.

Export original Markdown/text/JSON/SRT/VTT, corrected Markdown/JSON and optional notes/research questions. The versioned `instascript-export/v1` bundle includes identity, timing, provenance and hashes. Producing that bundle does not yet implement a Noteweld importer.

Failed selected processing releases its reservation; an explicit retry gets a fresh quote and may reuse retained recognition. Do not blindly create a second job after an uncertain response.

## Local CLI and retention

The standalone CLI also supports authorized URLs through its own local tools. Local model downloads, platform access and optional provider charges are separate from the hosted service. Follow the [CLI setup](/manuals/sonaweft/overview/#local-cli), not the archived agent/demo scripts.

Hosted source/results expire after 48 hours and are removed by scheduled cleanup. Download outputs while retained. There is no immediate self-service delete control yet; use [support](mailto:mo.gomaa.formal@gmail.com) with ownership proof without sending recordings or recovery keys. No diarization, speaker identification or certified transcription is claimed.
