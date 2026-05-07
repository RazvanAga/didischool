import Hero from '@/components/Hero'
import Spatiu from '@/components/Spatiu'
import ZiTipica from '@/components/ZiTipica'
import HorizontalCarousel from '@/components/HorizontalCarousel'
import FAQ from '@/components/FAQ'
import Echipa from '@/components/Echipa'
import Preturi from '@/components/Preturi'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { TildeDivider } from '@/components/Hand'

const activitatiIncluse = [
  {
    title: 'joacă în curte',
    description: 'trambulină, ping-pong, fotbal și o căsuță în copac.',
    image: 'duck-ball.png',
  },
  {
    title: 'teme de vacanță',
    description: 'supervizate zilnic de două cadre didactice acreditate.',
    image: 'duck-book.png',
  },
  {
    title: 'prânzul',
    description:
      'fiecare familie alege furnizorul preferat — noi coordonăm comanda.',
    note: '20 lei/zi, opțional',
    image: 'duck-curious.png',
  },
  {
    title: 'activități creative',
    description: 'artă, muzică, jocuri de echipă — diferite în fiecare zi.',
    image: 'duck-girl.png',
  },
]

const ateliere = [
  {
    title: 'programare',
    description:
      'Scratch, Python, Hour of Code în Minecraft. predat de Razvan.',
    note: '75 lei / sesiune',
    image: 'duck-laptop.png',
  },
  {
    title: 'engleză',
    description: 'conversație și vocabular prin joc, adaptat vârstei.',
    note: '50 lei / sesiune',
    image: 'duck-globe.png',
  },
  {
    title: 'artă',
    description: 'pictură, colaj, creativitate fără limite — cu Kasiia.',
    note: '50 lei / sesiune',
    image: 'duck-paint.png',
  },
]

export default function Page() {
  return (
    <>
      <Hero />
      <TildeDivider />

      <Spatiu />
      <TildeDivider symbol="✿" />

      <ZiTipica />
      <TildeDivider />

      <HorizontalCarousel
        sectionTitle="ce face copilul aici"
        intro="o zi obișnuită are de toate — afară, înăuntru, împreună."
        cards={activitatiIncluse}
        accent="terracotta"
      />
      <TildeDivider symbol="✶" />

      <HorizontalCarousel
        sectionTitle="ateliere extra"
        intro="opționale, pentru copii curioși."
        cards={ateliere}
        accent="leaf"
      />
      <TildeDivider />

      <Echipa />
      <TildeDivider symbol="✿" />

      <FAQ />
      <TildeDivider />

      <Preturi />

      <Footer />

      <WhatsAppButton />
    </>
  )
}
