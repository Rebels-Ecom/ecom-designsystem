import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card_16_9 } from './card-16-9'
import { CardSquareStory } from '../../molecules/card-square/card-square.stories'

export default {
  title: 'Design System/Atoms/Cards/Card_16_9',
  component: Card_16_9,
} as ComponentMeta<typeof Card_16_9>

const Template: ComponentStory<typeof Card_16_9> = (args) => {
  return (
    <>
      <div style={{ width: '100%', marginTop: '2rem', maxWidth: 388 }}>
        <Card_16_9 {...args} />
      </div>
    </>
  )
}

export const Card_16_9StoryText = Template.bind({})

const image = {
  id: 'pictureOne',
  src: '/fimstaden-light-logo.png',
  sources: [{ srcset: '/fimstaden-light-logo.png' }],
  alt: 'Placholder',
  loading: 'eager',
  decoding: 'auto',
  fetchPriority: 'auto',
}

Card_16_9StoryText.args = {
  heading: 'Förhandsvisning',
  preamble: 'Låt varumärken ta plats',
  link: {
    ...CardSquareStory.args.link,
    onSurface: 'transparent',
  },
  imageFit: 'contain',
}

Card_16_9StoryText.storyName = 'Card 16:9 Text'

export const Card_16_9StoryImage = Template.bind({})

Card_16_9StoryImage.args = {
  ...Card_16_9StoryText.args,
  image: image,
}

Card_16_9StoryImage.storyName = 'Card 16:9 Image'
