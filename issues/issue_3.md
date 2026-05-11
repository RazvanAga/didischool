# Secțiunea O zi tipică — timeline 07:00 – 18:00

## What to build

Secțiunea „O zi tipică" e un timeline vertical cu 8 momente, pe background `cream`. Părintele înțelege exact ce face copilul lui între 07:00 și 18:00.

**Structură**:
- Titlu H2: „O zi la Didi" (sau formulare validată cu Ana/Dorin)
- Rățușcă semantică în header: `duck-book.png` (40-56px)
- Mențiune mică sub titlu: „2 grupe pe vârstă: mici (4-6 ani) și mari (7-12 ani). Atelierele și temele se adaptează per grup."
- Timeline vertical cu 8 entries. Fiecare entry are:
  - Oră bold (Nunito 800, 18px) în stânga
  - Titlu activitate (Nunito 800, 18px)
  - Mini-descriere (1 linie, Nunito 400, 14-16px)
  - Rățușcă tematică (40-56px) în stânga ca avatar
- Linie verticală subtilă conectează momentele (opcional decorativ)

**Conținutul (din PRD)**:
| Oră | Activitate | Duck | Descriere |
|-----|-----------|------|-----------|
| 07:00 | Sosire (treptat) | `duck.png` | Părintele lasă copilul în drumul spre serviciu |
| 07:30 | Mic dejun | `duck-food.png` | Comandat și coordonat de Didi |
| 08:30 | Teme de vacanță / activități pre-școlare | `duck-book.png` | Cei mari cu Ana și Diana, cei mici cu activități adaptate |
| 10:00 | Pauză + joacă în curte | `duck-ball.png` | Fotbal, trambulină, căsuță în copac |
| 12:30 | Prânz | `duck-food.png` | Comandat individual de fiecare familie, intermediat de Didi |
| 13:30 | Odihnă / citit / activități calme | `duck-book.png` | Reset după prânz |
| 15:00 | Atelier (1h) | `duck-paint.png` | Specialitate sau joacă ghidată |
| 16:00 | Joacă în curte | `duck-ping-pong.png` | Activități libere supravegheate |
| 18:00 | Plecare (treptat) | `duck.png` | Părinții iau copiii după serviciu |

(Notă: tabelul are 9 rânduri — sunt 9 momente, nu 8. Aliniat cu PRD-ul.)

**Date/sursă**:
- Array `ZI_TIPICA` în `lib/constants.ts` cu obiecte `{ time, title, description, duck }`. Adăugarea/modificarea unei intrări = update array.

**Animații**:
- Scroll reveal pe secțiune (opacity + translateY 30→0)
- Fiecare entry intră în viewport cu cascade stagger 80ms
- Rățuștele: bounce mic `translateY 10 → 0` cu overshoot la intrare

## Acceptance criteria

- [ ] Secțiunea apare după Spațiu, pe background `cream`
- [ ] Toate cele 9 momente din PRD sunt afișate în ordine cronologică
- [ ] Fiecare moment afișează ora, titlul, descrierea și rățușca tematică corectă
- [ ] Mențiunea despre cele 2 grupe pe vârstă apare în partea de sus a secțiunii
- [ ] Lista momentelor e configurabilă dintr-o constantă în `lib/constants.ts`
- [ ] Cascade animation rulează la intrarea secțiunii în viewport
- [ ] Pe mobile, toate orele și textele sunt lizibile fără zoom

## Blocked by

- Issue #1 (Foundation + Hero + Sticky CTA)
