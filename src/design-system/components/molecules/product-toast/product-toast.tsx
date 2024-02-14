import React, { useRef, useCallback } from 'react'
import styles from './product-toast.module.css'
import cx from 'classnames'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'
import { Text } from '../../atoms/text/text'
import { motion } from 'framer-motion'
import { IconButton } from '../../atoms'
import { useOnClickOutside } from '../../../hooks'

export type TToastPosition = 'top-left' | 'top-right'
export interface IProductToast {
  cartProduct: ICartProduct
  notification?: {
    quantity: number;
    onClick: (data?: any) => void;
  };
  setIsOpen?: (isOpen: boolean) => void
  children?: React.ReactNode
  position?: TToastPosition
  className?: string
  label?: string
}

function ProductToast({
  cartProduct,
  setIsOpen,
  children,
  position = 'top-left',
  className,
  label,
  notification
}: IProductToast) {
  const productToastRef = useRef<HTMLDivElement | null>(null)

  const onClose = useCallback(() => {
    setIsOpen && setIsOpen(false)
  }, [setIsOpen])

  if (!cartProduct) return null

  useOnClickOutside({ ref: productToastRef, onClose })

  return (
    <motion.div
      ref={productToastRef}
      animate={{ x: 0 }}
      initial={{ x: '100%' }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      className={cx(className ? className : styles.toastContainer, styles[position])}
    >
      <div className={styles.toast}>
        {setIsOpen && (
          <IconButton
            type="button"
            className={styles.iconBtnClose}
            onClick={() => setIsOpen(false)}
            icon="icon-x"
            size="large"
            isTransparent
            noPadding
            noBorder
          />
        )}
        <div className={styles.header}>
          {notification?.quantity && (
            <IconButton
              type="button"
              notification={notification.quantity ?? 0}
              onClick={notification.onClick}
              icon="icon-shopping-cart"
              size="medium"
              className={styles.cartIcon}
              disabled={cartProduct.loading}
            />
          )}
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
