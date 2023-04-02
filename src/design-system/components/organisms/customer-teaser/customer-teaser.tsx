import styles from './customer-teaser.module.css'
import { FeaturedProducts, IFeaturedProducts } from '../../molecules/featured-products/featured-products'
import { ISignupTeaser, SignupTeaser } from '../../molecules/signup-teaser/signup-teaser'


export interface ICustomerTeaser {
  featuredProducts: IFeaturedProducts
  signupTeaser: ISignupTeaser
  addToCart: CallableFunction
}

const CustomerTeaser = ({ featuredProducts, signupTeaser, addToCart }: ICustomerTeaser) => {
  return (
    <section className={styles.customerTeaser}>
        <FeaturedProducts {...featuredProducts} addToCart={addToCart} ></FeaturedProducts>
        <SignupTeaser {...signupTeaser}></SignupTeaser>
    </section>  
  )
}

export { CustomerTeaser }
