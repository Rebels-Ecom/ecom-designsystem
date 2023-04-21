import React from 'react'
import { IDeliveryForm, DeliveryForm } from '../delivery-form/delivery-form'
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