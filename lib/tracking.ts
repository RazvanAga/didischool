import { track } from '@vercel/analytics'

export type WhatsAppSource = 'hero' | 'final' | 'sticky'

export function trackWhatsApp(source: WhatsAppSource): void {
  if (typeof window === 'undefined') return
  try {
    track(`whatsapp_${source}`)
  } catch {
  }
}
