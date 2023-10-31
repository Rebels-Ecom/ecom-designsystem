import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from './carousel'

const meta: Meta<typeof Carousel> = {
  title: 'Design System/Organisms/Carousel',
  component: Carousel,
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const CarouselStoryTemplate: Story = {
  render: (args) => {
    return (
      <>
        <Carousel />
      </>
    )
  }
};

export const CarouselStory = {
  ...CarouselStoryTemplate,
  args: {

  }
}
