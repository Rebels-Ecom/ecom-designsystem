import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { MessagePopup } from './message-popup'
import { action } from '@storybook/addon-actions';
import { Text } from '../../atoms';
import { GroupWrapper } from '../../molecules';

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
        icon: 'icon-info',
        heading: 'Smidiga köp med din inköplista',
        richText : '<p><b>Bli företagskund idag!</b></p><p>För en smidig hantering av dina framtida ordrar så borde du passa på att <a href={/inkoplistan}>skapa upp din första inköpslista</a> Det är ett smidigt verktyg för att du så snabbt som möjligt ska kunna beställa dom där återkommande ordrarna som så ofta behövs. Kanske till den där sommarfesten?</p><p>Din inköpslistor hanterar du sedan enkelt på <a href={/mina-sidor}>mina sidor</a></p><p><b>Du kan enkelt lägga till en produkt i en lista eller som en favorit genom att klicka på hjärtat på produkt kortet</b></p>',
        shoppingListButton: {
            id: 'button_shopping',
            disabled: true,
            surface: 'primary',
            children: 'Inköpslistor',
            onClick: action('clicked'),
        },
        favoriteButton: {
            id: 'button_favorite',
            disabled: true,
            surface: 'primary',
            children: 'Produkter',
            onClick: action('clicked'),
        },
        signupLink: {
            surface: 'primary',
            children: 'Bli kund idag',
            href: '/register',
            isExternal: true,
            target: null,
            title: 'Bli kund idag'
        }
    }
}