import { type HTMLAttributes, type ReactNode } from 'react'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Card({ children, className = '', ...rest }: CardProps) {
  return (
    <div
      className={`bg-white rounded-card shadow-warm-card p-5 ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
