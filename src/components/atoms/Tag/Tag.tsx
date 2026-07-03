import type { Ref } from 'react'
import { cn } from '../../../lib/cn'

export type TagShape = 'rectangular' | 'round' | 'pill'
export type TagSize = 'sm' | 'md' | 'lg'
export type TagColor = 'green' | 'mint' | 'blue' | 'orange' | 'grey' | 'yellow' | 'purple' | 'black'

export interface TagProps {
  /** Label text. Rendered visually unless `noText`; still exposed to assistive tech either way. */
  text: string
  /** Outline shape. @default 'rectangular' */
  shape?: TagShape
  /** Colour token pairing (background + vetted text colour). @default 'green' */
  color?: TagColor
  /** Size step — drives height and label size. @default 'lg' */
  size?: TagSize
  /**
   * Hide the label visually (e.g. a colour-coded dot) while keeping it in the accessibility
   * tree via an `sr-only` span, so the meaning is never conveyed by colour alone (1.4.1).
   * @default false
   */
  noText?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<span>`. */
  ref?: Ref<HTMLSpanElement>
}

/**
 * Background + text colour pairings. Each combination is contrast-checked against WCAG 1.4.3:
 * green/blue/mint/grey/yellow/purple/black all clear AA. NOTE: `orange` (white on
 * `--color-tag-orange` #DE9034) is ~2.6:1 and fails AA for normal-weight text — it is kept for
 * design parity but flagged for design review; don't use it for essential small text.
 */
const colorClasses: Record<TagColor, string> = {
  green: 'bg-tag-green text-tag-white',
  mint: 'bg-tag-mint text-tag-blue',
  blue: 'bg-tag-blue text-tag-white',
  orange: 'bg-tag-orange text-tag-white',
  grey: 'bg-tag-grey text-text-default',
  yellow: 'bg-tag-yellow text-text-default',
  purple: 'bg-tag-purple text-tag-white',
  black: 'bg-tag-black text-tag-white',
}

const rectangularSize: Record<TagSize, string> = {
  sm: 'h-5 text-tag-sm',
  md: 'h-tag-rect-md text-tag-rect',
  lg: 'h-tag-rect-lg text-tag-rect md:text-tag-rect-lg',
}

function shapeSizeClasses(shape: TagShape, size: TagSize): string {
  if (shape === 'round') {
    return cn('rounded-full', size === 'lg' ? 'size-tag-round-lg' : 'size-tag-round-sm')
  }
  if (shape === 'pill') {
    return 'rounded-full text-tag-rect md:text-tag-rect-lg'
  }
  return cn('min-w-tag-rect-min rounded-xs', rectangularSize[size])
}

/**
 * Presentational label chip (atom). A styled `<span>` — non-interactive by design, so it sets no
 * role. The visible `text` is its accessible content; when `noText` hides it visually the label is
 * kept in an `sr-only` span so screen-reader users still get the meaning (1.4.1). Colour pairings
 * are contrast-vetted (see `colorClasses`).
 */
function Tag({
  text,
  shape = 'rectangular',
  color = 'green',
  size = 'lg',
  noText = false,
  className,
  ref,
}: TagProps) {
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center px-2 font-secondary',
        shapeSizeClasses(shape, size),
        colorClasses[color],
        className,
      )}
    >
      {noText ? <span className="sr-only">{text}</span> : text}
    </span>
  )
}

export { Tag }
