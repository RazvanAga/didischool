'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import { SPATIU_PHOTOS } from '@/lib/constants'

const spring = [0.34, 1.56, 0.64, 1] as const

export function SpatiuSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardWidth = useRef<number>(0)

  const onScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const w = cardWidth.current || el.querySelector('div')?.offsetWidth || 1
    cardWidth.current = w
    const idx = Math.round(el.scrollLeft / (w + 12))
    setActiveIndex(Math.max(0, Math.min(idx, SPATIU_PHOTOS.length - 1)))
  }, [])

  const active = SPATIU_PHOTOS[activeIndex]

  return (
    <section className="relative bg-section-blue pt-12 pb-16 overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center font-display font-extrabold px-5 mb-6"
        style={{ fontSize: '68px', color: '#1E3A8A', lineHeight: 1 }}
      >
        La noi
      </motion.h2>

      {/* Photo carousel */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex gap-3 overflow-x-auto px-5 pb-3 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [touch-action:pan-x]"
        >
          {SPATIU_PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className="relative snap-center shrink-0 w-[72%] aspect-[4/3] rounded-[16px] overflow-hidden shadow-card-blue bg-white"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 500px) 78vw, 400px"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Duck narrator */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        className="mt-5 px-5 flex items-center gap-4 h-[180px]"
      >
        {/* Duck — 1/2 width, pops on change */}
        <div className="w-1/2 shrink-0 flex justify-center items-center h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex + '-duck'}
              initial={{ scale: 0.65, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.38, ease: spring }}
            >
              <Image
                src={active.duck}
                alt=""
                width={160}
                height={160}
                className="w-full h-auto object-contain max-h-[160px]"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Speech bubble — 2/3 width */}
        <div className="relative flex-1 min-w-0">
          {/* Bubble tail pointing left toward duck */}
          <div
            className="absolute -left-[10px] top-1/2 -translate-y-1/2 w-0 h-0"
            style={{
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderRight: '11px solid white',
            }}
          />
          <div
            className="rounded-2xl bg-white px-4 py-3"
            style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.09)' }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex + '-caption'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="font-body font-bold text-[15px] text-text-primary leading-snug"
              >
                {active.caption}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Dot indicators */}
      <div className="mt-4 flex justify-center gap-[7px]">
        {SPATIU_PHOTOS.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              width: i === activeIndex ? 20 : 7,
              backgroundColor: i === activeIndex ? '#2563EB' : '#BFDBFE',
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="h-[7px] rounded-full"
          />
        ))}
      </div>
    </section>
  )
}
