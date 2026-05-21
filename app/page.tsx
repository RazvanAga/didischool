import { AteliereSection } from '@/components/AteliereSection'
import { FAQSection } from '@/components/FAQSection'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { IncludePretulSection } from '@/components/IncludePretulSection'
import { PreturiSection } from '@/components/PreturiSection'
import { SpatiuSection } from '@/components/SpatiuSection'
import { StickyCTA } from '@/components/StickyCTA'
import { WavyDivider } from '@/components/WavyDivider'
import { ZiTipicaSection } from '@/components/ZiTipicaSection'

export default function Home() {
  return (
    <>
      <main className="shell bg-cream min-h-screen">
        <Hero />
        <SpatiuSection />
        <WavyDivider topColor="#DBEAFE" bottomColor="#D1FAE5" height={50} />
        <ZiTipicaSection />
        <WavyDivider topColor="#D1FAE5" bottomColor="#FEF3C7" height={50} />
        <AteliereSection />
        <WavyDivider topColor="#FEF3C7" bottomColor="#DBEAFE" height={50} />
        <IncludePretulSection />
        <WavyDivider topColor="#DBEAFE" bottomColor="#FFF8E7" height={50} />
        <FAQSection />
        <WavyDivider topColor="#FFF8E7" bottomColor="#FFD700" height={50} />
        <PreturiSection />
        <WavyDivider topColor="#FFD700" bottomColor="#78350F" height={50} />
        <Footer />
      </main>
      <StickyCTA />
    </>
  )
}
