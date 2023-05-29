
import React, { useEffect, useState } from 'react'
import styles from './navigation-list.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { INavigationLink } from '../../../../types/links'
import { Icon } from '../../atoms/icon/icon'
import { SubNavigation } from '../sub-navigation/sub-navigation'

export interface INavigationList {
    links: Array<INavigationLink>
    linkComponent: any
    mobile?: boolean
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

function DesktopNavLink({link, linkComponent: Link }:{link:INavigationLink, linkComponent: any}){
    const[showSubNavigation, setShowSubNavigation] = useState <boolean>(false)
    function closeSubNav(){
        setShowSubNavigation(false)
    }
    return (
        <div className={styles.navItemDesktop} onMouseOver={() => setShowSubNavigation(true)} onMouseLeave={() => setShowSubNavigation(false)}>
            {link.isExternal 
            ? 
                <a href={link.href} onClick={closeSubNav} target={link.target} title={link.title} className={styles.linkDesktop} aria-expanded={showSubNavigation ? "true" : "false"}>
                    {link.title}
                </a>
            : 
                <Link field={link} onClick={closeSubNav} target={link.target} title={link.title} activeClassName={styles.active} className={styles.linkDesktop} aria-expanded={showSubNavigation ? "true" : "false"}>
                    {link.title}
                </Link>
            }
            {link?.hasChildren && link?.subNavigationLinks && link?.subNavigationLinks?.length>0 && 
                <SubNavigation navLink={link} subNavLinks={link.subNavigationLinks} linkComponent={Link} isOpen={showSubNavigation} isMobile={false} exitSubNav={closeSubNav}/>}
        </div>
    )
}


function NavigationList({ links = [], linkComponent: Link, mobile, isOpen }: INavigationList) {

    const[showSubNavigation, setShowSubNavigation] = useState <boolean>(false)
    const[subNavLink, setSubNavLink] = useState <INavigationLink>()

    useEffect(()=>{
        !isOpen && setShowSubNavigation(false)
    }, [isOpen])
  
    function openSubNavMenu(link: INavigationLink){
      setSubNavLink(link)
      setShowSubNavigation(true)
    }
  
    function exitSubNavMenu(){
      setShowSubNavigation(false)
    }
  
    if(mobile && isOpen && showSubNavigation && subNavLink?.subNavigationLinks?.length){
        return(
            <SubNavigation 
                navLink={subNavLink} 
                subNavLinks={subNavLink.subNavigationLinks} 
                linkComponent={Link} 
                isOpen={showSubNavigation}
                exitSubNav={exitSubNavMenu} 
                isMobile={true}
            />
        )
    }
  
    return (
        <AnimatePresence>
            { isOpen && (
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
                                                <a href={link.href} onClick={exitSubNavMenu} target={link.target} title={link.title} className={styles.linkMobile} aria-expanded={showSubNavigation ? "true" : "false"}>
                                                    {link.title?.toUpperCase()}
                                                </a>
                                            : 
                                                <Link field={link} onClick={exitSubNavMenu} target={link.target} title={link.title} activeClassName={styles.active} className={styles.linkMobile} aria-expanded={showSubNavigation ? "true" : "false"}>
                                                    {link.title?.toUpperCase()}
                                                </Link>
                                            }
                                        </>
                                    }
                                    {link.hasChildren && link?.subNavigationLinks && <SubNavigation navLink={link} subNavLinks={link.subNavigationLinks} linkComponent={Link} isOpen={showSubNavigation} exitSubNav={exitSubNavMenu} isMobile={true}/>}
                                </motion.li>
                            )
                        }
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

