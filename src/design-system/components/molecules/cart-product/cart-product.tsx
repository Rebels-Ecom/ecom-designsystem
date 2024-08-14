import React from 'react'
import styles from './cart-product.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { IProduct } from '../../../../types/product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import cx from 'classnames'
import { Picture } from '../../atoms/picture/picture'
import { IconButton, TIconButton } from '../../atoms/icon-button/icon-button'
import { Loader } from '../../atoms/loader/loader'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'

export interface ICartProduct extends IProduct {
  product: IProduct
  iconButton?: TIconButton
  onClickRemoveProduct?: CallableFunction
  className?: string
  loading: boolean
  linkComponent?: any
  hidePrice?: boolean;
  onClick?: CallableFunction;
}

const CartProduct = ({
  product,
  iconButton,
  onClickRemoveProduct,
  className,
  loading = false,
  linkComponent: Link,
  hidePrice,
  onClick
}: ICartProduct) => {
  const {
    partNo,
    productName,
    productUrl,
    primaryImageUrl,
    country,
    packaging,
    priceStr,
    quantity,
    salesUnit,
    itemNumberPerSalesUnit,
    totalPrice,
    currencyLabel,
    unitLabel
  } = product
  const productImage = getProductPicture(partNo, primaryImageUrl, '64')

  function handleRemoveProduct(id: string) {
    onClickRemoveProduct && onClickRemoveProduct(id)
  }

  return (
    <div className={cx(styles.cartProduct, className ? className : '')}>
      {loading ? (
        <Loader visible={loading} text={'Loading'} />
      ) : (
        <>
          <div className={styles.imageWrapper}>
            <Picture
              {...productImage}
              classNamePicture={styles.cardPicture}
              classNameImg={`${styles.cardImage}`}
              fallbackImageUrl={fallbackProductImageUrl}
            />
          </div>

          <div className={styles.contentWrapper}>
            {productUrl && Link ? (
              <Link to={productUrl} href={productUrl} className={styles.headingWrapper} onClick={onClick}>
                <h5 className={styles.heading}>{productName}</h5>
              </Link>
            ) : (
              <h5 className={styles.heading}>{productName}</h5>
            )}
            <p className={cx(styles.textPurple, 'bodyS')}>
              {hidePrice ?
                packaging :
                `${packaging ? `${packaging}:` : ''} ${priceStr ? `${priceStr} ${currencyLabel ?? ''}/${unitLabel ? unitLabel.toLowerCase() : ''}` : ''}`
              }
            </p>
            
            {(country !== '' || partNo !== '') && (
              <p className={cx(styles.textGray, 'bodyS')}>
                {`${partNo ? `Art.nr. ${partNo}` : ''} ${country && `- ${country}`}`}
              </p>
            )}
            <ProductQuantityInput
              className={styles.quantityInput}
              salesUnit={salesUnit}
              itemNumberPerSalesUnit={itemNumberPerSalesUnit}
              totalPrice={totalPrice}
              quantity={quantity}
              quantityInputId={partNo}
              disabled
              disabledNoBorder
              hidePrice={hidePrice}
            />
          </div>
          {onClickRemoveProduct && iconButton && (
            <div className={styles.iconLink}>
              <IconButton
                {...iconButton}
                type="button"
                onClick={() => handleRemoveProduct(partNo)}
                name='Remove product'
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export { CartProduct }
