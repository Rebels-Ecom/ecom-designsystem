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
  listPriceLabel?: string
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
  linkComponent?: any
  className?: string
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
  onChangeQuantity,
  productQuantityDisabled,
  defaultQuantity,
  onRemoveProduct,
  hideRemoveButton,
  listPriceLabel,
  campaign,
  limitedProductText,
  showFavoriteIcon,
  isFavoriteIconActive,
  onFavoriteIconClick,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  border,
  linkComponent: Link,
  className,
}: TProductCard) {
  if (!cardDisplay) {
    throw new Error('cardDisplay must be assigned')
  }

  const { partNo, productImageUrl, price, itemNumberPerSalesUnit, quantity } = product
  const [variantsListOpen, setVariantsListOpen] = useState<boolean>(false)
  const [myProduct, setProduct] = useState({
    ...product,
    productImage: getProductPicture(partNo, productImageUrl),
    quantity: quantity ? quantity : '1',
    totalPrice: convertNumToStr(price * itemNumberPerSalesUnit * (defaultQuantity ?? quantity ? parseInt(defaultQuantity ?? quantity) : 0)),
    selectedVariantId: partNo,
  })

  function handleOnChangeQuantity(productQuantity: number) {
    setProduct((prevState) => {
      const newProduct = {
        ...prevState,
        quantity: productQuantity.toString(),
        totalPrice: convertNumToStr(myProduct.price * myProduct.itemNumberPerSalesUnit * productQuantity),
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
      priceStr: selectedVariant.priceStr,
      price: selectedVariant.price,
      salesUnit: selectedVariant.salesUnit,
      itemNumberPerSalesUnit: selectedVariant.itemNumberPerSalesUnit,
      totalPrice: convertNumToStr(selectedVariant.price * selectedVariant.itemNumberPerSalesUnit * quantity),
      quantity: quantity.toString(),
      selectedVariantId: selectedVariant.variantId,
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
        linkComponent={Link}
        className={className}
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
        onChangeQuantity={handleOnChangeQuantity}
        productQuantityDisabled={productQuantityDisabled}
        defaultQuantity={defaultQuantity}
        listPriceLabel={listPriceLabel}
        campaign={campaign}
        limitedProductText={limitedProductText}
        showFavoriteIcon={showFavoriteIcon}
        isFavoriteIconActive={isFavoriteIconActive}
        onFavoriteIconClick={onFavoriteIconClick}
        showAddToPurchaseListIcon={showAddToPurchaseListIcon}
        onSaveToPurchaseListClick={onSaveToPurchaseListClick}
        linkComponent={Link}
        className={className}
      />
    )
  }

  return null
}

export { ProductCard }
