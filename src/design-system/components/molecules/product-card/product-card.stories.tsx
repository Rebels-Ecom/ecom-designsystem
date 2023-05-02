import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from './product-card'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { IProduct } from '../../../../types/product'
import { dummyBeerProduct, dummyWineProduct } from './dummy-product'

const meta: Meta<typeof ProductCard> = {
  title: 'Design System/Molecules/ProductCard',
  component: ProductCard
};

export default meta;
type Story = StoryObj<typeof ProductCard>

const ProductCardStoryTemplate: Story = {
  render: ({...args}) => {
    function handleAddToCart(product) {
      console.log('Showing toast with product...')
    }

    return(
      <div style={{ width: '100%', marginTop: '2rem', marginLeft: '2rem' }}>
        <ProductCard {...args} addToCart={handleAddToCart}/>
      </div>
    )
  }
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
      image: getProductPicture(variant.VariantId, variant.PrimaryImageUrl),
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

export const ProductCardStory = {
  ...ProductCardStoryTemplate,
  args: {
    product: productBeerArgs,
  }
}

export const ProductCardStory_Loading = {
  ...ProductCardStoryTemplate,
  args: {
    product: productWineArgs,
    loading: true
  }
}
