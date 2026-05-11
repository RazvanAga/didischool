'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { WhatsAppIcon } from './WhatsAppIcon'
import { STICKY_CTA_THRESHOLD_PX, WHATSAPP_MESSAGES, waLink } from '@/lib/constants'
import { trackWhatsApp } from '@/lib/tracking'

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > STICKY_CTA_THRESHOLD_PX)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!visible) return
    let pulseTimer: ReturnType<typeof setTimeout> | null = null
    let idleTimer: ReturnType<typeof setTimeout> | null = null

    const armPulse = () => {
      if (pulseTimer) clearTimeout(pulseTimer)
      pulseTimer = setTimeout(() => setPulse(true), 6000)
    }
    const onActivity = () => {
      setPulse(false)
      if (idleTimer) clearTimeout(idleTimer)
      idleTimer = setTimeout(armPulse, 4000)
    }

    onActivity()
    window.addEventListener('scroll', onActivity, { passive: true })
    window.addEventListener('touchstart', onActivity, { passive: true })

    return () => {
      if (pulseTimer) clearTimeout(pulseTimer)
      if (idleTimer) clearTimeout(idleTimer)
      window.removeEventListener('scroll', onActivity)
      window.removeEventListener('touchstart', onActivity)
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-40 bg-white shadow-sticky-top safe-bottom px-4 pt-3"
        >
          <div className="shell">
            <motion.a
              href={waLink(WHATSAPP_MESSAGES.sticky)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('sticky')}
              data-testid="cta-sticky"
              animate={
                pulse
                  ? {
                      scale: [1, 1.02, 1],
                      boxShadow: [
                        '0 4px 0 0 #D04C4C',
                        '0 4px 24px rgba(255,107,107,0.5)',
                        '0 4px 0 0 #D04C4C',
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1.2, repeat: pulse ? Infinity : 0, ease: 'easeInOut' }}
              className="flex w-full items-center justify-center gap-2 bg-coral text-white font-body font-extrabold text-[17px] rounded-btn px-6 py-[16px] shadow-press-coral active:translate-y-[4px] active:shadow-press-coral-down transition-[transform,box-shadow] duration-[80ms]"
            >
              <WhatsAppIcon size={20} />
              Rezervă un loc pe WhatsApp
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
