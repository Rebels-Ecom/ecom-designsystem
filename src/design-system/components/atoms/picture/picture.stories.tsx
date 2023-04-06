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

export const PictureStoryMoscowMule = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureMoscowMule',
    src: '/assets/hero-images/Promo_Hero_L1.png',
    sources: [
      { srcset: '/assets/hero-images/Promo_Hero_L1.png', media: `(max-width: 767px)` },
      { srcset: '/assets/hero-images/Promo_Hero_L1.png', media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryBottles = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureBottles',
    src: '/assets/hero-images/Promo_Hero_C3.png',
    sources: [
      { srcset: '/assets/hero-images/Promo_Hero_C3.png', media: `(max-width: 767px)` },
      { srcset: '/assets/hero-images/Promo_Hero_C3.png', media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
    }
}

export const PictureStoryManBrewer = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureManBrewer',
    src: '/assets/hero-images/Promo_Hero_L2.png',
    sources: [
      { srcset: '/assets/hero-images/Promo_Hero_L2.png', media: `(max-width: 767px)` },
      { srcset: '/assets/hero-images/Promo_Hero_L2.png', media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryWomanBrewer = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureWomanBrewer',
    src: '/assets/hero-images/Promo_Hero_L4.png',
    sources: [
      { srcset: '/assets/hero-images/Promo_Hero_L4.png', media: `(max-width: 767px)` },
      { srcset: '/assets/hero-images/Promo_Hero_L4.png', media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

export const PictureStoryField = {
  ...PictureStoryTemplate,
  args: {
    id: 'pictureField',
    src: 'https://picsum.photos/id/98/1366/576',
    sources: [
      { srcset: 'https://picsum.photos/id/98/700/1050', media: `(max-width: 767px)` },
      { srcset: 'https://picsum.photos/id/98/1366/576', media: `(min-width: 768px)` },
    ],
    alt: 'Placholder',
    loading: 'eager',
    decoding: 'auto',
    fetchPriority: 'high',
  }
}

