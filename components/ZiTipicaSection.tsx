'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { ZI_TIPICA } from '@/lib/constants'

const overshoot = [0.34, 1.56, 0.64, 1] as const

export function ZiTipicaSection() {
  return (
    <section className="relative bg-cream pt-12 pb-16 px-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <SectionTitle
          duck="/images/duck-avatars/duck-book.png"
          duckAlt="Rățușcă cu cartea"
          subtitle="2 grupe pe vârstă: mici (4-6 ani) și mari (7-12 ani). Atelierele și temele se adaptează per grup."
        >
          O zi la Didi
        </SectionTitle>
      </motion.div>

      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
        }}
        className="relative mt-8 flex flex-col"
      >
        <div
          aria-hidden="true"
          className="absolute left-[27px] top-3 bottom-3 w-[2px] bg-brand-yellow/40 rounded-full"
        />

        {ZI_TIPICA.map((entry) => (
          <motion.li
            key={entry.time}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: overshoot },
              },
            }}
            className="relative flex gap-4 py-3"
          >
            <div className="relative shrink-0 w-14 h-14 z-10">
              <motion.div
                initial={{ y: 10 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: overshoot }}
                className="w-14 h-14 rounded-full bg-white shadow-warm-card flex items-center justify-center"
              >
                <Image
                  src={entry.duck}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
              </motion.div>
            </div>

            <div className="flex-1 min-w-0 pt-1">
              <div className="font-body font-extrabold text-[18px] text-coral leading-tight">
                {entry.time}
              </div>
              <div className="font-body font-extrabold text-[17px] text-text-primary leading-snug mt-0.5">
                {entry.title}
              </div>
              <p className="font-body font-normal text-[14.5px] text-text-secondary leading-relaxed mt-1">
                {entry.description}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
