# Brendan Ma Portfolio

Rebuild of [bmyk.design](https://www.bmyk.design/) — a UX/UI designer portfolio as a modular Astro + Tailwind static site.

## Stack

- [Astro](https://astro.build/) — static HTML, fast by default
- [Tailwind CSS v4](https://tailwindcss.com/) — utility styling
- Semantic HTML5 + a11y (skip link, landmarks, focus styles, reduced motion)
- `<picture>` with WebP (+ JPEG fallback) for the hero portrait

## Project structure

```
src/
  components/
    Header/          # Logo, nav, mobile menu
    Hero/            # Location, portrait, headline/CTA
    ui/              # Shared Picture component
  data/site.ts       # Copy & asset metadata
  layouts/           # Base document shell
  pages/             # Routes
  styles/            # Tokens + global CSS
public/images/       # Optimized WebP/JPEG assets
```

## Local development

```bash
npm install
npm run dev -- --port 4321 --host 127.0.0.1
```

Build for static hosting:

```bash
npm run build
npm run preview -- --port 4321 --host 127.0.0.1
```

Output lands in `dist/` and can be deployed to any static host (Netlify, Cloudflare Pages, GitHub Pages, etc.).

## Scope

- Homepage: header, hero, clients/skills, latest work, testimonials, education, tools, experience, stories, footer
- [All Work](/allworks) archive: dark layout, category links, 12-project grid matching live
- Category archives (`/categories/ux-ui-design`, `webflow`, `graphic-design`, `motion-graphics`) with filtered grids
- Case study: [Core Dao - Brand Redesign](/cases/coredao)
- Placeholder routes for remaining case studies and stories
- Fixed header with brand wordmark, All Work link (current underline on `/allworks`), email copy-to-clipboard
