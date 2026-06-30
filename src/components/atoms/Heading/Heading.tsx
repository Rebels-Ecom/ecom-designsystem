import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export type HeadingOrder = 1 | 2 | 3 | 4 | 5
export type HeadingAlignment = 'left' | 'center' | 'right'
export type HeadingColor = 'primary' | 'error' | 'white'

export interface HeadingProps {
  children: ReactNode
  /** Semantic heading level (h1–h5) and matching type-scale size. */
  order: HeadingOrder
  onClick?: () => void
  /** @default 'left' */
  align?: HeadingAlignment
  noMargin?: boolean
  className?: string
  /**
   * Margin in rem — a single number (e.g. 1) or an array applied clockwise
   * (e.g. [1, 0] → top/bottom · right/left). Set as an inline style.
   */
  margin?: number[] | number
  color?: HeadingColor
  ref?: Ref<HTMLHeadingElement>
}

const tagByOrder = { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5' } as const

const sizeByOrder: Record<HeadingOrder, string> = {
  1: 'text-h-xl md:text-h-xl-lg',
  2: 'text-h-l md:text-h-l-lg',
  3: 'text-h-m md:text-h-m-lg',
  4: 'text-h-s',
  5: 'text-h-xs',
}

const alignmentClasses: Record<HeadingAlignment, string> = {
  left: 'justify-start text-left',
  center: 'justify-center text-center',
  right: 'justify-end text-right',
}

const colorClasses: Record<HeadingColor, string> = {
  primary: 'text-action-primary',
  error: 'text-text-critical',
  white: 'text-text-white',
}

function toMargin(margin: number[] | number | undefined): string | undefined {
  if (margin === undefined) return undefined
  if (typeof margin === 'number') return `${margin}rem`
  return margin.map((value) => `${value}rem`).join(' ')
}

function Heading({
  children,
  order = 3,
  onClick,
  align = 'left',
  noMargin,
  className,
  margin,
  color,
  ref,
}: HeadingProps) {
  const Tag = tagByOrder[order]
  const classes = cn(
    'flex font-primary font-bold text-text-default',
    sizeByOrder[order],
    alignmentClasses[align],
    noMargin && 'm-0',
    color && colorClasses[color],
    className,
  )
  const style = { margin: toMargin(margin) }

  if (onClick) {
    return (
      <Tag ref={ref} className={classes} style={style}>
        <button
          type="button"
          onClick={onClick}
          className="cursor-pointer border-none bg-transparent p-0 text-inherit hover:text-interactive-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          {children}
        </button>
      </Tag>
    )
  }

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  )
}

export { Heading }
