import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MoviePoster } from './movie-poster'

export default {
  title: 'Design System/Atoms/MoviePoster',
  component: MoviePoster,
} as ComponentMeta<typeof MoviePoster>

const Template: ComponentStory<typeof MoviePoster> = (args) => {
  return (
    <>
      <div style={{ margin: '0', width: '240px' }}>
        <MoviePoster {...args} />
      </div>
    </>
  )
}

export const MoviePosterStory = Template.bind({})

MoviePosterStory.storyName = 'Movie Poster'

const image = {
  id: 'pictureOne',
  src: 'https://picsum.photos/id/1025/480/720',
  sources: [{ srcset: 'https://picsum.photos/id/1025/480/720' }],
  alt: 'Placholder',
  loading: 'eager',
  decoding: 'auto',
  fetchPriority: 'auto',
}

MoviePosterStory.args = {
  ...image,
}
