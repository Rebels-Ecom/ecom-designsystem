import React, {useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProductVariant } from './product-variant'
import { getProductPicture } from '../../../../helpers/picture-helper'
export default {
    title:'Design System/Molecules/Product/ ProductVariant',
    component: ProductVariant,
} as ComponentMeta<typeof ProductVariant> 

const Template: ComponentStory<typeof ProductVariant> = (args) => {
    const [isSelected, setIsSelected] = useState(false)
    function handleOnChange () {
        setIsSelected(true);
    }
   return(<ProductVariant {...args} onChange={handleOnChange} checked={isSelected}/>)
}

export const ProductVariantStory = Template.bind({});
ProductVariantStory.storyName = 'Product Variant Story';
ProductVariantStory.args = {
    productName: "Norrlands Guld Export 5,3",
    variantName: "50cl Returglas",
    variantId: "1105101",
    country: "Sverige",
    listPricePerUnitString: "22,68",
    salesUnit:"KLI",
    image: getProductPicture("1105101", "https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb")
}