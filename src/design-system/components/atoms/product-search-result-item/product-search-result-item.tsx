import React, { useState } from 'react'
import styles from './product-search-result-item.module.css'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { IProductVariant } from '../../molecules/product-variant/product-variant'
import { IconButton } from '../icon-button/icon-button'
import { IPicture, Picture } from '../picture/picture'
import { getProductPicture } from '../../../../helpers/picture-helper'

export interface IResultItem {
  productId: string
  productName: string
  productImage: IPicture
  productVariantList: Array<IProductVariant>
  onClick: CallableFunction
  className?: string
}

function ProductSearchResultItem({ productId, productName, productImage, productVariantList, onClick, className }: IResultItem) {
  const [showVariants, setShowVariants] = useState<boolean>(false)

  function handleOnClickProduct(id: string) {
    onClick(id)
  }
  function handleShowProductVariants() {
    setShowVariants(!showVariants)
  }

  const ProductItem = ({ productName, productImage }: { productName: string; productImage: IPicture }) => {
    return (
      <div className={styles.productItem}>
        <div className={styles.imageWrapper}>
          <Picture {...productImage} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} fallbackImageUrl={fallbackProductImageUrl} />
        </div>
        <span className={styles.serchResultItemText}>{productName}</span>
      </div>
    )
  }

  return (
    <div className={className ? className : ''}>
      <div className={styles.productItemWrapper}>
        <ProductItem productName={productName} productImage={productImage}></ProductItem>
        {productVariantList && productVariantList.length > 1 ? (
          <IconButton
            icon={showVariants ? 'icon-chevron-up' : 'icon-chevron-down'}
            isLink={false}
            onClick={handleShowProductVariants}
            size="large"
          ></IconButton>
        ) : (
          <IconButton icon={'icon-plus-circle'} isLink={false} onClick={() => handleOnClickProduct(productId)} size="large"></IconButton>
        )}
      </div>
      {showVariants && productVariantList && productVariantList.length > 1 && (
        <ul className={styles.productVariantsList}>
          {productVariantList.map((variant) => {
            const variantImage = getProductPicture(variant.variantId, variant.imageUrl)
            return (
              <li className={styles.productItemWrapper} key={variant.variantId}>
                <ProductItem productName={variant.variantName} productImage={variantImage}></ProductItem>
                <IconButton icon={'icon-plus-circle'} isLink={false} onClick={() => handleOnClickProduct(variant.variantId)} size="large"></IconButton>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export { ProductSearchResultItem }
