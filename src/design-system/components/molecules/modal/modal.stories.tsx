import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './modal'
import { CreateListForm } from '../../organisms/create-list-form/create-list-form'
import { CreateListFormStory } from '../../organisms/create-list-form/create-list-form.stories'


const meta: Meta<typeof Modal> = {
  title: 'Design System/Molecules/Modal',
  component: Modal
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalStoryTemplate: Story = {
  render: ({...args}) => {
    const[isOpen, setIsOpen] = useState<boolean>(false)
    return (
    <div>
        <button onClick={()=>setIsOpen(true)}>Open Modal</button>
        <div id="portal"></div>
        <Modal {...args} open={isOpen} onClose={()=>setIsOpen(false)} >
            <CreateListForm {...CreateListFormStory.args} onCancel={()=>setIsOpen(false)}></CreateListForm>
        </Modal>
    </div>)
  }
};

export const ModalStory = {
  ...ModalStoryTemplate,
  args: {
    children: <CreateListForm {...CreateListFormStory.args}></CreateListForm>
  }
}

export const ModalStory_Dismissable = {
    ...ModalStoryTemplate,
    args: {
      children: <CreateListForm {...CreateListFormStory.args}></CreateListForm>,
      dismissable: true
    }
}

export const ModalStory_LightBackdrop = {
    ...ModalStoryTemplate,
    args: {
      children: <CreateListForm {...CreateListFormStory.args}></CreateListForm>,
      dismissable: true,
      backdropType: 'light'
    }
}