import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ToastList } from './toast-list'
import { CartProductStoryBeer, CartProductStoryWine } from '../../molecules/cart-product/cart-product.stories';

const meta: Meta<typeof ToastList> = {
  title: 'Design System/Organisms/ToastList',
  component: ToastList
}

export default meta;
type Story = StoryObj<typeof ToastList>;

const ToastListStoryTemplate: Story = {
    render: ({ ...args }) => {
        const [toastList, setToastList] = useState(args.toastList)
        function addToToastList(itemToAdd: any){
            setToastList([...toastList, itemToAdd])
        }

        return(
            <div>
                <button onClick={()=>addToToastList({...CartProductStoryBeer.args})}>Add toast</button>
                <button onClick={()=>addToToastList({...CartProductStoryWine.args})}>Add another toast</button>
                <ToastList {...args} toastList={toastList}></ToastList>
            </div>
        )
    }
};

export const ToastListStory = {
    ...ToastListStoryTemplate,
    args: {
        toastList: [],
        position: 'top-right'
    }
}