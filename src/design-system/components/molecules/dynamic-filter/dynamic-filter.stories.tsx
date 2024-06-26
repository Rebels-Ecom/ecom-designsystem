import React, { useMemo, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DynamicFilter, TFilterType, TOptionType, TSelected } from './dynamic-filter'
import { Button, Heading, IconButton } from '../../atoms';
import { FlexContainer } from '../../layouts';

const meta: Meta<typeof DynamicFilter> = {
  title: 'Design System/Molecules/Dynamic Filter',
  component: DynamicFilter,
};

export default meta;
type Story = StoryObj<typeof DynamicFilter>;

const random_data = [{
  id: '1',
  country: 'italien',
  price: '20',
  producer: 'Birra Moretti'
}, {
  id: '2',
  country: 'italien',
  price: '30',
  producer: 'Birra Moretti'
}, {
  id: '3',
  country: 'sverige',
  price: '40',
  producer: 'Heineken',
}, {
  id: '4',
  country: 'sverige',
  price: '10',
  producer: 'Heineken',
}]

const DynamicFilterStoryTemplate: Story = {
  render: (args) => {
    const [filters, setFilters] = useState<TSelected[]>();
    const handleUpdate = (_, updatedFilters) => {
      setFilters(updatedFilters)
    };
    const filteredData = useMemo(() => random_data.filter(x =>
      filters?.find(y =>
        y.selectedOptions?.find(z =>
          {
            return z.name?.toLowerCase() === x.country ||
          z.name?.toLowerCase() === x.producer}
        )
      )
    ), [filters]);

    return (
      <>
        <DynamicFilter
          onUpdate={handleUpdate}
          title='Filter'
          preSelected={args.preSelected ?? []}
          filters={args.filters}
        />
        <FlexContainer flexDirection='column'>
          {(filteredData.length ? filteredData : random_data).map(data => <span style={{ color: 'blue' }} key={data.id}>{data.producer}, {data.price}kr</span>)}
        </FlexContainer>
      </>
    )
  }
};

export const Dynamic_Filter_Default = {
  ...DynamicFilterStoryTemplate,
  args: {
    filters: [
      {
        name: 'Listpris',
        type: 'range',
        id: 'rangefilter*V16062',
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
          {
              name: "200",
              value: "rangefilter*V16062"
          },
          {
              name: "300",
              value: "rangefilter*V16062"
          },
          {
              name: "400",
              value: "rangefilter*V16062"
          },
          {
              name: "500",
              value: "rangefilter*V16062"
          },
          {
              name: "1000",
              value: "rangefilter*V16062"
          },
          {
              name: "1500",
              value: "rangefilter*V16062"
          },
          {
              name: "2000",
              value: "rangefilter*V16062"
          },
          {
              name: "2466",
              value: "rangefilter*V16062"
          },
        ]
      },
      {
        name: 'Land',
        type: 'checkbox',
        options: [
          {
            name: 'Sverige',
            value: 'sverige'
          },
          {
            name: 'Italien',
            value: 'italien'
          },
          {
            name: 'USA',
            value: 'usa'
          },
          {
            name: 'Belgien',
            value: 'belgien'
          },
          {
            name: 'Norge',
            value: 'norge'
          },
          {
            name: 'Irland',
            value: 'irland'
          },
          {
            name: 'Tyskland',
            value: 'tyskland'
          },
          {
            name: 'Nederländerna',
            value: 'nederländerna'
          },
          {
            name: 'Tjeckien',
            value: 'tjeckien'
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
    ] as TFilterType[]
  }
}

export const Dynamic_Filter_With_Pre_Selected = {
  ...DynamicFilterStoryTemplate,
  args: {
    filters: [
      {
        name: 'Listpris',
        type: 'range',
        id: 'rangefilter*V16062',
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
          {
              name: "200",
              value: "rangefilter*V16062"
          },
          {
              name: "300",
              value: "rangefilter*V16062"
          },
          {
              name: "400",
              value: "rangefilter*V16062"
          },
          {
              name: "500",
              value: "rangefilter*V16062"
          },
          {
              name: "1000",
              value: "rangefilter*V16062"
          },
          {
              name: "1500",
              value: "rangefilter*V16062"
          },
          {
              name: "2000",
              value: "rangefilter*V16062"
          },
          {
              name: "2466",
              value: "rangefilter*V16062"
          },
        ]
      },
      {
        name: 'Land',
        type: 'checkbox',
        options: [
          {
            name: 'Sverige',
            value: 'sverige'
          },
          {
            name: 'Italien',
            value: 'italien'
          },
          {
            name: 'USA',
            value: 'usa'
          },
          {
            name: 'Belgien',
            value: 'belgien'
          },
          {
            name: 'Norge',
            value: 'norge'
          },
          {
            name: 'Irland',
            value: 'irland'
          },
          {
            name: 'Tyskland',
            value: 'tyskland'
          },
          {
            name: 'Nederländerna',
            value: 'nederländerna'
          },
          {
            name: 'Tjeckien',
            value: 'tjeckien'
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
    ] as TFilterType[],
    preSelected: [
      {
        name: 'Listpris',
        selectedOptions: [
          {
            name: 'range-id',
            value: '20-600'
          },
        ]
      },
      {
        name: 'Land',
        selectedOptions: [
          {
            name: 'Italien',
            value: 'italien'
          },
        ]
      }
    ]
  }
}
