import React, { useState } from 'react'
import { SlidingSidebar } from './sliding-sidebar'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SlidingSidebar> = {
    title: 'Design System/Molecules/SlidingSidebar',
    component: SlidingSidebar
};

export default meta;
type Story = StoryObj<typeof SlidingSidebar>;

const SlidingSidebarStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [openSidebar, setOpenSidebar] = useState(false)
    function handleSidebarOpen(){
        setOpenSidebar(true)
    }
    function handleSidebarClose(){
        setOpenSidebar(false)
      }
    return(
        <div style={{ margin: 'auto', maxWidth: '800px', position: 'relative'}}>
            <button onClick={handleSidebarOpen}>Open sidebar</button>
            <SlidingSidebar isOpen={openSidebar} children= {args.children} onClose={handleSidebarClose}/>
        </div>
    )
  }
}

export const SlidingSidebarStory = {
    ...SlidingSidebarStoryTemplate,
    args: {
        children: 'HERE COMES SOME STUFF SLIDING IN...',  
    }
}