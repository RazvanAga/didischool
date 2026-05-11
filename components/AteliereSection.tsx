'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Carousel } from './Carousel'
import { Card } from './Card'
import { SectionTitle } from './SectionTitle'
import { ATELIERE } from '@/lib/constants'

export function AteliereSection() {
  return (
    <section className="relative bg-cream pt-12 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-5"
      >
        <SectionTitle
          duck="/images/duck-avatars/duck-laptop.png"
          duckAlt="Rățușcă cu laptop"
          subtitle="Specialități care se cumpără separat, pe zile fixe săptămânale."
        >
          Atelierele noastre
        </SectionTitle>
      </motion.div>

      <div className="mt-8">
        <Carousel
          ariaLabel="Atelierele de specialitate"
          items={ATELIERE}
          keyExtractor={(item) => item.name}
          cardWidthPercent={72}
          renderItem={(item) => (
            <Card className="h-full flex flex-col items-start gap-3 min-h-[220px]">
              <Image
                src={item.duck}
                alt=""
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <h3 className="font-display text-[24px] leading-tight text-text-primary">
                {item.name}
              </h3>
              <div className="inline-flex items-center rounded-chip bg-brand-yellow px-3 py-1 font-body font-extrabold text-[15px] text-text-primary shadow-press-chip">
                {item.price} lei / sesiune
              </div>
              <p className="font-body text-[15px] text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </Card>
          )}
        />
      </div>

      <p className="mt-6 px-6 text-center text-[14px] text-text-secondary font-body leading-relaxed">
        Programul atelierelor se aranjează în funcție de înscrieri. Scrie-ne pe
        WhatsApp ce te interesează — pregătim mixul pentru grupul tău.
      </p>
    </section>
  )
}
