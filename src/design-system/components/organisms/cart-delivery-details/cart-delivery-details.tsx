import React from 'react'
import { IDeliveryForm, DeliveryForm } from '../delivery-form/delivery-form'
import styles from './cart-delivery-details.module.css'
import cx from 'classnames'
import { Button } from '../../atoms/button/button'

export interface ICartDeliveryDetails {
  deliveryForm: IDeliveryForm
  onClick: ()=> void
  className?: string
}

function CartDeliveryDetails({ deliveryForm, onClick, className }: ICartDeliveryDetails) {
  return (
    <div className={cx(styles.cartDeliveryDetails, className ? className : '')}>
      <div className={styles.contentWrapper}>
        <DeliveryForm {...deliveryForm}></DeliveryForm>
        <Button className={styles.button} children={'Lägg beställning'} type={'button'} surface={'primary'} onClick={onClick} ></Button>
      </div>
    </div>
  )
}

export { CartDeliveryDetails }