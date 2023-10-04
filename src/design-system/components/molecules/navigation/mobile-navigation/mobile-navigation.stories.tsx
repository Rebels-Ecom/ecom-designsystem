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
    return <MobileNavigation {...args} />;
  },
  args: {
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
        name: 'Mitt Spendrups',
        links: [
          {
            name: 'Item 1',
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
