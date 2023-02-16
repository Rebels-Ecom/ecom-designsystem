import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { UnorderedList } from './unordered-list'

export default {
  title: 'Design System/Atoms/Lists/UnorderedList',
  component: UnorderedList,
} as ComponentMeta<typeof UnorderedList>

const Template: ComponentStory<typeof UnorderedList> = () => (
  <UnorderedList>
    <li>Popkorn</li>
    <li>Snacks</li>
    <li>Läsk</li>
    <li>Godis</li>
  </UnorderedList>
)

Template.storyName = 'UnorderedList'

export { Template }
