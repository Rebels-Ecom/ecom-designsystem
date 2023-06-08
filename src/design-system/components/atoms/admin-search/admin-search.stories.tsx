import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { AdminSearch, IResult } from './admin-search'

const meta: Meta<typeof AdminSearch> = {
  title: 'Design System/Atoms/AdminSearch',
  component: AdminSearch
};

export default meta;
type Story = StoryObj<typeof AdminSearch>;

const AdminSearchStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpen)
    const [query, setQuery] = useState<string>(args.query)
    const [results, setResults] = useState<Array<any>>([])

    function handleOnClickSearchResult(clickedItem: IResult){
      console.log('Handle clicked item', clickedItem)
    }

    useEffect(() => {
      let pattern = new RegExp(query.toLowerCase(), 'i')
      setResults(itemsToFilterOn.filter((item) => query && (
        (item.name && pattern.test(item.name.toLowerCase())) ||
        (item.companyName && pattern.test(item.companyName.toLowerCase())) ||
        (item.companyId && pattern.test(item.companyId.toString().toLowerCase())) ||
        (item.email && pattern.test(item.email.toLowerCase()))
        )))
    }, [query]);

    return(
      <AdminSearch
        id={args.id}
        query={query}
        setQuery={setQuery}
        results={results}
        onClickSearchResult={handleOnClickSearchResult}
        disabled={args.disabled}
        isLoading={args.isLoading}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        noResultText={args.noResultText}
        placeholder={args.placeholder}
      />
    )
  }
};

export const itemsToFilterOn = [
  { id: 1747842, name: "371000 EXPERIUM LODGEBAREN", email: "admin-371000@spendrups.nu", phone: null, companyId: 283903, companyName: "EXPERIUM LODGEBAREN (371000)" },
  { id: 2480854, name: "371000 EXPERIUM LODGEBAREN", email: "admin-37100012@spendrups.nu", phone: null, companyId: 283903, companyName: "EXPERIUM LODGEBAREN (371000)" },
  { id: 1735352, name: "Beställare 222 371000", email: "order-371000@371000.se", phone: null, companyId: 283903, companyName: "EXPERIUM LODGEBAREN (371000)" },
  { id: 3698667, name: "Dryckesturnén 2019", email: "dryckesturnen@spendrups.se", phone: null, companyId: 283903, companyName: "EXPERIUM LODGEBAREN (371000)" },
  { id: 3730589, name: "Ebba Persson", email: "ebba.persson@nexergroup.com", phone: null, companyId: 283903, companyName: "EXPERIUM LODGEBAREN (371000)"},
  { id: 1735459, name: "Fredrik Gustavsson", email: "fredrik.gustavsson@sigma.se", phone: null, companyId: 283903, companyName: "EXPERIUM LODGEBAREN (371000)"},
  { id: 3701109, name: "Fredrik2 Gustavsson2", email: "fredrik.gustavsson@jolix.se", phone: null, companyId: 283903, companyName: "EXPERIUM LODGEBAREN (371000)"},
  { id: 3835637, name: "German Jss", email: "jss@tt.tt", phone: null, companyId: 283903, companyName: "EXPERIUM LODGEBAREN (371000)"},
  { id: 3835705, name: "German jss1@tt.tt", email: "jss1@tt.tt", phone: null, companyId: 283903, companyName: "EXPERIUM LODGEBAREN (371000)"},
  { id: 3708697, name: "Henrik Test", email: "test-henrik@371000.se", phone: null, companyId: 283903, companyName: "EXPERIUM LODGEBAREN (371000)"}
]

export const AdminSearchStory = {
  ...AdminSearchStoryTemplate,
  args: {
    id: 'SearchId',
    results: [],
    isOpen: false,
    disabled: false,
    query: '',
    noResultText: 'Your search returned no results',
    placeholder: 'Sök på kundnummer, företag, namn'
  }
}

export const AdminSearchStory_Loading = {
  ...AdminSearchStoryTemplate,
  args: {
    id: 'SearchId',
    results: [],
    isOpen: false,
    isLoading: true,
    disabled: false,
    query: '',
    noResultText: 'Your search returned no results',
    placeholder: 'Sök på kundnummer, företag, namn'
  }
}
