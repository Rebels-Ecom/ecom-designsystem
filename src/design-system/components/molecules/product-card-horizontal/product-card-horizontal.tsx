import React from 'react'
import styles from './product-card-horizontal.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { getProductPicture } from '../../../../helpers/picture-helper'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture, IconButton, Loader, Placeholder, Button, Icon } from '../../atoms'
import cx from 'classnames'
import { TagsList } from '../tags-list/tags-list'
import { IProductCard, TProductCardHorizontal } from '../product-card/product-card'

const ProductCardHorizontal = ({
  product,
  loading = false,
  addToCart,
  addToCartBtnLabel,
  hideCartButton,
  hidePrice,
  onClickRemoveProduct,
  hideRemoveButton,
  removingProduct,
  onChangeQuantity,
  productQuantityDisabled,
  linkComponent: Link,
  className = '',
  defaultQuantity,
  campaign,
  buttonLoading,
  disabled,
  border = false,
  displaySmallImage = false,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  maxQuantity
}: IProductCard & TProductCardHorizontal) => {
  const {
    partNo,
    partNoLabel,
    productName,
    productUrl,
    primaryImageUrl,
    tags,
    country,
    packaging,
    priceStr,
    totalPrice,
    quantity,
    salesUnit,
    itemNumberPerSalesUnit,
    priceLabel,
    currencyLabel,
    unitLabel,
  } = product

  const productImage = getProductPicture(partNo, primaryImageUrl)

  function handleRemoveProduct(id: string) {
    onClickRemoveProduct && onClickRemoveProduct(id)
  }

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 0
    onChangeQuantity && onChangeQuantity(quantity)
  }

  const style: { [key: string]: string } = {
    '--campaign-color': campaign?.color ?? '#FFF',
  }

  return (
    <div
      className={cx(styles.productCardHorizontal, className, {
        [styles.campaign]: campaign?.title,
        [styles.border]: border,
      })}
      style={style}
    >
      {campaign?.title && <div className={styles.campaignBox}>{campaign.title}</div>}
      {removingProduct ? (
        <Loader visible text={'Loading'} />
      ) : (
        <>
          {loading ? (
            <>
              <div className={cx(styles.imageWrapper, styles.imageWrapperPlaceholder)}>
                <Placeholder type="image" />
              </div>
              <div className={styles.placeholderContent}>
                <Placeholder type={'heading'} />
                <Placeholder type={'p_long'} />
                <Placeholder type={'p_short'} />
                <Placeholder type={'p_short'} />
              </div>
            </>
          ) : (
            <>
              <Picture
                {...productImage}
                classNamePicture={styles.picture}
                classNameImg={cx(styles.image, displaySmallImage && styles.smallImage)}
                fallbackImageUrl={fallbackProductImageUrl}
              />
              <div className={styles.content}>
                {Array.isArray(tags) && tags.length ? <TagsList tagsList={tags} /> : null}

                {productUrl && Link ? (
                  <Link to={productUrl} href={productUrl} className={styles.mainLink}>
                    <h5 className={styles.heading}>{productName}</h5>
                  </Link>
                ) : (
                  <h5 className={styles.heading}>{productName}</h5>
                )}

                {!hidePrice && (
                  <p className={cx(styles.subTitle, 'bodyS')}>{`${priceLabel}: ${
                    priceStr ? `${priceStr} ${currencyLabel ?? ''}/${unitLabel ? unitLabel.toLowerCase() : ''}` : ''
                  }`}</p>
                )}

                {(country !== '' || partNo !== '') && (
                  <p className={cx(styles.caption, 'bodyS')}>{`${partNo ? `${partNoLabel} ${partNo}` : ''} ${country && `- ${country}`}`}</p>
                )}

                <ProductQuantityInput
                  className={styles.quantityInput}
                  salesUnit={salesUnit}
                  itemNumberPerSalesUnit={itemNumberPerSalesUnit}
                  totalPrice={totalPrice}
                  quantity={defaultQuantity ?? quantity}
                  quantityInputId={partNo}
                  onChange={handleOnChangeQuantity}
                  disabled={productQuantityDisabled}
                  maxQuantity={maxQuantity}
                />
              </div>
              {!hideRemoveButton && onClickRemoveProduct && (
                <div className={styles.iconLink}>
                  <IconButton type="button" icon="icon-x-circle" onClick={() => handleRemoveProduct(partNo)} isTransparent noBorder size="large" />
                </div>
              )}
              {!hideCartButton ? (
                <div className={styles.buttonsWrapper}>
                  {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
                    <IconButton
                      type="button"
                      icon={'icon-file-plus'}
                      className={styles.purchaseListIcon}
                      onClick={() => onSaveToPurchaseListClick(partNo)}
                      size="large"
                      isTransparent
                      noBorder
                      noPadding
                    />
                  )}
                  {/* TODO: replace this hc values with addToCartButton props? */}
                  <Button
                    type={'button'}
                    surface={'primary'}
                    className={!loading ? styles.productCardBtn : ''}
                    size={'x-small'}
                    onClick={() => addToCart(product)}
                    disabled={buttonLoading || loading || disabled || quantity <= '0'}
                    loading={buttonLoading}
                  >
                    <Icon icon={'icon-shopping-cart'} className={styles.cartBtnIcon}></Icon>
                    {/* TODO: replace this hc copy with addToCartButton.children? */}
                    <span className={styles.cartBtnText}>{addToCartBtnLabel}</span>
                  </Button>
                </div>
              ) : null}
            </>
          )}
        </>
      )}
    </div>
  )
}

export { ProductCardHorizontal }
