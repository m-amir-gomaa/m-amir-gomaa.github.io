The [Carrier Relay API source](https://github.com/m-amir-gomaa/carrier-relay-api)
explores three failure boundaries in a TypeScript backend: a carrier that does
not answer, two callers booking the same shipment, and a webhook delivered more
than once. It uses NestJS, Prisma and PostgreSQL. ALPHA, BRAVO and CHARLIE are
simulated carrier adapters; this is a backend demonstration, not a live shipping
service or a claim of production carrier access.

## Return the quotes that arrived

The aggregator calls all three adapters concurrently with `Promise.allSettled`.
Each request has a bounded timeout and cancellation signal. One rejected or
timed-out adapter therefore does not discard successful quotes from the others.
The response keeps partial failures explicit and ranks successful prices
deterministically. The caller can distinguish a usable partial result from
complete carrier failure.

## Let one booking win

A shipment carries a version and a booking state. Inside a Prisma interactive
database transaction, the booking writer uses a conditional update matching the
shipment ID, the caller's expected version and the `QUOTED` state. The successful
write advances both version and state. A competing or stale caller updates zero
rows and receives a conflict instead of creating a second booking.

The database predicate is the concurrency boundary. A preliminary read alone
would leave a gap in which two requests could both observe an unbooked shipment.

## Authenticate the event, then deduplicate it

Webhook verification covers the timestamp and the exact raw request bytes with
HMAC-SHA256 and a constant-time signature comparison. Reconstructing JSON after
parsing would change the signed representation. A signature establishes who
holds the shared secret; it does not make an event new.

A provider-scoped idempotency key has a database uniqueness constraint. The
handler records the event and applies its shipment transition transactionally,
so an at-least-once retry can be acknowledged without repeating the transition.
Conflicting state changes remain explicit rather than silently overwriting a
newer shipment state.

## Review the boundaries

The repository includes JWT-protected management routes, Swagger/OpenAPI,
validated payloads, structured request logs and reproducible setup. The clean
local run passed **30 tests: 16 unit and 14 real PostgreSQL/Supertest integration
cases**. These include simultaneous booking requests and eight concurrent
webhook replays. The same source passed [GitHub CI](https://github.com/m-amir-gomaa/carrier-relay-api/actions/runs/43605475866).

Those checks establish local and CI behavior with simulated carriers. They do
not establish a hosted deployment, live-carrier acceptance or production
performance.
