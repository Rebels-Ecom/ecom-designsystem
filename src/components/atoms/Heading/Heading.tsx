import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export type HeadingOrder = 1 | 2 | 3 | 4 | 5
export type HeadingAlignment = 'left' | 'center' | 'right'
export type HeadingColor = 'primary' | 'error' | 'white'

export interface HeadingProps {
  /** Heading text content. */
  children: ReactNode
  /** Semantic heading level (h1–h5) and matching type-scale size. */
  order: HeadingOrder
  /**
   * When provided, the text is wrapped in a real `<button>` inside the heading tag and this
   * runs on activation (keyboard-operable, focus-ring). Omit for a plain, non-interactive heading.
   */
  onClick?: () => void
  /** @default 'left' */
  align?: HeadingAlignment
  /** Drop the level's default bottom margin (applies `m-0`). @default false */
  noMargin?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /**
   * Margin in rem — a single number (e.g. 1) or an array applied clockwise
   * (e.g. [1, 0] → top/bottom · right/left). Set as an inline style.
   */
  margin?: number[] | number
  /** Text colour token. Defaults to `text-text-default` when omitted. */
  color?: HeadingColor
  /** Forwarded to the underlying `<h1>`–`<h5>` element. */
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

/**
 * Default bottom spacing per level, on Tailwind's standard spacing scale (larger heading →
 * more space). Tailwind's preflight resets native `h1`–`h5` margins to 0, so without this a
 * heading has no default spacing. Overridden by `noMargin` (→ `m-0`) and the `margin` prop.
 */
const marginByOrder: Record<HeadingOrder, string> = {
  1: 'mb-8',
  2: 'mb-6',
  3: 'mb-5',
  4: 'mb-4',
  5: 'mb-3',
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

/**
 * Semantic heading (atom). Renders an `<h1>`–`<h5>` chosen by `order`, so the visual size and
 * the document outline level are set together — pick `order` for correct heading hierarchy, not
 * for looks alone. When `onClick` is supplied the text becomes a real `<button>` nested in the
 * heading tag, giving native keyboard activation (Enter/Space) and a visible focus ring;
 * without it the heading is non-interactive. Consumer must provide meaningful, non-empty
 * `children` as the accessible name.
 */
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
    marginByOrder[order],
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
