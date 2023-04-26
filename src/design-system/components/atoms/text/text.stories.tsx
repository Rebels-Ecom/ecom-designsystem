import React from 'react'
import { Text } from './text'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
    title: 'Design System/Atoms/Text',
    component: Text
};

export default meta;
type Story = StoryObj<typeof Text>;

const TextStoryTemplate: Story = {
    render: ({...args}) => (
        <div style={{ margin: 'auto', maxWidth: '1800px' }}>
            <Text {...args}>
                {args.children}
            </Text>
        </div>
    )
}

export const TextStory = {
    ...TextStoryTemplate,
    args: {
        children: `Hello! Here's some text`
    }
}

export const TextStoryLink = {
    ...TextStoryTemplate,
    args: {
        children: `Hello! Here's some text`,
        componentType: 'a',
        href: '/somewhere'
    }
}

export const TextStorySpan = {
    ...TextStoryTemplate,
    args: {
        children: `Hello! Here's some text`,
        componentType: 'span',
        href: '/somewhere'
    }
}
