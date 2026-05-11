import { Hero } from '@/components/Hero'
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
        <section className="px-5 py-16">
          <p className="text-center text-text-secondary font-body">
            (Următoarele secțiuni se construiesc în slice-urile următoare.)
          </p>
          <div className="h-[600px]" aria-hidden="true" />
        </section>
      </main>
      <StickyCTA />
    </>
  )
}
