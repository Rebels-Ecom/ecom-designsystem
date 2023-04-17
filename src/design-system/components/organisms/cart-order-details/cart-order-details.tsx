import React from 'react'
import { Button, IButton } from '../../atoms/button/button'
import { SlidingSidebar } from '../../molecules/sliding-sidebar/sliding-sidebar'
import { CartProductList, ICartProductList } from '../cart-product-list/cart-product-list'
import { IProductCardList, ProductCardList } from '../product-card-list/product-card-list'
import styles from './cart-order-details.module.css'

export interface ICartOrderDetails {
  isOpen: boolean
  onClose: CallableFunction
  heading: string
  totalAmount: string,
  productsNumber: number
  text: string
  cartProductsList: ICartProductList
  suggestedProductsList: IProductCardList
  addSuggestedProductToCart: CallableFunction
}

function CartOrderDetails({isOpen, onClose, heading, totalAmount, productsNumber, text, cartProductsList, suggestedProductsList, addSuggestedProductToCart}: ICartOrderDetails) {
  return (
    <div className={styles.cartOrderDetails}>
        <div className={styles.headingWrapper}><h3>{heading}</h3><h3>{totalAmount}kr</h3></div>
        <p className={styles.text}> <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} ></p> Du har totalt {productsNumber} olika produkter i din kundvagn. </p>
        <CartProductList className={styles.productListWrapper} {...cartProductsList}/>
        <ProductCardList  className={styles.productListWrapper} {...suggestedProductsList} addToCart={addSuggestedProductToCart} />
    </div>
  )
}

export { CartOrderDetails }