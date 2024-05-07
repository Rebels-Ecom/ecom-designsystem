import React from 'react'
import styles from './product-card-horizontal.module.css'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import { getProductPicture } from '../../../../helpers/picture-helper'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { Picture, IconButton, Placeholder, Button, Icon, IconWithTooltip, AlertBox } from '../../atoms'
import cx from 'classnames'
import { TagsList } from '../tags-list/tags-list'
import { IProductCard, TProductCardHorizontal } from '../product-card/product-card'
import { FlexContainer, mediaQueryHelper } from '../../layouts'
import { DebounceInput } from '../../atoms/inputs/debounce-input/debounce-input'

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
  buttonLoading,
  disabled,
  border = false,
  displaySmallImage = false,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  maxQuantity,
  sellerOnlyTooltipText,
  accessoryPotItemTooltipText,
  isRestrictedUser,
  alertBox,
  onClick,
  debounceQuantityVal,
  productArea
}: IProductCard & TProductCardHorizontal) => {
  const {
    activeCampaign,
    partNo,
    partNoLabel,
    productName,
    productUrl,
    primaryImageUrl,
    tags,
    isLimitedProduct,
    country,
    priceStr,
    totalPrice,
    quantity,
    outOfStock,
    salesUnit,
    itemNumberPerSalesUnit,
    priceLabel,
    currencyLabel,
    unitLabel,
    outOfStockLabel,
    limitedLabel,
    sellerOnly,
    isAccessoryPotItem,
  } = product;

  const { isMobile, isTablet } = mediaQueryHelper();

  const productImage = getProductPicture(partNo, primaryImageUrl, (isMobile || isTablet) ? '120' : '64');

  function handleRemoveProduct(id: string) {
    onClickRemoveProduct && onClickRemoveProduct(id)
  }

  function handleOnChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    const quantity = parseInt(e.target.value) || 0
    onChangeQuantity && onChangeQuantity(quantity)
  }

  function handleOnDebounceChangeQuantity(val: string) {
    onChangeQuantity && onChangeQuantity(parseInt(val))
  }

  const style: { [key: string]: string } = {
    '--campaign-color': activeCampaign?.color ?? '#FFF',
    '--limited-product-color': isLimitedProduct && limitedLabel ? '#F08A00' : '#FFF',
    '--out-of-stock-product-color': outOfStock && outOfStockLabel ? '#e4b6c3' : '#FFF',
  }

  const iconsAndTags = (
    <FlexContainer alignItems="center" gap={0.5} minHeight={2.25}>
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
      {Array.isArray(tags) && tags.length ? <TagsList tagsList={tags} /> : null}
    </FlexContainer>
  )

  return (
    <div
      className={cx(
        styles.productCardHorizontal,
        className,
        {
          [styles.campaign]: activeCampaign?.title && !loading,
          [styles.limitedProduct]: !activeCampaign && isLimitedProduct && limitedLabel && !loading,
          [styles.outOfStockProduct]: !activeCampaign && outOfStock && outOfStockLabel && !loading,
        },
      )}
      style={style}
    >
      {!outOfStock && activeCampaign?.title && !loading && (
        <div className={styles.campaignBox}>{activeCampaign.title}</div>
      )}
      {!activeCampaign && isLimitedProduct && limitedLabel && !loading && (
        <div className={cx(styles.limitedBox, {[styles.withExtraPadding]: !hideRemoveButton})}>{limitedLabel}</div>
      )}
      {outOfStock && outOfStockLabel && !loading && (
        <div className={styles.outOfStockBox}>{outOfStockLabel}</div>
      )}
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
          {productUrl && Link ? (
            <Link to={productUrl} href={productUrl} className={styles.imageWrapper} onClick={onClick}>
              <Picture
                {...productImage}
                classNamePicture={cx(styles.picture, displaySmallImage && styles.smallPicture)}
                classNameImg={cx(styles.image, displaySmallImage && styles.smallImage)}
                fallbackImageUrl={fallbackProductImageUrl}
              />
            </Link>
          ) : (
            <div className={styles.imageWrapper}>
              <Picture
                {...productImage}
                classNamePicture={cx(styles.picture, displaySmallImage && styles.smallPicture)}
                classNameImg={cx(styles.image, displaySmallImage && styles.smallImage)}
                fallbackImageUrl={fallbackProductImageUrl}
              />
            </div>
          )}
          <FlexContainer flexDirection='column' className={styles.content} gap={0.25}>
            {iconsAndTags}
            {productUrl && Link ? (
              <Link to={productUrl} href={productUrl} className={styles.mainLink} onClick={onClick}>
                <h5 className={styles.heading}>{productName}</h5>
              </Link>
            ) : (
              <h5 className={styles.heading}>{productName}</h5>
            )}
            <div className={styles.cardInfoWrapper}>
              <div>
                {!hidePrice && !isRestrictedUser && (
                  <p className={cx(styles.subTitle, 'bodyS')}>{`${priceLabel}: ${
                    priceStr ? `${priceStr} ${currencyLabel ?? ''}/${unitLabel ? unitLabel.toLowerCase() : ''}` : ''
                  }`}</p>
                )}

                {(country !== '' || partNo !== '') && !isRestrictedUser && (
                  <p className={cx(styles.caption, 'bodyS')}>{`${partNo ? `${partNoLabel} ${partNo}` : ''} ${country && `- ${country}`}`}</p>
                )}

                {!isRestrictedUser && (
                  <>
                    {debounceQuantityVal ? (
                      <DebounceInput
                        debounceVal={debounceQuantityVal}
                        debouncedEvent={handleOnDebounceChangeQuantity}
                        salesUnit={salesUnit}
                        itemNumberPerSalesUnit={itemNumberPerSalesUnit}
                        totalPrice={totalPrice}
                        quantity={defaultQuantity ?? quantity}
                        quantityInputId={`${partNo}-${productArea}`}
                        maxQuantity={maxQuantity}
                        disabled={productQuantityDisabled}
                        hidePrice={hidePrice}
                      />
                    ) : (
                      <ProductQuantityInput
                        className={styles.quantityInput}
                        salesUnit={salesUnit}
                        itemNumberPerSalesUnit={itemNumberPerSalesUnit}
                        totalPrice={totalPrice}
                        quantity={defaultQuantity ?? quantity}
                        quantityInputId={`${partNo}-${productArea}`}
                        onChange={handleOnChangeQuantity}
                        disabled={productQuantityDisabled}
                        maxQuantity={maxQuantity}
                        hidePrice={hidePrice}
                      />
                    )}
                  </>
                )}
              </div>
              {alertBox && <AlertBox className={styles.alertBox} {...alertBox}></AlertBox>}
              {!hideCartButton ? (
                <div className={styles.buttonsWrapper}>
                  <Button
                    type={'button'}
                    surface={'primary'}
                    className={!loading ? styles.productCardBtn : ''}
                    size={'x-small'}
                    onClick={() => addToCart(product)}
                    disabled={buttonLoading || loading || disabled || quantity <= '0'}
                    loading={buttonLoading}
                    name={addToCartBtnLabel}
                  >
                    <Icon icon={'icon-shopping-cart'} className={styles.cartBtnIcon}></Icon>
                    <span className={styles.cartBtnText}>{addToCartBtnLabel}</span>
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
                </div>
              ) : null}
            </div>
          </FlexContainer>
          {!hideRemoveButton && onClickRemoveProduct && (
            <div className={styles.iconLink}>
              <IconButton
                className={styles.iconBtn}
                type="button"
                icon="icon-x-circle"
                onClick={() => handleRemoveProduct(partNo)}
                isTransparent
                noBorder
                size="large"
                name='Remove product'
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export { ProductCardHorizontal }
