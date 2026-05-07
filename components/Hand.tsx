import Image from 'next/image'
import { ReactNode, CSSProperties } from 'react'

/**
 * Hand-drawn rough rectangle frame that wraps its children.
 * Two slightly offset paths give it a "drawn twice" pencil feel.
 */
export function ScribbleFrame({
  children,
  color = '#2A2520',
  strokeWidth = 2,
  className = '',
  padding = 'p-5',
}: {
  children: ReactNode
  color?: string
  strokeWidth?: number
  className?: string
  padding?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <path
          d="M 6 9 Q 4 5 11 4 L 60 3 Q 110 2 145 4 Q 195 3 196 9 Q 198 60 197 110 Q 198 170 195 192 Q 194 197 180 196 L 100 197 Q 30 198 8 196 Q 3 195 4 180 Q 3 100 5 60 Z"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M 9 6 Q 5 7 8 13 L 7 70 Q 5 130 8 188 Q 9 195 18 195 L 90 196 Q 160 197 190 195 Q 196 194 195 180 L 196 100 Q 197 30 195 9 Q 194 5 185 5 L 100 4 Q 40 5 9 6 Z"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth * 0.7}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.5}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className={`relative ${padding}`}>{children}</div>
    </div>
  )
}

/**
 * Inline span with a squiggle underline. Use color="leaf" for green, default is terracotta.
 */
export function SquigglyUnderline({
  children,
  color = 'terracotta',
  className = '',
}: {
  children: ReactNode
  color?: 'terracotta' | 'leaf'
  className?: string
}) {
  const klass = color === 'leaf' ? 'scribble-under-leaf' : 'scribble-under'
  return <span className={`${klass} ${className}`}>{children}</span>
}

/**
 * Section break: ~ ✦ ~ in the caveat font, breathable spacing.
 */
export function TildeDivider({
  symbol = '✦',
  className = '',
}: {
  symbol?: string
  className?: string
}) {
  return (
    <div
      className={`flex items-center justify-center gap-3 py-6 text-ink-soft/70 font-caveat text-2xl select-none ${className}`}
      aria-hidden
    >
      <span>~</span>
      <span className="text-terracotta text-xl">{symbol}</span>
      <span>~</span>
    </div>
  )
}

/**
 * Hand-drawn curved arrow. Default points down-right; rotate via className (e.g. "rotate-180").
 */
export function HandArrow({
  className = '',
  color = '#C25B3F',
  size = 56,
}: {
  className?: string
  color?: string
  size?: number
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 8 Q 8 28 22 36 Q 36 44 46 50"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M38 47 L 47 51 L 44 42"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

/**
 * Tilted photo with masking-tape strip on top edge.
 */
export function TapedPhoto({
  src,
  alt,
  width,
  height,
  rotate = -2,
  tapeColor = 'rgba(232, 181, 61, 0.6)',
  className = '',
}: {
  src: string
  alt: string
  width: number
  height: number
  rotate?: number
  tapeColor?: string
  className?: string
}) {
  return (
    <div
      className={`relative bg-white p-2 pb-4 shadow-[0_6px_18px_-8px_rgba(60,40,20,0.4)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block w-full h-auto"
      />
      <span
        className="absolute -top-2 left-1/2 w-16 h-5 -translate-x-1/2 -rotate-3"
        style={{ background: tapeColor, boxShadow: '0 1px 2px rgba(60,40,20,0.15)' }}
        aria-hidden
      />
    </div>
  )
}

/**
 * Photo placeholder for "in curând" — same taped style, with handwritten caption.
 */
export function TapedPlaceholder({
  caption,
  height = 'h-44',
  rotate = -1.5,
  className = '',
}: {
  caption: string
  height?: string
  rotate?: number
  className?: string
}) {
  return (
    <div
      className={`relative bg-white p-2 pb-4 shadow-[0_6px_18px_-8px_rgba(60,40,20,0.4)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        className={`w-full ${height} bg-paper-shade flex items-center justify-center`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(194,91,63,0.06) 0 6px, transparent 6px 14px)",
        }}
      >
        <span className="font-caveat text-xl text-ink-soft/70 px-4 text-center">
          {caption}
        </span>
      </div>
      <span
        className="absolute -top-2 left-1/2 w-16 h-5 -translate-x-1/2 -rotate-3"
        style={{ background: 'rgba(232, 181, 61, 0.55)', boxShadow: '0 1px 2px rgba(60,40,20,0.15)' }}
        aria-hidden
      />
    </div>
  )
}

/**
 * Pencil-style check mark.
 */
export function PencilCheck({
  size = 18,
  color = '#5C7E4F',
  className = '',
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 11 Q 5 11 8 15 Q 9 16 10 14 Q 13 8 18 4"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

/**
 * Tiny circle bullet drawn pencil-style.
 */
export function PencilCircle({
  size = 14,
  color = '#C25B3F',
  filled = false,
  style,
}: {
  size?: number
  color?: string
  filled?: boolean
  style?: CSSProperties
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      style={style}
    >
      <path
        d="M10 3 Q 17 3 17 10 Q 17 17 10 17 Q 3 17 3 10 Q 3 3 10 3 Z"
        stroke={color}
        strokeWidth="1.8"
        fill={filled ? color : 'none'}
        strokeLinecap="round"
      />
    </svg>
  )
}

/**
 * Small leaf accent for margins.
 */
export function LeafScribble({
  size = 22,
  color = '#5C7E4F',
  className = '',
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 18 Q 4 6 18 4 Q 20 14 8 19 Q 6 20 4 18 Z"
        stroke={color}
        strokeWidth="1.5"
        fill={`${color}18`}
        strokeLinejoin="round"
      />
      <path d="M5 19 L 14 9" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Hand-drawn star/sparkle accent. ✦ is too cliché — this is a four-stroke ink star.
 */
export function StarSparkle({
  size = 18,
  color = '#C25B3F',
  className = '',
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path d="M10 2 L 10 18" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2 10 L 18 10" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 4 L 16 16" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M16 4 L 4 16" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}
