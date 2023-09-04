import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { UnorderedList } from './unordered-list'
import { ICartProduct, CartProduct } from '../cart-product/cart-product'
import { LinkListItemStory_PurchaseListItem } from '../link-list-item/link-list-item.stories'
import { CheckboxListItem_Loka, CheckboxListItem_Heineken } from '../checkbox-list-item/checkbox-list-item.stories'
import { CheckboxListItem, ICheckboxListItem } from '../checkbox-list-item/checkbox-list-item'

const meta: Meta<typeof UnorderedList> = {
  title: 'Design System/Molecules/UnorderedList',
  component: UnorderedList,
}

export default meta
type Story = StoryObj<typeof UnorderedList>

const items = [
  CheckboxListItem_Loka.args,
  CheckboxListItem_Heineken.args,
  CheckboxListItem_Loka.args,
  CheckboxListItem_Heineken.args,
  CheckboxListItem_Loka.args,
  CheckboxListItem_Heineken.args,
  CheckboxListItem_Loka.args,
]

const itemsList = (args: any) => {
  return args?.map((item: ICheckboxListItem) => <CheckboxListItem key={Math.random()} {...item}></CheckboxListItem>)
}

const UnorderedListStoryTemplate: Story = {
  render: (args) => {
    return (
      <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
        <UnorderedList {...args}>{args.children}</UnorderedList>
      </div>
    )
  },
}

export const UnorderedListStory = {
  ...UnorderedListStoryTemplate,
  args: {
    children: itemsList(items),
    withSeparatingLines: true,
  },
}

export const UnorderedListStory_Loading = {
  ...UnorderedListStoryTemplate,
  args: {
    children: itemsList(items),
    withSeparatingLines: true,
    loading: true,
  },
}
