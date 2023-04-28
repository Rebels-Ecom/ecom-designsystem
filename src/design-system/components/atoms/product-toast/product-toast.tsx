import React from 'react'
import styles from './product-toast.module.css'
import cx from 'classnames'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'

export type TToastPosition = 'top-left' | 'top-right'
export interface IProductToast {
    cartProduct: ICartProduct
    position?: TToastPosition
    className?: string
}

function ProductToast({ cartProduct, position='top-left', className } : IProductToast) {

    if(!cartProduct)
        return null

    return (
        <div className={cx(className ? className : styles.toastContainer, styles[position])}>
            <div className={styles.toast}>
                <CartProduct {...cartProduct}></CartProduct>
            </div>
        </div>
    )
}

export { ProductToast }