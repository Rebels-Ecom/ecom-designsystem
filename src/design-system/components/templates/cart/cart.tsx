import React from 'react'
import styles from './cart.module.css'
import { CartOrderDetails, ICartOrderDetails } from '../../organisms/cart-order-details/cart-order-details'
import { CartDeliveryDetails, ICartDeliveryDetails } from '../../organisms/cart-delivery-details/cart-delivery-details'

export interface ICart {
  children: React.ReactNode
  // deliveryDetails: ICartDeliveryDetails
  // cartOrderDetails: ICartOrderDetails
  // addProductToCart: CallableFunction
  // removeProductFromCart: CallableFunction
}

function Cart({ children }: ICart) {
  return (
    <div className={styles.cart}>
      {children}
    </div>
  )
}

export { Cart }