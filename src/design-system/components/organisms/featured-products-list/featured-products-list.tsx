import { ProductCard, IProductCard } from '../../molecules/product-card/product-card'
import styles from './featured-products-list.module.css'
import cx from 'classnames'
import { ProductCarousel } from '../../molecules/product-carousel/product-carousel'


export interface IProductCardList {
  productCards: Array<IProductCard>,
  addToCart: CallableFunction
}

const FeaturedProductsList = ({ productCards, addToCart }: IProductCardList) => {
  return (

      <ProductCarousel productCards={productCards} addToCart={addToCart}></ProductCarousel>
  )
}

export { FeaturedProductsList }
