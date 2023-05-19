import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownList } from './dropdown-list'

const meta: Meta<typeof DropdownList> = {
  title: 'Design System/Molecules/DropdownList',
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
            href: '/mitt-spendrups',
            title: 'Mitt Spendrups',
            children: 'Mitt Spendrups',
            isExternal: true,
            },
            {
            href: '/arenden',
            title: 'Ärenden',
            children: 'Ärenden',
            isExternal: true,
            },
            {
              href: '/inkopslistor',
              title: 'Inköpslistor',
              children: 'Inköpslistor',
              isExternal: true,
            },
            {
              href: '/behorighetstest',
              title: 'Behörighetstest',
              children: 'Behörighetstest',
              isExternal: true,
            },
            {
              href: '/bonusbesked',
              title: 'Bonusbesked',
              children: 'Bonusbesked',
              isExternal: true,
            },
            {
              href: '/fakturor',
              title: 'Fakturor',
              children: 'Fakturor',
              isExternal: true,
            },
            {
              href: '/ordrar',
              title: 'Ordrar',
              children: 'Ordrar',
              isExternal: true,
            },
            {
              href: '/skapa-returorder',
              title: 'Skapa returorder',
              children: 'Skapa returorder',
              isExternal: true,
            },
            {
              href: '/felanmalan',
              title: 'Felanmälan',
              children: 'Felanmälan',
              isExternal: true,
            },
            {
              href: '/tomgodsorder',
              title: 'Tomgodsorder',
              children: 'Tomgodsorder',
              isExternal: true,
            },
            {
              href: '/volymrapport',
              title: 'Volymrapport',
              children: 'Volymrapport',
              isExternal: true,
            },
            {
              href: '/bestall-pdf-faktura',
              title: 'Beställ pdf-faktura',
              children: 'Beställ pdf-faktura',
              isExternal: true,
            }
        ],
        linkComponent: 'a'
    }
}