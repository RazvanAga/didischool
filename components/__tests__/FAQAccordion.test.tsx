import { describe, expect, it, vi } from 'vitest'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

vi.mock('framer-motion', () => {
  const stripMotionProps = (props: Record<string, unknown>) => {
    const out: Record<string, unknown> = {}
    const skip = new Set([
      'initial',
      'animate',
      'whileInView',
      'whileHover',
      'whileTap',
      'whileFocus',
      'whileDrag',
      'transition',
      'viewport',
      'exit',
      'variants',
      'layout',
      'layoutId',
    ])
    for (const [k, v] of Object.entries(props)) {
      if (!skip.has(k)) out[k] = v
    }
    return out
  }
  const motion = new Proxy(
    {},
    {
      get: (_t, tag: string) => {
        const Comp = React.forwardRef<HTMLElement, Record<string, unknown>>(
          function MotionMock(props, ref) {
            const { children, ...rest } = props as { children?: React.ReactNode }
            return React.createElement(
              tag,
              { ref, ...stripMotionProps(rest as Record<string, unknown>) },
              children,
            )
          },
        )
        return Comp
      },
    },
  )
  return {
    motion,
    AnimatePresence: ({ children }: { children?: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children),
  }
})

import { FAQAccordion } from '../FAQAccordion'

const items = [
  { question: 'Q1', answer: 'A1' },
  { question: 'Q2', answer: 'A2' },
  { question: 'Q3', answer: 'A3' },
] as const

describe('FAQAccordion', () => {
  it('opens an item on click', () => {
    const { getByTestId, queryByTestId } = render(<FAQAccordion items={items} />)
    expect(queryByTestId('faq-panel-0')).toBeNull()
    fireEvent.click(getByTestId('faq-header-0'))
    expect(queryByTestId('faq-panel-0')).toBeTruthy()
    expect(getByTestId('faq-header-0').getAttribute('aria-expanded')).toBe('true')
  })

  it('closes previous when opening another (single-open)', () => {
    const { getByTestId, queryByTestId } = render(<FAQAccordion items={items} />)
    fireEvent.click(getByTestId('faq-header-0'))
    expect(queryByTestId('faq-panel-0')).toBeTruthy()
    fireEvent.click(getByTestId('faq-header-1'))
    expect(queryByTestId('faq-panel-0')).toBeNull()
    expect(queryByTestId('faq-panel-1')).toBeTruthy()
  })

  it('toggles closed when clicking the same header', () => {
    const { getByTestId, queryByTestId } = render(<FAQAccordion items={items} />)
    fireEvent.click(getByTestId('faq-header-2'))
    expect(queryByTestId('faq-panel-2')).toBeTruthy()
    fireEvent.click(getByTestId('faq-header-2'))
    expect(queryByTestId('faq-panel-2')).toBeNull()
  })
})
