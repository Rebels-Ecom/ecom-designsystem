import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { ProductDescription } from './product-description'
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ProductDescription> = {
    title: 'Design System/Organisms/ProductDescription',
    component: ProductDescription
}

export default meta;
type Story = StoryObj<typeof ProductDescription>;

const ProductDescriptionStoryTemplate: Story = {
  render: ({ ...args }) =>(
        <ProductDescription {...args}/>
  )
}

export const ProductDescriptionStory = {
    ...ProductDescriptionStoryTemplate,
    args: {
        richText : '<h3><b>Om denna öl</b></h3><p>Typisk blommig humlearomatisk doft med en liten ton av bärighet och nässlor. </p><p>Man brukar säga att pilsen är bryggmästarens stolthet och Wisby Pils är inget undantag. En pils med de klassiska inslagen av en riklig humlekaraktär som istället för att vara besk är mer markerad och balanserad. Serveras med en tydlig skumkrona. Dessutom ekologisk.</p> <h3>Mer info</h3><ul><li>Smak: Jämn och torr smak med balanserad maltfyllighet och litet inslag av citrus samt en markerad efterbeska</li><li>Malt: Pilsner och Vetemalt</li><li>Humle: Spalter Select och Tettnangerhumle</li><li>Passar till: SOS tallriken (smör, ost och sill)</li></ul>',
        productDescriptionButton: {
            id: 'button_shopping',
            children: 'Beskrivning',
            onClick: action('clicked'),
        },
        productSheetButton: {
            id: 'button_favorite',
            children: 'Ladda ner produktblad',
            onClick: action('clicked'),
        }
    }
}