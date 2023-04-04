import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductDetails } from './product-details'
import { IProduct } from '../../../../types/product'
import { dummyBeerProduct } from './dummy-product'
import { dummyWineProduct } from './dummy-product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { ButtonProductCardStory, ChangePackagingButtonStory } from '../../atoms/button/button.stories'

const meta: Meta<typeof ProductDetails> = {
    title: 'Design System/Molecules/ProductDetails',
    component: ProductDetails
}

export default meta;
type Story = StoryObj<typeof ProductDetails>

const ProductDetailsStoryTemplate: Story = {
  render: ({ ...args }) => {
    function handleAddToCart(product) {
        alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    return(<ProductDetails {...args} addToCart={handleAddToCart}/>)
  }
}

function getProductTags(tags:Array<any>){
    return tags.map((tag)=>{
        return{
            text: tag.Text,
            shape: tag.Shape ? tag.Shape : 'pill',
            color: tag.Class
        }
    });
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
            tags: getProductTags(variant.Tags),
            onChange: () => {},
        }
    })
}

function getProduct( productData: any) : IProduct {
    const product = productData.Variants[0]
    return{
        productId: product.VariantId,
        productName: productData.DisplayName,
        productImageUrl: product.PrimaryImageUrl,
        country: (Array.isArray(product.ShortTexts) && product.ShortTexts.length) ? product.ShortTexts[0] : '',
        packaging: product.VariantFullName,
        priceStr: product.ListPricePerUnitString,
        price:product.ListPricePerUnit,
        salesUnit:product.SalesUnit,
        itemNumberPerSalesUnit: product.UnitsPerBaseUnit,
        tags: getProductTags(product.Tags),
        productVariantList: getVariantsList(productData.DisplayName, productData.Variants),
    }
}

const productArgs = getProduct(dummyWineProduct)

export const ProductDetailsStory = {
    ...ProductDetailsStoryTemplate,
    args: {
        ...productArgs,
        productDescription: 'Man brukar säga att pilsen är bryggmästarens stolthet och Pistonhead Lager är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär som istället för att vara besk är mer markerad och balanserad. Serveras med en tydlig skumkrona. Dessutom ekologisk.',
        changePackagingButton:ChangePackagingButtonStory.args,
        addToCartButton: ButtonProductCardStory.args,
    }
}
