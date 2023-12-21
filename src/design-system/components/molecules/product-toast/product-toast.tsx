import React from 'react'
import styles from './product-toast.module.css'
import cx from 'classnames'
import { CartProduct, ICartProduct } from '../../molecules/cart-product/cart-product'
import { ProductCard, IProductCard } from '../../molecules/product-card/product-card'
import { Text } from '../../atoms/text/text'
import { AnimatePresence, motion } from 'framer-motion'
import { ContentWrapper } from '../../layouts'
import { GroupWrapper } from '../group-wrapper/group-wrapper'

export type TToastPosition = 'top-left' | 'top-right'
export interface IProductToast {
  cartProduct: ICartProduct
  recommendedProducts?: Array<IProductCard>
  recommendedProductsTitle?: string
  position?: TToastPosition
  className?: string
  label?: string
}

function renderRecommendedProducts({
  recommendedProducts,
  recommendedProductsTitle,
}: {
  recommendedProducts: Array<IProductCard>
  recommendedProductsTitle: string
}) {
  return (
    <ContentWrapper>
      <div className={styles.header}>
        {recommendedProductsTitle && (
          <Text align="center" weight="bold">
            {recommendedProductsTitle}
          </Text>
        )}
      </div>
      <GroupWrapper spacing="lg" direction="column">
        {recommendedProducts.map((rec: any) => (
          <ProductCard {...rec}></ProductCard>
        ))}
      </GroupWrapper>
    </ContentWrapper>
  )
}

function ProductToast({ cartProduct, recommendedProducts, recommendedProductsTitle = '', position = 'top-left', className, label }: IProductToast) {
  if (!cartProduct) return null

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: '100%' }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
      className={cx(className ? className : styles.toastContainer, styles[position])}
    >
      <div className={styles.toast}>
        <div className={styles.header}>
          {label && (
            <Text align="center" weight="bold">
              {label}
            </Text>
          )}
        </div>
        <CartProduct {...cartProduct}></CartProduct>
        {recommendedProducts && renderRecommendedProducts({ recommendedProducts, recommendedProductsTitle })}
      </div>
    </motion.div>
  )
}

export { ProductToast }
