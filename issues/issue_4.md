# Carousel reutilizabil + Secțiunea „Ce include prețul"

## What to build

Construirea unei componente `Carousel` reutilizabile + prima ei folosire în secțiunea „Ce include prețul de bază".

**Componenta Carousel (reutilizabilă)**:
- Container scroll-snap orizontal, touch swipe nativ
- Accept un array generic de `items` și un render-prop / children pentru card
- Progress bar dedesubt care reflectă poziția curentă (update smooth 200ms)
- Snap behavior CSS (`scroll-snap-type: x mandatory`, `scroll-snap-align: center`)
- Gap între carduri `gap-4` (16px)
- Padding orizontal pentru ca primul/ultimul card să poată fi centrate
- Cards la intrarea în viewport: `scale 0.95 → 1`
- Tests: swipe avansează între carduri, progress bar reflectă poziția, primul/ultimul card limitează scroll-ul

**Secțiunea „Ce include prețul" (prima utilizare)**:
- Background `cream`
- Titlu H2: „Ce include prețul de bază"
- Rățușcă semantică în header: `duck-food.png`
- Sub-titlu/mențiune: „80 lei/zi acoperă..."
- Carousel orizontal cu 5-6 carduri (din PRD secțiunea „Ce include prețul de bază de 80 lei/zi"):
  - Supraveghere completă 07:00–18:00
  - Cadre didactice acreditate pentru teme și activități
  - Acces la 2000 mp de curte (fotbal, trambulină, căsuță, ping-pong)
  - Acces la 2 săli interioare
  - Coordonare mic dejun și prânz (nu costul mâncării)
  - 2 grupe pe vârstă (mici și mari)
- Fiecare card: titlu scurt + descriere 1-2 propoziții + iconiță sau rățușcă mică (24-48px)
- Card primitiv reutilizat din slice #1
- Mențiune sub carousel: „Atelierele de specialitate (programare, engleză, artă) se plătesc separat — vezi mai jos."

**Date/sursă**:
- Array `INCLUDE_PRETUL` în `lib/constants.ts` cu obiecte `{ title, description, duck? }`.

**Animații**:
- Scroll reveal pe secțiune
- Cards: scale 0.95→1 la intrare în viewport

## Acceptance criteria

- [ ] Componenta `Carousel` poate fi importată și folosită cu orice array de items
- [ ] Swipe-ul touch avansează între carduri pe mobile
- [ ] Snap behavior funcționează (cardurile se aliniază la stop)
- [ ] Progress bar afișează poziția curentă și se actualizează smooth
- [ ] Test: swipe avansează între carduri
- [ ] Test: progress bar reflectă poziția
- [ ] Test: primul/ultimul card limitează scroll-ul (nu se poate trece dincolo)
- [ ] Secțiunea „Ce include prețul" afișează toate 5-6 carduri din PRD
- [ ] Lista e configurabilă dintr-o constantă în `lib/constants.ts`
- [ ] Mențiunea despre atelierele plătite separat apare sub carousel

## Blocked by

- Issue #1 (Foundation + Hero + Sticky CTA)
