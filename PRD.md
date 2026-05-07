# PRD — Didi Summer School 2026 Landing Page

## Problem Statement

Didi Afterschool (Giroc, Timiș) nu are o prezență online funcțională. Domeniul didischool.ro există dar nu are site. Părinții care aud de Didi prin word-of-mouth sau Facebook nu au nicio destinație digitală unde să afle detalii, să verifice prețurile și să inițieze înscrierea. Summer School 2026 începe pe 15 iunie — fără un site lansat înainte de această dată, afterschool-ul intră în vară fără o campanie de marketing structurată și riscă să rămână sub capacitate (30 locuri disponibile, 16 ocupate în prezent).

## Solution

Un landing page mobile-only în Next.js + Tailwind, hostat pe Vercel la didischool.ro, cu design cartoonish inspirat din Duolingo — colorat, animat, cu mascota Didi Duck în diferite ipostaze. Pagina prezintă Summer School 2026 ca produs principal și convertește vizitatorii direct în conversații WhatsApp cu administratorul. Nu există formular, backend, sau autentificare — conversia se face exclusiv prin butonul WhatsApp.

## User Stories

1. Ca părinte care a auzit de Didi Afterschool, vreau să găsesc rapid un site mobile, astfel încât să aflu dacă e potrivit pentru copilul meu fără să sun pe cineva.
2. Ca părinte pe telefon, vreau să văd site-ul perfect pe ecranul meu, astfel încât să nu fiu nevoit să dau zoom sau să scrollez orizontal.
3. Ca părinte, vreau să văd ce dată începe și se termină Summer School-ul, astfel încât să știu dacă se potrivește cu planurile mele de vară.
4. Ca părinte, vreau să văd ce vârste sunt acceptate, astfel încât să știu dacă copilul meu poate veni.
5. Ca părinte, vreau să văd programul zilnic, astfel încât să înțeleg cum arată o zi tipică pentru copilul meu.
6. Ca părinte, vreau să văd spațiul fizic în poze, astfel încât să știu că copilul meu are unde să se joace în siguranță.
7. Ca părinte, vreau să știu cine supraveghează copiii, astfel încât să am încredere că sunt pe mâini bune.
8. Ca părinte, vreau să văd activitățile incluse în prețul de bază, astfel încât să înțeleg ce primesc pentru banii mei.
9. Ca părinte, vreau să văd atelierele extra disponibile, astfel încât să pot decide dacă vreau să adaug ceva la pachetul de bază.
10. Ca părinte, vreau să văd prețul clar (bază + masă + ateliere extra), astfel încât să nu am surprize financiare.
11. Ca părinte, vreau să văd că locurile sunt limitate, astfel încât să simt urgența de a mă înscrie rapid.
12. Ca părinte, vreau să pot contacta afterschool-ul cu un singur tap, astfel încât să nu pierd timp scriind un mesaj de la zero.
13. Ca părinte, vreau ca butonul de contact să deschidă direct WhatsApp cu un mesaj pre-completat, astfel încât să pot trimite imediat fără să scriu nimic.
14. Ca părinte, vreau să văd testimoniale de la alți părinți, astfel încât să am confirmarea că alții au avut o experiență bună.
15. Ca părinte, vreau să văd mascota animată la încărcarea paginii, astfel încât să înțeleg imediat că e un loc vesel și prietenos pentru copii.
16. Ca părinte, vreau ca fiecare secțiune să apară lin când scrollez, astfel încât experiența să fie plăcută și modernă.
17. Ca părinte, vreau să văd rățuștele în ipostaze diferite per activitate, astfel încât să înțeleg vizual ce face copilul meu acolo.
18. Ca părinte, vreau să pot naviga orizontal prin activitățile incluse, astfel încât să le explorez pe rând fără să scrollez mult vertical.
19. Ca părinte, vreau să văd adresa și linkurile de social media în footer, astfel încât să pot verifica prezența online a afterschool-ului.
20. Ca administrator, vreau ca toate contactele să vină prin WhatsApp, astfel încât să gestionez înscrierea în canalul pe care îl folosesc deja.
21. Ca administrator, vreau să pot înlocui ușor pozele și testimonialele, astfel încât să actualizez site-ul după ședința foto profesionistă.
22. Ca administrator, vreau ca site-ul să fie live înainte de 15 iunie 2026, astfel încât să am timp să strâng 25-30 de înscrieri pentru vară.

## Implementation Decisions

### Stack și hosting
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animații**: Framer Motion
- **Hosting**: Vercel
- **Domeniu**: didischool.ro
- **Mobile-only**: viewport optimizat exclusiv pentru mobile, fără breakpoint-uri desktop

### Structura paginii (de sus în jos)
1. **Hero** — logo + titlu "Didi Summer School" + subtitlu "cea mai frumoasă vară a copilului tău" + 4 detalii (dată, vârstă, locație, ore) + buton CTA primar
2. **Spațiu** — 1-2 poze reale ale curții + text despre facilități (2000 mp, trambulină, fotbal, căsuță în copac)
3. **O zi tipică** — timeline vertical cu orele zilei (08:00–17:00)
4. **Carousel 1 — Activități incluse** — swipeable orizontal cu progress bar, câte o rățușcă per card
5. **Carousel 2 — Ateliere extra** — același format, pentru programare/engleză/artă
6. **FAQ** — 5 întrebări expandabile (accordion)
7. **Testimoniale** — 2 carduri cu citate (placeholder până la colectare)
8. **Prețuri** — 1 card mare (80+20 lei/zi) + 3 carduri mici (ateliere extra)
9. **CTA final** — buton WhatsApp mare + "Locuri limitate"
10. **Footer** — adresă + 3 iconițe social (WhatsApp, Facebook, Instagram)

### Sistem de culori per secțiune
| Secțiune | Fundal |
|----------|--------|
| Hero | `#FFD700` (galben) |
| Spațiu | `#FFFBF0` (crem) |
| O zi tipică | `#BBF7D0` (verde mentă deschis) |
| Carousel activități incluse | `#FFFBF0` |
| Carousel ateliere extra | `#BFDBFE` (albastru deschis) |
| FAQ | `#FFFBF0` |
| Testimoniale | `#FECACA` (coral deschis) |
| Prețuri + CTA | `#FFD700` |

### Tipografie
- **Titluri**: Fredoka One (Google Fonts)
- **Text**: Nunito (Google Fonts)

### Animații și micro-interacțiuni (stil Duolingo)
- La load: rățusca din hero face bounce din jos în sus; elementele hero apar în cascadă cu 150ms delay între ele
- La scroll: fiecare secțiune face fade-in + slide-up cu Framer Motion (`whileInView`)
- Rățustele din carousel fac un mic bounce/pop când intră în viewport
- Butonul WhatsApp floating face un pulse subtil la fiecare 3-4 secunde

### Wavy dividers
Între fiecare secțiune, un SVG cu formă ondulată care face tranziția naturală între culorile de fundal. Valul ia culoarea fundal a secțiunii de jos.

### Buton WhatsApp floating
- Fix în dreapta jos pe toată pagina
- Link: `https://wa.me/40724223600?text=Bun%C4%83%21+Vreau+informa%C8%9Bii+despre+Summer+School+Didi+2026.`
- Z-index deasupra tuturor elementelor
- Iconița WhatsApp cu un badge verde animat

### Carousel orizontal
- Touch/swipe nativ pe mobile
- Progress bar în partea de sus a secțiunii arată poziția curentă (ex: 3 din 5 carduri)
- Fiecare card: ilustrație rățuscă + titlu activitate + 1-2 propoziții descriere

**Carduri Carousel 1 — Activități incluse:**
| Activitate | Rățușcă | Notă |
|------------|---------|------|
| Joacă liberă | duck-ball.png | disponibil |
| Teme de vacanță | duck-book.png | + "2 cadre didactice acreditate" |
| Prânz | placeholder | duck + farfurie |
| Activități în curte | duck-ball.png | reuse acceptabil |

**Carduri Carousel 2 — Ateliere extra:**
| Atelier | Rățușcă | Preț |
|---------|---------|------|
| Programare | duck-laptop.png | 75 lei/sesiune |
| Engleză | placeholder | 50 lei/sesiune |
| Artă | placeholder | 50 lei/sesiune |

### FAQ — întrebări și răspunsuri
1. *Ce include prețul de 80 lei/zi?* — supraveghere completă 8-17, activități în curte, teme de vacanță cu cadre didactice acreditate, 2 ateliere pe zi
2. *Mâncarea e inclusă?* — Nu, 20 lei/zi separat. Fiecare familie alege furnizorul, noi coordonăm comanda.
3. *Ce vârste acceptați vara?* — De la grădiniță până în clasa a IV-a.
4. *Cum ajunge copilul?* — Părintele aduce dimineața și îl ia după ora 17:00.
5. *Cine supraveghează copiii?* — Cadre didactice acreditate și specialiști în domeniu pentru ateliere.

### Secțiunea Prețuri
- Card principal: "Summer School — 80 lei/zi + 20 lei masă" cu lista de ce include (checkmarks)
- 3 carduri secundare: Programare 75 lei/ses · Engleză 50 lei/ses · Artă 50 lei/ses
- Nota sub carduri: "Atelierele extra se achiziționează separat"

### Footer
- Text: © 2026 Didi Afterschool · Giroc, Județul Timiș
- Iconițe: WhatsApp (`wa.me/40724223600`) · Facebook (`facebook.com/profile.php?id=100094616035336`) · Instagram (redirectează la Facebook temporar)

### Assets disponibile
- `/images/logo.jpg` — logo actual (placeholder, rebrand planificat)
- `/images/duck.png` — rățuscă generică
- `/images/duck-book.png` — rățuscă cu carte
- `/images/duck-ball.png` — rățuscă cu minge
- `/images/duck-laptop.png` — rățuscă cu laptop
- Poze curte: furnizate de client (vechi, placeholder până la ședința foto)
- Testimoniale: 2 placeholder ("Mamica 1", "Mamica 2")

### Tone of voice
Informal, "tu/voi". Ton cald, entuziast, de familie.

## Testing Decisions

Un test bun verifică comportamentul din perspectiva utilizatorului, nu detaliile de implementare. Nu testăm clase CSS sau structura internă a componentelor.

**Module de testat:**
- **Link WhatsApp** — verifică că URL-ul generat conține numărul corect și mesajul pre-completat corect encodat
- **Carousel** — verifică că navigarea orizontală avansează corect între carduri și că progress bar-ul reflectă poziția curentă
- **FAQ accordion** — verifică că un item se deschide la click și că alt item deschis se închide

**Module care nu necesită teste automate** (verificare manuală pe device):
- Animațiile Framer Motion
- Wavy dividers (vizual)
- Butonul floating WhatsApp (vizual + tap)
- Responsive layout pe mobile real

## Out of Scope

- **Desktop** — site-ul este mobile-only; nu există design sau breakpoint-uri pentru ecrane mai mari de 768px
- **Formular de înscriere** — toată conversia merge prin WhatsApp; nu există backend, bază de date sau trimitere de email
- **CMS** — conținutul e hardcodat; nu există panou de administrare
- **Pagina de program anual** — site-ul prezintă exclusiv Summer School 2026; programul septembrie–iunie nu are secțiune dedicată
- **Multilingv** — doar română
- **Google Maps embed** — footer conține doar adresa text
- **Blog sau conținut dinamic**
- **Autentificare sau conturi de utilizator**
- **Robotică / 3D Printing** — ateliere planificate dar neconfirmate, nu apar pe site

## Further Notes

- **Deadline real**: site-ul trebuie live înainte de 15 iunie 2026. Vacanța de vară începe atunci.
- **Rățuștele**: 4 ilustrații disponibile acum, restul sunt placeholder. Site-ul trebuie construit astfel încât înlocuirea unei imagini să nu necesite modificări de cod — toate imaginile vin din `/images/` cu nume predictibile.
- **Testimonialele**: placeholder "Mamica 1 / Mamica 2" până când clientul colectează citate reale de la părinți. Structura componentei trebuie să facă înlocuirea trivială.
- **Logo**: `/images/logo.jpg` este temporar. Rebrand planificat — componenta Logo trebuie să accepte orice fișier din `/images/logo.*` fără modificări de cod.
- **Instagram**: linkul din footer duce la Facebook până când pagina de Instagram e creată. O singură constantă în cod pentru URL-ul Instagram va face actualizarea trivială.
- **Atelierele extra**: momentan doar Programare e confirmată. Engleză și Artă sunt în curs. Componenta carousel trebuie să permită adăugarea/eliminarea de carduri fără restructurare.
- **Conversia din summer school în abonați anuali** (septembrie) este obiectivul strategic pe termen lung — acest site e primul pas dintr-o campanie mai mare.
