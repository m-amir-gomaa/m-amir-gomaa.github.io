# Dependencies and licensing

> Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Source revision d35780b is retained for the owner; anonymous repository access is unavailable. This reviewed public edition is readable independently.

Source baseline: Owner-access repository, revision d35780b9038e6ead15c260965ff53f20e79c6315
Reviewed: 2026-10-19

> 19 October: exact current web/MinerU Python package versions, declared license metadata and wheel license-file hashes are now recorded in [image inventory](/manuals/pageweft/image-inventory/). This replaces the older “no inventory” statement only for the Python distribution layer; bundled native/system libraries, complete model terms and compatibility still require the stated review. No licensing conclusion is inferred from metadata.

## Third-party source notes

Verified 14 October 2026. The extraction worker installs the official PyPI release `mineru[pipeline]==2.7.6` and invokes its CLI without patching it. Official source release: [mineru-2.7.6-released](https://github.com/opendatalab/MinerU/tree/mineru-2.7.6-released), commit `e31c0ec34da89f6d7db78866ffec13eb0aaa3a3c`. That release's [LICENSE.md](https://github.com/opendatalab/MinerU/blob/e31c0ec34da89f6d7db78866ffec13eb0aaa3a3c/LICENSE.md) is GNU Affero General Public License version 3. Current master licensing must not be substituted for the pinned release's terms.

MinerU attribution and the exact upstream source link are visible in the UI and README. Pageweft's application source is maintained in its existing repository; anonymous GitHub access returned 404 on 19 October 2026, so public availability is not claimed. The official pinned MinerU source remains linked directly. This note does not relicense the owner's wrapper or certify that subprocess separation resolves every license boundary. Any engine/model changes need their own exact-release source and license review. A complete transitive dependency/model license inventory has not been produced; package version pinning alone does not establish it.

Owner inspection of the actual deployed model-cache volume on 14 October 2026 found `opendatalab/PDF-Extract-Kit-1.0`, snapshot `ed6b654c018d742e65a17671e379c5e6ecc87ec9`. The [model card at that exact cached revision](https://huggingface.co/opendatalab/PDF-Extract-Kit-1.0/raw/ed6b654c018d742e65a17671e379c5e6ecc87ec9/README.md) was fetched successfully and declares AGPL-3.0. No new weights were downloaded to perform this inspection. Repository-level licensing and an observed cache revision do not certify every bundled model/dependency or force future remote fetches to remain pinned; that inventory and reproducibility check remain in the launch register.
