import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingListPage } from './shopping-list-page'
import { HeaderStory_Logged_In_User } from '../../organisms/header/header.stories';
import { FooterStory } from '../../organisms/footer/footer.stories';

const meta: Meta<typeof ShoppingListPage> = {
  title: 'Design System/Templates/ShoppingListPage',
  component: ShoppingListPage
};

export default meta;
type Story = StoryObj<typeof ShoppingListPage>;

const ShoppingListStoryTemplate: Story = {
  render: ({ ...args }) => (<ShoppingListPage {...args} />)
}

export const ShoppingListStory = {
  ...ShoppingListStoryTemplate,
  args: {
    header: HeaderStory_Logged_In_User.args,
    footer:FooterStory.args
  }
}