import React from 'react'
import { TextContent } from './text-content'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TextContent> = {
    title: 'Design System/Atoms/TextContent',
    component: TextContent
};

export default meta;
type Story = StoryObj<typeof TextContent>;

const TextContentStoryTemplate: Story = {
    render: ({...args}) => (
        <div style={{ margin: 'auto', maxWidth: '1800px' }}>
            <TextContent {...args}>
                {args.children}
            </TextContent>
        </div>
    )
}

export const TextContentStory = {
    ...TextContentStoryTemplate,
    args: {
        children: `Hello! Here's some text`
    }
}

export const TextContentStoryLink = {
    ...TextContentStoryTemplate,
    args: {
        children: `Hello! Here's some text`,
        componentType: 'a',
        href: '/somewhere'
    }
}

export const TextContentStorySpan = {
    ...TextContentStoryTemplate,
    args: {
        children: `Hello! Here's some text`,
        componentType: 'span',
        href: '/somewhere'
    }
}
