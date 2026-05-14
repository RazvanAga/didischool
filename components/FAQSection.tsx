'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FAQAccordion } from './FAQAccordion'
import { FAQ } from '@/lib/constants'

export function FAQSection() {
  return (
    <section className="relative bg-cream pt-12 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="px-5 flex flex-col items-center gap-4"
      >
        <h2
          className="font-display font-extrabold text-center"
          style={{ fontSize: '68px', color: '#92400E', lineHeight: 1 }}
        >
          Întrebări frecvente
        </h2>

        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/images/duck-avatars/duck-curious.png"
            alt=""
            width={220}
            height={220}
            className="w-[220px] h-[220px] object-contain"
            style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))' }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mt-6"
      >
        <FAQAccordion items={FAQ} />
      </motion.div>
    </section>
  )
}
