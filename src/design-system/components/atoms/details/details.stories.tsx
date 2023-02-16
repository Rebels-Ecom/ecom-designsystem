import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { Details } from './details'

export default {
  title: 'Design System/Atoms/Details',
  component: Details,
} as ComponentMeta<typeof Details>

const Template: ComponentStory<typeof Details> = (args) => {
  const [isExpanded, setExpanded] = useState(false)

  function onDetailsBtnClick() {
    setExpanded(!isExpanded)
  }

  return (
    <>
      <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
        <Details {...args} isExpanded={isExpanded} onDetailsBtnClick={onDetailsBtnClick} />
      </div>
    </>
  )
}

export const DetailsStory = Template.bind({})
DetailsStory.storyName = 'Details'

DetailsStory.args = {
  id: 'food_and_beverage',
  label: 'Mer om Bioduken',
  description: (
    <p style={{ padding: '0', margin: '0 0 0.5rem 0' }}>
      Här finns förväntan i luften, stora känslor och upplevelser som delas med andra. På bio möter ni en entusiastisk publik, som tycker att reklamen före
      filmen är en del av upplevelsen. Den storslagna duken och det maffiga ljudet ger ditt varumärke en uppmärksamhet och ett engagemang få andra platser.
    </p>
  ),
}
