import styles from './dropdown-list.module.css'
import { INavigationLink } from '../../../../types/links'
  
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
    <ul className={styles.linkList}>
        {links.map((link: INavigationLink, index) => (
            <li key={index} className={styles.listItem}>
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
            </li>
        ))}
    </ul>
  )
}

export { DropdownList }