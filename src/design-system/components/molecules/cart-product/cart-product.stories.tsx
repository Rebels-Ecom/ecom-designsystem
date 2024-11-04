import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CartProduct } from './cart-product'
import { IProduct } from '../../../../types/product'
import { dummyBeerProduct } from './dummy-product'
import { dummyWineProduct } from './dummy-product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { IconButtonStory_RemoveProduct } from '../../atoms/icon-button/icon-button.stories'
import { IProductVariant } from '../product-variant/product-variant'

const meta: Meta<typeof CartProduct> = {
  title: 'Design System/Molecules/CartProduct',
  component: CartProduct,
}

export default meta
type Story = StoryObj<typeof CartProduct>

const CartProductStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [loading, setLoading] = useState<boolean>(false)

    function handleRemoveProduct(id: string) {
      console.log('Removing the product with id:', id)
      setLoading(true)
    }

    return <CartProduct {...args} loading={loading} onClickRemoveProduct={handleRemoveProduct} />
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
    partNo: product.VariantId,
    productName: productData.DisplayName,
    productUrl: productData.ProductUrl,
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
    packagePrice: 10,
    packagePriceString: '10',
    pricePerUnit: 1,
    pricePerUnitString: '1'
  }
}

const productBeerArgs = getProduct(dummyBeerProduct)
const productWineArgs = getProduct(dummyWineProduct)

export const CartProductStoryBeer = {
  ...CartProductStoryTemplate,
  args: {
    product: productBeerArgs,
    iconButton: IconButtonStory_RemoveProduct.args,
    loading: false,
    linkComponent: 'a',
  },
}

export const CartProductStoryWine = {
  ...CartProductStoryTemplate,
  args: {
    product: productWineArgs,
    iconButton: IconButtonStory_RemoveProduct.args,
    loading: true,
    linkComponent: 'a',
  },
}

export const CartProduct_OrderConfirmation_Beer = {
  ...CartProductStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
  },
}

export const CartProduct_OrderConfirmation_Wine = {
  ...CartProductStoryTemplate,
  args: {
    product: productWineArgs,
    loading: false,
    linkComponent: 'a',
  },
}
