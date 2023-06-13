import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingList } from './shopping-list'
import { Heading, Text } from '../../atoms';
import { DeliveryDateInfo } from '../../molecules';

const meta: Meta<typeof ShoppingList> = {
  title: 'Design System/Organisms/ShoppingList',
  component: ShoppingList
};

export default meta;
type Story = StoryObj<typeof ShoppingList>;

const ShoppingListStoryTemplate: Story = {
  render: () => (
  <ShoppingList>
    <Heading order={3}>Vårfesten</Heading>
    <Text>Senast sparad:</Text>
    <DeliveryDateInfo dateLabel={'2022-06-10'}/>
  </ShoppingList>)
};

export const ShoppingListStory = {
  ...ShoppingListStoryTemplate,
  args: {
   
  }
}