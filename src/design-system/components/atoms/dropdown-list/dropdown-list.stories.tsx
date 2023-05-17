import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownList } from './dropdown-list'

const meta: Meta<typeof DropdownList> = {
  title: 'Design System/Atoms/DropdownList',
  component: DropdownList
}

export default meta;
type Story = StoryObj<typeof DropdownList>

const DropdownListStoryTemplate: Story = {
  render: ({ ...args }) => (<DropdownList {...args} />)
};

export const DropdownListStory = {
  ...DropdownListStoryTemplate,
    args: {
        links: [
            {
            href: '#',
            title: 'Hem',
            children: 'Hem',
            isExternal: true,
            },
            {
            href: '/nyheter',
            title: 'Nyheter',
            children: 'Nyheter',
            isExternal: true,
            }
        ],
        linkComponent: 'a'
    }
}