import { describe, expect, it } from 'vitest'
import {
  WHATSAPP_MESSAGES,
  WHATSAPP_NUMBER,
  waLink,
  STICKY_CTA_THRESHOLD_PX,
} from '../constants'

describe('waLink', () => {
  it('returns wa.me url with correct number and url-encoded message', () => {
    expect(waLink('test')).toBe('https://wa.me/40724223600?text=test')
  })

  it('url-encodes Romanian diacritics correctly', () => {
    const url = waLink('ă ș ț î â')
    expect(url).toContain('%C4%83') // ă
    expect(url).toContain('%C8%99') // ș
    expect(url).toContain('%C8%9B') // ț
    expect(url).toContain('%C3%AE') // î
    expect(url).toContain('%C3%A2') // â
  })

  it('uses constant whatsapp number', () => {
    expect(WHATSAPP_NUMBER).toBe('40724223600')
    expect(waLink('x').startsWith(`https://wa.me/${WHATSAPP_NUMBER}`)).toBe(true)
  })

  it('produces the hero CTA URL with the configured message', () => {
    const url = waLink(WHATSAPP_MESSAGES.hero)
    expect(url).toBe(
      `https://wa.me/40724223600?text=${encodeURIComponent('Bună! Vreau informații despre Summer School Didi 2026.')}`,
    )
  })

  it('produces the sticky/final CTA URL with the configured message', () => {
    const expectedMsg = 'Bună! Aș vrea să rezerv un loc la Summer School Didi 2026.'
    expect(WHATSAPP_MESSAGES.final).toBe(expectedMsg)
    expect(WHATSAPP_MESSAGES.sticky).toBe(expectedMsg)
    const url = waLink(WHATSAPP_MESSAGES.sticky)
    expect(url).toBe(`https://wa.me/40724223600?text=${encodeURIComponent(expectedMsg)}`)
  })
})

describe('sticky cta threshold', () => {
  it('is set to 200 px per PRD', () => {
    expect(STICKY_CTA_THRESHOLD_PX).toBe(200)
  })
})
