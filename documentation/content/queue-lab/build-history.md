{
  "title": "Batchlark: the retained study and replacement decision",
  "description": "Why the old generic queue stopped expanding, what was preserved and how history can be cleaned safely.",
  "date": "2026-10-16",
  "weight": 2,
  "project": "Batchlark",
  "category": "Build history",
  "notice": "This reconstructs the project from surviving commits and recorded release evidence. It is not a verbatim terminal transcript. Historical results are dated; commands requiring private configuration are not a fresh self-service deployment guarantee.",
  "download": "markdown/queue-lab/build-history.md"
}

## The actual starting point

The old repository mixed early RAG scaffolding with a later webhook/concurrency demonstration. Surviving original history is:

| Commit | Actual historical purpose |
|---|---|
| `431b89e` | Initial project |
| `01e0a92` | Render binding/missing-key repair |
| `acb9d80` | Rewrite toward a webhook dispatcher UI |
| `52b6258` | SSE and unit-test work |

The later reviewed working tree had already repaired bounded admission, worker accounting, shutdown and slow-stream behavior, while making clear that task delivery was simulated. It was preserved as checkpoint `ce80475` before this cleanup. That checkpoint records pre-existing work, not newly invented development.

## Cleanup performed on 16 October

The application/library/local directory were renamed **Batchlark**. `queue-lab` remains a compatibility link. Unused RAG modules were archived privately and removed from the active module along with the OpenAI dependency. The generated executable is ignored. Local binding defaults to loopback; container binding is explicit.

The cleanup source is [3337ef8](https://github.com/m-amir-gomaa/portfolio-hermes/tree/3337ef8). This is a retained engineering study, not a paid SaaS, production dispatcher or new hosted service. The old public repository URL remains a legacy identity pending the replacement decision.

## Successful checks

```sh
go test -race ./...
go vet ./...
go build -o /tmp/batchlark .
```

The local review used Go 1.26.5. The active served module has no third-party dependency. Docker was unavailable for executing the retained recipe; no image or cloud deployment is claimed.

## Why stop expanding it

A bounded pool is a useful mechanism to understand, but by itself offers little practical differentiation. Existing Asynq/Asynqmon, River, Temporal and Modal job processing already cover real queue/workflow use cases. Adding a name or simulated dashboard does not establish a product.

An extra observatory expansion was started, then parked after the user challenged the purpose. The prior working baseline was restored before cleanup. The unused expansion is not presented as shipped behavior. A science-oriented Go replacement remains a proposal; no biology/AI feature is claimed here.

## Git recovery and a truthful new record

A private full working-tree/Git backup and verified full-history bundle preserve the old record. A local `proposal/batchlark-clean-history` branch contains a one-commit root with the same reviewed study tree. Its timestamp is the actual creation time; nothing was backdated. It was not force-pushed over published history.

If a genuinely new science application is selected, a fresh repository with a real initial implementation is the clearest starting point. The old study can remain archived instead of carrying unrelated RAG/webhook history into a new product. If this same repository is retained, choose the exact retained baseline and update affected source links before a reviewed history replacement. Deleting ancestry alone does not rename a repository or erase copies held elsewhere.

## Actual startup failure found after the initial cleanup

A real local launch exposed a Go ServeMux conflict between the broad `GET /` root and method-unqualified `/api/v1/dispatch`. Existing handler tests had never constructed the full router. The correction uses exact `GET /{$}` root matching and a shared router constructor. A regression test constructs that actual router and checks home, health, metrics, dispatch, wrong method and missing path.

Race tests, vet and the build then passed; an actual local server admitted and completed five tasks. This is why compilation and handler tests alone were insufficient evidence of a working application. The corrected source is [the startup-fix revision](https://github.com/m-amir-gomaa/portfolio-hermes/tree/bed2cb3131a79aa2519e1a38e9a7f26ddc640bf7). The proposed science replacement still requires approval; this fix does not implement it.

Actual Chromium checks also passed at 320/390/768/1440: renamed UI, a submitted five-task batch, completed progress and no page errors/overflow. [Source CI 38887493535](https://github.com/m-amir-gomaa/portfolio-hermes/actions/runs/38887493535) passed for `bed2cb3`. No new hosted Go service or replacement application is implied.
