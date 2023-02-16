import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CardImage } from './card-image'
import { PictureStoryBeer } from '../../atoms/picture/picture.stories'

export default {
  title: 'Design System/Molecules/Cards',
  component: CardImage,
} as ComponentMeta<typeof CardImage>

const Template: ComponentStory<typeof CardImage> = (args) => {
  const maxWidth = 388
  return (
    <>
      <div style={{ width: '100%', marginTop: '2rem', maxWidth: maxWidth }}>
        <CardImage {...args} />
      </div>
    </>
  )
}

export const CardImageStory = Template.bind({})
CardImageStory.storyName = 'Card Image'
CardImageStory.args = {
  image: PictureStoryBeer.args,
  heading: 'Pistonhead Lager',
  articleId: '1153311',
  country: 'Sverige',
  packaging: 'Engångsglas 33cl',
  unitPriceStr: '19,44'
}


