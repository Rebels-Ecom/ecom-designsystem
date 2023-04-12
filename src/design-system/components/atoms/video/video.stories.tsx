import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Video } from './video'
import beerVideo from '../../../../assets/videos/beerVideo.mp4'

const meta: Meta<typeof Video> = {
    title: 'Design System/Atoms/Video',
    component: Video
  };
  
  export default meta;
  type Story = StoryObj<typeof Video>;
  
  const VideoStoryTemplate: Story = {
    render: ({ ...args }) => (
      <div style={{ margin: '1rem' }}>
        <Video {...args} />
      </div>
    )
  };
  
  export const VideoStory = {
    ...VideoStoryTemplate,
    args: {
      id: 'videoOne',
      videoUrl: beerVideo,
      alt: 'Video beer taps',
    }
  }