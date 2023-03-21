import React, { useState } from 'react'
import { ISelectOption, MultiSelect } from './multi-select'
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MultiSelect> = {
    title: 'Design System/Atoms/MultiSelect',
    component: MultiSelect
}

export default meta;
type Story = StoryObj<typeof MultiSelect>

const MultiSelectStoryTemplate: Story = {
    render: (args) => {
        const [selected, setSelected] = useState<string[]>([])
        const onToggleOption = (option:ISelectOption) => {
            setSelected(prevSelected => {
                const newArray = [...prevSelected]
                if (newArray.some(item=> item===option.value)) {
                    return newArray.filter(item => item != option.value)
                } else {
                    newArray.push(option.value)
                    return newArray;
                }
            })
        }

        return(
            <div style={{ margin: 'auto', maxWidth: '1800px' }}>
                <MultiSelect name={args.name} options={args.options} selectedOptions={selected} onToggleOption={onToggleOption} icon={args.icon} />
            </div>
        )
    }
}

export const MultiSelectStoryLand = {
    ...MultiSelectStoryTemplate,
    args: 
    {
        id: '10766',
        name: 'Land',
        options:[
            { name: 'Belgien', value: 'attributefilter*L10766_41516' },
            { name: 'England', value: 'attributefilter*L10766_118421' },
            { name: 'Irland', value: 'attributefilter*L10766_41532' },
            { name: 'Spanien', value: 'attributefilter*L10766_41523' },
            { name: 'Sverige', value: 'attributefilter*L10766_41547' }  
        ],
        icon: {icon:'icon-map-pin'}
    }
}

export const MultiSelectStoryProducer = {
    ...MultiSelectStoryTemplate,
    args: 
    {
        id: '10770',
        name: 'Producent',
        options:[
            { name: 'Beavertown Brewery', value: 'attributefilter*L10770_110433' },
            { name: 'Brutal Brewing', value: 'attributefilter*L10766_118421' },
            { name: 'Cervezas Victoria', value: 'attributefilter*L10770_110444' },
            { name: 'Starobrno', value: 'attributefilter*L10770_41806' }
        ],
        icon: {icon:'icon-award'}
    }
}

export const MultiSelectStoryPackaging = {
    ...MultiSelectStoryTemplate,
    args: 
    {
        id: '12336',
        name: 'Förpackning',
        options:[
            { name: 'Burk', value: 'attributefilter*L12336_122639' },
            { name: 'Engångsglas', value: 'attributefilter*L12336_122646' },
            { name: 'FAT', value: 'attributefilter*L12336_122643' },
            { name: 'Returglas', value: 'attributefilter*L12336_122649' }
        ],
        icon: {icon:'icon-package'}
    }
}
