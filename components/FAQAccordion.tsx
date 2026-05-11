'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Item = { question: string; answer: string }

type Props = {
  items: readonly Item[]
}

export function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <ul className="flex flex-col gap-3 px-5">
      {items.map((item, i) => {
        const open = i === openIndex
        const panelId = `faq-panel-${i}`
        const headerId = `faq-header-${i}`
        return (
          <li
            key={item.question}
            className="bg-white rounded-card shadow-warm-card overflow-hidden"
          >
            <button
              id={headerId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              data-testid={`faq-header-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
              className="w-full flex items-center justify-between gap-3 text-left px-5 py-4"
            >
              <span className="font-body font-extrabold text-[16.5px] text-text-primary leading-snug">
                {item.question}
              </span>
              <motion.span
                aria-hidden="true"
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="shrink-0 text-coral text-[18px] leading-none"
              >
                ▾
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  data-testid={`faq-panel-${i}`}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="px-5 pb-5 font-body font-normal text-[15px] text-text-secondary leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}
