import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Picture } from './picture'

/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture */

const meta: Meta<typeof Picture> = {
  title: 'Design System/Atoms/Picture',
  component: Picture
};

export default meta;
type Story = StoryObj<typeof Picture>;

const PictureStoryTemplate: Story = {
  render: ({ ...args }) => (
    <div style={{ margin: '1rem' }}>
      <Picture {...args} />
    </div>
  )
};

export const PictureStory = {
  ...PictureStoryTemplate,
  args: {
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
}

export const PictureStoryBeer = {
  ...PictureStoryTemplate,
  args: {
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
}

export const PictureStoryBoat = {
  ...PictureStoryTemplate,
  args: {
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
}

export const PictureStoryCoffee = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureCoffee',
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
}

export const PictureStoryKitchen = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureKitchen',
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
}

export const PictureStoryCookies = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureCookies',
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
}

