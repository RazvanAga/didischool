'use client'

import { motion } from 'framer-motion'
import { Button } from './Button'
import { Card } from './Card'
import { WhatsAppIcon } from './WhatsAppIcon'
import {
  ATELIERE,
  PRET_BAZA,
  PRET_MASA,
  WHATSAPP_MESSAGES,
  waLink,
} from '@/lib/constants'
import { trackWhatsApp } from '@/lib/tracking'

const spring = [0.34, 1.56, 0.64, 1] as const

export function PreturiSection() {
  return (
    <section className="relative bg-brand-yellow pt-12 pb-20 px-5 overflow-hidden">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="font-display font-extrabold text-center"
        style={{ fontSize: '68px', color: '#D04C4C', lineHeight: 1 }}
      >
        Cât costă vara la Didi?
      </motion.h2>

      {/* Main price — billboard on yellow */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        className="mt-10 flex flex-col items-center"
      >
        <div className="flex items-baseline gap-3">
          <span
            className="font-display font-extrabold leading-none"
            style={{ fontSize: '96px', color: '#1C1C1E' }}
          >
            {PRET_BAZA}
          </span>
          <span className="font-body font-extrabold text-[22px] text-text-primary">
            lei / zi
          </span>
        </div>
        <p className="mt-2 font-body text-[16px] text-text-primary/70 text-center">
          supraveghere completă, joacă, teme
        </p>
      </motion.div>

      {/* Meals add-on */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        className="mt-6"
      >
        <Card className="flex items-center justify-between gap-4">
          <div>
            <div className="font-body font-extrabold text-[16px] text-text-primary">
              Mic dejun + prânz
            </div>
            <p className="font-body text-[13.5px] text-text-secondary mt-0.5">
              opțional, comandat prin noi
            </p>
          </div>
          <div className="flex items-baseline gap-1 shrink-0">
            <span className="font-display font-extrabold text-[28px] text-text-primary leading-none">
              +{PRET_MASA}
            </span>
            <span className="font-body text-[14px] text-text-secondary">lei / zi</span>
          </div>
        </Card>
      </motion.div>

      {/* Ateliere list */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="mt-4"
      >
        <Card className="flex flex-col gap-3">
          <h3 className="font-display text-[20px] leading-tight text-text-primary">
            Atelierele de specialitate
          </h3>
          <ul className="flex flex-col gap-2">
            {ATELIERE.map((a) => (
              <li
                key={a.name}
                className="flex items-center justify-between gap-3 py-1 border-b border-gray-100 last:border-0"
              >
                <span className="font-body font-extrabold text-[15.5px] text-text-primary">
                  {a.name}
                </span>
                <span className="font-body font-extrabold text-[15px] text-coral whitespace-nowrap">
                  {a.price} lei / ses.
                </span>
              </li>
            ))}
          </ul>
          <p className="text-[13px] text-text-secondary font-body leading-relaxed">
            Programul se aranjează după înscrieri.
          </p>
        </Card>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: spring }}
        className="mt-10 flex flex-col items-center gap-4"
      >
        {/* Urgency badge */}
        <div
          className="rounded-full px-5 py-2"
          style={{ backgroundColor: '#D04C4C' }}
        >
          <span className="font-body font-extrabold text-white text-[14px]">
            Locuri limitate — capacitate 30 copii
          </span>
        </div>

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
      </motion.div>
    </section>
  )
}
