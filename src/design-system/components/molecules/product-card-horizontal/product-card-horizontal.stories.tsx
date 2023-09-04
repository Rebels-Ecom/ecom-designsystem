import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductCardHorizontal } from './product-card-horizontal'
import { IProduct } from '../../../../types/product'
import { dummyBeerProduct, dummyWineProduct } from '../product-card/dummy-product'
import { convertNumToStr } from '../../../../helpers/format-helper'

const meta: Meta<typeof ProductCardHorizontal> = {
  title: 'Design System/Molecules/ProductCardHorizontal',
  component: ProductCardHorizontal,
}

export default meta
type Story = StoryObj<typeof ProductCardHorizontal>

const ProductCardHorizontalStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [loading, setLoading] = useState<boolean>(false)

    function handleRemoveProduct(id: string) {
      console.log('Removing the product with id:', id)
      setLoading(true)
    }

    function handleQuantityChange(quantity: number) {
      console.log('Current quantity:', quantity)
    }

    function handleAddToCart(product) {
      console.log('Showing toast with product...')
    }

    return (
      <ProductCardHorizontal
        {...args}
        loading={loading}
        addToCart={handleAddToCart}
        onChangeQuantity={handleQuantityChange}
        onClickRemoveProduct={handleRemoveProduct}
      />
    )
  },
}

function getProductTags(tags: Array<any>) {
  return tags.map((tag) => {
    return {
      text: tag.Text,
      shape: tag.Shape ? tag.Shape : 'pill',
      color: tag.Class,
    }
  })
}

function getVariantsList(productName: string, variantsList: any) {
  const firstVariantId = variantsList[0].VariantId
  return variantsList.map((variant: any) => {
    return {
      productName: productName,
      variantName: variant.Name,
      variantId: variant.VariantId,
      country: Array.isArray(variant.ShortTexts) && variant.ShortTexts.length ? variant.ShortTexts[0] : '',
      listPricePerUnitString: variant.ListPricePerUnitString,
      price: variant.ListPricePerUnit,
      salesUnit: variant.SalesUnit,
      itemNumberPerSalesUnit: variant.UnitsPerBaseUnit,
      imageUrl: variant.PrimaryImageUrl,
      checked: variant.VariantId === firstVariantId,
      tags: getProductTags(variant.Tags),
      onChange: () => {},
    }
  })
}

function getProduct(productData: any): IProduct {
  const product = productData.Variants[0]
  return {
    productId: product.VariantId,
    productName: productData.DisplayName,
    productUrl: productData.ProductUrl,
    productImageUrl: product.PrimaryImageUrl,
    country: Array.isArray(product.ShortTexts) && product.ShortTexts.length ? product.ShortTexts[0] : '',
    packaging: product.VariantFullName,
    priceStr: product.ListPricePerUnitString,
    price: product.ListPricePerUnit,
    salesUnit: product.SalesUnit,
    itemNumberPerSalesUnit: product.UnitsPerBaseUnit,
    tags: getProductTags(product.Tags),
    quantity: '1',
    totalPrice: convertNumToStr(product.ListPricePerUnit * product.UnitsPerBaseUnit),
    productVariantList: getVariantsList(productData.DisplayName, productData.Variants),
  }
}

const productBeerArgs = getProduct(dummyBeerProduct)
const productWineArgs = getProduct(dummyWineProduct)

export const CartProductStoryBeer = {
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideCartButton: true,
  },
}

export const ProductCardHorizontalStoryWine = {
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productWineArgs,
    loading: true,
    linkComponent: 'a',
  },
}

export const ProductCardHorizontal_OrderConfirmation_Beer = {
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideRemoveButton: true,
  },
}

export const ProductCardHorizontal_OrderConfirmation_Wine = {
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productWineArgs,
    loading: false,
    linkComponent: 'a',
  },
}
