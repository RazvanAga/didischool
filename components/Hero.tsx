'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { WA_LINK } from '@/lib/constants'
import { ScribbleFrame, HandArrow, StarSparkle, LeafScribble } from './Hand'

export default function Hero() {
  return (
    <section className="relative px-5 pt-7 pb-4">
      {/* Logo — taped tag, off-axis */}
      <div className="flex justify-end mb-2">
        <div
          className="relative bg-white p-1.5 shadow-[0_4px_12px_-6px_rgba(60,40,20,0.4)]"
          style={{ transform: 'rotate(3deg)' }}
        >
          <Image
            src="/images/logo.jpg"
            alt="Didi Afterschool"
            width={62}
            height={62}
            className="block object-cover"
            priority
          />
          <span
            className="absolute -top-2 left-1/2 w-12 h-4 -translate-x-1/2 -rotate-6"
            style={{ background: 'rgba(232, 181, 61, 0.6)' }}
            aria-hidden
          />
        </div>
      </div>

      {/* Scribbled frame around the title block */}
      <ScribbleFrame color="#2A2520" strokeWidth={2} padding="px-5 pt-7 pb-5">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative text-center"
        >
          {/* Sparkle accents flanking the name */}
          <StarSparkle
            size={16}
            className="absolute -left-1 top-2 -rotate-12"
            color="#C25B3F"
          />
          <StarSparkle
            size={14}
            className="absolute right-0 top-0 rotate-12"
            color="#E8B53D"
          />

          <h1 className="font-caveat font-bold text-[78px] leading-none text-ink mb-1">
            Didi
          </h1>
          <p className="font-patrick text-2xl text-ink-soft tracking-wide mb-3">
            Summer School <span className="text-terracotta">2026</span>
          </p>

          <div className="flex justify-center mb-3" aria-hidden>
            <svg viewBox="0 0 200 10" className="w-44 h-3" preserveAspectRatio="none">
              <path
                d="M2 6 C 30 2, 60 9, 100 5 S 170 9, 198 4"
                fill="none"
                stroke="#C25B3F"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="font-patrick text-lg text-ink-soft leading-snug px-4">
            cea mai frumoasă vară
            <br />
            a copilului tău
          </p>
        </motion.div>
      </ScribbleFrame>

      {/* Duck + hand-drawn arrow */}
      <div className="relative mt-4 flex justify-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <Image
            src="/images/duck.png"
            alt="Didi Duck"
            width={210}
            height={210}
            className="object-contain duck-img"
            priority
          />
        </motion.div>

        <LeafScribble
          size={26}
          className="absolute left-6 top-4 -rotate-12"
          color="#5C7E4F"
        />
        <LeafScribble
          size={20}
          className="absolute right-8 bottom-2 rotate-45"
          color="#5C7E4F"
        />
      </div>

      {/* Date / location — flat text with tilde separators, no emoji */}
      <p className="font-patrick text-base text-ink-soft text-center mt-4 px-2">
        15 iunie&nbsp;–&nbsp;15 septembrie
        <span className="mx-2 text-terracotta">~</span>
        Giroc, Timiș
      </p>
      <p className="font-patrick text-sm text-ink-soft/80 text-center mb-5">
        zilnic 08:00 – 17:00 &nbsp;·&nbsp; grădiniță – cls. a IV-a
      </p>

      {/* CTA */}
      <div className="relative">
        <motion.a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="block w-full py-4 text-center font-caveat font-bold text-2xl text-paper bg-terracotta border-2 border-ink shadow-[5px_5px_0_-1px_#2A2520] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_-1px_#2A2520] transition-all"
        >
          scrie-ne pe WhatsApp →
        </motion.a>

        <span className="absolute -top-3 left-4 -rotate-3 bg-sun px-2 py-0.5 font-caveat text-base text-ink border border-ink shadow-[2px_2px_0_-1px_#2A2520]">
          doar 30 de locuri
        </span>
      </div>

      {/* Hand-drawn arrow inviting scroll */}
      <div className="flex flex-col items-center mt-7 gap-1">
        <span className="font-caveat text-xl text-ink-soft -rotate-2">
          mai jos: ce face copilul aici
        </span>
        <HandArrow className="rotate-[60deg]" color="#5C7E4F" size={42} />
      </div>
    </section>
  )
}
