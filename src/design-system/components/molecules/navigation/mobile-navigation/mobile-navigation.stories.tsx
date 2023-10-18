import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { MobileNavigation } from './mobile-navigation';
import { categories } from '../desktop-navigation/desktop-navigation.stories';

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
    categories,
    isAuthenticated: true,
    signOutLabel: 'Logga ut',
    onSignOut: () => alert('Logging out'),
  },
};
