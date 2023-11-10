import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductCardVertical } from './product-card-vertical'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { IProduct } from '../../../../types/product'
import { dummyProductNoVariants, dummyWineProduct } from '../product-card/dummy-product'
import { PictureStoryBeer } from '../../atoms/picture/picture.stories'

const meta: Meta<typeof ProductCardVertical> = {
  title: 'Design System/Molecules/ProductCardVertical',
  component: ProductCardVertical,
}

export default meta
type Story = StoryObj<typeof ProductCardVertical>

const ProductCardVerticalStoryTemplate: Story = {
  render: ({ ...args }) => {
    function handleAddToCart(product) {
      console.log('Showing toast with product...')
    }
    return <ProductCardVertical {...args} addToCart={handleAddToCart} />
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
    productUrl: productData.ProductUrl,
    productName: productData.DisplayName,
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

const productWineArgs = getProduct(dummyWineProduct)
const productNoVariantsArgs = getProduct(dummyProductNoVariants)
const productImage = PictureStoryBeer.args

export const ProductCardVerticalStory = {
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
  },
}

export const ProductCardVerticalStory_NoVariants = {
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productNoVariantsArgs,
    productImage: productImage,
  },
}

export const ProductCardVerticalStory_Favorite = {
  ...ProductCardVerticalStoryTemplate,
  args: {
    product: productWineArgs,
    productImage: productImage,
    showFavoriteIcon: true,
    isFavoriteIconActive: true,
  },
}
