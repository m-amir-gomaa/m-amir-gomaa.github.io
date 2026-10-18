# Dependencies and licensing

> The free sample is bounded to one selected page and available quota. Paid processing remains closed pending Paddle approval and real payment verification. Historical prices and provider comparisons are dated evidence.

Source baseline: https://github.com/m-amir-gomaa/PDF2Markdown-/blob/5eb782582e61d7e238cc4472f85362a9bd431427/docs/THIRD-PARTY.md
Reviewed: 2026-10-18

Verified 14 October 2026. The extraction worker installs the official PyPI release `mineru[pipeline]==2.7.6` and invokes its CLI without patching it. Official source release: [mineru-2.7.6-released](https://github.com/opendatalab/MinerU/tree/mineru-2.7.6-released), commit `e31c0ec34da89f6d7db78866ffec13eb0aaa3a3c`. That release's [LICENSE.md](https://github.com/opendatalab/MinerU/blob/e31c0ec34da89f6d7db78866ffec13eb0aaa3a3c/LICENSE.md) is GNU Affero General Public License version 3. Current master licensing must not be substituted for the pinned release's terms.

MinerU attribution and the exact upstream source link are visible in the UI and README. Pageweft's application source is published in its existing public repository. This note does not relicense the owner's wrapper or certify that subprocess separation resolves every license boundary. Any engine/model changes need their own exact-release source and license review. A complete transitive dependency/model license inventory has not been produced; package version pinning alone does not establish it.

Owner inspection of the actual deployed model-cache volume on 14 October 2026 found `opendatalab/PDF-Extract-Kit-1.0`, snapshot `ed6b654c018d742e65a17671e379c5e6ecc87ec9`. The [model card at that exact cached revision](https://huggingface.co/opendatalab/PDF-Extract-Kit-1.0/raw/ed6b654c018d742e65a17671e379c5e6ecc87ec9/README.md) was fetched successfully and declares AGPL-3.0. No new weights were downloaded to perform this inspection. Repository-level licensing and an observed cache revision do not certify every bundled model/dependency or force future remote fetches to remain pinned; that inventory and reproducibility check remain in the launch register.
