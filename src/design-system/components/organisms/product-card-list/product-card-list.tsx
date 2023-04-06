import { ProductCard, IProductCard } from '../../molecules/product-card/product-card'
import styles from './product-card-list.module.css'

export interface IProductCardList {
  productCards: Array<IProductCard>
  addToCart: CallableFunction
}

const ProductCardList = ({ productCards, addToCart }: IProductCardList) => {
  return (
    <ul className={styles.list}>
      {productCards.map((card: IProductCard) => (
        <li key={card.productId} className={styles.listItem}>
          <ProductCard key={card.productId} {...card} addToCart={addToCart}/>
        </li>
      ))}
    </ul>
  )
}

export { ProductCardList }
