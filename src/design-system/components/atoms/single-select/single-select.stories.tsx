import React from 'react'
import { SingleSelect } from './single-select'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SingleSelect> = {
    title: 'Design System/Deprecated/SingleSelect',
    component: SingleSelect
}

export default meta;
type Story = StoryObj<typeof SingleSelect>

const SingleSelectStoryTemplate: Story = {
    render: (args) => {
        function onChangeSelect(e: React.FormEvent<HTMLSelectElement>) {
            alert(`Sort by: ${e.currentTarget.value}`)
            e.preventDefault()
          }

        return(
            <div style={{ margin: 'auto', maxWidth: '1800px' }}>
                <SingleSelect {...args} onChange={onChangeSelect}/>
            </div>
        )
    }
}

export const SingleSelectStory = {
    ...SingleSelectStoryTemplate,
    args: 
    {
        id: 'select_sort',
        name: 'Sort by: ',
        options: [
          { name: 'Namn', value: 'name' },
          { name: 'Pris', value: 'pris' },
          { name: 'Sorteringsordning', value: 'sortorder' },
          { name: 'Popularitet', value: 'popularity' },
          { name: 'Popularitetsrankning', value: 'popularityrank' }
        ]
    }
}
