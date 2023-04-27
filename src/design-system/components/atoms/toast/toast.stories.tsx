import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './toast'
import { CartProductStoryBeer, CartProductStoryWine } from '../../molecules/cart-product/cart-product.stories';
import { CartProduct } from '../../molecules';

const meta: Meta<typeof Toast> = {
  title: 'Design System/Atoms/Toast',
  component: Toast
}

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastStoryTemplate: Story = {
  render: ({ ...args }) => {

        const [toastList, setToastList] = useState(args.toastList)

        function addToToastList(itemToAdd: any){
            setToastList([...toastList, itemToAdd])
        }

console.log('T LIST', toastList)
        return(
            <div>
                <button onClick={()=>addToToastList({...CartProductStoryBeer.args})}>Add another toast</button>
                <button onClick={()=>addToToastList({...CartProductStoryWine.args})}>Add another toast</button>
                <Toast toastList={toastList}></Toast>
            </div>
        )
    }
};

export const ToastStory = {
  ...ToastStoryTemplate,
  args: {
    toastList: []
  }
}