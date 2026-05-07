# Deployment — didischool.ro pe Vercel

## Cerințe

- Cont Vercel (vercel.com)
- Acces la panoul de control al domeniului didischool.ro (registrar-ul unde l-ai cumpărat)
- Repo git cu codul proiectului (GitHub, GitLab sau Bitbucket)

---

## Pasul 1 — Creează un repo git

Dacă nu ai deja un repo:

```bash
git init
git add .
git commit -m "initial commit"
```

Creează un repo nou pe GitHub și push:

```bash
git remote add origin https://github.com/<username>/didischool.git
git push -u origin main
```

---

## Pasul 2 — Conectează repo-ul la Vercel

1. Mergi la [vercel.com](https://vercel.com) și loghează-te
2. Click **Add New → Project**
3. Selectează repo-ul `didischool` din lista de repo-uri
4. Vercel detectează automat Next.js — nu schimba nicio setare
5. Click **Deploy**

Vercel va genera un URL temporar de tip `didischool-xxx.vercel.app`. Verifică că site-ul arată corect înainte să continui.

---

## Pasul 3 — Adaugă domeniul didischool.ro

1. În Vercel, mergi la **Project Settings → Domains**
2. Adaugă `didischool.ro` și `www.didischool.ro`
3. Vercel îți va arăta valorile DNS necesare (de obicei un `A record` și un `CNAME`)

---

## Pasul 4 — Configurează DNS la registrar

Mergi la panoul de control al domeniului didischool.ro (unde l-ai cumpărat) și adaugă:

| Tip | Nume | Valoare |
|-----|------|---------|
| `A` | `@` | `76.76.21.21` (IP Vercel) |
| `CNAME` | `www` | `cname.vercel-dns.com` |

> Verifică valorile exacte în dashboard-ul Vercel — pot diferi ușor.

Propagarea DNS durează între 5 minute și 24 de ore.

---

## Pasul 5 — Verificare finală

- [ ] `https://didischool.ro` se deschide fără erori SSL
- [ ] `https://www.didischool.ro` redirectează la `didischool.ro`
- [ ] Site-ul se afișează corect pe telefon
- [ ] Butonul WhatsApp deschide conversația corect
- [ ] Toate imaginile din `/images/` se încarcă

---

## Deploy-uri viitoare

Orice `git push` pe branch-ul `main` declanșează automat un nou deploy pe Vercel. Nu e nevoie de nicio acțiune manuală după configurarea inițială.
