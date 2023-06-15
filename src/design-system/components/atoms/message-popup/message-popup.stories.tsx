import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { MessagePopup } from './message-popup'
import { Text } from '../../atoms';
import { GroupWrapper } from '../../molecules'

const meta: Meta<typeof MessagePopup> = {
    title: 'Design System/Atoms/MessagePopup',
    component: MessagePopup
}

export default meta;
type Story = StoryObj<typeof MessagePopup>;

const MessagePopupStoryTemplate: Story = {
  render: ({ ...args }) =>(
        <div style={{ margin: '2rem auto', padding: '1rem', maxWidth: '50rem' }}>
            <MessagePopup {...args}/>
        </div>
  )
}

const messageShoppingListEmpty = (
    <GroupWrapper direction='column'>
        <Text weight='bold'>Här ser det tomt ut.</Text>
        <Text>
            Ingen fara du kan snabbt lägga till produkter genom att kopiera en inköpslista eller från din senaste order direkt in i listan, eller varför inte välja någon av våra rekommenderade produkter
        </Text>
    </GroupWrapper>
)

export const MessagePopupStory = {
    ...MessagePopupStoryTemplate,
    args: {
        children: messageShoppingListEmpty,
        icon: 'icon-info'
    }
}