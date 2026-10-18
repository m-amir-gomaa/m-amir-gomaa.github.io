{
  "title": "Running the queue simulation",
  "description": "Go setup, API endpoints, bounded concurrency, shutdown and production boundaries.",
  "date": "2026-10-18",
  "weight": 30,
  "project": "Batchlark",
  "category": "Reference",
  "notice": "Formerly Queue Lab/Hermes. This is an in-memory simulation and retained systems study, not a production queue or commercial product. A replacement remains under discussion; published Git history has not been rewritten.",
  "sourceurl": "https://github.com/m-amir-gomaa/portfolio-hermes/blob/bed2cb3131a79aa2519e1a38e9a7f26ddc640bf7/README.md",
  "download": "markdown/queue-lab/overview.md"
}

Status: retained engineering exercise; a practical replacement is being evaluated. This is the former Queue Lab/Hermes implementation. A worker pool alone is not a differentiated service, and this project is not presented as a paid SaaS or production queue.

## What is implemented

- Fifty fixed Go workers and a bounded 10,000-task queue.
- Whole-batch admission with HTTP 429/Retry-After under pressure.
- Strict JSON/body/count validation, bounded retained batches and event subscribers.
- JSON metrics, batch status and server-sent progress events; slow consumers disconnect.
- Graceful shutdown drains accepted simulated work.
- A browser dashboard with bounded recent events and polling recovery.

Tasks simulate a 50 ms delay. No webhook, LLM, scientific computation or paid customer work is performed. State is in memory and disappears on restart. The simulation is useful for studying concurrency mechanics, not evidence of durable delivery or production throughput.

## Run and inspect

Go 1.26.4 or newer; the local review used Go 1.26.5. The active application now has no third-party Go modules.

```sh
go test -race ./...
go vet ./...
go build -o /tmp/batchlark .
PORT=8080 /tmp/batchlark
# Open http://localhost:8080 from this directory.
```

The server defaults to loopback. Set `HOST=0.0.0.0` explicitly only in an appropriate container/server environment. It is not newly hosted by this cleanup. The Docker recipe is retained and renamed, but Docker was unavailable for execution during this review; a recipe is not a tested image.

| Endpoint | Behavior |
|---|---|
| `POST /api/v1/dispatch` | Accept a count from 1 to 10,000 and return the batch identity |
| `GET /api/v1/batches/{id}` | Read retained batch progress |
| `GET /api/v1/metrics` | Read shared simulation metrics |
| `GET /api/v1/stream` | Observe simulated task completions |
| `GET /healthz` | Read server health |

## Cleanup and history

The existing uncommitted reliability fixes were preserved in a private full working-tree/Git backup and checkpoint `ce80475` before this cleanup. Unused RAG/OpenAI scaffolding was removed from the active tree and retained in the private archive and original Git history; the unused SDK requirement and lock data were removed. The compiled executable remains generated and ignored.

Canonical local directory is `freelance/batchlark`; `freelance/queue-lab` remains a compatibility link. Existing public repository identity is still `m-amir-gomaa/portfolio-hermes`; renaming/replacing that repository and rewriting its published history are separate from application branding. No force-push, backdated commit or destruction of the old history has occurred.

The user is considering a focused science/bioinformatics application using Go. That replacement has not been selected or implemented. Existing Asynq/River/Temporal/Modal job systems are preferable to turning this simulated pool into another generic queue product.

## Actual startup regression found during cleanup

Launching the full server exposed a ServeMux conflict between the broad method-qualified root and the method-unqualified dispatch path. Handler unit tests had not constructed the real router. The root now uses exact `GET /{$}` matching; the actual router is constructed in a regression test that exercises home, health, metrics, dispatch, wrong method and missing path. After correction, actual local health, batch admission and five completed tasks passed. Browser acceptance is recorded separately after execution.
