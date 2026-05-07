## What to build

Secțiunea de prețuri cu carduri vizuale clare, un CTA final mare și footer-ul cu informații de contact.

---

### Secțiunea Prețuri + CTA

Titlu: "Cât costă?"
Fundal: `brand-yellow`

**Card principal — Summer School:**
- Titlu: "Summer School Didi"
- Preț mare: "80 lei / zi"
- Sub-preț: "+ 20 lei masă"
- Listă cu ce include (checkmarks):
  - ✓ Supraveghere 08:00–17:00
  - ✓ Activități în curte (2000 mp)
  - ✓ Teme de vacanță
  - ✓ Minimum 2 ateliere pe zi

**3 carduri secundare — Ateliere extra:**
- Programare — 75 lei/sesiune
- Engleză — 50 lei/sesiune
- Artă — 50 lei/sesiune

Notă sub carduri: "Atelierele extra se achiziționează separat"

**Buton CTA final:**
- Text: "Înscrie-te acum pe WhatsApp"
- Dimensiune mare, vizibil, fundal verde WhatsApp
- Link identic cu butonul floating
- Sub buton: text mic "Locuri limitate — răspundem în câteva ore"

---

### Footer

Fundal: alb sau `brand-cream`

**Conținut:**
- Text: "© 2026 Didi Afterschool · Giroc, Județul Timiș"
- 3 iconițe cu linkuri:
  - WhatsApp → `https://wa.me/40724223600`
  - Facebook → `https://www.facebook.com/profile.php?id=100094616035336`
  - Instagram → `https://www.facebook.com/profile.php?id=100094616035336` (redirect temporar la Facebook)

Linkurile social sunt definite ca constante în cod pentru actualizare ușoară când Instagram-ul e creat.

## Acceptance criteria

- [ ] Cardul principal afișează "80 lei / zi" și "+ 20 lei masă" vizibil
- [ ] Lista cu checkmarks afișează toate cele 4 beneficii incluse
- [ ] Cele 3 carduri de ateliere extra afișează prețul corect per sesiune
- [ ] Nota "Atelierele extra se achiziționează separat" este vizibilă
- [ ] Butonul CTA final deschide WhatsApp cu link-ul corect
- [ ] Footer-ul conține adresa și toate cele 3 iconițe social
- [ ] Toate cele 3 iconițe duc la URL-urile corecte
- [ ] URL-urile social sunt definite ca constante (nu string-uri duplicate)
- [ ] Fundalul secțiunii prețuri este `brand-yellow`

## Blocked by

- `01-project-scaffolding.md`
