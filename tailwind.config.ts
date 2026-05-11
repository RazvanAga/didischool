import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FFD700',
        'brand-yellow-deep': '#D4A800',
        cream: '#FFF8E7',
        coral: '#FF6B6B',
        'coral-deep': '#D04C4C',
        'text-primary': '#2D3436',
        'text-secondary': '#636E72',
      },
      fontFamily: {
        display: ['var(--font-baloo)', 'system-ui', 'sans-serif'],
        body: ['var(--font-baloo)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm-card': '0 4px 16px rgba(255, 215, 0, 0.15)',
        'press-coral': '0 4px 0 0 #D04C4C',
        'press-coral-down': '0 0 0 0 #D04C4C',
        'press-yellow': '0 4px 0 0 #D4A800',
        'press-yellow-down': '0 0 0 0 #D4A800',
        'press-chip': '0 2px 0 0 #E5E5E5',
        'press-chip-down': '0 0 0 0 #E5E5E5',
        'sticky-top': '0 -4px 12px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        card: '20px',
        btn: '24px',
        chip: '16px',
        blob: '32px',
      },
      transitionTimingFunction: {
        overshoot: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}

export default config
