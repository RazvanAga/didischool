# FAQ accordion

## What to build

Secțiunea FAQ cu 6 întrebări expandabile (single-open accordion), pe background `cream`.

**Structură**:
- Titlu H2: „Întrebări frecvente"
- Rățușcă semantică în header: `duck-curious.png`
- 6 items accordion, single-open behavior (când deschid unul, se închide cel anterior)
- Header item: întrebarea + iconiță chevron (rotate 180° când expanded)
- Body item: răspunsul (fade + max-height transition)
- Stil: fiecare item într-un Card primitiv sau ca rând separat cu border-radius 16px
- Tap pe header → expand/collapse cu animație smooth (max-height + opacity, 300ms)

**Conținutul exact (din PRD)**:

1. **Ce include prețul de 80 lei/zi?** — Supraveghere completă între 07:00 și 18:00, joacă în curtea de 2000 mp, teme de vacanță cu cadre didactice acreditate, coordonarea meselor. Atelierele de specialitate sunt opționale și se plătesc separat.

2. **Mâncarea e inclusă?** — Nu. Mic dejun + prânz costă 20 lei/zi separat, comandate de la furnizori locali. Coordonăm noi comanda. Poți și aduce de acasă dacă preferi.

3. **Atelierele de specialitate sunt incluse?** — Nu, acestea se plătesc separat (Programare 75 lei, Engleză 50 lei, Artă 50 lei per sesiune). Programul exact se aranjează după înscrieri, în funcție de cerere. Scrie-ne pe WhatsApp ce te interesează.

4. **Ce vârste acceptați vara?** — De la 4 la 12 ani. Avem 2 grupe pe vârstă: mici (4-6 ani) și mari (7-12 ani). Activitățile și temele se adaptează per grup.

5. **Cum ajunge copilul la Didi?** — Părintele aduce dimineața (între 07:00 și 09:00) și îl ia înainte de 18:00. Suntem în Giroc, pe terenul familiei Aga.

6. **Cine supraveghează copiii?** — Cadre didactice acreditate, inclusiv învățătoare activă la școala din Giroc. Pentru ateliere, specialiști în domeniu (programare, limbi străine, artă).

**Date/sursă**:
- Array `FAQ` în `lib/constants.ts` cu obiecte `{ question, answer }`.

**Teste**:
- Click pe un item închis îl deschide
- Click pe un item deschis cu alt item închis: deschide cel nou și închide cel vechi
- Click pe header-ul item-ului deja deschis îl închide (toggle)

## Acceptance criteria

- [ ] Toate 6 întrebări din PRD apar în ordine
- [ ] Răspunsurile sunt textual identice cu cele din PRD
- [ ] Tap pe header expandează / collapsează item-ul cu animație smooth
- [ ] Iconița chevron rotește la expand
- [ ] Single-open: deschiderea unui item îl închide pe cel anterior deschis
- [ ] Tap pe item-ul deja deschis îl închide
- [ ] Test automat: comportament single-open verificat
- [ ] Lista de Q&A e configurabilă dintr-o constantă în `lib/constants.ts`

## Blocked by

- Issue #1 (Foundation + Hero + Sticky CTA)
