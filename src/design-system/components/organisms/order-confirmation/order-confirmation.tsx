import React from 'react'
import styles from './order-confirmation.module.css'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'
import { CartProductList, ICartProductList } from '../cart-product-list/cart-product-list'
import { Icon } from '../../atoms/icon/icon'
import cx from 'classnames'
import { Button } from '../../atoms/button/button'

export interface IOrderConfirmationItem {
  label: string
  value: string
  isTotal?: boolean
}

export interface IOrderConfirmation {
    title?: string
    text?: string
    orderNumberLabel?: string
    orderNumber: string
    emailLabel?: string
    email?: string
    deliveryDetailsLabel?:string
    deliveryDetails: Array<IOrderConfirmationItem>
    pricingDetails: Array<IOrderConfirmationItem>
    paymentDetails: Array<IOrderConfirmationItem>
    totalAmountLabel?: string
    deliveryDateLabel: string
    deliveryDate: string
    itemsList: Array<ICartProduct>
    className?: string
}

function renderDetails(detailItems: Array<IOrderConfirmationItem>, label?:string, withBackground?:boolean){
  return(
    <div className={cx('body', styles.detailItemWrapper, withBackground && styles.withBackground)}>
          {label && <p className={styles.detailItem}><b>{label}</b></p>}
          {
            detailItems.map((item: IOrderConfirmationItem)=>
              <p className={styles.detailItem}>
                <span>{item.label}</span>
                <span className={item.isTotal ? styles.totalAmount : ''}>{item.value}</span>
              </p>)
          }
        </div>
  )
}

function OrderConfirmation(
  {
    title = 'Grattis', 
    text = 'Din order är nu registrerad & kommer att förbereds för packning', 
    orderNumberLabel, 
    orderNumber, 
    emailLabel, 
    email, 
    deliveryDetailsLabel = 'Leveransuppgifter',
    totalAmountLabel = 'Totalt',
    deliveryDetails,
    pricingDetails,
    paymentDetails,
    deliveryDateLabel,
    deliveryDate,
    itemsList,
    className
  } : IOrderConfirmation) {

    console.log('ITEMS LIST', itemsList)

  return (
    <div className={styles.orderConfirmation}>
      <h3 className={styles.title}>{title}</h3>
      <p>{text}</p>
      {orderNumberLabel && orderNumber && 
        <div className={styles.orderNumberBox}>
          <span>{orderNumberLabel}{orderNumber}</span>
          <Icon icon={'icon-check-circle'} className={styles.checkIcon}></Icon>
        </div>
      }
      { emailLabel && email && <p className={'body'}>{emailLabel}<b>{email}</b></p> }
      { deliveryDetails && deliveryDetails.length>0 && renderDetails(deliveryDetails, deliveryDetailsLabel) }
      { pricingDetails && pricingDetails.length>0 && renderDetails(pricingDetails) }
      { paymentDetails && paymentDetails.length>0 && renderDetails(paymentDetails, totalAmountLabel, true) }
      { deliveryDateLabel && deliveryDate && 
        <div className={styles.deliveryDateWrapper}>
          <span className={'body'}>{deliveryDateLabel}</span>
          <Button type={'button'} surface={'secondary'} iconRight={{icon:'icon-calendar'}} rounded size='small'>{deliveryDate}</Button>
        </div>
      }
      {itemsList && itemsList.length>0 && 
        <CartProductList className={styles.itemsList}>
          { itemsList.map( (product: ICartProduct) => <CartProduct key={Math.random()} {...product} onClickRemoveProduct={()=>{}} ></CartProduct>) }
        </CartProductList>
      }
        
    </div>
  )
}

export { OrderConfirmation }