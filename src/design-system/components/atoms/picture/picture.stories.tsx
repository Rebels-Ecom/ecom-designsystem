import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Picture } from './picture'
import pictureMoscowMule from '../../../../assets/hero-images/Promo_Hero_L1.png'
import pictureBottles from '../../../../assets/hero-images/Promo_Hero_C3.png'
import pictureManBrewer from '../../../../assets/hero-images/Promo_Hero_L2.png'
import pictureWomanBrewer from '../../../../assets/hero-images/Promo_Hero_L4.png'

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
    src: pictureMoscowMule,
    sources: [
      { srcset: pictureMoscowMule, media: `(max-width: 767px)` },
      { srcset: pictureMoscowMule, media: `(min-width: 768px)` },
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
    src: pictureBottles,
    sources: [
      { srcset: pictureBottles, media: `(max-width: 767px)` },
      { srcset: pictureBottles, media: `(min-width: 768px)` },
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
    src: pictureManBrewer,
    sources: [
      { srcset: pictureManBrewer, media: `(max-width: 767px)` },
      { srcset: pictureManBrewer, media: `(min-width: 768px)` },
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
    src: pictureWomanBrewer,
    sources: [
      { srcset: pictureWomanBrewer, media: `(max-width: 767px)` },
      { srcset: pictureWomanBrewer, media: `(min-width: 768px)` },
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

