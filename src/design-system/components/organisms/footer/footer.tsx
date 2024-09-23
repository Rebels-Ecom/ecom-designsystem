import { ILink, TNavLink } from '../../../../types/links'
import { IPicture, Picture } from '../../atoms/picture/picture'
import { Newsletter } from '../../molecules/newsletter/newsletter'
import { useState } from 'react'
import { FooterTopBar } from '../../molecules/footer-top-bar/footer-top-bar'
import styles from './footer.module.css'
import { TLogotype } from '../../molecules/logotype/logotype'
import { ContentWrapper } from '../../layouts'
import cx from 'classnames';

export interface IFooter {
  footerTopBarLinks: Array<TNavLink>
  links: Array<TFooterLinksList>
  linkComponent: any
  logo: TLogotype
  addressLabel: string
  address: string
  showNewsletter: boolean
  newsletterId: string
  newsletterPlaceholder: string
  bottomBarText: string
  children: React.ReactNode
  trackFooterLink?: CallableFunction
}

export type INavigationLogo = {
  href: string
} & IPicture

export type TFooterLinksList = {
  title: string
  links: Array<ILink>
}

const FooterContent = ({
  logo,
  address,
  addressLabel,
  children,
  linkComponent: Link,
  showNewsletter = false,
  newsletterId,
  newsletterPlaceholder,
}: {
  logo: React.ReactNode;
  address: string
  addressLabel: string
  children: React.ReactNode
  linkComponent: any
  showNewsletter: boolean
  newsletterId: string
  newsletterPlaceholder: string
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [isErroneous, setIsErroneous] = useState<boolean>(false)

  const signupForNewsletter = (email: string) => {
    alert(`You signed up for Spendrups newsletter, with email: ${email}`)
  }
  return (
    <div className={styles.footerLeft}>
      {logo && logo}
      {showNewsletter && (
        <Newsletter
          id={newsletterId}
          inputValue={inputValue}
          setInputValue={setInputValue}
          isErroneous={isErroneous}
          setIsFocused={setIsFocused}
          setIsErroneous={setIsErroneous}
          placeholder={newsletterPlaceholder}
          signupForNewsletter={signupForNewsletter}
          className={styles.newsletter}
        />
      )}
      <div className={styles.addressContainer}>
        <p>{addressLabel}</p>
        <p>{address}</p>
      </div>
      <div className={styles.socialMediaIconContainer}>{children}</div>
    </div>
  )
}

const FooterLinks = ({ footerLinks, linkComponent: Link, trackFooterLink }: { footerLinks: Array<TFooterLinksList>; linkComponent: any, trackFooterLink?: CallableFunction }) => {
  if (!Array.isArray(footerLinks) || footerLinks.length === 0) return null
  else
    return (
      <ul className={styles.linkList}>
        {footerLinks.map((list: TFooterLinksList, i: number) =>
          Array.isArray(list.links) && list.links?.length ? (
            <li key={`${list.title}-${i}`} className={styles.linkListItem}>
              <h3 className={cx(styles.linkListTitle, 'h5')}>{list.title}</h3>
              {list.links.length < 5 ? (
                <ul className={styles.links}>
                  {list.links.map((link: ILink, i: number) => <FooterLink key={`${link.children}-${i}`} link={link} linkComponent={Link} />)}
                </ul>
              ) : (
                <div className={styles.links}>
                  <ul className={styles.linksInTwoColumns}>
                    {list.links.map((link: ILink, i: number) => (
                      <FooterLink
                        key={`${link.children}-${i}`}
                        link={link}
                        linkComponent={Link}
                        {...link}
                        trackFooterLink={trackFooterLink}
                      />
                      ))}
                  </ul>
                </div>
              )}
            </li>
          ) : null
        )}
      </ul>
    )
}

const FooterLink = ({ link, linkComponent: Link, trackFooterLink }: { link: ILink; linkComponent: any, trackFooterLink?: CallableFunction }) => (
  <li className={styles.linkItem}>
    {link.isExternal ? (
      <a href={link.href} target={link.target} className="body" aria-label={`Go to ${link.children}`}>
        {link.children}
      </a>
    ) : (
      <Link to={link.href} onClick={trackFooterLink} aria-label={`Go to ${link.children}`}>{link.children}</Link>
    )}
  </li>
)

const FooterBottomBar = ({ bottomBarText }: { bottomBarText: string }) => <div className={styles.bottomBar}>{bottomBarText}</div>

const Footer = ({
  footerTopBarLinks,
  logo,
  address,
  addressLabel,
  children,
  links = [],
  linkComponent: Link,
  showNewsletter,
  newsletterId,
  newsletterPlaceholder,
  bottomBarText,
  trackFooterLink
}: IFooter) => {
  return (
    <>
      <FooterTopBar footerTopBarLinks={footerTopBarLinks} linkComponent={Link}></FooterTopBar>
      <footer className={styles.footer}>
        <ContentWrapper>
          <div className={styles.inner}>
            <FooterContent
              logo={logo}
              address={address}
              addressLabel={addressLabel}
              linkComponent={Link}
              showNewsletter={showNewsletter}
              newsletterId={newsletterId}
              newsletterPlaceholder={newsletterPlaceholder}
              children={children}
            />
            <FooterLinks footerLinks={links} linkComponent={Link} trackFooterLink={trackFooterLink}></FooterLinks>
          </div>
        </ContentWrapper>
      </footer>
      <FooterBottomBar bottomBarText={bottomBarText}></FooterBottomBar>
    </>
  )
}

export { Footer }
