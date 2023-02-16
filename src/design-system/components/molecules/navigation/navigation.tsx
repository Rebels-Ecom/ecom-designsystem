import { useState } from 'react'
import styles from './navigation.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { ILink } from '../../../../types/links'
import { ILinkButton } from '../../atoms/link-button/link-button'
import { Icon} from '../../atoms/icon/icon'
import { ISearchNavBar, SearchNavBar } from '../search-nav-bar/search-nav-bar'
import { ITopNavBar, TopNavBar } from '../top-nav-bar/top-nav-bar'
import cx from 'classnames'
export interface INavigation {
  topNavBar: ITopNavBar
  searchNavBar: ISearchNavBar
  links?: Array<ILink>
  linkComponent: any
  button?: ILinkButton
}

const NavigationList = ({ links = [], linkComponent: Link }: { links: Array<ILink>; linkComponent: any }) => {
  return (
    <ul className={styles.linkList}>
      {links.map((link: ILink, index) => (
        <li key={`${link.text}-${index}`} className={styles.linkItem}>
          {link.isExternal ? (
            <a href={link.href} target={link.target} title={link.title} className={styles.link}>
              {link.text}
            </a>
          ) : (
            <Link to={link.href} target={link.target} title={link.title} activeClassName={styles.active} className={styles.link}>
              {link.text}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

const Navigation = ({ topNavBar, searchNavBar, links, button, linkComponent: Link }: INavigation) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
    
  return (
    <nav className={`${styles.navigation} ${isOpen ? styles.navigationOpen : ''}`}>
      <TopNavBar {...topNavBar}/>
      <div className={cx(styles.bar, styles.searchNavBar)}>
        <SearchNavBar {...searchNavBar}/>
        <button
          id="navigation-menu-btn"
          type={'button'}
          aria-label="menu"
          aria-controls={'navigation-menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={cx(styles.menuButton, isOpen && styles.open)}
        >
          <span className={styles.menuButtonInner}>
            <Icon icon="icon-menu" className={styles.icon} />
          </span>
        </button>
      </div>
      {links?.length ? (
        <div className={cx(styles.bar, styles.largeDeviceMenuBar)}>
          <NavigationList links={links} linkComponent={Link} />
        </div>
      ) : null}
      {(links?.length || button) && (
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={'navigation-menu'}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { display: 'block' },
                collapsed: { display: 'none' },
              }}
              aria-labelledby={'navigation-menu-btn'}
            >
              <div className={styles.smallDeviceMenu}>
                {links?.length && <NavigationList links={links} linkComponent={Link} />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )} 
    </nav>
  )
}

export { Navigation }
