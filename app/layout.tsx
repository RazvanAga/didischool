import type { Metadata } from 'next'
import { Caveat, Patrick_Hand, Nunito } from 'next/font/google'
import './globals.css'

const caveat = Caveat({
  weight: ['500', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-caveat',
  display: 'swap',
})

const patrick = Patrick_Hand({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-patrick',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Didi Summer School 2026 — Giroc, Timiș',
  description:
    'Summer School pentru copii de la grădiniță până în clasa a IV-a. 15 iunie – 15 septembrie, Giroc. Supraveghere 08:00–17:00, ateliere de programare, engleză și artă.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body
        className={`${caveat.variable} ${patrick.variable} ${nunito.variable} font-nunito bg-paper-edge text-ink`}
      >
        <div className="max-w-[430px] mx-auto relative bg-paper paper-grain shadow-[0_0_60px_rgba(60,40,20,0.08)]">
          {children}
        </div>
      </body>
    </html>
  )
}
