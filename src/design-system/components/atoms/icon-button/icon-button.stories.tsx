import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './icon-button'
import { action } from '@storybook/addon-actions';


const meta: Meta<typeof IconButton> = {
    title: 'Design System/Atoms/IconButton',
    component: IconButton
}

export default meta;
type Story = StoryObj<typeof IconButton>

const IconButtonStoryTemplate: Story = {
  render: (args) => {

    function handleButtonClick(){
      alert('Icon button clicked :)')
    }

    return(
      <IconButton {...args} onClick={handleButtonClick}/>
    )
  }
}

export const IconButtonStorySmallButton = {
  ...IconButtonStoryTemplate,
  args: {
    icon: 'icon-map-pin',
    size: 'small',
    isLink: false,
    onClick: action('clicked')
  }
}

export const IconButtonStoryLargeLink = {
  ...IconButtonStoryTemplate,
  args: {
    icon: 'icon-map-pin',
    size: 'large',
    isLink: true,
    linkUrl: '/start'
  }
}

export const IconButtonStory_GoToProduct = {
  ...IconButtonStoryTemplate,
  args: {
    icon: 'icon-chevrons-right',
    size: 'large',
    isLink: true,
    isExternal: true,
    linkUrl: '/?path=/docs/design-system-templates-productpage--docs',
    linkComponent: 'a'
  }
}

export const IconButtonStory_RemoveProduct = {
  ...IconButtonStoryTemplate,
  args: {
    icon: 'icon-x-circle',
    size: 'large',
    isTransparent: true,
    isLink: false,
    onClick: action('clicked')
  }
}

export const IconButtonStory_CartEmpty = {
  ...IconButtonStoryTemplate,
  args: {
    icon: 'icon-shopping-cart',
    size: 'large',
    isTransparent: true,
    isLink: false,
    onClick: action('clicked')
  }
}

export const IconButtonStory_CartWithProducts = {
  ...IconButtonStoryTemplate,
  args: {
    icon: 'icon-shopping-cart',
    size: 'large',
    isTransparent: true,
    isLink: false,
    children: <span>(7)</span>,
    onClick: action('clicked')
  }
}




