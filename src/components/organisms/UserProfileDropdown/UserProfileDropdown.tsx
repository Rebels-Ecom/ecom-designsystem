import { useId, useState } from 'react'
import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Button } from '../../molecules/Button'
import { DrawerSidebar } from '../../molecules/DrawerSidebar'
import { IconButton } from '../../molecules/IconButton'

/**
 * A single entry in the account menu. Provide `href` for a navigational link or `onSelect` for an
 * action; both may be set (the handler runs, then the browser follows the link). `label` is
 * consumer-supplied copy (already localised by the consumer), so it is not part of `labels`.
 */
export interface UserProfileMenuItem {
  /** Stable React key for the row. */
  id: string
  /** Visible, consumer-supplied label — becomes the item's accessible name. */
  label: string
  /** Destination URL; when set the item renders as an anchor. Omit for a pure action item. */
  href?: string
  /** Invoked when the item is activated. The drawer closes afterwards. */
  onSelect?: () => void
}

/**
 * Overridable UI strings the component renders itself (English defaults) — this library ships to
 * consumers of any locale. Consumer-supplied content (`children`, item `label`s) is exempt.
 */
export interface UserProfileDropdownLabels {
  /** Accessible name for the icon-only trigger button. @default 'Account menu' */
  trigger: string
  /** Accessible name for the drawer's close button (forwarded to {@link DrawerSidebar}). @default 'Close' */
  close: string
  /** Accessible name for the drawer dialog itself (it has no visible heading). @default 'Account menu' */
  dialog: string
  /** Visible label for the built-in sign-out button (only rendered when `onSignOut` is set). @default 'Sign out' */
  signOut: string
  /** Greeting shown above the menu when `userName` is set. Interpolated → a function. @default name => `Hi, ${name}` */
  greeting: (name: string) => string
}

const defaultUserProfileDropdownLabels: UserProfileDropdownLabels = {
  trigger: 'Account menu',
  close: 'Close',
  dialog: 'Account menu',
  signOut: 'Sign out',
  greeting: (name) => `Hi, ${name}`,
}

export interface UserProfileDropdownProps {
  /** Menu entries rendered in the drawer (links and/or actions). */
  items: UserProfileMenuItem[]
  /** When set, a greeting (`labels.greeting`) is shown at the top of the drawer. */
  userName?: string
  /** Extra content rendered above the menu list (e.g. a user-info summary block). */
  children?: ReactNode
  /** When provided, a built-in sign-out {@link Button} is rendered below the menu and calls this. */
  onSignOut?: () => void
  /** Controlled open state. Omit to run uncontrolled (see `defaultOpen`). */
  open?: boolean
  /** Initial open state when uncontrolled. @default false */
  defaultOpen?: boolean
  /** Notified whenever the drawer requests to open or close (fires in both controlled and uncontrolled modes). */
  onOpenChange?: (open: boolean) => void
  /** Overridable UI strings (English defaults). */
  labels?: Partial<UserProfileDropdownLabels>
  /** Extra classes, merged onto the root wrapper via `cn()`. */
  className?: string
  /** Forwarded to the root wrapper `<div>`. */
  ref?: Ref<HTMLDivElement>
}

// Shared link/action row styling so anchor and button items are visually identical: accessible blue
// (legacy navy links keep colour-only meaning; blue + underline adds the non-colour cue, 1.4.1) and a
// 48px row that clears the 44px target (2.5.5†).
const itemClasses = cn(
  'flex min-h-12 w-fit items-center font-primary text-body uppercase text-text-blue underline',
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary',
)

/**
 * Account menu (organism). An icon-only disclosure trigger that opens a {@link DrawerSidebar} holding
 * the signed-in user's details, a list of account links/actions, and an optional sign-out button.
 *
 * Accessibility contract: the trigger is an {@link IconButton} exposing `aria-haspopup="dialog"`,
 * `aria-expanded`, and `aria-controls` pointing at the drawer content (4.1.2). Opening the drawer
 * moves focus to its close button and traps it inside; `Escape` or an outside pointer press closes it
 * and focus returns to the trigger (2.1.2 / 2.4.3) — all handled by {@link DrawerSidebar}, not
 * duplicated here. The dialog is named by `labels.dialog` since it has no visible heading. The
 * consumer supplies each item's `label` (its accessible name) and any summary `children`.
 *
 * Open state is controllable: pass `open` + `onOpenChange` to control it, or use `defaultOpen` for
 * the uncontrolled default.
 */
function UserProfileDropdown({
  items,
  userName,
  children,
  onSignOut,
  open,
  defaultOpen = false,
  onOpenChange,
  labels,
  className,
  ref,
}: UserProfileDropdownProps) {
  const t = { ...defaultUserProfileDropdownLabels, ...labels }
  const contentId = useId()
  const isControlled = open !== undefined
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const isOpen = open ?? uncontrolledOpen

  const setOpen = (next: boolean) => {
    if (!isControlled) setUncontrolledOpen(next)
    onOpenChange?.(next)
  }

  const handleSelect = (item: UserProfileMenuItem) => {
    item.onSelect?.()
    setOpen(false)
  }

  return (
    <div ref={ref} className={cn('relative w-full lg:w-fit', className)}>
      <IconButton
        type="button"
        icon="icon-user"
        label={t.trigger}
        size="medium"
        surface="white"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setOpen(!isOpen)}
      />

      <DrawerSidebar
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        ariaLabel={t.dialog}
        labels={{ close: t.close }}
      >
        <div id={contentId} className="flex flex-col gap-6">
          {userName && <span className="font-primary font-bold text-text-default">{t.greeting(userName)}</span>}
          {children}
          {items.length > 0 && (
            <ul className="flex flex-col">
              {items.map((item) =>
                item.href ? (
                  <li key={item.id}>
                    <a href={item.href} onClick={() => item.onSelect?.()} className={itemClasses}>
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.id}>
                    <button type="button" onClick={() => handleSelect(item)} className={itemClasses}>
                      {item.label}
                    </button>
                  </li>
                ),
              )}
            </ul>
          )}
          {onSignOut && (
            <Button
              type="button"
              surface="secondary"
              fullWidth
              onClick={() => {
                onSignOut()
                setOpen(false)
              }}
            >
              {t.signOut}
            </Button>
          )}
        </div>
      </DrawerSidebar>
    </div>
  )
}

export { UserProfileDropdown }
