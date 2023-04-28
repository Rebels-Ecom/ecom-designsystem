import React from 'react'
import styles from './product-toast.module.css'
import cx from 'classnames'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'
import { Text } from '../text/text'

export type TToastPosition = 'top-left' | 'top-right'
export interface IProductToast {
  cartProduct: ICartProduct
  position?: TToastPosition
  className?: string
  label?: string
}

function ProductToast({ cartProduct, position = 'top-left', className, label }: IProductToast) {
  if (!cartProduct) return null

  return (
    <div className={cx(className ? className : styles.toastContainer, styles[position])}>
      <div className={styles.toast}>
        <div className={styles.header}>
          {label && (
            <Text align="center" weight="bold">
              {label}
            </Text>
          )}
        </div>
        <CartProduct {...cartProduct}></CartProduct>
      </div>
    </div>
  )
}

export { ProductToast }
