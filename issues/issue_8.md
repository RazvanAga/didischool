# Footer

## What to build

Footer-ul site-ului, sub CTA-ul final. Conține adresa și prezența socială.

**Structură**:
- Background `cream` sau `brand-yellow-deep` (alegere stilistică pentru contrast vizibil)
- Padding generos vertical (py-12)
- Logo Didi mic (din `/images/logo.png`) sus
- Adresă text: „Giroc, Timiș" (fără Google Maps embed conform PRD out-of-scope)
- Rând de iconițe social (32-40px, gap 16-24px):
  - WhatsApp → link `https://wa.me/40724223600`
  - Facebook → URL real (de adăugat în `lib/constants.ts` ca `FACEBOOK_URL`)
  - Instagram → `INSTAGRAM_URL` din constants (temporar redirectează la Facebook până e creată pagina IG)
- Copyright mic: „© 2026 Didi Afterschool" (Nunito 400, text-secondary, 12-13px)
- Rățușcă mică decorativă opțional (`duck.png` la opacity 0.5)

**Date/sursă**:
- `lib/constants.ts`: `WHATSAPP_NUMBER`, `FACEBOOK_URL`, `INSTAGRAM_URL`, `ADDRESS = "Giroc, Timiș"`

## Acceptance criteria

- [ ] Footer apare după CTA-ul final, ca ultima secțiune a paginii
- [ ] Adresa „Giroc, Timiș" e vizibilă
- [ ] Cele 3 iconițe (WhatsApp, Facebook, Instagram) au link-uri funcționale
- [ ] Instagram redirectează la Facebook până când pagina IG e creată
- [ ] Modificarea `INSTAGRAM_URL` în `constants.ts` actualizează link-ul fără alte schimbări
- [ ] Pe mobile, iconițele sunt aliniate centrat și tap-target ≥44×44px
- [ ] Există spațiu suficient sub footer pentru sticky CTA (nu se suprapun)

## Blocked by

- Issue #1 (Foundation + Hero + Sticky CTA)
