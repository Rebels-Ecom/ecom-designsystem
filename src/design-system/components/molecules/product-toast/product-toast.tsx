import React from 'react'
import styles from './product-toast.module.css'
import cx from 'classnames'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'
import { Text } from '../../atoms/text/text'
import { motion } from 'framer-motion'

export type TToastPosition = 'top-left' | 'top-right'
export interface IProductToast {
  cartProduct: ICartProduct
  children?: React.ReactNode
  position?: TToastPosition
  className?: string
  label?: string
}

function ProductToast({ cartProduct, children, position = 'top-left', className, label }: IProductToast) {
  if (!cartProduct) return null

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: '100%' }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      className={cx(className ? className : styles.toastContainer, styles[position])}
    >
      <div className={styles.toast}>
        <div className={styles.header}>
          {label && (
            <Text align="center" weight="bold">
              {label}
            </Text>
          )}
        </div>
        <CartProduct {...cartProduct}></CartProduct>
        {children && <hr className={styles.divider} />}
        {children}
      </div>
    </motion.div>
  )
}

export { ProductToast }
