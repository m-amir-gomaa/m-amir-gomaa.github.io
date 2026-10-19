# Building Sonaweft: speech, source and recovery

Reviewed: 2026-10-19

## Source chronology

The original `instascript` command and import paths remain compatible. Hosted workbench 7fde01a (owner-access source record) added the upload/review/export workflow. `5ac1d7c` added the original completed audio example; handoff 68b8472 (owner-access source record) normalized artifacts and corrected the provider reference. The old optional Claude/vault documents are archives, not required setup.

## 1. Preserve source and recover work

The standalone CPU CLI uses FFmpeg/FFprobe and faster-whisper. Immutable original recognition, separate corrections, generated notes and sourced questions became distinct artifacts. Private checkpoints, exclusive locks, completion hashes and atomic publication support deliberate recovery; cross-path perceptual deduplication is not promised.

Versioned exports include Markdown/text/JSON/SRT/VTT and `instascript-export/v1` provenance/hashes. A complete export is separate from implementing a future importer in Noteweld.

## 2. Run actual cloud recognition and bounded review

The hosted FastAPI service uses separate Sonaweft ledger/media/model volumes. An on-demand Modal L4 loads the pinned large-v3 model revision in the cloud. The local MX350 does not host those weights. Optional DeepSeek text review has explicit consent, bounded text/output and schema/source-quote checks. Audio is not sent to that text API.

An original generated two-sentence recording was transcribed on local CPU, the Nix-built CLI and the cloud GPU. Actual configured DeepSeek Flash review succeeded; the advanced model was listed by the API, not inference-benchmarked. The combined cloud pipeline and public upload/correction/export journey passed.

## 3. Add accounting and public evidence

The single ledger writer reserves a quoted amount once and settles only a completed selected package. Failures release reservations; explicit retry may reuse retained recognition. Paddle product/prices and a paused notification were configured separately from Pageweft. Fresh transaction/adjustment reads enforce server-owned intent, owner, product and environment. No shared wallet is implemented.

Fifty-two automated checks, source CI and real hosted browser acceptance are recorded in the [release](/manuals/sonaweft/release/). Those payment API tests are mocked. An actual encrypted remote financial snapshot was decrypted into a disposable SQLite clone and passed integrity/balance checks; it does not restore expired media.

## Successful commands

Start with Python 3.13 and separately available FFmpeg/FFprobe. Install only the extras needed for the selected local/cloud workflow.

```sh
python3.13 -m venv .venv
.venv/bin/python -m pip install '.[web,cloud]'
bin/sonaweft recording.mp3 --out ./out
python -m unittest discover -s tests -q
node --check sonaweft_web/static/app.js
node --check sonaweft_web/static/checkout.js
.venv/bin/python -m modal deploy app.py
```

`recording.mp3` is a placeholder for an authorized local recording, not a distributed third-party fixture. The deployment requires owner authentication and the already-established session/payment/LLM secrets. Provider values stay server-side. The tested Nix route was:

```sh
nix build .#default --no-link
```

The resulting CLI actually processed the generated recording; no NixOS rebuild was needed. Owner reports and encrypted snapshots use `scripts/operations.py`; the exact incident/payment sequence is in [operations](/manuals/sonaweft/operations/).

## Recorded failures and fixes

| Observed problem | Implemented correction |
|---|---|
| Cloud exception/NumPy values could not cross the function boundary | Return native JSON values and a plain error envelope; rerun actual combined cloud processing |
| PyAV 19 broke the tested pip speech dependency combination | Pin pip/cloud to tested PyAV 15.1.0; keep Nix's separately validated compatible pair distinct |
| Nix dynamic-library discovery hit SIGPIPE in the launcher | Correct the discovery path and run the Nix-built CLI on the original audio |
| A completed audio sample needed actual evidence rather than an illustrative VTT | Publish the original generated recording, real recognition/review and a manifest-verified bundle; verify playback/seek/download |

No long/noisy/audio-accent benchmark, diarization, hosted arbitrary-URL import, immediate self-service deletion or live merchant approval is implied. Checkout remains closed until actual account and payment acceptance.
