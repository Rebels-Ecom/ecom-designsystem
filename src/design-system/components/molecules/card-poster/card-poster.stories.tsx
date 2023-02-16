import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardPoster } from './card-poster'
import { PictureStory } from '../../atoms/picture/picture.stories'
import { CardSquareStory } from '../card-square/card-square.stories'

export default {
  title: 'Design System/Molecules/Cards',
  component: CardPoster,
} as ComponentMeta<typeof CardPoster>

const Template: ComponentStory<typeof CardPoster> = (args) => {
  const maxWidth = 388
  return (
    <>
      <div style={{ width: '100%', marginTop: '2rem', maxWidth: maxWidth }}>
        <CardPoster {...args} />
      </div>
    </>
  )
}

export const CardPosterStory = Template.bind({})

CardPosterStory.args = {
  image: PictureStory.args,
  surface: 'decorativeOne',
  preamble: 'Från 329 kr / per person',
  heading: 'Exklusivt galaevent',
  description: 'Ex. lokalhyra, inbjudan, foajémingel, cateringpersonal, livesänding, röda mattan, fotovägg mm',
  link: {
    ...CardSquareStory.args.link,
  },
}

CardPosterStory.storyName = 'Card Poster'
