# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

No test runner is configured.

## Architecture

**IESR** (Institute of Energy Studies & Research) is a single-page marketing/informational website for a Kenyan energy education institution. All content is static — no API routes, no database, no data fetching.

### Stack
- **Next.js 16.2.1** with React 19.2.4 — read `node_modules/next/dist/docs/` before writing code
- **CSS Modules** for component-scoped styles (no Tailwind, no styled-components)
- **lucide-react** for icons
- Path alias: `@/*` → `./src/*`

### Page Structure
The entire site lives on a single route (`src/app/page.tsx`), composed of section components in order: `Hero → ServiceCards → AboutSection → DepartmentsSection → FeatureHighlight → ProgramsSection → NewsSection → CTABanner`. Navigation uses hash anchors (`#about`, `#programs`, etc.) for in-page scrolling.

### Component Conventions
- Each component has a paired `ComponentName.module.css` — styles are never shared between component files
- Interactive components use `"use client"` at the top; layout/display components are server components by default
- `AnimateOnScroll.tsx` is the shared scroll-animation wrapper — wraps children with `IntersectionObserver`-driven entrance animations (`fadeUp`, `fadeIn`, `slideRight`, `slideLeft`). Use it for any new animated sections

### Design System
`src/app/globals.css` is the source of truth for the design system:
- **CSS custom properties**: colors (`--color-navy: #002B5C`, `--color-gold: #F5A623`), spacing, transitions
- **Utility classes**: `.container`, `.section-label`, `.section-title`, `.btn--primary`, `.btn--secondary`, `.btn--outline-gold`, `.btn--navy`
- **Fonts**: Outfit (headings) + Inter (body), loaded via `next/font`
- Add new design tokens here; don't hardcode values in module files

### Mobile Responsiveness
- Breakpoints: `768px` (tablet), `640px` (mobile)
- Header contains a mobile slide-in drawer with body scroll lock — manage open/close state in `Header.tsx`
