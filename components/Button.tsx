'use client'

import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'chip'

const base =
  'inline-flex items-center justify-center gap-2 font-body font-extrabold ' +
  'transition-[transform,box-shadow] duration-[80ms] ease-linear select-none ' +
  'active:translate-y-[4px] will-change-transform'

const variants: Record<Variant, string> = {
  primary:
    'bg-coral text-white text-[18px] rounded-btn px-8 py-[18px] ' +
    'shadow-press-coral active:shadow-press-coral-down',
  secondary:
    'bg-brand-yellow text-text-primary text-[17px] rounded-btn px-7 py-4 ' +
    'shadow-press-yellow active:shadow-press-yellow-down',
  chip:
    'bg-white text-text-primary text-[14px] font-bold rounded-chip px-3 py-2 ' +
    'shadow-press-chip active:shadow-press-chip-down',
}

type CommonProps = {
  variant?: Variant
  children: ReactNode
  className?: string
}

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  AnchorProps | ButtonProps
>(function Button(props, ref) {
  const { variant = 'primary', className = '', children, ...rest } = props as CommonProps & {
    as?: 'a' | 'button'
  } & Record<string, unknown>

  const classes = `${base} ${variants[variant]} ${className}`

  if ((props as AnchorProps).as === 'a') {
    const { as: _as, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { as?: string }
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...anchorRest}
      >
        {children}
      </a>
    )
  }

  const { as: _as, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement> & { as?: string }
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...buttonRest}
    >
      {children}
    </button>
  )
})
