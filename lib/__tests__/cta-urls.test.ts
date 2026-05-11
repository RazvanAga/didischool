import { describe, expect, it } from 'vitest'
import { WHATSAPP_MESSAGES, waLink } from '../constants'

describe('CTA URL generation', () => {
  it('hero CTA generates correct WhatsApp URL with number 40724223600', () => {
    const url = waLink(WHATSAPP_MESSAGES.hero)
    expect(url.startsWith('https://wa.me/40724223600?text=')).toBe(true)
    expect(url).toContain(encodeURIComponent('Vreau informații despre Summer School Didi 2026'))
  })

  it('final CTA generates correct WhatsApp URL', () => {
    const url = waLink(WHATSAPP_MESSAGES.final)
    expect(url.startsWith('https://wa.me/40724223600?text=')).toBe(true)
    expect(url).toContain(encodeURIComponent('rezerv un loc la Summer School Didi 2026'))
  })

  it('sticky CTA generates the same URL as the final CTA', () => {
    expect(waLink(WHATSAPP_MESSAGES.sticky)).toBe(waLink(WHATSAPP_MESSAGES.final))
  })
})
