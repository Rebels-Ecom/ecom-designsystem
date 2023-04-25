import React from 'react'
import { Heading } from './heading'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
    title: 'Design System/Atoms/Heading',
    component: Heading
};

export default meta;
type Story = StoryObj<typeof Heading>;

const HeadingStoryTemplate: Story = {
    render: ({...args}) => (
        <div style={{ margin: 'auto', maxWidth: '1800px' }}>
            <Heading order={1}>{args.children}</Heading>
        </div>
    )
}

export const HeadingStory = {
    ...HeadingStoryTemplate,
    args: {
        children: 'Heading here'
    }
}

export const Heading_DeliveryForm_Story = {
    ...HeadingStoryTemplate,
    args: {
        children: 'Dina leverans uppgifter'
    }
}
