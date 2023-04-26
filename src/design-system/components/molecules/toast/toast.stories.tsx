import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Toast, showToast } from './toast'
import { CartProductStoryWine } from '../cart-product/cart-product.stories'
import { Button } from '../../atoms/button/button'

const meta: Meta<typeof Toast> = {
    title: 'Design System/Molecules/Toast',
    component: Toast
}

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastStoryTemplate: Story = {
  render: ({...args}) =>{

    return(
        <div style={{ margin: '2rem auto', padding: '1rem', maxWidth: '50rem' }}>
            <Button surface='primary' type='button' onClick={()=>showToast(args.product)}>
                Trigger toast
            </Button>
        </div>
    )
  }
}

export const ToastStory = {
    ...ToastStoryTemplate,
    args: {
        product: CartProductStoryWine.args
    }
}