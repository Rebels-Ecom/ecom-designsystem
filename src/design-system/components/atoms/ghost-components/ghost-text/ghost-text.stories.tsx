import React from 'react'
import { GhostText } from './ghost-text';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GhostText> = {
    title: 'Design System/Atoms/Ghost Components/Ghost Text',
    component: GhostText
};

export default meta;
type Story = StoryObj<typeof GhostText>;

const GhostTextStoryTemplate: Story = {
    render: () => (
      <GhostText rows={3} />
    )
}

export const GhostTextStory = {
  ...GhostTextStoryTemplate,
}
