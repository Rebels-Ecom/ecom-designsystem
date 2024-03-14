import React, { useState, useEffect } from 'react'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { IProduct } from '../../../../types/product'
import { convertNumToStr } from '../../../../helpers/format-helper'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { ProductCardHorizontal } from '../product-card-horizontal/product-card-horizontal'
import { ProductCardVertical } from '../product-card-vertical/product-card-vertical'
import { ProductCardRestricted } from '../product-card-restricted/product-card-restricted'
import { IPicture } from '../../atoms/picture/picture'
import { TAlertBox } from '../../atoms/alert-box/alert-box'
import { mediaQueryHelper } from '../../layouts'

export type TCardDisplayType = 'vertical' | 'horizontal'

export type TProductCardVertical = {
  cardDisplay: 'vertical'
  productImage: IPicture
  variantsOpen?: boolean
  handlePackageChange: CallableFunction
  selectedVariantId?: string
  onVariantsButtonClick: CallableFunction
  onCloseVariants: CallableFunction
}

export type TProductCardHorizontal = {
  cardDisplay: 'horizontal'
  onClickRemoveProduct?: CallableFunction
  removingProduct?: boolean
}

export interface IProductCard {
  cardDisplay: TCardDisplayType
  isRestrictedUser?: boolean
  product: IProduct
  loading: boolean
  buttonLoading?: boolean
  disabled?: boolean
  // TODO: remove?
  hidePrice?: boolean
  addToCart: CallableFunction
  addToCartBtnLabel: string
  hideCartButton?: boolean
  onChangeQuantity?: CallableFunction
  productQuantityDisabled?: boolean
  /**
   * Sets a custom default quantity to start from
   * @default 0
   */
  defaultQuantity?: string
  onRemoveProduct?: CallableFunction
  hideRemoveButton?: boolean
  showFavoriteIcon?: boolean
  isFavoriteIconActive?: boolean
  onFavoriteIconClick?: CallableFunction
  showAddToPurchaseListIcon?: boolean
  onSaveToPurchaseListClick?: CallableFunction
  border?: boolean
  displaySmallImage?: boolean
  linkComponent?: any
  className?: string
  maxQuantity?: number
  sellerOnlyTooltipText?: string
  accessoryPotItemTooltipText?: string
  alertBox?: TAlertBox
  onClick?: CallableFunction
}

export type TProductCard = IProductCard & (TProductCardVertical | TProductCardHorizontal)

function ProductCard({
  cardDisplay,
  isRestrictedUser,
  product,
  loading,
  buttonLoading,
  disabled,
  addToCart,
  addToCartBtnLabel,
  hideCartButton,
  hidePrice,
  onChangeQuantity,
  productQuantityDisabled,
  defaultQuantity,
  onRemoveProduct,
  hideRemoveButton,
  showFavoriteIcon,
  isFavoriteIconActive,
  onFavoriteIconClick,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  border,
  displaySmallImage,
  linkComponent: Link,
  className,
  maxQuantity,
  sellerOnlyTooltipText,
  accessoryPotItemTooltipText,
  alertBox,
  onClick,
}: TProductCard) {
  if (!cardDisplay) {
    throw new Error('cardDisplay must be assigned')
  }

  const { isMobile } = mediaQueryHelper()
  const { partNo, primaryImageUrl, pricePerUnit, itemNumberPerSalesUnit, quantity, priceStr, activeCampaign } = product
  const [variantsListOpen, setVariantsListOpen] = useState<boolean>(false)
  const [myProduct, setProduct] = useState({
    ...product,
    productImage: getProductPicture(partNo, primaryImageUrl, isMobile ? '120' : '100'),
    quantity: quantity ? quantity : '1',
    totalPrice: convertNumToStr(pricePerUnit * itemNumberPerSalesUnit * (defaultQuantity ?? quantity ? parseInt(defaultQuantity ?? quantity) : 0)),
    selectedVariantId: partNo,
  })

  useEffect(() => {
    setProduct((prevState) => ({
      ...prevState,
      quantity: quantity ? quantity : '1',
      priceStr: priceStr,
      pricePerUnit: pricePerUnit,
      totalPrice: convertNumToStr(pricePerUnit * itemNumberPerSalesUnit * (defaultQuantity ?? quantity ? parseInt(defaultQuantity ?? quantity) : 0)),
      activeCampaign: activeCampaign,
    }))
  }, [quantity, priceStr, pricePerUnit, activeCampaign])

  function handleOnChangeQuantity(productQuantity: number) {
    if (maxQuantity && productQuantity > maxQuantity) {
      return
    }

    const newProduct = {
      ...myProduct,
      quantity: productQuantity.toString(),
      totalPrice: convertNumToStr(myProduct.pricePerUnit * myProduct.itemNumberPerSalesUnit * productQuantity),
    }
    onChangeQuantity ? onChangeQuantity(newProduct) : setProduct(newProduct)
  }

  function handleVariantsButtonClick() {
    setVariantsListOpen(true)
  }

  function handleCloseVariants() {
    setVariantsListOpen(false)
  }

  function handleRemoveProduct(id: string) {
    onRemoveProduct && onRemoveProduct(id)
  }

  function handlePackageChange(selectedVariant: any) {
    const quantity = myProduct.partNo === selectedVariant.variantId ? parseInt(myProduct.quantity) : 1
    setProduct((prevState) => ({
      ...prevState,
      partNo: selectedVariant.variantId,
      productImage: selectedVariant.image ?? fallbackProductImageUrl,
      packaging: selectedVariant.variantName,
      price: selectedVariant.price,
      priceStr: selectedVariant.priceStr,
      pricePerUnit: selectedVariant.pricePerUnit,
      pricePerUnitString: selectedVariant.pricePerUnitString,
      salesUnit: selectedVariant.salesUnit,
      itemNumberPerSalesUnit: selectedVariant.itemNumberPerSalesUnit,
      totalPrice: convertNumToStr(selectedVariant.price * selectedVariant.itemNumberPerSalesUnit * quantity),
      quantity: quantity.toString(),
      selectedVariantId: selectedVariant.variantId,
      sellerOnly: selectedVariant.sellerOnly,
      activeCampaign: selectedVariant.activeCampaign,
      productUrl: `/Product/${selectedVariant.variantId}`,
    }))
    setVariantsListOpen(false)
  }

  if (cardDisplay === 'horizontal') {
    return (
      <ProductCardHorizontal
        isRestrictedUser={isRestrictedUser}
        cardDisplay="horizontal"
        product={myProduct}
        loading={loading}
        buttonLoading={buttonLoading}
        disabled={disabled}
        addToCart={addToCart}
        addToCartBtnLabel={addToCartBtnLabel}
        hideCartButton={hideCartButton}
        hidePrice={hidePrice}
        onChangeQuantity={handleOnChangeQuantity}
        productQuantityDisabled={productQuantityDisabled}
        defaultQuantity={defaultQuantity}
        onClickRemoveProduct={handleRemoveProduct}
        hideRemoveButton={hideRemoveButton}
        showFavoriteIcon={showFavoriteIcon}
        isFavoriteIconActive={isFavoriteIconActive}
        onFavoriteIconClick={onFavoriteIconClick}
        showAddToPurchaseListIcon={showAddToPurchaseListIcon}
        onSaveToPurchaseListClick={onSaveToPurchaseListClick}
        border={border}
        displaySmallImage={displaySmallImage}
        linkComponent={Link}
        className={className}
        maxQuantity={maxQuantity}
        sellerOnlyTooltipText={sellerOnlyTooltipText}
        accessoryPotItemTooltipText={accessoryPotItemTooltipText}
        alertBox={alertBox}
        onClick={onClick}
      />
    )
  }
  if (cardDisplay === 'vertical') {
    if (isRestrictedUser) {
      return (
        <ProductCardRestricted
          cardDisplay="vertical"
          product={myProduct}
          productImage={myProduct.productImage}
          loading={loading}
          buttonLoading={buttonLoading}
          disabled={disabled}
          variantsOpen={variantsListOpen}
          onVariantsButtonClick={handleVariantsButtonClick}
          handlePackageChange={handlePackageChange}
          selectedVariantId={myProduct.selectedVariantId}
          addToCart={addToCart}
          addToCartBtnLabel={addToCartBtnLabel}
          hideCartButton={hideCartButton}
          hidePrice={hidePrice}
          linkComponent={Link}
          className={className}
          sellerOnlyTooltipText={sellerOnlyTooltipText}
          accessoryPotItemTooltipText={accessoryPotItemTooltipText}
          onCloseVariants={handleCloseVariants}
          onClick={onClick}
        />
      )
    }

    return (
      <ProductCardVertical
        cardDisplay="vertical"
        product={myProduct}
        productImage={myProduct.productImage}
        loading={loading}
        buttonLoading={buttonLoading}
        disabled={disabled}
        variantsOpen={variantsListOpen}
        onVariantsButtonClick={handleVariantsButtonClick}
        handlePackageChange={handlePackageChange}
        selectedVariantId={myProduct.selectedVariantId}
        addToCart={addToCart}
        addToCartBtnLabel={addToCartBtnLabel}
        hideCartButton={hideCartButton}
        hidePrice={hidePrice}
        onChangeQuantity={handleOnChangeQuantity}
        productQuantityDisabled={productQuantityDisabled}
        defaultQuantity={defaultQuantity}
        showFavoriteIcon={showFavoriteIcon}
        isFavoriteIconActive={isFavoriteIconActive}
        onFavoriteIconClick={onFavoriteIconClick}
        showAddToPurchaseListIcon={showAddToPurchaseListIcon}
        onSaveToPurchaseListClick={onSaveToPurchaseListClick}
        linkComponent={Link}
        className={className}
        maxQuantity={maxQuantity}
        sellerOnlyTooltipText={sellerOnlyTooltipText}
        accessoryPotItemTooltipText={accessoryPotItemTooltipText}
        onCloseVariants={handleCloseVariants}
        alertBox={alertBox}
        onClick={onClick}
      />
    )
  }

  return null
}

export { ProductCard }
