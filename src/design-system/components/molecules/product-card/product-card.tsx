import React, { useState } from 'react'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { IButton } from '../../atoms/button/button'
import { IProduct } from '../../../../types/product'
import { convertNumToStr } from '../../../../helpers/format-helper'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { ProductCardHorizontal } from '../product-card-horizontal/product-card-horizontal'
import { ProductCardVertical } from '../product-card-vertical/product-card-vertical'
import { IPicture } from '../../atoms/picture/picture'

export type TCardDisplayType = 'vertical' | 'horizontal'

export type TProductCardVertical = {
  cardDisplay: 'vertical'
  productImage: IPicture
  variantsOpen?: boolean
  handlePackageChange: CallableFunction
  selectedVariantId?: string
  onVariantsButtonClick: CallableFunction
}

export type TProductCardHorizontal = {
  cardDisplay: 'horizontal'
  onClickRemoveProduct?: CallableFunction
  removingProduct?: boolean
}

export interface IProductCard {
  cardDisplay: TCardDisplayType
  product: IProduct
  loading: boolean
  buttonLoading?: boolean
  disabled?: boolean
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
  campaign?: {
    title: string
    color: string
  }
  limitedProductText?: string
  showFavoriteIcon?: boolean
  isFavoriteIconActive?: boolean
  onFavoriteIconClick?: CallableFunction
  showAddToPurchaseListIcon?: boolean
  onSaveToPurchaseListClick?: CallableFunction
  border?: boolean
  displaySmallImage?: boolean
  linkComponent?: any
  className?: string
  maxQuantity?: number;
  sellerOnlyTooltipText?: string;
}

export type TProductCard = IProductCard & (TProductCardVertical | TProductCardHorizontal)

function ProductCard({
  cardDisplay,
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
  campaign,
  limitedProductText,
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
  sellerOnlyTooltipText
}: TProductCard) {
  if (!cardDisplay) {
    throw new Error('cardDisplay must be assigned')
  }

  const { partNo, primaryImageUrl, pricePerUnit, itemNumberPerSalesUnit, quantity } = product
  const [variantsListOpen, setVariantsListOpen] = useState<boolean>(false)
  const [myProduct, setProduct] = useState({
    ...product,
    productImage: getProductPicture(partNo, primaryImageUrl),
    quantity: quantity ? quantity : '1',
    totalPrice: convertNumToStr(pricePerUnit * itemNumberPerSalesUnit * (defaultQuantity ?? quantity ? parseInt(defaultQuantity ?? quantity) : 0)),
    selectedVariantId: partNo,
  })

  function handleOnChangeQuantity(productQuantity: number) {
    if (maxQuantity && (productQuantity > maxQuantity)) {
      return;
    }
    
    setProduct((prevState) => {
      const newProduct = {
        ...prevState,
        quantity: productQuantity.toString(),
        totalPrice: convertNumToStr(myProduct.pricePerUnit * myProduct.itemNumberPerSalesUnit * productQuantity),
      }

      onChangeQuantity?.(newProduct)

      return newProduct
    })
  }

  function handleVariantsButtonClick() {
    setVariantsListOpen(true)
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
      productUrl: `/Product/${selectedVariant.variantId}`,
    }))
    setVariantsListOpen(false)
  }

  if (cardDisplay === 'horizontal') {
    return (
      <ProductCardHorizontal
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
        campaign={campaign}
        limitedProductText={limitedProductText}
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
      />
    )
  }
  if (cardDisplay === 'vertical') {
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
        campaign={campaign}
        limitedProductText={limitedProductText}
        showFavoriteIcon={showFavoriteIcon}
        isFavoriteIconActive={isFavoriteIconActive}
        onFavoriteIconClick={onFavoriteIconClick}
        showAddToPurchaseListIcon={showAddToPurchaseListIcon}
        onSaveToPurchaseListClick={onSaveToPurchaseListClick}
        linkComponent={Link}
        className={className}
        maxQuantity={maxQuantity}
        sellerOnlyTooltipText={sellerOnlyTooltipText}
      />
    )
  }

  return null
}

export { ProductCard }
