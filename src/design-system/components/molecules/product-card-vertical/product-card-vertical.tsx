import React from 'react'
import styles from './product-card-vertical.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture, Placeholder, Button, IconButton, Icon } from '../../atoms'
import cx from 'classnames'
import { ProductVariantList } from '../product-variant-list/product-variant-list'
import { TagsList } from '../tags-list/tags-list'
import { IProductCard, TProductCardVertical } from '../product-card/product-card'
import { IconWithTooltip } from '../../atoms'

const ProductCardVertical = ({
  product,
  loading = false,
  hidePrice,
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
  disabled,
  buttonLoading,
  showFavoriteIcon,
  favoriteProductsIds,
  onFavoriteIconClick,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  sellerOnlyTooltipText,
  accessoryPotItemTooltipText,
  onCloseVariants,
  onClick,
  productArea
}: IProductCard & TProductCardVertical) => {
  const {
    activeCampaign,
    partNo,
    partNoLabel,
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
    outOfStock,
    tags,
    isLimitedProduct,
    sellerOnly,
    isAccessoryPotItem,
    priceLabel,
    currencyLabel,
    unitLabel,
    outOfStockLabel,
    limitedLabel,
  } = product
  //const isLimitedProduct = product.partNo === '1109611' || product.partNo === '1174411' ? true : false
  const packageBtnDisabled = !productVariantList || productVariantList.length <= 1

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 0
    onChangeQuantity && onChangeQuantity(quantity)
  }

  function handleVariantBtnClick() {
    onVariantsButtonClick && onVariantsButtonClick()
  }

  function isFavoriteProduct(partNo: string) {
    if (!favoriteProductsIds || favoriteProductsIds.length === 0) return false
    return favoriteProductsIds.includes(partNo)
  }

  const style: { [key: string]: string } = {
    '--campaign-color': activeCampaign?.color ?? '#FFF',
    '--limited-product-color': isLimitedProduct && limitedLabel ? '#F08A00' : '#FFF',
    '--out-of-stock-product-color': outOfStock && outOfStockLabel ? '#e4b6c3' : '#FFF',
  }

  if (variantsOpen && selectedVariantId) {
    return (
      <ProductVariantList
        className={styles.productCardVertical}
        variantsList={productVariantList}
        onVariantSelect={handlePackageChange}
        onCloseVariants={onCloseVariants}
        selectedVariantId={selectedVariantId}
        sellerOnlyTooltipText={sellerOnlyTooltipText}
        absolutePositioned
      />
    )
  } else {
    return (
      <div
        className={cx(
          styles.productCardVertical,
          className ? className : '',
          {
            [styles.campaign]: activeCampaign?.title && !loading,
          },
          {
            [styles.limitedProduct]: !activeCampaign && isLimitedProduct && limitedLabel && !loading,
          },
          {
            [styles.outOfStockProduct]: !activeCampaign && outOfStock && outOfStockLabel && !loading,
          }
        )}
        style={style}
      >
        {!outOfStock && activeCampaign?.title && !loading && <div className={styles.campaignBox}>{activeCampaign.title}</div>}
        {!activeCampaign && isLimitedProduct && limitedLabel && !loading && <div className={styles.limitedBox}>{limitedLabel}</div>}
        {outOfStock && outOfStockLabel && !loading && <div className={styles.outOfStockBox}>{outOfStockLabel}</div>}
        <div className={styles.tagsWrapper}>
          {sellerOnly && (
            <>
              {sellerOnlyTooltipText ? (
                <IconWithTooltip content={sellerOnlyTooltipText} icon={{ icon: 'icon-eye' }} />
              ) : (
                <Icon icon={'icon-eye'} size={'large'} />
              )}
            </>
          )}
          {isAccessoryPotItem && (
            <>
              {accessoryPotItemTooltipText ? (
                <IconWithTooltip content={accessoryPotItemTooltipText} text="S" />
              ) : (
                <span>
                  <b style={{ fontSize: '1.2rem' }}>S</b>
                </span>
              )}
            </>
          )}
          {loading ? <Placeholder type="tags" /> : Array.isArray(tags) && tags.length ? <TagsList tagsList={activeCampaign ? tags.slice(0, 3) : tags} /> : null}
        </div>
        {loading ? (
          <Placeholder type="image" />
        ) : (
          <>
            {productUrl && Link ? (
              <Link to={productUrl} href={productUrl} className={styles.imageWrapper} onClick={onClick}>
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
            <Placeholder type={'p_long'} />
            <Placeholder type={'p_long'} />
          </div>
        ) : (
          <div className={`${styles.cardContent}`}>
            {productUrl && Link ? (
              <Link to={productUrl} href={productUrl} className={styles.headingWrapper} onClick={onClick}>
                <h5 className={styles.heading}>{productName}</h5>
              </Link>
            ) : (
              <h5 className={styles.heading}>{productName}</h5>
            )}
            <p className={cx(styles.textGray, 'bodyS')}>{`${partNoLabel} ${partNo} ${country && `- ${country}`}`}</p>
            {!hidePrice && (
              <p className={cx(styles.textPurple, 'bodyS')}>{`${priceLabel}: ${priceStr} ${currencyLabel ?? ''}/${
                unitLabel ? unitLabel.toLowerCase() : ''
              }`}</p>
            )}
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
          className={styles.packageBtn}
          name='Select packaging'
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
            quantityInputId={`${partNo}-${productArea ?? 'category'}`}
            disabled={productQuantityDisabled}
            onChange={handleOnChangeQuantity}
            hidePrice={hidePrice}
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
              name={addToCartBtnLabel}
            >
              {addToCartBtnLabel}
            </Button>
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
                name='Add to purchase list'
              />
            )}
            {showFavoriteIcon && onFavoriteIconClick && (
              <IconButton
                type="button"
                icon={isFavoriteProduct(partNo) ? 'icon-heart1' : 'icon-heart-o'}
                className={cx(styles.favoriteIcon, isFavoriteProduct(partNo) ? styles.favoriteIconActive : '')}
                onClick={() => onFavoriteIconClick(partNo, isFavoriteProduct(partNo))}
                size="large"
                isTransparent
                noBorder
                noPadding
                name='Add to favorite list'
              />
            )}
          </div>
        )}
      </div>
    )
  }
}

export { ProductCardVertical }
