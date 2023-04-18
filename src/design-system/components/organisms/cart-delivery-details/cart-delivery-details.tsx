import React from 'react'
import { Button, IButton } from '../../atoms/button/button'
import { SlidingSidebar } from '../../molecules/sliding-sidebar/sliding-sidebar'
import { CartProductList, ICartProductList } from '../cart-product-list/cart-product-list'
import { IDeliveryForm, DeliveryForm } from '../delivery-form/delivery-form'
import { IProductCardList, ProductCardList } from '../product-card-list/product-card-list'
import styles from './cart-delivery-details.module.css'
import cx from 'classnames'

export interface ICartDeliveryDetails {
  deliveryForm: IDeliveryForm
  className?: string
}

function CartDeliveryDetails({ deliveryForm, className }: ICartDeliveryDetails) {
  return (
    <div className={cx(styles.cartDeliveryDetails, className ? className : '')}>
      <div className={styles.contentWrapper}>
        <DeliveryForm {...deliveryForm}></DeliveryForm>
      </div>
    </div>
  )
}

export { CartDeliveryDetails }