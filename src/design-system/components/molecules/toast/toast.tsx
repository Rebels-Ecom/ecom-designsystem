import React from 'react'
import styles from './toast.module.css'
import { CartProduct, ICartProduct } from '../cart-product/cart-product'
import cx from 'classnames'
import { notifications } from '@mantine/notifications'

export interface IToast {
    product: ICartProduct
}

function showToast(product: any){
    return notifications.show(
        {
            message: <Toast product={product}/>,
            withCloseButton: false,
            autoClose: 2000,
            style: { backgroundColor: '#ffffff', borderRadius: '0.25rem', minHeight:'16rem', width:'30rem', overflow: 'visible' },
            color:'orange'
        }
    )
}

function Toast({product} : IToast) {
    return (
        <div className={styles.notification}>
            <div className={cx('body', styles.heading)}>Lagd i kundvagnen</div>
            <hr className={styles.hr}></hr>
            <CartProduct {...product}></CartProduct>
        </div>
    )
}

export { Toast, showToast }