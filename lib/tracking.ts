export type WhatsAppSource = 'hero' | 'final' | 'sticky'

export function trackWhatsApp(source: WhatsAppSource): void {
  if (typeof window === 'undefined') return
  try {
    const w = window as unknown as {
      va?: (event: string, data?: Record<string, unknown>) => void
    }
    w.va?.('event', { name: `whatsapp_${source}` })
  } catch {
  }
}
