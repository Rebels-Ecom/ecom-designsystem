import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CreateListForm } from './create-list-form'
import logotype_desktop_horizontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'
import logotype_mobile_horiontal from '../../../../logotypes/Spendrups_logo_horizontal.svg'

const meta: Meta<typeof CreateListForm> = {
  title: 'Design System/Organisms/CreateListForm',
  component: CreateListForm,
}

export default meta
type Story = StoryObj<typeof CreateListForm>

const CreateListFormStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [name, setName] = useState<string>('')
    const [comment, setComment] = useState<string>('')
    function handleNameChange(e){setName(e.currentTarget.value)}
    function handleCommentChange(e){setComment(e.currentTarget.value)}
    function handleOnClickCancel(){console.log('Cancel form submission')}

    return(
      <div style={{ margin: '0 auto', maxWidth: '1254px' }}>
        <CreateListForm {...args} name={name} onNameChange={handleNameChange} comment={comment} onCommentChange={handleCommentChange} onCancel={handleOnClickCancel}/>
      </div>
    )
  },
}

export const CreateListFormStory = {
  ...CreateListFormStoryTemplate,
  args: {
    logo: {
      src: logotype_desktop_horizontal,
      alt: 'logo',
      href: '/',
      id: 'logo',
      sources: [
        { srcset: logotype_mobile_horiontal, media: `(max-width: 767px)` },
        { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
      ],

    },
    linkComponent: 'a',
    title: 'Skapa upp inköpslista',
    description: 'Fyll i dina uppgifter här nedanför',
    nameLabel: 'Namn',
    name: 'Vårfesten',
    commentLabel: 'Kommentar',
    comment: 'Öl för hela slanten',
    submitLabel: 'Spara',
    cancelLabel: 'Avbryt & stäng ner fönster',
    offerLinkLabel: 'Läs mer om hur listor fungerar och dess fördelar',
    onSubmit: (e) => {},
    onCancel: () => {},
    onNameChange: (e) => {},
    onCommentChange: (e) => {},
  },
}

export const CreateListFormStory_Loading = {
  ...CreateListFormStoryTemplate,
  args: {
    logo: {
      src: logotype_desktop_horizontal,
      alt: 'logo',
      href: '/',
      id: 'logo',
      sources: [
        { srcset: logotype_mobile_horiontal, media: `(max-width: 767px)` },
        { srcset: logotype_desktop_horizontal, media: `(min-width: 768px)` },
      ],

    },
    linkComponent: 'a',
    title: 'Skapa upp inköpslista',
    description: 'Fyll i dina uppgifter här nedanför',
    nameLabel: 'Namn',
    name: 'Vårfesten',
    commentLabel: 'Kommentar',
    comment: 'Öl för hela slanten',
    submitLabel: 'Spara',
    cancelLabel: 'Avbryt & stäng ner fönster',
    offerLinkLabel: 'Läs mer om hur listor fungerar och dess fördelar',
    onSubmit: (e) => {},
    onCancel: () => {},
    onNameChange: (e) => {},
    onCommentChange: (e) => {},
    loading: true
  },
}
