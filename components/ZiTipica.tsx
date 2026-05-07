'use client'

import { motion } from 'framer-motion'
import { PencilCircle } from './Hand'

const timeline = [
  { time: '08:00', activity: 'sosire & joacă liniștită' },
  { time: '08:30', activity: 'mic dejun împreună' },
  { time: '09:00', activity: 'atelier de dimineață' },
  { time: '10:30', activity: 'joacă liberă în curte' },
  { time: '12:00', activity: 'prânz' },
  { time: '13:00', activity: 'al doilea atelier' },
  { time: '14:30', activity: 'joacă supravegheată\npână la plecare' },
]

export default function ZiTipica() {
  return (
    <section className="relative px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat font-bold text-5xl text-ink leading-tight text-center rotate-1">
          o <span className="scribble-under-leaf">zi</span> la Didi
        </h2>
        <p className="font-patrick text-lg text-ink-soft text-center mt-3 mb-8">
          în mare, cam așa arată — dar zilele bune nu se țin de orar.
        </p>

        <div className="relative pl-2">
          {/* Hand-drawn vertical pencil line */}
          <svg
            className="absolute left-[68px] top-3 bottom-3 w-2"
            viewBox="0 0 4 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M 2 0 Q 1 25 2.5 50 Q 1.5 75 2 100"
              stroke="#5C7E4F"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
              opacity="0.7"
            />
          </svg>

          <ul className="flex flex-col gap-3">
            {timeline.map((slot, i) => (
              <motion.li
                key={slot.time}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="flex items-start gap-4"
              >
                {/* Hand-written time */}
                <span className="w-[58px] shrink-0 pt-1.5 text-right font-caveat text-xl text-leaf-deep leading-none">
                  {slot.time}
                </span>

                {/* Pencil dot on the line */}
                <span className="relative z-10 mt-2 shrink-0">
                  <PencilCircle size={16} color="#5C7E4F" filled />
                </span>

                {/* Activity — paper-style note */}
                <div
                  className="card-paper-soft flex-1 px-3.5 py-2 text-ink"
                  style={{ transform: `rotate(${i % 2 === 0 ? -0.4 : 0.5}deg)` }}
                >
                  <span className="font-patrick text-base leading-snug whitespace-pre-line">
                    {slot.activity}
                  </span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <p className="font-caveat text-xl text-ink-soft text-center mt-7 -rotate-1">
          + multă curte, multe râsete
        </p>
      </motion.div>
    </section>
  )
}
