import React from 'react'
import styles from './dropdown-list.module.css'
import { INavigationLink } from '../../../../types/links'
import { AnimatePresence, motion } from 'framer-motion'

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

export interface IDropdownList {
    links: Array<INavigationLink>
    linkComponent: any
}

function DropdownList({links, linkComponent: Link} : IDropdownList) {
  return (
    <AnimatePresence>
        <motion.ul className={styles.linkList} variants={variants} exit="closed" initial="closed" animate="open">
            {links.map((link: INavigationLink, index) => (
                <motion.li key={index} className={styles.listItem} variants={itemVariants}>
                    {link.isExternal 
                    ? 
                        <a href={link.href} target={link.target} title={link.title} className={styles.linkItem}>
                            {link.title?.toUpperCase()}
                        </a>
                    : 
                        <Link field={link} target={link.target} title={link.title} activeClassName={styles.active} className={styles.linkItem}>
                            {link.title?.toUpperCase()}
                        </Link>
                    }
                </motion.li>
            ))}
        </motion.ul>
    </AnimatePresence>
  )
}

export { DropdownList }