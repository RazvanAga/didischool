'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'
import { HERO_DETAILS, WHATSAPP_MESSAGES, waLink } from '@/lib/constants'
import { trackWhatsApp } from '@/lib/tracking'

const overshoot = [0.34, 1.56, 0.64, 1] as const

export function Hero() {
  return (
    <section className="relative bg-brand-yellow overflow-hidden pt-10 pb-0">
      {/* Decorative background circles — same trajectory, staggered, GPU-accelerated */}
      {[
        { className: 'w-32 h-32 -top-8 -right-10   bg-[#E8B800]/20', delay: 0,  duration: 18 },
        { className: 'w-32 h-32 top-24  -left-12   bg-[#E8B800]/20', delay: 2,  duration: 18 },
        { className: 'w-[104px] h-[104px] -top-6 left-[20%] bg-[#E8B800]/15', delay: 4,  duration: 12 },
        { className: 'w-[104px] h-[104px] top-16 right-[18%] bg-[#E8B800]/15', delay: 6,  duration: 12 },
        { className: 'w-6 h-6 top-8  left-[42%]  bg-[#E8B800]/30', delay: 8,  duration: 6  },
        { className: 'w-6 h-6 top-36 right-[38%] bg-[#E8B800]/30', delay: 10, duration: 6  },
      ].map((c, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className={`pointer-events-none absolute rounded-full ${c.className}`}
          animate={{ x: [0, 55, 0], y: [0, -28, 0] }}
          transition={{ duration: c.duration, repeat: Infinity, ease: 'easeInOut', delay: c.delay }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 px-5">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.5, ease: overshoot }}
          className="text-center leading-none"
        >
          <span
            className="block font-display font-extrabold"
            style={{ fontSize: '68px', color: '#D04C4C', lineHeight: 1 }}
          >
            Didi
          </span>
          <span
            className="block font-display text-text-primary"
            style={{ fontSize: '36px', lineHeight: 1.15 }}
          >
            Summer School
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.4, ease: 'easeOut' }}
          className="mt-4 text-center font-body font-bold text-text-primary/80 leading-snug"
          style={{ fontSize: '18px' }}
        >
          cea mai frumoasă vară a copilului tău
        </motion.p>

        {/* Info pills — discreet */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.44, duration: 0.4, ease: 'easeOut' }}
          className="mt-4 flex flex-wrap justify-center gap-2"
        >
          {HERO_DETAILS.map((detail) => (
            <div
              key={detail.label}
              className="rounded-full px-3 py-1.5"
              style={{ backgroundColor: 'rgba(255,255,255,0.45)' }}
            >
              <span className="text-[12.5px] font-body font-bold text-text-primary leading-none">
                {detail.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: overshoot }}
          className="mt-6"
        >
          <Button
            as="a"
            href={waLink(WHATSAPP_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            onClick={() => trackWhatsApp('hero')}
            data-testid="cta-hero"
            className="w-full"
          >
            Hai cu noi!
          </Button>
        </motion.div>
      </div>

      {/* Grass SVG */}
      <div className="relative mt-8 w-full">
        <svg
          aria-hidden="true"
          className="block w-full"
          viewBox="0 0 500 70"
          preserveAspectRatio="none"
          height="70"
        >
          <path
            d="M0,45 Q80,18 170,36 Q260,54 340,26 Q420,2 500,30 L500,70 L0,70 Z"
            fill="#BFDBFE"
          />
          <path
            d="M0,56 Q70,40 155,52 Q240,64 320,44 Q400,24 500,50 L500,70 L0,70 Z"
            fill="#DBEAFE"
          />
        </svg>
      </div>
    </section>
  )
}
