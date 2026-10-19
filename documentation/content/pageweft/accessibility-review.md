{
  "title": "Accessibility review — 16 October",
  "description": "The specific accessibility fix, test evidence and remaining acceptance limits.",
  "date": "2026-10-19",
  "weight": 140,
  "project": "Pageweft",
  "category": "Release record",
  "notice": "Dated release evidence. Feature availability and counts describe this milestone, not every later version. Start with the current usage guide. Current source workflows, accounts and diagnostic behavior are recorded in the latest source-workflow release. Billing and real OAuth consent remain gated; earlier records describe their dated milestones. Source revision d35780b is retained for the owner; anonymous repository access is unavailable. This reviewed public edition is readable independently.",
  "sourceurl": "",
  "download": "markdown/pageweft/accessibility-review.md"
}

*Original record: Retained-document panel accessibility — 16 October 2026.*

The inspected-PDF list had an aria-label on an otherwise generic div. Its explicit region role now gives that existing label valid semantics. No job, file, quote, credit, payment or storage behavior changes.

All 78 existing tests passed. The existing Modal deployment succeeded in 4.110 seconds at its unchanged hostname. Runtime secrets, volumes, balances and disabled billing were preserved; no extraction, funded fixture or real purchase was run. Hosted narrow/desktop and automated WCAG checks are recorded in the supporting portfolio release milestone. Unrelated bytecode/book-workflow changes remain outside this commit.
