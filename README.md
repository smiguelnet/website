# Sergio Miguel - The Architect's Console

Modern personal portfolio site for **Sergio Barriviera Miguel** (CTO and Software Architect), focused on showcasing:

- 20+ years of software architecture and delivery experience
- AI-driven engineering, Spec-Driven Development (SDD), and Domain-Driven Design (DDD)
- Work history across fintech, blockchain, mobile, and cloud-native systems
- Selected projects, certifications, education, and contact channels

This repository contains the React/Vite codebase for the portfolio experience and content.

## Live Presence

- Main website: [www.smiguel.net](https://www.smiguel.net)
- LinkedIn: [linkedin.com/in/smiguelnet](https://www.linkedin.com/in/smiguelnet)
- Contact: [sergio@smiguel.net](mailto:sergio@smiguel.net)

## What This Site Includes

- Multi-section portfolio UI (`home`, `experience`, `projects`, `expertise`, `about`)
- Animated, terminal-inspired visual language with a modern dark/emerald theme
- Data-driven content through a single resume/profile source (`src/constants.ts`)
- Responsive layout for desktop and mobile

Content mirrors Sergio's public profile and focus areas from **smiguel.net**, including hands-on CTO work, software architecture leadership, and technical depth in APIs, web, and mobile products.

## Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Framer Motion (`motion`)
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The dev server runs on:

- `http://localhost:3000`

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Type-check

```bash
npm run lint
```

## Project Structure

```text
.
├── public/
│   └── assets/                 # images, favicon set, PDF resume
├── src/
│   ├── App.tsx                 # main portfolio UI and sections
│   ├── constants.ts            # profile/resume data source
│   ├── index.css               # global styles
│   └── main.tsx                # app entrypoint
├── metadata.json               # app metadata
├── vite.config.ts              # Vite + Tailwind + env wiring
└── package.json                # scripts and dependencies
```

## Content Customization

Most portfolio content is centralized in:

- `src/constants.ts`

Update this file to change:

- Bio and quote
- Experience and achievements
- Projects and external links
- Skills, certifications, and education
- Contact info (email, LinkedIn, website)

UI layout/styling updates live mainly in:

- `src/App.tsx`
- `src/index.css`

## Deployment

This is a static Vite app and can be deployed to platforms such as Vercel, Netlify, Cloudflare Pages, or GitHub Pages after running `npm run build`.

## License

No license file is currently defined in this repository.
