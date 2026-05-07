## What to build

O componentă `HorizontalCarousel` reutilizabilă și două instanțe ale ei: una pentru activitățile incluse în prețul de bază, una pentru atelierele extra.

---

### Componenta HorizontalCarousel

Acceptă un array de carduri ca props și randează un carousel swipeable orizontal pe mobile cu:
- Swipe/drag touch nativ (Framer Motion `drag="x"`)
- Progress bar în partea de sus care indică poziția curentă (ex: 3 din 5 puncte)
- Snap între carduri la release

Fiecare card conține:
- Imagine rățușcă (din `/images/`)
- Titlu activitate (Fredoka One)
- Descriere scurtă (1-2 propoziții, Nunito)
- Notă opțională (ex: preț, sau "2 cadre didactice acreditate")

Animație: rățusca din fiecare card face un mic bounce când cardul intră prima dată în viewport.

---

### Carousel 1 — Activități incluse

Titlu secțiune: "Ce face copilul tău la Didi?"
Fundal: `brand-cream`

**Carduri:**
| Activitate | Imagine | Notă |
|------------|---------|------|
| Joacă liberă în curte | `duck-ball.png` | — |
| Teme de vacanță | `duck-book.png` | "Supervizat de 2 cadre didactice acreditate" |
| Prânz | placeholder emoji 🍽️ | "20 lei/zi, fiecare familie alege furnizorul" |
| Activități creative | `duck.png` | — |

---

### Carousel 2 — Ateliere extra

Titlu secțiune: "Ateliere extra pentru copii curioși"
Fundal: `brand-blue`

**Carduri:**
| Atelier | Imagine | Preț |
|---------|---------|------|
| Programare | `duck-laptop.png` | 75 lei/sesiune |
| Engleză | placeholder emoji 🌍 | 50 lei/sesiune |
| Artă | placeholder emoji 🎨 | 50 lei/sesiune |

---

**Notă despre placeholder-e:** Unde nu există imagine rățușcă, se folosește un emoji mare pe un fundal colorat rotunjit. Componenta trebuie să accepte atât `src` (cale imagine) cât și `emoji` ca tip de media pentru card.

## Acceptance criteria

- [ ] Cardul poate fi swipeat stânga/dreapta pe mobile
- [ ] Progress bar reflectă corect cardul curent
- [ ] Snap-ul funcționează — cardul se fixează la release, nu rămâne între două carduri
- [ ] Carousel 1 are 4 carduri cu conținutul corect
- [ ] Carousel 2 are 3 carduri cu prețurile corecte
- [ ] "Supervizat de 2 cadre didactice acreditate" apare pe cardul Teme de vacanță
- [ ] Rățuștele fac bounce la primul scroll în secțiune
- [ ] Fundalurile sunt `brand-cream` și `brand-blue` respectiv
- [ ] Componenta `HorizontalCarousel` este reutilizabilă (nu conține conținut hardcodat)

## Blocked by

- `01-project-scaffolding.md`
