import React from 'react'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'
import { ProductCard, IProductCard } from '../../molecules/product-card/product-card'
import styles from './cart-product-list.module.css'
import cx from 'classnames'

export interface ICartProductList {
  productCards: Array<ICartProduct>
  
  className?: string
}

const CartProductList = ({ productCards, className }: ICartProductList) => {
  return (
    <ul className={cx(styles.list, className ? className : '')}>
      {productCards.map((card: ICartProduct) => (
        <li key={card.product.productId} className={styles.listItem}>
          <CartProduct key={card.product.productId} {...card} />
        </li>
      ))}
    </ul>
  )
}

export { CartProductList }
