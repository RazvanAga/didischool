'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { SPATIU_FEATURES, SPATIU_PHOTOS } from '@/lib/constants'

export function SpatiuSection() {
  return (
    <section className="relative bg-cream pt-12 pb-16 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 right-4 opacity-40"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/images/duck-avatars/duck-ping-pong.png"
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 object-contain"
        />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-3 opacity-30"
        animate={{ rotate: [3, -3, 3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/images/duck-avatars/duck-paint.png"
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-5"
      >
        <SectionTitle
          duck="/images/duck-avatars/duck-ball.png"
          duckAlt="Rățușcă cu mingea"
        >
          2000 mp de curte. 2 săli interioare. Loc real pentru joacă.
        </SectionTitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
        className="mt-8"
      >
        <div
          className="flex gap-3 overflow-x-auto px-5 pb-3 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none]"
          style={{ scrollbarWidth: 'none' }}
        >
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
          {SPATIU_PHOTOS.map((photo) => (
            <motion.div
              key={photo.src}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative snap-center shrink-0 w-[72%] aspect-[4/3] rounded-[16px] overflow-hidden shadow-warm-card bg-white"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 500px) 78vw, 400px"
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
        }}
        className="mt-8 px-5 flex flex-col gap-3"
      >
        {SPATIU_FEATURES.map((feature) => (
          <motion.li
            key={feature.label}
            variants={{
              hidden: { opacity: 0, x: -12 },
              show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
            }}
            className="flex items-center gap-3"
          >
            <Image
              src={feature.duck}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 object-contain shrink-0"
            />
            <span className="text-[17px] font-body font-bold text-text-primary">
              {feature.label}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
