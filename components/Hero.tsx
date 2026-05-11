'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from './Button'
import { HERO_DETAILS, WHATSAPP_MESSAGES, waLink } from '@/lib/constants'
import { trackWhatsApp } from '@/lib/tracking'

const overshoot = [0.34, 1.56, 0.64, 1] as const

export function Hero() {
  return (
    <section className="relative bg-brand-yellow overflow-hidden pt-12 pb-20 px-5">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-center"
      >
        <Image
          src="/images/logo.png"
          alt="Didi Afterschool"
          width={96}
          height={96}
          priority
          className="h-20 w-20 object-contain"
        />
      </motion.div>

      <div className="relative mt-6 flex justify-center">
        <motion.div
          initial={{ y: 120, scaleY: 0.6, scaleX: 1.2, opacity: 0 }}
          animate={{
            y: [120, -8, 0, 0],
            scaleY: [0.6, 1.15, 0.95, 1],
            scaleX: [1.2, 0.9, 1.03, 1],
            opacity: [0, 1, 1, 1],
          }}
          transition={{
            duration: 0.8,
            times: [0, 0.55, 0.8, 1],
            ease: 'easeOut',
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <Image
              src="/images/duck-avatars/duck.png"
              alt="Didi rățușca"
              width={180}
              height={180}
              priority
              className="h-44 w-44 object-contain drop-shadow-[0_8px_16px_rgba(212,168,0,0.35)]"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
          className="absolute right-0 bottom-2"
        >
          <motion.div
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/images/duck-avatars/duck-girl.png"
              alt=""
              width={72}
              height={72}
              className="h-16 w-16 object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: overshoot }}
        className="mt-6 text-center font-display text-[48px] leading-[1.05] text-text-primary"
      >
        Didi Summer School
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.45, ease: 'easeOut' }}
        className="mt-3 text-center text-[17px] font-body font-normal text-text-primary/80 leading-relaxed"
      >
        cea mai frumoasă vară a copilului tău
      </motion.p>

      <motion.ul
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { delayChildren: 0.5, staggerChildren: 0.08 },
          },
        }}
        className="mt-6 flex flex-wrap justify-center gap-2"
      >
        {HERO_DETAILS.map((detail) => (
          <motion.li
            key={detail.label}
            variants={{
              hidden: { opacity: 0, y: 12, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: overshoot } },
            }}
            className="rounded-chip bg-white px-3 py-2 text-[14px] font-body font-bold text-text-primary shadow-press-chip"
          >
            <span className="mr-1.5" aria-hidden="true">{detail.icon}</span>
            {detail.label}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: overshoot }}
        className="mt-8 flex justify-center"
      >
        <Button
          as="a"
          href={waLink(WHATSAPP_MESSAGES.hero)}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          onClick={() => trackWhatsApp('hero')}
          data-testid="cta-hero"
        >
          Vreau detalii
        </Button>
      </motion.div>
    </section>
  )
}
