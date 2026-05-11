import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Didi Summer School 2026 — cea mai frumoasă vară a copilului tău'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#FFD700',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '64px',
          fontFamily: 'sans-serif',
          color: '#2D3436',
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, textAlign: 'center' }}>
          Didi Summer School 2026
        </div>
        <div style={{ fontSize: 38, marginTop: 24, textAlign: 'center', maxWidth: 900 }}>
          cea mai frumoasă vară a copilului tău
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 56,
            background: '#FF6B6B',
            color: 'white',
            padding: '20px 36px',
            borderRadius: 24,
            fontWeight: 800,
          }}
        >
          15 iunie – 15 septembrie · Giroc, Timiș
        </div>
      </div>
    ),
    { ...size },
  )
}
