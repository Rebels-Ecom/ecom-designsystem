import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Picture } from './picture'

/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture */

export default {
  title: 'Design System/Atoms/Picture',
  component: Picture,
} as ComponentMeta<typeof Picture>

const Template: ComponentStory<typeof Picture> = (args) => {
  return (
    <>
      <div style={{ margin: '0 0 1rem 0' }}>
        <Picture {...args} />
      </div>
    </>
  )
}

export const PictureStory = Template.bind({})
PictureStory.storyName = 'Picture'

PictureStory.args = {
  id: 'pictureOne',
  src: 'https://picsum.photos/id/1018/1366/576',
  sources: [
    { srcset: 'https://picsum.photos/id/1011/700/1050', media: `(max-width: 767px)` },
    { srcset: 'https://picsum.photos/id/1018/1366/576', media: `(min-width: 768px)` },
  ],
  alt: 'Placholder',
  loading: 'eager',
  decoding: 'auto',
  fetchPriority: 'high',
}

export const PictureStoryBeer = Template.bind({})
PictureStoryBeer.storyName = 'Picture of a perfect beer'

PictureStoryBeer.args = {
  id: 'pictureBeer',
  src: 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb',
  sources: [
    { srcset: 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb', media: `(max-width: 767px)` },
    { srcset: 'https://spendrups.cdn.storm.io/4237ad51-a9f9-45e5-a85a-72389f6e65bb', media: `(min-width: 768px)` },
  ],
  alt: 'Placholder',
  loading: 'eager',
  decoding: 'auto',
  fetchPriority: 'high',
}

export const PictureStoryBoat = Template.bind({})
PictureStoryBoat.storyName = 'Picture'

PictureStoryBoat.args = {
  id: 'pictureBoat',
  src: 'https://picsum.photos/id/124/1366/576',
  sources: [
    { srcset: 'https://picsum.photos/id/124/700/1050', media: `(max-width: 767px)` },
    { srcset: 'https://picsum.photos/id/124/1366/576', media: `(min-width: 768px)` },
  ],
  alt: 'Placholder',
  loading: 'eager',
  decoding: 'auto',
  fetchPriority: 'high',
}

export const PictureStoryCoffee = Template.bind({})
PictureStoryCoffee.storyName = 'Picture'

PictureStoryCoffee.args = {
  id: 'pictureBoat',
  src: 'https://picsum.photos/id/431/1366/576',
  sources: [
    { srcset: 'https://picsum.photos/id/431/700/1050', media: `(max-width: 767px)` },
    { srcset: 'https://picsum.photos/id/431/1366/576', media: `(min-width: 768px)` },
  ],
  alt: 'Placholder',
  loading: 'eager',
  decoding: 'auto',
  fetchPriority: 'high',
}

export const PictureStoryKitchen = Template.bind({})
PictureStoryKitchen.storyName = 'Picture'

PictureStoryKitchen.args = {
  id: 'pictureBoat',
  src: 'https://picsum.photos/id/490/1366/576',
  sources: [
    { srcset: 'https://picsum.photos/id/490/700/1050', media: `(max-width: 767px)` },
    { srcset: 'https://picsum.photos/id/490/1366/576', media: `(min-width: 768px)` },
  ],
  alt: 'Placholder',
  loading: 'eager',
  decoding: 'auto',
  fetchPriority: 'high',
}

export const PictureStoryCookies = Template.bind({})
PictureStoryCookies.storyName = 'Picture'

PictureStoryCookies.args = {
  id: 'pictureBoat',
  src: 'https://picsum.photos/id/835/1366/576',
  sources: [
    { srcset: 'https://picsum.photos/id/835/700/1050', media: `(max-width: 767px)` },
    { srcset: 'https://picsum.photos/id/835/1366/576', media: `(min-width: 768px)` },
  ],
  alt: 'Placholder',
  loading: 'eager',
  decoding: 'auto',
  fetchPriority: 'high',
}

