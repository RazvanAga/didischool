'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TapedPlaceholder, PencilCircle, HandArrow } from './Hand'

const facilities = [
  'porți de fotbal',
  'masă de ping-pong',
  'căsuță în copac',
  'trotinete și jucării',
  'colț de lectură afară',
  'curte cu iarbă, 2000 mp',
]

export default function Spatiu() {
  return (
    <section className="relative px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-caveat font-bold text-5xl text-ink leading-tight text-center -rotate-1">
          un loc unde copiii
          <br />
          <span className="scribble-under">vor</span> să vină
        </h2>
        <p className="font-patrick text-lg text-ink-soft text-center mt-3 mb-6">
          2000 m² de curte. fără ecran, fără grabă.
        </p>

        {/* Scrapbook of taped photos */}
        <div className="relative h-72 mb-8">
          <div className="absolute left-0 top-0 w-[62%]">
            <TapedPlaceholder caption="foto curte — în curând" rotate={-3} height="h-44" />
          </div>
          <div className="absolute right-0 top-20 w-[55%]">
            <TapedPlaceholder
              caption="căsuța din copac"
              rotate={4}
              height="h-32"
            />
          </div>
        </div>

        {/* Hand-written facility list with curved arrow pointing in */}
        <div className="relative">
          <span className="absolute -top-2 -left-1 font-caveat text-xl text-leaf -rotate-6">
            ce găsesc afară:
          </span>

          <ul className="mt-8 space-y-2.5 pl-2">
            {facilities.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="flex items-center gap-3"
              >
                <PencilCircle
                  size={12}
                  color={i % 2 === 0 ? '#C25B3F' : '#5C7E4F'}
                  filled={i % 3 === 0}
                />
                <span className="font-patrick text-lg text-ink leading-tight">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Duck illustration peeking from the corner */}
        <div className="relative flex justify-end mt-6">
          <HandArrow
            className="absolute right-32 top-2 rotate-12"
            size={48}
            color="#5C7E4F"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Image
              src="/images/duck-ball.png"
              alt="Didi Duck cu mingea"
              width={130}
              height={130}
              className="object-contain duck-img"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
