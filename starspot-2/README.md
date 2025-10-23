# 🌟 StarSpot

**StarSpot** is an open-source, crowd-powered platform that lets users **report**, **verify**, and **get alerted to** celebrity sightings in real time — responsibly and ethically. It combines geolocation, social input, and modern authentication to create a fun and dynamic way to see who’s been spotted where.

## 🛰️ Core Concept

StarSpot acts as a **crowdsourced radar** for public celebrity sightings. Users can:

- Submit sightings (with optional photo and location)
- View nearby or trending sightings on a live map
- Subscribe to specific **celebrities** or **groups** (e.g., “Actors,” “Athletes,” “Musicians”)
- Get real-time notifications when verified sightings occur within their area

All data is anonymized for privacy and delayed slightly to discourage stalking or harassment.

## 🧱 Tech Stack

| Layer              | Technology                                                          |
| ------------------ | ------------------------------------------------------------------- |
| **Frontend**       | [Next.js 14](https://nextjs.org/) with App Router                   |
| **Backend**        | Node.js + API routes                                                |
| **Database**       | PostgreSQL (via [Prisma ORM](https://www.prisma.io/))               |
| **Authentication** | [NextAuth.js](https://next-auth.js.org/) with Google + GitHub OAuth |
| **Mapping**        | [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)               |
| **Hosting**        | Flexible (DigitalOcean, Render, Fly.io, or self-hosted)             |

## ⚙️ Key Features

- 🗺️ Interactive Map of verified sightings
- 🔔 Group-based and celebrity-specific alert subscriptions
- 🔐 Secure OAuth login via Google or GitHub
- 🧭 Smart filters (by group, location, trending)
- ⏱️ Delayed coordinates for user privacy
- 🧩 Scalable modular architecture (easily add push notifications or AI moderation later)

## 🧩 Data Model Overview

- **Users** – authenticated via Google/GitHub
- **Groups** – categories like *Musicians*, *Actors*, *Athletes*
- **Celebrities** – linked to a Group
- **Sightings** – geotagged reports from users
- **Subscriptions** – connects a user to a Group or Celebrity for alerts

## 🛠️ Setup

```bash
git clone https://github.com/<your-username>/starspot.git
cd starspot
npm install
cp .env.example .env.local
# Edit credentials for Google/GitHub OAuth and Postgres
npx prisma db push
npm run dev
```

Then visit **[http://localhost:3000](http://localhost:3000)** to sign in and explore.

## 🧠 Future Roadmap

- ✅ Core reporting + map view
- 🚧 Real-time WebSocket updates
- 🚧 Mobile-friendly PWA
- 🚧 AI photo verification for celebrities
- 🚧 Moderation dashboard & abuse reporting
- 🚧 Push notifications for proximity alerts

## 🧭 Ethics & Privacy

StarSpot does **not** provide exact live locations — all sightings are delayed and generalized to protect public figures and users. Non-celebrity faces in uploaded photos are automatically blurred.

## 💬 Vision

To create a **responsible, transparent, and community-driven** way to share public celebrity sightings — balancing fandom, fun, and ethics through technology.