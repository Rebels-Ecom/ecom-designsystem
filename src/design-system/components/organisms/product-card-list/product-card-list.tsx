import { ProductCard, TProductCard } from '../../molecules/product-card/product-card'
import styles from './product-card-list.module.css'
import cx from 'classnames'

export interface IProductCardList {
  productCards: Array<TProductCard>
  addToCart: CallableFunction
  className?: string
}

const ProductCardList = ({ productCards, addToCart, className }: IProductCardList) => {
  return (
    <ul className={cx(styles.list, className ? className : '')}>
      {productCards.map((card: TProductCard, index) => (
        <li key={`${card.product.productId}${index}`} className={styles.listItem}>
          <ProductCard key={card.product.productId} {...card} addToCart={addToCart} />
        </li>
      ))}
    </ul>
  )
}

export { ProductCardList }
