# Public examples and commercial source

Reviewed: 2026-10-19

## Inspect the work

The public portfolio combines working applications, implementation manuals,
release records and deliberately selected source examples. Production source
access is reserved for owner-authorized review. This describes the publication
policy; it is not proof of a repository's current GitHub visibility setting.

| Project | Public evidence | Source and licensing boundary |
| --- | --- | --- |
| Noteweld | [Editor](https://noteweld.amirgomaa.com/example), [graph](https://noteweld.amirgomaa.com/example/graph), [implementation](/manuals/noteweld/overview/) | Original application material is reserved; third-party software and asset terms remain in force. |
| Pageweft | [Converter](https://pageweft.amirgomaa.com/), [implementation](/manuals/pageweft/overview/), original sample in the portfolio | Original application rights and upstream engine/model licenses are separate; MinerU review remains a release gate. |
| Sonaweft | [Recording example](https://sonaweft.amirgomaa.com/example), [implementation](/manuals/sonaweft/overview/), selected MIT code below | The existing application edition remains MIT. Source privacy does not revoke earlier grants; future private modules need explicit terms. |
| Noteweld Local | [Interactive demo](/demos/keep/), [public JavaScript source](https://github.com/m-amir-gomaa/Keep), [manual](/manuals/vanilla-keep/) | Remains public; its existing package declares ISC. Asset ownership is separate. |

## A runnable Sonaweft excerpt

[Open the selected source and its MIT license](https://github.com/m-amir-gomaa/m-amir-gomaa.github.io/tree/main/showcase/sonaweft).
The transcript contract and subtitle renderer are copied unchanged from
`00522f212d686ee813f4d0275c34d7c7db48ccef`, with per-file hashes in
`provenance.json`. This is an actual application excerpt, independently runnable
using the Python standard library. Additional standalone tests check original
preservation, quote validation, malformed timing, annotation ownership and
the manifest's exported-file hashes.

```sh
git clone https://github.com/m-amir-gomaa/m-amir-gomaa.github.io.git
cd m-amir-gomaa.github.io/showcase/sonaweft
python3 -m unittest discover -s tests -v
```

It demonstrates a specific engineering boundary: original machine recognition,
user corrections and advisory AI notes remain distinct. The manifest checks
byte integrity, not factual correctness or authenticity.

## Production review and dependency obligations

For a focused source walkthrough, [contact Mohamed](mailto:mo.gomaa.formal@gmail.com)
with the area you want to inspect. Authorized review can cover the relevant
implementation and test evidence without exposing unrelated private data or
provider credentials. Public documents retain source revisions even when their
original source and CI records need repository access. A dated CI result is
recorded evidence, not a claim that its log remains anonymously accessible.

Sonaweft's MIT baseline and any previously distributed copies keep their
permissions. Pageweft invokes the unmodified pinned MinerU CLI, but process
separation alone is not a licensing clearance. The exact engine/model terms and
remaining review are in [Pageweft dependencies](/manuals/pageweft/dependencies/).
No proprietary notice overrides applicable source-disclosure obligations.

The portfolio, Fieldnotes, Noteweld Local and this selected sample remain public.
The sample's MIT license applies to its directory; it does not license every
website asset or unrelated application.

Browsers still receive the HTML, CSS and JavaScript used by a web interface.
Private repository access protects the full source tree and private server
implementation; it cannot make delivered frontend code invisible. Provider
credentials and access-control decisions must stay on the server.
