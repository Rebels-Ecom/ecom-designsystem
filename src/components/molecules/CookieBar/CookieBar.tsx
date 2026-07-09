import type { KeyboardEvent, ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { Button } from '../Button'
import { Icon } from '../../atoms/Icon'
import { ContentWrapper } from '../../atoms/ContentWrapper'

export interface CookieBarLabels {
  /** Accessible name for the banner's landmark region. @default 'Cookie consent' */
  region: string
}

export const defaultCookieBarLabels: CookieBarLabels = {
  region: 'Cookie consent',
}

export interface CookieBarProps {
  /** Consent message. */
  text: ReactNode
  /** Accept/dismiss button label — this is the button's accessible name, so it must describe the action. */
  buttonLabel: string
  /** Optional inline element rendered right after `text`, e.g. a "read more" link. */
  linkComponent?: ReactNode
  /** Invoked when the accept button is activated, or `Escape` is pressed while focus is inside the bar. */
  onClick: () => void
  /** Overridable UI strings (English defaults) so the built-in region name can be localised. */
  labels?: Partial<CookieBarLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the banner's root `<section>`. */
  ref?: Ref<HTMLElement>
}

/**
 * Cookie-consent banner (molecule). A persistent, full-width bar pinned to the bottom of the viewport
 * with an informational icon, message (+ optional inline link) and a single accept/dismiss control.
 *
 * Accessibility: rendered as a **non-modal** `region` landmark (`<section>` + `aria-label`) so screen
 * reader users can find or skip it — a passive cookie notice must NOT trap focus or block the page the
 * way a true modal dialog does (an intentional divergence from a naive "cookie-bar = modal" reading).
 * The leading icon is decorative (`aria-hidden`); the message text carries the meaning. `Escape` while
 * focus is inside the bar dismisses it (via `onClick`). The accept button's visible `buttonLabel` is
 * its accessible name (4.1.2) and it inherits the standard focus ring. The `region` label defaults to
 * English and is overridable via `labels` for localisation; `text`/`linkComponent` are consumer
 * content and already the consumer's to localise.
 */
function CookieBar({
  text,
  buttonLabel,
  linkComponent,
  onClick,
  labels,
  className,
  ref,
}: CookieBarProps) {
  const t = { ...defaultCookieBarLabels, ...labels }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape') {
      onClick()
    }
  }

  return (
    <section
      ref={ref}
      aria-label={t.region}
      onKeyDown={handleKeyDown}
      className={cn(
        'fixed inset-x-0 bottom-0 z-menu w-full bg-surface-default shadow-lg',
        className,
      )}
    >
      <ContentWrapper>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Icon icon="icon-info" size="xlarge" className="text-text-default" />
          <p className="m-0 max-w-content-text text-center text-body-s text-text-default md:text-left">
            {text} {linkComponent}
          </p>
          <Button type="button" surface="tertiary" onClick={onClick}>
            {buttonLabel}
          </Button>
        </div>
      </ContentWrapper>
    </section>
  )
}

export { CookieBar }
