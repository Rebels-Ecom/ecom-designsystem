import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxListItem } from './checkbox-list-item'
import { Text } from '../../atoms/text/text'
import { Heading } from '../../atoms'

const meta: Meta<typeof CheckboxListItem> = {
  title: 'Design System/Molecules/CheckboxListItem',
  component: CheckboxListItem,
}

export default meta
type Story = StoryObj<typeof CheckboxListItem>

const CheckboxListItemStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [isSelected, setIsSelected] = useState(false)
    return (
      <div style={{ margin: '3rem auto', maxWidth: '1800px' }}>
        <CheckboxListItem {...args} onChange={() => setIsSelected(!isSelected)} />
      </div>
    )
  },
}

const checkboxItemLoka = (
  <>
    <Heading order={5} noMargin>
      Loka stilla naturell 12 pack 50cl pet
    </Heading>
    <Text>Art.nr: 1224345</Text>
  </>
)

const checkboxItemHeineken = (
  <>
    <Heading order={5} noMargin>
      Heineken 5% 50cl engångsglas
    </Heading>
    <Text>Art.nr: 115112</Text>
  </>
)

export const CheckboxListItem_Loka = {
  ...CheckboxListItemStoryTemplate,
  args: {
    children: checkboxItemLoka,
    id: '1224345',
    name: '1224345',
    value: '1224345',
  },
}

export const CheckboxListItem_Heineken = {
  ...CheckboxListItemStoryTemplate,
  args: {
    children: checkboxItemHeineken,
    id: '115112',
    name: '115112',
    value: '115112',
  },
}
