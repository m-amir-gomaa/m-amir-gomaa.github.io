# Building Pageweft: extraction to a hosted workbench

Reviewed: 2026-10-18

## 1. Establish actual extraction

The initial requirement was private PDF-to-Markdown preparation using MinerU on the owner's Modal account. The design moved from customer-provided Modal credentials to owner-hosted processing; customers do not provide cloud tokens. MinerU 2.7.6 runs in a cloud GPU image and retains original engine output. The laptop's 2 GB GPU is not required.

A bounded one-page public trial was verified before describing full-book processing. The initial deployed web startup failed because `modal_fn.py` was missing from its uploaded source. Explicit inclusion fixed the image, followed by a fresh deployment and public workflow checks. [Original verification record](/manuals/pageweft/verification/).

## 2. Make books and partial failure manageable

Book inspection/ranges, explicit quotes, 20-page sections, partial outputs, selected retries, force OCR, cheaper CPU text extraction and cancellation were implemented. Source page indices were mapped back to the original PDF. Corrections/revision checks remained separate from engine output; exports preserved relative images, manifests, bookmarks and optional source PDF.

Actual GPU extraction checked selected pages from an original four-page fixture. A separate complete 1,000-page synthetic PDF passed the CPU text route across 50 sections with ordered pages and correct fixture-credit settlement. This proves that workflow on those sources; it does not prove scanned-book fidelity. [Book release](/manuals/pageweft/book-release/).

## 3. Account for usage and recovery

The book ledger has one serialized writer, distinct from the older prototype ledger. Credit holds are reserved, settled or released transactionally; duplicate confirmation does not dispatch twice. Processing and file retention are separate from persistent financial records. Owner reports, admission envelopes, pause and encrypted snapshots were added. Admission estimates are not a whole-account cloud bill cap.

One-time $5/$10 packs replaced the earlier monthly access proposal. Rename commit `1372062` introduced Pageweft while retaining cloud/storage identities. Paddle integration commit [e7a70ee](https://github.com/m-amir-gomaa/PDF2Markdown-/tree/e7a70ee08940f935e1d1385d9811bbe5b724028a) superseded the Lemon Squeezy activation path. Signed events enter a durable inbox; fresh provider state and server-owned intents control grants/refunds. Current source has 78 automated checks; payment HTTP in those checks is mocked.

## Successful commands and prerequisites

The established owner deployment uses Python 3.13, authenticated Modal SDK 1.5.3, existing permanent session/payment secrets and separate ledger/results/model volumes. GPU dependencies run in the cloud image.

```sh
python3.13 -m venv .venv
.venv/bin/pip install -r requirements-dev.txt
.venv/bin/python -m unittest discover -s tests -q
node --check static/app.js
.venv/bin/python -m modal deploy app.py
```

For the recorded local browser fixture, with explicitly synthetic funds and real CPU text extraction:

```sh
.venv/bin/python -m uvicorn scripts.preview_books:app --host 127.0.0.1 --port 8768
```

Owner verification uses `scripts.probe_deployed_books` with an authorized original fixture and an explicit `--mode text` or `--mode auto`. Those probes seed internal verification credit; they are not purchases. `scripts/test_e2e.py` targets an older interface and is not the active release test.

Owner commands which were actually used for operations include:

```sh
.venv/bin/python -m scripts.operations report
.venv/bin/python -m scripts.operations backup
```

Reports/backups remain private. Never publish a source book, recovery key, provider credential or decrypted ledger while reproducing them.

## Recorded problems and current boundaries

| Finding | Resolution or honest limit |
|---|---|
| Missing deployed Python module prevented web startup | Include the module explicitly and redeploy; check actual HTTPS rather than build output alone |
| A whole-book job can partly fail | Preserve successful sections and expose selected retry/cancellation; verify credit settlement and output order |
| A budget estimate looked like a maximum invoice | Separate admission envelopes, actual workspace billing, customer credit and cash contribution in operations |
| Earlier monthly/BYO/Lemon assumptions no longer matched the product | Owner-hosted processing, one-time packs and current Paddle integration supersede them without resetting balances |
| Payment mocks passed but account approval was incomplete | Keep checkout closed; complete identity/domain, real isolated provider tests and controlled live acceptance |

The dedicated [payment checklist](/manuals/pageweft/payments/) and [Paddle release](/manuals/pageweft/paddle-release/) distinguish configured, tested and still-required steps. Representative difficult-document comparison and measured customer margin remain separate work.
