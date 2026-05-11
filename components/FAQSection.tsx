'use client'

import { motion } from 'framer-motion'
import { FAQAccordion } from './FAQAccordion'
import { SectionTitle } from './SectionTitle'
import { FAQ } from '@/lib/constants'

export function FAQSection() {
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
          duck="/images/duck-avatars/duck-curious.png"
          duckAlt="Rățușcă curioasă"
        >
          Întrebări frecvente
        </SectionTitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-8"
      >
        <FAQAccordion items={FAQ} />
      </motion.div>
    </section>
  )
}
