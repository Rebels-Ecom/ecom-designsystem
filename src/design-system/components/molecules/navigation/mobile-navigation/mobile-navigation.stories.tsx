import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { MobileNavigation } from './mobile-navigation';

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
    return <MobileNavigation {...args} isOpen={isOpen} setIsOpen={setIsOpen} />;
  },
  args: {
    currentSlug: '/',
    categories: [
      {
        name: 'Spendrups',
        href: '#',
        openInNewTab: true,
      },
      {
        name: 'Om oss',
        href: '#',
        openInNewTab: true,
      },
      {
        name: 'Hello',
        href: '#',
        links: [
          {
            name: 'Item 1',
            subtitle: 'Information',
            href: '#',
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
                links: [
                  {
                    name: 'Item 4-1',
                    href: '#item-4-1'
                  },
                  {
                    name: 'Item 4-2',
                    href: '#item-4-2'
                  },
                  {
                    name: 'Item 4-3',
                    href: '#item-4-3'
                  },
                  {
                    name: 'Item 4-4',
                    href: '#item-4-4'
                  },
                ]
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
                name: 'Item 2-7',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                href: '#item-2-7',
              },
              {
                name: 'Item 2-8',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                href: '#item-2-8',
              },
              {
                name: 'Item 2-9',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                href: '#item-2-9',
              },
              {
                name: 'Item 2-10',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                href: '#item-2-10',
              }
            ],
          },
        ],
      },
    ],
    isAuthenticated: true,
    signOutLabel: 'Logga ut',
    onSignOut: () => alert('Logging out'),
  },
};
