import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SubNavigation } from './sub-navigation'

const meta: Meta<typeof SubNavigation> = {
  title: 'Design System/Deprecated/SubNavigation',
  component: SubNavigation
};

export default meta;
type Story = StoryObj<typeof SubNavigation>;

const SubNavStoryTemplate: Story = {
  render: ({...args}) => {
    const[openSubmenu, setOpenSubmenu] = useState<boolean>(false)
    function handleOpenSubmenu(){
      setOpenSubmenu(true)
    }
    
    return(
      <div style={{position: 'relative'}}>
        <button onClick={handleOpenSubmenu}>Open Submenu</button>
        <SubNavigation {...args} isOpen={openSubmenu}/>
      </div>)
  }
}

export const SubNavigationStory = {
  ...SubNavStoryTemplate,
  args: {
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