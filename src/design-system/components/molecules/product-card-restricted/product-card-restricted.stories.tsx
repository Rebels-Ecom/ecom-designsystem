import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductCardRestricted } from './product-card-restricted'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { IProduct } from '../../../../types/product'
import { dummyProductNoVariants, dummyWineProduct } from '../product-card/dummy-product'
import { PictureStoryBeer } from '../../atoms/picture/picture.stories'

const meta: Meta<typeof ProductCardRestricted> = {
  title: 'Design System/Molecules/ProductCardRestricted',
  component: ProductCardRestricted,
}

export default meta
type Story = StoryObj<typeof ProductCardRestricted>

const ProductCardRestrictedStoryTemplate: Story = {
  render: ({ ...args }) => {
    function handleAddToCart(product) {
      console.log('Showing toast with product...')
    }
    return <ProductCardRestricted {...args} addToCart={handleAddToCart} />
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
  return variantsList.map((variant) => {
    return {
      productName: productName,
      variantName: variant.Name,
      variantId: variant.VariantId,
      country: Array.isArray(variant.ShortTexts) && variant.ShortTexts.length ? variant.ShortTexts[0] : '',
      priceStr: variant.ListPricePerUnitString,
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
    partNo: product.VariantId,
    productUrl: productData.ProductUrl,
    productName: productData.DisplayName,
    primaryImageUrl: product.PrimaryImageUrl,
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

const productWineArgs = getProduct(dummyWineProduct)
const productNoVariantsArgs = getProduct(dummyProductNoVariants)
const productImage = PictureStoryBeer.args

export const ProductCardRestrictedStory = {
  ...ProductCardRestrictedStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
  },
}

export const ProductCardRestrictedStory_NoVariants = {
  ...ProductCardRestrictedStoryTemplate,
  args: {
    product: productNoVariantsArgs,
    productImage: productImage,
  },
}
