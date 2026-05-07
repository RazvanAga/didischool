## What to build

Două secțiuni consecutive care prezintă spațiul fizic și structura unei zile tipice de Summer School.

---

### Secțiunea Spațiu

Prezintă avantajul competitiv principal al Didi — curtea de 2000 mp.

**Conținut:**
- Titlu secțiune: "Un loc în care copiii vor să vină" (sau similar)
- 1-2 poze reale ale curții (furnizate de client în `/images/`)
- Text scurt care menționează: curte cu iarbă, porți de fotbal, trambulină, masă de ping-pong, căsuță în copac, trotinete
- Rățușcă decorativă: `/images/duck-ball.png`
- Fundal: `brand-cream`

---

### Secțiunea O zi tipică

Timeline vertical care arată structura unei zile de Summer School.

**Conținut (7 slot-uri):**
| Oră | Activitate |
|-----|-----------|
| 08:00 | Sosire |
| 08:30 | Mic dejun & socializare |
| 09:00 | Atelier 1 |
| 10:00 | Joacă liberă în curte |
| 12:00 | Prânz |
| 13:00 | Atelier 2 |
| 14:00 | Joacă supervizată până la plecare |

- Fiecare slot: oră (bold, Fredoka One) + descriere activitate
- Iconițe sau rățuște mici per slot (opțional, dacă imaginile permit)
- Fundal: `brand-green`

---

**Animații:** Ambele secțiuni folosesc fade-in + slide-up cu `whileInView` Framer Motion când utilizatorul scrollează.

## Acceptance criteria

- [ ] Secțiunea Spațiu afișează minim o poză a curții
- [ ] Lista de facilități (trambulină, fotbal etc.) este vizibilă
- [ ] `/images/duck-ball.png` apare decorativ în secțiunea Spațiu
- [ ] Timeline-ul O zi tipică are toate cele 7 slot-uri orare
- [ ] Orele sunt vizual distincte față de descrierea activității
- [ ] Fundalurile sunt `brand-cream` și `brand-green` respectiv
- [ ] `WavyDivider` conectează corect secțiunile între ele
- [ ] Animațiile fade-in se declanșează la scroll (whileInView)

## Blocked by

- `01-project-scaffolding.md`
