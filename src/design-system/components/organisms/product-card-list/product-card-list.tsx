import { ProductCard, IProductCard } from '../../molecules/product-card/product-card'
import styles from './product-card-list.module.css'
import cx from 'classnames'

export interface IProductCardList {
  productCards: Array<IProductCard>
  addToCart: CallableFunction
  className?: string
}

const ProductCardList = ({ productCards, addToCart, className }: IProductCardList) => {
  return (
    <ul className={cx(styles.list, className ? className : '')}>
      {productCards.map((card: IProductCard) => (
        <li key={card.productId} className={styles.listItem}>
          <ProductCard key={card.productId} {...card} addToCart={addToCart}/>
        </li>
      ))}
    </ul>
  )
}

export { ProductCardList }
