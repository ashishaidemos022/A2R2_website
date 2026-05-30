# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing site for **A2R2 Labs** (agentic AI consultancy). One route (`/`) composed of stacked, anchor-linked sections. No backend, no database, no auth — purely a static/SSG marketing site deployed to Vercel (`a2r2labs.com`).

> Note: `/Users/ashish/CLAUDE.md` (a parent-directory file describing a "CarPath" Supabase dashboard) is for an unrelated project and does not apply here.

## Commands

```bash
npm run dev      # next dev (Turbopack) — local development
npm run build    # next build — production build
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals + next/typescript)
```

No test framework is configured. TypeScript is `strict`; `npm run build` is the de facto typecheck.

## Stack

- **Next.js (App Router)** with Turbopack
- **Tailwind CSS v4** — configured via CSS (`@import "tailwindcss"` + `@theme inline`), no `tailwind.config.js`
- **Framer Motion** for scroll/entrance animations
- **Embla** (`embla-carousel-react`) for carousels
- **Lucide React** for icons
- Fonts via `next/font/google`: Fraunces (serif/display) + Geist (sans)

## Architecture

The page is assembled in `app/page.tsx`: `<Navigation>` + `<main>` of section components + `<Footer>`. To add/reorder content, edit the section list there.

- **`components/sections/*`** — full-width page sections (Hero, Videos, Opportunity, Services, WhyA2R2, Industries, Work, Contact). Each section owns its `id` (e.g. `id="services"`), which the nav links target via in-page anchors. Section order in `page.tsx` and link order in `Navigation.tsx`'s `links` array must stay in sync.
- **`components/ui/*`** — reusable presentational pieces (Navigation, Footer, Carousel, LogoMark, AnimatedHeading, YouTubePlaylistEmbed).
- **`lib/motion.ts`** — shared Framer Motion primitives: `fadeUp`, `stagger`, `ease` curve, and `viewport` config. Reuse these instead of redefining variants per section to keep motion consistent.
- **`app/globals.css`** — the design system. Defines CSS custom properties in `:root` (colors `--bg-primary`, `--surface`, `--accent` gold `#C9A961`, etc.), exposes them to Tailwind via `@theme inline` (so `text-accent`, `bg-surface`, `font-serif` work as utilities), and holds shared utility classes: `.container-grid` (page width container), `.eyebrow`, `.display`, `.link-underline`, `.bg-bridge`, and the `a2r2-orbit` logo animation keyframes.

## Conventions

- Components using hooks, Framer Motion, or browser APIs need `"use client"`. Section components are generally client components; layout/SEO files are server components.
- Use the `@/*` path alias (maps to repo root) for imports, e.g. `@/components/sections/Hero`, `@/lib/motion`.
- Style with Tailwind utilities backed by the theme tokens (`bg-bg-primary`, `text-text-secondary`, `text-accent`) and the shared classes above — avoid hardcoded hex values; add a token to `globals.css` if a new color is needed.
- All animations must respect `prefers-reduced-motion` (globals.css already neutralizes durations globally; don't reintroduce motion that ignores it).
- SEO is metadata-driven: `app/layout.tsx` (`metadata`/OpenGraph/Twitter), `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `app/icon.svg`. The canonical domain `https://a2r2labs.com` is hardcoded in these files — update all of them together if the domain changes.
- `next.config.ts` allowlists remote image hosts (`images.unsplash.com`, `api.microlink.io`) under `images.remotePatterns`; add hosts there before using `next/image` with new external sources.
