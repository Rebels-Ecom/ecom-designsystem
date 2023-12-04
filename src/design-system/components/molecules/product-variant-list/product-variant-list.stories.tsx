import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductVariantList } from './product-variant-list'
import { ButtonProductCardStory } from '../../atoms/button/button.stories'
import { dummyBeerProduct } from '../product-card/dummy-product'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'
import { getProductPicture } from '../../../../helpers/picture-helper'

const meta: Meta<typeof ProductVariantList> = {
  title: 'Design System/Molecules/Product/Variants List',
  component: ProductVariantList,
}

export default meta
type Story = StoryObj<typeof ProductVariantList>

const ProductVariantListStoryTemplate: Story = {
  render: ({ ...args }) => {
    function handleOnChange(selectedVariant) {
      alert(`Selected variant: ${selectedVariant.productName} - ${selectedVariant.variantName}`)
    }
    return <ProductVariantList variantsList={args.variantsList} onVariantSelect={handleOnChange} selectedVariantId={args.selectedVariantId} />
  },
}

function getVariantsList(productName: string, variantsList: Array<any>) {
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
      image: getProductPicture(variant.VariantId, variant.PrimaryImageUrl ? variant.PrimaryImageUrl : fallbackProductImageUrl),
      checked: variant.VariantId === firstVariantId,
      onChange: () => {},
    }
  })
}

export const ProductVariantListStory = {
  ...ProductVariantListStoryTemplate,
  args: {
    selectedVariantId: dummyBeerProduct.Variants[0].VariantId,
    variantsList: getVariantsList(dummyBeerProduct.DisplayName, dummyBeerProduct.Variants),
    button: ButtonProductCardStory.args,
  },
}
