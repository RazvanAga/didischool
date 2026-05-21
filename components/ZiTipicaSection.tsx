'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ZI_TIPICA } from '@/lib/constants'

const spring = [0.34, 1.56, 0.64, 1] as const

const PALETTE = [
  { accent: '#F59E0B', soft: '#FFFBEB' }, // 07:00 amber sunrise
  { accent: '#EA580C', soft: '#FFF7ED' }, // 07:30 warm orange
  { accent: '#65A30D', soft: '#F7FEE7' }, // 08:30 lime morning
  { accent: '#059669', soft: '#ECFDF5' }, // 10:00 emerald
  { accent: '#CA8A04', soft: '#FEFCE8' }, // 12:30 golden lunch
  { accent: '#7C3AED', soft: '#F5F3FF' }, // 13:30 violet rest
  { accent: '#2563EB', soft: '#EFF6FF' }, // 15:00 sky workshop
  { accent: '#E11D48', soft: '#FFF1F2' }, // 16:00 rose play
  { accent: '#F97316', soft: '#FFF7ED' }, // 18:00 sunset home
]

export function ZiTipicaSection() {
  return (
    <section className="relative bg-[#D1FAE5] pt-12 pb-16 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-56 h-56 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, #6EE7B7 0%, transparent 70%)',
          transform: 'translate(35%, -40%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-12 left-0 w-40 h-40 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, #34D399 0%, transparent 70%)',
          transform: 'translate(-40%, 0)',
        }}
      />

      <div className="shell px-5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="flex flex-col items-center gap-3"
      >
        {/* Title */}
        <h2
          className="font-display font-extrabold text-center"
          style={{ fontSize: '68px', color: '#064E3B', lineHeight: 1 }}
        >
          O zi la Didi
        </h2>

      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
        }}
        className="mt-10 flex flex-col gap-3"
      >
        {ZI_TIPICA.map((entry, i) => {
          const p = PALETTE[i] ?? PALETTE[0]
          return (
            <motion.div
              key={entry.time}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.96 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.45, ease: spring },
                },
              }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
              className="flex rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 3px 14px rgba(0,0,0,0.09)' }}
            >
              {/* Left mascot panel */}
              <div
                className="w-[140px] shrink-0 flex flex-col items-center justify-center gap-2 py-5"
                style={{ backgroundColor: p.accent }}
              >
                <Image
                  src={entry.duck}
                  alt=""
                  width={120}
                  height={120}
                  className="object-contain"
                  style={{
                    width: '120px',
                    height: '120px',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.20))',
                    transform: 'reversed' in entry && entry.reversed ? 'scaleX(-1)' : undefined,
                  }}
                />
                <span
                  className="font-display font-extrabold text-white tabular-nums leading-none"
                  style={{ fontSize: '19px' }}
                >
                  {entry.time}
                </span>
              </div>

              {/* Right content panel */}
              <div
                className="flex-1 min-w-0 px-4 py-5 flex flex-col justify-center"
                style={{ backgroundColor: p.soft }}
              >
                <div
                  className="font-body font-extrabold text-[#1C1C1E] leading-snug"
                  style={{ fontSize: '16.5px' }}
                >
                  {entry.title}
                </div>
                <p
                  className="font-body font-normal text-[#636E72] leading-relaxed"
                  style={{ fontSize: '13.5px', marginTop: '5px' }}
                >
                  {entry.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
      </div>
    </section>
  )
}
