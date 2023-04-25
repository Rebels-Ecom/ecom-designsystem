import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './toast'
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Toast> = {
    title: 'Design System/Molecules/Toast',
    component: Toast
}

export default meta;
type Story = StoryObj<typeof Toast>;

const ToastStoryTemplate: Story = {
  render: () =>(
        <div style={{ margin: '2rem auto', padding: '1rem', maxWidth: '50rem' }}>
            <Toast/>
        </div>
  )
}

export const ToastStory = {
    ...ToastStoryTemplate,
}