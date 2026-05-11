# Foundation + Hero + Sticky CTA (tracer bullet)

## What to build

Primul slice end-to-end care livrează un site demoable pe Vercel cu funnelul de conversie complet. Include:

**Scaffold & design system**
- Curățare scaffold Next.js 15 (App Router) — pagina e single scroll, totul în `app/page.tsx`
- Tailwind config cu paleta din PRD (brand-yellow `#FFD700`, brand-yellow-deep `#D4A800`, cream `#FFF8E7`, coral `#FF6B6B`, coral-deep `#D04C4C`, text-primary `#2D3436`, text-secondary `#636E72`, shadow-warm)
- Fonturi Google: `Fredoka One` (display) și `Nunito` (body, weights 400/700/800)
- Viewport mobile-only: pe desktop centrat cu `max-w-[500px]`, fără layout responsive larg
- `lib/constants.ts` cu `WHATSAPP_NUMBER = "40724223600"`, helper `waLink(message: string)` care produce `https://wa.me/40724223600?text=<urlencoded>`, și `INSTAGRAM_URL` (temporar redirectează la Facebook)

**Primitive UI reutilizabile**
- `Button` 3D pressable cu variantele `primary` (coral, shadow `0 4px 0 0 #D04C4C`), `secondary` (galben, shadow `0 4px 0 0 #D4A800`), `chip` (white, shadow `0 2px 0 0 #E5E5E5`). Pe `:active` → `translateY(4px)`, shadow → 0. Transition 80ms ease.
- `Card` primitiv (bg white, radius 20px, shadow `0 4px 16px rgba(255, 215, 0, 0.15)`, padding 20-24px)
- `WavyDivider` SVG cu props `topColor` / `bottomColor`, height ~40px

**Hero**
- Background `brand-yellow`, padding generos
- Logo Didi (din `/images/logo.png`)
- H1 „Didi Summer School" (Fredoka, 44-52px, line-height 1.1)
- Subtitlu „cea mai frumoasă vară a copilului tău" (Nunito 400)
- 4 detalii (perioadă `15 iun – 15 sep`, vârstă `4-12 ani`, locație `Giroc, Timiș`, ore `07:00 – 18:00`) ca chip-uri sau bullets
- CTA primar „Vreau detalii" → `waLink("Bună! Vreau informații despre Summer School Didi 2026.")`
- Rățușcă mare central (`duck.png` din `/images/duck-avatars/`) + 1 mică în colț (`duck-girl.png`) peeking
- Wavy divider galben→crem dedesubt
- Animații Framer Motion la load:
  - Duck principal: squash & stretch din jos în sus, 800ms, spring (stiffness 300, damping 12)
  - Titlul: fade + scale 0.92→1, 400ms, delay 200ms
  - Subtitlul: fade + slide-up, delay 350ms
  - Cele 4 detalii: cascade stagger 80ms, delay 500ms
  - Butonul: bounce, delay 800ms
- Idle: duck pulse subtil `scale 1 → 1.03 → 1` la 3s

**Sticky CTA bottom**
- Apare după 200px scroll cu `translateY 100% → 0%` în 300ms
- Background white, shadow sus `0 -4px 12px rgba(0, 0, 0, 0.08)`, safe-area inset pentru iPhone
- Butonul interior full-width, coral primar, text „Rezervă un loc pe WhatsApp" + iconiță WhatsApp
- Deep-link → `waLink("Bună! Aș vrea să rezerv un loc la Summer School Didi 2026.")`
- Pulse subtil la 6s dacă userul stă într-o secțiune mai mult de 4s
- Z-index deasupra paginii, dar sub modaluri viitoare

**Tracking foundation** (analytics complet vine în slice 10, aici doar wire-up)
- Funcție utility `trackWhatsApp(source: 'hero' | 'final' | 'sticky')` apelată din butoanele hero și sticky (no-op deocamdată dacă slice 10 nu e gata)

**Teste**
- `waLink("test")` produce `https://wa.me/40724223600?text=test` cu URL-encoding corect pentru diacritice (ă, ș, ț, î, â)
- Butoanele Hero și Sticky generează URL-urile cu mesajele corecte
- Sticky CTA apare după 200px scroll și rămâne vizibil

**Deploy**
- Proiectul deployează pe Vercel la `didischool.ro` (sau preview URL)
- `npm run dev` pornește fără erori

## Acceptance criteria

- [ ] `npm run dev` pornește fără erori
- [ ] Fonturile Fredoka One și Nunito se încarcă corect
- [ ] Token-urile de culoare sunt disponibile în Tailwind (`bg-brand-yellow`, `bg-cream`, `bg-coral`, `text-coral-deep` etc.)
- [ ] Pe mobile (375-414px) hero ocupă viewport-ul fără scroll orizontal
- [ ] Pe desktop site-ul apare centrat cu max-width 500px
- [ ] CTA primar din hero deschide WhatsApp cu mesajul „Bună! Vreau informații despre Summer School Didi 2026." pre-completat
- [ ] Sticky CTA apare după ce userul scrollează 200px de la top
- [ ] Sticky CTA deschide WhatsApp cu mesajul „Bună! Aș vrea să rezerv un loc la Summer School Didi 2026." pre-completat
- [ ] Tap pe butoanele coral primare produce efectul 3D pressable (transformY + shadow collapse)
- [ ] Wavy divider apare la tranziția hero (galben) → următoarea secțiune (crem)
- [ ] Animațiile Framer Motion la load rulează în ordinea: duck → titlu → subtitlu → detalii → buton
- [ ] Site-ul deployează cu succes pe Vercel
- [ ] Test: `waLink` URL-encodează corect diacriticele (ă → %C4%83 etc.)
- [ ] Test: butoanele Hero și Sticky generează URL-urile corecte cu numărul `40724223600`

## Blocked by

None - can start immediately.
