import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { CardImage } from './card-image'
import { PictureStoryBeer } from '../../atoms/picture/picture.stories'


const meta: Meta<typeof CardImage> = {
  title: 'Design System/Molecules/Cards',
  component: CardImage
};

export default meta;
type Story = StoryObj<typeof CardImage>;

const CardImageStoryTemplate: Story = {
  render: ({ ...args }) => {
    const maxWidth = 388;
    return(
      <div style={{ width: '100%', marginTop: '2rem', maxWidth: maxWidth }}>
        <CardImage {...args} />
      </div>
    )
  }
};

export const CardImageStory = {
  ...CardImageStoryTemplate,
  args: {
    image: PictureStoryBeer.args,
    heading: 'Pistonhead Lager',
    articleId: '1153311',
    country: 'Sverige',
    packaging: 'Engångsglas 33cl',
    unitPriceStr: '19,44',
    productTags: [
      {text: 'EKO', shape: 'pill', color: 'green'},
      {text: 'VEGAN', shape: 'pill', color: 'mint'},
      {text: 'ALCOHOLFRI', shape: 'pill', color: 'blue'},
      {text: 'NYHET', shape: 'pill', color: 'green'},
      {text: 'STANDARD SORTIMENT', shape: 'pill', color: 'orange'},
    ]  
  }
}


