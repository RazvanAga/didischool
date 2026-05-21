export const WHATSAPP_NUMBER = '40724223600'

export const WHATSAPP_MESSAGES = {
  hero: 'Bună! Vreau informații despre Summer School Didi 2026.',
  final: 'Bună! Aș vrea să rezerv un loc la Summer School Didi 2026.',
  sticky: 'Bună! Aș vrea să rezerv un loc la Summer School Didi 2026.',
} as const

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100094616035336'
export const INSTAGRAM_URL = 'https://www.instagram.com/didischool.ro/'

export const ADDRESS = 'Giroc, Timiș'

export const STICKY_CTA_THRESHOLD_PX = 200

export const HERO_DETAILS = [
  { label: 'Giroc, Timiș', icon: '📍' },
  { label: '07:00 – 18:00', icon: '⏰' },
  { label: '4 – 12 ani', icon: '🧒' },
] as const

export const SPATIU_PHOTOS = [
  {
    src: '/images/photos/football.JPG',
    alt: 'Fotbal în curte',
    duck: '/images/duck-avatars/duck-ball.png',
    caption: 'Curte spațioasă, perfectă pentru joacă',
  },
  {
    src: '/images/photos/reading.JPG',
    alt: 'Citit în liniște',
    duck: '/images/duck-avatars/duck-read-outside.png',
    caption: 'Timp de citit — liniște și imaginație',
  },
  {
    src: '/images/photos/table-tennis.JPG',
    alt: 'Masă de ping-pong',
    duck: '/images/duck-avatars/duck-ping-pong.png',
    caption: 'Ping-pong în aer liber',
  },
  {
    src: '/images/photos/treehouse.jpg',
    alt: 'Căsuța din copac',
    duck: '/images/duck-avatars/duck-treehouse.png',
    caption: 'Căsuță în copac — ascunzătoarea preferată',
    portrait: true,
  },
  {
    src: '/images/photos/trampoline.JPG',
    alt: 'Trambulină în curte',
    duck: '/images/duck-avatars/duck-trampoline.png',
    caption: 'Trambulină în aer liber',
    portrait: true,
  },
  {
    src: '/images/photos/hammocks.JPG',
    alt: 'Hamace în curte',
    duck: '/images/duck-avatars/duck-hammock.png',
    caption: 'Hamace pentru relaxat după activități',
  },
  {
    src: '/images/photos/basketball.JPG',
    alt: 'Baschet în curte',
    duck: '/images/duck-avatars/duck-basketball.png',
    caption: 'Baschet în curte',
    portrait: true,
  },
  {
    src: '/images/photos/scooters.JPG',
    alt: 'Trotinete în curte',
    duck: '/images/duck-avatars/duck-car.png',
    caption: 'Trotinete — mișcare liberă în curte',
  },
  {
    src: '/images/photos/computers.JPG',
    alt: 'Calculatoare și programare',
    duck: '/images/duck-avatars/duck-laptop.png',
    caption: 'Calculatoare și programare',
  },
  {
    src: '/images/photos/chess.JPG',
    alt: 'Șah',
    duck: '/images/duck-avatars/duck-chess.png',
    caption: 'Șah — gândire strategică prin joc',
  },
  {
    src: '/images/photos/lunch.JPG',
    alt: 'Prânz',
    duck: '/images/duck-avatars/duck-food.png',
    caption: 'Prânz coordonat de Didi',
  },
  {
    src: '/images/photos/hw1.JPG',
    alt: 'Teme cu cadre didactice',
    duck: '/images/duck-avatars/duck-book.png',
    caption: 'Facem temele cu cadre didactice acreditate',
  },
  {
    src: '/images/photos/hw2.JPG',
    alt: 'Teme cu cadre didactice',
    duck: '/images/duck-avatars/duck-book.png',
    caption: 'Facem temele cu cadre didactice acreditate',
  },
] as const

export const SPATIU_FEATURES = [
  { label: 'Fotbal', duck: '/images/duck-avatars/duck-ball.png' },
  { label: 'Trambulină', duck: '/images/duck-avatars/duck-trampoline.png' },
  { label: 'Căsuță în copac', duck: '/images/duck-avatars/duck-treehouse.png' },
  { label: 'Masă de ping-pong', duck: '/images/duck-avatars/duck-ping-pong.png' },
  { label: '2 săli interioare', duck: '/images/duck-avatars/duck-paint.png' },
] as const

export const ZI_TIPICA = [
  {
    time: '07:00',
    title: 'Sosire treptată',
    description: 'Fiecare părinte lasă copilul în drumul spre serviciu.',
    duck: '/images/duck-avatars/duck-car.png',
  },
  {
    time: '08:00',
    title: 'Mic dejun',
    description: 'Fiecare copil mănâncă pachețelul luat de acasă.',
    duck: '/images/duck-avatars/duck-food.png',
  },
  {
    time: '08:30',
    title: 'Teme de vacanță',
    description: 'Cadrele didactice acreditate fac temele de vacanță împreună cu copii.',
    duck: '/images/duck-avatars/duck-book.png',
  },
  {
    time: '10:30',
    title: 'Joacă liberă în curte',
    description: 'Fotbal, ping-pong, trambulină, căsuță în copac, piscină, trotinete, leagăne.',
    duck: '/images/duck-avatars/duck-ball.png',
  },
  {
    time: '12:30',
    title: 'Prânz',
    description: 'Comandat de la firma de catering pentru fiecare copil care alege această opțiune, intermediat de Didi.',
    duck: '/images/duck-avatars/duck-food.png',
  },
  {
    time: '13:30',
    title: 'Activități calme după masă',
    description: 'Citit, pictat, board games, cântat, jocuri de rol',
    duck: '/images/duck-avatars/duck-read-outside.png',
  },
  {
    time: '15:00',
    title: 'Ateliere',
    description: 'Instructori profesioniști pentru fiecare atelier în parte',
    duck: '/images/duck-avatars/duck-paint.png',
  },
  {
    time: '16:30',
    title: 'Joacă în curte',
    description: 'Activități libere supravegheate.',
    duck: '/images/duck-avatars/duck-ping-pong.png',
  },
  {
    time: '18:00',
    title: 'Plecare treptată',
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
    title: 'Personal acreditat',
    description: 'Cadre didactice acreditate pentru teme de vacanță. Instructori cu formare universitară de specialitate pentru fiecare atelier opțional.',
    duck: '/images/duck-avatars/duck-book.png',
  },
  {
    title: 'Curte spațioasă',
    description: 'Căsuță în copac, trambulină, ping-pong, piscină, trotinete, hamace, fotbal, baschet, leagăne.',
    duck: '/images/duck-avatars/duck-ball.png',
  },
  {
    title: 'Două săli interioare',
    description: 'Săli unde se desfășoară temele de vacanță și atelierele.',
    duck: '/images/duck-avatars/duck-paint.png',
  },
  {
    title: 'Coordonare mic dejun și prânz',
    description: 'Comanda către furnizori, nu costul mâncării.',
    duck: '/images/duck-avatars/duck-food.png',
  },
] as const

export const PRET_BAZA = 80
export const PRET_MASA = 19

export const ATELIERE = [
  {
    name: 'Engleză',
    price: 20,
    description: 'Conversație și joc tematic.',
    duck: '/images/duck-avatars/duck-globe.png',
  },
  {
    name: 'Științe',
    price: 50,
    description: 'Fizică și experimente interactive.',
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
    description: 'Programare Arduino și circuite.',
    duck: '/images/duck-avatars/duck-robotics.png',
  },
  {
    name: 'Artă',
    price: 20,
    description: 'Pictură, modelaj, colaj.',
    duck: '/images/duck-avatars/duck-paint.png',
  },
  {
    name: 'Șah',
    price: 30,
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
      'De la 4 la 12 ani.',
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
