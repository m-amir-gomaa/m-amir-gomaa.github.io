{
  "title": "Running the queue simulation",
  "description": "Go setup, API endpoints, bounded concurrency, shutdown and production boundaries.",
  "date": "2026-10-16",
  "weight": 30,
  "project": "Queue Lab",
  "category": "Reference",
  "notice": "Queue Lab is the portfolio name; Hermes remains the source repository/internal name. Delivery is simulated, state is in memory and no separate public production backend is established. This reviewed documentation snapshot includes local documentation edits; the source link shows the committed baseline.",
  "sourceurl": "https://github.com/m-amir-gomaa/portfolio-hermes/blob/52b6258c146cce8815880560b03925272eae3981/README.md",
  "download": "markdown/queue-lab/overview.md"
}

A Go concurrency demo with a browser dashboard. Submit a batch, watch bounded workers process it, and inspect progress through JSON endpoints and Server-Sent Events.

**Deliveries are simulated with a 50 ms task.** The running server makes no outbound webhook or LLM requests. State is in memory and resets on restart. Experimental RAG modules under `internal/` are not connected to this application.

## What the demo demonstrates

- 50 fixed workers consuming a bounded queue of 10,000 tasks, without a goroutine per queued task.
- Atomic batch admission: accept the whole batch or return HTTP 429 with `Retry-After`.
- Strict JSON validation, a 4 KiB body limit, and counts between 1 and 10,000.
- Batch IDs and progress snapshots; at most 100 retained batches, evicting completed batches when needed.
- Nonblocking SSE fan-out with heartbeats and request cancellation. Slow readers disconnect rather than stall workers; reconnecting clients recover progress through polling.
- Graceful shutdown that drains accepted jobs.
- A responsive dashboard with metrics, batch progress, measured completion rate, and a bounded event log.

## Run

Use Go 1.26.4 or newer. From this directory:

```sh
go run main.go
# Open http://localhost:8080
```

`PORT` defaults to `8080`. No API keys or database are needed.

```sh
docker build -t hermes-demo .
docker run --rm -p 8080:8080 hermes-demo
```

## API

| Endpoint | Behavior |
|---|---|
| `POST /api/v1/dispatch` | Accept `{ "count": 100 }`; return HTTP 202 with `batchId` and `total` |
| `GET /api/v1/batches/{id}` | Return batch status, active and completed counts |
| `GET /api/v1/metrics` | Return worker, queue, and completion statistics |
| `GET /api/v1/stream` | Stream simulated delivery events over SSE |
| `GET /healthz` | Return an HTTP 200 health response |

```sh
curl -X POST http://localhost:8080/api/v1/dispatch \
  -H 'Content-Type: application/json' -d '{"count":100}'
```

## Validation

```sh
go test -race .
go vet .
go build -o /tmp/hermes .
```

Tests cover exact batch admission, invalid bodies, queue pressure, bounded concurrency, shutdown draining, slow clients, cancelled streams, progress, and method restrictions. The explicit file commands test the served application independently of the unused experimental modules.

## Next production milestone

Real webhook delivery needs a persistent job store, authenticated access, destination restrictions, delivery timeouts, retry policy, idempotency, and failure inspection. Those capabilities are not claimed by this demo. There is no measured throughput benchmark yet.

## Experimental code and packaging

`internal/` is retained pending the questionnaire decision about RAG scope. It uses the Go OpenAI SDK declared in `go.mod`; it is not used by `main.go` or included in the Docker image. Consequently this repository as a whole is not dependency-free, even though the served simulation uses only the standard library. Its compiled executable is generated and should be rebuilt, not committed. Docker and hosted CI have not been executed during the local cleanup.
