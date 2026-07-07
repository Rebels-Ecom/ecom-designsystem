import type { Ref } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../../lib/cn'
import { Icon } from '../../atoms/Icon'
import { ContentWrapper } from '../../atoms/ContentWrapper'

export interface DeliveryInfoBarProps {
  /** When false the bar renders nothing (a mount gate, preserved from legacy). @default true */
  exists?: boolean
  /** Visible message and the button's accessible name. */
  infoText: string
  /** Fired when the bar is activated (pointer or keyboard). */
  onClick: () => void
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root wrapper. */
  ref?: Ref<HTMLDivElement>
}

/**
 * An actionable delivery-notice bar (molecule): a full-width `<button>` with a truck icon and a message,
 * framed by a top hairline. It's a real button, so the visible `infoText` is its accessible name and it's
 * operable by pointer and keyboard alike, with a visible focus ring (2.4.7); the truck glyph is decorative
 * (`aria-hidden`) beside the text. Resting text meets AA; the orange hover tint is a transient pointer
 * affordance. The slide-in entrance is suppressed under `prefers-reduced-motion` (2.3.3†) and is short
 * enough to be exempt from 2.2.2. Renders nothing when `exists` is false.
 */
function DeliveryInfoBar({ exists = true, infoText, onClick, className, ref }: DeliveryInfoBarProps) {
  const reduceMotion = useReducedMotion()
  if (!exists) return null

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion ? { duration: 0 } : { delay: 0.5, type: 'spring', duration: 0.3 }}
      className={className}
    >
      <ContentWrapper padding={[0.25, 2.5]}>
        <div className="relative border-t border-border-grey">
          <motion.button
            type="button"
            onClick={onClick}
            whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            className={cn(
              'flex w-full cursor-pointer items-center justify-center gap-4 py-3 font-secondary',
              'text-text-default hover:text-text-orange',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
            )}
          >
            <Icon icon="icon-truck" className="text-2xl" />
            <span className="text-base">{infoText}</span>
          </motion.button>
        </div>
      </ContentWrapper>
    </motion.div>
  )
}

export { DeliveryInfoBar }
