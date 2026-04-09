# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Install dependencies:** `npm install`
- **Dev server:** `npm run dev` (Vite on http://localhost:3000 with HMR)
- **Build:** `npm run build` (runs `tsc -b && vite build`, output in `dist/`)
- **Lint:** `npm run lint`
- **Preview production build:** `npm run preview`

## Architecture

Marketing site for ReadyCrew, a trades industry staffing company. Built with React 19 + TypeScript + Vite 8 + Tailwind CSS v4.

### Stack

- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin — no `tailwind.config`, uses CSS-first configuration in `src/index.css`
- **Animations:** Framer Motion (`motion`, `useInView`)
- **Icons:** Lucide React
- **Routing:** react-router-dom with `BrowserRouter` — configured in `src/main.tsx`
- **Fonts:** Barlow (body) and Barlow Condensed (headings) via Google Fonts in `src/index.css`
- **SEO:** `useSEO` hook (`src/hooks/useSEO.ts`) sets document title and meta tags per page

### Brand colors

Defined as CSS custom properties in `src/index.css`:
- Primary orange: `--orange: #C2410C` (dark: `--orange-dark: #9A3412`)
- Near-black: `--near-black: #111827`
- Greys: `--grey-light: #F9FAFB`, `--grey-mid: #6B7280`, `--grey-border: #E5E7EB`

### Routing & layout

`App.tsx` is the layout shell: `Navbar` + `<Outlet />` + `Footer` + `ScrollToTop`. Pages are rendered via `<Outlet />`.

Routes (defined in `src/main.tsx`):
- `/` → `HomePage` — StoryBrand-structured landing page (ICP callout bar → Hero → Problem → Guide → Plan → CTA → Stakes → BookCall)
- `/about` → `AboutPage`
- `/hiring` → `HiringPage`
- `/contact` → `ContactPage`

### Component conventions

- Section components in `src/components/` — composed by page components in `src/pages/`
- Headings use inline `fontFamily: "'Barlow Condensed', sans-serif"` with `fontWeight: 800`
- Colors are referenced directly as Tailwind arbitrary values (e.g. `text-[#C2410C]`) rather than through CSS custom properties
- Scroll-triggered animations use `useInView` with `useRef` per section
- External CTAs link to `https://meta.readycrewstaffing.com/lander`
