{
  "title": "Using the vanilla demo",
  "description": "Understand the separate browser-only demonstration and its storage boundary.",
  "date": "2026-10-16",
  "weight": 1,
  "project": "Noteweld Local",
  "category": "Start here",
  "download": "markdown/vanilla-keep/guide.md"
}

## Open the portfolio demo

[Open the bundled demo](/demos/keep/index.html) or launch it from the portfolio's vanilla JavaScript card. This is a separate implementation from Noteweld. It demonstrates native browser APIs rather than the professional Next.js application.

## Work in one browser

Try notes and checklists, pin/color/label controls, archive and trash. Storage belongs to this browser and website origin. It does not create a cloud account, synchronize devices or inherit Noteweld's editor/graph features.

Use a disposable test note when exploring the demo. Browser data clearing, private browsing, storage limits or a different origin can affect persistence. Keep important content outside a portfolio demonstration.

## Save, search and recover

Use either search field to find titles, bodies, labels or checklist text. Create a text note or checklist; labels imported in a JSON backup are available in navigation immediately. Use the edit button or open a card; Escape saves and returns focus.

Export a JSON backup before clearing browser storage. Imports validate the file and merge without replacing existing note IDs. When a save fails, the app shows an error and retains an open draft for retry. Malformed existing data opens a recovery screen with a raw JSON download instead of reseeding the database.

Archive keeps a note available for later. Delete from Archive moves it to Trash. Restore recovers it; Delete forever and Empty Trash ask for confirmation. There is no automatic seven-day deletion.

## Release boundary

The published portfolio bundle is refreshed from the same production build as the standalone demo. The source release records 14 unit tests, 22 Chromium journeys, four viewport widths and no automated WCAG A/AA findings on the tested seeded screens. These checks do not certify every browser or replace usability testing.

Reminders and inactive settings controls are omitted. The professional Noteweld editor, Vim mode, graph, cloud accounts and payments are separate. [Read the implementation guide](/manuals/vanilla-keep/overview/) and [release history](/manuals/vanilla-keep/build-history/) for the exact boundary.
