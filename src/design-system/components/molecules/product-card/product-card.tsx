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
  cardDisplay: 'vertical';
  productImage: IPicture;
  variantsOpen?: boolean;
  handlePackageChange: CallableFunction;
  selectedVariantId?: string;
  onVariantsButtonClick: CallableFunction;
}

export type TProductCardHorizontal = {
  cardDisplay: 'horizontal';
  onClickRemoveProduct?: CallableFunction;
  removingProduct?: boolean;
}

export interface IProductCard {
  cardDisplay: TCardDisplayType
  product: IProduct
  /**
   * Sets a custom default quantity to start from
   * @default 0
   */
  defaultQuantity?: string;
  addToCartButton: IButton
  addToCart: CallableFunction
  onChangeQuantity?: CallableFunction
  hideCartButton?: boolean
  loading: boolean
  linkComponent?: any
  hideRemoveButton?: boolean
  onRemoveProduct?: CallableFunction
  productQuantityDisabled?: boolean
  className?: string
  changePackagingButton?: IButton;
  border?: boolean;
  campaign?: {
    title: string;
    color: string;
  }
}

export type TProductCard = IProductCard & (TProductCardVertical | TProductCardHorizontal)

function ProductCard({
  cardDisplay,
  product,
  addToCartButton,
  addToCart,
  hideCartButton,
  onChangeQuantity,
  onRemoveProduct,
  hideRemoveButton,
  productQuantityDisabled,
  loading,
  changePackagingButton,
  linkComponent: Link,
  className,
  defaultQuantity,
  campaign,
  border
}: TProductCard) {
  
  if (!cardDisplay) {
    throw new Error("cardDisplay must be assigned");
  }

  const { productId, productImageUrl, price, itemNumberPerSalesUnit, quantity } = product
  const [variantsListOpen, setVariantsListOpen] = useState<boolean>(false)
  const [myProduct, setProduct] = useState({
    ...product,
    productImage: getProductPicture(productId, productImageUrl),
    quantity: quantity ? quantity : '1',
    totalPrice: convertNumToStr(price * itemNumberPerSalesUnit * ((defaultQuantity ?? quantity) ? parseInt(defaultQuantity ?? quantity) : 0)),
    selectedVariantId: productId,
  })

  function handleOnChangeQuantity(productQuantity: number) {
    setProduct((prevState) => {
      const newProduct = {
        ...prevState,
        quantity: productQuantity.toString(),
        totalPrice: convertNumToStr(myProduct.price * myProduct.itemNumberPerSalesUnit * productQuantity)
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
    const quantity = myProduct.productId === selectedVariant.variantId ? parseInt(myProduct.quantity) : 1
    setProduct((prevState) => ({
      ...prevState,
      productId: selectedVariant.variantId,
      productImage: getProductPicture(selectedVariant.variantId, selectedVariant.imageUrl ? selectedVariant.imageUrl : fallbackProductImageUrl),
      country: selectedVariant.country,
      packaging: selectedVariant.variantName,
      priceStr: selectedVariant.listPricePerUnitString,
      price: selectedVariant.price,
      salesUnit: selectedVariant.salesUnit,
      itemNumberPerSalesUnit: selectedVariant.itemNumberPerSalesUnit,
      totalPrice: convertNumToStr(selectedVariant.price * selectedVariant.itemNumberPerSalesUnit * quantity),
      quantity: quantity.toString(),
      selectedVariantId: selectedVariant.variantId,
    }))
    setVariantsListOpen(false)
  }

  if (cardDisplay === 'horizontal') {
    return (
      <ProductCardHorizontal
        cardDisplay='horizontal'
        loading={loading}
        product={myProduct}
        onChangeQuantity={handleOnChangeQuantity}
        productQuantityDisabled={productQuantityDisabled}
        addToCartButton={addToCartButton}
        addToCart={addToCart}
        onClickRemoveProduct={handleRemoveProduct}
        linkComponent={Link}
        hideRemoveButton={hideRemoveButton}
        className={className}
        hideCartButton={hideCartButton}
        defaultQuantity={defaultQuantity}
        campaign={campaign}
        border={border}
      />
    )
  }
  if (cardDisplay === 'vertical') {
    return (
      <ProductCardVertical
        cardDisplay='vertical'
        loading={loading}
        product={myProduct}
        productImage={myProduct.productImage}
        onChangeQuantity={handleOnChangeQuantity}
        productQuantityDisabled={productQuantityDisabled}
        addToCartButton={addToCartButton}
        addToCart={addToCart}
        changePackagingButton={changePackagingButton}
        onVariantsButtonClick={handleVariantsButtonClick}
        variantsOpen={variantsListOpen}
        selectedVariantId={myProduct.selectedVariantId}
        handlePackageChange={handlePackageChange}
        linkComponent={Link}
        className={className}
        hideCartButton={hideCartButton}
        defaultQuantity={defaultQuantity}
        campaign={campaign}
      />
    )
  }

  return null;
}

export { ProductCard }
