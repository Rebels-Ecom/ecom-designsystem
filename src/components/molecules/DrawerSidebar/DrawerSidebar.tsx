import { useEffect, useRef } from 'react'
import type { KeyboardEvent, ReactNode, Ref } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../../lib/cn'
import { mergeRefs } from '../../../lib/mergeRefs'
import { IconButton } from '../IconButton'

export type DrawerSidebarFrom = 'left' | 'right'
export type DrawerSidebarWidth = 'md' | 'lg'

export interface DrawerSidebarLabels {
  /** Accessible name for the close button. @default 'Close' */
  close: string
}

const defaultDrawerSidebarLabels: DrawerSidebarLabels = {
  close: 'Close',
}

export interface DrawerSidebarProps {
  /** Panel content. */
  children: ReactNode
  /** Whether the drawer is open (controlled). */
  isOpen: boolean
  /** Called when the drawer requests to close (close button, `Escape`, backdrop, or outside click). */
  onClose: () => void
  /**
   * Accessible name for the dialog — required, since a drawer has no inherent heading and would
   * otherwise be an unnamed dialog (4.1.2). Prefer describing its purpose (e.g. "Shopping cart").
   */
  ariaLabel: string
  /** Edge the drawer slides in from. @default 'right' */
  from?: DrawerSidebarFrom
  /** Panel width preset at `lg` and up (`md` = 25rem, `lg` = 40rem). @default 'lg' */
  width?: DrawerSidebarWidth
  /** Hide the dimming backdrop (makes the drawer non-modal). @default false */
  hideOverlay?: boolean
  /** Allow the page body to scroll while the drawer is open. @default false */
  enableBackgroundScroll?: boolean
  /** Never close on a backdrop / outside-of-panel click (only the button + `Escape` close). @default false */
  disableCloseOnOutsideClick?: boolean
  /** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
  labels?: Partial<DrawerSidebarLabels>
  /** Extra classes, merged onto the panel via `cn()`. */
  className?: string
  /** Forwarded to the panel `<div role="dialog">`. */
  ref?: Ref<HTMLDivElement>
}

const widthClasses: Record<DrawerSidebarWidth, string> = {
  md: 'lg:max-w-100',
  lg: 'lg:max-w-160',
}

/**
 * Slide-in drawer dialog (molecule) — the canonical modal overlay for this library. It is a
 * `role="dialog"` (`aria-modal` while the backdrop is shown) named by `ariaLabel`; on open, focus
 * moves to the close {@link IconButton} and is trapped inside the panel (Tab cycles, 2.4.3), `Escape`
 * closes it, and focus returns to whatever was focused before it opened (2.1.2). A backdrop click — or,
 * when `hideOverlay` makes it non-modal, an outside pointer press — also closes it unless
 * `disableCloseOnOutsideClick` is set. The page body is scroll-locked while open unless
 * `enableBackgroundScroll`. It slides from `from` (left/right) with a Framer transition that collapses
 * to an instant appearance under `prefers-reduced-motion` (2.3.3†). Open/close is controlled via
 * `isOpen`/`onClose`; the trigger belongs to the consumer.
 */
function DrawerSidebar({
  children,
  isOpen,
  onClose,
  ariaLabel,
  from = 'right',
  width = 'lg',
  hideOverlay = false,
  enableBackgroundScroll = false,
  disableCloseOnOutsideClick = false,
  labels,
  className,
  ref,
}: DrawerSidebarProps) {
  const t = { ...defaultDrawerSidebarLabels, ...labels }
  const reduceMotion = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const wasOpen = useRef(false)

  // Lock body scroll while open.
  useEffect(() => {
    if (!isOpen || enableBackgroundScroll) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [isOpen, enableBackgroundScroll])

  // Move focus into the panel on open; return it to the opener on close.
  useEffect(() => {
    if (isOpen) {
      previouslyFocused.current = document.activeElement as HTMLElement | null
      closeRef.current?.focus()
    } else if (wasOpen.current) {
      previouslyFocused.current?.focus()
    }
    wasOpen.current = isOpen
  }, [isOpen])

  // When there is no backdrop to catch the click, close on an outside pointer press instead.
  useEffect(() => {
    if (!isOpen || !hideOverlay || disableCloseOnOutsideClick) return
    const handlePointerDown = (event: PointerEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [isOpen, hideOverlay, disableCloseOnOutsideClick, onClose])

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
    if (focusables.length === 0) return
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

  if (!isOpen) return null

  return (
    <>
      {!hideOverlay && (
        <div
          aria-hidden
          onClick={disableCloseOnOutsideClick ? undefined : onClose}
          className="fixed inset-0 z-drawer-backdrop bg-blue-500/90 backdrop-blur-md"
        />
      )}
      <motion.div
        ref={mergeRefs<HTMLDivElement>(panelRef, ref)}
        role="dialog"
        aria-modal={!hideOverlay || undefined}
        aria-label={ariaLabel}
        onKeyDown={handleKeyDown}
        initial={reduceMotion ? false : { x: from === 'left' ? '-100%' : '100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'tween' }}
        className={cn(
          'fixed top-0 bottom-0 z-drawer flex h-screen w-11/12 flex-col overflow-auto border border-blue-500/30 bg-surface-default',
          from === 'left' ? 'left-0' : 'right-0',
          'lg:w-full',
          widthClasses[width],
          className,
        )}
      >
        <div className="flex justify-end px-4 pt-6">
          <IconButton
            ref={closeRef}
            type="button"
            icon="icon-x"
            label={t.close}
            size="large"
            onClick={onClose}
            isTransparent
            noBorder
          />
        </div>
        <div className="flex flex-1 flex-col overflow-auto px-4 pb-6 lg:px-10">{children}</div>
      </motion.div>
    </>
  )
}

export { DrawerSidebar }
