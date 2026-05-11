'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from './Button'
import { Card } from './Card'
import { SectionTitle } from './SectionTitle'
import { WhatsAppIcon } from './WhatsAppIcon'
import {
  ATELIERE,
  PRET_BAZA,
  PRET_MASA,
  WHATSAPP_MESSAGES,
  waLink,
} from '@/lib/constants'
import { trackWhatsApp } from '@/lib/tracking'

export function PreturiSection() {
  return (
    <section className="relative bg-brand-yellow pt-12 pb-20 px-5 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 right-4 opacity-50"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src="/images/duck-avatars/duck-food.png"
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
      >
        <SectionTitle
          duck="/images/duck-avatars/duck-curious.png"
          duckAlt="Rățușcă curioasă"
        >
          Cât costă vara la Didi?
        </SectionTitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-8"
      >
        <Card className="flex flex-col gap-5">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[44px] leading-none text-coral">
                {PRET_BAZA}
              </span>
              <span className="font-body font-extrabold text-[18px] text-text-primary">
                lei / zi
              </span>
            </div>
            <p className="mt-1 font-body text-[15px] text-text-secondary leading-relaxed">
              supraveghere completă, joacă, teme
            </p>
          </div>

          <div className="h-px bg-brand-yellow/40" />

          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-[32px] leading-none text-text-primary">
                + {PRET_MASA}
              </span>
              <span className="font-body font-extrabold text-[16px] text-text-primary">
                lei / zi
              </span>
            </div>
            <p className="mt-1 font-body text-[15px] text-text-secondary leading-relaxed">
              mic dejun + prânz, opțional
            </p>
          </div>
        </Card>

        <p className="mt-4 text-center text-[14px] font-body text-text-primary/80">
          Atelierele de specialitate se plătesc separat.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-6"
      >
        <Card className="flex flex-col gap-3">
          <h3 className="font-display text-[20px] leading-tight text-text-primary">
            Atelierele de specialitate
          </h3>
          <ul className="flex flex-col gap-2">
            {ATELIERE.map((a) => (
              <li
                key={a.name}
                className="flex items-center justify-between gap-3 py-1"
              >
                <span className="font-body font-extrabold text-[16px] text-text-primary">
                  {a.name}
                </span>
                <span className="font-body font-extrabold text-[15px] text-coral whitespace-nowrap">
                  {a.price} lei / sesiune
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[13.5px] text-text-secondary font-body leading-relaxed">
            Programul atelierelor se aranjează după înscrieri.
          </p>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
        className="mt-12 flex flex-col items-center gap-3"
      >
        <Image
          src="/images/duck-avatars/duck-ball.png"
          alt=""
          width={72}
          height={72}
          className="h-18 w-18 object-contain"
          style={{ width: 72, height: 72 }}
        />
        <Button
          as="a"
          href={waLink(WHATSAPP_MESSAGES.final)}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          onClick={() => trackWhatsApp('final')}
          data-testid="cta-final"
          className="w-full max-w-[360px]"
        >
          <WhatsAppIcon size={20} />
          Rezervă un loc
        </Button>
        <p className="text-center text-[14px] font-body font-bold text-text-primary">
          Locuri limitate — capacitate 30 copii.
        </p>
      </motion.div>
    </section>
  )
}
