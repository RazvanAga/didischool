# Vercel Analytics + WhatsApp event tracking

## What to build

Tracking-ul de bază pentru a măsura traficul și conversia. KPI principal: rata de click pe WhatsApp / total vizitatori.

**Vercel Analytics setup**:
- `npm install @vercel/analytics`
- `<Analytics />` component în `app/layout.tsx`
- Tracking automat: page views, vizitatori unici, sursă trafic, device, geografie

**Custom events pentru cele 3 butoane WhatsApp**:
- `whatsapp_hero` — tap pe CTA-ul din Hero („Vreau detalii")
- `whatsapp_final` — tap pe CTA-ul final („Rezervă un loc")
- `whatsapp_sticky` — tap pe sticky bottom CTA
- Implementare: `track('whatsapp_hero')` apelat din onClick handler-ul fiecărui buton
- Funcția `trackWhatsApp(source)` din slice #1 (stubbed acolo) acum apelează real `track()` din `@vercel/analytics`

**Configurare**:
- Vercel Analytics se activează din dashboard-ul Vercel după primul deploy
- Tracking-ul nu folosește cookies → nu necesită cookie banner GDPR (acesta e motivul ales pentru Vercel Analytics vs. Google Analytics, conform PRD)

**Out of scope**:
- Google Analytics
- Facebook Pixel (reevaluăm dacă pornim campanii plătite)
- Conversie tracking complex (ex: tap WhatsApp → conversie efectivă)

## Acceptance criteria

- [ ] `@vercel/analytics` instalat și `<Analytics />` montat în layout
- [ ] Page views se înregistrează în dashboard-ul Vercel după deploy
- [ ] Tap pe CTA-ul Hero înregistrează event `whatsapp_hero`
- [ ] Tap pe CTA-ul final înregistrează event `whatsapp_final`
- [ ] Tap pe Sticky CTA înregistrează event `whatsapp_sticky`
- [ ] Cele 3 events apar distinct în dashboard-ul Vercel Analytics → Events
- [ ] Nu apare cookie banner pe site (Vercel Analytics e cookie-less)
- [ ] Verificare manuală: click pe fiecare buton într-un browser real → eventul apare în dashboard în max 5 min

## Blocked by

- Issue #1 (Foundation + Hero + Sticky CTA)
