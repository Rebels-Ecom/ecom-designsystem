import cx from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { calculateTotalPrice } from '../../../../helpers/format-helper'
import { useDebounceWithPayload } from '../../../../helpers/generic-helper'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { IProduct } from '../../../../types/product'
import { AddToCartButton, Button, Icon, IconButton, Placeholder } from '../../atoms'
import { Tag } from '../../atoms/tag/tag'
import { VerticalVariants } from '../vertical-variants/vertical-variants'
import ProductContent from './components/product-content/product-content'
import ProductCardImage from './components/product-image/product-image'
import styles from './product-card-mini-vertical.module.css'

export interface IProductCardMiniVertical {
  isRestrictedUser?: boolean
  product: IProduct
  loading: boolean
  buttonLoading?: boolean
  disabled?: boolean
  // TODO: remove?
  hidePrice?: boolean
  isAddingToCart?: boolean
  addToCart: CallableFunction
  addToCartBtnLabel: string
  hideCartButton?: boolean
  onChangeQuantity?: CallableFunction
  showFavoriteIcon?: boolean
  favoriteProductsIds?: Array<string>
  onFavoriteIconClick?: CallableFunction
  isAddingToFavorites?: boolean
  showAddToPurchaseListIcon?: boolean
  onSaveToPurchaseListClick?: CallableFunction
  linkComponent?: any
  className?: string
  maxQuantity?: number
  onClick?: () => {} // TODO: needs param?
  productArea?: 'category' | 'recommended' | 'details' | 'cart' | 'inspiration'
  imagePriority?: {
    fetchPriority: 'auto' | 'high' | 'low'
    loading: 'eager' | 'lazy'
  }
  onVariantsButtonClick: CallableFunction
  onVariantChange?: CallableFunction
  onCloseVariants: CallableFunction
  tooltips?: {
    addToFavorites?: string
    removeFromFavorites?: string
    addToPurchaseList?: string
    changeVariant?: string
    sellerOnly?: string
    accessoryPotItem?: string
    stockShortage?: string
    outOfStock?: string
  }
  variantsInCart?: Array<{ variantId: string; quantity: number }>
  fullWidth?: boolean
}

const ProductCardMiniVertical = ({
  product,
  variantsInCart = [],
  addToCart,
  onChangeQuantity,
  hideCartButton,
  addToCartBtnLabel,
  productArea,
  buttonLoading,
  loading,
  disabled,
  isAddingToCart,
  favoriteProductsIds,
  className,
  linkComponent: Link,
  imagePriority,
  onClick,
  hidePrice,
  isRestrictedUser,
  onVariantsButtonClick,
  onCloseVariants,
  onVariantChange,
  showAddToPurchaseListIcon,
  showFavoriteIcon,
  onSaveToPurchaseListClick,
  onFavoriteIconClick,
  isAddingToFavorites,
  tooltips,
  maxQuantity, // TODO: implement
  fullWidth,
}: IProductCardMiniVertical & {
  product: IProduct
  variantsInCart?: Array<{ variantId: string; quantity: number }>
  addToCart: CallableFunction
  onChangeQuantity?: CallableFunction
}) => {
  const productVariants = product.productVariantList || []
  const initialVariantId = productVariants.find((pV) => pV.variantId === product.partNo)?.variantId || null
  const [variantsListOpen, setVariantsListOpen] = useState(false)
  const [cardState, setCardState] = useState(() => {
    const initialCartItem = variantsInCart.find((item) => item.variantId === initialVariantId)
    const initialQuantity = initialCartItem ? initialCartItem.quantity : 0

    return {
      ...product,
      productImage: getProductPicture(
        product.partNo,
        product.primaryImageUrl,
        '120',
        undefined,
        imagePriority?.loading,
        imagePriority?.fetchPriority
      ),
      quantity: initialQuantity,
      selectedVariantId: initialVariantId,
      totalPrice: calculateTotalPrice({
        unitPrice: product.pricePerUnit,
        quantity: initialQuantity === 0 ? 1 : initialQuantity,
        unitNumber: product.itemNumberPerSalesUnit,
      }),
      inputQuantity: initialQuantity, //Separate inputQuantity from myProduct.quantity
    }
  })
  const prevVariantsInCart = useRef(variantsInCart)
  const cardStateRef = useRef(cardState)
  useEffect(() => {
    // Find current variant's quantity with PROPER comparison
    const currentVariantCartItem = variantsInCart.find((item) => item.variantId === cardState.selectedVariantId)
    const prevVariantCartItem = prevVariantsInCart.current.find(
      (item) => item.variantId === cardState.selectedVariantId
    )

    // Only update if actual cart quantity changed FOR THIS VARIANT
    if (currentVariantCartItem?.quantity !== prevVariantCartItem?.quantity) {
      const newQuantity = currentVariantCartItem?.quantity || 0

      setCardState((prev) => {
        // Skip update if quantity is already correct
        if (prev.quantity === newQuantity) return prev

        return {
          ...prev,
          quantity: newQuantity,
          totalPrice: calculateTotalPrice({
            unitPrice: prev.pricePerUnit,
            quantity: newQuantity === 0 ? 1 : newQuantity,
            unitNumber: prev.itemNumberPerSalesUnit,
          }),
          inputQuantity: newQuantity,
        }
      })
    }

    // Update ref after processing
    prevVariantsInCart.current = variantsInCart
  }, [variantsInCart, cardState.selectedVariantId])

  useEffect(() => {
    return () => {
      prevVariantsInCart.current = []
    }
  }, [])

  const handleVariantChange = useCallback((variant: any) => {
    const currentCartItems = prevVariantsInCart.current

    const variantInCart = currentCartItems.find((item) => item.variantId === variant.variantId)

    const newQuantity = variantInCart?.quantity || 0

    setCardState((prevState) => {
      const newProd = {
        ...prevState,
        partNo: variant.variantId,
        selectedVariantId: variant.variantId,
        quantity: newQuantity,
        totalPrice: calculateTotalPrice({
          unitPrice: Number(variant.pricePerUnit),
          quantity: newQuantity === 0 ? 1 : newQuantity,
          unitNumber: variant.itemNumberPerSalesUnit,
        }),
        inputQuantity: newQuantity,
        productImage: variant.image ?? fallbackProductImageUrl,
        packaging: variant.variantName,
        price: variant.price,
        priceStr: variant.priceStr,
        pricePerUnit: variant.pricePerUnit && isFinite(variant.pricePerUnit) ? variant.pricePerUnit : 0,
        pricePerUnitString: variant.pricePerUnitString,
        salesUnit: variant.salesUnit,
        itemNumberPerSalesUnit: variant.itemNumberPerSalesUnit,
        sellerOnly: variant.sellerOnly,
        activeCampaign: variant.activeCampaign,
        productUrl: `/Product/${variant.variantId}`,
        outOfStock: variant.outOfStock,
        isAccessoryPotItem: variant?.isAccessoryPotItem,
        tags: variant?.tags,
      }
      onVariantChange?.(newProd)
      return newProd
    })

    setVariantsListOpen(false)
  }, [])

  function handleVariantsButtonClick() {
    setVariantsListOpen(true)
    onVariantsButtonClick?.()
  }

  const debouncedRequest = useDebounceWithPayload(({ id, q }: any) => {
    onChangeQuantity?.({ ...cardStateRef.current, partNo: id, quantity: q })
  }, 1000)

  const handleQuantityChange = useCallback(
    (newQuantity: number, id: string) => {
      setCardState((prevState) => ({
        ...prevState,
        quantity: newQuantity,
        totalPrice: calculateTotalPrice({
          unitPrice: prevState.pricePerUnit,
          quantity: newQuantity === 0 ? 1 : newQuantity,
          unitNumber: prevState.itemNumberPerSalesUnit,
        }),
        inputQuantity: newQuantity,
      }))

      debouncedRequest({ id: id, q: newQuantity })
    },
    [debouncedRequest]
  )

  const handleAddToCart = useCallback(() => {
    if (isRestrictedUser) {
      addToCart()
    } else {
      const newQ = cardState.quantity === 0 ? 1 : cardState.quantity
      setCardState((prev) => ({ ...prev, quantity: newQ, inputQuantity: newQ }))
      debouncedRequest({ id: cardState.partNo, q: newQ })
    }
  }, [isRestrictedUser, cardState, debouncedRequest])

  function handleCloseVariants() {
    setVariantsListOpen(false)
    onCloseVariants?.()
  }

  const isCampaignCard = cardState.activeCampaign?.title
  const isLimitedCard = !!(!cardState.activeCampaign && cardState.isLimitedProduct && cardState.limitedLabel)
  const isOutOfStockCard = !!(!cardState.activeCampaign && cardState.outOfStock && cardState.outOfStockLabel)
  const isSpecialCard = isCampaignCard || isLimitedCard || isOutOfStockCard
  const packageBtnDisabled = !cardState.productVariantList || cardState.productVariantList.length <= 1
  const tagsList = cardState.activeCampaign ? cardState.tags?.slice(0, 3) : cardState.tags

  function isFavoriteProduct(partNo: string) {
    if (!favoriteProductsIds || favoriteProductsIds.length === 0) return false
    return favoriteProductsIds.includes(partNo)
  }

  const isFavorite = isFavoriteProduct(cardState.partNo)

  const style: { [key: string]: string } = {
    '--campaign-color': cardState.activeCampaign?.color ?? '#FFF',
    '--limited-product-color': isLimitedCard ? '#F08A00' : '#FFF',
    '--out-of-stock-product-color': isOutOfStockCard ? '#e4b6c3' : '#FFF',
  }

  return loading ? (
    <div className={cx(styles.productCardMiniVertical, styles.loading, { [styles.fullWidth]: fullWidth })}>
      <Placeholder type="image" className={styles.loadingImage} />
      <div className={styles.placeholderContent}>
        <Placeholder type={'heading'} />
        <Placeholder type={'p_long'} />
        <Placeholder type={'p_long'} />
      </div>
    </div>
  ) : (
    <div
      key={cardState.partNo}
      className={cx(styles.productCardMiniVertical, className ? className : '', {
        [styles.specialCard]: isSpecialCard && !loading,
        [styles.campaign]: isCampaignCard && !loading,
        [styles.limitedProduct]: isLimitedCard && !loading,
        [styles.outOfStockProduct]: isOutOfStockCard && !loading,
        [styles.fullWidth]: fullWidth,
      })}
      style={style}
    >
      {!cardState.outOfStock && cardState.activeCampaign?.title && !loading && (
        <div className={styles.box}>{cardState.activeCampaign.title}</div>
      )}
      {!cardState.activeCampaign && cardState.isLimitedProduct && cardState.limitedLabel && !loading && (
        <div className={styles.box}>{cardState.limitedLabel}</div>
      )}
      {cardState.outOfStock && cardState.outOfStockLabel && !loading && (
        <div className={styles.box}>{cardState.outOfStockLabel}</div>
      )}
      <div className={styles.iconsWrapper}>
        {cardState.sellerOnly && <Icon icon="icon-eye" size="medium" />}
        {cardState.isAccessoryPotItem && <span className={`${styles.accessoryPotItemIcon} ${styles.icon}`}>S</span>}
        {Array.isArray(cardState.tags) && cardState.tags?.length ? (
          <>
            {tagsList?.map((tag) => (
              <Tag key={tag.text} {...tag} shape="pill" className={styles.tag} />
            ))}
          </>
        ) : null}
      </div>
      <ProductCardImage
        Link={Link}
        productImage={cardState.productImage}
        productUrl={cardState.productUrl}
        onClick={onClick}
      />
      <ProductContent
        productName={cardState.productName}
        productUrl={cardState.productUrl}
        Link={Link}
        onClick={onClick}
        quantity={cardState.quantity}
        salesUnit={cardState.salesUnit}
        itemNumberPerSalesUnit={cardState.itemNumberPerSalesUnit}
        price={cardState.totalPrice}
        isRestrictedUser={isRestrictedUser}
        hidePrice={hidePrice}
        icons={
          <div className={styles.clickable}>
            {showAddToPurchaseListIcon && onSaveToPurchaseListClick && (
              <IconButton
                type="button"
                icon={'icon-file-plus'}
                className={styles.purchaseListIcon}
                onClick={() => onSaveToPurchaseListClick(cardState.partNo, cardState.totalPrice)}
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
                onClick={() => onFavoriteIconClick(cardState.partNo, isFavorite, cardState.totalPrice)}
                size="large"
                isTransparent
                noBorder
                noPadding
                name={tooltips?.addToFavorites ?? 'Add to favorite list'}
                animate={isAddingToFavorites ? 'loading' : 'default'}
              />
            )}
          </div>
        }
      />
      <Button
        type="button"
        surface="secondary"
        iconRight={packageBtnDisabled ? undefined : { icon: 'icon-layers' }}
        rounded
        fullWidth
        onClick={handleVariantsButtonClick}
        disabled={loading || packageBtnDisabled}
        className={styles.variant}
        name="Select packaging"
      >
        {cardState.packaging}
      </Button>
      {!hideCartButton && (
        <AddToCartButton
          buttonLabel={addToCartBtnLabel}
          id={`${cardState.partNo}-${productArea ?? 'category'}`}
          onClick={handleAddToCart}
          onChange={(val) => handleQuantityChange(val, cardState.partNo)}
          quantity={cardState.inputQuantity}
          disabled={buttonLoading || loading || disabled}
        />
      )}
      {variantsListOpen && (
        <VerticalVariants
          onCloseVariants={handleCloseVariants}
          onVariantSelect={handleVariantChange}
          selectedVariantId={cardState.partNo}
          variantsList={cardState.productVariantList}
          open={variantsListOpen}
          isRestrictedUser={isRestrictedUser}
        />
      )}
    </div>
  )
}

export { ProductCardMiniVertical }
