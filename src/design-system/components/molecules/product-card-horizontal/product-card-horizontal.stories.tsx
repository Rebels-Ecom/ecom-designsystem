import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductCardHorizontal } from './product-card-horizontal'
import { IProduct } from '../../../../types/product'
import { dummyBeerProduct, dummyWineProduct } from '../product-card/dummy-product'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { IProductCard, ProductCard } from '../product-card/product-card'

const meta: Meta<typeof ProductCard> = {
  title: 'Design System/Molecules/ProductCardHorizontal',
  parameters: {
    controls: { exclude: ['product', 'addToCart', 'onClickRemoveProduct', 'onChangeQuantity', 'className'] },
  },
  component: ProductCard,
}

export default meta
type Story = StoryObj<typeof ProductCard>

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
      <ProductCard
        {...args}
        cardDisplay='horizontal'
        removingProduct={loading}
        loading={args.loading ?? loading}
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
  return variantsList.map((variant: any, i: number) => {
    const firstVariantId = variantsList?.[0]?.VariantId;
    return {
      checked: firstVariantId === variant.VariantId,
      country: Array.isArray(variant.ShortTexts) && variant.ShortTexts.length ? variant.ShortTexts[0] : 'Sweden',
      currencyLabel: 'kr',
      image: {
        id: `x-${i}`, 
        src: variant.PrimaryImageUrl,
        sources: [],
      },
      onChange: () => {},
      partNoLabel: 'x',
      priceStr: variant.ListPricePerUnitString,
      productName: productName,
      sellerOnly: false,
      unitLabel: 'x',
      variantId: variant.VariantId,
      variantName: variant.Name,
      price: variant.ListPricePerUnit,
      salesUnit: variant.SalesUnit,
      itemNumberPerSalesUnit: variant.UnitsPerBaseUnit,
      tags: getProductTags(variant.Tags),
    }
  })
}

function getProduct(productData: any): IProduct {
  const product = productData.Variants[0]
  return {
    partNo: product.VariantId,
    itemNumberPerSalesUnit: 1,
    packagePrice: 1,
    packagePriceString: '1',
    packaging: '33cl Engångsglas',
    price: 1,
    pricePerUnit: 1,
    pricePerUnitString: '1',
    priceStr: '1',
    primaryImageUrl: 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb',
    productName: productData.DisplayName,
    quantity: '1',
    salesUnit: 'st',
    totalPrice: '1',
    activeCampaign: undefined,
    country: 'Sweden',
    partNoLabel: 'Art.nr.',
    priceLabel: 'Pris',
    aLabel: 'à',
    currencyLabel: 'kr',
    productVariantList: getVariantsList(productData.DisplayName, productData.Variants),
    unitLabel: 'kolli',
    tags: getProductTags(product.Tags),
  }
}

const productBeerArgs = getProduct(dummyBeerProduct)

export const Product_Card_Horizontal = {
  ...ProductCardHorizontalStoryTemplate,
  args: {
    product: productBeerArgs,
    loading: false,
    linkComponent: 'a',
    hideCartButton: false,
    showPackaging: true,
    addToCart: () => {},
    addToCartBtnLabel: 'Add to cart',
    cardDisplay: 'horizontal',
    handlePackageChange: () => {},
    onCloseVariants: () => {},
    onVariantsButtonClick: () => {},
    productImage: {
      id: '',
      sources: [],
      src: ''
    },
    showFavoriteIcon: true,
    onFavoriteIconClick: () => {},
    showAddToPurchaseListIcon: true,
    productQuantityDisabled: true
  } as IProductCard,
}
