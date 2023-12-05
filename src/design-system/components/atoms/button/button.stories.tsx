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

export const Button_XX_Small = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_secondary_2',
    disabled: false,
    surface: 'primary',
    children: 'Button secondary',
    size: 'xx-small',
    onClick: action('clicked'),
  }
};

export const Button_XX_Small_Icon_Right = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_secondary_2',
    disabled: false,
    surface: 'primary',
    children: 'Button secondary',
    size: 'xx-small',
    onClick: action('clicked'),
    iconRight: {
      icon: 'icon-users'
    }
  }
};

export const Button_XX_Small_Icon_Left = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_secondary_2',
    disabled: false,
    surface: 'primary',
    children: 'Button secondary',
    size: 'xx-small',
    onClick: action('clicked'),
    iconLeft: {
      icon: 'icon-users'
    }
  }
};

export const Button_XX_Small_Icon_Only = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_tertiary_icon_only',
    disabled: false,
    surface: 'primary',
    size: 'xx-small',
    children: <Icon icon="icon-layers"/>,
    onClick: action('clicked'),
  },
};

export const Button_X_Small = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_secondary_2',
    disabled: false,
    surface: 'primary',
    children: 'Button secondary',
    size: 'x-small',
    onClick: action('clicked'),
  }
};

export const Button_X_Small_Icon_Right = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_secondary_2',
    disabled: false,
    surface: 'primary',
    children: 'Button secondary',
    size: 'x-small',
    onClick: action('clicked'),
    iconRight: {
      icon: 'icon-users'
    }
  }
};

export const Button_X_Small_Icon_Left = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_secondary_2',
    disabled: false,
    surface: 'primary',
    children: 'Button secondary',
    size: 'x-small',
    onClick: action('clicked'),
    iconLeft: {
      icon: 'icon-users'
    }
  }
};

export const Button_X_Small_Icon_Only = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_tertiary_icon_only',
    disabled: false,
    surface: 'primary',
    size: 'x-small',
    children: <Icon icon="icon-layers"/>,
    onClick: action('clicked'),
  },
};

export const Button_Small = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_primary_1',
    disabled: false,
    surface: 'primary',
    children: 'Button primary',
    size: 'small',
    onClick: action('clicked'),
  },
};

export const Button_Small_Icon_Right = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_primary_1',
    disabled: false,
    surface: 'primary',
    children: 'Button primary',
    onClick: action('clicked'),
    size: 'small',
    iconRight: {
      icon: 'icon-users'
    }
  },
};

export const Button_Small_Icon_Left = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_primary_1',
    disabled: false,
    surface: 'primary',
    children: 'Button primary',
    onClick: action('clicked'),
    size: 'small',
    iconLeft: {
      icon: 'icon-users'
    }
  },
};

export const Button_Small_Icon_Only = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_tertiary_icon_only',
    disabled: false,
    surface: 'primary',
    size: 'small',
    children: <Icon icon="icon-layers"/>,
    onClick: action('clicked'),
  },
};

export const Button_Large = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_secondary_2',
    disabled: false,
    surface: 'primary',
    children: 'Button secondary',
    size: 'large',
    onClick: action('clicked'),
  }
};

export const Button_Large_Icon_Right = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_secondary_2',
    disabled: false,
    surface: 'primary',
    children: 'Button secondary',
    size: 'large',
    onClick: action('clicked'),
    iconRight: {
      icon: 'icon-users'
    }
  }
};

export const Button_Large_Icon_Left = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_secondary_2',
    disabled: false,
    surface: 'primary',
    children: 'Button secondary',
    size: 'large',
    onClick: action('clicked'),
    iconLeft: {
      icon: 'icon-users'
    }
  }
};
export const Button_Large_Icon_Only = {
  ...ButtonStoryTemplate,
  args: {
    id: 'button_tertiary_icon_only',
    disabled: false,
    surface: 'primary',
    size: 'large',
    children: <Icon icon="icon-layers"/>,
    onClick: action('clicked'),
  },
};