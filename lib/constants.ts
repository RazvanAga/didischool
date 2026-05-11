export const WHATSAPP_NUMBER = '40724223600'

export const WHATSAPP_MESSAGES = {
  hero: 'Bună! Vreau informații despre Summer School Didi 2026.',
  final: 'Bună! Aș vrea să rezerv un loc la Summer School Didi 2026.',
  sticky: 'Bună! Aș vrea să rezerv un loc la Summer School Didi 2026.',
} as const

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const FACEBOOK_URL = 'https://www.facebook.com/didiafterschool'
export const INSTAGRAM_URL = FACEBOOK_URL

export const ADDRESS = 'Giroc, Timiș'

export const STICKY_CTA_THRESHOLD_PX = 200

export const HERO_DETAILS = [
  { label: '15 iun – 15 sep', icon: '📅' },
  { label: '4 – 12 ani', icon: '🧒' },
  { label: 'Giroc, Timiș', icon: '📍' },
  { label: '07:00 – 18:00', icon: '⏰' },
] as const

export const SPATIU_PHOTOS = [
  { src: '/images/photos/playground1.jpg', alt: 'Curte cu iarbă și porți de fotbal' },
  { src: '/images/photos/playground2.jpg', alt: 'Trambulină în curte' },
  { src: '/images/photos/playground3.jpg', alt: 'Spațiu de joacă' },
  { src: '/images/photos/playground4.jpg', alt: 'Curte din alt unghi' },
  { src: '/images/photos/treehouse.jpg', alt: 'Căsuța din copac' },
  { src: '/images/photos/classroom1.jpg', alt: 'Sală de clasă interioară' },
] as const

export const SPATIU_FEATURES = [
  { label: 'Fotbal', duck: '/images/duck-avatars/duck-ball.png' },
  { label: 'Trambulină', duck: '/images/duck-avatars/duck.png' },
  { label: 'Căsuță în copac', duck: '/images/duck-avatars/duck-book.png' },
  { label: 'Masă de ping-pong', duck: '/images/duck-avatars/duck-ping-pong.png' },
  { label: '2 săli interioare', duck: '/images/duck-avatars/duck-paint.png' },
] as const

export const ZI_TIPICA = [
  {
    time: '07:00',
    title: 'Sosire (treptat)',
    description: 'Părintele lasă copilul în drumul spre serviciu.',
    duck: '/images/duck-avatars/duck.png',
  },
  {
    time: '07:30',
    title: 'Mic dejun',
    description: 'Comandat și coordonat de Didi.',
    duck: '/images/duck-avatars/duck-food.png',
  },
  {
    time: '08:30',
    title: 'Teme de vacanță / activități pre-școlare',
    description: 'Cei mari cu Ana și Diana, cei mici cu activități adaptate.',
    duck: '/images/duck-avatars/duck-book.png',
  },
  {
    time: '10:00',
    title: 'Pauză + joacă în curte',
    description: 'Fotbal, trambulină, căsuță în copac.',
    duck: '/images/duck-avatars/duck-ball.png',
  },
  {
    time: '12:30',
    title: 'Prânz',
    description: 'Comandat individual de fiecare familie, intermediat de Didi.',
    duck: '/images/duck-avatars/duck-food.png',
  },
  {
    time: '13:30',
    title: 'Odihnă / citit / activități calme',
    description: 'Reset după prânz.',
    duck: '/images/duck-avatars/duck-book.png',
  },
  {
    time: '15:00',
    title: 'Atelier (1h)',
    description: 'Specialitate sau joacă ghidată — paralel mai multe ateliere pe săli.',
    duck: '/images/duck-avatars/duck-paint.png',
  },
  {
    time: '16:00',
    title: 'Joacă în curte',
    description: 'Activități libere supravegheate.',
    duck: '/images/duck-avatars/duck-ping-pong.png',
  },
  {
    time: '18:00',
    title: 'Plecare (treptat)',
    description: 'Părinții iau copiii după serviciu.',
    duck: '/images/duck-avatars/duck.png',
  },
] as const

export const INCLUDE_PRETUL = [
  {
    title: 'Supraveghere completă 07:00 – 18:00',
    description: 'Adulți prezenți tot programul, atât în săli cât și în curte.',
    duck: '/images/duck-avatars/duck.png',
  },
  {
    title: 'Cadre didactice acreditate',
    description: 'Pentru teme de vacanță și activități structurate.',
    duck: '/images/duck-avatars/duck-book.png',
  },
  {
    title: '2000 mp de curte',
    description: 'Fotbal, trambulină, căsuță în copac, ping-pong.',
    duck: '/images/duck-avatars/duck-ball.png',
  },
  {
    title: '2 săli interioare',
    description: 'Una mică, una mare — pentru activități pe grupe de vârstă.',
    duck: '/images/duck-avatars/duck-paint.png',
  },
  {
    title: 'Coordonare mic dejun și prânz',
    description: 'Comanda către furnizori, nu costul mâncării.',
    duck: '/images/duck-avatars/duck-food.png',
  },
  {
    title: '2 grupe pe vârstă',
    description: 'Mici (4-6 ani) și mari (7-12 ani) — activități adaptate.',
    duck: '/images/duck-avatars/duck-girl.png',
  },
] as const

export const PRET_BAZA = 80
export const PRET_MASA = 20

export const ATELIERE = [
  {
    name: 'Programare',
    price: 75,
    description: 'Scratch, Python, Minecraft Hour of Code.',
    duck: '/images/duck-avatars/duck-laptop.png',
  },
  {
    name: 'Engleză',
    price: 50,
    description: 'Conversație și joc tematic.',
    duck: '/images/duck-avatars/duck-globe.png',
  },
  {
    name: 'Artă',
    price: 50,
    description: 'Pictură, modelaj, colaj.',
    duck: '/images/duck-avatars/duck-paint.png',
  },
] as const

export const FAQ = [
  {
    question: 'Ce include prețul de 80 lei/zi?',
    answer:
      'Supraveghere completă între 07:00 și 18:00, joacă în curtea de 2000 mp, teme de vacanță cu cadre didactice acreditate, coordonarea meselor. Atelierele de specialitate sunt opționale și se plătesc separat.',
  },
  {
    question: 'Mâncarea e inclusă?',
    answer:
      'Nu. Mic dejun + prânz costă 20 lei/zi separat, comandate de la furnizori locali. Coordonăm noi comanda. Poți și aduce de acasă dacă preferi.',
  },
  {
    question: 'Atelierele de specialitate sunt incluse?',
    answer:
      'Nu, acestea se plătesc separat (Programare 75 lei, Engleză 50 lei, Artă 50 lei per sesiune). Programul exact se aranjează după înscrieri, în funcție de cerere. Scrie-ne pe WhatsApp ce te interesează.',
  },
  {
    question: 'Ce vârste acceptați vara?',
    answer:
      'De la 4 la 12 ani. Avem 2 grupe pe vârstă: mici (4-6 ani) și mari (7-12 ani). Activitățile și temele se adaptează per grup.',
  },
  {
    question: 'Cum ajunge copilul la Didi?',
    answer:
      'Părintele aduce dimineața (între 07:00 și 09:00) și îl ia înainte de 18:00. Suntem în Giroc, pe terenul familiei Aga.',
  },
  {
    question: 'Cine supraveghează copiii?',
    answer:
      'Cadre didactice acreditate, inclusiv învățătoare activă la școala din Giroc. Pentru ateliere, specialiști în domeniu (programare, limbi străine, artă).',
  },
] as const
