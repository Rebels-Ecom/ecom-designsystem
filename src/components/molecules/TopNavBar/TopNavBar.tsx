import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'
import { Icon, type IconName } from '../../atoms/Icon'
import { ContentWrapper } from '../../atoms/ContentWrapper'
import { UiDatePicker, type UiDatePickerProps } from '../UiDatePicker'

export interface TopNavLink {
  /** Destination — a plain URL, or a phone/email number when `isTelephoneLink`/`isMailLink` is set. */
  href: string
  /** Visible label; it is the link's accessible name (2.4.4), so keep it descriptive. */
  children: ReactNode
  /** Optional leading icon (decorative — the label carries the meaning). */
  icon?: IconName
  /** Render a real `<a target="_blank">` instead of the injected `linkComponent`. @default false */
  isExternal?: boolean
  /** Prefix the href with `tel:`. @default false */
  isTelephoneLink?: boolean
  /** Prefix the href with `mailto:`. @default false */
  isMailLink?: boolean
  /** Activation handler. */
  onClick?: () => void
}

export interface TopNavBarLabels {
  /** Accessible name for the `<nav>` landmark (distinguishes it from the main nav). @default 'Utility' */
  nav: string
}

export const defaultTopNavBarLabels: TopNavBarLabels = {
  nav: 'Utility',
}

export interface TopNavBarProps {
  /** Links pinned to the leading edge. @default [] */
  leftLinks?: TopNavLink[]
  /** Links pinned to the trailing edge. @default [] */
  rightLinks?: TopNavLink[]
  /** Whether a user is signed in — gates the trailing action button (desktop). @default false */
  userLoggedIn?: boolean
  /** Admin "acting as another user" mode — switches the bar to the purple surface. @default false */
  hasActiveUser?: boolean
  /** Signed-in user's name, shown as a trailing item (desktop) or the sole centred item (mobile). */
  userName?: string
  /** Icon for the trailing action button (e.g. sign out). */
  btnIcon?: IconName
  /** Label for the trailing action button; its accessible name. */
  btnText?: string
  /** Fired when the trailing action button is activated. */
  onButtonClick?: () => void
  /** Delivery-day picker shown on the mobile bar (see {@link UiDatePicker}). */
  datePicker?: UiDatePickerProps
  /**
   * Component used to render internal links. Defaults to a semantic `<a>`; pass a client-side router
   * link (adapted to accept `href`) to keep navigation on the SPA. External links always use `<a>`.
   */
  linkComponent?: LinkComponentType
  /** Overridable UI strings (English defaults) — see {@link TopNavBarLabels}. */
  labels?: Partial<TopNavBarLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the root `<nav>`. */
  ref?: Ref<HTMLElement>
}

const linkClasses =
  'flex items-center whitespace-nowrap bg-transparent font-primary text-body-s text-top-nav-text-default no-underline hover:text-top-nav-text-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

/**
 * Utility navigation bar (molecule) — the slim top strip of contact / account links above the main
 * header, on the brand blue surface (purple when an admin is acting as another user). Composes the
 * {@link Icon} atom, the {@link UiDatePicker} molecule and the injected `linkComponent`.
 *
 * Accessibility (generated fresh, not ported): one labelled `<nav>` landmark (2.4.1 / 1.3.1) whose
 * links are real `<a href>` (or the injected router link) with the visible label as the accessible
 * name — the legacy `aria-label="Go to …"` override is dropped so the name matches the visible text
 * (2.5.3). Icons are decorative (`aria-hidden`). The mobile/desktop layouts are toggled with
 * responsive `display` utilities (not a JS media query), so the hidden branch leaves the accessibility
 * tree. On the dark surface the focus ring is white so it stays visible (2.4.7 / 1.4.11); link labels
 * clear 4.5:1 against both the blue and purple surfaces (1.4.3).
 */
function TopNavBar({
  leftLinks = [],
  rightLinks = [],
  userLoggedIn = false,
  hasActiveUser = false,
  userName,
  btnIcon,
  btnText,
  onButtonClick,
  datePicker,
  linkComponent,
  labels,
  className,
  ref,
}: TopNavBarProps) {
  const t = { ...defaultTopNavBarLabels, ...labels }
  const Link = linkComponent ?? DefaultLink

  if (leftLinks.length === 0 && rightLinks.length === 0 && !userName) return null

  const renderLink = (link: TopNavLink, index: number) => {
    const href = link.isTelephoneLink
      ? `tel:${link.href}`
      : link.isMailLink
        ? `mailto:${link.href}`
        : link.href
    const content = (
      <>
        {link.icon && <Icon icon={link.icon} className="mr-2" />}
        <span>{link.children}</span>
      </>
    )

    if (link.isExternal) {
      return (
        <a
          href={href}
          className={linkClasses}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => link.onClick?.()}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={linkClasses} onClick={link.onClick} key={index}>
        {content}
      </Link>
    )
  }

  const renderItems = (links: TopNavLink[]) =>
    links.map((link, index) => (
      <li key={`${link.href}-${index}`} className="flex items-center">
        {renderLink(link, index)}
      </li>
    ))

  // Tighter gap on the mobile bar so the utility links fit the narrow viewport without clipping;
  // the desktop bar (below) restores the roomier legacy 1rem spacing at lg.
  const listClasses = 'm-0 flex list-none items-center gap-2 p-0 lg:gap-4'

  return (
    <nav
      ref={ref}
      aria-label={t.nav}
      className={cn(
        'min-h-11 w-full',
        hasActiveUser ? 'bg-purple' : 'bg-background-top-nav',
        className,
      )}
    >
      <ContentWrapper className="py-0">
        {/* Mobile bar (below lg) */}
        <div className={cn('flex h-11 items-center lg:hidden', userName ? 'justify-center' : 'justify-between')}>
          {userName ? (
            <ul className={listClasses}>
              <li className="flex items-center font-primary text-body-s text-top-nav-text-default">
                {userName}
              </li>
            </ul>
          ) : (
            <>
              <ul className={listClasses}>{renderItems(leftLinks)}</ul>
              <ul className={listClasses}>{renderItems(rightLinks)}</ul>
            </>
          )}
          {datePicker && (
            <UiDatePicker {...datePicker} className={cn('ml-4 bg-transparent text-text-white', datePicker.className)} />
          )}
        </div>

        {/* Desktop bar (lg and up) */}
        <div className="hidden h-11 items-center justify-between lg:flex">
          <ul className={listClasses}>{renderItems(leftLinks)}</ul>
          <ul className={listClasses}>
            {renderItems(rightLinks)}
            {userLoggedIn && btnText && onButtonClick && (
              <li className="flex items-center">
                <button type="button" onClick={onButtonClick} className={cn(linkClasses, 'cursor-pointer border-0')}>
                  {btnIcon && <Icon icon={btnIcon} className="mr-2" />}
                  <span>{btnText}</span>
                </button>
              </li>
            )}
            {userName && (
              <li className="flex items-center font-primary text-body-s text-top-nav-text-default">{userName}</li>
            )}
          </ul>
        </div>
      </ContentWrapper>
    </nav>
  )
}

export { TopNavBar }
