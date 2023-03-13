import React from 'react'
import { Icon } from '../../atoms'
import styles from './nav-links.module.css'

const NavLinks = () => {
  return (
    <div className={styles.navLinks}>
      <Icon icon="icon-heart" className={styles.navLinksIcon} />
      <Icon icon="icon-shopping-cart" className={styles.navLinksIcon} />
    </div>
  )
}

export { NavLinks }
