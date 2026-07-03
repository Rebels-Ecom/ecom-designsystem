import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'

export interface InlineHelperProps {
  /** The helper/instruction text to display. */
  children: ReactNode
  /**
   * id so a field can reference this hint via `aria-describedby`, letting screen
   * readers read the instruction together with the field (3.3.2 / 1.3.1).
   */
  id?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<span>`. */
  ref?: Ref<HTMLSpanElement>
}

/**
 * Subdued inline helper/instruction text shown next to a form field. Rendered as plain
 * text (no live region — it's static guidance, not a status message); `text-subdued`
 * on the light surface clears the 4.5:1 minimum (1.4.3).
 */
function InlineHelper({ children, id, className, ref }: InlineHelperProps) {
  return (
    <span ref={ref} id={id} className={cn('text-body text-text-subdued', className)}>
      {children}
    </span>
  )
}

export { InlineHelper }
