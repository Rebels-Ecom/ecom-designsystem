import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { SignupTeaser } from './signup-teaser'
import { PictureStory } from '../../atoms/picture/picture.stories';
import { TagStoryRound_S } from '../../atoms/tag/tag.stories';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof SignupTeaser> = {
    title: 'Design System/Molecules/SignupTeaser',
    component: SignupTeaser
};

export default meta;
type Story = StoryObj<typeof SignupTeaser>;

const SignupTeaserStoryTemplate: Story = {
  render: ({ ...args }) => {
    function handleSignup() {

    }

    return(
        <div style={{ margin: '2rem auto', padding: '1rem', maxWidth: '50rem' }}>
            <SignupTeaser {...args}/>
        </div>
  )}
};

export const SignupTeaserStory = {
    ...SignupTeaserStoryTemplate,
    args: {
        heading: 'Smidiga köp med din inköplista',
        richText : '<p><b>Bli företagskund idag!</b></p><p>För en smidig hantering av dina framtida ordrar så borde du passa på att <a href={/inkoplistan}>skapa upp din första inköpslista</a> Det är ett smidigt verktyg för att du så snabbt som möjligt ska kunna beställa dom där återkommande ordrarna som så ofta behövs. Kanske till den där sommarfesten?</p><p>Din inköpslistor hanterar du sedan enkelt på <a href={/mina-sidor}>mina sidor</a></p><p><b>Du kan enkelt lägga till en produkt i en lista eller som en favorit genom att klicka på hjärtat på produkt kortet</b></p>',
        shoppingListButton: {
            id: 'button_shopping',
            disabled: true,
            surface: 'primary',
            surfaceVariant: 'blue',
            children: 'Inköpslistor',
            iconRight: {icon:'icon-clipboard'},
            onClick: action('clicked'),
        },
        favoriteButton: {
            id: 'button_favorite',
            disabled: true,
            surface: 'primary',
            surfaceVariant: 'blue',
            children: 'Produkter',
            iconRight: {icon:'icon-heart'},
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