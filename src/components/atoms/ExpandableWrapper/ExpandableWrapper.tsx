import type { ReactNode, Ref } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../lib/cn'

export interface ExpandableWrapperProps {
  /** When true the wrapper animates to its full content height. */
  open: boolean
  children: ReactNode
  className?: string
  /** Collapsed height (number → px, or any CSS length). @default 0 */
  initialHeight?: number | string
  ref?: Ref<HTMLDivElement>
}

function ExpandableWrapper({
  open,
  children,
  className,
  initialHeight = 0,
  ref,
}: ExpandableWrapperProps) {
  return (
    <motion.div
      ref={ref}
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
