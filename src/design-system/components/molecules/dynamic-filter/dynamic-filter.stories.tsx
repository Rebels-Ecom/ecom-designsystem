import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DynamicFilter, TSelected } from './dynamic-filter'
import { Button, Heading } from '../../atoms';
import { FlexContainer } from '../../layouts';

const meta: Meta<typeof DynamicFilter> = {
  title: 'Design System/Molecules/Dynamic Filter',
  component: DynamicFilter,
};

export default meta;
type Story = StoryObj<typeof DynamicFilter>;

const DynamicFilterStoryTemplate: Story = {
  render: (args) => {
    const [filters, setFilters] = useState<TSelected[]>();
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleUpdate = (_, updatedFilters) => {
      setFilters(updatedFilters)
    };
    const filtersToDisplay = filters ?? args.preSelected ?? [];
    return (
      <>
        <Button type='button' surface='primary' onClick={handleOpen}>{isOpen ? 'Close' : 'Open'}</Button>
        <FlexContainer>
          {filtersToDisplay?.map(filter => (
            <FlexContainer flexDirection='column' key={filter.name}>
              <Heading order={4} noMargin>{filter.name.toLocaleUpperCase()}</Heading>
              <FlexContainer flexDirection='column'>
                {filter.selectedOptions.map(selectedOption => <p key={selectedOption.value}>{selectedOption.value}</p>)}
              </FlexContainer>
            </FlexContainer>
          ))}
        </FlexContainer>
        <DynamicFilter
          onUpdate={handleUpdate}
          isOpen={isOpen}
          onClose={handleClose}
          title='Filter'
          preSelected={args.preSelected}
          filters={[
            {
              name: 'Listpris',
              type: 'range',
              id: 'range-id',
              options: [
                {
                    name: "0",
                    value: "rangefilter*V16062"
                },
                {
                    name: "10",
                    value: "rangefilter*V16062"
                },
                {
                    name: "20",
                    value: "rangefilter*V16062"
                },
                {
                    name: "30",
                    value: "rangefilter*V16062"
                },
                {
                    name: "40",
                    value: "rangefilter*V16062"
                },
                {
                    name: "50",
                    value: "rangefilter*V16062"
                },
                {
                    name: "60",
                    value: "rangefilter*V16062"
                },
                {
                    name: "70",
                    value: "rangefilter*V16062"
                },
                {
                    name: "80",
                    value: "rangefilter*V16062"
                },
                {
                    name: "90",
                    value: "rangefilter*V16062"
                },
                {
                    name: "100",
                    value: "rangefilter*V16062"
                },
              ]
            },
            {
              name: 'Land',
              type: 'checkbox',
              options: [
                {
                  name: 'Sweden',
                  value: 'sweden'
                },
                {
                  name: 'Italy',
                  value: 'italy'
                },
              ]
            },
            {
              name: 'Producent',
              type: 'checkbox',
              options: [
                {
                  name: 'Heineken',
                  value: 'heineken'
                },
                {
                  name: 'Birra Moretti',
                  value: 'birra-moretti'
                },
              ]
            },
            {
              name: 'Single Select',
              type: 'radio',
              options: [
                {
                  name: 'Endast dryck',
                  value: 'drink-only'
                },
                {
                  name: 'Allt',
                  value: 'all'
                },
              ]
            }
          ]}
        />
      </>
    )
  }
};

export const Dynamic_Filter_Default = {
  ...DynamicFilterStoryTemplate,
  args: {}
}

export const Dynamic_Filter_With_Pre_Selected = {
  ...DynamicFilterStoryTemplate,
  args: {
    preSelected: [
      {
        name: 'Listpris',
        selectedOptions: [
          {
            name: 'range-id',
            value: 'range-id_20-60'
          },
        ]
      },
      {
        name: 'Land',
        selectedOptions: [
          {
            name: 'Italy',
            value: 'italy'
          },
        ]
      }
    ]
  }
}
