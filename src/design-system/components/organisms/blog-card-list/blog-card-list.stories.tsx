import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BlogCardList } from './blog-card-list'
import { BlogCardStory, BlogCardStoryShortText, BlogCardStoryLongText } from '../../molecules/blog-card/blog-card.stories'

export default {
  title: 'Design System/Organisms/BlogCardList',
  component: BlogCardList
} as ComponentMeta<typeof BlogCardList>

const Template:ComponentStory<typeof BlogCardList> = (args) => {
  return <div style={{ margin: '0 auto', maxWidth: '1800px' }}>
          <BlogCardList blogCards={args.blogCards} title={args.title}/>
        </div>
}

const cardList = [
  BlogCardStory.args,
  BlogCardStory.args,
  BlogCardStory.args,
  BlogCardStory.args,
  BlogCardStoryLongText.args,
  BlogCardStoryShortText.args,
  BlogCardStoryShortText.args,
  BlogCardStoryLongText.args,
  BlogCardStoryShortText.args,
]

const oneCardList = [
  BlogCardStory.args
]

const twoCardsList = [
  BlogCardStory.args,
  BlogCardStory.args
]

const threeCardsList = [
  BlogCardStory.args,
  BlogCardStory.args,
  BlogCardStory.args,
]

const fourCardsList = [
  BlogCardStoryShortText.args,
  BlogCardStoryShortText.args,
  BlogCardStoryShortText.args,
  BlogCardStoryShortText.args,
]

export const BlogCardListStory_Fullwidth = Template.bind({})
BlogCardListStory_Fullwidth.storyName = 'BlogCardList Fullwidth'
BlogCardListStory_Fullwidth.args = {
  blogCards: oneCardList
}

export const BlogCardListStory_2_Columns = Template.bind({})
BlogCardListStory_2_Columns.storyName = 'BlogCardList 2 Columns'
BlogCardListStory_2_Columns.args = {
  title: 'Two columns list',
  blogCards: twoCardsList
}

export const BlogCardListStory_3_Columns = Template.bind({})
BlogCardListStory_3_Columns.storyName = 'BlogCardList 3 Columns'
BlogCardListStory_3_Columns.args = {
  title: 'Three columns list',
  blogCards: threeCardsList
}

export const BlogCardListStory_4_Columns = Template.bind({})
BlogCardListStory_4_Columns.storyName = 'BlogCardList 4 Columns'
BlogCardListStory_4_Columns.args = {
  title: 'Four columns list',
  blogCards: fourCardsList
}

export const BlogCardListStory_LongList = Template.bind({})
BlogCardListStory_LongList.storyName = 'BlogCardList Long List'
BlogCardListStory_LongList.args = {
  title: 'Loooong list',
  blogCards: cardList
}
