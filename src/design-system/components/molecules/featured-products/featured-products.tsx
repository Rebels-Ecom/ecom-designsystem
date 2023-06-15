import { IProductCard, ProductCard } from '../product-card/product-card'
import styles from './featured-products.module.css'
import { ProductCarousel } from '../product-carousel/product-carousel'
import { Below } from '../../layouts/breakpoints/below'
import { Above } from '../../layouts/breakpoints/above'
import { Icon } from '../../atoms/icon/icon'
import { ILink } from '../../../../types/links'

export type TProductCardsNumber = '3' | '4'

export interface IFeaturedProducts {
    title?: string
    link?: ILink
    productCards: Array<IProductCard>
    addToCart: CallableFunction
    productCardsNumber?: TProductCardsNumber
    linkComponent: any
}

function renderProductCarousel(products: Array<IProductCard>, addProductToCart: CallableFunction){
    return <ProductCarousel productCards={products} addToCart={addProductToCart}></ProductCarousel>
}

function renderProductList(products: Array<IProductCard>, addProductToCart: CallableFunction){
    return products.map((productCard: IProductCard, index: number) => <ProductCard key={index} {...productCard} addToCart={addProductToCart} />)
}

const FeaturedProducts = ({ title, link, productCards, addToCart, productCardsNumber='3', linkComponent: Link }: IFeaturedProducts) => {
    const products = productCards?.slice(0, parseInt(productCardsNumber))
    if(!products)
        return null
    return (
        <div className={styles.featuredProducts}>
            {title && <h2 className={styles.title} >{title}</h2>}
            <div className={styles.productsWrapper}>
                <Below breakpoint="lg">{(matches: any) => matches && <>{renderProductCarousel(products, addToCart)}</>}</Below>
                <Above breakpoint="lg">{(matches: any) => matches && <>{renderProductList(products, addToCart)}</>}</Above>
            </div>
            {link && <div className={styles.linkWrapper}>
                {link.isExternal 
                ? (
                <a href={link.href} target={link.target} className='body'>
                    {link.children} <Icon icon={'icon-plus-circle'}></Icon>
                </a>
                ) : (
                <Link to={link.href}>{link.children} <Icon icon={'icon-plus-circle'}></Icon></Link>
                )}
            </div>}
        </div>  
    )
}

export { FeaturedProducts }
