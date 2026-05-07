'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PencilCircle } from './Hand'

const faqs = [
  {
    q: 'Ce intră în 80 lei pe zi?',
    a: 'Supraveghere completă 08:00–17:00, joacă în curte, teme de vacanță cu două cadre didactice acreditate și minimum două ateliere zilnic.',
  },
  {
    q: 'Mâncarea e inclusă?',
    a: 'Nu — masa costă 20 lei/zi, separat. Fiecare familie alege furnizorul preferat, iar noi coordonăm comanda.',
  },
  {
    q: 'Ce vârste primiți vara?',
    a: 'De la grădiniță până la finalul clasei a IV-a. Grupăm copiii pe intervale de vârstă pentru ateliere.',
  },
  {
    q: 'Cum ajunge copilul la afterschool?',
    a: 'Părinții îl aduc dimineața și îl iau oricând după ora 17:00. Suntem pe strada principală din Giroc.',
  },
  {
    q: 'Cine îi supraveghează?',
    a: 'Două cadre didactice acreditate sunt prezente toată ziua. La ateliere intră specialiști pe domeniu (programare, engleză, artă).',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat font-bold text-5xl text-ink text-center mb-2 leading-tight">
          ce <span className="scribble-under">ne întrebați</span>
        </h2>
        <p className="font-patrick text-lg text-ink-soft text-center mb-7">
          mai bine întrebați acum decât pe 14 iunie.
        </p>

        <div className="flex flex-col gap-3.5">
          {faqs.map((faq, i) => {
            const open = openIndex === i
            return (
              <div
                key={i}
                className="card-paper-soft px-4 py-3"
                style={{ transform: `rotate(${i % 2 === 0 ? -0.4 : 0.5}deg)` }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-3 text-left"
                  aria-expanded={open}
                >
                  <span className="flex items-start gap-2.5 flex-1">
                    <span className="mt-1.5 shrink-0">
                      <PencilCircle size={12} color="#C25B3F" filled={open} />
                    </span>
                    <span className="font-patrick text-lg text-ink leading-snug">
                      {faq.q}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 mt-2"
                    aria-hidden
                  >
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                      <path
                        d="M2 2 Q 7 9, 12 2"
                        stroke="#5C4F42"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="dotted-rule my-3" aria-hidden />
                      <p className="font-nunito text-[15px] text-ink-soft leading-relaxed pl-5 pr-1 pb-1">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
