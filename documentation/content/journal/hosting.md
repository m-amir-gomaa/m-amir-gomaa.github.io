{
  "title": "Why these previews run on Modal",
  "description": "CPU web hosting, on-demand workers and the costs that remain after compute stops.",
  "date": "2026-10-16",
  "weight": 1,
  "category": "Architecture",
  "project": "Ecosystem",
  "download": "markdown/journal/hosting.md"
}

## More than a GPU rental

Modal runs application containers on CPU as well as GPU resources. It supports HTTP applications, background functions, schedules, persistent volumes and secrets. An HTTP server can be Python/FastAPI or a Node process; the deployment wrapper does not require every application to be written in Python.

Official references: [HTTP applications](https://modal.com/docs/guide/webhooks), [autoscaling](https://modal.com/docs/guide/scale), [persistent volumes](https://modal.com/docs/guide/volumes) and [secrets](https://modal.com/docs/guide/secrets). Checked on 16 October 2026; provider policies and prices can change.

## The current deployment

| Component | Hosting | Persistent state |
|---|---|---|
| Portfolio, vanilla demo and this Hugo library | GitHub Pages | Static versioned files; vanilla demo uses browser storage |
| Pageweft web/API and extraction jobs | Modal CPU containers and A10G workers | Separate document and serialized SQLite ledger volumes |
| Sonaweft web/API, speech and review coordination | Modal CPU containers and L4 workers | Separate media, model-cache and serialized SQLite ledger volumes |
| Noteweld web/API | Modal Node/Next.js CPU container | Isolated Neon PostgreSQL; encrypted backups in Modal |
| Queue Lab | Local Go demonstration | In-memory state; no separately verified public production backend |

Paddle handles commercial payments rather than hosting these websites. DeepSeek is an optional text-inference provider for Sonaweft. No shared customer wallet or login is implemented. Linguavell is a separate startup project.

## Why this choice fits the previews

Pageweft already had working MinerU execution on Modal. Reusing that provider allowed a small CPU web process to dispatch bounded expensive extraction separately. Sonaweft fits the same pattern with speech workers. Noteweld can run as a standard Node server, retaining portable PostgreSQL access rather than requiring another web-host account.

Containers can shut down after inactivity. The laptop is only a development/deployment client and does not need to remain online for the hosted applications to work. The Hugo blog is static and adds no application server or paid API.

## The tradeoffs

A request after inactivity can wait for a cold start. Keeping containers warm improves responsiveness but increases cost. Retained files, cached models, scheduled cleanup, database storage, backups and network usage can still consume resources when no customer job runs. Scale-to-zero compute is not a universal zero-bill promise.

Current container/concurrency caps deliberately constrain the previews. They are not a measured promise for thousands of simultaneous users. Internal admission allowances are distinct from a provider-wide spending limit. External automatic alerts and a saved global hard spending cap are not established by these releases.

## Portability and review

Noteweld uses a Node application and standard PostgreSQL driver; it can move to another suitable container/PostgreSQL host with configuration and deployment work. The Python applications keep processing logic separate from Modal wrappers, but function dispatch, volumes and scheduling are real provider dependencies. Migration would require replacing those integrations and validating storage/ledger semantics.

The current arrangement is an economical starting point to measure. Actual invoices, customer workload and cold-start tolerance should guide later hosting changes. It does not establish that Modal will be the cheapest host at every future traffic level.
