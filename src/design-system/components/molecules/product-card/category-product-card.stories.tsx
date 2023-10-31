import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CategoryProductCard } from './category-product-card'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { IProduct } from '../../../../types/product'
import { dummyWineProduct, dummyProductNoVariants } from './dummy-product'

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

const productNoVariantsArgs = getProduct(dummyProductNoVariants)
const productWineArgs = getProduct(dummyWineProduct)

const meta = {
  title: 'Design System/Molecules/Category Product Card',
  component: CategoryProductCard,
  parameters: {
    controls: { exclude: ['product', 'addToCart', 'addToCartButton', 'onChangeQuantity', 'handlePackageChange', 'onVariantsButtonClick', 'productImage', 'linkComponent', 'onRemoveProduct', 'className', 'changePackagingButton', 'selectedVariantId', 'onClickRemoveProduct'] },
  },
} satisfies Meta<typeof CategoryProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProductCardStory: Story = {
  render: (args) => {
    const handleAddToCart = (data) => {
      console.log(data)
    }
    return (
      <>
        <CategoryProductCard {...args} addToCart={handleAddToCart} />
        <CategoryProductCard {...args} addToCart={handleAddToCart} />
      </>
    )
  },
  args: {
    cardDisplay: 'slim',
    productUrl: '#',
    linkComponent: 'a',
    country: 'Spain',
    packaging: productWineArgs.packaging,
    pricePerUnit: productWineArgs.priceStr,
    name: productWineArgs.productName,
    salesUnit: 'ST',
    salesUnitNumber: 1,
    totalPriceLabel: 'Listpris',
    defaultPrice: productWineArgs.priceStr,
    productId: productWineArgs.productId,
    productImageUrl: productWineArgs.productImageUrl,
    defaultQuantity: 1,
    addToCart: () => {},
    addToCartButton: {
      children: 'Lägg till',
      surface: 'primary',
      type: 'button',
    },
    // handlePackageChange: () => {},
    loading: false,
    // onVariantsButtonClick: () => {},
    // productImageUrl: productWineArgs.productImageUrl,
    hideCartButton: false,
    campaign: {
      title: 'Kampanj',
      color: '#9A576F'
    },
    productVariantList: productWineArgs.productVariantList
  },
};
