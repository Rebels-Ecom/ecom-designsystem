import type { ReactNode, Ref } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/cn'

export interface ExpandableWrapperProps {
  /** When true the wrapper animates to its full content height. */
  open: boolean
  /** Content that is revealed or collapsed. */
  children: ReactNode
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Collapsed height (number → px, or any CSS length). @default 0 */
  initialHeight?: number | string
  /** Element id — so a disclosure trigger can point `aria-controls` at the revealed region (4.1.2). */
  id?: string
  /** Forwarded to the underlying `<div>`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Height-animating show/hide container (atom). Renders a `<div>` that animates between
 * `initialHeight` and its natural content height as `open` toggles. Collapsed content is kept in
 * the DOM but removed from assistive tech and the tab order via `aria-hidden` and `inert`, so no
 * hidden focusable descendants are reachable. This is presentational only: it exposes no
 * button/`aria-expanded` state, so the consumer owns the trigger that controls `open` and the
 * association between them.
 */
function ExpandableWrapper({
  open,
  children,
  className,
  initialHeight = 0,
  id,
  ref,
}: ExpandableWrapperProps) {
  return (
    <motion.div
      ref={ref}
      id={id}
      // Collapsed content is removed from the a11y tree and tab order.
      aria-hidden={open ? undefined : true}
      inert={!open}
      className={cn('w-full overflow-hidden', className)}
      initial={false}
      animate={{ height: open ? 'auto' : initialHeight }}
    >
      {children}
    </motion.div>
  )
}

export { ExpandableWrapper }
