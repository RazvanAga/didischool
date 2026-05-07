# Descriere completă — didischool.ro

Versiune documentată: Mai 2026. Documentul descrie starea exactă a codului și a designului la momentul scrierii.

---

## 1. Context și scop

**Didi Afterschool** este un afterschool de familie în Giroc, județul Timiș, amplasat pe un teren de 2.000 m². Website-ul `didischool.ro` servește ca instrument principal de conversie pentru **Summer School 2026** (15 iunie – 15 septembrie), cu obiectivul de a genera 25–30 de înregistrări de copii înainte de deschidere.

Canalul principal de contact este **WhatsApp** — butonul CTA de pe site deschide direct o conversație cu numărul administratorului (`+40724223600`) cu un mesaj pre-completat.

---

## 2. Stack tehnic

| Componentă | Alegere |
|---|---|
| Framework | Next.js 15.3.1 cu Turbopack |
| Styling | Tailwind CSS 3.4 |
| Animații | Framer Motion 11 |
| Fonturi | Google Fonts via `next/font` |
| Hosting | Vercel |
| Domeniu | didischool.ro |
| Limbă | Română (`lang="ro"`) |

Site-ul este **mobile-only**: coloana de conținut are `max-width: 430px` și este centrată pe desktop cu un fundal `paper-edge` în jur, imitând o pagină de carte. Nu există layout de desktop și nici queries media de lățime.

---

## 3. Sistem de design

### 3.1 Filosofia vizuală

Estetica este **„carte ilustrată pentru copii"**: textură de hârtie veche, fonturi scrise de mână, rame schițate cu creionul, fotografii „lipite" cu scotch, săgeți desenate manual, elemente ușor inclinate (±0.4°–4°) pentru a simula un scrapbook real. Nu există margini uniforme, nu există shadow-uri uniforme, nu există paleta curcubeu de pasteluri. Totul se întâmplă pe aceeași foaie de hârtie.

### 3.2 Paleta de culori

Definită în `tailwind.config.ts`:

| Token Tailwind | Hex | Rol |
|---|---|---|
| `ink` | `#2A2520` | Text principal, borduri, cerneală |
| `ink-soft` | `#5C4F42` | Text secundar, subtitrări |
| `paper` | `#FAF3E3` | Fundalul paginii (foaia de hârtie) |
| `paper-edge` | `#EADFC0` | Fundalul body-ului din spatele coloanei |
| `paper-shade` | `#F1E4C2` | Nuanță mai închisă de hârtie, folosită în interiorul placeholder-elor |
| `terracotta` | `#C25B3F` | Accent principal: CTA-uri, sublinieri, marcaje |
| `terracotta-deep` | `#9C4124` | Varianta mai închisă (rezervat) |
| `leaf` | `#5C7E4F` | Accent secundar: verde natural, bifă, crengute |
| `leaf-deep` | `#3F5A33` | Verde profund (orar ZiTipica) |
| `sun` | `#E8B53D` | Galben-muștar, scotch, tag-uri |
| `sky` | `#7AA8C4` | Albastru cerul (scotch carousel ateliere) |
| `plum` | `#7E3F5C` | Prună (rezervat pentru variante viitoare) |

### 3.3 Tipografie

Trei fonturi Google, încărcate prin `next/font/google` în `app/layout.tsx`:

**Caveat** (`--font-caveat`, weight 500 & 700)
- Caracter: scris de mână, mare, dramatic, lizibil la dimensiuni mari
- Folosit pentru: titluri principale (`h1`, `h2`), numere mari (prețuri), CTA-uri, semnătura brandului
- Dimensiuni tipice: `text-[78px]` (hero h1), `text-5xl` (titluri secțiuni), `text-2xl–3xl` (CTA, subtitluri mici)
- Suportă diacritice românești via `subsets: ['latin', 'latin-ext']`

**Patrick Hand** (`--font-patrick`, weight 400)
- Caracter: scris de mână mai ordonat, lizibil la corp de text, „caietul" unui copil îngrijit
- Folosit pentru: subtitluri de secțiuni, descrieri în carduri, etichete de rol, întrebări FAQ
- Dimensiuni tipice: `text-lg` (18px), `text-base` (16px), `text-sm`
- Suportă diacritice românești

**Nunito** (`--font-nunito`, weight variabil)
- Caracter: sans-serif rotunjit, maximum lizibilitate la corp mic
- Folosit pentru: răspunsuri FAQ (text lung), detalii mici în carduri de echipă, print mic
- Dimensiuni tipice: `text-sm` (14px), `text-[15px]`

Regula de selecție: Caveat pentru ce trebuie *văzut* de la distanță, Patrick Hand pentru ce trebuie *citit*, Nunito pentru ce trebuie *parcurs*.

### 3.4 Textura hârtiei

În `app/globals.css`, clasa `.paper-grain` adaugă un SVG noise tiled ca `background-image`:

```css
.paper-grain {
  background-image: url("data:image/svg+xml;utf8,<svg ...feTurbulence baseFrequency='0.85'...opacity='0.08'/>...</svg>");
  background-size: 160px 160px;
  background-blend-mode: multiply;
}
```

Noise-ul este un `feTurbulence` cu `fractalNoise`, opacitate 8%, blended multiply pe fundal. Efectul este subtil — o granulație fină vizibilă mai ales pe ecrane OLED sau la zoom. Nu afectează lizibilitatea textului.

### 3.5 Stiluri de card

Două clase globale în `globals.css`:

**`.card-paper`** — card cu „ștampilă" (offset shadow):
```css
background-color: #fffaee;
border: 1.5px solid #2A2520;
box-shadow: 4px 4px 0 -1px #2A2520;
```
Efectul vizual: bordură subțire cu `ink`, și o umbră offset de 4px fără blur, tot în `ink`. Imită un tampon de cauciuc sau un carton imprimat. Folosit în: carduri carousel.

**`.card-paper-soft`** — card cu umbră naturală (fără bordură):
```css
background-color: #fffaee;
box-shadow: 0 8px 20px -10px rgba(60, 40, 20, 0.25);
```
Imită o hârtie care plutește ușor deasupra altei hârtii. Folosit în: carduri echipă, FAQ, extras prețuri, orar.

### 3.6 Sublinieri tip scribble

Două clase CSS care adaugă o curbă SVG ca `background-image` sub text:

```css
.scribble-under       /* terracotta #C25B3F */
.scribble-under-leaf  /* verde frunza #5C7E4F */
```

SVG-ul este o curbă bezier `C 35 1, 70 11, 110 5 S 190 11, 218 4` — o undă neregulată care imită o subliniere trasă repede cu pixul. `background-size: 100% 0.5em`, se poziționează la `bottom`, cu `padding-bottom: 0.35em` pe span. Folosit pe cuvinte-cheie din titlurile de secțiune.

### 3.7 Linie punctată (separator intern)

```css
.dotted-rule {
  background-image: radial-gradient(circle, #c25b3f 1px, transparent 1.2px);
  background-size: 8px 8px;
  background-repeat: repeat-x;
  height: 8px;
}
```

Puncte terracotta la 8px distanță, pe o singură linie. Folosit în cardurile de carousel pentru a separa descrierea de prețul sesiunii, și în FAQ pentru a separa întrebarea de răspuns.

### 3.8 Imagini ilustrație (duck-img)

Toate ilustrațiile cu rățuști au fundalul alb în pixeli (format RGBA, dar conținut alb). Clasa `.duck-img` rezolvă:

```css
.duck-img {
  mix-blend-mode: multiply;
}
```

Formula multiply: `rezultat = pixel_imagine × pixel_fundal / 255`. Pixeli albi (255) × orice culoare = acea culoare → fundalul alb dispare. Culorile saturate ale rățuștei se mențin cu fidelitate pe fundal `#fffaee`.

### 3.9 Scotch (tape)

Elemente `<span>` goale sau `<div>` poziționate `absolute` cu:
- Lățime fixă (60px–96px), înălțime 16px–20px
- Background `rgba(232, 181, 61, 0.55–0.6)` — galben semi-transparent
- `box-shadow: 0 1px 2px rgba(60,40,20,0.15)` — umbra fină sub scotch
- Rotație `-2°` până la `-6°` pentru naturalețe
- Poziționat la `-top-2` (ieșind ușor deasupra elementului „lipit")

---

## 4. Biblioteca de componente grafice — Hand.tsx

Fișierul `components/Hand.tsx` exportă 8 primitive de design mână-liberă, toate SVG inline sau wrapper-e HTML. Niciuna nu are dependențe externe.

### ScribbleFrame
Ramă dreptunghiulară „desenată de mână" în jurul conținutului. Implementare: un `<div>` relativ cu un SVG `absolute inset-0 w-full h-full` deasupra. SVG-ul are două `<path>` cu același contur dar ușor decalate, imitând „desenat de două ori cu creionul". Atribut `vectorEffect="non-scaling-stroke"` menține grosimea liniei constantă indiferent de dimensiunea containerului (important că SVG-ul este `preserveAspectRatio="none"`). `padding` este un prop string de clase Tailwind aplicat pe div-ul interior.

### SquigglyUnderline
Wrapper `<span>` care aplică `.scribble-under` sau `.scribble-under-leaf` în funcție de prop-ul `color`. Alternativă la clasele CSS directe când sublinierea trebuie aplicată unui fragment inline dintr-un paragraf mai lung.

### TildeDivider
Separator de secțiune: `~ ✦ ~` (sau alt simbol via prop `symbol`) în font Caveat, opacitate redusă, `py-6`. Înlocuiește WavyDivider SVG-ul. Rol: respirație între secțiuni, nu tranziție de culoare. `aria-hidden` — decorativ pur.

### HandArrow
Săgeată curbată SVG, 60×60 viewBox. Corpul: o curbă bezier de la `(6,8)` la `(46,50)`. Capul: un unghi deschis la `(47,51)`. Rotație prin clase Tailwind (`rotate-[60deg]`, `rotate-12` etc.). Culoare și dimensiune configurabile prin props.

### TapedPhoto
Wrapper pentru fotografii reale (când vor fi disponibile). `<div>` alb cu padding 2/4, umbră de 6px, rotit prin prop `rotate`. Deasupra: `<span>` scotch galben. `<Image>` ocupă lățimea completă. Momentan nefolosit direct pe pagină (se folosesc `TapedPlaceholder`-uri).

### TapedPlaceholder
Variantă de TapedPhoto pentru locul în care vor veni fotografii reale. În loc de `<Image>` afișează un `<div>` `bg-paper-shade` cu un pattern de linii diagonale subțiri terracotta (6% opacitate) și o legendă în font Caveat (`"foto curte — în curând"` etc.). Același scotch galben deasupra, aceeași rotație și umbră.

### PencilCheck
Bifă SVG stilizată. Curbă bezier care imită un ✓ tras cu mâna — nu merge drept, are o ușoară curbură la baza liniei. Folosit în lista de incluziuni din secțiunea Prețuri.

### PencilCircle
Cerc SVG mic (bullet). Conturul este o curbă închisă (nu un `<circle>` perfect). Prop `filled` umple interiorul cu culoarea strokeului. Alternanță terracotta/leaf în liste, filled/outline în funcție de index. Folosit în: lista facilităților (Spațiu), orar (ZiTipica — dotat), întrebări FAQ (filled când deschis).

### LeafScribble
Frunzuliță SVG: o formă bean cu margine stroke și fill 10% opacitate, plus o nervură centrală. Ornament de margine, decorativ.

### StarSparkle
Stea cu 4 brațe (X și +) formată din 4 linii stroke. Brațele diagonale sunt la 70% opacitate față de brațele orizontale/verticale. Ornament de accent, folosit flanând titluri sau marcând limite de capacitate.

---

## 5. Layout global

**`app/layout.tsx`**

```tsx
<html lang="ro">
  <body className="font-nunito bg-paper-edge text-ink">
    <div className="max-w-[430px] mx-auto relative bg-paper paper-grain shadow-[0_0_60px_rgba(60,40,20,0.08)]">
      {children}
    </div>
  </body>
</html>
```

- `body`: fundal `paper-edge` (#EADFC0) pe tot viewport-ul
- Coloana interioară: `max-w-[430px]`, fundal `paper` (#FAF3E3) cu grain, umbră foarte subtilă (60px blur, 8% opacitate) — efectul „pagina scoasă din caiet"
- Font implicit `nunito`; secțiunile suprascriu cu `caveat` sau `patrick`

**`app/globals.css`**

Conține: reset box-model, overflow-x hidden, clasele `.paper-grain`, `.scribble-under`, `.scribble-under-leaf`, `.tape`, `.card-paper`, `.card-paper-soft`, `.dotted-rule`, `.duck-img`.

---

## 6. Fluxul paginii

```
Hero
  ~ ✦ ~
Spațiu
  ~ ✿ ~
Zi Tipică
  ~ ✦ ~
Carousel: Ce face copilul
  ~ ✶ ~
Carousel: Ateliere extra
  ~ ✦ ~
Echipa
  ~ ✿ ~
FAQ
  ~ ✦ ~
Prețuri
Footer
[WhatsApp floating button]
```

Toate secțiunile stau pe același fundal paper. Separatoarele `TildeDivider` sunt singurul element de tranziție.

---

## 7. Secțiunile în detaliu

---

### 7.1 Hero

**Fișier:** `components/Hero.tsx`

**Animații la încărcare** (Framer Motion, nu `whileInView` — se declanșează imediat):
- Blocul titlu: `opacity 0→1, y 14→0`, 600ms, easeOut
- Rățușca: `opacity 0→1, y 30→0`, 700ms delay 200ms, easeOut
- CTA button: `opacity 0→1, y 10→0`, 500ms delay 400ms

**Structura vizuală de sus în jos:**

**① Logo — tag lipit în colțul dreapta-sus**
- Container `<div>` alb, `p-1.5`, rotit `+3°`, umbră `0 4px 12px -6px rgba(60,40,20,0.4)`
- `<Image>` logo.jpg, 62×62px, `object-cover` (pătrat)
- Scotch galben deasupra, rotit `-6°`

**② ScribbleFrame — ramă conținând titlul**
- Ramă ink `#2A2520`, strokeWidth 2 (+ o a doua curbă la 70%, opacity 0.5)
- padding: `px-5 pt-7 pb-5`
- Interior, centrat:
  - `StarSparkle` 16px terracotta, stânga sus, rotit `-12°`
  - `StarSparkle` 14px sun (#E8B53D), dreapta sus, rotit `+12°`
  - `<h1>` **Didi** — Caveat Bold, 78px, `text-ink`, `leading-none`
  - `<p>` **Summer School** (ink-soft) + **2026** (terracotta) — Patrick Hand, 24px
  - Undă SVG decorativă — curbă bezier terracotta, 176px lățime, 12px înălțime, `aria-hidden`
  - `<p>` *cea mai frumoasă vară / a copilului tău* — Patrick Hand, 18px, `text-ink-soft`, `leading-snug`

**③ Rățușca principală**
- `duck.png`, 210×210px, `object-contain duck-img` (mix-blend-mode multiply)
- `LeafScribble` 26px verde, stânga sus, rotit `-12°` (ornament margine)
- `LeafScribble` 20px verde, dreapta jos, rotit `+45°`

**④ Metadate — text simplu, fără chip-uri**
- Rând 1 (Patrick Hand, 16px, ink-soft): `15 iunie – 15 septembrie ~ Giroc, Timiș`  
  (`~` este un `<span className="mx-2 text-terracotta">`)
- Rând 2 (Patrick Hand, 14px, ink-soft/80): `zilnic 08:00 – 17:00 · grădiniță – cls. a IV-a`

**⑤ CTA WhatsApp**
- `<a>` block, 100% lățime, `py-4`
- Background `terracotta` (#C25B3F), text `paper` (#FAF3E3)
- Border `2px ink`, shadow `5px 5px 0 -1px ink` (ștampilă offset)
- La `:active`: translate `+2px/+2px`, shadow se reduce la `2px 2px` — efect de apăsare
- Font Caveat Bold, 24px: **scrie-ne pe WhatsApp →**
- Tag `<span>` flotant stânga sus pe buton: **„doar 30 de locuri"**
  - Rotit `-3°`, fundal `sun` (#E8B53D), border ink, shadow offset 2px
  - Font Caveat, 16px, ink

**⑥ Invitație de scroll**
- Text Caveat 20px ink-soft, rotit `-2°`: *mai jos: ce face copilul aici*
- `HandArrow` verde, 42px, rotit `60°` (indică în jos-dreapta)

---

### 7.2 Spațiu

**Fișier:** `components/Spatiu.tsx`

Animație intrare: `opacity 0→1, y 24→0`, 500ms, `whileInView once` cu margin `-60px`.

**① Titlu**
- Caveat Bold 48px, ink, centrat, rotit `-1°`
- Text: *un loc unde copiii* / ***vor*** *să vină*
- „vor" are clasa `.scribble-under` (subliniere terracotta)

**② Subtitlu**
- Patrick Hand 18px, ink-soft: *2000 m² de curte. fără ecran, fără grabă.*

**③ Scrapbook de fotografii suprapuse**
- Container `relative h-72` (288px înălțime)
- **Placeholder stânga** (TapedPlaceholder): `absolute left-0 top-0`, lățime 62%, rotit `-3°`
  - Înălțime interioară `h-44` (176px)
  - Caption: *„foto curte — în curând"*
- **Placeholder dreapta** (TapedPlaceholder): `absolute right-0 top-20` (80px jos), lățime 55%, rotit `+4°`
  - Înălțime `h-32` (128px)
  - Caption: *„căsuța din copac"*
- Cele două se suprapun parțial, creând efectul de poze aruncate pe masă

**④ Lista facilităților**
- Container relativ. Deasupra: `<span>` Caveat 20px leaf, rotit `-6°`: *„ce găsesc afară:"*
- `<ul>` cu `mt-8` (spațiu sub label)
- 6 iteme animate staggered (`delay: i * 0.06`), slide din stânga `-8px`
- Fiecare item: `PencilCircle` (alternează terracotta/leaf, filled la fiecare al 3-lea) + text Patrick Hand 18px ink
- Conținut: *porți de fotbal · masă de ping-pong · căsuță în copac · trotinete și jucării · colț de lectură afară · curte cu iarbă, 2000 mp*

**⑤ Rățușca cu mingea**
- `duck-ball.png`, 130×130px, `duck-img`
- Animată `whileInView`: `opacity 0→1, scale 0.85→1, rotate -8→-4deg`, spring, delay 150ms
- Flanată de `HandArrow` verde, 48px, rotit `+12°` (indică spre rățușcă)
- Aliniată dreapta jos

---

### 7.3 Zi Tipică

**Fișier:** `components/ZiTipica.tsx`

**① Titlu**
- Caveat Bold 48px, centrat, rotit `+1°`
- Text: *o* ***zi*** *la Didi* — „zi" cu `.scribble-under-leaf` (subliniere verde)

**② Subtitlu**
- Patrick Hand 18px, ink-soft: *în mare, cam așa arată — dar zilele bune nu se țin de orar.*

**③ Timeline vertical**
- Container `relative pl-2`
- **Linia verticală**: SVG `absolute left-[68px]`, `viewBox="0 0 4 100"`, `preserveAspectRatio="none"`, curbă bezier `Q 1 25 2.5 50 Q 1.5 75 2 100` — imită o linie trasă cu mâna, verde (#5C7E4F), opacitate 70%
- **7 iteme de orar**, animate staggered slide din stânga:

| Ora | Activitate |
|---|---|
| 08:00 | sosire & joacă liniștită |
| 08:30 | mic dejun împreună |
| 09:00 | atelier de dimineață |
| 10:30 | joacă liberă în curte |
| 12:00 | prânz |
| 13:00 | al doilea atelier |
| 14:30 | joacă supravegheată până la plecare |

- **Structura fiecărui item** (flex, `items-start`, `gap-4`):
  - **Ora**: `w-[58px]` text-right, Caveat 20px `leaf-deep`, `pt-1.5`
  - **Punct**: `PencilCircle` 16px verde, filled, `z-10`, `mt-2`
  - **Card activitate**: `.card-paper-soft`, flex-1, `px-3.5 py-2`, rotit alternant `±0.4°/0.5°`, Patrick Hand 16px ink

**④ Notă de subsol**
- Caveat 20px ink-soft, centrat, rotit `-1°`: *+ multă curte, multe râsete*

---

### 7.4 Carousel: Ce face copilul

**Fișier:** `components/HorizontalCarousel.tsx` — instanță 1

**Props:** `sectionTitle="ce face copilul aici"`, `intro="o zi obișnuită are de toate — afară, înăuntru, împreună."`, `accent="terracotta"`

**Titlu secțiune**: Caveat Bold 48px, rotit `-1°`, cu `.scribble-under` (terracotta)

**Indicator pagina**: Caveat 20px ink-soft: `1 / 4` + 4 dots (dot activ = 18×7px terracotta, inactiv = 7×7px `#D6C9A4`). Clic pe dot navighează direct la card.

**Swipe**: Framer Motion `drag="x"` cu `dragElastic: 0.15`. Threshold drag: ±40px sau ±300px/s velocitate. Spring: stiffness 280, damping 30.

**Instrucțiune**: Caveat 14px ink-soft/70: `← trage pentru a vedea mai mult →`

**4 carduri** (250px lățime, 18px gap):

| Card | Titlu | Descriere | Ilustrație |
|---|---|---|---|
| 1 | joacă în curte | trambulină, ping-pong, fotbal și o căsuță în copac. | duck-ball.png |
| 2 | teme de vacanță | supervizate zilnic de două cadre didactice acreditate. | duck-book.png |
| 3 | prânzul | fiecare familie alege furnizorul preferat — noi coordonăm comanda. | duck-curious.png |
| 4 | activități creative | artă, muzică, jocuri de echipă — diferite în fiecare zi. | duck-girl.png |

Card 3 are `note: "20 lei/zi, opțional"` — afișat după dotted-rule în terracotta Caveat.

**Structura unui card**:
- `.card-paper` (bordură ink offset shadow)
- Rotit `-1.2°` (index par) sau `+1.4°` (index impar)
- Scotch galben deasupra, rotit `-3°`
- `<Image>` 120×120px `.duck-img`, centrat, `mb-3`
- Titlu Caveat Bold 30px ink
- Descriere Patrick Hand 16px ink-soft centrat
- Opțional: `dotted-rule` + prețul în Caveat 18px terracotta

---

### 7.5 Carousel: Ateliere Extra

**Fișier:** `components/HorizontalCarousel.tsx` — instanță 2

**Props:** `sectionTitle="ateliere extra"`, `intro="opționale, pentru copii curioși."`, `accent="leaf"`

Titlul are `.scribble-under-leaf` (verde), dots-ul activ este verde `#5C7E4F`, scotch-ul cardurilor este albastru-cerul `rgba(122, 168, 196, 0.55)`.

**3 carduri**:

| Card | Titlu | Descriere | Preț | Ilustrație |
|---|---|---|---|---|
| 1 | programare | Scratch, Python, Hour of Code în Minecraft. predat de Razvan. | 75 lei / sesiune | duck-laptop.png |
| 2 | engleză | conversație și vocabular prin joc, adaptat vârstei. | 50 lei / sesiune | duck-globe.png |
| 3 | artă | pictură, colaj, creativitate fără limite — cu Kasiia. | 50 lei / sesiune | duck-paint.png |

Toate cardurile au `note` deci afișează dotted-rule și prețul în verde Caveat.

---

### 7.6 Echipa

**Fișier:** `components/Echipa.tsx`

Înlocuiește complet secțiunea de testimoniale placeholder. Prezintă cele 5 persoane reale din echipă.

**① Titlu**
- Caveat Bold 48px, centrat
- Text: *oamenii pe care îi* ***cunoaște*** *copilul* — „cunoaște" cu `.scribble-under-leaf`

**② Subtitlu**
- Patrick Hand 18px: *aceiași oameni, în fiecare zi. fără rotație, fără surprize.*

**③ 5 carduri de persoană** (`.card-paper-soft`, rotite alternant `±0.6°/0.7°`)

Animate staggered: cele pare (`i % 2 === 0`) vin din stânga `-10px`, cele impare din dreapta `+10px`.

Structura fiecărui card (flex, `items-start`, gap 14px):

**Avatar**: cerc 48×48px, Caveat Bold 30px, text alb (`paper`), inițiala numelui. Culori:

| Persoană | Inițială | Culoare avatar |
|---|---|---|
| Ana | A | Terracotta `#C25B3F` |
| Diana | D | Leaf `#5C7E4F` |
| Dorin | D | Plum `#7E3F5C` |
| Razvan | R | Sun `#E8B53D` |
| Kasiia | K | Sky `#7AA8C4` |

**Conținut text**:
- Caveat Bold 24px ink: **Numele**
- Patrick Hand 14px terracotta: *rolul*
- Nunito 14px ink-soft: detaliu uman (o propoziție, tonul conversațional)

**Detalii per persoană**:

- **Ana** / *învățătoare* / „cadru didactic activ la școala din Giroc — ține grupul ancorat în pedagogie reală."
- **Diana** / *asistă Ana* / „specializată în pedagogie; răspunde de ritmul zilei și de teme."
- **Dorin** / *administrație* / „omul cu cheile, cu lista de prânzuri și cu zâmbetul de dimineață."
- **Razvan** / *atelier de programare* / „co-fondator; predă Scratch, Python și Hour of Code în Minecraft."
- **Kasiia** / *engleză & artă* / „conversație prin joc, pictură și colaj — cu copii curioși."

**④ Notă de subsol**
- `StarSparkle` 14px sun, stânga, rotit `-12°`
- `LeafScribble` 20px verde, dreapta, rotit `+12°`
- Caveat 20px ink-soft, rotit `-1°`: *5 oameni, 30 de copii. ne cunoaștem.*

---

### 7.7 FAQ

**Fișier:** `components/FAQ.tsx`

Primul item este deschis implicit (`useState(0)`).

**① Titlu**
- Caveat Bold 48px: *ce* ***ne întrebați*** — „ne întrebați" cu `.scribble-under` (terracotta)

**② Subtitlu**
- Patrick Hand 18px, ink-soft: *mai bine întrebați acum decât pe 14 iunie.*

**③ 5 iteme expand/collapse** (`.card-paper-soft`, rotite `±0.4°/0.5°` alternant)

Fiecare item:
- **Header (button)**: flex, `items-start`, `justify-between`
  - Stânga: `PencilCircle` 12px terracotta (filled când deschis, outline când închis) + Patrick Hand 18px ink
  - Dreapta: SVG chevron (curbă `Q 7 9, 12 2`) animat rotire 0→180° la deschidere, 280ms
- **Body** (AnimatePresence, `height: 0→auto`, opacity 0→1, 280ms ease):
  - `dotted-rule` separator
  - Nunito 15px ink-soft, `leading-relaxed`, `pl-5`

**Întrebările și răspunsurile**:

| Întrebare | Răspuns |
|---|---|
| Ce intră în 80 lei pe zi? | Supraveghere completă 08:00–17:00, joacă în curte, teme de vacanță cu două cadre didactice acreditate și minimum două ateliere zilnic. |
| Mâncarea e inclusă? | Nu — masa costă 20 lei/zi, separat. Fiecare familie alege furnizorul preferat, iar noi coordonăm comanda. |
| Ce vârste primiți vara? | De la grădiniță până la finalul clasei a IV-a. Grupăm copiii pe intervale de vârstă pentru ateliere. |
| Cum ajunge copilul la afterschool? | Părinții îl aduc dimineața și îl iau oricând după ora 17:00. Suntem pe strada principală din Giroc. |
| Cine îi supraveghează? | Două cadre didactice acreditate sunt prezente toată ziua. La ateliere intră specialiști pe domeniu (programare, engleză, artă). |

---

### 7.8 Prețuri

**Fișier:** `components/Preturi.tsx`

**① Titlu**
- Caveat Bold 48px: *cât* ***costă?*** — „costă?" cu `.scribble-under`

**② Subtitlu**
- Patrick Hand 18px: *un preț, fără surprize.*

**③ Card principal de preț (ScribbleFrame)**
- Ramă double-path ink, strokeWidth 2.2
- Scotch galben deasupra, rotit `-2°`
- **Prețul**: `80` Caveat Bold 72px terracotta + `lei` Patrick Hand 24px + `/ zi` Caveat 24px ink-soft
- **Subtext**: *+ 20 lei masa, opțional* — Patrick Hand 16px ink-soft
- **Lista de incluziuni** (4 iteme cu `PencilCheck` verde 20px):
  - supraveghere 08:00 – 17:00
  - curte deschisă (2000 m²)
  - teme de vacanță
  - minimum 2 ateliere pe zi

**④ Grid ateliere extra (3 coloane)**

Label deasupra: Caveat 24px ink-soft, rotit `-1°`: *ateliere extra (opționale)*

Fiecare mini-card (`.card-paper-soft`, rotite `-1°/0°/+1°` individual):
- `<Image>` 56×56px `.duck-img`
- Caveat Bold 20px ink (numele atelierului)
- Patrick Hand 12px terracotta: `[preț] / sesiune`

| Atelier | Preț | Ilustrație |
|---|---|---|
| programare | 75 lei | duck-laptop.png |
| engleză | 50 lei | duck-globe.png |
| artă | 50 lei | duck-paint.png |

**⑤ CTA WhatsApp** (identic cu cel din Hero)
- Terracotta, border ink, shadow offset 5px
- Text Caveat Bold 24px: *scrie-ne pe WhatsApp →*
- Tag flotant dreapta sus, rotit `+3°`: *„răspundem în câteva ore"* — pe fundal paper, border ink, shadow offset 2px

**⑥ Notă capacitate**
- `StarSparkle` terracotta (stânga) + Caveat 18px ink-soft: *doar 30 de locuri vara aceasta* + `StarSparkle` (dreapta)

---

### 7.9 Footer

**Fișier:** `components/Footer.tsx`

Fundal `bg-paper-shade` (#F1E4C2) — singura secțiune cu un ton de hârtie ușor diferit, semnalând încheierea.

**① Separator decorativ superior**
- SVG undă (curbă bezier) terracotta, 192px lățime, 12px înălțime, opacitate 70%

**② Marca**
- `Didi` — Caveat Bold 36px ink (semnătură brand)
- *afterschool & summer school / Giroc, județul Timiș* — Patrick Hand 16px ink-soft

**③ Icoane sociale**
- WhatsApp, Facebook, Instagram — SVG-uri inline, 20×20px
- Culoare normală: `ink-soft`; la hover: `terracotta`; tranziție `transition-colors`

**④ Tagline**
- Caveat 16px ink-soft/70: *ne vedem la poartă, vara aceasta.*

---

### 7.10 Buton WhatsApp flotant

**Fișier:** `components/WhatsAppButton.tsx`

- `fixed bottom-5 right-4 z-50`
- Cerc 56×56px, background `#25D366` (WhatsApp green)
- Border 2px ink, shadow offset `3px 3px 0 -1px ink` — același stil ștampilă
- La `:active`: translate `+1px/+1px`, shadow se reduce la `1px 1px`
- **Animație la intrare**: `scale 0→1, rotate -20→0deg`, spring stiffness 240, damping 18, delay 1.4s — apare după ce utilizatorul a văzut deja butonul din Hero
- **Nu pulsează** (eliminat față de versiunea anterioară)
- SVG WhatsApp alb, 26×26px

---

## 8. Assets

**Locație**: `public/images/`

| Fișier | Format | Dimensiune | Folosit în |
|---|---|---|---|
| `logo.jpg` | JPEG | 879×873px | Hero (tag lipit) |
| `duck.png` | RGBA PNG | 2816×1536px | Hero (principal) |
| `duck-ball.png` | RGBA PNG | 2816×1536px | Spațiu, Carousel activități |
| `duck-book.png` | RGBA PNG | 2816×1536px | Carousel activități |
| `duck-curious.png` | RGBA PNG | 2816×1536px | Carousel activități (prânz) |
| `duck-girl.png` | RGBA PNG | 2760×1504px | Carousel activități (creative) |
| `duck-laptop.png` | RGBA PNG | 2816×1536px | Carousel ateliere, Prețuri |
| `duck-globe.png` | RGBA PNG | 2816×1536px | Carousel ateliere, Prețuri |
| `duck-paint.png` | RGBA PNG | 2816×1536px | Carousel ateliere, Prețuri |
| `duck-ping-pong.png` | RGBA PNG | 2816×1536px | Nefolosit momentan |

Toate PNG-urile sunt RGBA dar conțin pixeli albi (nu transparență reală). Clasa `.duck-img` (`mix-blend-mode: multiply`) compensează.

**Fotografii reale**: lipsesc momentan. `TapedPlaceholder`-urile din Spațiu (`"foto curte — în curând"` și `"căsuța din copac"`) marchează exact locul unde vor intra. Când fotografiile sunt disponibile, se înlocuiesc cu `TapedPhoto` (același API, src real în loc de caption).

---

## 9. Constante și configurație

**`lib/constants.ts`**:

```ts
WA_NUMBER  = '40724223600'
WA_MESSAGE = 'Bună! Vreau informații despre Summer School Didi 2026.'
WA_LINK    = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`

SOCIAL_LINKS = {
  whatsapp:  `https://wa.me/${WA_NUMBER}`,
  facebook:  'https://www.facebook.com/profile.php?id=100094616035336',
  instagram: 'https://www.facebook.com/profile.php?id=100094616035336',  // același link ca FB momentan
}
```

---

## 10. Ce lipsește / ce urmează

| Item | Status |
|---|---|
| Fotografii reale din curte și căsuță | TapedPlaceholder-uri pregătite |
| Link Instagram real | Momentan același ca Facebook |
| Testimoniale reale de la părinți | Secțiunea Echipa poate fi completată/extinsă |
| Prețul real pe zi (80 lei sau 60-65 lei) | Verificat cu echipa — în cod: 80 lei |
| SEO — Open Graph, og:image | `metadata` de bază în layout.tsx, lipsesc og:image și twitter cards |
| Analytics / Pixel | Neimplementat |

---

*Document generat pe baza codului sursă din `C:\Users\Razvan\Projects\didischool`, Mai 2026.*
