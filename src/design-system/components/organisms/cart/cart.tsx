import React from 'react'
import styles from './cart.module.css'
import { CartOrderDetails, ICartOrderDetails } from '../cart-order-details/cart-order-details'
import { IDeliveryForm, DeliveryForm } from '../delivery-form/delivery-form'
import { CartDeliveryDetails, ICartDeliveryDetails } from '../cart-delivery-details/cart-delivery-details'

export interface ICart {
  deliveryDetails: ICartDeliveryDetails
  cartOrderDetails: ICartOrderDetails
}

function Cart({ deliveryDetails, cartOrderDetails }: ICart) {
  return (
    <div className={styles.cart}>
        <CartDeliveryDetails {...deliveryDetails} className={styles.deliveryDetails} ></CartDeliveryDetails>
        <CartOrderDetails {...cartOrderDetails} className={styles.orderDetails}></CartOrderDetails>
    </div>
  )
}

export { Cart }