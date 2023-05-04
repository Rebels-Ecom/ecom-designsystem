import styles from './nav-item.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { ILink } from '../../../../types/links'
import { Above, Below } from '../../layouts'
import cx from 'classnames'
import { SubNavigation } from '../../molecules/sub-navigation/sub-navigation'
import { createRef, useEffect, useRef, useState } from 'react'
import { Icon, IconButton } from '../../atoms' 
import { LinkComponent } from '../ui-link/ui-link'

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

  const MobileNavItem = ({link, onClickExpandSubnav}:{link: ILink, onClickExpandSubnav:CallableFunction}) => {
    const[showSubNav, setShowSubNav] = useState <boolean>(false)
    function toggleDropdownArrow(){
      setShowSubNav(!showSubNav)
     }

    //  if(showSubNav)
    //  {
    //   return(
    //     <motion.li className={styles.navItemMobile} variants={itemVariants}>
    //       {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={true}/>}
    //     </motion.li>
    //   )
    //  }
    function handleOnClick(link: ILink){
      onClickExpandSubnav(link)
    }

    return(
      <motion.li className={styles.navItemMobile} variants={itemVariants}>
        <button className={styles.navItemBtn} onClick={()=>handleOnClick(link)}>
            {link.title?.toUpperCase()}
            {link.hasChildren && <Icon icon={showSubNav ? 'icon-chevron-up' : 'icon-chevron-down'}></Icon>}
        </button>
        {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={true}/>}
      </motion.li>
    )
  }

  const DesktopNavItem = ({ link, linkComponent: Link } : {link: ILink, linkComponent: any}) => {
    const[showSubNav, setShowSubNav] = useState <boolean>(false)
    const onMouseEnter = () => {
      setShowSubNav(true)
     };
     
     const onMouseLeave = () => {
      setShowSubNav(false)
     };
    return(
      <motion.li className={styles.navItemDesktop} whileTap={{ scale: 0.95 }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {link.isExternal ? (
        <a href={link.href} target={link.target} title={link.title} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
          {link.title}
        </a>
      ) : (
        <Link field={link} target={link.target} title={link.title} activeClassName={styles.active} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
          {link.title}
        </Link>
      )}
      {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={false}/>}
    </motion.li>
    )
  }

const NavItem = ({
    link,
    linkComponent: Link,
    mobile,
    onClickOpenSubnav
  }: {
    link: ILink,
    linkComponent: any,
    mobile?: boolean,
    onClickOpenSubnav: CallableFunction

  } ) => {

     if(mobile){
      return(
          <MobileNavItem link={link} onClickExpandSubnav={onClickOpenSubnav}></MobileNavItem>
      )
     }

     return(
      <DesktopNavItem link={link} linkComponent={Link}></DesktopNavItem>
    )

}

  export { NavItem }