# Secțiunea Spațiu — galeria celor 2000 mp

## What to build

A doua secțiune a paginii (după hero), pe background `cream`. Este cel mai important argument vizual al site-ului — spațiul de 2000 mp e avantajul #1 imposibil de replicat de concurenți.

**Structură**:
- Titlu H2 (Fredoka, 32-36px): „2000 mp de curte. 2 săli interioare. Loc real pentru joacă."
- Rățușcă semantică în header secțiune: `duck-ball.png` (40-56px)
- Galerie cu 4-6 poze reale din `/images/photos/`. Recomandare: 4 poze curte + 1 căsuță + 1 sală.
  - Layout: scroll-snap orizontal (touch swipe nativ, snap pe carduri)
  - Poze cu radius 16px, aspect ratio 4:3 sau 3:4
  - Componenta acceptă array dinamic — la ședința foto profesionistă, swap fără modificări de cod
- Sub galerie: 4-5 bullet-points cu facilități (cu mini-iconițe sau rățuște 24-32px inline):
  - Fotbal
  - Trambulină
  - Căsuță în copac
  - Masă ping-pong
  - 2 săli interioare
- 1-2 rățuște decorative scatter (opacity 0.3-0.5) ca background decoration

**Date/sursă**:
- Lista pozelor și a facilităților trăiește într-un array în `lib/constants.ts` (ex: `SPATIU_PHOTOS`, `SPATIU_FEATURES`)
- Poze disponibile în `/images/photos/`: `playground1-4.jpg`, `treehouse.jpg`, `classroom1-2.jpg`

**Animații**:
- Scroll reveal: la 30% în viewport → opacity 0→1 + translateY 30→0, 600ms, once
- Pozele la intrare în viewport: scale 0.95→1
- Rățuștele scatter: rotate infinit subtle -3°→3° la 5-6s

## Acceptance criteria

- [ ] Secțiunea apare imediat după hero pe background `cream`
- [ ] Titlul folosește Fredoka, mărimea conform scării din PRD
- [ ] Galeria afișează minim 4 poze reale din `/images/photos/` (nu placeholder)
- [ ] Pozele sunt swipeable orizontal cu snap behavior
- [ ] Cele 5 facilități apar ca bullet-points sub galerie
- [ ] Cel puțin 1 rățușcă scatter decorativă apare în secțiune
- [ ] Lista de poze și facilități e configurabilă dintr-o singură constantă în `lib/constants.ts`
- [ ] Swap-ul unei poze (ex: înlocuirea fișierului `playground1.jpg`) se reflectă pe site fără alte modificări
- [ ] Scroll reveal animation rulează când secțiunea intră în viewport
- [ ] Pe mobile (375-414px) nu există overflow orizontal în afara galeriei swipe-able

## Blocked by

- Issue #1 (Foundation + Hero + Sticky CTA)
