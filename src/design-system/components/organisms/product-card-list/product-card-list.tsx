import { ProductCard, TProductCard } from '../../molecules/product-card/product-card'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './product-card-list.module.css'
import cx from 'classnames'

export interface IProductCardList {
  productCards: Array<TProductCard>
  addToCart: CallableFunction
  className?: string
}

const ProductCardList = ({ productCards, addToCart, className }: IProductCardList) => {
  return (
    <AnimatePresence>
      <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={cx(styles.list, className ? className : '')}>
        {productCards.map((card: TProductCard, index) => (
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={`${card.product.partNo}${index}`} className={styles.listItem}>
            <ProductCard key={card.product.partNo} {...card} addToCart={addToCart} />
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  )
}

export { ProductCardList }
