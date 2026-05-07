'use client'

import { motion } from 'framer-motion'
import { LeafScribble, StarSparkle } from './Hand'

const team = [
  {
    name: 'Ana',
    role: 'învățătoare',
    detail:
      'cadru didactic activ la școala din Giroc — ține grupul ancorat în pedagogie reală.',
  },
  {
    name: 'Diana',
    role: 'asistă Ana',
    detail: 'specializată în pedagogie; răspunde de ritmul zilei și de teme.',
  },
  {
    name: 'Dorin',
    role: 'administrație',
    detail: 'omul cu cheile, cu lista de prânzuri și cu zâmbetul de dimineață.',
  },
  {
    name: 'Razvan',
    role: 'atelier de programare',
    detail: 'co-fondator; predă Scratch, Python și Hour of Code în Minecraft.',
  },
  {
    name: 'Kasiia',
    role: 'engleză & artă',
    detail: 'conversație prin joc, pictură și colaj — cu copii curioși.',
  },
]

const initialColors = ['#C25B3F', '#5C7E4F', '#7E3F5C', '#E8B53D', '#7AA8C4']

export default function Echipa() {
  return (
    <section className="px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat font-bold text-5xl text-ink text-center leading-tight">
          oamenii pe care
          <br />
          îi <span className="scribble-under-leaf">cunoaște</span> copilul
        </h2>
        <p className="font-patrick text-lg text-ink-soft text-center mt-3 mb-7">
          aceiași oameni, în fiecare zi. fără rotație, fără surprize.
        </p>

        <div className="flex flex-col gap-4">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="card-paper-soft px-4 py-3.5 flex items-start gap-3.5"
              style={{ transform: `rotate(${i % 2 === 0 ? -0.6 : 0.7}deg)` }}
            >
              {/* Hand-lettered initial in a colored circle */}
              <div className="shrink-0">
                <div
                  className="w-12 h-12 flex items-center justify-center font-caveat font-bold text-3xl text-paper rounded-full"
                  style={{ backgroundColor: initialColors[i % initialColors.length] }}
                >
                  {person.name[0]}
                </div>
              </div>

              <div className="flex-1 pt-0.5">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-caveat font-bold text-2xl text-ink leading-none">
                    {person.name}
                  </h3>
                  <span className="font-patrick text-sm text-terracotta">
                    {person.role}
                  </span>
                </div>
                <p className="font-nunito text-sm text-ink-soft leading-snug mt-1">
                  {person.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-6 px-4 text-center">
          <StarSparkle
            size={14}
            color="#E8B53D"
            className="absolute left-2 top-1 -rotate-12"
          />
          <LeafScribble
            size={20}
            color="#5C7E4F"
            className="absolute right-2 -top-1 rotate-12"
          />
          <p className="font-caveat text-xl text-ink-soft -rotate-1">
            5 oameni, 30 de copii. ne cunoaștem.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
