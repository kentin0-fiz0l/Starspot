# StarSpot

StarSpot is an open-source, crowd-powered platform to report, verify, and get alerted to public celebrity sightings in real time — responsibly and ethically. It combines geolocation, verified crowd input, and modern auth to create a fun, privacy-first experience.

## Key Features
- Submit sightings with optional photo and geolocation (delayed/obfuscated for privacy)
- Interactive map view of verified sightings (Mapbox)
- Subscribe to celebrities or groups (Actors, Musicians, Athletes)
- Real-time updates (WebSockets) and alert subscriptions
- OAuth sign-in (Google, GitHub via NextAuth)
- Privacy-first defaults and moderation tools

## Tech Stack
- Frontend: Next.js 14 (App Router), TypeScript, Mapbox GL JS
- Backend: Node.js API routes (Next.js)
- Database: PostgreSQL via Prisma
- Auth: NextAuth.js (Google & GitHub)
- Tests: Jest / React Testing Library
- Deployment: Vercel, Render, Fly.io, or self-hosted Docker

## Quickstart (development - devcontainer on Ubuntu 24.04)
Prerequisites: Node 18+, pnpm or npm, PostgreSQL (or Docker)

1. From workspace root
```bash
cd /workspaces/Starspot
```

2. Install dependencies
```bash
pnpm install      # or npm install
```

3. Copy env and configure
```bash
cp .env.example .env.local
# Edit .env.local: DATABASE_URL, NEXTAUTH_URL, NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GITHUB_ID, GITHUB_SECRET, MAPBOX_TOKEN
```

4. Prepare DB
```bash
npx prisma migrate dev --name init
# or for quick sync:
npx prisma db push
```

5. Seed (optional)
```bash
pnpm run seed
```

6. Start dev server
```bash
pnpm dev
# visit http://localhost:3000
```

## Docker (optional)
Build and run:
```bash
docker build -t starspot .
docker run --env-file .env.local -p 3000:3000 starspot
```

## Project Layout (high level)
- app/                 — Next.js App Router pages & API routes
- components/          — React UI components (Map, ReportForm, Cards)
- prisma/              — Prisma schema & migrations
- scripts/             — DB seed, utilities
- public/              — Static assets
- styles/              — Global styles
- tests/               — Unit & integration tests

## Development Tips
- Use feature branches and pull requests.
- Create a WIP commit before large removals: git add -A && git commit -m "wip: snapshot"
- Use Mapbox token in .env.local to enable map features.
- Use devcontainer (Ubuntu 24.04) for consistent environment.

## Ethics & Privacy
StarSpot intentionally delays and generalizes coordinates, blurs non-celebrity faces, and provides tools to report abuse. The project prioritizes safety and privacy; do not use to facilitate stalking or harassment.

## Contributing
See CONTRIBUTING.md and CODE_OF_CONDUCT.md for guidelines. Open issues and PRs are welcome.

## License
MIT — see LICENSE for details.
