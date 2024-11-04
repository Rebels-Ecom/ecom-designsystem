import { AnimatePresence, motion } from 'framer-motion';
import { CartProduct, ICartProduct } from "../cart-product/cart-product";
import styles from './mini-product-toast.module.css';
import { IProductCard, ProductCard } from '../product-card/product-card';
import { IconButton } from '../../atoms';
import { mediaQueryHelper } from '../../layouts';

export interface IMiniProductToast {
  cartProducts?: Array<IProductCard>;
  open: boolean;
  notification?: {
    quantity: number
    onClick: (data?: any) => void
  }
}

const MiniProductToast = ({
  cartProducts = [],
  open,
  notification
}: IMiniProductToast) => {
  const { isMobile, isTablet, isDesktop, isBigScreen } = mediaQueryHelper();

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: open ? 0 : '100%' }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      className={styles.miniProductToast}
    >
      {/* TODO: upgrade framer-motion? */}
      {/* <AnimatePresence mode='pop-layout'> */}
      {cartProducts?.length > 0 ? cartProducts.map((cartProduct, i) => (
        <motion.div
          key={`${cartProduct?.product?.partNo}-${i}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: i > (cartProducts?.length - 3) ? 'auto' : 0 }}
          exit={{ opacity: 0, height: 0 }}
          style={{ overflow: i < (cartProducts?.length - 2) ? 'hidden' : 'visible'}}
        >
          <ProductCard {...cartProduct} />
        </motion.div>
      )) : null}
      {/* </AnimatePresence> */}
      {cartProducts?.length > 2 && (notification?.quantity || notification?.quantity === 0) && (isDesktop || isBigScreen) && (
        <motion.div>
          <IconButton
            type="button"
            notification={notification.quantity}
            onClick={notification.onClick}
            icon="icon-shopping-cart"
            size="medium"
            className={styles.cartIcon}
            disabled={!cartProducts.some(x => x.loading)}
          />
        </motion.div>
      )}
    </motion.div>
  )
}

export {
  MiniProductToast
}
