import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({
  subsets: ['latin', 'latin-ext'],
  weight: ['600'],
  variable: '--font-fredoka',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Didi Summer School 2026 — Tabără de zi în Giroc, 4-12 ani',
  description:
    'Vara copilului tău pe 2000 mp de curte, cu supraveghere caldă și activități zilnice. 15 iunie – 15 septembrie. Giroc, Timiș.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  )
}
