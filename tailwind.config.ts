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
        ink: '#2A2520',
        'ink-soft': '#5C4F42',
        paper: '#FAF3E3',
        'paper-edge': '#EADFC0',
        'paper-shade': '#F1E4C2',
        terracotta: '#C25B3F',
        'terracotta-deep': '#9C4124',
        leaf: '#5C7E4F',
        'leaf-deep': '#3F5A33',
        sun: '#E8B53D',
        sky: '#7AA8C4',
        plum: '#7E3F5C',
      },
      fontFamily: {
        caveat: ['var(--font-caveat)', 'cursive'],
        patrick: ['var(--font-patrick)', 'cursive'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      rotate: {
        '1.5': '1.5deg',
        '2.5': '2.5deg',
      },
    },
  },
  plugins: [],
}

export default config
