<div align="center">

<img src="public/images/duck-avatars/duck-laptop.png" width="72" alt="" />
<img src="public/images/duck-avatars/duck-book.png" width="72" alt="" />
<img src="public/images/duck-avatars/duck.png" width="72" alt="" />
<img src="public/images/duck-avatars/duck-paint.png" width="72" alt="" />
<img src="public/images/duck-avatars/duck-robotics.png" width="72" alt="" />
<img src="public/images/duck-avatars/duck-globe.png" width="72" alt="" />

# Didi Summer School

Landing page for **Didi Afterschool**, a summer school in Giroc, Timiș (Romania).
A single, mobile-first marketing page with a playful, Duolingo-style duck mascot.

🌐 [didischool.ro](https://didischool.ro)

</div>

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [Next.js 15](https://nextjs.org) (App Router) with Turbopack |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Animation | [Framer Motion 11](https://www.framer.com/motion/) |
| Font | [Baloo 2](https://fonts.google.com/specimen/Baloo+2) (via `next/font/google`) |
| Analytics | [Vercel Analytics](https://vercel.com/analytics) |
| Testing | [Vitest 4](https://vitest.dev) + Testing Library + jsdom |
| Hosting | [Vercel](https://vercel.com) |

## Architecture

The site is a **single static page** composed of self-contained section components,
stacked vertically and separated by animated `WavyDivider` transitions.

```
app/
  layout.tsx      Root layout — fonts, metadata, OpenGraph, JSON-LD, Analytics
  page.tsx        Page composition — stacks all sections + sticky CTA
  globals.css     Global styles + Tailwind directives

components/       One file per UI section / primitive
  Hero.tsx              Above-the-fold hero with duck mascots
  SpatiuSection.tsx     Photo carousel of the space
  ZiTipicaSection.tsx   "A typical day" timeline
  AteliereSection.tsx   Workshops carousel
  IncludePretulSection  What the price includes
  FAQSection.tsx        Accordion FAQ
  PreturiSection.tsx    Pricing + primary CTA
  Footer.tsx            Contact + social links
  StickyCTA.tsx         Persistent WhatsApp button
  Carousel.tsx          Reusable peek carousel
  FAQAccordion.tsx      Reusable accordion
  Button / Card / SectionTitle / WavyDivider / icons …

lib/
  constants.ts    Single source of truth — all copy, pricing, photos, links
  tracking.ts     Vercel Analytics event helpers

public/images/
  duck-avatars/   Mascot PNGs (one per activity / mood)
  photos/         Photos of the space
```

### Conventions & notable details

- **Mobile-first** — the layout is designed for phones; the primary conversion
  action everywhere is a pre-filled **WhatsApp** message.
- **Content lives in [`lib/constants.ts`](lib/constants.ts)** — sections render from
  typed data (`SPATIU_PHOTOS`, `ZI_TIPICA`, `ATELIERE`, `FAQ`, pricing constants),
  so updating copy or prices never requires touching component logic.
- **All copy is in Romanian**, informal tone. Diacritics (ș/ț/ă/î/â) must render
  correctly — hence the `latin-ext` font subset.
- **SEO** — per-page `Metadata`, OpenGraph image, and `ChildCare` JSON-LD
  structured data are configured in [`app/layout.tsx`](app/layout.tsx).
- **Design tokens** (brand colors, warm shadows, blob radii, overshoot easing)
  are centralized in [`tailwind.config.ts`](tailwind.config.ts).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint with ESLint (`eslint-config-next`) |
| `npm run test` | Run the Vitest suite |

## Deployment

Hosted on Vercel — every push to `main` triggers an automatic deploy.
See [`DEPLOYMENT.md`](DEPLOYMENT.md) for first-time domain/DNS setup.
