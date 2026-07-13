import type { Ref } from 'react'
import type { LinkComponentType } from '../../../lib/link'
import { ContentWrapper } from '../../atoms/ContentWrapper'
import { Icon } from '../../atoms/Icon'
import { UiLink } from '../../molecules/UiLink'

export interface BreadcrumbItem {
  /** Visible crumb text — also the link's accessible name (2.4.4). */
  label: string
  /** Destination for this crumb. The last crumb is always the current page and is never linked. */
  href?: string
}

export interface BreadcrumbsLabels {
  /** Accessible name for the breadcrumb navigation landmark. @default 'Breadcrumb' */
  nav: string
}

export interface BreadcrumbsProps {
  /** The trail, root-first. The last entry is treated as the current page. */
  breadcrumbs: BreadcrumbItem[]
  /** Injected router link component for the crumb links; defaults to a semantic `<a>`. */
  linkComponent?: LinkComponentType
  /** Overridable UI strings (English defaults) — this library ships to consumers of any locale. */
  labels?: Partial<BreadcrumbsLabels>
  /** Extra classes, merged with the component's own via `cn()`. */
  className?: string
  /** Forwarded to the underlying `<nav>`. */
  ref?: Ref<HTMLElement>
}

const defaultBreadcrumbsLabels: BreadcrumbsLabels = {
  nav: 'Breadcrumb',
}

/**
 * Breadcrumb trail (organism) implementing the WCAG/APG breadcrumb pattern: a `<nav>` landmark
 * (named via `aria-label`, default "Breadcrumb") wrapping an ordered `<ol>` (1.3.1). Every crumb but
 * the last is a link (composing the migrated {@link UiLink}); the **last crumb is the current page**,
 * rendered as plain text carrying `aria-current="page"` (4.1.2) — never a link — with no trailing
 * separator. The `>` chevrons between crumbs are decorative {@link Icon}s (`aria-hidden`). Links use
 * the accessible blue `text-text-blue` + underline (the legacy orange fails AA on the light surface —
 * a documented divergence). The legacy component's `image`/`title`/`textWidth`/`location` props drove
 * only commented-out dead code and are dropped; `linkComponent` becomes optional (defaults to `<a>`).
 */
function Breadcrumbs({ breadcrumbs, linkComponent, labels, className, ref }: BreadcrumbsProps) {
  const t = { ...defaultBreadcrumbsLabels, ...labels }

  if (!Array.isArray(breadcrumbs) || breadcrumbs.length === 0) return null

  const lastIndex = breadcrumbs.length - 1

  return (
    <nav ref={ref} aria-label={t.nav} className={className}>
      <ContentWrapper>
        <ol className="flex flex-wrap items-center gap-2 p-0 text-text-default">
          {breadcrumbs.map((crumb, index) => {
            const isCurrent = index === lastIndex
            return (
              <li key={crumb.href ?? crumb.label} className="flex items-center gap-1">
                {isCurrent || !crumb.href ? (
                  <span aria-current={isCurrent ? 'page' : undefined} className="text-body">
                    {crumb.label}
                  </span>
                ) : (
                  <UiLink href={crumb.href} linkComponent={linkComponent} onSurface="transparent">
                    {crumb.label}
                  </UiLink>
                )}
                {!isCurrent && <Icon icon="icon-chevron-right" size="small" />}
              </li>
            )
          })}
        </ol>
      </ContentWrapper>
    </nav>
  )
}

export { Breadcrumbs }
