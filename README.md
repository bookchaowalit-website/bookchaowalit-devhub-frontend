# DevHub

An API developer portal for the bookchaowalit portfolio — a catalog and
live browser-based playground for the [MCP](https://modelcontextprotocol.io)
servers exposed by 5 sibling projects (Portfolio, Tech Blog, Art Blog,
Tech Space, MCP List Hub).

See [`PRODUCT.md`](./PRODUCT.md) for the interview case study — including
the headline finding of this pass: the Playground's core feature (testing
APIs live from the browser) was broken for all 5 listed APIs due to
missing CORS headers on the target endpoints, fixed across this repo and
the 4 sibling repos it depends on.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
src/app/
├── page.tsx           # homepage: API catalog, stats, feature grid
├── apis/[id]/          # per-API detail page (endpoints, descriptions)
├── playground/          # live browser-based MCP request tester
├── docs/                 # documentation
└── more-projects/        # directory of sibling bookchaowalit-* products
```

## Status

Live functionality, generic metadata — the README and page title never
left `create-next-app` defaults despite real routes existing underneath.
Fixed in this pass; see `PRODUCT.md`.
