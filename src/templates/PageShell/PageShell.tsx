import type { ReactNode, Ref } from 'react'
import { cn } from '../../lib/cn'
import { ContentWrapper } from '../../components/atoms/ContentWrapper'

export interface PageShellProps {
  /** The global header (e.g. {@link AppHeader}) — renders the `<header>` banner landmark. */
  header: ReactNode
  /** The page's main content — becomes the single `<main>` landmark's contents. */
  children: ReactNode
  /** The global footer (e.g. {@link AppFooter}) — renders the `<footer>` contentinfo landmark. */
  footer: ReactNode
  /** Optional breadcrumb trail rendered at the top of `<main>`. */
  breadcrumbs?: ReactNode
  /** Constrain the main content to the standard page gutter/width. @default true */
  constrainMain?: boolean
  /** Accessible label for the skip-to-content link. @default 'Hoppa till innehåll' */
  skipLinkLabel?: string
  /** Extra classes merged onto the outer wrapper. */
  className?: string
  /** Forwarded to the outer wrapper. */
  ref?: Ref<HTMLDivElement>
}

/**
 * **PageShell** template (Storybook-only) — the layout frame every page template composes: a
 * skip-to-content link, the global header, a single `<main>` landmark (with optional breadcrumbs), and
 * the global footer, stacked full-height. It is purely presentational — it slots the chrome and content,
 * owning no state — mirroring the app's `DefaultLayout` / `MainLayout` / `CheckoutLayout` shells.
 *
 * Accessibility: it guarantees the page's landmark skeleton — exactly one `<main id="main-content">`
 * (focusable via the skip link, 2.4.1) between the banner and contentinfo the header/footer supply. Page
 * templates render their content into `children` rather than re-declaring these landmarks, so the
 * landmark map stays clean at composition scale.
 */
function PageShell({
  header,
  children,
  footer,
  breadcrumbs,
  constrainMain = true,
  skipLinkLabel = 'Hoppa till innehåll',
  className,
  ref,
}: PageShellProps) {
  const main = (
    <>
      {breadcrumbs}
      {children}
    </>
  )

  return (
    <div ref={ref} className={cn('flex min-h-screen flex-col bg-background', className)}>
      <a
        href="#main-content"
        className="sr-only rounded bg-action-primary px-4 py-2 text-text-on-primary focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-modal"
      >
        {skipLinkLabel}
      </a>
      {header}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {constrainMain ? <ContentWrapper>{main}</ContentWrapper> : main}
      </main>
      {footer}
    </div>
  )
}

export { PageShell }
