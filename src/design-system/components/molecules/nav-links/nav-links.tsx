import React from 'react'
import { Icon, IconButton } from '../../atoms'
import styles from './nav-links.module.css'

export interface INavLinks {
  onClickCart?: CallableFunction
}

const NavLinks = ({ onClickCart } : INavLinks) => {
  return (
    <div className={styles.navLinks}>
      <IconButton icon={'icon-heart'} isLink={false} linkComponent={undefined} size='medium' isTransparent></IconButton>
      <IconButton icon={'icon-shopping-cart'} isLink={false} linkComponent={undefined} onClick={onClickCart ? ()=>onClickCart() : ()=>{}} size='medium' isTransparent></IconButton>
    </div>
  )
}

export { NavLinks }
