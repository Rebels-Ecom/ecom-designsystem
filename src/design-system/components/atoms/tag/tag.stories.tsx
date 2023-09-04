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
        text: 'Eko',
        size: 'sm',
        shape: 'rectangular',
        color: 'green'    
    }
}

export const TagStoryRectangular_L = {
    ...TagStoryTemplate,
    args: {
        text: 'Tillval',
        size: 'lg',
        shape: 'rectangular',
        color: 'blue'  
    }
}

export const TagStoryRound_S = {
    ...TagStoryTemplate,
    args: {
        text: 'Kurs',
        size: 'sm',
        shape: 'round',
        color: 'mint'
    }
}

export const TagStoryRound_L = {
    ...TagStoryTemplate,
    args: {
        text: 'Nyhet',
        size: 'lg',
        shape: 'round',
        color: 'orange'
    }
}
