import React from 'react'
import styles from './product-card-horizontal.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { IProduct } from '../../../../types/product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture, IconButton, DividerLines, Loader, Placeholder, Button, Icon } from '../../atoms'
import { IButton } from '../../atoms/button/button'
import cx from 'classnames'
import { TagsList } from '../tags-list/tags-list'

export interface IProductCardHorizontal {
  product: IProduct
  loading: boolean
  addToCartButton: IButton
  addToCart: CallableFunction
  hideCartButton?: boolean
  onClickRemoveProduct?: CallableFunction
  hideRemoveButton?: boolean
  removingProduct?: boolean
  onChangeQuantity?: CallableFunction
  productQuantityDisabled?: boolean
  linkComponent?: any
  className?: string
}

const ProductCardHorizontal = ({
  product,
  loading = false,
  addToCartButton,
  addToCart,
  hideCartButton,
  onClickRemoveProduct,
  hideRemoveButton,
  removingProduct,
  onChangeQuantity,
  productQuantityDisabled,
  linkComponent: Link,
  className,
}: IProductCardHorizontal) => {
  const { productId, productName, productUrl, productImageUrl, tags, country, packaging, priceStr, totalPrice, quantity, salesUnit, itemNumberPerSalesUnit } =
    product
  const productImage = getProductPicture(productId, productImageUrl)

  function handleRemoveProduct(id: string) {
    onClickRemoveProduct && onClickRemoveProduct(id)
  }

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 1
    onChangeQuantity && onChangeQuantity(quantity)
  }

  return (
    <div className={cx(styles.productCardHorizontal, className ? className : '')}>
      {removingProduct ? (
        <Loader visible={loading} text={'Loading'} />
      ) : (
        <>
          {loading ? (
            <div className={cx(styles.imageWrapper, styles.imageWrapperPlaceholder)}>
              <Placeholder type="image" />
            </div>
          ) : (
            <div className={styles.imageWrapper}>
              <Picture
                {...productImage}
                classNamePicture={styles.cardPicture}
                classNameImg={`${styles.cardImage}`}
                fallbackImageUrl={fallbackProductImageUrl}
              />
            </div>
          )}
          {loading ? (
            <div className={styles.placeholderContent}>
              <Placeholder type={'heading'} />
              <DividerLines />
              <Placeholder type={'p_short'} />
              <Placeholder type={'p_short'} />
              <Placeholder type={'p_long'} />
            </div>
          ) : (
            <div className={styles.contentWrapper}>
              {Array.isArray(tags) && tags.length ? <>{loading ? <Placeholder type="tags" /> : <TagsList tagsList={tags} />}</> : null}
              {productUrl && Link ? (
                <Link to={productUrl} href={productUrl} className={styles.headingWrapper}>
                  <h5 className={styles.heading}>{productName}</h5>
                </Link>
              ) : (
                <h5 className={styles.heading}>{productName}</h5>
              )}
              <DividerLines />
              <p className={cx(styles.textPurple, 'bodyS')}>{`${packaging ? `${packaging}:` : ''} ${priceStr ? `${priceStr} kr/st` : ''}`}</p>
              {country !== '' && <p className={cx(styles.textGray, 'bodyS')}>{`${productId ? `Art.nr. ${productId} -` : ''} ${country}`}</p>}
              <ProductQuantityInput
                className={styles.quantityInput}
                salesUnit={salesUnit}
                itemNumberPerSalesUnit={itemNumberPerSalesUnit}
                totalPrice={totalPrice}
                quantity={quantity}
                quantityInputId={productId}
                onChange={handleOnChangeQuantity}
                disabled={productQuantityDisabled}
              />
            </div>
          )}
          <div className={styles.buttonsWrapper}>
            {!hideRemoveButton && onClickRemoveProduct && (
              <div className={styles.iconLink}>
                <IconButton icon={'icon-x-circle'} onClick={() => handleRemoveProduct(productId)} isLink={false} isTransparent size="large"></IconButton>
              </div>
            )}
            {!hideCartButton ? (
              <Button
                {...addToCartButton}
                className={!loading ? styles.productCardBtn : ''}
                size={'x-small'}
                onClick={() => addToCart(product)}
                disabled={loading}
              >
                <Icon icon={'icon-shopping-cart'} className={styles.cartBtnIcon}></Icon>
                <span className={styles.cartBtnText}>Lägg i kundvagn</span>
              </Button>
            ) : null}
          </div>
        </>
      )}
    </div>
  )
}

export { ProductCardHorizontal }
