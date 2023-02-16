import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { OrderedList } from './ordered-list'

export default {
  title: 'Design System/Atoms/Lists/OrderedList',
  component: OrderedList,
} as ComponentMeta<typeof OrderedList>

const Template: ComponentStory<typeof OrderedList> = () => (
  <OrderedList>
    <li>Popkorn</li>
    <li>Snacks</li>
    <li>Läsk</li>
    <li>Godis</li>
  </OrderedList>
)

Template.storyName = 'OrderedList'

export { Template }
