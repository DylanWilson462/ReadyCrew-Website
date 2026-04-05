# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Install dependencies:** `npm install` (run this first when starting a new local session)
- **Dev server:** `npm run dev` (starts Vite on http://localhost:3000 with HMR)
- **Build:** `npm run build` (runs `tsc -b && vite build`, output in `dist/`)
- **Lint:** `npm run lint`
- **Preview production build:** `npm run preview`

### Starting a new local session

```sh
npm install
npm run dev
```

The dev server will be available at http://localhost:3000 with hot module replacement.

## Architecture

Single-page marketing/landing site for ReadyCrew, a trades industry staffing company. Built with React 19 + TypeScript + Vite 8 + Tailwind CSS v4.

### Stack details

- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin (no `tailwind.config` — uses CSS-first configuration in `src/index.css`)
- **Animations:** Framer Motion for interactive elements
- **Icons:** Lucide React
- **Routing:** react-router-dom is installed but not yet used — currently a single-page app
- **Fonts:** Barlow (body) and Barlow Condensed (headings) loaded via Google Fonts in `src/index.css`

### Brand colors

Defined as CSS custom properties in `src/index.css`:
- Primary orange: `#C2410C` (dark: `#9A3412`)
- Near-black text: `#111827`
- Grey tones: `#F9FAFB`, `#6B7280`, `#E5E7EB`

### Page structure

`App.tsx` composes the full landing page in StoryBrand framework order:
1. Navbar + ICP callout bar + Hero (inline in App.tsx)
2. `ProblemSection` — pain points
3. `GuideSection` — positioning as guide
4. `PlanSection` — the process/steps
5. `CallToActionSection` — primary CTA
6. `StakesSection` — failure stakes
7. `BookCallSection` — booking form/CTA
8. `Footer`

All section components live in `src/components/`. Headings use inline `fontFamily: "'Barlow Condensed', sans-serif"` with `fontWeight: 800`.
