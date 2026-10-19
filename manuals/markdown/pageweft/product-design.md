# Conversion product design

> Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Source revision d35780b is retained for the owner; anonymous repository access is unavailable. This reviewed public edition is readable independently.

Source baseline: Owner-access repository, revision d35780b9038e6ead15c260965ff53f20e79c6315
Reviewed: 2026-10-19

## Implementation update

The approved core features are now implemented: full-book/range inspection (bounded at 64 MiB/1,000 pages), batch inspection, quotes, bounded section processing, selective retries/force OCR, source-linked review, corrections/history, portable outputs and prepaid-credit accounting. Read BOOK-RELEASE.md for tested evidence and limits. Earlier candidate language below describes the design rationale. Actual merchant activation and comparative difficult-document fidelity remain unverified; these features do not certify every source symbol.

## Pageweft: conversion utility

User clarification, 14 October 2026: PDF-to-Markdown for serious work with books, including Linguavell preparation. Users control the downstream reading/LLM workflow. No study platform, AI chat, automatically generated teaching materials or decorative feature expansion.

## Product hypothesis

Turn difficult books and technical PDFs into portable, source-traceable Markdown with less manual repair and predictable processing costs. Modal is infrastructure; MinerU is a selected engine. Customers buy the result and saved setup/repair time, not the provider combination.

Strongest initial cohort: repeated book/PDF conversion users who want plain files for their own editor, scripts or LLM. Students/scientists are qualified by this concrete need, not by profession or document volume alone. An occasional converter may reasonably reject a monthly subscription; validate actual return usage rather than assuming continuing demand.

## Existing verified foundation

- Owner-hosted pinned MinerU 2.7.6 with private CLI worker; no customer Modal credentials.
- One-selected-page bounded public trial after book inspection; per-session/IP quotas and global admission controls. These are not a provider-wide invoice limit.
- Persistent serialized job/quota ledger, duplicate-request suppression and session-owned downloads.
- Markdown/images, original PDF, available source block/page metadata and navigation, detectable replacement glyph and missing-image report.
- Real public synthetic PDF upload → conversion → ZIP download passed. This does not establish book fidelity, rendered Markdown compatibility across editors, medical accuracy or complete coverage for every PDF page.
- Current pricing uses one-time $5/$10 processing packs without recurring access fees; transactional credit accounting is implemented. Actual seller activation and payment delivery remain unverified. The former monthly access model is superseded.

## Original design rationale (core now implemented; evidence in BOOK-RELEASE.md)

1. **Book handling:** accept suitably bounded full books; allow selected PDF pages/ranges; split work into bounded sections; join output without losing images or order; preserve original PDF page references. Retries must rerun only failed selected work. The current public trial and disabled 50-page paid draft do not satisfy this requirement.
2. **Fidelity:** evaluate reading order, headings, paragraphs, hyphenation, footnotes, tables, formulas and specialized Unicode/IPA against rendered source pages. Flag detectable defects separately from unchecked correctness; do not silently guess or paraphrase the source.
3. **Portable files:** standard Markdown plus documented extensions when needed, relative local image paths, one-document or section exports, optional PDF-page links. Reprocessing must not change unaffected filenames or introduce duplicate pages. Keep raw engine output separate from optional normalization.
4. **Review and repair:** show reported defects and the relevant source page; preserve the user's edits. Allow selected-page re-extraction with visible price and changes. No promise of automatic perfect error detection or universally accurate OCR.
5. **Predictable cost:** show a bounded quote before confirmation; reserve processing funds transactionally; settle measured/defined tariff costs; release unused funds; handle failed jobs according to disclosed rules; prevent duplicate debits/dispatch. Subscription access and compute balance are separate gates.
6. **Cost-aware extraction:** evaluate reliable text-layer extraction before spending GPU time, then OCR where justified. Must demonstrate preserved structure/symbols on the benchmark before becoming a default. Using a cheaper route is not itself a quality improvement. Engine alternatives are benchmark candidates, not automatic new dependencies or migrations.

These are proposed improvements consistent with the user's direction, not approved novelty claims or completed features. Each must justify saved setup or correction time. Integration means portable outputs usable in the user's own tools; it does not require proprietary Obsidian/AI plugins.

## Benchmark before differentiation claims

Use permission-cleared documents covering a clean digital textbook, scanned/older print, multi-column paper, mathematical tables/formulas, phonetic symbols and long-book section boundaries. Keep private source books private; use original synthetic/openly licensed samples for public demonstrations and third-party uploads only where permitted.

For each: exact engine/version/options; selected pages; byte/page counts; output integrity; missing/duplicated sections; significant symbol/numeric errors; broken image references; reading-order failures; human correction minutes per sampled page; elapsed time and actual billed cost. Errors without U+FFFD remain possible. A source-map page count is not proof that all source content survived.

Compare the same documents/tasks with native MinerU output and appropriate existing converters. Provider capability descriptions establish candidate baselines, not local victories. Choose differentiation only when observed: lower total cleanup time, less setup, clearer price, or a better supported difficult-document profile. No need to invent a feature that no other tool has; measurable utility is the commercial test.

Commercial experiment: 20 qualified testers, at least 5 actual paying users and 3 second-month returns are initial decision checkpoints, not market-size estimates. Keep larger development/paid acquisition proportional to evidence. At $1/month, assess net contribution and owner support time; popularity alone is insufficient.
