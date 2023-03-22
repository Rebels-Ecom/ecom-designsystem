import { ILink, TNavLink } from '../../../../types/links'
import { IPicture, Picture } from '../../atoms/picture/picture'
import { Newsletter } from '../../molecules/newsletter/newsletter'
import { useState } from 'react'
import { FooterTopBar } from '../../molecules/footer-top-bar/footer-top-bar'
import { SocialMediaLinks } from '../../molecules/social-media-links/social-media-links'
import styles from './footer.module.css'
import { TSocialMediaLink } from '../../atoms/social-media-link/social-media-link'

export interface IFooter {
  footerTopBarLinks: Array<TNavLink>,  
  links: Array<TFooterLinksList>
  linkComponent: any
  logo: INavigationLogo
  addressLabel: string
  address: string
  socialMediaLinks: Array<TSocialMediaLink>
  newsletterId: string
  newsletterPlaceholder: string
  bottomBarText: string
}

export type INavigationLogo = {
  href: string
} & IPicture

export type TFooterLinksList = {
  title: string
  links: Array<ILink>
}

const FooterContent = ({logo, address, addressLabel, socialMediaLinks, linkComponent: Link, newsletterId, newsletterPlaceholder }: {logo:INavigationLogo, address:string, addressLabel:string, socialMediaLinks: any, linkComponent: any, newsletterId:string, newsletterPlaceholder: string }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [isErroneous, setIsErroneous] = useState<boolean>(false)

  const signupForNewsletter = (email: string) => {
      alert(`You signed up for Spendrups newsletter, with email: ${email}`);
  }
  return(
    <div className={styles.footerLeft}>
      {logo && (
        <Link to={logo.href} className={styles.linkLogo}>
          <Picture {...logo} classNamePicture={styles.logoPicture} classNameImg={styles.logoImg} />
        </Link>
      )}
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
        <p>{address}</p></div>
      <SocialMediaLinks socialMediaLinks={socialMediaLinks}/>
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
                  <li key={`${link.title}-${i}`} className={styles.linkItem}>
                    {link.isExternal ? (
                      <a href={link.href} target={link.target} className='body'>
                        {link.title}
                      </a>
                    ) : (
                      <Link to={link.href}>{link.title}</Link>
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

const Footer = ({ footerTopBarLinks, logo, address, addressLabel, socialMediaLinks, links = [], linkComponent: Link, newsletterId, newsletterPlaceholder, bottomBarText }: IFooter) => {
  return (
    <>
      <FooterTopBar footerTopBarLinks={footerTopBarLinks} linkComponent={Link}></FooterTopBar>
      <footer className={styles.footer}>
        <FooterContent logo={logo} address={address} addressLabel={addressLabel} socialMediaLinks={socialMediaLinks} linkComponent={Link} newsletterId={newsletterId} newsletterPlaceholder={newsletterPlaceholder} ></FooterContent>
        <FooterLinks footerLinks={links} linkComponent={Link}></FooterLinks>
      </footer>
      <FooterBottomBar bottomBarText={bottomBarText}></FooterBottomBar>
    </>
  )
}

export { Footer }
