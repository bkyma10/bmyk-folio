# Brendan Ma Portfolio (Phase 1)

Rebuild of [bmyk.design](https://www.bmyk.design/) — a UX/UI designer portfolio. This phase ships the **Header** and **Hero** only, as a modular Astro + Tailwind static site.

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

## Homepage scope

- Fixed header with brand wordmark, All Work link, email copy-to-clipboard
- Mobile menu (accessible `<details>` disclosure)
- Hero: location, name/role headline, summary, portfolio CTA, optimized portrait
- Clients, skills, latest work, testimonials, education, tools, experience, stories
- Footer with contact copy + social links
- Lightweight placeholder routes for case studies, categories, and stories
