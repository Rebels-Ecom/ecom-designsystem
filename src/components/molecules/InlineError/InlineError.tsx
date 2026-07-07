import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Icon } from '../../atoms/Icon'

export interface InlineErrorProps {
  /** The error message. Write actionable copy that says how to fix the problem (3.3.3). */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Inline validation error (molecule) — a leading error glyph plus the message. Rendered as a
 * `role="alert"` live region so assistive tech announces it the moment it appears (4.1.3); pair it
 * with the offending field via that field's `aria-describedby` + `aria-invalid` (3.3.1). The meaning
 * is carried by the text in `text-critical` (≥4.5:1 on the light surface, 1.4.3), never by colour
 * alone — the icon reinforces it and is decorative (`aria-hidden`, 1.4.1).
 */
function InlineError({ children, className, ref }: InlineErrorProps) {
  return (
    <div ref={ref} role="alert" className={cn('flex items-center gap-1 text-body', className)}>
      <Icon icon="icon-x-circle" size="medium" color="error" />
      <span className="text-text-critical">{children}</span>
    </div>
  )
}

export { InlineError }
