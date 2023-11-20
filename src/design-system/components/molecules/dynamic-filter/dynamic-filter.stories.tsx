import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DynamicFilter } from './dynamic-filter'
import { Button } from '../../atoms';

const meta: Meta<typeof DynamicFilter> = {
  title: 'Design System/Molecules/Dynamic Filter',
  component: DynamicFilter,
};

export default meta;
type Story = StoryObj<typeof DynamicFilter>;

const DynamicFilterStoryTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleUpdate = (updateFilters) => console.log(updateFilters);

    return (
      <>
        <Button type='button' surface='primary' onClick={handleOpen}>{isOpen ? 'Close' : 'Open'}</Button>
        <DynamicFilter
          onUpdate={handleUpdate}
          isOpen={isOpen}
          onClose={handleClose}
          title='Filter'
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
            }
          ]}
        />
      </>
    )
  }
};

export const DynamicFilterStory = {
  ...DynamicFilterStoryTemplate,
  args: {}
}
