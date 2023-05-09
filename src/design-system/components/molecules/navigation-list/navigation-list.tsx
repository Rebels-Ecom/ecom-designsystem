
import React, { useState } from 'react'
import styles from './navigation-list.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { INavigationLink } from '../../../../types/links'
import { Icon, LinkButton, UILink } from '../../atoms'
import { SubNavigation } from '../sub-navigation/sub-navigation'

export interface INavigationList {
    links: Array<INavigationLink>
    linkComponent: any
    mobile?: boolean
    isOpen?: boolean
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

function DesktopNavLink({link, linkComponent: Link }:{link:INavigationLink, linkComponent: any}){
    const[showSubNavigation, setShowSubNavigation] = useState <boolean>(false)
    const onMouseEnter = () => { setShowSubNavigation(true) }
    const onMouseLeave = () => { setShowSubNavigation(false) }
    return (
        <motion.li className={styles.navItemDesktop} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {link.isExternal 
            ? 
                <a href={link.href} target={link.target} title={link.title} className={styles.linkDesktop} aria-expanded={showSubNavigation ? "true" : "false"}>
                    {link.title}
                </a>
            : 
                <Link field={link} target={link.target} title={link.title} activeClassName={styles.active} className={styles.linkDesktop} aria-expanded={showSubNavigation ? "true" : "false"}>
                    {link.title}
                </Link>
            }
            {link?.hasChildren && link?.subNavigationLinks && link?.subNavigationLinks?.length>0 && <SubNavigation subNavLinks={link.subNavigationLinks} linkComponent={Link} isOpen={showSubNavigation} isMobile={false}/>}
        </motion.li>
    )
}


function NavigationList({ links = [], linkComponent: Link, mobile, isOpen }: INavigationList) {

    const[showSubNavigation, setShowSubNavigation] = useState <boolean>(false)
    const[subNavLink, setSubNavLink] = useState <INavigationLink>()
  
    function openSubNavMenu(link: INavigationLink){
      setSubNavLink(link)
      setShowSubNavigation(true)
    }
  
    function closeSubNavMenu(link: INavigationLink){
      subNavLink && link.href===subNavLink.href && setShowSubNavigation(false)
    }
  
    if(mobile && showSubNavigation && subNavLink?.subNavigationLinks?.length){
        return(
            <AnimatePresence>
                <motion.ul className={styles.linkList} variants={variants} exit='closed' initial='closed' animate='open'>
                    <div className={styles.subNavHeading}>
                        <button className={styles.subNavBackBtn} onClick={()=>closeSubNavMenu(subNavLink)}>
                            <Icon icon={'icon-chevron-left'} className={styles.subNavBackArrow}></Icon>
                            {subNavLink?.title?.toUpperCase()}
                        </button>
                        <LinkButton className={styles.subNavShowAllBtn} surface={'primary'} size={'x-small'} href={subNavLink.href}>Visa alla sorter</LinkButton>
                    </div>
                    <SubNavigation subNavLinks={subNavLink.subNavigationLinks} linkComponent={Link} isOpen={true} isMobile={true}/>
                </motion.ul>
            </AnimatePresence>
        )
    }
  
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.ul className={styles.linkList} variants={variants} exit="closed" initial="closed" animate="open">
            {links.map((link: INavigationLink, index) => {
                if(mobile){
                return(
                    <motion.li key={index} className={styles.navItemMobile} variants={itemVariants}>
                        {link.hasChildren && link.subNavigationLinks && link.subNavigationLinks.length>0
                            ?
                            <button className={styles.linkMobile} onClick={()=>openSubNavMenu(link)}>
                                {link.title?.toUpperCase()}
                                <Icon icon={'icon-chevron-right'}></Icon>
                            </button>
                            :
                            <>
                            {link.isExternal 
                            ? 
                                <a href={link.href} target={link.target} title={link.title} className={styles.linkMobile} aria-expanded={showSubNavigation ? "true" : "false"}>
                                    {link.title?.toUpperCase()}
                                </a>
                            : 
                                <Link field={link} target={link.target} title={link.title} activeClassName={styles.active} className={styles.linkMobile} aria-expanded={showSubNavigation ? "true" : "false"}>
                                    {link.title?.toUpperCase()}
                                </Link>
                            
                                }
                            </>
                        }
                        {link.hasChildren && link?.subNavigationLinks && <SubNavigation subNavLinks={link.subNavigationLinks} linkComponent={Link} isOpen={showSubNavigation} isMobile={true}/>}
                    </motion.li>
                )}
                return (
                    <DesktopNavLink key={index} link={link} linkComponent={Link}></DesktopNavLink>
                )
            })}
          </motion.ul>
         )}
      </AnimatePresence>
    )
  }
export { NavigationList }

