import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export type GroupDirection = 'default' | 'row' | 'column'
export type GroupPosition = 'left' | 'right' | 'center' | 'apart'
export type GroupSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type GroupAlign = 'left' | 'right' | 'center' | 'baseline'

export interface GroupWrapperProps {
  /** Items to group. */
  children: ReactNode
  /**
   * Flex direction. `'default'` stacks as a column on mobile and switches to a row at `lg`.
   * @default 'default'
   */
  direction?: GroupDirection
  /** Main-axis distribution (`justify-content`). @default 'left' */
  position?: GroupPosition
  /** Cross-axis alignment (`align-items`). @default 'left' */
  align?: GroupAlign
  /** Gap between children. @default 'md' */
  spacing?: GroupSpacing
  /** Prevent children from wrapping onto multiple lines. @default true */
  noWrap?: boolean
  /**
   * Stay full-width at every breakpoint; otherwise the group shrinks to its content width at `lg`.
   * @default true
   */
  fullWidth?: boolean
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

const directionClasses: Record<GroupDirection, string> = {
  default: 'flex-col lg:flex-row',
  row: 'flex-row',
  column: 'flex-col',
}

const positionClasses: Record<GroupPosition, string> = {
  left: 'justify-start',
  right: 'justify-end',
  center: 'justify-center',
  apart: 'justify-between',
}

const alignClasses: Record<GroupAlign, string> = {
  left: 'items-start',
  right: 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
}

const spacingClasses: Record<GroupSpacing, string> = {
  xs: 'gap-wrapper-xs',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
}

/**
 * Flex group layout primitive (atom). Renders a presentational `<div>` that clusters its children
 * in a row or column with consistent spacing and alignment. It carries no role or semantics
 * (1.3.1) and preserves DOM order (1.3.2), so it never disturbs the accessibility tree of its
 * content. Enum props map to Tailwind utilities; the default direction stacks as a column on
 * mobile and becomes a row at `lg`.
 */
function GroupWrapper({
  children,
  direction = 'default',
  position = 'left',
  align = 'left',
  spacing = 'md',
  noWrap = true,
  fullWidth = true,
  className,
  ref,
}: GroupWrapperProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex w-full',
        fullWidth ? '' : 'lg:w-auto',
        directionClasses[direction],
        positionClasses[position],
        alignClasses[align],
        spacingClasses[spacing],
        noWrap && 'flex-nowrap',
        className,
      )}
    >
      {children}
    </div>
  )
}

export { GroupWrapper }
