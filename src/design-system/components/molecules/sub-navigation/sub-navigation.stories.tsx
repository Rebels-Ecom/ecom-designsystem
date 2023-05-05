import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SubNavigation } from './sub-navigation'

const meta: Meta<typeof SubNavigation> = {
  title: 'Design System/Molecules/SubNavigation',
  component: SubNavigation
};

export default meta;
type Story = StoryObj<typeof SubNavigation>;

const SubNavStoryTemplate: Story = {
  render: ({...args}) => {
    return(<SubNavigation {...args} />)
  }
}

export const SubNavigationStory = {
  ...SubNavStoryTemplate,
  args: {
    isOpen: true,
    subNavLinks: [
      {href: 'ol/ale', title: 'Ale', isExternal: true }, 
      {href: 'ol/ipa', title: 'Ipa', isExternal: true}, 
      {href: 'ol/ljus-lager', title: 'Ljus lager', isExternal: true},
      {href: 'ol/mork-lager', title: 'Mörk lager', isExternal: true}, 
      {href: 'ol/pale-ale', title: 'Pale Ale', isExternal: true}, 
      {href: 'ol/stout-och-porter', title: 'Stout och Porter', isExternal: true}, 
      {href: 'ol/surol', title: 'Suröl', isExternal: true}, 
      {href: 'ol/veteol', title: 'Veteöl', isExternal: true}
    ]
  }
}