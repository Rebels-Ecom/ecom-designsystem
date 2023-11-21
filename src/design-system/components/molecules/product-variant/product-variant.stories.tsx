import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductVariant } from './product-variant'
import { getProductPicture } from '../../../../helpers/picture-helper'
import fallbackProductImageUrl from '../../../../assets/fallback-images/defaultFallbackImage.svg'

const meta: Meta<typeof ProductVariant> = {
  title: 'Design System/Molecules/Product/ ProductVariant',
  component: ProductVariant,
}

export default meta
type Story = StoryObj<typeof ProductVariant>

const ProductVariantStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [isSelected, setIsSelected] = useState(false)
    function handleOnChange() {
      setIsSelected(true)
    }
    return <ProductVariant {...args} onChange={handleOnChange} checked={isSelected} />
  },
}
const variantImage = 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb'
export const ProductVariantStory = {
  ...ProductVariantStoryTemplate,
  args: {
    productName: 'Norrlands Guld Export 5,3',
    variantName: '50cl Returglas',
    variantId: '1105101',
    country: 'Sverige',
    listPricePerUnitString: '22,68',
    salesUnit: 'KLI',
    image: getProductPicture('1105101', variantImage ? variantImage : fallbackProductImageUrl),
  },
}
