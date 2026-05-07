## What to build

Pune bazele tehnice ale proiectului: Next.js cu App Router, Tailwind configurat cu token-urile de culoare ale brandului, Framer Motion pentru animații, fonturile Fredoka One și Nunito din Google Fonts, componenta WavyDivider reutilizabilă pentru tranziții între secțiuni, butonul WhatsApp floating persistent și layout-ul global mobile-only.

Pagina este un single scroll — nu există routing sau pagini multiple. Tot conținutul se află în `app/page.tsx`. Layout-ul este optimizat exclusiv pentru mobile (max-width ~430px, centrat pe desktop).

**Token-uri de culoare Tailwind:**
- `brand-yellow`: `#FFD700`
- `brand-cream`: `#FFFBF0`
- `brand-green`: `#BBF7D0`
- `brand-blue`: `#BFDBFE`
- `brand-coral`: `#FECACA`

**Buton WhatsApp floating:**
- Fix dreapta jos, z-index maxim
- Link: `https://wa.me/40724223600?text=Bun%C4%83%21+Vreau+informa%C8%9Bii+despre+Summer+School+Didi+2026.`
- Iconița WhatsApp cu un pulse subtil la fiecare ~4 secunde (Framer Motion `animate`)

**WavyDivider:**
- Componentă SVG care acceptă `topColor` și `bottomColor` ca props
- Produce un val organic între două secțiuni de culori diferite

## Acceptance criteria

- [ ] `npm run dev` pornește fără erori
- [ ] Fonturile Fredoka One și Nunito se încarcă din Google Fonts
- [ ] Token-urile de culoare sunt disponibile în Tailwind (`bg-brand-yellow` etc.)
- [ ] Butonul WhatsApp floating apare pe toate secțiunile paginii
- [ ] Tapping pe butonul WhatsApp deschide `wa.me` cu numărul și mesajul corect
- [ ] `WavyDivider` randează un val SVG între două culori date ca props
- [ ] Viewport-ul este configurat mobile-first; nu există layout broken pe desktop (poate arăta centrat/limitat)
- [ ] Framer Motion este instalat și importabil

## Blocked by

None - can start immediately.
