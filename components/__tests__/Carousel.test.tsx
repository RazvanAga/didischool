import { describe, expect, it } from 'vitest'
import React, { act } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

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

import { Carousel } from '../Carousel'

const items = ['a', 'b', 'c'] as const

function setup() {
  const utils = render(
    <Carousel
      items={items}
      keyExtractor={(item) => item}
      renderItem={(item) => <div data-testid={`card-${item}`}>{item}</div>}
    />,
  )
  const track = utils.container.querySelector('[data-carousel-track]') as HTMLDivElement
  const cards = track.querySelectorAll<HTMLElement>('[data-carousel-card]')
  cards.forEach((card, i) => {
    Object.defineProperty(card, 'offsetLeft', { configurable: true, value: i * 300 })
    Object.defineProperty(card, 'offsetWidth', { configurable: true, value: 280 })
  })
  Object.defineProperty(track, 'clientWidth', { configurable: true, value: 300 })
  Object.defineProperty(track, 'scrollLeft', {
    configurable: true,
    writable: true,
    value: 0,
  })
  return { ...utils, track }
}

describe('Carousel', () => {
  it('renders all items', () => {
    const { getByTestId } = setup()
    expect(getByTestId('card-a')).toBeTruthy()
    expect(getByTestId('card-b')).toBeTruthy()
    expect(getByTestId('card-c')).toBeTruthy()
  })

  it('progress bar reflects position when scrolled to second card', () => {
    const { track, container } = setup()
    act(() => {
      ;(track as HTMLDivElement).scrollLeft = 300
      fireEvent.scroll(track)
    })
    const progress = container.querySelector('[role="progressbar"]') as HTMLElement
    expect(progress.getAttribute('aria-valuenow')).toBe('1')
  })

  it('clamps to last card and exposes correct max', () => {
    const { track, container } = setup()
    act(() => {
      ;(track as HTMLDivElement).scrollLeft = 600
      fireEvent.scroll(track)
    })
    const progress = container.querySelector('[role="progressbar"]') as HTMLElement
    expect(progress.getAttribute('aria-valuenow')).toBe('2')
    expect(progress.getAttribute('aria-valuemax')).toBe('2')
  })
})
