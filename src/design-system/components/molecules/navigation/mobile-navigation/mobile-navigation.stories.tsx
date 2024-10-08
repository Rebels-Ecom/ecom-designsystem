import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { MobileNavigation } from './mobile-navigation';
import { ContentWrapper } from '../../../layouts';
import { INavigation, TNavCategory, TNavLink } from '../types';

const categories = [
  {
    name: 'Drycker',
    href: '#',
    openInNewTab: true,
    links: [
      {
        name: 'Öl',
        href: '#',
        links: [
          {
            name: 'Alla öl',
            href: '#',
          },
          {
            name: 'Ale',
            href: '#',
          },
          {
            name: 'Bock',
            href: '#',
          },
          {
            name: 'Dubbel IPA',
            href: '#',
          },
          {
            name: 'Färsköl',
            href: '#',
          },
          {
            name: 'Alla öl',
            href: '#',
          },
          {
            name: 'Ale',
            href: '#',
          },
          {
            name: 'Bock',
            href: '#',
          },
          {
            name: 'Dubbel IPA',
            href: '#',
          },
          {
            name: 'Färsköl',
            href: '#',
          },
          {
            name: 'Alla öl',
            href: '#',
          },
          {
            name: 'Ale',
            href: '#',
          },
          {
            name: 'Bock',
            href: '#',
          },
          {
            name: 'Dubbel IPA',
            href: '#',
          },
          {
            name: 'Färsköl',
            href: '#',
          },
        ]
      },
      {
        name: 'Vin',
        href: '#',
        links: [
          {
            name: 'Alla viner',
            href: '#',
          },
          {
            name: 'Alkoholfritt',
            href: '#',
          },
          {
            name: 'Champagne',
            href: '#',
          },
          {
            name: 'Glögg',
            href: '#',
          },
          {
            name: 'Mousserande',
            href: '#',
          },
        ]
      },
      {
        name: 'Sprit',
        href: '#',
        links: [
          {
            name: 'Brand och Cognac',
            href: '#',
          },
          {
            name: 'Calvados',
            href: '#',
          },
          {
            name: 'Gin',
            href: '#',
          },
          {
            name: 'Grappa',
            href: '#',
          },
          {
            name: 'Likör',
            href: '#',
          },
        ]
      },
      {
        name: 'Övrigt',
        href: '#',
        links: [
          {
            name: 'Cider',
            href: '#',
          },
          {
            name: 'Läsk',
            href: '#',
          },
          {
            name: 'Vatten',
            href: '#',
          },
          {
            name: 'FAB / Blanddryck',
            href: '#',
          },
          {
            name: 'Energidryck',
            href: '#',
          },
          {
            name: 'Fruktdryck',
            href: '#',
          },
          {
            name: 'Mixers',
            href: '#',
          },
          {
            name: 'Stilldrink / Juice',
            href: '#',
          },
          {
            name: 'Övrigt',
            href: '#',
          },
        ]
      },
    ]
  },
  {
    name: 'Tillbehör',
    href: '#',
    links: [
      {
        name: 'Item 1',
        href: '#',
        subtitle: 'Information',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        links: [
          {
            name: 'Mitt Spendrups',
            href: '#mitt-spendrups',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          },
          {
            name: 'Item 2',
            description: 'Lorem.',
            href: '#item-2',
          },
          {
            name: 'Item 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-3',
          },
          {
            name: 'Item 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-4',
          }
        ],
      },
      {
        name: 'Item 2',
        href: '#',
        subtitle: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        links: [
          {
            name: 'Item 2-1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-1',
          },
          {
            name: 'Item 2-2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-2',
          },
          {
            name: 'Item 2-3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-3',
          },
          {
            name: 'Item 2-4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-4',
          },
          {
            name: 'Item 2-5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-5',
          },
          {
            name: 'Item 2-6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-6',
          },
          {
            name: 'Item 2-1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-1',
          },
          {
            name: 'Item 2-2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-2',
          },
          {
            name: 'Item 2-3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-3',
          },
          {
            name: 'Item 2-4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-4',
          },
          {
            name: 'Item 2-5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-5',
          },
          {
            name: 'Item 2-6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            href: '#item-2-6',
          }
        ],
      },
      {
        name: 'Item 3',
        href: '#'
      }
    ],
  },
  {
    name: 'Nyheter',
    href: '#',
    openInNewTab: true,
  },
  {
    name: 'Kampanjer',
    href: '#',
    openInNewTab: true,
  },
] as (TNavLink | TNavCategory)[];

export default {
  title: 'Design System/Molecules/MobileNavigation',
  component: MobileNavigation,
  tags: ['autodocs'],
  parameters: {
    padding: false,
  },
} as Meta<typeof MobileNavigation>;

type Story = StoryObj<typeof MobileNavigation>;

export const DefaultMobileNavigation: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <ContentWrapper>
        <MobileNavigation {...args} linkComponent='a' isOpen={isOpen} setIsOpen={setIsOpen} />
      </ContentWrapper>
    )
  },
  args: {
    currentSlug: '/',
    categories,
    linkComponent: 'a',
    isAuthenticated: true,
    signOutLabel: 'Logga ut',
    onSignOut: () => alert('Logging out'),
  },
};
