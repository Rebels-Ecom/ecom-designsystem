import React from 'react'
import { Breadcrumbs } from './breadcrumbs'
import type { Meta, StoryObj } from '@storybook/react';
import { PictureStoryBoat } from '../../atoms/picture/picture.stories';

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Design System/Organisms/Breadcrumbs',
    component: Breadcrumbs
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const BreadcrumbsStoryTemplate: Story = {
  render: ({ ...args }) => (
        <Breadcrumbs {...args}/>
    )
};

export const BreadcrumbsStoryWithBackground = {
    ...BreadcrumbsStoryTemplate,
    args: {
        title: 'Våra ölsorter',
        image: PictureStoryBoat.args,
        breadcrumbs: [
            { url: '/SE-sv/', text: 'Start' },
            { url: '/SE-sv/c/ol', text: 'Öl' }
        ],
        location: '/SE-sv/c/ol',
        linkComponent: 'a'
    }
}

export const BreadcrumbsStoryWithoutBackground = {
    ...BreadcrumbsStoryTemplate,
    args: {
        title: 'Våra ölsorter',
        breadcrumbs: [
            { url: '/SE-sv/', text: 'Start' },
            { url: '/SE-sv/c/ol', text: 'Öl' }
        ],  
        linkComponent: 'a'
    }
}
