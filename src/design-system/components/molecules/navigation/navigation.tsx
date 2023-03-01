import { useLayoutEffect, useState, useEffect, useRef, useReducer, EffectCallback, ReactElement } from 'react'
import styles from './navigation.module.css'
import { motion, AnimatePresence, useCycle } from 'framer-motion'
import { ILink } from '../../../../types/links'
import { ILinkButton } from '../../atoms/link-button/link-button'
import { Icon } from '../../atoms/icon/icon'
import { ISearchNavBar, SearchNavBar } from '../search-nav-bar/search-nav-bar'
import { ITopNavBar, TopNavBar } from '../top-nav-bar/top-nav-bar'
import { Above, Below } from '../../layouts'
import cx from 'classnames'

import useResizeObserver from '@react-hook/resize-observer'

const useSize = (target: any) => {
  const [size, setSize] = useState()

  useLayoutEffect(() => {
    setSize(target?.current?.getBoundingClientRect())
  }, [target])

  // Where the magic happens
  useResizeObserver(target, (entry: any) => setSize(entry.contentRect))

  return size
}

export interface INavigation {
  searchNavBar: ISearchNavBar
  links?: Array<ILink>
  linkComponent: any
  button?: ILinkButton
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const NavigationList = ({ links = [], linkComponent: Link, mobile }: { links: Array<ILink>; linkComponent: any; mobile?: boolean }) => {
  return (
    <motion.ul className={styles.linkList} variants={variants}>
      {links.map((link: ILink, index) => (
        <motion.li
          key={`${link.text}-${index}`}
          className={styles.linkItem}
          variants={mobile ? itemVariants : undefined}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.isExternal ? (
            <a href={link.href} target={link.target} title={link.title} className={styles.link}>
              {link.text}
            </a>
          ) : (
            <Link to={link.href} target={link.target} title={link.title} activeClassName={styles.active} className={styles.link}>
              {link.text}
            </Link>
          )}
        </motion.li>
      ))}
    </motion.ul>
  )
}

const sidebar = {
  open: (right = 1000) => ({
    clipPath: `circle(${1000 * 2 + 200}px at ${right}px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: (right = 1000) => ({
    clipPath: `circle(30px at  ${right - 100}px 40px)`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }),
}

const Path = (props: any) => <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />

const Navigation = ({ searchNavBar, links, button, linkComponent: Link }: INavigation) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const target = useRef(null)
  const size = useSize(target) || { width: 0, height: 0 }

  return (
    <motion.div initial={false} animate={isOpen ? 'open' : 'closed'} ref={target} custom={size?.width}>
      <div className={cx(styles.bar, styles.searchNavBar)}>
        <SearchNavBar {...searchNavBar} />
        <button
          id="navigation-menu-btn"
          type={'button'}
          aria-label="menu"
          aria-controls={'navigation-menu'}
          aria-expanded={isOpen}
          onClick={() => toggleOpen()}
          className={cx(styles.menuButton, isOpen && styles.open)}
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
            />
          </svg>
        </button>
      </div>
      {links?.length ? (
        <nav className={cx(styles.bar, styles.largeDeviceMenuBar)}>
          <Above breakpoint="md">{(matches: any) => matches && <NavigationList links={links} linkComponent={Link} />}</Above>
        </nav>
      ) : null}
      {(links?.length || button) && (
        <Below breakpoint="lg">
          {(matches: any) =>
            matches && (
              <>
                <motion.div className={styles.background} variants={sidebar} />
                <motion.nav>{links?.length && <NavigationList links={links} linkComponent={Link} mobile />}</motion.nav>
              </>
            )
          }
        </Below>
      )}
    </motion.div>
  )
}

export { Navigation }
