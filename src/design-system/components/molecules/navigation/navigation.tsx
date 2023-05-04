import styles from './navigation.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { ILink } from '../../../../types/links'
import { Above, Below } from '../../layouts'
import cx from 'classnames'
import { SubNavigation } from '../sub-navigation/sub-navigation'
import { createRef, useEffect, useRef, useState } from 'react'
import { IconButton } from '../../atoms'
import { NavItem } from '../../atoms/nav-item/nav-item'

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

// const NavItem = ({
//   link,
//   linkComponent: Link,
//   mobile
// }: {
//   link: ILink,
//   linkComponent: any,
//   mobile?: boolean
// } ) => {
//   console.log('IS MOBILE', mobile)

//   const[showSubNav, setShowSubNav] = useState <boolean>(false)
//   const onMouseEnter = () => {
//     setShowSubNav(true)
//    };
   
//    const onMouseLeave = () => {
//     setShowSubNav(false)
//    };

//    function toggleDropdownArrow(){
//     console.log('TOGGLE ARROW', !showSubNav)
//     setShowSubNav(!showSubNav)
//    }

//   return(
//     <motion.li className={styles.linkItem} whileTap={{ scale: 0.95 }} variants={mobile ? itemVariants : undefined} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//         {link.isExternal ? (
//           <div className={styles.linkItemContent}>
//             <div className={styles.linkWrapper}>


//             </div>
//             <a href={link.href} target={link.target} title={link.title} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
//               {link.title}
//             </a>
//             {mobile && link.hasChildren && <IconButton icon={'icon-chevron-down'} isLink={false} onClick={toggleDropdownArrow}></IconButton>}
//             {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={mobile}/>}
//           </div>
//         ) : (
//           <div className={styles.linkWrapper}>
//             <Link field={link} target={link.target} title={link.title} activeClassName={styles.active} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
//               {link.title}
//             </Link>
//             {mobile && link.hasChildren && <IconButton icon={'icon-chevron-down'} isLink={false} onClick={toggleDropdownArrow}></IconButton>}
//             {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={mobile}/>}
//           </div>
//         )}
//       </motion.li>
//   )
// }

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

  const[showSubNav, setShowSubNav] = useState <boolean>(false)
  const[subNavLink, setSubNavLink] = useState <ILink>()

  function openSubnav(link: ILink){
    console.log('LINK', link)
    setSubNavLink(link)
    setShowSubNav(true)
  }

  function closeSubnav(){
    setShowSubNav(false)
  }

  if(mobile && showSubNav && subNavLink && subNavLink.hasChildren && subNavLink?.subNav?.lists?.length){
    return (
    <AnimatePresence>
        <motion.ul className={styles.linkList} variants={variants} exit="closed" initial="closed" animate="open">
          <button onClick={closeSubnav}>{subNavLink.title}</button>
          <SubNavigation subNav={subNavLink.subNav} isOpen={true} isMobile={true}/>
        </motion.ul>
  </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul className={styles.linkList} variants={variants} exit="closed" initial="closed" animate="open">
          {links.map((link: ILink, index) => {
            return (
              <NavItem key={`${link.title}-${index}`} link={link} linkComponent={Link} mobile={mobile} onClickOpenSubnav={openSubnav}/>
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
