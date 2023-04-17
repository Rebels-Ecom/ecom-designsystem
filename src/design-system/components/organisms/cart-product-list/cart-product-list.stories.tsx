import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { CartProductList } from './cart-product-list'

import { dummyBeerList } from './dummy-product-list-beer'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { IProductCard } from '../../molecules/product-card/product-card'
import { CartProductStoryBeer, CartProductStoryWine } from '../../molecules/cart-product/cart-product.stories'

const meta: Meta<typeof CartProductList> = {
  title: 'Design System/Organisms/CartProductList',
  component: CartProductList
};

export default meta;
type Story = StoryObj<typeof CartProductList>;

const CartProductListStoryTemplate: Story = {
  render: ( args ) => {
    const [cardList] = useState(args.productCards)

    function handleAddToCart(product:any) {
      alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }
    
    return (
      <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
        <CartProductList productCards={cardList} />
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
const cartProducts = [
    CartProductStoryBeer.args,
    CartProductStoryWine.args
]

export const CartProductListStory = {
  ...CartProductListStoryTemplate,
  args: {
    productCards: cartProducts,
  }
}


// const cardList = [
//   ProductCardStory.args,
//   ProductCardStory.args,
//   ProductCardStory.args,
//   ProductCardStory.args,
//   ProductCardStory.args,
//   ProductCardStory.args,
//   ProductCardStory.args,
//   ProductCardStory.args,
//   ProductCardStory.args,
// ]

// export const ProductCardListStoryLoka = {
//   ...ProductCardListStoryTemplate,
//   args: {
//     productCards: cardList
//   }
// }
