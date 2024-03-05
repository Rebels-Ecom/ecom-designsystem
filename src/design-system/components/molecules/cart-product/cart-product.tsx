import React from 'react'
import styles from './cart-product.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { IProduct } from '../../../../types/product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import cx from 'classnames'
import { Picture } from '../../atoms/picture/picture'
import { IconButton, TIconButton } from '../../atoms/icon-button/icon-button'
import { Loader } from '../../atoms/loader/loader'
import { convertNumToStr } from '../../../../helpers/format-helper'

export interface ICartProduct extends IProduct {
  product: IProduct
  iconButton?: TIconButton
  onClickRemoveProduct?: CallableFunction
  className?: string
  loading: boolean
  linkComponent?: any
}

const CartProduct = ({ product, iconButton, onClickRemoveProduct, className, loading = false, linkComponent: Link }: ICartProduct) => {
  const { partNo, productName, productUrl, primaryImageUrl, country, packaging, priceStr, quantity, salesUnit, itemNumberPerSalesUnit, pricePerUnit, totalPrice } = product
  const productImage = getProductPicture(partNo, primaryImageUrl, '96')

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
            <Picture {...productImage} classNamePicture={styles.cardPicture} classNameImg={`${styles.cardImage}`} />
          </div>

          <div className={styles.contentWrapper}>
            {productUrl && Link ? (
              <Link to={productUrl} href={productUrl} className={styles.headingWrapper}>
                <h5 className={styles.heading}>{productName}</h5>
              </Link>
            ) : (
              <h5 className={styles.heading}>{productName}</h5>
            )}
            <p className={cx(styles.textPurple, 'bodyS')}>{`${packaging ? `${packaging}:` : ''} ${priceStr ? `${priceStr} kr/st` : ''}`}</p>
            {country !== '' && <p className={cx(styles.textGray, 'bodyS')}>{`Art.nr. ${partNo} - ${country}`}</p>}
            <ProductQuantityInput
              className={styles.quantityInput}
              salesUnit={salesUnit}
              itemNumberPerSalesUnit={itemNumberPerSalesUnit}
              totalPrice={totalPrice}
              quantity={quantity}
              quantityInputId={partNo}
              disabled
              disabledNoBorder
            />
          </div>
          {onClickRemoveProduct && iconButton && (
            <div className={styles.iconLink}>
              <IconButton {...iconButton} type="button" onClick={() => handleRemoveProduct(partNo)} />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export { CartProduct }
