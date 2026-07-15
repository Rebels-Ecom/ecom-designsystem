import type { ReactNode, Ref } from 'react'
import { cn } from '../../../lib/cn'
import { DefaultLink, type LinkComponentType } from '../../../lib/link'
import { ContentWrapper } from '../../atoms/ContentWrapper'
import { Heading } from '../../atoms/Heading'
import { Logotype } from '../../molecules/Logotype'
import { Newsletter } from '../../molecules/Newsletter'
import { FooterTopBar, type FooterTopBarLink } from '../../molecules/FooterTopBar'
import type { LinkButtonTarget } from '../../molecules/LinkButton'

export interface FooterLink {
  /** Visible label — also the link's accessible name. */
  label: string
  /** Destination URL. */
  href: string
  /** External link — renders a plain `<a>` with `rel="noopener noreferrer"` instead of `linkComponent`. */
  isExternal?: boolean
  /** Anchor target. */
  target?: LinkButtonTarget
}

export interface FooterLinkGroup {
  /** Heading for the column of links. */
  title: string
  /** Links in this group. */
  links: FooterLink[]
}

export interface FooterLabels {
  /** Accessible name for the footer links `<nav>` landmark. @default 'Footer' */
  linksNav: string
  /** Accessible name for the logo home link. @default 'Spendrups home' */
  home: string
}

export const defaultFooterLabels: FooterLabels = {
  linksNav: 'Footer',
  home: 'Spendrups home',
}

export interface FooterProps {
  /** Quick-access links shown in the dark top bar (login / register / contact, or plain links). */
  footerTopBarLinks: FooterTopBarLink[]
  /** Columns of navigation links shown in the footer body. */
  linkGroups: FooterLinkGroup[]
  /** Small label preceding the address (e.g. "Visiting address:"). */
  addressLabel: string
  /** The postal/visiting address. */
  address: string
  /** Copyright / legal line shown in the bottom bar. */
  bottomBarText: string
  /** Social-media links (e.g. `SocialMediaLink` atoms) rendered under the address. */
  children?: ReactNode
  /** Show the newsletter sign-up in the left column. @default false */
  showNewsletter?: boolean
  /** Id for the newsletter email `<input>` (required when `showNewsletter`). */
  newsletterId?: string
  /** Placeholder hint for the newsletter field. */
  newsletterPlaceholder?: string
  /** Called with the email once the newsletter form validates. */
  onNewsletterSubmit?: (email: string) => void
  /** Destination for the logo home link. @default '/' */
  logoHref?: string
  /** Router link component for internal links (top bar + footer links). Falls back to a semantic `<a>`. */
  linkComponent?: LinkComponentType
  /** Overridable UI strings (English defaults) — see {@link FooterLabels}. */
  labels?: Partial<FooterLabels>
  /** Extra classes, merged onto the root `<footer>` via `cn()`. */
  className?: string
  /** Forwarded to the root `<footer>`. */
  ref?: Ref<HTMLElement>
}

const linkClasses =
  'text-body text-text-default no-underline hover:text-action-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary'

function FooterLinkItem({ link, linkComponent: Link }: { link: FooterLink; linkComponent: LinkComponentType }) {
  if (link.isExternal) {
    return (
      <a href={link.href} target={link.target ?? '_blank'} rel="noopener noreferrer" className={linkClasses}>
        {link.label}
      </a>
    )
  }
  return (
    <Link href={link.href} target={link.target} className={linkClasses}>
      {link.label}
    </Link>
  )
}

/**
 * Site footer (organism) — the dark quick-links {@link FooterTopBar}, a body with the brand
 * {@link Logotype}, optional {@link Newsletter} sign-up, visiting address and social links, columns of
 * navigation links, and a bottom copyright bar. All three regions live inside one `<footer>` so every
 * part sits in the `contentinfo` landmark.
 *
 * Accessibility: the root is the `<footer>` (contentinfo) landmark; the link columns form a labelled
 * `<nav>` (2.4.1) of `<ul>`/`<li>` lists, each under a real heading so AT can jump between them (1.3.1);
 * the address uses a semantic `<address>`. Every link is a real focusable `<a>` (or the injected
 * `linkComponent`) with the standard `focus-visible` ring (2.4.7) and a non-colour-only hover
 * (underline). Text sits on the light footer surface at ≥4.5:1 (1.4.3). The logo links home with an
 * overridable accessible name. Replaces the legacy `logo`-object slot (which rendered a raw object and
 * crashed) with the self-contained `Logotype`.
 */
function Footer({
  footerTopBarLinks,
  linkGroups,
  addressLabel,
  address,
  bottomBarText,
  children,
  showNewsletter = false,
  newsletterId = 'footer-newsletter',
  newsletterPlaceholder,
  onNewsletterSubmit,
  logoHref = '/',
  linkComponent,
  labels,
  className,
  ref,
}: FooterProps) {
  const t = { ...defaultFooterLabels, ...labels }
  const Link = linkComponent ?? DefaultLink
  const groups = linkGroups.filter((group) => Array.isArray(group.links) && group.links.length > 0)

  return (
    <footer ref={ref} className={cn('w-full', className)}>
      <FooterTopBar links={footerTopBarLinks} linkComponent={linkComponent} />

      <div className="w-full bg-background-footer text-text-default">
        <ContentWrapper>
          <div className="flex flex-col gap-8 py-8 lg:flex-row lg:gap-12 lg:py-16">
            <div className="w-full lg:w-1/3">
              <a
                href={logoHref}
                aria-label={t.home}
                className="inline-block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-action-primary"
              >
                <Logotype variant="horizontal" className="h-8 w-auto md:h-10" />
              </a>

              {showNewsletter && (
                <Newsletter
                  id={newsletterId}
                  placeholder={newsletterPlaceholder}
                  onSubmit={onNewsletterSubmit ?? (() => {})}
                  className="mt-8"
                />
              )}

              <address className="mt-5 text-body text-text-default not-italic">
                <p className="m-0">{addressLabel}</p>
                <p className="m-0">{address}</p>
              </address>

              {children && <div className="mt-5 flex gap-2">{children}</div>}
            </div>

            {groups.length > 0 && (
              <nav aria-label={t.linksNav} className="w-full lg:w-2/3">
                <ul className="m-0 flex list-none flex-col gap-8 p-0 sm:flex-row sm:flex-wrap lg:justify-end lg:gap-12">
                  {groups.map((group, groupIndex) => (
                    <li key={`${group.title}-${groupIndex}`}>
                      <Heading order={2} noMargin className="mb-4 text-h-xs md:text-h-xs">
                        {group.title}
                      </Heading>
                      <ul
                        className={cn(
                          'm-0 flex list-none flex-col gap-3 p-0',
                          group.links.length >= 5 && 'sm:grid sm:grid-flow-col sm:grid-rows-5 sm:gap-x-8',
                        )}
                      >
                        {group.links.map((link, linkIndex) => (
                          <li key={`${link.href}-${linkIndex}`}>
                            <FooterLinkItem link={link} linkComponent={Link} />
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </ContentWrapper>
      </div>

      <div className="flex min-h-13 w-full items-center justify-center bg-background-top-nav px-4 py-3 text-center text-body-s text-text-white md:text-body">
        {bottomBarText}
      </div>
    </footer>
  )
}

export { Footer }
