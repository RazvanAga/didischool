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
  { label: 'Giroc, Timiș', icon: '📍' },
  { label: '07:00 – 18:00', icon: '⏰' },
  { label: '4 – 12 ani', icon: '🧒' },
] as const

export const SPATIU_PHOTOS = [
  {
    src: '/images/photos/playground1.jpg',
    alt: 'Curte cu iarbă și porți de fotbal',
    duck: '/images/duck-avatars/duck-ball.png',
    caption: '2000 mp de curte — fotbal cât vrei',
  },
  {
    src: '/images/photos/playground2.jpg',
    alt: 'Trambulină în curte',
    duck: '/images/duck-avatars/duck.png',
    caption: 'Trambulină în aer liber',
  },
  {
    src: '/images/photos/playground3.jpg',
    alt: 'Spațiu de joacă',
    duck: '/images/duck-avatars/duck-curious.png',
    caption: 'Loc de joacă liber, supravegheată',
  },
  {
    src: '/images/photos/playground4.jpg',
    alt: 'Curte din alt unghi',
    duck: '/images/duck-avatars/duck-ping-pong.png',
    caption: 'Curte amenajată cu iarbă adevărată',
  },
  {
    src: '/images/photos/treehouse.jpg',
    alt: 'Căsuța din copac',
    duck: '/images/duck-avatars/duck-book.png',
    caption: 'Căsuță în copac — ascunzătoarea preferată',
  },
  {
    src: '/images/photos/classroom1.jpg',
    alt: 'Sală de clasă interioară',
    duck: '/images/duck-avatars/duck-paint.png',
    caption: '2 săli interioare pentru ateliere și teme',
  },
  {
    src: '/images/photos/classroom2.jpg',
    alt: 'A doua sală de clasă',
    duck: '/images/duck-avatars/duck-laptop.png',
    caption: 'Spațiu dedicat programare și proiecte tech',
  },
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
    duck: '/images/duck-avatars/duck-car.png',
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
    duck: '/images/duck-avatars/duck-car.png',
    reversed: true,
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
    name: 'Engleză',
    price: 20,
    description: 'Conversație și joc tematic.',
    duck: '/images/duck-avatars/duck-globe.png',
  },
  {
    name: 'Artă',
    price: 20,
    description: 'Pictură, modelaj, colaj.',
    duck: '/images/duck-avatars/duck-paint.png',
  },
  {
    name: 'Fizică și Experimente',
    price: 50,
    description: 'Experimente interactive despre lumea din jur.',
    duck: '/images/duck-avatars/duck-experiments.png',
  },
  {
    name: 'Programare',
    price: 50,
    description: 'Scratch, Python, Minecraft Hour of Code.',
    duck: '/images/duck-avatars/duck-laptop.png',
  },
  {
    name: 'Robotică',
    price: 60,
    description: 'Construcție și programare de roboței.',
    duck: '/images/duck-avatars/duck-robotics.png',
  },
  {
    name: 'Șah',
    price: 50,
    description: 'Gândire strategică prin joc.',
    duck: '/images/duck-avatars/duck-chess.png',
  },
] as const

export const FAQ = [
  {
    question: 'Cum mă înscriu și care e angajamentul?',
    answer:
      'Trimite-ne un mesaj pe WhatsApp. Nu există un angajament minim — poți veni oricât. Plata se face la finalul lunii.',
  },
  {
    question: 'Ce se întâmplă dacă copilul nu vine o zi?',
    answer:
      'Anunță-ne în prealabil și ziua respectivă nu se facturează.',
  },
  {
    question: 'Ce firmă de catering aduce mâncarea?',
    answer:
      'Firma de catering se alege de comun acord cu părinții.',
  },
  {
    question: 'Ce vârste acceptați vara?',
    answer:
      'De la 4 la 12 ani. Avem 2 grupe: mici (4–6 ani) și mari (7–12 ani). Activitățile și temele se adaptează per grupă.',
  },
  {
    question: 'Ce trebuie să aducă copilul cu el?',
    answer:
      'Haine confortabile și de schimb, cremă de soare și apă. Mâncarea o coordonăm noi dacă optezi pentru pachetul cu masă, sau poți aduce de acasă.',
  },
  {
    question: 'Copilul meu are alergii — cum gestionați mâncarea?',
    answer:
      'Ne anunți la înscriere și ne asigurăm că nu primește alimente la care este alergic.',
  },
] as const
