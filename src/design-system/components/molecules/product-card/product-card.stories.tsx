import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProductCard } from './product-card'
import { IProduct } from '../../../../types/product'
import { dummyBeerProduct } from './dummy-product'
import { ProductVariantListStory } from '../product-variant-list/product-variant-list.stories'
import { getProductPicture } from '../../../../helpers/picture-helper'

export default {
    title:'Design System/Molecules/Product/ProductCard',
    component: ProductCard,
} as ComponentMeta<typeof ProductCard> 

const Template: ComponentStory<typeof ProductCard> = (args) => {
    
    function handleAddToCart(product) {
        alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

   return(<ProductCard {...args} addToCart={handleAddToCart}/>)
}

function getVariantsList( productName:string, variantsList:any) {
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



function getProduct( productData: any) : IProduct {
    const product = productData.Variants[0];
    return{
        productId: product.VariantId,
        productName: productData.DisplayName,
        productImageUrl: product.PrimaryImageUrl,
        country: Array.isArray(product.ShortTexts && product.ShortTexts.length) ? product.ShortTexts[0] : '',
        packaging: product.VariantFullName,
        priceStr: product.ListPricePerUnitString,
        price:product.ListPricePerUnit,
        salesUnit:product.SalesUnit,
        itemNumberPerSalesUnit: product.UnitsPerBaseUnit,
        productVariantList: getVariantsList(productData.DisplayName, productData.Variants)
    }
}

const productArgs = getProduct(dummyBeerProduct);

export const ProductCardStory = Template.bind({});
ProductCardStory.storyName = 'Product Card';
ProductCardStory.args = {...productArgs};
