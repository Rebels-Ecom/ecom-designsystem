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
            { href: '/SE-sv/', children: 'Start', isExternal: true},
            { href: '/SE-sv/c/ol', children: 'Öl', isExternal: true}
        ],
        location: '/SE-sv/c/ol'
    }
}

export const BreadcrumbsStoryWithoutBackground = {
    ...BreadcrumbsStoryTemplate,
    args: {
        title: 'Våra ölsorter',
        breadcrumbs: [
            { href: '/SE-sv/', children: 'Start', isExternal: true},
            { href: '/SE-sv/c/ol', children: 'Öl', isExternal: true}
        ]
    }
}
