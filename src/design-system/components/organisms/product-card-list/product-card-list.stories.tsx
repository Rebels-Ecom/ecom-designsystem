import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ProductCardList } from './product-card-list'
import { ProductCardStory } from '../../molecules/product-card/product-card.stories'
import { dummyBeerList } from './dummy-product-list-beer'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { IProductCard } from '../../molecules/product-card/product-card'

const meta: Meta<typeof ProductCardList> = {
  title: 'Design System/Organisms/ProductCardList',
  component: ProductCardList
};

export default meta;
type Story = StoryObj<typeof ProductCardList>;

const ProductCardListStoryTemplate: Story = {
  render: ( args ) => {
    const [cardList] = useState(args.productCards)

    function handleAddToCart(product:any) {
      console.log('Showing toast with product...')
    }
    
    return (
      <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
        <ProductCardList productCards={cardList} addToCart={handleAddToCart}/>
      </div>
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

function getProductList( productList: any) : Array<IProductCard> {
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

const productArgs = getProductList(dummyBeerList);

export const ProductCardListStory = {
  ...ProductCardListStoryTemplate,
  args: {
    productCards: productArgs,
  }
}


const cardList = [
  ProductCardStory.args,
  ProductCardStory.args,
  ProductCardStory.args,
  ProductCardStory.args,
  ProductCardStory.args,
  ProductCardStory.args,
  ProductCardStory.args,
  ProductCardStory.args,
  ProductCardStory.args,
]

export const ProductCardListStoryLoka = {
  ...ProductCardListStoryTemplate,
  args: {
    productCards: cardList
  }
}
