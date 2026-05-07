'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, type PanInfo } from 'framer-motion'

export interface CarouselCard {
  title: string
  description: string
  note?: string
  image: string
}

interface HorizontalCarouselProps {
  sectionTitle: string
  intro?: string
  cards: CarouselCard[]
  accent?: 'terracotta' | 'leaf' | 'plum'
}

const CARD_WIDTH = 250
const CARD_GAP = 18

const accentMap = {
  terracotta: { underline: 'scribble-under', dot: '#C25B3F', tape: 'rgba(232, 181, 61, 0.6)' },
  leaf: { underline: 'scribble-under-leaf', dot: '#5C7E4F', tape: 'rgba(122, 168, 196, 0.55)' },
  plum: { underline: 'scribble-under', dot: '#7E3F5C', tape: 'rgba(194,91,63,0.45)' },
}

export default function HorizontalCarousel({
  sectionTitle,
  intro,
  cards,
  accent = 'terracotta',
}: HorizontalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const stride = CARD_WIDTH + CARD_GAP
  const accentCfg = accentMap[accent]

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if ((info.offset.x < -40 || info.velocity.x < -300) && currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else if ((info.offset.x > 40 || info.velocity.x > 300) && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <section className="py-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat font-bold text-5xl text-ink text-center px-5 leading-tight -rotate-1">
          <span className={accentCfg.underline}>{sectionTitle}</span>
        </h2>
        {intro && (
          <p className="font-patrick text-lg text-ink-soft text-center px-6 mt-3 mb-5">
            {intro}
          </p>
        )}

        {/* Page indicator: handwritten "1/4" */}
        <div className="flex justify-center items-center gap-3 mb-4 mt-2">
          <span className="font-caveat text-xl text-ink-soft">
            {currentIndex + 1} <span className="text-ink-soft/40">/</span> {cards.length}
          </span>
          <div className="flex gap-1.5">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === currentIndex ? 18 : 7,
                  height: 7,
                  backgroundColor: i === currentIndex ? accentCfg.dot : '#D6C9A4',
                }}
                aria-label={`Card ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="pl-5 overflow-visible">
          <motion.div
            className="flex"
            style={{ gap: CARD_GAP }}
            animate={{ x: -currentIndex * stride }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            drag="x"
            dragConstraints={{
              left: -(cards.length - 1) * stride,
              right: 0,
            }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
          >
            {cards.map((card, i) => (
              <CarouselCardItem
                key={i}
                card={card}
                index={i}
                tapeColor={accentCfg.tape}
                accentColor={accentCfg.dot}
              />
            ))}
          </motion.div>
        </div>

        <p className="font-caveat text-base text-ink-soft/70 text-center mt-4">
          ← trage pentru a vedea mai mult →
        </p>
      </motion.div>
    </section>
  )
}

function CarouselCardItem({
  card,
  index,
  tapeColor,
  accentColor,
}: {
  card: CarouselCard
  index: number
  tapeColor: string
  accentColor: string
}) {
  const rotate = index % 2 === 0 ? -1.2 : 1.4

  return (
    <div
      style={{
        width: CARD_WIDTH,
        minWidth: CARD_WIDTH,
        transform: `rotate(${rotate}deg)`,
      }}
      className="card-paper relative px-4 pt-7 pb-5 select-none"
    >
      {/* Tape strip */}
      <span
        className="absolute -top-2 left-1/2 w-20 h-5 -translate-x-1/2 -rotate-3"
        style={{ background: tapeColor, boxShadow: '0 1px 2px rgba(60,40,20,0.15)' }}
        aria-hidden
      />

      <div className="flex justify-center mb-3">
        <Image
          src={`/images/${card.image}`}
          alt={card.title}
          width={120}
          height={120}
          className="object-contain duck-img"
          draggable={false}
        />
      </div>

      <h3 className="font-caveat font-bold text-3xl text-ink text-center leading-tight mb-1">
        {card.title}
      </h3>
      <p className="font-patrick text-base text-ink-soft text-center leading-snug">
        {card.description}
      </p>

      {card.note && (
        <>
          <div className="dotted-rule mt-3 mb-2" aria-hidden />
          <p
            className="font-caveat text-lg text-center"
            style={{ color: accentColor }}
          >
            {card.note}
          </p>
        </>
      )}
    </div>
  )
}
