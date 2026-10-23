# Original sample provenance

`document.pdf`, `field-notes.md` and `field-notes.zip` are exact copies of the original public fixture in `../pageweft/static/examples/` (current exporter revision `ae159f7`; refreshed 19 October 2026). The PDF was authored for demonstration by `scripts/build_public_example.py`; the Markdown and ZIP were produced by the actual CPU text extractor and exporter. All observations are invented. No private books, customer files or extracted third-party content are included.

`page-1.png` through `page-3.png` are actual raster excerpts from that PDF, generated using Poppler:

```sh
pdftoppm -r 120 -x 60 -y 60 -W 900 -H 260 -png document.pdf page
```

The preview preserves source-page links and raw exported text. It does not execute conversion, use Modal, demonstrate MinerU/OCR fidelity or imply that images/formulas were extracted in this example. Full source pages remain available in the PDF; the ZIP includes the exporter manifest and original source. Keep the three source files synchronized from a newly verified public original fixture when updating this example.
