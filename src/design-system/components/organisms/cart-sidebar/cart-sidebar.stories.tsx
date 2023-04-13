import React, { useState } from 'react'
import { CartSidebar } from './cart-sidebar'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CartSidebar> = {
    title: 'Design System/Organisms/CartSidebar',
    component: CartSidebar
};

export default meta;
type Story = StoryObj<typeof CartSidebar>;

const CartSidebarStoryTemplate: Story = {
    render: ({ ...args }) => {
        const [showCartSidebar, setShowCartSidebar] = useState(false)
        function openCartSidebar(){
            setShowCartSidebar(true)
        }
        function closeCartSidebar(){
            setShowCartSidebar(false)
        }
        return(
            <div style={{ margin: 'auto', maxWidth: '1800px' }}>
                <button onClick={openCartSidebar}>Open sidebar</button>
                <CartSidebar {...args} isOpen={showCartSidebar} onClose={closeCartSidebar} />
            </div>
        )
    }
}

export const CartSidebarStory = {
    ...CartSidebarStoryTemplate,
    args: {
        title: 'Kundvagn',
    }
}