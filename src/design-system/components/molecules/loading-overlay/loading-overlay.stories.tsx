import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LoadingOverlay } from './loading-overlay'

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Design System/Molecules/LoadingOverlay',
  component: LoadingOverlay
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

const LoadingOverlayStoryTemplate: Story = {
  render: ({ ...args }) => (<LoadingOverlay {...args} />)
};

export const LoadingOverlayStory_Light = {
  ...LoadingOverlayStoryTemplate,
  args: {
    isVisible: true,
    overlayBkgColor: 'light',
    loaderSize: 'lg',
    loaderColor: 'blue',
  }
}

export const LoadingOverlayStory_Dark = {
  ...LoadingOverlayStoryTemplate,
  args: {
    isVisible: true,
    overlayBkgColor: 'dark',
    loaderSize: 'lg',
    loaderColor: 'orange',
  }
}

export const LoadingOverlayStory_WithText = {
  ...LoadingOverlayStoryTemplate,
  args: {
    isVisible: true,
    overlayBkgColor: 'light',
    loaderSize: 'lg',
    loaderColor: 'orange',
    text: `We're working on it! Please wait ...`
  }
}

export const LoadingOverlayStory_Small = {
  ...LoadingOverlayStoryTemplate,
  args: {
    isVisible: true,
    overlayBkgColor: 'light',
    loaderSize: 'sm',
    loaderColor: 'orange',
    text: `We're working on it! Please wait ...`
  }
}