import { IProductCard } from '../../molecules/product-card/product-card'
import styles from './featured-products-carousel.module.css'
import { ILink } from '../../../../types/links'
import { ProductCarousel } from '../../molecules/product-carousel/product-carousel'
import { Icon } from '../../atoms/icon/icon'


export interface IFeaturedProductsCarousel {
  title: string
  link: ILink
  productCards: Array<IProductCard>
  addToCart: CallableFunction
  linkComponent: any
}

const FeaturedProductsCarousel = ({ title, link, productCards, addToCart, linkComponent: Link }: IFeaturedProductsCarousel) => {
  return (
    <section>
      <h2 className={styles.title} >{title}</h2>
      <ProductCarousel productCards={productCards} addToCart={addToCart}></ProductCarousel>
      <div className={styles.linkWrapper}>
        {link.isExternal 
        ? (
          <a href={link.href} target={link.target} className='body'>
            {link.children} <Icon icon={'icon-plus-circle'}></Icon>
          </a>
        ) : (
          <Link to={link.href}>{link.children} <Icon icon={'icon-plus-circle'}></Icon></Link>
        )}
        
      </div>
    </section>  
  )
}

export { FeaturedProductsCarousel }
