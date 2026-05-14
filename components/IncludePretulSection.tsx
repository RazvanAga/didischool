'use client'

import { motion } from 'framer-motion'
import { INCLUDE_PRETUL } from '@/lib/constants'

const spring = [0.34, 1.56, 0.64, 1] as const

export function IncludePretulSection() {
  return (
    <section id="include-pretul" className="relative bg-section-blue pt-12 pb-16 px-5">
      {/* Title pill */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="flex justify-center"
      >
        <h2
          className="font-display font-extrabold text-center"
          style={{ fontSize: '68px', color: '#1E3A8A', lineHeight: 1 }}
        >
          Ce include prețul de bază
        </h2>
      </motion.div>

      {/* Checklist */}
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
        }}
        className="mt-8 flex flex-col gap-4"
      >
        {INCLUDE_PRETUL.map((item) => (
          <motion.li
            key={item.title}
            variants={{
              hidden: { opacity: 0, x: -16 },
              show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: spring } },
            }}
            className="flex items-start gap-4"
          >
            {/* Checkmark circle */}
            <div
              className="mt-0.5 shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#2563EB' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M2.5 7L5.5 10L11.5 4"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Text */}
            <div>
              <div className="font-body font-extrabold text-[16px] text-text-primary leading-snug">
                {item.title}
              </div>
              <p className="font-body text-[13.5px] text-text-secondary leading-relaxed mt-0.5">
                {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <p className="mt-8 text-center text-[13.5px] text-text-secondary font-body leading-relaxed">
        Atelierele de specialitate se plătesc separat — vezi mai jos.
      </p>
    </section>
  )
}
