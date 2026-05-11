# Secțiunea Prețuri + CTA final

## What to build

Secțiunea Prețuri pe background `brand-yellow` (a doua secțiune galbenă a paginii, după hero), precedată de wavy divider crem→galben. Sub ea, CTA-ul final mare.

**Wavy divider** crem → galben (folosind componenta din slice #1).

**Secțiunea Prețuri**:
- Background `brand-yellow`
- Titlu H2: „Cât costă vara la Didi?"
- Rățușcă semantică în header: `duck-curious.png`
- Card principal mare (Card primitiv pe bg white):
  - Mare evidențiere: „80 lei/zi" + sub „supraveghere completă, joacă, teme"
  - „+20 lei/zi" + sub „mic dejun + prânz, opțional"
  - Sub card: mențiune „Atelierele de specialitate se plătesc separat"
- Listă ateliere extra (4-5 chip-uri sau rânduri compacte):
  - Programare — 75 lei/sesiune
  - Engleză — 50 lei/sesiune
  - Artă — 50 lei/sesiune
  - (deschis pentru extindere)
- Mențiune: „Programul atelierelor se aranjează după înscrieri."

**CTA final**:
- Sub secțiunea Prețuri (poate fi sub același bg galben sau o sub-secțiune)
- Buton mare coral primar, full-width sau aproape: „Rezervă un loc"
- Sub buton: „Locuri limitate — capacitate 30 copii"
- Rățușcă semantică: `duck-ball.png` (sau alta thematic — celebration vibe)
- Deep-link → `waLink("Bună! Aș vrea să rezerv un loc la Summer School Didi 2026.")`
- Call `trackWhatsApp('final')` la tap (wired din slice #1, real tracking din slice #10)

**Date/sursă**:
- Prețurile vin din `lib/constants.ts` (`PRET_BAZA = 80`, `PRET_MASA = 20`, ateliere din array `ATELIERE`)

## Acceptance criteria

- [ ] Wavy divider crem→galben apare deasupra secțiunii Prețuri
- [ ] Card principal afișează „80 lei/zi" și „+20 lei/zi" cu explicații
- [ ] Lista atelierelor extra apare cu prețurile corecte (75 / 50 / 50)
- [ ] CTA „Rezervă un loc" deschide WhatsApp cu mesajul corect pre-completat
- [ ] „Locuri limitate — capacitate 30 copii" apare sub buton
- [ ] Prețurile sunt configurabile din `lib/constants.ts`
- [ ] Test: butonul CTA final generează URL-ul WhatsApp corect

## Blocked by

- Issue #1 (Foundation + Hero + Sticky CTA)
