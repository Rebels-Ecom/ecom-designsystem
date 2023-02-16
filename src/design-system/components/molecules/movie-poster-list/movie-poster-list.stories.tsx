import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MoviePosterList, IMoviePosterListItem } from './movie-poster-list'

export default {
  title: 'Design System/Molecules/MoviePosterList',
  component: MoviePosterList,
} as ComponentMeta<typeof MoviePosterList>

const Template: ComponentStory<typeof MoviePosterList> = (args) => {
  let moviePosterList = []
  const headings = [
    'The Assassination of Jesse James by the Coward Robert Ford',
    'The Silence of the Lambs',
    'Titanic',
    'Jurassic Park',
    'Pulp Fiction',
    'Star Wars',
  ]
  let picsumId = 1011

  for (let i = 0, iMax = 6; i < iMax; i++) {
    let image = {
      id: `pictureOne_${i}`,
      src: `https://picsum.photos/id/${picsumId + i}/480/720`,
      sources: [{ srcset: `https://picsum.photos/id/${picsumId + i}/480/720` }],
      alt: 'Placholder',
      loading: 'eager',
      decoding: 'auto',
      fetchPriority: 'auto',
    }

    moviePosterList.push({
      image: image,
      heading: headings[i],
      preamble: 'Premiär 19 maj',
    })
  }

  let moviePosterListWithHrefs = moviePosterList.map((li: IMoviePosterListItem) => {
    return {
      ...li,
      link: {
        href: 'https://filmstaden.se',
        isExternal: true,
        target: '_blank',
      },
    }
  })

  return (
    <>
      <div style={{ width: '100%', maxWidth: '1256px', margin: '0 0 5rem 0' }}>
        <MoviePosterList
          {...args}
          list={moviePosterList}
          heading={'Premiärer i April'}
          preamble={
            <p>
              Se hela vårt utbud på <a href="https://www.filmstaden.se">filmstaden.se</a>
            </p>
          }
          listSessionId={'moviePosterListSessionId_1'}
        />
      </div>

      <div style={{ width: '100%', maxWidth: '1256px', margin: '0 0 5rem 0' }}>
        <MoviePosterList
          {...args}
          list={moviePosterListWithHrefs}
          heading={'Lista med länkar'}
          preamble={'Se hela vårt utbud på filmstaden.se'}
          listSessionId={'moviePosterListSessionId_2'}
        />
      </div>
    </>
  )
}

export const MoviePosterListStory = Template.bind({})

MoviePosterListStory.storyName = 'Movie Poster List'
