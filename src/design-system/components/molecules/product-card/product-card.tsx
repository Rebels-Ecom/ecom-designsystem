import React, { useState, useEffect, useRef } from 'react'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { IButton } from '../../atoms/button/button'
import { IProduct } from '../../../../types/product'
import { convertNumToStr } from '../../../../helpers/format-helper'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { ProductCardHorizontal } from '../product-card-horizontal/product-card-horizontal'
import { ProductCardVertical } from '../product-card-vertical/product-card-vertical'

export type TCardDisplayType = 'vertical' | 'horizontal'
export interface IProductCard extends IProduct {
  product: IProduct
  changePackagingButton: IButton
  addToCartButton: IButton
  addToCart: CallableFunction
  onChangeQuantity?: CallableFunction
  hideCartButton?: boolean
  loading: boolean
  linkComponent?: any
  showLinkIcon?: boolean
  cardDisplay?: TCardDisplayType
  hideRemoveButton?: boolean
  onRemoveProduct?: CallableFunction
  productQuantityDisabled?: boolean
  className?: string
}

function ProductCard({
  cardDisplay = 'vertical',
  product,
  changePackagingButton,
  addToCartButton,
  addToCart,
  hideCartButton,
  onChangeQuantity,
  onRemoveProduct,
  hideRemoveButton,
  productQuantityDisabled,
  loading,
  linkComponent: Link,
  className,
}: IProductCard) {
  const { productId, productImageUrl, price, itemNumberPerSalesUnit, quantity } = product
  const [variantsListOpen, setVariantsListOpen] = useState<boolean>(false)
  const [myProduct, setProduct] = useState({
    ...product,
    productImage: getProductPicture(productId, productImageUrl),
    quantity: quantity ? quantity : '1',
    totalPrice: convertNumToStr(price * itemNumberPerSalesUnit * (quantity ? parseInt(quantity) : 1)),
    selectedVariantId: productId,
  })
  const didMount = useRef<boolean>(false)

  function handleOnChangeQuantity(productQuantity: number) {
    setProduct((prevState) => ({
      ...prevState,
      quantity: productQuantity.toString(),
      totalPrice: convertNumToStr(myProduct.price * myProduct.itemNumberPerSalesUnit * productQuantity),
    }))
  }

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      return
    }
    onChangeQuantity && onChangeQuantity(myProduct)
  }, [myProduct.quantity])

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
      />
    )
  }
  return (
    <ProductCardVertical
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
    />
  )
}

export { ProductCard }
