import React, { useState } from 'react'
import styles from './product-search-result-item.module.css'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { IProductVariant } from '../../molecules/product-variant/product-variant'
import { IconButton } from '../icon-button/icon-button'
import { IPicture, Picture } from '../picture/picture'
import { getProductPicture } from '../../../../helpers/picture-helper'

export interface IResultItem {
  partNo: string
  productName: string
  productImage: IPicture
  productVariantList: Array<IProductVariant>
  onClick: CallableFunction
  className?: string
}

function ProductSearchResultItem({ partNo, productName, productImage, productVariantList, onClick, className }: IResultItem) {
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
            type="button"
            icon={showVariants ? 'icon-chevron-up' : 'icon-chevron-down'}
            onClick={handleShowProductVariants}
            size="large"
            isTransparent
            noBorder
          ></IconButton>
        ) : (
          <IconButton type="button" icon={'icon-plus-circle'} onClick={() => handleOnClickProduct(partNo)} size="large" isTransparent noBorder />
        )}
      </div>
      {showVariants && productVariantList && productVariantList.length > 1 && (
        <ul className={styles.productVariantsList}>
          {productVariantList.map((variant) => {
            return (
              <li className={styles.productItemWrapper} key={variant.variantId}>
                <ProductItem productName={variant.variantName} productImage={variant.image}></ProductItem>
                <IconButton icon="icon-plus-circle" type="button" onClick={() => handleOnClickProduct(variant.variantId)} size="large" />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export { ProductSearchResultItem }
