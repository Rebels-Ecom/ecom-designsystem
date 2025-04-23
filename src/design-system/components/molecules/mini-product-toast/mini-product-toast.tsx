import { motion } from 'framer-motion'
import { IconButton, Loader } from '../../atoms'
import { mediaQueryHelper } from '../../layouts'
import { IProductCardMini, ProductCardMini } from '../product-card-mini/product-card-mini'
import styles from './mini-product-toast.module.css'

export interface IMiniProductToast {
  cartProducts?: Array<IProductCardMini>
  open: boolean
  loading?: boolean
  notification?: {
    quantity: number
    onClick: (data?: any) => void
  }
}

const MiniProductToast = ({ cartProducts = [], open, loading, notification }: IMiniProductToast) => {
  const { isMobile } = mediaQueryHelper()
  const numberOfProducts = cartProducts.length
  const productToShow = cartProducts?.[numberOfProducts - 1]

  return (
    <motion.div
      initial={isMobile ? { y: '-100%' } : { x: '110%' }}
      animate={isMobile ? { y: open ? 0 : '-100%' } : { x: open ? 0 : '110%' }}
      exit={isMobile ? { y: '-100%' } : { x: '110%' }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      className={styles.miniProductToast}
    >
      <motion.div className={styles.notification}>
        {(notification?.quantity || notification?.quantity === 0) && (
          <IconButton
            type="button"
            notification={notification.quantity}
            onClick={notification.onClick}
            icon="icon-shopping-cart"
            size="medium"
            noBorder
            isTransparent
            className={styles.cartIcon}
            disabled={loading}
          />
        )}
        {loading && <Loader visible position="relative" size="xs" />}
      </motion.div>
      {productToShow?.product ? (
        <motion.div
          key={productToShow?.product?.partNo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ProductCardMini {...productToShow} />
        </motion.div>
      ) : null}
    </motion.div>
  )
}

export { MiniProductToast }
