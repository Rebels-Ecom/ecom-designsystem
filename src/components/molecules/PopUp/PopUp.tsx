import type { ReactNode, Ref } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../../lib/cn'

export type PopUpContentPosition = 'left' | 'right' | 'center'

export interface PopUpProps {
  /** Whether the panel is shown. Toggling it animates the panel in/out. */
  open: boolean
  /** Panel contents. */
  children: ReactNode
  /** Horizontal alignment of the content within the panel. @default 'center' */
  contentPosition?: PopUpContentPosition
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the panel's root element. */
  ref?: Ref<HTMLDivElement>
}

const positionClasses: Record<PopUpContentPosition, string> = {
  left: 'justify-start',
  right: 'justify-end',
  center: 'justify-center',
}

/**
 * A low-level animated bottom panel (molecule): a fixed, full-width surface that slides up from the
 * bottom of the viewport when `open`. Presentational by design — it mounts its children in DOM order
 * (so they stay keyboard-reachable) and stops click propagation so a backdrop tap doesn't fall through,
 * but it does NOT impose dialog semantics. A consumer using it as a modal should supply the dialog role,
 * labelling, and focus management (or use the dedicated Modal molecule). The slide animation is
 * suppressed under `prefers-reduced-motion` (2.3.3†).
 */
function PopUp({ open, children, contentPosition = 'center', className, ref }: PopUpProps) {
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          onClick={(event) => event.stopPropagation()}
          style={{ zIndex: 995 }}
          className={cn(
            'fixed inset-x-0 bottom-0 mx-auto flex w-full overflow-y-auto bg-border-grey px-2 py-6',
            positionClasses[contentPosition],
            className,
          )}
          initial={reduceMotion ? false : { y: '35%', opacity: 0 }}
          animate={reduceMotion ? { opacity: 1 } : { y: '0%', opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: '20%', opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
        >
          <div>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { PopUp }
