import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProductVariantList } from './product-variant-list'
import { ButtonProductCardStory } from '../../atoms/button/button.stories'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { dummyBeerProduct } from '../product-card/dummy-product'

export default {
    title:'Design System/Molecules/Product/Variants List',
    component: ProductVariantList,
} as ComponentMeta<typeof ProductVariantList> 

const Template: ComponentStory<typeof ProductVariantList> = (args) => {

    function handleOnChange(selectedVariant ) {
        alert(`Selected variant: ${selectedVariant.productName} - ${selectedVariant.variantName}`);
    }

    return(<ProductVariantList variantsList={args.variantsList} onVariantSelect={handleOnChange} selectedVariantId={args.selectedVariantId} />)
}

function getVariantsList( productName:string, variantsList:Array<any>) {
    const firstVariantId = variantsList[0].VariantId;
    return variantsList.map((variant)=>{
        return{
            productName: productName,
            variantName: variant.Name,
            variantId: variant.VariantId,
            country: (Array.isArray(variant.ShortTexts) && variant.ShortTexts.length) ? variant.ShortTexts[0] : '',
            listPricePerUnitString: variant.ListPricePerUnitString,
            price: variant.ListPricePerUnit,
            salesUnit: variant.SalesUnit,
            itemNumberPerSalesUnit: variant.UnitsPerBaseUnit,
            image: getProductPicture(variant.VariantId, variant.PrimaryImageUrl),
            checked: variant.VariantId===firstVariantId,
            onChange: () => {},
        }
    })
}

export const ProductVariantListStory = Template.bind({});
ProductVariantListStory.storyName = 'Product Variants List';
ProductVariantListStory.args = {
    selectedVariantId:dummyBeerProduct.Variants[0].VariantId,
    variantsList: getVariantsList(dummyBeerProduct.DisplayName, dummyBeerProduct.Variants),
    button: ButtonProductCardStory.args
}