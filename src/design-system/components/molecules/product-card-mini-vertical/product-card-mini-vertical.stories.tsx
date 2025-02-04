import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { IProduct } from '../../../../types/product'
import { dummyBeerProduct } from '../product-card/dummy-product'
import { IProductCard } from '../product-card/product-card'
import { ProductCardMiniVertical } from './product-card-mini-vertical'

const meta: Meta<typeof ProductCardMiniVertical> = {
  title: 'Design System/Molecules/ProductCardMiniVertical',
  parameters: {
    controls: { exclude: ['product', 'addToCart', 'onClickRemoveProduct', 'onChangeQuantity', 'className'] },
  },
  component: ProductCardMiniVertical,
}

export default meta
type Story = StoryObj<typeof ProductCardMiniVertical>

const ProductCardMiniVerticalStory: Story = {
  render: ({ ...args }) => {
    const [loading, setLoading] = useState<boolean>(false)

    const pictureSources = [
      {
        srcset: args.product.primaryImageUrl,
        media: '(min-width: 800px)',
        sizes: '800px',
      },
      {
        srcset:
          'https://images.unsplash.com/photo-1656489782764-443559c29211?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        media: '(min-width: 500px)',
        sizes: '500px',
      },
      {
        srcset:
          'https://images.unsplash.com/photo-1738028449238-fa5ae8c33bce?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        media: '(max-width: 499px)',
        sizes: '100vw',
      },
    ]

    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          backgroundColor: 'lightgray',
          width: '100%',
          padding: '0.5rem',
        }}
      >
        <ProductCardMiniVertical
          {...args}
          productImage={{ id: 'x', sources: pictureSources, src: pictureSources[0].srcset }}
        />
      </div>
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
    const firstVariantId = variantsList?.[0]?.VariantId
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

export const Product_Card_Mini_Vertical = {
  ...ProductCardMiniVerticalStory,
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
      src: '',
    },
    showFavoriteIcon: true,
    onFavoriteIconClick: () => {},
    showAddToPurchaseListIcon: true,
    productQuantityDisabled: false,
  } as IProductCard,
}
