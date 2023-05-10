import React from 'react'
import styles from './sub-navigation.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { INavigationLink} from '../../../../types/links'
import { NavigationList } from '../navigation-list/navigation-list'
import { Icon } from '../../atoms/icon/icon'
import cx from 'classnames'

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

export interface ISubNavigation {
    navLink: INavigationLink
    subNavLinks: Array<INavigationLink>
    isOpen: boolean
    exitSubNav?: CallableFunction
    isMobile?: boolean
    linkComponent?: any
}

function SubNavigation({navLink, subNavLinks, linkComponent: Link, isOpen, exitSubNav, isMobile}: ISubNavigation) {
    return (
        <>
            { isMobile 
                ? 
                <div className={cx(styles.subNavDropdownMobile, isOpen ? styles.isVisible : '')}>
                    <div className={styles.linkList}>
                        <div className={styles.subNavHeading}>
                            <button className={styles.subNavBackBtn} onClick={exitSubNav ? ()=>exitSubNav(navLink) : ()=>{}}>
                                <Icon icon={'icon-chevron-left'} className={styles.subNavBackArrow}></Icon>
                                {navLink?.title?.toUpperCase()}
                            </button>
                            {navLink.isExternal 
                                ? 
                                <a href={navLink.href} target={navLink.target} className={cx('bodyS', styles.subNavShowAllBtn)}>
                                    {navLink.subNavBtnLabel ? navLink.subNavBtnLabel : 'Visa alla sorter'}
                                </a>
                                : 
                                <Link field={navLink} target={navLink.target} className={cx('bodyS', styles.subNavShowAllBtn)}>
                                    {navLink.subNavBtnLabel ? navLink.subNavBtnLabel : 'Visa alla sorter'}
                                </Link>
                            }
                        </div>
                        <NavigationList links={subNavLinks} linkComponent={Link} mobile isOpen={isOpen} />
                    </div>
                </div>
                :
                <div className={cx(styles.subNavDropdownDesktop, isOpen ? styles.isVisible : '')}>
                    <AnimatePresence>
                        { isOpen && 
                            <motion.ul className={cx(styles.subNavList)} variants={variants} exit="closed" initial="closed" animate="open">
                                {subNavLinks.map((link: INavigationLink, index: number)=>(
                                    <motion.li key={index} className={styles.subNavItemWrapper} variants={itemVariants}>
                                        <div className={styles.listItem}>
                                            { link.isExternal 
                                                ? 
                                                <a href={link.href} target={link.target} title={link.title}>
                                                    {link.title?.toUpperCase()}
                                                </a>
                                                : 
                                                <Link field={link} target={link.target} title={link.title} activeClassName={styles.active}>
                                                    {link.title?.toUpperCase()}
                                                </Link>
                                            }
                                        </div>
                                    </motion.li>
                                ))} 
                            </motion.ul>
                        }
                    </AnimatePresence>
                </div>   
            }
        </>  
    )
}

export { SubNavigation }

