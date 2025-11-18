import React from 'react'
import styles from './actions.module.css'
import { Button, ButtonWithTooltip, IconButton } from '../../../../atoms'
import cx from 'classnames'
import { IProductVariant } from '../../../../molecules/product-variant/product-variant'
import { ProductQuantityInput } from '../../../../molecules'
import MobileActions from './mobile-actions'
import { AnimatePresence, motion } from 'framer-motion'

export interface IProductDetailsActions {
  isRestrictedUser: boolean
  packaging: string
  partNo: string
  quantity: string
  outOfStock: boolean
  variantList: Array<IProductVariant>
  inputQuantity: number
  isMobile: boolean
  // Mobile
  handleAddToCart: () => void
  // Desktop
  addToCart: () => void
  handleQuantityChange: (q: number, id: string) => void
  addToCartLabel: string
  availableForOrder?: boolean
  loading?: boolean
  showFavoriteIcon?: boolean
  onFavoriteIconClick?: CallableFunction
  favoriteProductsIds?: string[]
  showAddToPurchaseListIcon?: boolean
  onSaveToPurchaseListClick?: CallableFunction
  handleVariantsButtonClick: CallableFunction
  isTablet?: boolean
  quantityPerPackageLabel?: string
  itemNumberPerSalesUnit: number
  unitLabel?: string
  aLabel?: string
  priceStr: string
  currencyLabel?: string
  totalPrice?: string
  productName?: string
  handleOnChangeQuantity?: CallableFunction
  salesUnit: string
  showMobileActions: boolean
}

const Actions = ({
  isRestrictedUser,
  packaging,
  partNo,
  quantity,
  outOfStock,
  variantList,
  inputQuantity,
  isMobile,
  handleAddToCart,
  addToCart,
  handleQuantityChange,
  addToCartLabel,
  availableForOrder,
  loading,
  showFavoriteIcon,
  onFavoriteIconClick,
  favoriteProductsIds,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  handleVariantsButtonClick,
  isTablet,
  aLabel,
  currencyLabel,
  itemNumberPerSalesUnit,
  priceStr,
  quantityPerPackageLabel,
  unitLabel,
  totalPrice,
  productName,
  salesUnit,
  handleOnChangeQuantity,
  showMobileActions,
}: IProductDetailsActions) => {
  const isFavorite = (id: string) => favoriteProductsIds?.includes(id)

  if (isMobile) {
    return (
      <AnimatePresence>
        {showMobileActions && (
          <motion.div
            className={cx(styles.actions, styles.mobileActions)}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <p className={styles.productName}>{productName}</p>
            {!isRestrictedUser && (
              <div className={styles.priceRow}>
                <p className={cx(styles.specsText, 'bodyS')}>
                  {`${quantityPerPackageLabel} ${itemNumberPerSalesUnit} ${unitLabel} ${aLabel} ${priceStr} ${currencyLabel}`}
                </p>
                <p className={cx(styles.specsText, 'bodyS')}>
                  {totalPrice} {currencyLabel}
                </p>
              </div>
            )}
            <MobileActions
              addToCartLabel={addToCartLabel}
              handleAddToCart={handleAddToCart}
              handleQuantityChange={handleQuantityChange}
              handleVariantsButtonClick={handleVariantsButtonClick}
              inputQuantity={inputQuantity}
              outOfStock={outOfStock}
              packaging={packaging}
              partNo={partNo}
              variantList={variantList}
              availableForOrder={availableForOrder}
              loading={loading}
              isFixed
            />
          </motion.div>
        )}
      </AnimatePresence>
    )
  } else {
    return (
      <div className={cx(styles.actions, styles.desktopActions)}>
        <ButtonWithTooltip
          content="Välj variant"
          type={'button'}
          className={cx(styles.btn, styles.variantBtn)}
          surface={'secondary'}
          iconRight={variantList.length <= 1 ? undefined : { icon: 'icon-layers' }}
          rounded
          onClick={() => handleVariantsButtonClick()}
          disabled={variantList.length <= 1}
          name="Select packaging"
          side={isTablet ? 'top' : 'right'}
          align={isTablet ? 'end' : 'center'}
          fullWidth
        >
          {packaging}
        </ButtonWithTooltip>
        {!isRestrictedUser && totalPrice && (
          <ProductQuantityInput
            className={styles.quantityInput}
            salesUnit={salesUnit}
            itemNumberPerSalesUnit={itemNumberPerSalesUnit}
            totalPrice={totalPrice}
            quantity={quantity}
            quantityInputId={partNo}
            onChange={handleOnChangeQuantity}
          />
        )}
        <div className={styles.row}>
          <Button
            className={styles.btn}
            type="button"
            surface="primary"
            size="large"
            onClick={addToCart}
            disabled={quantity === '0' || outOfStock || !availableForOrder}
            fullWidth
          >
            {addToCartLabel}
          </Button>
          {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
            <IconButton
              type="button"
              icon="icon-file-plus"
              className={styles.purchaseListIcon}
              onClick={() => onSaveToPurchaseListClick(partNo)}
              size="large"
              isTransparent
              noBorder
              noPadding
              name="Add to purchase list"
            />
          )}
          {showFavoriteIcon && onFavoriteIconClick && (
            <IconButton
              type="button"
              icon={isFavorite(partNo) ? 'icon-heart1' : 'icon-heart-o'}
              className={cx(styles.favoriteIcon, isFavorite(partNo) ? styles.favoriteIconActive : '')}
              onClick={() => onFavoriteIconClick(partNo, isFavorite(partNo))}
              size="large"
              isTransparent
              noBorder
              noPadding
              name="Add to favorite list"
            />
          )}
        </div>
      </div>
    )
  }
}

export { Actions }
