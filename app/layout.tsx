import type { Metadata, Viewport } from 'next'
import { Baloo_2 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const baloo = Baloo_2({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-baloo',
  display: 'swap',
})

const SITE_URL = 'https://didischool.ro'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Didi Summer School 2026',
  description: 'Cea mai frumoasă vară a copilului tău.',
  openGraph: {
    title: 'Didi Summer School 2026',
    description: 'Cea mai frumoasă vară a copilului tău.',
    url: SITE_URL,
    siteName: 'Didi Afterschool',
    images: [
      {
        url: '/opengraph-image.png',
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
    <html lang="ro" className={baloo.variable}>
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
