import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { ProductCardList } from './product-card-list'
import { ProductCardStory } from '../../molecules/product-card/product-card.stories'
import { dummyBeerList } from './dummy-product-list-beer'
import { IProduct } from '../../../../types/product'
import { getProductPicture } from '../../../../helpers/picture-helper'

export default {
  title: 'Design System/Organisms/ProductCardList',
  component: ProductCardList,
} as ComponentMeta<typeof ProductCardList>

const Template: ComponentStory<typeof ProductCardList> = (args) => {
  const [cardList] = useState(args.productCards)
  return (
    <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
      <ProductCardList productCards={cardList} maxColumns={args.maxColumns} />
    </div>
  )
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

const productArgs = getProductList(dummyBeerList);

export const ProductCardListStory = Template.bind({});
ProductCardListStory.storyName = 'Product Card List';
ProductCardListStory.args = {
    productCards: productArgs,
    maxColumns: 4,
};


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


export const Product_Card_List__Max_Columns_3 = Template.bind({})
Product_Card_List__Max_Columns_3.storyName = 'Card List Max Columns 3'

Product_Card_List__Max_Columns_3.args = {
  productCards: cardList,
  maxColumns: 3,
}

export const Product_Card_List__Max_Columns_4 = Template.bind({})
Product_Card_List__Max_Columns_4.args = {
  productCards: cardList,
  maxColumns: 4,
}
Product_Card_List__Max_Columns_4.storyName = 'Card List Max Columns 4 '

