{
  "title": "Using Batchlark",
  "description": "Run the Go demonstration and understand what its events represent.",
  "date": "2026-10-16",
  "weight": 1,
  "project": "Batchlark",
  "category": "Start here",
  "download": "markdown/queue-lab/guide.md"
}

## What you are observing

Batchlark is the retained concurrency study formerly called Queue Lab/Hermes. It is not a differentiated service; a practical science-oriented replacement is being evaluated. Its dashboard represents simulated 50 ms work, not real email, webhook or language-model deliveries. It retains state in memory and resets on restart.

## Run it locally

Follow the tested source setup in the [implementation notes](/manuals/queue-lab/overview/). The served application uses Go and opens a dashboard on port 8080 by default. No API key or database is needed.

Submit a small batch and watch progress, bounded workers and server-sent events. Atomic admission rejects a batch that cannot fit rather than silently accepting part of it. Slow event readers are disconnected and can recover progress through polling.

## Read the API and boundaries

The implementation reference lists dispatch, batch status, metrics, event stream and health endpoints, together with the race-test/vet/build commands. Production delivery would additionally need durable jobs, authentication, safe destinations, retries and idempotency. Those features and a separately hosted production backend are not claimed by the portfolio illustration.
