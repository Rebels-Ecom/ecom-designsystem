import { TNavLink } from '../../../../types/links'
import { Icon } from '../../atoms/icon/icon'
import styles from './top-nav-bar.module.css'
import cx from 'classnames'

export interface ITopNavBar {
  topNavLinks: Array<TNavLink>
  userLoggedIn: boolean
  userName?: string
  linkComponent: any
}

const TopNavBar = ({ topNavLinks, userLoggedIn=false, userName,  linkComponent: Link }: ITopNavBar) => {
  const contactLinks = topNavLinks.filter((link) => link.navLinkType === 'email' || link.navLinkType === 'telephone')
  const userLinks = topNavLinks.filter((link) => link.navLinkType === 'login' || link.navLinkType === 'register')
  const loggedInUserLinks = topNavLinks.filter((link) => link.navLinkType === 'logout' || link.navLinkType === 'loggedInUser')
  return (
    <div className={styles.topNavBar}>
      {Array.isArray(contactLinks) && contactLinks.length ? (
        <ul className={cx(styles.navLinksWrapper, styles.navLinksLeft)}>
          {contactLinks.map((link: TNavLink, index) => (
            <a href={link.navLinkType === 'email' ? `mailto:${link.href}` : `tel:${link.href}`} key={`${link.href}-${index}`} className={styles.topNavLink}>
              <Icon icon={link.navLinkType === 'email' ? 'icon-mail' : 'icon-phone'} className={styles.navIcon} />
              <span className={cx('bodyS', styles.topNavText)}>{link.children}</span>
            </a>
          ))}
        </ul>
      ) : null }
      {userLoggedIn 
        ? 
        <>
          { Array.isArray(loggedInUserLinks) && loggedInUserLinks.length 
            ? (<ul className={cx(styles.navLinksWrapper, styles.navLinksRight)}>
                {loggedInUserLinks.map((link: TNavLink, index) => {
                  if(link.navLinkType === 'loggedInUser'){
                    return(
                      <div className={styles.topNavLink} key={`${link.href}-${index}`}>
                        <Icon icon={'icon-users'} className={styles.navIcon} />
                        <span className={cx('bodyS', styles.topNavText)}>{link.children} {userName}</span>
                      </div>
                    )
                  }
                  return(
                    <Link to={link.href} className={styles.topNavLink} key={`${link.href}-${index}`} target={'_blank'} title={link.children}>
                      <Icon icon={'icon-x-circle'} className={styles.navIcon} />
                      <span className={cx('bodyS', styles.topNavText)}>{link.children}</span>
                    </Link>
                  )
                  })}
              </ul>) 
            : 
            null
          }
        </>
        : 
        <>
          { Array.isArray(userLinks) && userLinks.length 
            ? (<ul className={cx(styles.navLinksWrapper, styles.navLinksRight)}>
                {userLinks.map((link: TNavLink, index) => (
                  <Link to={link.href} className={styles.topNavLink} key={`${link.href}-${index}`} target={'_blank'} title={link.children}>
                    <Icon icon={link.navLinkType === 'register' ? 'icon-plus-circle' : 'icon-user'} className={styles.navIcon} />
                    <span className={cx('bodyS', styles.topNavText)}>{link.children}</span>
                  </Link>
                ))}
              </ul>) 
            : 
            null
          }
        </>
      }
    </div>
  )
}

export { TopNavBar }
