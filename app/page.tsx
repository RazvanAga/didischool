import { AteliereSection } from '@/components/AteliereSection'
import { FAQSection } from '@/components/FAQSection'
import { Hero } from '@/components/Hero'
import { IncludePretulSection } from '@/components/IncludePretulSection'
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
        <section className="px-5 py-16">
          <p className="text-center text-text-secondary font-body">
            (Următoarele secțiuni se construiesc în slice-urile următoare.)
          </p>
          <div className="h-[300px]" aria-hidden="true" />
        </section>
      </main>
      <StickyCTA />
    </>
  )
}
