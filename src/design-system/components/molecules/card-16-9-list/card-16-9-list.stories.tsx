import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { Card_16_9_List } from './card-16-9-list'
import { Card_16_9StoryText, Card_16_9StoryImage } from '../../atoms/card-16-9/card-16-9.stories'

export default {
  title: 'Design System/Molecules/Cards/Card_16_9_List',
  component: Card_16_9_List,
} as ComponentMeta<typeof Card_16_9_List>

const Template: ComponentStory<typeof Card_16_9_List> = (args) => {
  const [cardList] = useState(args.list)

  return (
    <div style={{ margin: '0', maxWidth: '1254px' }}>
      <Card_16_9_List list={cardList} maxColumns={args.maxColumns} />
    </div>
  )
}

const textList = [
  Card_16_9StoryText.args,
  Card_16_9StoryText.args,
  Card_16_9StoryText.args,
  Card_16_9StoryText.args,
  Card_16_9StoryText.args,
  Card_16_9StoryText.args,
  Card_16_9StoryText.args,
  Card_16_9StoryText.args,
  Card_16_9StoryText.args,
]

const imageList = [
  Card_16_9StoryImage.args,
  Card_16_9StoryImage.args,
  Card_16_9StoryImage.args,
  Card_16_9StoryImage.args,
  Card_16_9StoryImage.args,
  Card_16_9StoryImage.args,
  Card_16_9StoryImage.args,
  Card_16_9StoryImage.args,
  Card_16_9StoryImage.args,
]

const imageTextList = [
  Card_16_9StoryText.args,
  Card_16_9StoryImage.args,
  Card_16_9StoryImage.args,
  Card_16_9StoryText.args,
  Card_16_9StoryText.args,
  Card_16_9StoryText.args,
  Card_16_9StoryImage.args,
  Card_16_9StoryText.args,
  Card_16_9StoryImage.args,
]

export const Card_16_9_List_Max_Columns_3_Text = Template.bind({})
Card_16_9_List_Max_Columns_3_Text.storyName = 'Card 16:9 List Max Columns 3 Text'

Card_16_9_List_Max_Columns_3_Text.args = {
  list: textList,
  maxColumns: 3,
}

export const Card_16_9_List_Max_Columns_4_Text = Template.bind({})
Card_16_9_List_Max_Columns_4_Text.args = {
  list: textList,
  maxColumns: 4,
}
Card_16_9_List_Max_Columns_4_Text.storyName = 'Card 16:9 List Max Columns 4 Text'

export const Card_16_9_List_Max_Columns_3_Image = Template.bind({})
Card_16_9_List_Max_Columns_3_Image.storyName = 'Card 16:9 List Max Columns 3 Image'

Card_16_9_List_Max_Columns_3_Image.args = {
  list: imageList,
  maxColumns: 3,
}

export const Card_16_9_List_Max_Columns_4_Image = Template.bind({})
Card_16_9_List_Max_Columns_4_Image.args = {
  list: imageList,
  maxColumns: 4,
}
Card_16_9_List_Max_Columns_4_Image.storyName = 'Card 16:9 List Max Columns 4 Image'

export const Card_16_9_List_Max_Columns_3_Text_Image = Template.bind({})
Card_16_9_List_Max_Columns_3_Text_Image.storyName = 'Card 16:9 List Max Columns 3 Text and Image'

Card_16_9_List_Max_Columns_3_Text_Image.args = {
  list: imageTextList,
  maxColumns: 3,
}

export const Card_16_9_List_Max_Columns_4_Text_Image = Template.bind({})
Card_16_9_List_Max_Columns_4_Text_Image.args = {
  list: imageTextList,
  maxColumns: 4,
}
Card_16_9_List_Max_Columns_4_Text_Image.storyName = 'Card 16:9 List Max Columns 4 Text and Image'
