import { AteliereSection } from '@/components/AteliereSection'
import { FAQSection } from '@/components/FAQSection'
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
        <WavyDivider topColor="#FFD700" bottomColor="#FFF8E7" />
        <SpatiuSection />
        <ZiTipicaSection />
        <IncludePretulSection />
        <AteliereSection />
        <FAQSection />
        <WavyDivider topColor="#FFF8E7" bottomColor="#FFD700" />
        <PreturiSection />
      </main>
      <StickyCTA />
    </>
  )
}
