{
  "title": "Declared image package inventory",
  "description": "Observed package versions, license metadata/file hashes and native/system/model review boundaries.",
  "date": "2026-10-19",
  "weight": 140,
  "project": "Sonaweft",
  "category": "Reference",
  "notice": "Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Production source revision cfe3442 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.",
  "sourceurl": "",
  "download": "markdown/sonaweft/image-inventory.md"
}

Actual CPU inspection of the current web/Whisper package images. Full [metadata and license-file hashes](/manuals/metadata/sonaweft-image-inventory.json), SHA256 `4e1fbbab5b0c50ab0afd77f0c95341c011bd4829b23bc5a402661dfcda1a68a0`. No model volume, app secret, customer source or GPU was used. The NVIDIA CUDA base image emitted its normal upstream notice on CPU; this is not GPU inference or a change to the desktop drivers.

These are Python distribution declarations and license-file hashes, not a complete license compatibility approval. Bundled native libraries, FFmpeg, system packages, the pinned CUDA image and model weights require their own exact terms. The actual ASR code pins Systran/faster-whisper-large-v3 revision `edaa852ec7e145841d8ffdb056a99866b5f0a478`; do not substitute current master terms.

Reproduce with `PYTHONPATH=. .venv-web/bin/python -m modal run scripts/dependency_inventory_modal.py --output NEW_PRIVATE_JSON`. The separate ephemeral CPU app stops after reading metadata; it does not replace current app/volumes/secrets.

## web image

Python 3.13.3; 44 distributions.

| Package | Version | Declared license evidence |
|---|---|---|
| aiohappyeyeballs | 2.6.1 | License metadata; see JSON |
| aiohttp | 3.12.7 | License metadata; see JSON |
| aiosignal | 1.3.2 | License metadata; see JSON |
| annotated-doc | 0.0.5 | MIT |
| annotated-types | 0.8.0 | MIT |
| anyio | 4.15.1 | MIT |
| attrs | 25.3.0 | MIT |
| Authlib | 1.9.1 | License metadata; see JSON |
| cbor2 | 5.7.0 | MIT |
| certifi | 2026.10.18 | License metadata; see JSON |
| certifi | 2025.4.26 | License metadata; see JSON |
| cffi | 2.1.1 | MIT-0 |
| charset-normalizer | 3.5.2 | License metadata; see JSON |
| cryptography | 46.0.5 | Apache-2.0 OR BSD-3-Clause |
| fastapi | 0.141.1 | MIT |
| frozenlist | 1.6.0 | License metadata; see JSON |
| grpclib | 0.4.8 | License metadata; see JSON |
| h11 | 0.16.0 | License metadata; see JSON |
| h2 | 4.2.0 | License metadata; see JSON |
| hpack | 4.1.0 | License metadata; see JSON |
| httpcore | 1.0.9 | BSD-3-Clause |
| httpx | 0.28.1 | License metadata; see JSON |
| hyperframe | 6.1.0 | License metadata; see JSON |
| idna | 3.20 | BSD-3-Clause |
| idna | 3.10 | License classifier; see JSON |
| itsdangerous | 2.2.0 | License classifier; see JSON |
| joserfc | 1.7.5 | License metadata; see JSON |
| multidict | 6.4.4 | License metadata; see JSON |
| pip | 25.1.1 | License metadata; see JSON |
| propcache | 0.3.1 | License metadata; see JSON |
| protobuf | 6.31.1 | License metadata; see JSON |
| pycparser | 3.11 | BSD-3-Clause |
| pydantic | 2.14.1 | MIT |
| pydantic_core | 2.50.1 | MIT |
| python-multipart | 0.0.32 | Apache-2.0 |
| requests | 2.32.5 | License metadata; see JSON |
| starlette | 1.9.0 | BSD-3-Clause |
| typing-inspection | 0.4.4 | MIT |
| typing_extensions | 4.16.0 | PSF-2.0 |
| typing_extensions | 4.13.2 | PSF-2.0 |
| urllib3 | 2.8.0 | MIT |
| uv | 0.7.19 | License metadata; see JSON |
| wheel | 0.45.1 | License classifier; see JSON |
| yarl | 1.20.0 | License metadata; see JSON |
## whisper image

Python 3.12.1; 42 distributions.

| Package | Version | Declared license evidence |
|---|---|---|
| aiohappyeyeballs | 2.6.1 | License metadata; see JSON |
| aiohttp | 3.12.7 | License metadata; see JSON |
| aiosignal | 1.3.2 | License metadata; see JSON |
| anyio | 4.15.1 | MIT |
| attrs | 25.3.0 | MIT |
| av | 15.1.0 | BSD-3-Clause |
| cbor2 | 5.7.0 | MIT |
| certifi | 2025.4.26 | License metadata; see JSON |
| click | 8.5.0 | BSD-3-Clause |
| ctranslate2 | 4.8.3 | License metadata; see JSON |
| faster-whisper | 1.2.1 | License metadata; see JSON |
| filelock | 4.2.0 | MIT |
| flatbuffers | 25.12.19 | License metadata; see JSON |
| frozenlist | 1.6.0 | License metadata; see JSON |
| fsspec | 2026.9.0 | BSD-3-Clause |
| grpclib | 0.4.8 | License metadata; see JSON |
| h11 | 0.16.0 | License metadata; see JSON |
| h2 | 4.2.0 | License metadata; see JSON |
| hf-xet | 1.7.0 | Apache-2.0 |
| hpack | 4.1.0 | License metadata; see JSON |
| httpcore2 | 2.13.1 | BSD-3-Clause |
| httpx2 | 2.13.1 | BSD-3-Clause |
| huggingface_hub | 2.2.0 | License metadata; see JSON |
| hyperframe | 6.1.0 | License metadata; see JSON |
| idna | 3.20 | BSD-3-Clause |
| idna | 3.10 | License classifier; see JSON |
| multidict | 6.4.4 | License metadata; see JSON |
| numpy | 2.5.4 | BSD-3-Clause AND 0BSD AND MIT AND Zlib AND CC0-1.0 |
| onnxruntime | 1.31.0 | License metadata; see JSON |
| packaging | 26.3 | Apache-2.0 OR BSD-2-Clause |
| pip | 23.3.2 | License metadata; see JSON |
| propcache | 0.3.1 | License metadata; see JSON |
| protobuf | 6.33.6 | License metadata; see JSON |
| protobuf | 6.31.1 | License metadata; see JSON |
| PyYAML | 6.0.3 | License metadata; see JSON |
| setuptools | 69.0.3 | License classifier; see JSON |
| tokenizers | 0.23.3 | License classifier; see JSON |
| tqdm | 4.70.1 | License metadata; see JSON |
| truststore | 0.10.5 | MIT |
| typing_extensions | 4.16.0 | PSF-2.0 |
| typing_extensions | 4.13.2 | PSF-2.0 |
| yarl | 1.20.0 | License metadata; see JSON |

## Review boundary

Inspect exact recorded wheel/license files and upstream version/project URLs when declarations are ambiguous; contact that official upstream repository if terms are absent. A missing SPDX field is not permission and a package label cannot certify all bundled models/native libraries. Preserve current source attribution. No automatic provider/model migration or complete commercial compatibility claim is made by this inventory.
