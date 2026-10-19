# Declared image package inventory

> Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Production source revision 990e994 is reserved for owner-authorized review. This reviewed public edition is readable independently; public source samples have their own explicit licenses.

Source baseline: Owner-access repository, revision 990e99478f468f891370471f66d9b40272ea5680
Reviewed: 2026-10-19

Actual ephemeral CPU inspection of the current deployment package image definitions. Full [wheel metadata and license-file hashes](/manuals/metadata/pageweft-image-inventory.json); SHA256 `4b3bbd7a425c300a9563cfe4a147b0bb1d3e6e49d29a119c7ff75d216d0d1161`. No GPU, model download, customer volume or secret was used. This records installed Python distributions, not a legal compatibility approval. Bundled native/system libraries and model weights need separate review; exact previously observed model revisions and upstream terms are in [third-party source notes](/manuals/pageweft/dependencies/).

Reproduce using `PYTHONPATH=. .venv_modal_new/bin/python -m modal run scripts/dependency_inventory_modal.py --output NEW_PRIVATE_JSON`. Choose an exclusive output; no current app/volume/secret is replaced. An ephemeral owner app stops after the metadata read. Two initial attempts exposed duplicate function tags and a missing source module with `include_source=False`; the final implementation uses distinct functions in the image-contained web module. These failed reads produced no claimed inventory.

## web image

Python 3.13.3; 42 distributions. These are declared metadata; a blank declaration is not permission and file hashes do not interpret terms.

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
| pypdf | 6.14.2 | BSD-3-Clause |
| python-multipart | 0.0.32 | Apache-2.0 |
| starlette | 1.9.0 | BSD-3-Clause |
| typing-inspection | 0.4.4 | MIT |
| typing_extensions | 4.16.0 | PSF-2.0 |
| typing_extensions | 4.13.2 | PSF-2.0 |
| uv | 0.7.19 | License metadata; see JSON |
| wheel | 0.45.1 | License classifier; see JSON |
| yarl | 1.20.0 | License metadata; see JSON |
## mineru image

Python 3.12.10; 150 distributions. These are declared metadata; a blank declaration is not permission and file hashes do not interpret terms.

| Package | Version | Declared license evidence |
|---|---|---|
| aiofiles | 25.1.0 | License metadata; see JSON |
| aiohappyeyeballs | 2.6.1 | License metadata; see JSON |
| aiohttp | 3.12.7 | License metadata; see JSON |
| aiosignal | 1.3.2 | License metadata; see JSON |
| albucore | 0.0.24 | License metadata; see JSON |
| albumentations | 2.0.8 | License metadata; see JSON |
| annotated-types | 0.8.0 | MIT |
| anyio | 4.15.1 | MIT |
| attrs | 25.3.0 | MIT |
| av | 19.0.1 | BSD-3-Clause |
| beautifulsoup4 | 4.15.0 | License metadata; see JSON |
| boto3 | 1.43.113 | License metadata; see JSON |
| botocore | 1.43.113 | License metadata; see JSON |
| cbor2 | 5.7.0 | MIT |
| certifi | 2026.7.22 | License metadata; see JSON |
| certifi | 2025.4.26 | License metadata; see JSON |
| cffi | 2.1.1 | MIT-0 |
| charset-normalizer | 3.5.2 | License metadata; see JSON |
| click | 8.5.0 | BSD-3-Clause |
| colorlog | 6.12.0 | License metadata; see JSON |
| contourpy | 1.4.0 | BSD-3-Clause |
| cryptography | 50.0.2 | Apache-2.0 OR BSD-3-Clause |
| cuda-bindings | 13.4.4 | Apache-2.0 |
| cuda-pathfinder | 1.8.3 | Apache-2.0 |
| cuda-toolkit | 13.0.3.0 | NOASSERTION — inspect exact wheel/upstream |
| cycler | 0.12.1 | License metadata; see JSON |
| dill | 0.4.1 | License metadata; see JSON |
| distro | 1.9.0 | License metadata; see JSON |
| doclayout_yolo | 0.0.4 | License metadata; see JSON |
| fast-langdetect | 0.2.5 | License metadata; see JSON |
| fasttext-predict | 0.9.2.4 | License metadata; see JSON |
| filelock | 4.1.2 | MIT |
| flatbuffers | 25.12.19 | License metadata; see JSON |
| fonttools | 4.67.0 | License metadata; see JSON |
| frozenlist | 1.6.0 | License metadata; see JSON |
| fsspec | 2026.9.0 | BSD-3-Clause |
| ftfy | 6.3.1 | License metadata; see JSON |
| grpclib | 0.4.8 | License metadata; see JSON |
| h11 | 0.16.0 | License metadata; see JSON |
| h2 | 4.2.0 | License metadata; see JSON |
| hf-xet | 1.7.0 | Apache-2.0 |
| hpack | 4.1.0 | License metadata; see JSON |
| httpcore | 1.0.9 | BSD-3-Clause |
| httpx | 0.28.1 | License metadata; see JSON |
| httpx-retries | 0.6.0 | License classifier; see JSON |
| huggingface_hub | 0.36.2 | License metadata; see JSON |
| hyperframe | 6.1.0 | License metadata; see JSON |
| idna | 3.20 | BSD-3-Clause |
| idna | 3.10 | License classifier; see JSON |
| ImageIO | 2.38.1 | BSD-2-Clause |
| Jinja2 | 3.1.6 | License classifier; see JSON |
| jiter | 0.17.0 | MIT |
| jmespath | 1.1.0 | License metadata; see JSON |
| json_repair | 0.64.0 | MIT |
| kiwisolver | 1.5.1 | License metadata; see JSON |
| lazy-loader | 0.6 | BSD-3-Clause |
| loguru | 0.7.3 | License classifier; see JSON |
| magika | 1.0.3 | License metadata; see JSON |
| MarkupSafe | 3.0.4 | BSD-3-Clause |
| matplotlib | 3.11.2 | License metadata; see JSON |
| mineru | 2.7.6 | License metadata; see JSON |
| mineru_vl_utils | 0.2.8 | Apache-2.0 |
| modelscope | 1.40.2 | Apache-2.0 |
| modelscope-hub | 0.4.6 | License metadata; see JSON |
| mpmath | 1.3.0 | License metadata; see JSON |
| multidict | 6.4.4 | License metadata; see JSON |
| networkx | 3.7 | BSD-3-Clause |
| numpy | 2.5.4 | BSD-3-Clause AND 0BSD AND MIT AND Zlib AND CC0-1.0 |
| nvidia-cublas | 13.1.1.3 | LicenseRef-NVIDIA-Proprietary |
| nvidia-cuda-cupti | 13.0.85 | License metadata; see JSON |
| nvidia-cuda-nvrtc | 13.0.88 | License metadata; see JSON |
| nvidia-cuda-runtime | 13.0.96 | LicenseRef-NVIDIA-Proprietary |
| nvidia-cudnn-cu13 | 9.24.0.43 | LicenseRef-NVIDIA-Proprietary |
| nvidia-cufft | 12.0.0.61 | License metadata; see JSON |
| nvidia-cufile | 1.15.1.6 | License metadata; see JSON |
| nvidia-curand | 10.4.0.35 | License metadata; see JSON |
| nvidia-cusolver | 12.0.4.66 | License metadata; see JSON |
| nvidia-cusparse | 12.6.3.3 | License metadata; see JSON |
| nvidia-cusparselt-cu13 | 0.8.1 | License metadata; see JSON |
| nvidia-ml-py | 13.615.71 | License metadata; see JSON |
| nvidia-nccl-cu13 | 2.30.7 | LicenseRef-NVIDIA-Proprietary |
| nvidia-nvjitlink | 13.4.92 | LicenseRef-NVIDIA-Proprietary |
| nvidia-nvshmem-cu13 | 3.4.5 | LicenseRef-NVIDIA-Proprietary |
| nvidia-nvtx | 13.0.85 | License metadata; see JSON |
| omegaconf | 2.4.0 | License classifier; see JSON |
| onnxruntime | 1.31.0 | License metadata; see JSON |
| openai | 2.54.0 | License metadata; see JSON |
| opencv-python | 5.0.0.93 | License metadata; see JSON |
| opencv-python-headless | 5.0.0.93 | License metadata; see JSON |
| packaging | 26.3 | Apache-2.0 OR BSD-2-Clause |
| pandas | 3.0.6 | License metadata; see JSON |
| pdfminer.six | 20260107 | MIT |
| pdftext | 0.7.1 | License metadata; see JSON |
| pillow | 12.3.0 | MIT-CMU |
| pip | 25.1.1 | License metadata; see JSON |
| polars | 2.0.0 | License metadata; see JSON |
| polars-runtime-32 | 2.0.0 | License classifier; see JSON |
| propcache | 0.3.1 | License metadata; see JSON |
| protobuf | 7.36.2 | License metadata; see JSON |
| protobuf | 6.31.1 | License metadata; see JSON |
| psutil | 7.2.2 | License metadata; see JSON |
| py-cpuinfo | 9.0.0 | License metadata; see JSON |
| pyclipper | 1.4.0 | License metadata; see JSON |
| pycparser | 3.11 | BSD-3-Clause |
| pydantic | 2.14.1 | MIT |
| pydantic-settings | 2.16.0 | MIT |
| pydantic_core | 2.50.1 | MIT |
| pyparsing | 3.3.3 | MIT |
| pypdf | 6.14.2 | BSD-3-Clause |
| pypdfium2 | 5.10.1 | License metadata; see JSON |
| python-dateutil | 2.9.0.post0 | License metadata; see JSON |
| python-dotenv | 1.2.4 | License metadata; see JSON |
| PyYAML | 6.0.3 | License metadata; see JSON |
| qwen-vl-utils | 0.0.14 | License metadata; see JSON |
| regex | 2026.9.29 | Apache-2.0 AND CNRI-Python |
| reportlab | 5.0.1 | License metadata; see JSON |
| requests | 2.34.2 | License metadata; see JSON |
| robust-downloader | 0.0.2 | License classifier; see JSON |
| s3transfer | 0.19.2 | License metadata; see JSON |
| safetensors | 0.8.0 | License classifier; see JSON |
| scikit-image | 0.26.0 | License metadata; see JSON |
| scipy | 1.18.1 | License metadata; see JSON |
| seaborn | 0.13.2 | License classifier; see JSON |
| setuptools | 84.0.0 | MIT |
| shapely | 2.2.0 | BSD-3-Clause |
| simsimd | 6.5.16 | License metadata; see JSON |
| six | 1.17.0 | License metadata; see JSON |
| sniffio | 1.3.1 | License metadata; see JSON |
| soupsieve | 3.0.3 | MIT |
| stringzilla | 5.2.0 | License metadata; see JSON |
| sympy | 1.14.0 | License metadata; see JSON |
| thop | 0.1.1-2209072238 | License metadata; see JSON |
| tifffile | 2026.9.20 | License metadata; see JSON |
| tokenizers | 0.22.2 | License classifier; see JSON |
| torch | 2.14.1 | Apache-2.0 AND Apache-2.0 WITH LLVM-exception AND BSD-2-Clause AND BSD-3-Clause AND BSL-1.0 AND MIT |
| torchvision | 0.29.1 | License metadata; see JSON |
| tqdm | 4.70.1 | License metadata; see JSON |
| transformers | 4.57.6 | License metadata; see JSON |
| triton | 3.8.0 | License metadata; see JSON |
| typing-inspection | 0.4.4 | MIT |
| typing_extensions | 4.16.0 | PSF-2.0 |
| typing_extensions | 4.13.2 | PSF-2.0 |
| ultralytics | 8.4.177 | License metadata; see JSON |
| ultralytics-platform | 0.1.86 | AGPL-3.0-only |
| ultralytics-thop | 2.2.2 | License metadata; see JSON |
| urllib3 | 2.8.0 | MIT |
| uv | 0.7.19 | License metadata; see JSON |
| wcwidth | 0.9.2 | License classifier; see JSON |
| wheel | 0.45.1 | License classifier; see JSON |
| yarl | 1.20.0 | License metadata; see JSON |

## Boundaries and follow-up

For a missing/ambiguous declaration, inspect that exact wheel and its listed license files, then the recorded upstream project URL/version; ask the package maintainer through the official repository if terms remain absent. Review native libraries bundled inside wheels, Debian package copyright files and actual model weight cards separately before asserting complete commercial compatibility. Do not silently label an absent SPDX field MIT, infer every model is covered by its parent repository, or substitute current master terms for a pinned release. Current Pageweft/MinerU source attribution remains intact.
