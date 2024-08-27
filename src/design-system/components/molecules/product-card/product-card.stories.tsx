import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from './product-card'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { IProduct } from '../../../../types/product'
import { dummyWineProduct, dummyProductNoVariants } from './dummy-product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { IProductVariant } from '../product-variant/product-variant'

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
      productName,
      variantName: variant.Name,
      variantId: variant.VariantId,
      checked: variant.VariantId === firstVariantId,
      country: Array.isArray(variant.ShortTexts) && variant.ShortTexts.length ? variant.ShortTexts[0] : '',
      priceStr: variant.ListPricePerUnitString,
      image: getProductPicture(variant.VariantId, variant.PrimaryImageUrl),
      // onChange: () => {},
      // price: variant.ListPricePerUnit,
      // salesUnit: variant.SalesUnit,
      // itemNumberPerSalesUnit: variant.UnitsPerBaseUnit,
      // checked: variant.VariantId === firstVariantId,
      // tags: getProductTags(variant.Tags),
    } as IProductVariant
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
    productVariantList: Array.from({ length: 10 }, () => getVariantsList(productData.DisplayName, productData.Variants)?.[0]),
  }
}

const productNoVariantsArgs = getProduct(dummyProductNoVariants)
const productWineArgs = getProduct(dummyWineProduct)

const meta = {
  title: 'Design System/Molecules/ProductCard',
  component: ProductCard,
  parameters: {
    controls: {
      exclude: [
        'product',
        'addToCart',
        'onChangeQuantity',
        'handlePackageChange',
        'onVariantsButtonClick',
        'productImage',
        'linkComponent',
        'onRemoveProduct',
        'className',
        'selectedVariantId',
        'onClickRemoveProduct',
      ],
    },
  },
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const ProductCardStory: Story = {
  render: (args) => {
    return <ProductCard {...args} />
  },
  args: {
    cardDisplay: 'vertical',
    product: productWineArgs,
    addToCart: () => {},
    handlePackageChange: () => {},
    loading: false,
    onVariantsButtonClick: () => {},
    productImage: getProductPicture(productWineArgs.partNo, productWineArgs.primaryImageUrl),
    hideCartButton: false,
    campaign: {
      title: 'Kampanj',
      color: '#9A576F',
    },
  },
}

export const ProductCardStory_NoVariants: Story = {
  render: (args) => {
    return <ProductCard {...args} />
  },
  args: {
    cardDisplay: 'vertical',
    product: productNoVariantsArgs,
    defaultQuantity: '4',
    addToCart: () => {},
    handlePackageChange: () => {},
    loading: false,
    onVariantsButtonClick: () => {},
    productImage: getProductPicture(productWineArgs.partNo, productWineArgs.primaryImageUrl),
    campaign: {
      title: 'Kampanj',
      color: '#9A576F',
    },
  },
}

export const ProductCardStory_Loading: Story = {
  render: (args) => {
    return <ProductCard {...args} />
  },
  args: {
    cardDisplay: 'vertical',
    product: productNoVariantsArgs,
    addToCart: () => {},
    handlePackageChange: () => {},
    loading: true,
    onVariantsButtonClick: () => {},
    productImage: getProductPicture(productWineArgs.partNo, productWineArgs.primaryImageUrl),
  },
}

export const ProductCardStory_Horizontal: Story = {
  render: (args) => {
    return <ProductCard {...args} />
  },
  args: {
    cardDisplay: 'horizontal',
    product: productWineArgs,
    addToCart: () => {},
    loading: false,
    addToCartBtnLabel: 'Lägg i varukorg',
    variantsOpen: false,
    // campaign: {
    //   title: 'Kampanj',
    //   color: '#9A576F',
    // },
  },
}
