import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './button';
import { Icon } from '../icon/icon'

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Buttons',
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

const ButtonStoryTemplate: Story = {
  render: ({ ...args }) => {
    return (
      <Button {...args}>{args.children ? args.children : 'Button'}</Button>
    );
  },
};

export const ButtonPrimary = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_primary_1',
    disabled: false,
    surface: 'primary',
    children: 'Button primary',
    onClick: action('clicked'),
  },
};

export const ButtonSecondary = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_secondary_2',
    disabled: false,
    surface: 'secondary',
    children: 'Button secondary',
    onClick: action('clicked'),
  }
};

export const ButtonStoryTertiary = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_tertiary_3',
    disabled: false,
    rounded:true,
    surface: 'tertiary',
    children: <>Byt förpacking&nbsp; &nbsp; <Icon icon="icon-layers"/></>,
    onClick: action('clicked'),
  }
};

export const ButtonStoryTertiaryIconOnly = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_tertiary_icon_only',
    disabled: false,
    rounded:true,
    surface: 'tertiary',
    children: <Icon icon="icon-layers"/>,
    onClick: action('clicked'),
  },
};


export const ButtonProductCardStory = {
  ...ButtonStoryTemplate,
  args: {
    id: 'ButtonID_ProductCard',
    disabled: false,
    size: 'small',
    children: 'Lägg i kundvagn',
    onClick: action('clicked'),
  },
};

export const ChangePackagingButtonStory = {
  ...ButtonStoryTemplate,
  args: {
    id: 'Button_Change_Packaging',
    disabled: false,
    size: 'small',
    surface: 'secondary',
    children: 'Byt förpackning',
    iconRight: {icon:'icon-layers'},
    rounded:true,
    onClick: action('clicked'),
  },
};

export const ShoppingListButtonStory = {
  ...ButtonStoryTemplate,
  args: {
    id: 'Button_Get_Shopping_list',
    disabled: false,
    size: 'small',
    surface: 'secondary',
    children: 'Hämta inköpslista',
    iconRight: {icon:'icon-clipboard'},
    rounded:true,
    onClick: action('clicked'),
  },
};

export const LatertOrderButtonStory = {
  ...ButtonStoryTemplate,
  args: {
    id: 'Button_Latest_Order',
    disabled: false,
    size: 'small',
    surface: 'secondary',
    children: 'Senaste order',
    iconRight: {icon:'icon-package'},
    rounded:true,
    onClick: action('clicked'),
  },
};

export const ButtonGoToCart = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_Go_To_Cart',
    disabled: false,
    surface: 'primary',
    children: 'Gå till kassan',
    onClick: action('clicked'),
  },
};
