import React, { useState } from 'react'
import { Filter } from './filter'
import type { Meta, StoryObj } from '@storybook/react'
import { MultiSelectStoryLand, MultiSelectStoryProducer, MultiSelectStoryPackaging } from '../../atoms/multi-select/multi-select.stories'
import { SingleSelectStory } from '../../atoms/single-select/single-select.stories'

const meta: Meta<typeof Filter> = {
    title: 'Design System/Molecules/Filter',
    component: Filter
}

export default meta;
type Story = StoryObj<typeof Filter>

const FilterStoryTemplate: Story = {
    render: (args) => {
        const [selectedFilters, setSelectedFilters] = useState<string[]>([])

        function handleFilterSelection(filterValue:string) {
            setSelectedFilters(prevSelected => {
                const newArray = [...prevSelected]
                if (newArray.some(item=> item ===filterValue)) {
                    return newArray.filter(item => item!= filterValue)
                } else {
                    newArray.push(filterValue)
                    return newArray;
                }
            })
        }

        return(
            <div style={{ margin: 'auto', maxWidth: '1800px' }}>
                <Filter {...args} selectedOptions = {selectedFilters} updateFilterSelection={handleFilterSelection}/>
            </div>
        )
    }
}

export const FilterStorySorting= {
    ...FilterStoryTemplate,
    args: { ...SingleSelectStory.args, id: '134-abc', filterType: 'single' }
}

export const FilterStoryLand = {
    ...FilterStoryTemplate,
    args: { ...MultiSelectStoryLand.args, id: '10766', filterType: 'multi' }
}

export const FilterStoryProducer = {
    ...FilterStoryTemplate,
    args: { ...MultiSelectStoryProducer.args, id: '10770', filterType: 'multi' }
}

export const FilterStoryPackaging = {
    ...FilterStoryTemplate,
    args: { ...MultiSelectStoryPackaging.args, id: '12336', filterType: 'multi' }
}