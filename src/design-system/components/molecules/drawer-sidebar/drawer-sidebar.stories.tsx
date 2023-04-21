import React, { useState } from 'react'
import { DrawerSidebar } from './drawer-sidebar'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DrawerSidebar> = {
    title: 'Design System/Molecules/DrawerSidebar',
    component: DrawerSidebar
};

export default meta;
type Story = StoryObj<typeof DrawerSidebar>;

const DrawerSidebarStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [openSidebar, setOpenSidebar] = useState(false)
    function handleSidebarOpen(){
        setOpenSidebar(true)
    }
    function handleSidebarClose(){
        setOpenSidebar(false)
      }
    return(
        <div style={{ margin: 'auto', position: 'relative'}}>
            <button style={{ position: 'absolute', top:'4rem'}} onClick={handleSidebarOpen}>Open sidebar</button>
            <DrawerSidebar isOpen={openSidebar} children={args.children} onClose={handleSidebarClose} position={'right'} size={'lg'}/>
        </div>
    )
  }
}

export const SlidingSidebarStory = {
    ...DrawerSidebarStoryTemplate,
    args: {
        children: 'HERE COMES SOME STUFF SLIDING IN...',  
    }
}