import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BlogCardList } from './blog-card-list'
import {
  BlogCardStory_AmericanBeer, 
  BlogCardStory_Pang,
  BlogCardStory_Oranges,
  BlogCardStory_BeerEquipment,
  BlogCardStory_BeerTap,
  BlogCardStoryFullWidth,
} from '../../molecules/blog-card/blog-card.stories'

const meta: Meta<typeof BlogCardList> = {
  title: 'Design System/Organisms/BlogCardList',
  component: BlogCardList
};

export default meta;
type Story = StoryObj<typeof BlogCardList>;

const BlogCardListStoryTemplate: Story = {
  render: ( args ) => (
      <BlogCardList
        blogCards={args.blogCards}
        title={args.title}
        oddHeights={!!args.oddHeights}
        stretchItems={args.stretchItems}
        swipe={args.swipe}
      />
  )
};

const oneCardList = [
  BlogCardStoryFullWidth.args
]

const twoCardList = [
  BlogCardStory_AmericanBeer.args, 
  BlogCardStory_Pang.args, 
]

const threeCardList = [
  BlogCardStory_AmericanBeer.args, 
  BlogCardStory_Pang.args, 
  BlogCardStory_Oranges.args,
]

const spendrupsEquipment = [
  BlogCardStory_Oranges.args,
  BlogCardStory_BeerEquipment.args,
  BlogCardStory_BeerTap.args,
  BlogCardStory_Oranges.args,
  BlogCardStory_BeerEquipment.args,
  BlogCardStory_BeerTap.args,
  BlogCardStory_Oranges.args,
  BlogCardStory_BeerEquipment.args,
  BlogCardStory_BeerTap.args,
  BlogCardStory_Oranges.args,
  BlogCardStory_BeerEquipment.args,
  BlogCardStory_BeerTap.args,
]

export const Full_Width = {
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList
  }
}

export const One_Card = {
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: oneCardList.map(x => ({...x, fullWidth: false})),
    stretchItems: false
  }
}

export const Two_Cards = {
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: twoCardList,
    stretchItems: false
  }
}

export const Three_Cards = {
  ...BlogCardListStoryTemplate,
  args: {
    title: 'Varför Spendrups',
    blogCards: threeCardList,
    oddHeights: true,
    stretchItems: false
  }
}

export const Four_Cards = {
  ...BlogCardListStoryTemplate,
  args: {
    blogCards: spendrupsEquipment,
    swipe: false,
    stretchItems: false
  }
}

