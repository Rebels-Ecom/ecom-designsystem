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
    subNav: {
      title: 'Våra ölsorter',
      lists :  [
        {
          listName: 'Handla',
          listLinks: [
            {href: 'ol/ale', title: 'Ale', isExternal: true }, 
            {href: 'ol/ipa', title: 'Ipa', isExternal: true}, 
            {href: 'ol/ljus-lager', title: 'Ljus lager', isExternal: true},
            {href: 'ol/mork-lager', title: 'Mörk lager', isExternal: true}, 
            {href: 'ol/pale-ale', title: 'Pale Ale', isExternal: true}, 
            {href: 'ol/stout-och-porter', title: 'Stout och Porter', isExternal: true}, 
            {href: 'ol/surol', title: 'Suröl', isExternal: true}, 
            {href: 'ol/veteol', title: 'Veteöl', isExternal: true}
          ]
        },
        {
          listName: 'Ölkunskap',
          listLinks: [
            {href: 'ol/brygkunskap', title: 'Bryggkunskap', isExternal: true }, 
            {href: 'ol/ekologisk', title: 'Ekologisk', isExternal: true}, 
            {href: 'ol/glutenfri', title: 'Glutenfri', isExternal: true},
            {href: 'ol/smak-och-lukt', title: 'Smak & Lukt', isExternal: true}, 
            {href: 'ol/historia', title: 'Historia', isExternal: true}, 
            {href: 'ol/lagra', title: 'Lagra', isExternal: true}
          ]
        },
        {
          listName: 'Inspiration',
          listLinks: [
            {href: 'ol/olstilar', title: 'Ölstilar', isExternal: true }, 
            {href: 'ol/trender', title: 'Trender', isExternal: true}, 
            {href: 'ol/svenska-hantverksol', title: 'Svenska hantverksöl', isExternal: true},
            {href: 'ol/mat-och-recept', title: 'Mat & Recept', isExternal: true}, 
            {href: 'ol/humlens-varld', title: 'Humlens värld', isExternal: true}
          ]
        }
      ]
    }
  }
}