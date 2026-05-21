'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Carousel } from './Carousel'
import { ATELIERE } from '@/lib/constants'

const PALETTE = [
  { accent: '#2563EB', soft: '#EFF6FF', border: '#BFDBFE', shadow: 'rgba(37,99,235,0.18)' },   // Programare — blue
  { accent: '#059669', soft: '#ECFDF5', border: '#A7F3D0', shadow: 'rgba(5,150,105,0.18)' },    // Engleză — emerald
  { accent: '#E11D48', soft: '#FFF1F2', border: '#FECDD3', shadow: 'rgba(225,29,72,0.18)' },    // Artă — rose
  { accent: '#7C3AED', soft: '#F5F3FF', border: '#DDD6FE', shadow: 'rgba(124,58,237,0.18)' },   // Șah — violet
  { accent: '#EA580C', soft: '#FFF7ED', border: '#FED7AA', shadow: 'rgba(234,88,12,0.18)' },    // Robotică — orange
  { accent: '#0891B2', soft: '#ECFEFF', border: '#A5F3FC', shadow: 'rgba(8,145,178,0.18)' },    // Fizică — cyan
]

export function AteliereSection() {
  return (
    <section className="relative pt-12 pb-16" style={{ backgroundColor: '#FEF3C7' }}>
      <div className="shell">
      {/* Title pill */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="flex flex-col items-center gap-2 px-5"
      >
        <h2
          className="font-display font-extrabold text-center"
          style={{ fontSize: '68px', color: '#92400E', lineHeight: 1 }}
        >
          Atelierele noastre
        </h2>
        <p className="text-[14px] font-body text-[#78350F] text-center">
          Opționale, se plătesc separat
        </p>
      </motion.div>

      <div className="mt-8">
        <Carousel
          ariaLabel="Atelierele de specialitate"
          items={ATELIERE}
          keyExtractor={(item) => item.name}
          cardWidthPercent={72}
          cardAspectRatio="1/1"
          renderItem={(item, i) => {
            const p = PALETTE[i % PALETTE.length]
            return (
              <div
                className="h-full flex flex-col items-center text-center gap-2 rounded-card p-4 overflow-hidden"
                style={{
                  backgroundColor: p.soft,
                  border: `2px solid ${p.border}`,
                  boxShadow: `0 4px 0 ${p.shadow}`,
                }}
              >
                <div className="flex-1 min-h-0 flex items-center justify-center w-full">
                  <Image
                    src={item.duck}
                    alt=""
                    width={200}
                    height={200}
                    className="h-full w-auto max-w-full object-contain"
                    style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}
                  />
                </div>
                <h3 className="font-display text-[22px] leading-tight text-text-primary">
                  {item.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-display font-extrabold text-[32px] leading-none"
                    style={{ color: p.accent }}
                  >
                    {item.price}
                  </span>
                  <span className="font-body text-[14px] text-text-secondary">lei / sesiune</span>
                </div>
                <p className="font-body text-[14px] text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          }}
        />
      </div>

      <p className="mt-6 px-6 text-center text-[13.5px] text-[#78350F] font-body leading-relaxed">
        Programul se aranjează după înscrieri. Scrie-ne pe WhatsApp ce te interesează.
      </p>
      </div>
    </section>
  )
}
