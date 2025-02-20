import cx from 'classnames'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Button, ButtonWithTooltip, Icon, IconButton, Picture, Placeholder } from '../../atoms'
import { Tag } from '../../atoms/tag/tag'
import { IProductCard, TProductCardMiniVertical } from '../product-card/product-card'
import { QuantityChanger } from '../quantity-changer/quantity-changer'
import { VerticalVariants } from '../vertical-variants/vertical-variants'
import styles from './product-card-mini-vertical.module.css'

const ProductCardMiniVertical = ({
  isRestrictedUser,
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
  onCloseVariants,
  onClick,
  productArea,
  tooltips,
  isAddingToFavorites,
}: IProductCard & TProductCardMiniVertical) => {
  const {
    activeCampaign,
    partNo,
    productName,
    productUrl,
    productVariantList,
    packaging,
    priceStr,
    totalPrice,
    quantity,
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

  const packageBtnDisabled = !productVariantList || productVariantList.length <= 1
  const isFavorite = isFavoriteProduct(partNo)
  const tagsList = activeCampaign ? tags?.slice(0, 3) : tags

  function handleOnChangeQuantity(val: number = 0) {
    const newQuantity = val
    onChangeQuantity?.(newQuantity)
  }

  function handleVariantBtnClick() {
    onVariantsButtonClick?.()
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

  return (
    <div
      key={partNo}
      className={cx(styles.productCardMiniVertical, className ? className : '', {
        [styles.campaign]: activeCampaign?.title && !loading,
        [styles.limitedProduct]: !activeCampaign && isLimitedProduct && limitedLabel && !loading,
        [styles.outOfStockProduct]: !activeCampaign && outOfStock && outOfStockLabel && !loading,
      })}
      style={style}
    >
      {!outOfStock && activeCampaign?.title && !loading && (
        <div className={styles.campaignBox}>{activeCampaign.title}</div>
      )}
      {!activeCampaign && isLimitedProduct && limitedLabel && !loading && (
        <div className={styles.limitedBox}>{limitedLabel}</div>
      )}
      {outOfStock && outOfStockLabel && !loading && <div className={styles.outOfStockBox}>{outOfStockLabel}</div>}
      <div className={styles.tagsWrapper}>
        {sellerOnly && <Icon icon="icon-eye" size="medium" />}
        {isAccessoryPotItem && <span className={`${styles.accessoryPotItemIcon} ${styles.tag}`}>S</span>}

        {loading ? (
          <Placeholder type="tags" />
        ) : Array.isArray(tags) && tags.length ? (
          <>
            {tagsList?.map((tag) => (
              <Tag key={tag.text} {...tag} shape="pill" className={styles.tag} />
            ))}
          </>
        ) : null}
      </div>
      {loading ? (
        <Placeholder type="image" />
      ) : (
        <>
          {productUrl && Link ? (
            <Link to={productUrl} href={productUrl} className={styles.imageWrapper} onClick={onClick}>
              <Picture
                {...productImage}
                classNamePicture={styles.picture}
                classNameImg={styles.image}
                fallbackImageUrl={fallbackProductImageUrl}
              />
            </Link>
          ) : (
            <div className={styles.imageWrapper}>
              <Picture
                {...productImage}
                classNamePicture={styles.picture}
                classNameImg={styles.image}
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
        <div className={`${styles.content}`}>
          {productUrl && Link ? (
            <Link to={productUrl} href={productUrl} onClick={onClick} className={styles.productNameLink}>
              <h2 className={cx(styles.productName, 'bodyS')}>{productName}</h2>
            </Link>
          ) : (
            <h2 className={cx(styles.productName, 'bodyS')}>{productName}</h2>
          )}
          {!hidePrice && !isRestrictedUser && (
            <>
              <p className={cx(styles.detail, 'bodyS')}>{`${quantity} x (${itemNumberPerSalesUnit} styck)`}</p>
              <p className={cx(styles.detail, 'bodyS')}>{`${priceLabel}: ${priceStr} ${currencyLabel ?? ''}/${
                unitLabel ? unitLabel.toLowerCase() : ''
              }`}</p>
              <p className={cx(styles.detail, 'bodyS fontBold')}>{`Pris: ${totalPrice} kr`}</p>
            </>
          )}
        </div>
      )}
      <ButtonWithTooltip
        content={tooltips?.changeVariant ?? 'Välj variant'}
        type="button"
        surface="secondary"
        iconRight={packageBtnDisabled ? undefined : { icon: 'icon-layers' }}
        rounded
        fullWidth
        onClick={() => handleVariantBtnClick()}
        disabled={loading || packageBtnDisabled}
        className={styles.variant}
        name="Select packaging"
        side="top"
        align="end"
      >
        {packaging}
      </ButtonWithTooltip>
      {!hideCartButton && (
        <Button
          type="button"
          surface="primary"
          className={styles.addToCart}
          fullWidth
          onClick={() => addToCart(product)}
          disabled={buttonLoading || loading || disabled || quantity === '0'}
          loading={buttonLoading}
          name={addToCartBtnLabel}
          size="xx-small"
        >
          {addToCartBtnLabel}
        </Button>
      )}
      {loading ? (
        <div className={styles.placeholderContent}>
          <Placeholder type="p_long" />
          <Placeholder type="p_long" />
        </div>
      ) : (
        <div className={styles.actions}>
          <div className={styles.extras}>
            {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
              <IconButton
                type="button"
                icon={'icon-file-plus'}
                className={styles.purchaseListIcon}
                onClick={() => onSaveToPurchaseListClick(partNo, totalPrice)}
                size="large"
                isTransparent
                noBorder
                noPadding
                name={tooltips?.addToPurchaseList ?? 'Add to purchase list'}
              />
            )}
            {showFavoriteIcon && onFavoriteIconClick && (
              <IconButton
                type="button"
                icon={isFavorite ? 'icon-heart1' : 'icon-heart-o'}
                className={cx(styles.favoriteIcon, isFavorite ? styles.favoriteIconActive : '')}
                onClick={() => onFavoriteIconClick(partNo, isFavorite, totalPrice)}
                size="large"
                isTransparent
                noBorder
                noPadding
                name={tooltips?.addToFavorites ?? 'Add to favorite list'}
                animate={isAddingToFavorites ? 'loading' : 'default'}
              />
            )}
          </div>
          {!isRestrictedUser && (
            <QuantityChanger
              id={`${partNo}-${productArea ?? 'category'}`}
              quantity={defaultQuantity ?? quantity}
              onChange={handleOnChangeQuantity}
              disabled={productQuantityDisabled}
            />
          )}
        </div>
      )}
      {variantsOpen && selectedVariantId && (
        <VerticalVariants
          onCloseVariants={onCloseVariants}
          onVariantSelect={handlePackageChange}
          selectedVariantId={partNo}
          variantsList={productVariantList}
          open={!!(variantsOpen && selectedVariantId)}
          isRestrictedUser={isRestrictedUser}
        />
      )}
    </div>
  )
}

export { ProductCardMiniVertical }
