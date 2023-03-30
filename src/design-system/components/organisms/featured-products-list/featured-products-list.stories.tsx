import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FeaturedProductsList } from './featured-products-list'
import { ProductCardStory } from '../../molecules/product-card/product-card.stories'
//import { dummyBeerList } from './dummy-product-list-beer'
import { IProduct } from '../../../../types/product'
import { getProductPicture } from '../../../../helpers/picture-helper'

const meta: Meta<typeof FeaturedProductsList> = {
  title: 'Design System/Organisms/FeaturedProductsList',
  component: FeaturedProductsList
};

export default meta;
type Story = StoryObj<typeof FeaturedProductsList>;

const FeaturedProductsListStoryTemplate: Story = {
  render: ( args ) => {
    const [cardList] = useState(args.productCards)

    function handleAddToCart(product:any) {
        alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    return (
        <FeaturedProductsList productCards={cardList} addToCart={handleAddToCart}/>
    )
  }
};

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

function getProductList( productList: any) : IProduct {
    const list = productList.map((productItem: any) => {
        const product = productItem.Variants[0];
        return{
            productId: product.VariantId,
            productName: productItem.DisplayName,
            productImageUrl: product.PrimaryImageUrl,
            country: (Array.isArray(product.ShortTexts) && product.ShortTexts.length) ? product.ShortTexts[0] : '',
            packaging: product.VariantFullName,
            priceStr: product.ListPricePerUnitString,
            price:product.ListPricePerUnit,
            salesUnit:product.SalesUnit,
            itemNumberPerSalesUnit: product.UnitsPerBaseUnit,
            productVariantList: getVariantsList(productItem.DisplayName, productItem.Variants)
        }

    })
    return list;
}

//const productArgs = getProductList(dummyBeerList);




const cardList = [
  ProductCardStory.args,
  ProductCardStory.args,
  ProductCardStory.args,
  ProductCardStory.args,
  ProductCardStory.args,
  ProductCardStory.args,
]

export const FeaturedProductsListStory = {
    ...FeaturedProductsListStoryTemplate,
    args: {
      productCards: cardList
    }
  }

