# DevHub design direction

## Product world
DevHub is a live API/MCP routing layer for the Book ecosystem. The page should feel like pulling a physical line from a service fabric: inspect the catalog, read the contract, run the request.

## Visual direction
- Seed: 505a76e5 — assigned textile/drawcord direction.
- Material: near-black silk, warm brass, hairline cable geometry.
- Typography: editorial serif for the promise; Geist Mono for protocol labels and request data.
- Composition: a single request console leads into the API catalog. Card grids are service nodes, not generic SaaS cards.

## Interaction
- Primary CTA opens the existing playground.
- API nodes keep their existing /apis/[id] routes.
- Gold is reserved for live signal, action, and route emphasis.
- Hover lifts a service node slightly; no decorative motion is required.

## Constraints
- Keep API catalog values sourced from src/lib/api-catalog.ts.
- Do not claim uptime or performance that the product does not measure.
- Preserve docs, playground, API detail, and MCP routes.
- Maintain readable contrast and a compact mobile layout.

