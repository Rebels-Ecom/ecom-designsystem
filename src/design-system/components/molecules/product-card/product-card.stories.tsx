import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from './product-card'
import { IProduct } from '../../../../types/product'
import { dummyBeerProduct } from './dummy-product'
import { dummyWineProduct } from './dummy-product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { ButtonProductCardStory, ChangePackagingButtonStory } from '../../atoms/button/button.stories'
import { convertNumToStr } from '../../../../helpers/format-helper'


const meta: Meta<typeof ProductCard> = {
    title: 'Design System/Molecules/Product/ProductCard',
    component: ProductCard
}

export default meta;
type Story = StoryObj<typeof ProductCard>

const ProductCardStoryTemplate: Story = {
  render: ({ ...args }) => {
    function handleAddToCart(product) {
        console.log('Showing toast with product...')
    }

    return(<ProductCard {...args} addToCart={handleAddToCart}/>)
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
    const product = productData.Variants[0];
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
        quantity: '1',
        totalPrice: convertNumToStr(product.ListPricePerUnit * product.UnitsPerBaseUnit),
        productVariantList: getVariantsList(productData.DisplayName, productData.Variants),
    }
}

const productArgs = getProduct(dummyBeerProduct)
const productArgsWithTags = getProduct(dummyWineProduct)

export const ProductCardStory = {
    ...ProductCardStoryTemplate,
    args: {
        ...productArgs,
        changePackagingButton:ChangePackagingButtonStory.args,
        addToCartButton: ButtonProductCardStory.args,
    }
}

export const ProductCardWithTagsStory = {
    ...ProductCardStoryTemplate,
    args: {
        ...productArgsWithTags,
        changePackagingButton:ChangePackagingButtonStory.args,
        addToCartButton: ButtonProductCardStory.args,
    }
}
