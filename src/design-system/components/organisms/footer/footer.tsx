import { ILink, TNavLink } from '../../../../types/links'
import { IPicture, Picture } from '../../atoms/picture/picture'
import { Newsletter } from '../../molecules/newsletter/newsletter'
import { useState } from 'react'
import { FooterTopBar } from '../../molecules/footer-top-bar/footer-top-bar'
import styles from './footer.module.css'
import { Logotype } from '../../molecules/logotype/logotype'

export interface IFooter {
  footerTopBarLinks: Array<TNavLink>
  links: Array<TFooterLinksList>
  linkComponent: any
  logo: INavigationLogo
  addressLabel: string
  address: string
  newsletterId: string
  newsletterPlaceholder: string
  bottomBarText: string
  children: React.ReactNode
}

export type INavigationLogo = {
  href: string
} & IPicture

export type TFooterLinksList = {
  title: string
  links: Array<ILink>
}

const FooterContent = ({logo, address, addressLabel, children, linkComponent: Link, newsletterId, newsletterPlaceholder }: {logo:INavigationLogo, address:string, addressLabel:string, children: React.ReactNode, linkComponent: any, newsletterId:string, newsletterPlaceholder: string }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [isErroneous, setIsErroneous] = useState<boolean>(false)

  const signupForNewsletter = (email: string) => {
      alert(`You signed up for Spendrups newsletter, with email: ${email}`);
  }
  return(
    <div className={styles.footerLeft}>
      {logo && <Logotype className={styles.linkLogo} logo={logo} linkComponent={Link} /> }
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
      <div className={styles.addressContainer}>
        <p>{addressLabel}</p>
        <p>{address}</p>
      </div>
      <div className={styles.socialMediaIconContainer}>{children}</div>
    </div>
  )
}

const FooterLinks = ({footerLinks, linkComponent: Link} : {footerLinks:Array<TFooterLinksList>, linkComponent: any}) => {
  if( !Array.isArray(footerLinks) || !footerLinks.length )
    return null;
  else
    return(
      <ul className={styles.linkList}>
        {footerLinks.map((list: TFooterLinksList, i: number) => (
          <li key={`${list.title}-${i}`} className={styles.linkListItem}>
            <h5 className={styles.linkListTitle}>{list.title}</h5>
            {Array.isArray(list.links) && list.links && (
              <ul className={styles.links}>
                {list.links.map((link:ILink, i:number) => (
                  <li key={`${link.children}-${i}`} className={styles.linkItem}>
                    {link.isExternal ? (
                      <a href={link.href} target={link.target} className='body'>
                        {link.children}
                      </a>
                    ) : (
                      <Link to={link.href}>{link.children}</Link>
                    )}
                  </li>
                ))}
              </ul>
            )
          }
          </li>
        ))}
      </ul>
    )
}

const FooterBottomBar = ({bottomBarText}:{bottomBarText:string}) => (
  <div className={styles.bottomBar}>{bottomBarText}</div>
)

const Footer = ({ footerTopBarLinks, logo, address, addressLabel, children, links = [], linkComponent: Link, newsletterId, newsletterPlaceholder, bottomBarText }: IFooter) => {
  return (
    <>
      <FooterTopBar footerTopBarLinks={footerTopBarLinks} linkComponent={Link}></FooterTopBar>
      <footer className={styles.footer}>
        <FooterContent logo={logo} address={address} addressLabel={addressLabel} linkComponent={Link} newsletterId={newsletterId} newsletterPlaceholder={newsletterPlaceholder} children={children}/>
        <FooterLinks footerLinks={links} linkComponent={Link}></FooterLinks>
      </footer>
      <FooterBottomBar bottomBarText={bottomBarText}></FooterBottomBar>
    </>
  )
}

export { Footer }
