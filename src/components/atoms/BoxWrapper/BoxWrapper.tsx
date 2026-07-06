import type { CSSProperties, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export type BoxPosition = 'left' | 'right' | 'center' | 'apart'
export type BoxAlign = 'left' | 'right' | 'center' | 'stretch' | 'baseline'
export type BoxSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type BoxBackground = 'light'

export interface BoxWrapperProps {
  /** Content to stack inside the box. */
  children: ReactNode
  /** Main-axis distribution of the vertical stack (`justify-content`). @default 'left' */
  position?: BoxPosition
  /** Cross-axis (horizontal) alignment (`align-items`). @default 'left' */
  align?: BoxAlign
  /** Gap between stacked children. @default 'md' */
  spacing?: BoxSpacing
  /** Prevent children from wrapping onto multiple lines. @default true */
  noWrap?: boolean
  /** Cap the width at the readable content measure (43.75rem) and centre it. @default true */
  hasMaxWidth?: boolean
  /** Draw a subtle grey card border with rounded corners. @default true */
  withBorder?: boolean
  /** Draw a stronger primary-blue border; takes precedence over `withBorder`. @default false */
  withStrongBorder?: boolean
  /** Even vertical padding on desktop so a lone button sits centred. @default false */
  onlyButton?: boolean
  /** Remove the default auto margin. @default false */
  noMargin?: boolean
  /** Optional light (white) surface fill. Omit for a transparent box. */
  backgroundColor?: BoxBackground
  /**
   * Override padding, in `rem`. A single number (all sides) or an array applied clockwise
   * (`[top, right, bottom, left]`, CSS shorthand rules). Applied inline as a runtime value, so it
   * supersedes the default responsive padding.
   */
  padding?: number[] | number
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const positionClasses: Record<BoxPosition, string> = {
  left: 'justify-start',
  right: 'justify-end',
  center: 'items-center md:justify-center',
  apart: 'justify-between',
}

const alignClasses: Record<BoxAlign, string> = {
  left: 'items-start',
  right: 'items-end',
  center: 'items-center',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
}

const spacingClasses: Record<BoxSpacing, string> = {
  xs: 'gap-wrapper-xs',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
}

function toPadding(padding: number[] | number | undefined): string | undefined {
  if (padding === undefined) return undefined
  if (typeof padding === 'number') return `${padding}rem`
  return padding.map((value) => `${value}rem`).join(' ')
}

/**
 * Boxed content container (atom). Renders a presentational `<div>` — a vertical flex stack with
 * card padding, an optional border and a readable max-width — that groups related content
 * (headings, text, controls). It carries no role or semantics (1.3.1) and preserves DOM order
 * (1.3.2), so it never disturbs the accessibility tree; any landmark or heading structure comes
 * from the children the consumer places inside it. Enum props map to Tailwind utilities; `padding`
 * is a runtime inline override.
 */
function BoxWrapper({
  children,
  position = 'left',
  align = 'left',
  spacing = 'md',
  noWrap = true,
  hasMaxWidth = true,
  withBorder = true,
  withStrongBorder = false,
  onlyButton = false,
  noMargin = false,
  backgroundColor,
  padding,
  className,
  ref,
}: BoxWrapperProps) {
  const paddingValue = toPadding(padding)
  const style: CSSProperties | undefined = paddingValue ? { padding: paddingValue } : undefined

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        'relative flex w-full flex-col p-4 lg:px-15 lg:pt-4',
        onlyButton ? 'lg:pb-4' : 'lg:pb-10',
        noMargin ? 'm-0' : 'm-auto',
        positionClasses[position],
        alignClasses[align],
        spacingClasses[spacing],
        noWrap && 'flex-nowrap',
        hasMaxWidth && 'max-w-box',
        withBorder && 'rounded border border-border-grey',
        withStrongBorder && 'rounded border border-action-primary',
        backgroundColor === 'light' && 'bg-action-x',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { BoxWrapper }
