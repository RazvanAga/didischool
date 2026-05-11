# SEO + Open Graph + Schema.org + favicon (stub OG)

## What to build

Toate meta tags-urile necesare pentru ca link-ul să arate frumos la share pe WhatsApp/Facebook și să fie găsibil în Google. OG image folosește un placeholder stub la lansare; swap-ul cu design final e follow-up.

**Meta tags de bază** (în `app/layout.tsx` sau via Next.js `metadata` export):
```
<title>Didi Summer School 2026 — Tabără de zi în Giroc, 4-12 ani</title>
<meta name="description" content="Vara copilului tău pe 2000 mp de curte, cu supraveghere caldă și activități zilnice. 15 iunie – 15 septembrie. Giroc, Timiș." />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<html lang="ro">
```

**Open Graph**:
```
<meta property="og:title" content="Didi Summer School 2026 — cea mai frumoasă vară a copilului tău" />
<meta property="og:description" content="2000 mp curte, supraveghere 07:00–18:00, 4-12 ani. Înscrieri deschise." />
<meta property="og:image" content="https://didischool.ro/og-image.jpg" />
<meta property="og:url" content="https://didischool.ro" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="ro_RO" />
```

**OG image stub** (1200×630):
- Folosește o compoziție simplă programatică sau o imagine statică placeholder: logo + culoare brand `#FFD700` + text „Summer School 2026" + 1 rățușcă (`duck.png`)
- Poate fi generat cu Next.js `ImageResponse` (route handler la `/og-image.jpg` sau `/opengraph-image.tsx`)
- Sau ca asset static în `/public/og-image.jpg` (placeholder pictat rapid)
- Swap-ul cu varianta final design = înlocuire fișier sau update la route handler

**Schema.org local business** (JSON-LD într-un `<script type="application/ld+json">`):
```json
{
  "@context": "https://schema.org",
  "@type": "ChildCare",
  "name": "Didi Afterschool",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Giroc",
    "addressRegion": "Timiș",
    "addressCountry": "RO"
  },
  "telephone": "+40724223600",
  "url": "https://didischool.ro"
}
```

**Favicon**:
- Generat din `/images/logo.png` (logo nou)
- Salvat la `/public/favicon.ico` (sau folosind Next.js convention `app/icon.png`)
- Apple touch icon dacă e simplu de adăugat

**Verificare share preview**:
- Test cu `https://www.opengraph.xyz/url/<deployed-url>` sau Facebook Sharing Debugger
- WhatsApp preview funcționează (vezi titlu, descriere, imagine la paste link)

## Acceptance criteria

- [ ] Title și meta description corespund textual cu cele din PRD
- [ ] OG title, description, url, image, type, locale sunt prezente
- [ ] OG image stub se încarcă la `/og-image.jpg` (sau echivalent) și are dimensiunile 1200×630
- [ ] Schema.org JSON-LD apare în pagină cu tipul ChildCare și datele corecte
- [ ] Favicon se afișează în tab-ul browserului
- [ ] `<html lang="ro">` setat corect
- [ ] Paste link `https://didischool.ro` într-un WhatsApp test afișează preview cu titlu + descriere + imagine
- [ ] Swap-ul OG image-ului = înlocuire de fișier sau update la route handler, fără modificări de cod în restul site-ului

## Blocked by

- Issue #1 (Foundation + Hero + Sticky CTA)
