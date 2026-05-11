import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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

const SITE_URL = 'https://didischool.ro'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Didi Summer School 2026 — Tabără de zi în Giroc, 4-12 ani',
  description:
    'Vara copilului tău pe 2000 mp de curte, cu supraveghere caldă și activități zilnice. 15 iunie – 15 septembrie. Giroc, Timiș.',
  openGraph: {
    title: 'Didi Summer School 2026 — cea mai frumoasă vară a copilului tău',
    description:
      '2000 mp curte, supraveghere 07:00–18:00, 4-12 ani. Înscrieri deschise.',
    url: SITE_URL,
    siteName: 'Didi Afterschool',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Didi Summer School 2026',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'Didi Afterschool',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Giroc',
    addressRegion: 'Timiș',
    addressCountry: 'RO',
  },
  telephone: '+40724223600',
  url: 'https://didischool.ro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${fredoka.variable} ${nunito.variable}`}>
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
