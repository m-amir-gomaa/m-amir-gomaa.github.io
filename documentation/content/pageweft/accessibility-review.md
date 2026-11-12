{
  "title": "Accessibility review — 16 October",
  "description": "The specific accessibility fix, test evidence and remaining acceptance limits.",
  "date": "2026-11-12",
  "weight": 140,
  "project": "Pageweft",
  "category": "Release record",
  "notice": "Dated release evidence. Feature availability and counts describe this milestone, not every later version. Start with the current usage guide. Current public preview supports verified email-first signup, mailed resets for verified addresses and existing private-key recovery. Processing may be temporarily unavailable; completed examples remain open. Google/GitHub sign-in and owner account linking have passed their recorded acceptance. Paid checkout is closed. Dated release records describe their own checkpoints. Reviewed source revision 30e8e34 is reserved for owner-authorized review; a source checkpoint does not establish deployment. This public edition is readable independently; public source samples have their own explicit licenses.",
  "sourceurl": "",
  "download": "markdown/pageweft/accessibility-review.md"
}

*Original record: Retained-document panel accessibility — 16 October 2026.*

The inspected-PDF list had an aria-label on an otherwise generic div. Its explicit region role now gives that existing label valid semantics. No job, file, quote, credit, payment or storage behavior changes.

All 78 existing tests passed. The existing Modal deployment succeeded in 4.110 seconds at its unchanged hostname. Runtime secrets, volumes, balances and disabled billing were preserved; no extraction, funded fixture or real purchase was run. Hosted narrow/desktop and automated WCAG checks are recorded in the supporting portfolio release milestone. Unrelated bytecode/book-workflow changes remain outside this commit.
