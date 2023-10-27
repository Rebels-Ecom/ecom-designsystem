import React, { useState } from 'react'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { IButton } from '../../atoms/button/button'
import { IProduct } from '../../../../types/product'
import { convertNumToStr } from '../../../../helpers/format-helper'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { ProductCardHorizontal } from '../product-card-horizontal/product-card-horizontal'
import { ProductCardVertical } from '../product-card-vertical/product-card-vertical'
import { IPicture } from '../../atoms/picture/picture'
import { TProductCard } from './product-card'
import { VerticalProductCard } from './vertical-card'

export type TCardDisplayType = 'vertical' | 'horizontal';

export type TCardType = 'default' | 'category' | 'limited';

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
  // product: IProduct
  /**
   * Sets a custom default quantity to start from
   * @default 0
  */
 defaultQuantity?: string;
 addToCartButton: IButton
 addToCart: CallableFunction
 onChangeQuantity?: CallableFunction
 hideCartButton?: boolean
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
  loading: boolean;
  buttonLoading?: boolean;
  disabled?: boolean;
  // TODO: new props, some should be required?
  /**
  * Product name
  */
  name: string;
  /**
  * Product url for navigating to product details
  */
  productUrl: string;
  /**
  * Product image url
  */
  productImageUrl: string;
  /**
   * Product ID
   */
  productId: string;
  /**
   * Default price before quantity has been changed
   */
  defaultPrice: string;
  /**
   * Base unit to display, e.g. 'KLI'
   */
  baseUnit?: string;
  /**
   * Number to display after baseUnit
   */
  baseUnitNumber?: number;
  /**
   * Article number
   */
  artNr?: string;
  /**
   * What country the product is from, displayed after article number
  */
  country?: string;
  /**
   * Label to display before totalPrice
   */
  totalPriceLabel?: string;
  /**
   * Currency to use
   */
  currency?: string;
  /**
   * Packaging to display, e.g. Burk, Engångsglas, etc.
   */
  packaging?: string;
  /**
   * Price to display after packaging
   */
  pricePerUnit?: string;
  /**
   * Unit to display, e.g. st, pcs, etc.
   */
  unit?: string;
}

export type TCategoryProductCard = IProductCard & (TProductCardVertical | TProductCardHorizontal)

const CategoryProductCard = ({
  ...props
}: TCategoryProductCard) => {
  
  if (!props.cardDisplay) {
    throw new Error("cardDisplay must be assigned");
  }

  // const { productId, productImageUrl, price, itemNumberPerSalesUnit, quantity } = product
  const [variantsListOpen, setVariantsListOpen] = useState<boolean>(false)
  // const [myProduct, setProduct] = useState({
    // ...product,
    // totalPrice: props.totalPrice ?? 0,
    // productImage: getProductPicture(productId, productImageUrl),
    // quantity: quantity ? quantity : '1',
    // totalPrice: convertNumToStr(price * itemNumberPerSalesUnit * ((defaultQuantity ?? quantity) ? parseInt(defaultQuantity ?? quantity) : 0)),
    // selectedVariantId: productId,
  // })

  function handleOnChangeQuantity(productQuantity: number) {
    // setProduct((prevState) => {
    //   const newProduct = {
    //     ...prevState,
    //     quantity: productQuantity?.toString(),
    //     // totalPrice: convertNumToStr(myProduct.price * myProduct.itemNumberPerSalesUnit * productQuantity)
    //     // totalPrice: convertNumToStr(myProduct.price * myProduct.itemNumberPerSalesUnit * productQuantity)
    //   }

    //   onChangeQuantity?.(newProduct)

    //   return newProduct
    // })
  }

  function handleVariantsButtonClick() {
    setVariantsListOpen(true)
  }

  function handleRemoveProduct(id: string) {
    // onRemoveProduct && onRemoveProduct(id)
  }

  function handlePackageChange(selectedVariant: any) {
    // const quantity = myProduct.productId === selectedVariant.variantId ? parseInt(myProduct.quantity) : 1
    // setProduct((prevState) => ({
    //   ...prevState,
    //   productId: selectedVariant.variantId,
    //   productImage: getProductPicture(selectedVariant.variantId, selectedVariant.imageUrl ? selectedVariant.imageUrl : fallbackProductImageUrl),
    //   country: selectedVariant.country,
    //   packaging: selectedVariant.variantName,
    //   priceStr: selectedVariant.listPricePerUnitString,
    //   price: selectedVariant.price,
    //   salesUnit: selectedVariant.salesUnit,
    //   itemNumberPerSalesUnit: selectedVariant.itemNumberPerSalesUnit,
    //   // totalPrice: convertNumToStr(selectedVariant.price * selectedVariant.itemNumberPerSalesUnit * quantity),
    //   quantity: quantity?.toString(),
    //   selectedVariantId: selectedVariant.variantId,
    // }))
    // setVariantsListOpen(false)
  }

  // if (cardDisplay === 'horizontal') {
  //   return (
  //     <ProductCardHorizontal
  //       cardDisplay='horizontal'
  //       loading={loading}
  //       // product={myProduct}
  //       onChangeQuantity={handleOnChangeQuantity}
  //       productQuantityDisabled={productQuantityDisabled}
  //       addToCartButton={addToCartButton}
  //       addToCart={addToCart}
  //       onClickRemoveProduct={handleRemoveProduct}
  //       linkComponent={Link}
  //       hideRemoveButton={hideRemoveButton}
  //       className={className}
  //       hideCartButton={hideCartButton}
  //       defaultQuantity={defaultQuantity}
  //       campaign={campaign}
  //       border={border}
  //       disabled={disabled}
  //       buttonLoading={buttonLoading}
  //       totalPriceLabel={totalPriceLabel}
  //       currency={currency}
  //     />
  //   )
  // }
  if (props.cardDisplay === 'vertical') {
    return (
      <VerticalProductCard
        {...props}
        // cardDisplay='vertical'
        // product={myProduct}
        // productImage={getProductPicture(productId, productImageUrl)}
        // onChangeQuantity={handleOnChangeQuantity}
        // productQuantityDisabled={productQuantityDisabled}
        // changePackagingButton={changePackagingButton}
        // onVariantsButtonClick={handleVariantsButtonClick}
        // variantsOpen={variantsListOpen}
        // selectedVariantId={product.productId}
        // handlePackageChange={handlePackageChange}
        // linkComponent={Link}
        // className={className}
        // hideCartButton={hideCartButton}
        // defaultQuantity={defaultQuantity}
        // campaign={campaign}
        // disabled={disabled}
        // buttonLoading={buttonLoading}
        // totalPriceLabel={totalPriceLabel}
        // {...props}
      />
    )
  }

  return null;
}

export { CategoryProductCard }
