import React from 'react'
import { Tag } from './tag'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tag> = {
    title: 'Design System/Atoms/Tag',
    component: Tag
};

export default meta;
type Story = StoryObj<typeof Tag>;

const TagStoryTemplate: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: 'auto', maxWidth: '1800px' }}>
        <Tag {...args}/>
    </div>
    )
};

export const TagStoryRectangular_S = {
    ...TagStoryTemplate,
    args: {
        text: 'EKO',
        size: 'small',
        shape: 'rectangular'
    }
}

export const TagStoryRectangular_L = {
    ...TagStoryTemplate,
    args: {
        text: 'Tillval',
        size: 'large',
        shape: 'rectangular'
    }
}

export const TagStoryRound_S = {
    ...TagStoryTemplate,
    args: {
        text: 'Kurs',
        size: 'small',
        shape: 'round'
    }
}

export const TagStoryRound_L = {
    ...TagStoryTemplate,
    args: {
        text: 'Nyhet',
        size: 'large',
        shape: 'round'
    }
}
