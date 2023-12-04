import React from 'react'
import styles from './product-card-vertical.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture, Placeholder, Button, IconButton, Icon } from '../../atoms'
import cx from 'classnames'
import { ProductVariantList } from '../product-variant-list/product-variant-list'
import { TagsList } from '../tags-list/tags-list'
import { IProductCard, TProductCardVertical } from '../product-card/product-card'

const ProductCardVertical = ({
  product,
  loading = false,
  hideCartButton,
  addToCart,
  addToCartBtnLabel,
  onChangeQuantity,
  productQuantityDisabled,
  linkComponent: Link,
  variantsOpen,
  handlePackageChange,
  selectedVariantId,
  productImage,
  onVariantsButtonClick,
  className,
  defaultQuantity,
  listPriceLabel,
  campaign,
  disabled,
  buttonLoading,
  limitedProductText,
  showFavoriteIcon,
  isFavoriteIconActive,
  onFavoriteIconClick,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
}: IProductCard & TProductCardVertical) => {
  const {
    productId,
    productName,
    productUrl,
    productVariantList,
    country,
    packaging,
    priceStr,
    totalPrice,
    quantity,
    salesUnit,
    itemNumberPerSalesUnit,
    tags,
    isLimitedProduct,
    sellerOnly,
    isAccessoryPotItem,
  } = product
  //const isLimitedProduct = product.productId === '1109611' || product.productId === '1174411' ? true : false

  const packageBtnDisabled = !productVariantList || productVariantList.length <= 1

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 0
    onChangeQuantity && onChangeQuantity(quantity)
  }

  function handleVariantBtnClick() {
    onVariantsButtonClick && onVariantsButtonClick()
  }

  const style: { [key: string]: string } = {
    '--campaign-color': campaign?.color ?? '#FFF',
    '--limited-product-color': isLimitedProduct && limitedProductText ? '#F08A00' : '#FFF',
  }

  if (variantsOpen && selectedVariantId) {
    return (
      <ProductVariantList
        className={styles.productCardVertical}
        variantsList={productVariantList}
        onVariantSelect={handlePackageChange}
        selectedVariantId={selectedVariantId}
      />
    )
  } else {
    return (
      <div
        className={cx(
          styles.productCardVertical,
          className ? className : '',
          {
            [styles.campaign]: campaign?.title,
          },
          {
            [styles.limitedProduct]: !campaign && isLimitedProduct && limitedProductText,
          }
        )}
        style={style}
      >
        {campaign?.title && <div className={styles.campaignBox}>{campaign.title}</div>}
        {!campaign && isLimitedProduct && limitedProductText && <div className={styles.limitedBox}>{limitedProductText}</div>}
        <div className={styles.tagsWrapper}>
          {sellerOnly && <Icon icon={'icon-eye'} size={'large'}></Icon>}
          {isAccessoryPotItem && (
            <span>
              <b style={{ fontSize: '1.2rem' }}>S</b>
            </span>
          )}
          {loading ? <Placeholder type="tags" /> : Array.isArray(tags) && tags.length ? <TagsList tagsList={tags} /> : null}
        </div>
        {loading ? (
          <Placeholder type="image" />
        ) : (
          <>
            {productUrl && Link ? (
              <Link to={productUrl} href={productUrl} className={styles.imageWrapper}>
                <Picture
                  {...productImage}
                  classNamePicture={styles.cardPicture}
                  classNameImg={`${styles.cardImage}`}
                  fallbackImageUrl={fallbackProductImageUrl}
                />
              </Link>
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
          </>
        )}

        {loading ? (
          <div className={styles.placeholderContent}>
            <Placeholder type={'heading'} />
            <Placeholder type={'heading'} />
            <Placeholder type={'heading'} />
            <Placeholder type={'p_long'} />
            <Placeholder type={'p_long'} />
          </div>
        ) : (
          <div className={`${styles.cardContent}`}>
            {productUrl && Link ? (
              <Link to={productUrl} href={productUrl} className={styles.headingWrapper}>
                <h5 className={styles.heading}>{productName}</h5>
              </Link>
            ) : (
              <h5 className={styles.heading}>{productName}</h5>
            )}
            <p className={cx(styles.textGray, 'bodyS')}>{`Art.nr. ${productId} - ${country}`}</p>
            <p className={cx(styles.textPurple, 'bodyS')}>{`${listPriceLabel ? listPriceLabel : 'Listpris'}: ${priceStr} kr/st`}</p>
          </div>
        )}
        <Button
          type={'button'}
          surface="secondary"
          iconRight={packageBtnDisabled ? undefined : { icon: 'icon-layers' }}
          rounded
          fullWidth
          onClick={() => handleVariantBtnClick()}
          disabled={loading || packageBtnDisabled}
        >
          {packaging}
        </Button>
        {loading ? (
          <div className={styles.placeholderContent}>
            <Placeholder type={'p_long'} />
            <Placeholder type={'p_long'} />
          </div>
        ) : (
          <ProductQuantityInput
            className={styles.productCardInput}
            salesUnit={salesUnit}
            itemNumberPerSalesUnit={itemNumberPerSalesUnit}
            totalPrice={totalPrice}
            quantity={defaultQuantity ?? quantity}
            quantityInputId={productId}
            disabled={productQuantityDisabled}
            onChange={handleOnChangeQuantity}
          />
        )}
        {!hideCartButton && (
          <div className={styles.cartButtonWrapper}>
            <Button
              type={'button'}
              surface={'primary'}
              className={!loading ? styles.productCardBtn : ''}
              fullWidth
              onClick={() => addToCart(product)}
              disabled={buttonLoading || loading || disabled || quantity === '0'}
              loading={buttonLoading}
            >
              {addToCartBtnLabel}
            </Button>
            {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
              <IconButton
                type="button"
                icon={'icon-file-plus'}
                className={styles.purchaseListIcon}
                onClick={() => onSaveToPurchaseListClick(productId)}
                size="large"
                isTransparent
                noBorder
                noPadding
              />
            )}
            {showFavoriteIcon && onFavoriteIconClick && (
              <IconButton
                type="button"
                icon={isFavoriteIconActive ? 'icon-heart1' : 'icon-heart-o'}
                className={cx(styles.favoriteIcon, isFavoriteIconActive ? styles.favoriteIconActive : '')}
                onClick={() => onFavoriteIconClick(productId)}
                size="large"
                isTransparent
                noBorder
                noPadding
              />
            )}
          </div>
        )}
      </div>
    )
  }
}

export { ProductCardVertical }
