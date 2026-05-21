'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

function buildMessage(wantsMasa: boolean, selectedAteliere: string[]): string {
  let msg = 'Bună! Aș vrea să rezerv un loc la Didi Summer School 2026.'
  if (wantsMasa) {
    msg += ' Aș vrea să comandăm și mâncarea prin intermediul dumneavoastră.'
  }
  if (selectedAteliere.length > 0) {
    const list = selectedAteliere.map((n) => n.toLowerCase()).join(', ')
    msg += ` De asemenea, mă interesează atelierele de ${list}.`
  }
  return msg
}

function CheckRow({
  checked,
  onToggle,
  label,
  sublabel,
  price,
  accent = '#D04C4C',
  isLast = false,
}: {
  checked: boolean
  onToggle: () => void
  label: string
  sublabel?: string
  price: string
  accent?: string
  isLast?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`w-full flex items-center gap-3 py-3 text-left transition-colors ${
        !isLast ? 'border-b border-gray-100' : ''
      }`}
    >
      {/* Custom checkbox */}
      <motion.div
        animate={{
          backgroundColor: checked ? accent : '#FFFFFF',
          borderColor: checked ? accent : '#D1D5DB',
          scale: checked ? [1, 1.18, 1] : 1,
        }}
        transition={{ duration: 0.22, ease: spring }}
        className="shrink-0 w-[24px] h-[24px] rounded-[7px] border-2 flex items-center justify-center"
      >
        <AnimatePresence>
          {checked && (
            <motion.svg
              key="check"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.18, ease: spring }}
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
            >
              <path
                d="M1.5 5L5 8.5L11.5 1.5"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Label */}
      <div className="flex-1 min-w-0">
        <span className="font-body font-extrabold text-[15.5px] text-text-primary leading-snug">
          {label}
        </span>
        {sublabel && (
          <p className="font-body text-[12.5px] text-text-secondary mt-0.5">{sublabel}</p>
        )}
      </div>

      {/* Price */}
      <span
        className="font-body font-extrabold text-[14px] whitespace-nowrap shrink-0"
        style={{ color: accent }}
      >
        {price}
      </span>
    </button>
  )
}

export function PreturiSection() {
  const [wantsMasa, setWantsMasa] = useState(false)
  const [selectedAteliere, setSelectedAteliere] = useState<string[]>([])

  function toggleAtelier(name: string) {
    setSelectedAteliere((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    )
  }

  const message = buildMessage(wantsMasa, selectedAteliere)

  useEffect(() => {
    window.dispatchEvent(new CustomEvent('wa-message-update', { detail: message }))
  }, [message])

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
        <a
          href="#include-pretul"
          className="mt-3 inline-flex items-center gap-1.5 font-body font-bold text-[14px] text-text-primary/60 hover:text-text-primary/90 transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
            <path
              d="M7.5 11V4M4 7.5L7.5 4L11 7.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Vezi mai sus ce include prețul de bază
        </a>
      </motion.div>

      {/* Interactive configurator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        className="mt-8"
      >
        <p className="font-body font-extrabold text-[13px] uppercase tracking-wider text-text-primary/50 mb-3 text-center">
          Pachete extra
        </p>

        {/* Masă */}
        <Card className="px-5 py-0">
          <CheckRow
            checked={wantsMasa}
            onToggle={() => setWantsMasa((v) => !v)}
            label="Prânz"
            sublabel="comandat prin noi"
            price={`+${PRET_MASA} lei / zi`}
            accent="#D04C4C"
            isLast
          />
        </Card>

        {/* Ateliere */}
        <Card className="mt-3 px-5 py-0">
          <p className="font-body font-extrabold text-[12px] uppercase tracking-wider text-text-secondary pt-4 pb-1">
            Ateliere opționale
          </p>
          {ATELIERE.map((a, i) => (
            <CheckRow
              key={a.name}
              checked={selectedAteliere.includes(a.name)}
              onToggle={() => toggleAtelier(a.name)}
              label={a.name}
              sublabel={a.description}
              price={`${a.price} lei / ses.`}
              accent="#2563EB"
              isLast={i === ATELIERE.length - 1}
            />
          ))}
          <p className="font-body text-[12px] text-text-secondary pb-4 pt-2">
            Programul se aranjează după înscrieri.
          </p>
        </Card>
      </motion.div>

      {/* Dynamic message preview */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="mt-4"
      >
        <Card className="bg-[#F0FDF4] border border-[#86EFAC]">
          <p className="font-body text-[12px] font-bold text-[#166534] uppercase tracking-wider mb-2">
            Mesajul dvs. WhatsApp
          </p>
          <AnimatePresence mode="wait">
            <motion.p
              key={message}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="font-body text-[13.5px] text-[#166534] leading-relaxed"
            >
              {message}
            </motion.p>
          </AnimatePresence>
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
        <Button
          as="a"
          href={waLink(message)}
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
