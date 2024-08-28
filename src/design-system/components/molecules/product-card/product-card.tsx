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

export type TCardDisplayType = 'vertical' | 'horizontal'

export type TProductCardVertical = {
  cardDisplay: 'vertical';
  showPackaging?: never;
}

export type TProductCardHorizontal = {
  cardDisplay: 'horizontal'
  onClickRemoveProduct?: CallableFunction
  removingProduct?: boolean
  showPackaging?: boolean; 
}

export interface IProductCard {
  productImage: IPicture
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
  favoriteProductsIds?: Array<string>
  onFavoriteIconClick?: CallableFunction
  isAddingToFavorites?: boolean;
  showAddToPurchaseListIcon?: boolean
  onSaveToPurchaseListClick?: CallableFunction
  border?: boolean
  displaySmallImage?: boolean
  linkComponent?: any
  className?: string
  maxQuantity?: number
  alertBox?: TAlertBox
  onClick?: CallableFunction
  debounceQuantityVal?: number
  productArea?: 'category' | 'recommended' | 'details' | 'cart' | 'inspiration';
  imagePriority?: {
    fetchPriority: 'auto' | 'high' | 'low',
    loading: 'eager' | 'lazy',
  },
  variantsOpen?: boolean
  handlePackageChange: CallableFunction
  selectedVariantId?: string
  onVariantsButtonClick: CallableFunction
  onCloseVariants: CallableFunction
  tooltips?: {
    addToFavorites?: string;
    removeFromFavorites?: string;
    addToPurchaseList?: string;
    changeVariant?: string;
    sellerOnly?: string;
    accessoryPotItem?: string;
  }
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
  favoriteProductsIds,
  onFavoriteIconClick,
  showAddToPurchaseListIcon,
  onSaveToPurchaseListClick,
  border,
  displaySmallImage,
  linkComponent: Link,
  className,
  maxQuantity,
  alertBox,
  onClick,
  debounceQuantityVal,
  productArea,
  imagePriority,
  showPackaging,
  tooltips,
  isAddingToFavorites
}: TProductCard) {
  if (!cardDisplay) {
    throw new Error('cardDisplay must be assigned')
  }

  const { partNo, primaryImageUrl, pricePerUnit, itemNumberPerSalesUnit, quantity, priceStr, activeCampaign } = product
  const [variantsListOpen, setVariantsListOpen] = useState<boolean>(false)
  const [myProduct, setProduct] = useState({
    ...product,
    productImage: getProductPicture(partNo, primaryImageUrl, '120', undefined, imagePriority?.loading, imagePriority?.fetchPriority),
    quantity: getQuantity(quantity),
    pricePerUnit: pricePerUnit && isFinite(pricePerUnit) ? pricePerUnit : 0,
    totalPrice: convertNumToStr(
      (pricePerUnit && isFinite(pricePerUnit) ? pricePerUnit : 0) *
        itemNumberPerSalesUnit *
        (defaultQuantity ?? getQuantity(quantity) ? parseInt(defaultQuantity ?? getQuantity(quantity)) : 0)
    ),
    selectedVariantId: partNo,
  })

  useEffect(() => {
    setProduct((prevState) => ({
      ...prevState,
      quantity: getQuantity(quantity),
      priceStr: priceStr,
      pricePerUnit: pricePerUnit && isFinite(pricePerUnit) ? pricePerUnit : 0,
      totalPrice: convertNumToStr(
        (pricePerUnit && isFinite(pricePerUnit) ? pricePerUnit : 0) *
          itemNumberPerSalesUnit *
          (defaultQuantity ?? getQuantity(quantity) ? parseInt(defaultQuantity ?? getQuantity(quantity)) : 0)
      ),
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

  function getQuantity(quantity: string) {
    const parsedQuantity = parseInt(quantity)
    if (!quantity || isNaN(parsedQuantity)) return '1'
    if (parsedQuantity < 0) return '0'
    return quantity
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
    const quantity = myProduct.partNo === selectedVariant.variantId ? parseInt(myProduct.quantity) : 1;

    setProduct((prevState) => ({
      ...prevState,
      partNo: selectedVariant.variantId,
      productImage: selectedVariant.image ?? fallbackProductImageUrl,
      packaging: selectedVariant.variantName,
      price: selectedVariant.price,
      priceStr: selectedVariant.priceStr,
      pricePerUnit: selectedVariant.pricePerUnit && isFinite(selectedVariant.pricePerUnit) ? selectedVariant.pricePerUnit : 0,
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

  const commonProps = {
    product: myProduct,
    loading,
    buttonLoading,
    disabled,
    addToCart,
    addToCartBtnLabel,
    hideCartButton,
    hidePrice,
    linkComponent: Link,
    className,
    onClick,
    productImage: myProduct.productImage,
    variantsOpen: variantsListOpen,
    onVariantsButtonClick: handleVariantsButtonClick,
    handlePackageChange,
    selectedVariantId: myProduct.selectedVariantId,
    onCloseVariants: handleCloseVariants,
    tooltips,
    showFavoriteIcon,
    favoriteProductsIds,
    onFavoriteIconClick,
    isAddingToFavorites
  };
  
  if (cardDisplay === 'horizontal') {
    return (
      <ProductCardHorizontal
        {...commonProps}
        isRestrictedUser={isRestrictedUser}
        cardDisplay="horizontal"
        onChangeQuantity={handleOnChangeQuantity}
        productQuantityDisabled={productQuantityDisabled}
        defaultQuantity={defaultQuantity}
        onClickRemoveProduct={handleRemoveProduct}
        hideRemoveButton={hideRemoveButton}
        showAddToPurchaseListIcon={showAddToPurchaseListIcon}
        onSaveToPurchaseListClick={onSaveToPurchaseListClick}
        border={border}
        displaySmallImage={displaySmallImage}
        maxQuantity={maxQuantity}
        alertBox={alertBox}
        debounceQuantityVal={debounceQuantityVal}
        productArea={productArea}
        showPackaging={showPackaging}
      />
    );
  }
  
  if (cardDisplay === 'vertical') {
    if (isRestrictedUser) {
      return <ProductCardRestricted cardDisplay="vertical" {...commonProps} />;
    }
  
    return (
      <ProductCardVertical
        cardDisplay="vertical"
        {...commonProps}
        onChangeQuantity={handleOnChangeQuantity}
        productQuantityDisabled={productQuantityDisabled}
        defaultQuantity={defaultQuantity}
        showAddToPurchaseListIcon={showAddToPurchaseListIcon}
        onSaveToPurchaseListClick={onSaveToPurchaseListClick}
        alertBox={alertBox}
        productArea={productArea}
      />
    );
  }

  return null
}

export { ProductCard }
