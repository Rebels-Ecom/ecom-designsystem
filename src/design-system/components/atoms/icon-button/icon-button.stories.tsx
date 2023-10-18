import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, TIconButton } from './icon-button'
import { action } from '@storybook/addon-actions';


const meta: Meta<typeof IconButton> = {
    title: 'Design System/Atoms/IconButton',
    component: IconButton
}

export default meta;
type Story = StoryObj<typeof IconButton>

const IconButtonStoryTemplate: Story = {
  render: (args) => <IconButton {...args} />
}

export const IconButtonStorySmallButton = {
  ...IconButtonStoryTemplate,
  args: {
    icon: 'icon-map-pin',
    size: 'small',
    noPadding: false,
    isTransparent: false,
    noBorder: false,
    notification: 2,
    type: 'button',
    onClick: action('clicked'),
  } as TIconButton
}

export const IconButtonStoryLargeLink = {
  ...IconButtonStoryTemplate,
  args: {
    type: 'link',
    icon: 'icon-map-pin',
    size: 'large',
    linkUrl: '/start',
  } as TIconButton
}

export const IconButtonStory_GoToProduct = {
  ...IconButtonStoryTemplate,
  args: {
    type: 'link',
    icon: 'icon-chevrons-right',
    size: 'large',
    isExternal: true,
    linkUrl: '/?path=/docs/design-system-templates-productpage--docs',
    linkComponent: 'a'
  } as TIconButton
}

export const IconButtonStory_RemoveProduct = {
  ...IconButtonStoryTemplate,
  args: {
    type: 'button',
    icon: 'icon-x-circle',
    size: 'large',
    isTransparent: true,
    onClick: action('clicked')
  } as TIconButton
}

export const IconButtonStory_CartEmpty = {
  ...IconButtonStoryTemplate,
  args: {
    type: 'button',
    icon: 'icon-shopping-cart',
    size: 'large',
    isTransparent: true,
    onClick: action('clicked')
  } as TIconButton
}

export const IconButtonStory_CartWithProducts = {
  ...IconButtonStoryTemplate,
  args: {
    type: 'button',
    icon: 'icon-shopping-cart',
    size: 'large',
    isTransparent: true,
    children: <span>(7)</span>,
    onClick: action('clicked')
  } as TIconButton
}




