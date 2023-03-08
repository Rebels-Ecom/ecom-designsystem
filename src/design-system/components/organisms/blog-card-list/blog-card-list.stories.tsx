import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BlogCardList } from './blog-card-list'
import { BlogCardStory, BlogCardStoryShortText, BlogCardStoryLongText } from '../../molecules/blog-card/blog-card.stories'

const meta: Meta<typeof BlogCardList> = {
  title: 'Design System/Organisms/BlogCardList',
  component: BlogCardList
};

export default meta;
type Story = StoryObj<typeof BlogCardList>;

const BlogCardListStoryTemplate: Story = {
  render: ( args ) => (
    <div style={{ margin: '0 auto', maxWidth: '1800px' }}>
      <BlogCardList blogCards={args.blogCards} title={args.title}/>
    </div>
  )
};

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

export const BlogCardListStory_Fullwidth = {
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}

export const BlogCardListStory_2_Columns = {
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: twoCardsList
  }
}

export const BlogCardListStory_3_Columns = {
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Three columns list',
    blogCards: threeCardsList
  }
}

export const BlogCardListStory_4_Columns = {
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Four columns list',
    blogCards: fourCardsList
  }
}

export const BlogCardListStory_LongList = {
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Loooong list',
    blogCards: cardList
  }
}
