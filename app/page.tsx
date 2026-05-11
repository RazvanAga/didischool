import { Hero } from '@/components/Hero'
import { SpatiuSection } from '@/components/SpatiuSection'
import { StickyCTA } from '@/components/StickyCTA'
import { WavyDivider } from '@/components/WavyDivider'

export default function Home() {
  return (
    <>
      <main className="shell bg-cream min-h-screen">
        <Hero />
        <WavyDivider topColor="#FFD700" bottomColor="#FFF8E7" />
        <SpatiuSection />
        <section className="px-5 py-16">
          <p className="text-center text-text-secondary font-body">
            (Următoarele secțiuni se construiesc în slice-urile următoare.)
          </p>
          <div className="h-[1200px]" aria-hidden="true" />
        </section>
      </main>
      <StickyCTA />
    </>
  )
}
