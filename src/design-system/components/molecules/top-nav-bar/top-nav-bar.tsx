import { TIconNavLink } from '../../../../types/links'
import { Icon, TIcon } from '../../atoms/icon/icon'
import styles from './top-nav-bar.module.css'
import cx from 'classnames'

export interface ITopNavBar {
  links: Array<TIconNavLink>
  userLoggedIn: boolean
  isAdmin?: boolean
  btnIcon?: TIcon
  btnText?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  linkComponent: any
}

const TopNavBar = ({ links, userLoggedIn=false, isAdmin=false, btnIcon, btnText, onClick, linkComponent: Link }: ITopNavBar) => {

  function renderLink(link:TIconNavLink) {
    return(
      <>
      {link.isExternal
        ?
        <a href={link.isTelephoneLink ? `tel:${link.href}` : link.href} className={styles.topNavLink} target={'_blank'}>
          <Icon className={styles.navIcon} icon={link.icon} />
          <span className={cx('bodyS', styles.topNavText)}>{link.children}</span>
        </a>
        :
        <Link to={link.href} className={styles.topNavLink} title={link.children}>
          <Icon icon={link.icon} className={styles.navIcon} />
          <span className={cx('bodyS', styles.topNavText)}>{link.children}</span>
        </Link>
      }
      </>
    )
  }

  if(!Array.isArray(links) || links.length<=0){
    return null
  }

  const linksLeft = links.slice(0, Math.ceil(links.length / 2))
  const linksRight = links.slice(- Math.floor(links.length / 2))
  console.log('TADA', userLoggedIn, btnText, onClick)

  return(
    <div className={cx(styles.topNavBar, isAdmin ? styles.adminTopNavBar : styles.userTopNavBar)}>
      {
        isAdmin 
        ?
        <ul className={cx(styles.navLinksWrapper, styles.navLinksRight)}>
            {links.map((link: TIconNavLink, index)=> <li key={`${link.href}-${index}`}>{renderLink(link)}</li>)}
            {userLoggedIn && btnText && onClick && <button className={cx(styles.topNavLink, styles.btn)} onClick={onClick}> {btnIcon && <Icon icon={btnIcon} className={styles.navIcon}/>}{btnText}</button>}
        </ul>
        :
        <>
          <ul className={cx(styles.navLinksWrapper, styles.navLinksLeft)}>
            {linksLeft.map((link: TIconNavLink, index)=> <li key={`${link.href}-${index}`}>{renderLink(link)}</li>)}
          </ul>
          <ul className={cx(styles.navLinksWrapper, styles.navLinksRight)}>
            {linksRight.map((link: TIconNavLink, index)=> <li key={`${link.href}-${index}`}>{renderLink(link)}</li>)}
            {userLoggedIn && btnText && onClick && <button className={cx(styles.topNavLink, styles.btn)} onClick={onClick}> {btnIcon && <Icon icon={btnIcon} className={styles.navIcon}/>}{btnText}</button>}
          </ul>
        </>
      }
    </div>
  )
}

export { TopNavBar }