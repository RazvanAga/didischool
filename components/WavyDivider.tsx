type Props = {
  topColor: string
  bottomColor: string
  height?: number
  className?: string
}

export function WavyDivider({
  topColor,
  bottomColor,
  height = 40,
  className = '',
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ backgroundColor: bottomColor, height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 40"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full block"
      >
        <path
          d="M0,0 L0,16 C80,40 170,0 250,16 C330,32 420,0 500,16 L500,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  )
}
