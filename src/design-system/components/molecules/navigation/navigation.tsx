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

export interface INavigation {
  links: Array<ILink>
  linkComponent: any
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
      {links.map((link: ILink, index) => {
        return (
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
        )
      })}
    </motion.ul>
  )
}

const sidebar = {
  open: (right = 1000) => ({
    clipPath: `circle(${1000 * 2 + 200}px at ${right}px -40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: (right = 1000) => ({
    clipPath: `circle(30px at  ${right - 100}px -40px)`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }),
}

const Navigation = ({ links, linkComponent: Link }: INavigation) => {
  return (
    <div className={styles.navigation}>
      {links?.length && (
        <nav className={cx(styles.bar, styles.largeDeviceMenuBar)}>
          <Above breakpoint="md">{(matches: any) => matches && <NavigationList links={links} linkComponent={Link} />}</Above>
        </nav>
      )}
      {links?.length && (
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
    </div>
  )
}

export { Navigation }
