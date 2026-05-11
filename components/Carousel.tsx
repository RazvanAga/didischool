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
  ariaLabel?: string
}

export function Carousel<T>({
  items,
  renderItem,
  keyExtractor,
  cardWidthPercent = 80,
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

  return (
    <div className="w-full" role="region" aria-label={ariaLabel}>
      <div
        ref={trackRef}
        data-carousel-track
        className="flex gap-4 overflow-x-auto px-5 pb-3 snap-x snap-mandatory [-webkit-overflow-scrolling:touch]"
        style={{ scrollbarWidth: 'none' }}
      >
        <style>{`[data-carousel-track]::-webkit-scrollbar{display:none}`}</style>
        {items.map((item, i) => (
          <motion.div
            key={keyExtractor(item, i)}
            data-carousel-card
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="snap-center shrink-0"
            style={{ width: `${cardWidthPercent}%` }}
          >
            {renderItem(item, i)}
          </motion.div>
        ))}
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
