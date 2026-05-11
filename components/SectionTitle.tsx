'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  duck?: string
  duckAlt?: string
  duckSize?: number
  children: ReactNode
  subtitle?: ReactNode
  className?: string
}

export function SectionTitle({
  duck,
  duckAlt = '',
  duckSize = 56,
  children,
  subtitle,
  className = '',
}: Props) {
  return (
    <div className={`flex flex-col items-center text-center gap-3 ${className}`}>
      {duck && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <Image
            src={duck}
            alt={duckAlt}
            width={duckSize}
            height={duckSize}
            className="object-contain"
            style={{ width: duckSize, height: duckSize }}
          />
        </motion.div>
      )}
      <h2 className="font-display text-[33px] leading-[1.15] text-text-primary px-2">
        {children}
      </h2>
      {subtitle && (
        <p className="text-[15px] text-text-secondary font-body leading-relaxed max-w-[420px]">
          {subtitle}
        </p>
      )}
    </div>
  )
}
