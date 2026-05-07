## What to build

Două secțiuni consecutive: un accordion FAQ cu 5 întrebări și o secțiune cu 2 carduri de testimoniale placeholder.

---

### Secțiunea FAQ

Titlu: "Întrebări frecvente"
Fundal: `brand-cream`

**5 întrebări (accordion — una deschisă la un moment dat):**

1. **Ce include prețul de 80 lei/zi?**
   Supraveghere completă 8:00–17:00, activități în curte, teme de vacanță supervizate de 2 cadre didactice acreditate și minimum 2 ateliere pe zi.

2. **Mâncarea e inclusă?**
   Nu. Masa costă 20 lei/zi, separat. Fiecare familie alege furnizorul preferat — noi coordonăm comanda.

3. **Ce vârste acceptați vara?**
   Acceptăm copii de la grădiniță până la finalul clasei a IV-a.

4. **Cum ajunge copilul la afterschool?**
   Părintele aduce copilul dimineața. Îl poate lua oricând după ora 17:00.

5. **Cine supraveghează copiii?**
   Cadre didactice acreditate și specialiști în domeniu pentru fiecare atelier în parte.

**Animație accordion:** Conținutul se expandează/colapsează cu Framer Motion `AnimatePresence` + `height` animation.

---

### Secțiunea Testimoniale

Titlu: "Ce spun părinții"
Fundal: `brand-coral`

**2 carduri placeholder:**
- Card 1: citat generic pozitiv + "— Mamica 1"
- Card 2: citat generic pozitiv + "— Mamica 2"

Structura componentei permite înlocuirea trivială a textului când clientul furnizează citatele reale — conținutul vine din date, nu hardcodat în JSX.

## Acceptance criteria

- [ ] FAQ afișează toate cele 5 întrebări colapsate implicit
- [ ] Click pe o întrebare expandează răspunsul cu animație
- [ ] Deschiderea unui nou item îl închide pe cel anterior
- [ ] Animația de expand/collapse este vizibilă și fluidă
- [ ] Testimonialele afișează 2 carduri cu placeholder text
- [ ] Conținutul testimonialelor vine dintr-un array de date (nu JSX hardcodat)
- [ ] Fundalurile sunt `brand-cream` și `brand-coral` respectiv
- [ ] `WavyDivider` conectează corect secțiunile

## Blocked by

- `01-project-scaffolding.md`
