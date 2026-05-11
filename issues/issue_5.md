# Secțiunea Atelierele noastre

## What to build

A doua folosire a componentei `Carousel` — lista atelierelor de specialitate cu prețuri. Pe background `cream`.

**Structură**:
- Titlu H2: „Atelierele noastre"
- Rățușcă semantică în header: `duck-laptop.png`
- Sub-titlu: „Specialități care se cumpără separat, pe zile fixe săptămânale"
- Carousel orizontal cu 3 carduri (la lansare):
  - **Programare** — `duck-laptop.png`, 75 lei/sesiune, „Scratch, Python, Minecraft Hour of Code"
  - **Engleză** — `duck-globe.png`, 50 lei/sesiune, „Conversație și joc tematic"
  - **Artă** — `duck-paint.png`, 50 lei/sesiune, „Pictură, modelaj, colaj"
- Fiecare card include: rățușcă tematică mare (48-64px), titlu atelier, preț (badge sau text emphasis), descriere scurtă
- Card primitiv reutilizat
- Mențiune sub carousel: „Programul atelierelor se aranjează în funcție de înscrieri. Scrie-ne pe WhatsApp ce te interesează — pregătim mixul pentru grupul tău."

**Extensibilitate**:
- Array `ATELIERE` în `lib/constants.ts` cu obiecte `{ name, price, description, duck }`
- Adăugarea de noi ateliere (Robotică, 3D Printing, Sport) = obiect nou în array, fără restructurare

## Acceptance criteria

- [ ] Carousel-ul afișează cele 3 ateliere de lansare cu prețuri corecte (75 / 50 / 50 lei)
- [ ] Fiecare card afișează rățușca tematică corectă (laptop / globe / paint)
- [ ] Mențiunea despre „programul se aranjează după înscrieri" apare sub carousel
- [ ] Adăugarea unui obiect nou în `ATELIERE` array adaugă un card nou în carousel fără modificări de cod
- [ ] Swipe touch funcționează (folosește componenta Carousel din slice #4)
- [ ] Pe mobile, fiecare card e complet vizibil când e centrat în viewport

## Blocked by

- Issue #4 (Carousel reutilizabil + Ce include prețul)
