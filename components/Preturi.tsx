'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { WA_LINK } from '@/lib/constants'
import { PencilCheck, ScribbleFrame, StarSparkle } from './Hand'

const included = [
  'supraveghere 08:00 – 17:00',
  'curte deschisă (2000 m²)',
  'teme de vacanță',
  'minimum 2 ateliere pe zi',
]

const extras = [
  { name: 'programare', price: '75 lei', image: 'duck-laptop.png' },
  { name: 'engleză', price: '50 lei', image: 'duck-globe.png' },
  { name: 'artă', price: '50 lei', image: 'duck-paint.png' },
]

export default function Preturi() {
  return (
    <section className="relative px-5 py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat font-bold text-5xl text-ink text-center leading-tight">
          cât <span className="scribble-under">costă?</span>
        </h2>
        <p className="font-patrick text-lg text-ink-soft text-center mt-2 mb-6">
          un preț, fără surprize.
        </p>

        {/* Main price card — scribble-framed */}
        <ScribbleFrame color="#2A2520" strokeWidth={2.2} padding="px-5 pt-6 pb-5">
          {/* Tape strip on top */}
          <span
            className="absolute -top-2 left-1/2 w-24 h-5 -translate-x-1/2 -rotate-2 z-10"
            style={{ background: 'rgba(232, 181, 61, 0.6)', boxShadow: '0 1px 2px rgba(60,40,20,0.15)' }}
            aria-hidden
          />
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-caveat font-bold text-7xl text-terracotta leading-none">
              80
            </span>
            <span className="font-patrick text-2xl text-ink leading-none">lei</span>
            <span className="font-caveat text-2xl text-ink-soft">/ zi</span>
          </div>
          <p className="font-patrick text-base text-ink-soft mb-4">
            + 20 lei masa, opțional
          </p>

          <ul className="flex flex-col gap-2.5">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <PencilCheck size={20} color="#5C7E4F" />
                <span className="font-patrick text-base text-ink leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </ScribbleFrame>

        {/* Extras — hand-lettered with small duck illustrations */}
        <div className="mt-7">
          <p className="font-caveat text-2xl text-ink-soft text-center -rotate-1 mb-3">
            ateliere extra (opționale)
          </p>
          <div className="grid grid-cols-3 gap-3">
            {extras.map((extra, i) => (
              <div
                key={extra.name}
                className="card-paper-soft py-3 px-1.5 flex flex-col items-center"
                style={{ transform: `rotate(${i === 1 ? 0 : i === 0 ? -1 : 1}deg)` }}
              >
                <Image
                  src={`/images/${extra.image}`}
                  alt={extra.name}
                  width={56}
                  height={56}
                  className="object-contain duck-img"
                />
                <span className="font-caveat font-bold text-xl text-ink leading-tight mt-1">
                  {extra.name}
                </span>
                <span className="font-patrick text-xs text-terracotta">
                  {extra.price} / sesiune
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA — terracotta stamp button */}
        <div className="relative mt-9">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 text-center font-caveat font-bold text-2xl text-paper bg-terracotta border-2 border-ink shadow-[5px_5px_0_-1px_#2A2520] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_-1px_#2A2520] transition-all"
          >
            scrie-ne pe WhatsApp →
          </a>
          <span className="absolute -top-3 right-3 rotate-3 bg-paper px-2 py-0.5 font-caveat text-base text-ink border border-ink shadow-[2px_2px_0_-1px_#2A2520]">
            răspundem în câteva ore
          </span>
        </div>

        <div className="flex justify-center items-center gap-2 mt-5">
          <StarSparkle size={12} color="#C25B3F" />
          <p className="font-caveat text-lg text-ink-soft">
            doar 30 de locuri vara aceasta
          </p>
          <StarSparkle size={12} color="#C25B3F" />
        </div>
      </motion.div>
    </section>
  )
}
