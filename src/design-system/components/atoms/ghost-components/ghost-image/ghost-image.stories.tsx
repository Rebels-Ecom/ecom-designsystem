import React from 'react'
import { GhostImage } from './ghost-image';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GhostImage> = {
    title: 'Design System/Atoms/Ghost Components/Ghost Image',
    component: GhostImage
};

export default meta;
type Story = StoryObj<typeof GhostImage>;

const GhostImageStoryTemplate: Story = {
    render: () => (
      <GhostImage width={10} height={6} />
    )
}

export const GhostImageStory = {
  ...GhostImageStoryTemplate,
}
