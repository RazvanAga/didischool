'use client'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { motion } from 'framer-motion'

type CarouselProps<T> = {
  items: readonly T[]
  renderItem: (item: T, index: number) => ReactNode
  keyExtractor: (item: T, index: number) => string
  cardWidthPercent?: number
  cardAspectRatio?: string
  ariaLabel?: string
}

export function Carousel<T>({
  items,
  renderItem,
  keyExtractor,
  cardWidthPercent = 72,
  cardAspectRatio,
  ariaLabel,
}: CarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const recompute = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const center = el.scrollLeft + el.clientWidth / 2
    const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-carousel-card]'))
    let best = 0
    let bestDist = Infinity
    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const dist = Math.abs(cardCenter - center)
      if (dist < bestDist) {
        bestDist = dist
        best = i
      }
    })
    setActiveIndex(best)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    recompute()
    el.addEventListener('scroll', recompute, { passive: true })
    window.addEventListener('resize', recompute)
    return () => {
      el.removeEventListener('scroll', recompute)
      window.removeEventListener('resize', recompute)
    }
  }, [recompute])

  const scrollTo = useCallback((dir: -1 | 1) => {
    const el = trackRef.current
    if (!el) return
    const cards = Array.from(el.querySelectorAll<HTMLElement>('[data-carousel-card]'))
    const next = Math.max(0, Math.min(activeIndex + dir, cards.length - 1))
    const card = cards[next]
    if (!card) return
    const cardCenter = card.offsetLeft + card.offsetWidth / 2
    el.scrollTo({ left: cardCenter - el.clientWidth / 2, behavior: 'smooth' })
  }, [activeIndex])

  return (
    <div className="w-full" role="region" aria-label={ariaLabel}>
      <div className="relative">
      <div
        ref={trackRef}
        data-carousel-track
        className="flex gap-4 overflow-x-auto px-5 pb-3 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [touch-action:pan-both]"
        style={{ scrollbarWidth: 'none' }}
      >
        <style>{`[data-carousel-track]::-webkit-scrollbar{display:none}`}</style>
        {items.map((item, i) => (
          <motion.div
            key={keyExtractor(item, i)}
            data-carousel-card
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="snap-center shrink-0"
            style={{ width: `${cardWidthPercent}%`, aspectRatio: cardAspectRatio }}
          >
            {renderItem(item, i)}
          </motion.div>
        ))}
      </div>

      {/* Nav buttons — visible only on non-touch devices */}
      <button
        onClick={() => scrollTo(-1)}
        disabled={activeIndex === 0}
        aria-label="Înapoi"
        className="hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white shadow-md text-text-primary disabled:opacity-30 transition-opacity"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={() => scrollTo(1)}
        disabled={activeIndex === items.length - 1}
        aria-label="Înainte"
        className="hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full bg-white shadow-md text-text-primary disabled:opacity-30 transition-opacity"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      </div>

      <div
        className="mx-auto mt-4 h-1.5 w-32 rounded-full bg-brand-yellow/30 overflow-hidden"
        data-carousel-progress
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={items.length - 1}
        aria-valuenow={activeIndex}
      >
        <motion.div
          className="h-full bg-coral rounded-full"
          animate={{
            width: items.length > 1
              ? `${((activeIndex + 1) / items.length) * 100}%`
              : '100%',
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
