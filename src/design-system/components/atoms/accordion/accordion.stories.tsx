import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { Accordion } from './accordion'

export default {
  title: 'Design System/Atoms/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => {
  const [isExpanded, setExpanded] = useState(false)

  function onAccordionBtnClick() {
    setExpanded(!isExpanded)
  }

  return (
    <>
      <div style={{ margin: '0 0 2rem 0', maxWidth: '616px' }}>
        <Accordion {...args} isExpanded={isExpanded} onAccordionBtnClick={onAccordionBtnClick} />
      </div>
    </>
  )
}

export const AccordionStory = Template.bind({})
AccordionStory.storyName = 'Accordion'

AccordionStory.args = {
  id: 'food_and_beverage',
  label: 'Mat och dryck',
  description: (
    <p style={{ padding: '0', margin: '0 0 1rem 0' }}>
      Vi har täta samarbeten med noga utvalda cateringleverantörer vilket gör att vi hela tiden kan erbjuda dig bra kvalitet på mat och dryck.
    </p>
  ),
}
