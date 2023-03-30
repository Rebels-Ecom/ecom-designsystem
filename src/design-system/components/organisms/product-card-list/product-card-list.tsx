import { ProductCard, IProductCard } from '../../molecules/product-card/product-card'
import styles from './product-card-list.module.css'
import cx from 'classnames'

export type TMaxColumns = 3 | 4

export interface IProductCardList {
  productCards: Array<IProductCard>
  maxColumns: TMaxColumns
  addToCart: CallableFunction
}

function getListItemMaxColumns(maxColumns: TMaxColumns) {
  return maxColumns === 4 ? styles.maxColumnsFour : styles.maxColumnsThree
}

const ProductCardList = ({ productCards, maxColumns, addToCart }: IProductCardList) => {
  return (
    <ul className={styles.list}>
      {productCards.map((card: IProductCard) => (
        <li key={card.productId} className={cx(styles.listItem, getListItemMaxColumns(maxColumns))}>
          <ProductCard key={card.productId} {...card} addToCart={addToCart}/>
        </li>
      ))}
    </ul>
  )
}

export { ProductCardList }
