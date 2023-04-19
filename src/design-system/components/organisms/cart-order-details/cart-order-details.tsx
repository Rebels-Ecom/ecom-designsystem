import React from 'react'
import { CartProductList, ICartProductList } from '../cart-product-list/cart-product-list'
import { IProductCardList, ProductCardList } from '../product-card-list/product-card-list'
import styles from './cart-order-details.module.css'
import cx from 'classnames'

export interface ICartOrderDetails {
  heading: string
  totalAmount: string,
  productsNumber: number
  text: string
  cartProductsList: ICartProductList
  onClickRemoveProduct: CallableFunction
  suggestedProductsList: IProductCardList
  addSuggestedProductToCart: CallableFunction
  className?: string
}

function CartOrderDetails({heading, totalAmount, productsNumber, text, cartProductsList, onClickRemoveProduct, suggestedProductsList, addSuggestedProductToCart, className}: ICartOrderDetails) {
  return (
    <div className={cx(styles.cartOrderDetails, className ? className : '')}>
      <div className={styles.contentWrapper}>
        <div className={styles.headingWrapper}><h3>{heading}</h3></div>
        <p className={styles.text}> <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} ></p> Du har totalt {productsNumber} olika produkter i din kundvagn. </p>
        <CartProductList className={styles.productListWrapper} {...cartProductsList} onRemoveProduct={onClickRemoveProduct}/>
        <div className={styles.headingWrapper}>Total:<h3>{totalAmount}kr</h3></div>
        <ProductCardList  className={styles.productListWrapper} {...suggestedProductsList} addToCart={addSuggestedProductToCart} />
      </div>
    </div>
  )
}

export { CartOrderDetails }