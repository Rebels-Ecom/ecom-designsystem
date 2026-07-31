import type { Ref } from 'react'
import { DefaultLink, type LinkComponentType } from '../../lib/link'
import { Footer, type FooterLinkGroup } from '../../components/organisms/Footer'
import type { FooterTopBarLink } from '../../components/molecules/FooterTopBar'
import { SocialMediaLinks, type SocialMediaLinksProps } from '../../components/molecules/SocialMediaLinks'

export interface AppFooterProps {
  /** Quick-links bar across the top of the footer. */
  footerTopBarLinks: FooterTopBarLink[]
  /** The footer's link columns. */
  linkGroups: FooterLinkGroup[]
  /** Social media links (rendered in the footer body). */
  socialLinks: SocialMediaLinksProps['links']
  /** Fires with the email once the newsletter form validates. */
  onNewsletterSubmit: (email: string) => void
  /** Confirmation copy shown (as a polite status) after a successful newsletter sign-up. */
  newsletterConfirmation?: string
  /** Router link component; defaults to a semantic `<a>`. */
  linkComponent?: LinkComponentType
  /** Extra classes merged onto the root `<footer>`. */
  className?: string
  /** Forwarded to the root `<footer>`. */
  ref?: Ref<HTMLElement>
}

/**
 * **AppFooter** template (Storybook-only) — the global site footer assembled the way the app's
 * `FooterMainContent` / `FooterSocialLink` build it: a {@link Footer} with its quick-links top bar, link
 * columns, address, bottom bar and built-in newsletter sign-up, plus {@link SocialMediaLinks} in the
 * body. Stateless: the newsletter submit + confirmation are controlled by the story harness so the
 * sign-up runs live. Swedish copy throughout.
 */
function AppFooter({
  footerTopBarLinks,
  linkGroups,
  socialLinks,
  onNewsletterSubmit,
  newsletterConfirmation,
  linkComponent = DefaultLink,
  className,
  ref,
}: AppFooterProps) {
  return (
    <Footer
      ref={ref}
      className={className}
      footerTopBarLinks={footerTopBarLinks}
      linkGroups={linkGroups}
      addressLabel="Besöksadress"
      address="Spendrups Bryggeri AB, Sturegatan 6, 113 89 Stockholm"
      bottomBarText="© Spendrups Bryggeri AB"
      showNewsletter
      newsletterId="app-footer-newsletter"
      newsletterPlaceholder="Din e-postadress"
      onNewsletterSubmit={onNewsletterSubmit}
      logoHref="/"
      linkComponent={linkComponent}
    >
      <SocialMediaLinks label="Följ oss" links={socialLinks} />
      {newsletterConfirmation && (
        <p role="status" className="mt-3 font-semibold text-text-blue">
          {newsletterConfirmation}
        </p>
      )}
    </Footer>
  )
}

export { AppFooter }
