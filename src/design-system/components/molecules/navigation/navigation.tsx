import styles from './navigation.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { ILink } from '../../../../types/links'
import { Above, Below } from '../../layouts'
import cx from 'classnames'
import { SubNavigation } from '../sub-navigation/sub-navigation'
import { createRef, useEffect, useRef, useState } from 'react'

export interface INavigation {
  links: Array<ILink>
  linkComponent: any
  isOpen: boolean
}

const variants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.2 },
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
    duration: 0.2,
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const NavItem = ({
  link,
  linkComponent: Link,
  mobile
}: {
  link: ILink,
  linkComponent: any,
  mobile?: boolean
} ) => {
  console.log('IS MOBILE', mobile)

  const[showSubNav, setShowSubNav] = useState <boolean>(false)
  const onMouseEnter = () => {
    !mobile && setShowSubNav(true)
   };
   
   const onMouseLeave = () => {
    !mobile && setShowSubNav(false)
   };

  return(
    <motion.li className={styles.linkItem} whileTap={{ scale: 0.95 }} variants={mobile ? itemVariants : undefined} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {link.isExternal ? (
          <>
            <a href={link.href} target={link.target} title={link.title} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
              {link.title}
            </a>
            {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav}/>}
          </>
        ) : (
          <>
            <Link field={link} target={link.target} title={link.title} activeClassName={styles.active} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
              {link.title}
            </Link>
            {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav}/>}
          </>
        )}
      </motion.li>
  )
}

const NavigationList = ({
  links = [],
  linkComponent: Link,
  mobile,
  isOpen,
}: {
  links: Array<ILink>
  linkComponent: any
  mobile?: boolean
  isOpen?: boolean
}) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul className={styles.linkList} variants={variants} exit="closed" initial="closed" animate="open">
          {links.map((link: ILink, index) => {
            return (
              <NavItem key={`${link.title}-${index}`} link={link} linkComponent={Link} mobile={mobile}/>
            )
          })}
        </motion.ul>
      )}
    </AnimatePresence>
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

const Navigation = ({ links, linkComponent: Link, isOpen }: INavigation) => {
  return (
    <div className={styles.navigation}>
      {links?.length && (
        <nav className={cx(styles.bar, styles.largeDeviceMenuBar)}>
          <Above breakpoint="md">{(matches: any) => matches && <NavigationList links={links} linkComponent={Link} isOpen />}</Above>
        </nav>
      )}
      {links?.length && (
        <Below breakpoint="lg">
          {(matches: any) =>
            matches && (
              <>
                <motion.div className={styles.background} variants={sidebar} />
                <motion.nav>{links?.length && <NavigationList links={links} linkComponent={Link} mobile isOpen={isOpen} />}</motion.nav>
              </>
            )
          }
        </Below>
      )}
    </div>
  )
}

export { Navigation }
