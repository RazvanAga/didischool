## What to build

Secțiunea Hero este primul lucru pe care îl vede un părinte. Conține logo-ul Didi, titlul principal, subtitlul, 4 chip-uri cu detalii esențiale, un badge de urgență și butonul CTA primar către WhatsApp.

**Conținut:**
- Logo: `/images/logo.jpg`
- Titlu: "Didi Summer School" (Fredoka One, mare)
- Subtitlu: "cea mai frumoasă vară a copilului tău" (Nunito)
- 4 chip-uri: 📅 15 iunie – 15 septembrie · 👶 Grădiniță – Clasa a IV-a · 📍 Giroc, Timiș · 🕗 08:00 – 17:00
- Badge: "Locuri limitate" (mic, colorat)
- Buton CTA: "Înscrie-te acum" → link WhatsApp identic cu butonul floating
- Fundal: `brand-yellow`

**Animație la load (Framer Motion):**
1. Rățusca/logo-ul face bounce din jos în sus când pagina se încarcă (spring animation)
2. Titlul apare cu fade-in + slide-up
3. Subtitlul apare la 150ms după titlu
4. Chip-urile apar la 300ms, în cascadă cu 100ms între ele
5. Butonul CTA apare ultimul, la ~600ms

Rățusca folosită în hero este `/images/duck.png` poziționată decorativ lângă titlu sau dedesubt.

## Acceptance criteria

- [ ] Logo-ul `/images/logo.jpg` este vizibil în hero
- [ ] Titlul "Didi Summer School" este randat cu Fredoka One
- [ ] Toate cele 4 chip-uri sunt vizibile cu iconițele corespunzătoare
- [ ] Badge-ul "Locuri limitate" este vizibil
- [ ] Butonul CTA deschide WhatsApp cu numărul și mesajul pre-completat corect
- [ ] La încărcarea paginii, duck-ul face bounce și elementele apar în cascadă
- [ ] Animația completă durează sub 1 secundă
- [ ] Fundalul secțiunii este `brand-yellow`
- [ ] `WavyDivider` conectează hero-ul cu secțiunea următoare

## Blocked by

- `01-project-scaffolding.md`
