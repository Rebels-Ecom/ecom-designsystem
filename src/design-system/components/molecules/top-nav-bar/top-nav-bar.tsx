import { TNavLink } from '../../../../types/links';
import { Icon } from '../../atoms/icon/icon';
import styles from './top-nav-bar.module.css'

export interface ITopNavBar {
    topNavLinks: Array<TNavLink>,  
    linkComponent: any, 
}

const TopNavBar = ({topNavLinks, linkComponent: Link }: ITopNavBar) => {
    const contactLinks = topNavLinks.filter(link => link.navLinkType==='email' || link.navLinkType==='telephone');
    const userLinks = topNavLinks.filter(link => link.navLinkType==='login' || link.navLinkType==='register');
    return (
      <div className={styles.topNavBar}>
        {Array.isArray(contactLinks) && contactLinks.length && <ul className={styles.navLinksWrapper}>
          {contactLinks.map((link: TNavLink, index) => (
              <a href={link.navLinkType==='email' ? `mailto:${link.href}` : `tel:${link.href}`} key={`${link.text}-${index}`} className={styles.topNavLink}>
                <Icon icon={link.navLinkType==='email' ? 'icon-mail' : 'icon-phone'} className={styles.navIcon} />
                <span className={styles.topNavText}>{link.text}</span>
              </a>
            ))}
        </ul>}
        {Array.isArray(userLinks) && userLinks.length && <ul className={styles.navLinksWrapper}>
          {userLinks.map((link: TNavLink, index) => (
              <Link to={link.href} className={styles.topNavLink} key={`${link.text}-${index}`} target={'_blank'} title={link.text}>
                <Icon icon={link.navLinkType==='register' ? 'icon-plus-circle' : 'icon-user'} className={styles.navIcon} />
                <span className={styles.topNavText}>{link.text}</span>
              </Link>
            ))}
        </ul>}
      </div>
    )
}

export { TopNavBar }