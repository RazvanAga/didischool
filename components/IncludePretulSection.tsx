'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Carousel } from './Carousel'
import { Card } from './Card'
import { SectionTitle } from './SectionTitle'
import { INCLUDE_PRETUL } from '@/lib/constants'

export function IncludePretulSection() {
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
          duck="/images/duck-avatars/duck-food.png"
          duckAlt="Rățușcă cu mâncare"
          subtitle="80 lei/zi acoperă o zi întreagă de supraveghere, joacă și activități."
        >
          Ce include prețul de bază
        </SectionTitle>
      </motion.div>

      <div className="mt-8">
        <Carousel
          ariaLabel="Activitățile incluse în prețul de bază"
          items={INCLUDE_PRETUL}
          keyExtractor={(item) => item.title}
          cardWidthPercent={72}
          renderItem={(item) => (
            <Card className="h-full flex flex-col items-start gap-3 min-h-[180px]">
              {item.duck && (
                <Image
                  src={item.duck}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              )}
              <h3 className="font-display text-[21px] leading-tight text-text-primary">
                {item.title}
              </h3>
              <p className="font-body text-[15px] text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </Card>
          )}
        />
      </div>

      <p className="mt-6 px-6 text-center text-[14px] text-text-secondary font-body leading-relaxed">
        Atelierele de specialitate (programare, engleză, artă) se plătesc separat — vezi mai jos.
      </p>
    </section>
  )
}
