import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ScrollableList } from './scrollable-list'
import { ICartProduct, CartProduct } from '../cart-product/cart-product'
import { CartProductStoryBeer, CartProductStoryWine } from '../cart-product/cart-product.stories'
import { LinkListItemStory_PurchaseListItem } from '../link-list-item/link-list-item.stories'
import { ILinkListItem, LinkListItem } from '../link-list-item/link-list-item'

const meta: Meta<typeof ScrollableList> = {
  title: 'Design System/Molecules/ScrollableList',
  component: ScrollableList,
}

export default meta
type Story = StoryObj<typeof ScrollableList>

const cartProducts = [
  CartProductStoryBeer.args,
  CartProductStoryBeer.args,
  CartProductStoryBeer.args,
  CartProductStoryBeer.args,
  CartProductStoryBeer.args,
  CartProductStoryBeer.args,
  CartProductStoryBeer.args,
]
const purchaseLists = [
  LinkListItemStory_PurchaseListItem.args,
  LinkListItemStory_PurchaseListItem.args,
  LinkListItemStory_PurchaseListItem.args,
  LinkListItemStory_PurchaseListItem.args,
  LinkListItemStory_PurchaseListItem.args,
  LinkListItemStory_PurchaseListItem.args,
  LinkListItemStory_PurchaseListItem.args,
]

const itemsList = (args: any) => {
  return args?.map((product: ICartProduct) => <CartProduct key={Math.random()} {...product} onClickRemoveProduct={() => {}}></CartProduct>)
}

const getPurchaseLists = (args: any) => {
  return args?.map((item: ILinkListItem) => <LinkListItem key={Math.random()} {...item}></LinkListItem>)
}

const ScrollableListStoryTemplate: Story = {
  render: (args) => {
    return (
      <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
        <ScrollableList {...args}>{args.children}</ScrollableList>
      </div>
    )
  },
}

export const ScrollableListListStory = {
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
  },
}

export const ScrollableListListStory_Loading = {
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    loading: true,
  },
}

export const ScrollableListListStory_WithFade = {
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 4,
    hasFade: true,
  },
}

export const ScrollableListListStory_WithFade_2_products = {
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
    visibleItemsNumber: 2,
    hasFade: true,
  },
}

export const ScrollableListListStory_All_Products = {
  ...ScrollableListStoryTemplate,
  args: {
    children: itemsList(cartProducts),
  },
}

export const ScrollableListListStory_PurchaseLists = {
  ...ScrollableListStoryTemplate,
  args: {
    children: getPurchaseLists(purchaseLists),
    visibleItemsNumber: 5,
    hasFade: true,
  },
}
