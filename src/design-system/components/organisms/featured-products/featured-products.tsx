import { IProductCard } from '../../molecules/product-card/product-card'
import styles from './featured-products.module.css'
import { ILink } from '../../../../types/links'
import { ProductCarousel } from '../../molecules/product-carousel/product-carousel'
import { Icon } from '../../atoms/icon/icon'


export interface IFeaturedProducts {
  title: string
  link: ILink
  productCards: Array<IProductCard>
  addToCart: CallableFunction
  linkComponent: any
}

const FeaturedProducts = ({ title, link, productCards, addToCart, linkComponent: Link }: IFeaturedProducts) => {
  return (
    <section className={styles.featuredProductsList}>
      <h2 className={styles.title} >{title}</h2>
      <ProductCarousel productCards={productCards} addToCart={addToCart}></ProductCarousel>
      <div className={styles.linkWrapper}>
        {link.isExternal 
        ? (
          <a href={link.href} target={link.target} className='body'>
            {link.children}
          </a>
        ) : (
          <Link to={link.href}>{link.children}</Link>
        )}
        <Icon icon={'icon-plus-circle'}></Icon>
      </div>
    </section>  
  )
}

export { FeaturedProducts }
