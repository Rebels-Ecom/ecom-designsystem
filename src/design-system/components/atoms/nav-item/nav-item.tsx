import styles from './nav-item.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { ILink } from '../../../../types/links'
import { Above, Below } from '../../layouts'
import cx from 'classnames'
import { SubNavigation } from '../../molecules/sub-navigation/sub-navigation'
import { createRef, useEffect, useRef, useState } from 'react'
import { IconButton } from '../../atoms' 

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
      setShowSubNav(true)
     };
     
     const onMouseLeave = () => {
      setShowSubNav(false)
     };
  
     function toggleDropdownArrow(){
      console.log('TOGGLE ARROW', !showSubNav)
      setShowSubNav(!showSubNav)
     }
     if(mobile)
     return(
        <motion.li className={styles.navItemMobile} whileTap={{ scale: 0.95 }} variants={mobile ? itemVariants : undefined} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <button className={styles.navItemBtn} onClick={toggleDropdownArrow} aria-expanded={showSubNav ? "true" : "false"}>
                    {link.title?.toUpperCase()}
                    {link.hasChildren && <IconButton icon={'icon-chevron-down'} isLink={false} onClick={toggleDropdownArrow}></IconButton>}
                </button>
                {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={mobile}/>}
              {/* <a href={link.href} target={link.target} title={link.title} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
                {link.title?.toUpperCase()}
              </a>
              {mobile && link.hasChildren && <IconButton icon={'icon-chevron-down'} isLink={false} onClick={toggleDropdownArrow}></IconButton>}
              {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={mobile}/>} */}
            {/* </div>
          ) : (
            <div className={styles.linkWrapper}>
              <Link field={link} target={link.target} title={link.title} activeClassName={styles.active} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
                {link.title}
              </Link>
              {mobile && link.hasChildren && <IconButton icon={'icon-chevron-down'} isLink={false} onClick={toggleDropdownArrow}></IconButton>}
              {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={mobile}/>}
            </div>
          )} */}
        </motion.li>
     )
  
    return(
      <motion.li className={styles.linkItem} whileTap={{ scale: 0.95 }} variants={mobile ? itemVariants : undefined} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {mobile 
          ?
          (<>
          {link.isExternal ? (
            <div className={styles.linkItemContent}>
                <button className={styles.navItemBtn} onClick={toggleDropdownArrow} aria-expanded={showSubNav ? "true" : "false"}>
                    {link.title?.toUpperCase()}
                    {link.hasChildren && <IconButton icon={'icon-chevron-down'} isLink={false} onClick={toggleDropdownArrow}></IconButton>}
                </button>
                {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={mobile}/>}
              {/* <a href={link.href} target={link.target} title={link.title} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
                {link.title?.toUpperCase()}
              </a>
              {mobile && link.hasChildren && <IconButton icon={'icon-chevron-down'} isLink={false} onClick={toggleDropdownArrow}></IconButton>}
              {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={mobile}/>} */}
            </div>
          ) : (
            <div className={styles.linkWrapper}>
              <Link field={link} target={link.target} title={link.title} activeClassName={styles.active} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
                {link.title}
              </Link>
              {mobile && link.hasChildren && <IconButton icon={'icon-chevron-down'} isLink={false} onClick={toggleDropdownArrow}></IconButton>}
              {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={mobile}/>}
            </div>
          )}</>)
          :
          (<>
          {link.isExternal ? (
            <div className={styles.linkItemContent}>
              <div className={styles.linkWrapper}>
              </div>
              <a href={link.href} target={link.target} title={link.title} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
                {link.title}
              </a>
              {mobile && link.hasChildren && <IconButton icon={'icon-chevron-down'} isLink={false} onClick={toggleDropdownArrow}></IconButton>}
              {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={mobile}/>}
            </div>
          ) : (
            <div className={styles.linkWrapper}>
              <Link field={link} target={link.target} title={link.title} activeClassName={styles.active} className={styles.link} aria-expanded={showSubNav ? "true" : "false"}>
                {link.title}
              </Link>
              {mobile && link.hasChildren && <IconButton icon={'icon-chevron-down'} isLink={false} onClick={toggleDropdownArrow}></IconButton>}
              {link.hasChildren && link?.subNav?.lists && <SubNavigation subNav={link.subNav} isOpen={showSubNav} isMobile={mobile}/>}
            </div>
          )}</>)
          }
        </motion.li>
    )
  }

  export { NavItem }