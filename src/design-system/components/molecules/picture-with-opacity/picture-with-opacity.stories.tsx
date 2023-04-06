import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { PictureWithOpacity } from './picture-with-opacity'
import { PictureStoryBottles, PictureStoryManBrewer, PictureStoryMoscowMule, PictureStoryWomanBrewer } from '../../atoms/picture/picture.stories';

const meta: Meta<typeof PictureWithOpacity> = {
  title: 'Design System/Molecules/PictureWithOpacity',
  component: PictureWithOpacity
};

export default meta;
type Story = StoryObj<typeof PictureWithOpacity>;

const PictureWithOpacityStoryTemplate: Story = {
  render: ({ ...args }) => (
    <PictureWithOpacity {...args} />
  )
};

export const PictureWithOpacity_MoscowMuleStory = {
  ...PictureWithOpacityStoryTemplate,
  args: {
    image: PictureStoryMoscowMule.args,
    theme: 'dark'
  }
}

export const PictureWithOpacity_BottlesStory = {
  ...PictureWithOpacityStoryTemplate,
  args: {
    image: PictureStoryBottles.args,
    theme: 'light'
  }
}

export const PictureWithOpacity_ManBrewerStory = {
  ...PictureWithOpacityStoryTemplate,
  args: {
    image: PictureStoryManBrewer.args,
    theme: 'dark'
  }
}

export const PictureWithOpacity_WomanBrewerStory = {
  ...PictureWithOpacityStoryTemplate,
  args: {
    image: PictureStoryWomanBrewer.args,
    theme: 'dark'
  }
}