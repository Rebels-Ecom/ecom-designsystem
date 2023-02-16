import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { AccordionList } from './accordion-list'
import { IAccordion } from '../../atoms/accordion/accordion'
import { AccordionStory } from '../../atoms/accordion/accordion.stories'

export default {
  title: 'Design System/Molecules/Accordion List',
  component: AccordionList,
} as ComponentMeta<typeof AccordionList>

const Template: ComponentStory<typeof AccordionList> = (args) => {
  const [accordionList, setAccordionList] = useState(args.list)

  function onAccordionBtnClick(id: string) {
    setAccordionList(
      accordionList.map((li: IAccordion) => {
        return li.id === id ? { ...li, isExpanded: !li.isExpanded } : li
      })
    )
  }

  return (
    <div style={{ margin: '0', maxWidth: '616px' }}>
      <AccordionList list={accordionList} onAccordionBtnClick={onAccordionBtnClick} />
    </div>
  )
}

export const AccordionListStory = Template.bind({})
AccordionListStory.storyName = 'Accordion List'

AccordionListStory.args = {
  list: [
    {
      ...AccordionStory.args,
      id: AccordionStory.args.id + '_1',
    },
    {
      ...AccordionStory.args,
      id: AccordionStory.args.id + '_2',
    },
    {
      ...AccordionStory.args,
      id: AccordionStory.args.id + '_3',
    },
    {
      ...AccordionStory.args,
      id: AccordionStory.args.id + '_4',
    },
  ],
}
