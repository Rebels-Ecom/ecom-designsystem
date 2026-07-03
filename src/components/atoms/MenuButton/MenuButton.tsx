import type { ComponentProps, Ref } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../../lib/cn'

export interface MenuButtonProps {
  /** Whether the controlled navigation menu is currently open. */
  isOpen: boolean
  /** Toggle handler — fires on click and keyboard activation (up-event, 2.5.2). */
  onClick: () => void
  /** id of the navigation region this button controls (`aria-controls`). */
  controls?: string
  /** Accessible name for the icon-only control (1.1.1 / 2.5.3). @default 'Menu' */
  ariaLabel?: string
  /** id for the `<button>`, e.g. so another element can reference it. */
  id?: string
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<button>`. */
  ref?: Ref<HTMLButtonElement>
}

function Path(props: ComponentProps<typeof motion.path>) {
  return <motion.path fill="transparent" strokeWidth="3" strokeLinecap="round" {...props} />
}

/**
 * Animated hamburger ↔ close toggle for the primary navigation. A real `<button>`
 * carries the role and keyboard operation for free (2.1.1); `aria-expanded` +
 * `aria-controls` express the disclosure relationship and keep it in sync with state
 * (4.1.2). The SVG lines are decorative (stroke only) and the button is named via
 * `aria-label`. The path morph honours `prefers-reduced-motion` (2.3.3†).
 */
function MenuButton({
  isOpen,
  onClick,
  controls = 'navigation-menu',
  ariaLabel = 'Menu',
  id,
  className,
  ref,
}: MenuButtonProps) {
  const reduceMotion = useReducedMotion()
  const transition = reduceMotion ? { duration: 0 } : undefined

  return (
    <button
      ref={ref}
      id={id}
      type="button"
      aria-label={ariaLabel}
      aria-controls={controls}
      aria-expanded={isOpen}
      onClick={onClick}
      className={cn(
        // 44px touch target (2.5.5†) around the 23px glyph; 24px is the hard floor (2.5.8).
        'inline-flex size-11 cursor-pointer items-center justify-center rounded bg-transparent p-0',
        'stroke-action-primary',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
        className,
      )}
    >
      <svg width="23" height="23" viewBox="0 0 23 23" aria-hidden="true">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          transition={transition}
        />
      </svg>
    </button>
  )
}

export { MenuButton }
