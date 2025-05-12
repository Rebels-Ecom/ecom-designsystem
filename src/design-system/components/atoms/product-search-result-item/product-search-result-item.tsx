import { useState } from 'react'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { IResult } from '../../molecules/product-search/product-search'
import { IconButton } from '../icon-button/icon-button'
import { IconWithTooltip } from '../icon-with-tooltip/icon-with-tooltip'
import { Icon } from '../icon/icon'
import { IPicture, Picture } from '../picture/picture'
import styles from './product-search-result-item.module.css'

export interface IResultItem extends IResult {
  onClick: CallableFunction
  className?: string
}

function ProductSearchResultItem({
  partNo,
  productName,
  productVariantList,
  onClick,
  className,
  primaryImageUrl,
  isSeller,
  sellerTooltip,
}: IResultItem) {
  const [showVariants, setShowVariants] = useState<boolean>(false)
  const productImage = getProductPicture(partNo, primaryImageUrl, '54')

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
          <Picture
            {...productImage}
            classNamePicture={styles.cardPicture}
            classNameImg={`${styles.cardImage}`}
            fallbackImageUrl={fallbackProductImageUrl}
          />
        </div>
        <span className={styles.serchResultItemText}>{productName}</span>
      </div>
    )
  }

  return (
    <div className={className ? className : ''}>
      <div className={styles.productItemWrapper}>
        <ProductItem productName={productName} productImage={productImage}></ProductItem>
        {isSeller && (
          <>
            {sellerTooltip ? (
              <IconWithTooltip content={sellerTooltip} icon={{ icon: 'icon-eye' }} />
            ) : (
              <Icon icon={'icon-eye'} size={'large'} />
            )}
          </>
        )}
        {productVariantList && productVariantList.length > 1 ? (
          <IconButton
            type="button"
            icon={showVariants ? 'icon-chevron-up' : 'icon-chevron-down'}
            onClick={handleShowProductVariants}
            size="large"
            isTransparent
            noBorder
            noPadding
          />
        ) : (
          <IconButton
            type="button"
            icon="icon-plus"
            onClick={() => handleOnClickProduct(partNo)}
            size="large"
            isTransparent
            noBorder
            noPadding
          />
        )}
      </div>
      {showVariants && productVariantList && productVariantList.length > 1 && (
        <ul className={styles.productVariantsList}>
          {productVariantList.map((variant) => {
            return (
              <li className={styles.productItemWrapper} key={variant.variantId}>
                <ProductItem productName={variant.variantName} productImage={variant.image}></ProductItem>
                <div className={styles.variantIcons}>
                  {variant.sellerOnly && (
                    <>
                      {variant.sellerOnlyTooltipText ? (
                        <IconWithTooltip content={variant.sellerOnlyTooltipText} icon={{ icon: 'icon-eye' }} />
                      ) : (
                        <Icon icon={'icon-eye'} size={'large'} />
                      )}
                    </>
                  )}
                  <IconButton
                    icon="icon-plus"
                    type="button"
                    onClick={() => handleOnClickProduct(variant.variantId)}
                    size="large"
                    isTransparent
                    noBorder
                    noPadding
                  />
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export { ProductSearchResultItem }
