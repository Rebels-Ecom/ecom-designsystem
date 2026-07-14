import { useEffect, useRef } from 'react'
import type { KeyboardEvent, ReactNode, Ref } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { IconButton } from '../IconButton'

export type ModalBackdrop = 'dark' | 'light'

export interface ModalLabels {
  /** Accessible name for the close button. @default 'Close' */
  close: string
}

const defaultModalLabels: ModalLabels = {
  close: 'Close',
}

const backdropClasses: Record<ModalBackdrop, string> = {
  dark: 'bg-blue-500/90',
  light: 'bg-surface-overlay/80',
}

export interface ModalProps {
  /** Dialog content. */
  children: ReactNode
  /** Whether the modal is open (controlled). */
  open: boolean
  /** Called when the modal requests to close (close button, `Escape`, or a dismissable backdrop click). */
  onClose: () => void
  /**
   * Accessible name for the dialog — required, since a modal has no inherent heading and would
   * otherwise be an unnamed dialog (4.1.2). Describe its purpose (e.g. "Create shopping list").
   */
  ariaLabel: string
  /** Backdrop scrim treatment. @default 'dark' */
  backdropType?: ModalBackdrop
  /** Close when the backdrop (outside the dialog) is clicked. `Escape` closes regardless. @default false */
  dismissable?: boolean
  /**
   * Hide the built-in close button. Only safe when the content itself offers a way out; otherwise
   * `Escape` remains the sole keyboard dismissal. @default false
   */
  hideCloseButton?: boolean
  /** Overridable control names (English defaults) for localisation. */
  labels?: Partial<ModalLabels>
  /** Extra classes, merged onto the dialog panel via `cn()`. */
  className?: string
  /** Forwarded to the panel `<div role="dialog">`. */
  ref?: Ref<HTMLDivElement>
}

/**
 * Centered modal dialog (molecule) — a `role="dialog"` with `aria-modal="true"` named by `ariaLabel`.
 * On open, focus moves to the close button (or the panel when hidden) and is trapped inside (Tab
 * cycles, 2.4.3); `Escape` always closes it and focus returns to the opener (2.1.2). A backdrop click
 * closes it only when `dismissable`. The page body is scroll-locked while open. It fades in with a
 * Framer transition that collapses to an instant appearance under `prefers-reduced-motion` (2.3.3†).
 * Open/close is controlled via `open`/`onClose`; the trigger belongs to the consumer.
 */
function Modal({
  children,
  open,
  onClose,
  ariaLabel,
  backdropType = 'dark',
  dismissable = false,
  hideCloseButton = false,
  labels,
  className,
  ref,
}: ModalProps) {
  const t = { ...defaultModalLabels, ...labels }
  const reduceMotion = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const wasOpen = useRef(false)

  // Lock body scroll while open.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // Move focus into the panel on open; return it to the opener on close.
  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement as HTMLElement | null
      ;(closeRef.current ?? panelRef.current)?.focus()
    } else if (wasOpen.current) {
      previouslyFocused.current?.focus()
    }
    wasOpen.current = open
  }, [open])

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.stopPropagation()
      onClose()
      return
    }
    if (event.key !== 'Tab' || !panelRef.current) return
    const focusables = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => element.offsetParent !== null)
    if (focusables.length === 0) {
      event.preventDefault()
      return
    }
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  if (!open) return null

  return (
    <>
      {/* Backdrop is a sibling (not a parent) of the dialog: a semi-transparent ancestor would hide
          the dialog's opaque surface from contrast checks and the a11y tree. */}
      <div
        onClick={dismissable ? onClose : undefined}
        className={cn('fixed inset-0 z-modal-backdrop', backdropClasses[backdropType])}
      />
      {/* Transparent centering layer (safe ancestor — no scrim). `pointer-events-none` lets clicks fall
          through to the backdrop; the dialog re-enables them. Flex-centred so the entrance can animate a
          transform without fighting a translate-based centre. */}
      <div className="pointer-events-none fixed inset-0 z-modal flex items-center justify-center overflow-y-auto p-4">
        <motion.div
          ref={mergeRefs<HTMLDivElement>(panelRef, ref)}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          // Slide (not fade): the dialog stays fully opaque every frame, so an axe scan mid-entrance
          // never sees the dark scrim bleed through its surface (a color-contrast flake). Reduced motion
          // renders the settled position on the first frame.
          initial={reduceMotion ? false : { y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={cn(
            'pointer-events-auto relative max-h-full w-11/12 overflow-y-auto rounded-lg bg-surface-default py-4 outline-none',
            'lg:w-auto lg:min-w-208 lg:px-4 lg:py-8',
            className,
          )}
        >
          {!hideCloseButton && (
            <IconButton
              ref={closeRef}
              type="button"
              icon="icon-x"
              label={t.close}
              size="large"
              isTransparent
              noBorder
              noPadding
              onClick={onClose}
              className="absolute top-4 right-4 z-menu lg:top-7.5 lg:right-7.5"
            />
          )}
          {children}
        </motion.div>
      </div>
    </>
  )
}

export { Modal }
