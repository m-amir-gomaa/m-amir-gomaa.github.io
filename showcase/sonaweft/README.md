# Sonaweft: a selected production-code sample

These MIT-licensed components come byte-for-byte from application revision
`00522f212d686ee813f4d0275c34d7c7db48ccef`. `provenance.json` records each
original file's SHA-256. The package initializer and bundle tests were added
for this standalone sample under the same MIT license.

The code validates bounded timestamped transcripts, gives segments stable IDs,
checks that advisory review quotes occur in the original segment, and exports
original/corrected Markdown, JSON, SRT and WebVTT with a hash manifest.
Speaker labels are user annotations, not inferred identities. Corrections do
not overwrite the original recognition output. Hashes detect byte changes;
they are not signatures or proof that a transcript is true.

Run from this directory with Python 3.10 or later:

```sh
python3 -m unittest discover -s tests -v
```

Only the Python standard library is needed. The sample makes no network calls,
loads no models and needs no provider accounts. It includes no hosted account,
billing or deployment implementation, private recordings or credentials.
Read `LICENSE` for the complete MIT grant and retained attribution. This sample's
license does not grant rights in unrelated portfolio assets or commercial code.

Try [the completed recording example](https://sonaweft.amirgomaa.com/example),
then read [the implementation manual](https://amirgomaa.com/manuals/sonaweft/).
