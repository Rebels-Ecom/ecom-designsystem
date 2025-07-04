import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import cx from 'classnames'
import { ProductQuantityInput } from '../product-quantity-input/product-quantity-input'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import {
  Picture,
  IconButton,
  Placeholder,
  Button,
  Icon,
  IconWithTooltip,
  AlertBox,
  ComponentWithTooltip,
} from '../../atoms'
import styles from './product-card-horizontal.module.css'
import { TagsList } from '../tags-list/tags-list'
import { IProductCard, TProductCardHorizontal } from '../product-card/product-card'
import { FlexContainer, mediaQueryHelper } from '../../layouts'
import { DebounceInput } from '../../atoms/inputs/debounce-input/debounce-input'
import { HorizontalVariants } from '../horizontal-variants/horiztonal-variants'
import { useOnClickOutside } from '../../../hooks'

const ProductCardHorizontal = ({
  product,
  loading = false,
  addToCart,
  addToCartBtnLabel,
  hideCartButton,
  hidePrice,
  onClickRemoveProduct,
  hideRemoveButton,
  onChangeQuantity,
  productQuantityDisabled,
  linkComponent: Link,
  className = '',
  defaultQuantity,
  buttonLoading,
  disabled,
  displaySmallImage = false,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  maxQuantity,
  isRestrictedUser,
  alertBox,
  onClick,
  debounceQuantityVal,
  productArea,
  onVariantsButtonClick,
  variantsOpen,
  onCloseVariants,
  selectedVariantId,
  handlePackageChange,
  productImage,
  showPackaging = false,
  favoriteProductsIds,
  showFavoriteIcon,
  onFavoriteIconClick,
  tooltips,
  isAddingToFavorites,
  allowNegative,
}: IProductCard & TProductCardHorizontal) => {
  const alertBoxRef = useRef<HTMLDivElement>(null)
  const { isMobile } = mediaQueryHelper()
  const {
    activeCampaign,
    partNo,
    partNoLabel,
    productName,
    productUrl,
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
    pricePerUnit,
    aLabel,
    productVariantList,
    packaging,
  } = product

  const [alertBoxOpen, setAlertBoxOpen] = useState(false)

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

  function isFavoriteProduct(partNo: string) {
    if (!favoriteProductsIds || favoriteProductsIds.length === 0) return false
    return favoriteProductsIds.includes(partNo)
  }

  const style: { [key: string]: string } = {
    '--campaign-color': activeCampaign?.color ?? '#FFF',
    '--limited-product-color': isLimitedProduct && limitedLabel ? '#F08A00' : '#FFF',
    '--out-of-stock-product-color': outOfStock && outOfStockLabel ? '#e4b6c3' : '#FFF',
  }

  const hasIconAndTags = sellerOnly || isAccessoryPotItem || !!tags?.length
  const isFavorite = isFavoriteProduct(partNo)
  const isCampaignCard = activeCampaign?.title
  const isLimitedCard = !!(!activeCampaign && isLimitedProduct && limitedLabel)
  const isOutOfStockCard = !!(!activeCampaign && outOfStock && outOfStockLabel)
  const isSpecialCard = isCampaignCard || isLimitedCard || isOutOfStockCard

  const iconsAndTags = (
    <FlexContainer alignItems="center" gap={0.5} minHeight={hasIconAndTags ? 2.25 : 0} stretch>
      {sellerOnly && (
        <>
          {tooltips?.sellerOnly ? (
            <IconWithTooltip content={tooltips.sellerOnly} icon={{ icon: 'icon-eye' }} />
          ) : (
            <Icon icon="icon-eye" size="large" />
          )}
        </>
      )}
      {isAccessoryPotItem && (
        <>
          {tooltips?.accessoryPotItem ? (
            <IconWithTooltip content={tooltips.accessoryPotItem} text="S" />
          ) : (
            <span className={styles.standardIcon}>S</span>
          )}
        </>
      )}
      {Array.isArray(tags) && tags.length ? <TagsList tagsList={tags} /> : null}
      {!hideRemoveButton && onClickRemoveProduct && (
        <div className={styles.iconLink}>
          <IconButton
            className={styles.iconBtn}
            type="button"
            icon="icon-x-circle"
            onClick={() => handleRemoveProduct(partNo)}
            isTransparent
            noBorder
            noPadding
            size="large"
            name="Remove product"
          />
        </div>
      )}
    </FlexContainer>
  )

  useOnClickOutside({ ref: alertBoxRef, onClose: () => setAlertBoxOpen(false) })

  return (
    <div
      className={cx(styles.productCardHorizontal, className, {
        [styles.specialCard]: isSpecialCard && !loading,
        [styles.campaign]: isCampaignCard && !loading,
        [styles.limitedProduct]: isLimitedCard && !loading,
        [styles.outOfStockProduct]: isOutOfStockCard && !loading,
      })}
      style={style}
    >
      {!outOfStock && isCampaignCard && !loading && (
        <div className={cx(styles.box, { [styles.noRemoveButton]: hideRemoveButton })}>{activeCampaign.title}</div>
      )}
      {isLimitedCard && !loading && (
        <div className={cx(styles.box, { [styles.noRemoveButton]: hideRemoveButton })}>{limitedLabel}</div>
      )}
      {isOutOfStockCard && !loading && (
        <>
          {tooltips?.stockShortage && (
            <ComponentWithTooltip
              content={tooltips.stockShortage}
              element={<div>{outOfStockLabel}</div>}
              wrapperClassName={cx(styles.box, { [styles.noRemoveButton]: hideRemoveButton })}
            />
          )}
          {tooltips?.outOfStock && (
            <ComponentWithTooltip
              content={tooltips.outOfStock}
              element={<div>{outOfStockLabel}</div>}
              wrapperClassName={cx(styles.box, { [styles.noRemoveButton]: hideRemoveButton })}
            />
          )}
          {!tooltips?.stockShortage && !tooltips?.outOfStock && (
            <div className={cx(styles.box, { [styles.noRemoveButton]: hideRemoveButton })}>{outOfStockLabel}</div>
          )}
        </>
      )}
      {loading ? (
        <>
          <div className={cx(styles.imageWrapper, styles.imageWrapperPlaceholder)}>
            <Placeholder type="image" />
          </div>
          <div className={styles.placeholderContent}>
            <Placeholder type="heading" />
            <Placeholder type="p_long" />
            <Placeholder type="p_short" />
            <Placeholder type="p_short" />
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
          <FlexContainer flexDirection="column" className={styles.content} gap={0.25}>
            {iconsAndTags}
            {productUrl && Link ? (
              <Link to={productUrl} href={productUrl} className={styles.mainLink} onClick={onClick}>
                <h2
                  className={cx(styles.heading, 'h5', {
                    [styles.extraPadding]: !hasIconAndTags && !hideRemoveButton && !isSpecialCard,
                  })}
                >
                  {productName}
                </h2>
              </Link>
            ) : (
              <h2
                className={cx(styles.heading, 'h5', {
                  [styles.extraPadding]: !hasIconAndTags && !hideRemoveButton && !isSpecialCard,
                })}
              >
                {productName}
              </h2>
            )}
            <div className={styles.cardInfoWrapper}>
              <div>
                {showPackaging && packaging && <p className={cx(styles.packaging, 'bodyS')}>{packaging}</p>}
                {!hidePrice && !isRestrictedUser && (
                  <p className={cx(styles.priceText, 'bodyS')}>{`${priceLabel}: ${
                    priceStr ? `${priceStr} ${currencyLabel ?? ''}/${unitLabel ? unitLabel.toLowerCase() : ''}` : ''
                  }`}</p>
                )}

                {(country !== '' || partNo !== '') && !isRestrictedUser && (
                  <p className={cx(styles.partNo, 'bodyS')}>{`${partNo ? `${partNoLabel} ${partNo}` : ''} ${
                    country && `- ${country}`
                  }`}</p>
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
                        pricePerUnitText={`${aLabel} ${pricePerUnit?.toFixed(2)?.replace('.', ',')} ${currencyLabel}`}
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
                        allowNegative={allowNegative}
                      />
                    )}
                  </>
                )}
              </div>

              <div className={styles.buttonsWrapper}>
                {(!!productVariantList?.length ||
                  (showAddToPurchaseListIcon && onSaveToPurchaseListClick) ||
                  (showFavoriteIcon && onFavoriteIconClick)) && (
                  <FlexContainer gap={0.5} justifyContent="flex-end" alignItems="center">
                    {productVariantList?.length > 1 && (
                      <ComponentWithTooltip
                        content={tooltips?.changeVariant}
                        element={
                          <IconButton
                            type="button"
                            icon="icon-layers"
                            onClick={() => onVariantsButtonClick?.()}
                            noBorder
                            isTransparent
                            size="medium"
                            noPadding
                            name="Open variants list"
                          />
                        }
                      />
                    )}
                    {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
                      <ComponentWithTooltip
                        content={tooltips?.addToPurchaseList}
                        element={
                          <IconButton
                            type="button"
                            icon="icon-file-plus"
                            onClick={() => onSaveToPurchaseListClick(partNo, totalPrice)}
                            noBorder={true}
                            isTransparent={true}
                            size="medium"
                            noPadding={true}
                            name="Add to purchase list"
                          />
                        }
                      />
                    )}
                    {showFavoriteIcon && onFavoriteIconClick && (
                      <ComponentWithTooltip
                        content={isFavorite ? tooltips?.removeFromFavorites : tooltips?.addToFavorites}
                        element={
                          <IconButton
                            type="button"
                            icon={isFavorite ? 'icon-heart1' : 'icon-heart-o'}
                            onClick={() => onFavoriteIconClick(partNo, isFavorite, totalPrice)}
                            noBorder
                            isTransparent
                            name="Add to favorite list"
                            className={isFavorite ? styles.favoriteIconActive : undefined}
                            size="medium"
                            noPadding
                            animate={isAddingToFavorites ? 'loading' : 'default'}
                          />
                        }
                      />
                    )}
                    {alertBox && (
                      <>
                        {isMobile ? (
                          <Button
                            type="button"
                            onClick={() => setAlertBoxOpen(true)}
                            className={styles.alertBoxButton}
                            children={alertBox.buttonText ?? 'Byt produkt'}
                            surface="primary"
                            iconRight={{ icon: 'icon-alert-circle', color: 'error' }}
                            size="x-small"
                          />
                        ) : (
                          <ComponentWithTooltip
                            content={alertBox.title}
                            element={
                              <Button
                                type="button"
                                onClick={alertBox.onClick}
                                className={styles.alertBoxButton}
                                children={alertBox.buttonText ?? 'Byt produkt'}
                                surface="primary"
                                iconRight={{ icon: 'icon-alert-circle', color: 'error' }}
                                size="x-small"
                              />
                            }
                          />
                        )}
                      </>
                    )}
                  </FlexContainer>
                )}

                {!hideCartButton && (
                  <>
                    {isRestrictedUser ? (
                      <Button
                        type="button"
                        onClick={() => addToCart(product)}
                        surface="primary"
                        disabled={buttonLoading || loading || disabled || quantity <= '0'}
                        name={addToCartBtnLabel}
                        children={addToCartBtnLabel}
                      />
                    ) : (
                      <IconButton
                        type="button"
                        icon="icon-shopping-cart"
                        onClick={() => addToCart(product)}
                        surface="primary"
                        noBorder
                        disabled={buttonLoading || loading || disabled || quantity <= '0'}
                        name={addToCartBtnLabel}
                        size="medium"
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </FlexContainer>
        </>
      )}
      {selectedVariantId && (
        <HorizontalVariants
          open={variantsOpen}
          variantsList={productVariantList}
          onVariantSelect={handlePackageChange}
          onCloseVariants={onCloseVariants}
          selectedVariantId={selectedVariantId}
          sellerOnlyTooltipText={tooltips?.sellerOnly}
        />
      )}
      {alertBox && isMobile && (
        <motion.div
          ref={alertBoxRef}
          className={styles.alertBoxWrapper}
          initial={{ y: '100%' }}
          animate={alertBoxOpen ? { y: '0%' } : { y: '100%' }}
          exit={{ y: '100%' }}
          transition={{
            type: 'tween',
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <AlertBox className={styles.alertBox} {...alertBox} />
        </motion.div>
      )}
    </div>
  )
}

export { ProductCardHorizontal }
