import React, { useEffect, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Search } from './search'

export default {
    title: 'Design System/Atoms/Search',
    component: Search
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => {

    const [isOpen, setIsOpen] = useState<boolean>(args.isOpen)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [query, setQuery] = useState<string>(args.query)
    const [results, setResults] = useState<Array<any>>([])

    useEffect(() => {
      let pattern = new RegExp(query.toLowerCase(), 'i')
      setResults(itemsToFilterOn.filter((item) => query && item.label && pattern.test(item.label.toLowerCase())))
    }, [query]);

    return (
        <Search
          id={args.id}
          query={query}
          setQuery={setQuery}
          results={results}
          disabled={args.disabled}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setIsFocused={setIsFocused}
          noResult={args.noResult}
          placeholder={args.placeholder}
        />
    )
}

const itemsToFilterOn = [
    { id: 'NCG626689', label: 'Ekoöl på riktigt', text: 'Testa vår ekoöl', slug: 'eko-ol' },
    { id: 'NCG691725', label: 'Loka årets vinnare', text: 'Loka årets vinnare i sustainable brand index', slug: 'loka-arets-vinnare' },
    { id: 'NCG383172', label: 'Spendrups hållbarhetsredovisning', text: 'Läsa om Spendrups hållbarhetsredovisning', slug: 'spendrups-hallbarhetsredovisning' },
    { id: 'NCG521824', label: 'Briska', text: 'Briska', slug: 'briska' },
    { id: 'NCG583714', label: 'Spring wine and spirits', text: 'Vårens nya smak', slug: 'spring-wine-spirits' },
    { id: 'NCG769205', label: 'Det här är vi', text: 'Familjeföretaget med öl i blodet', slug: 'om-oss' },
    { id: 'NCG880524', label: 'Kiviks musteri', text: 'Prova nya cider', slug: 'kiviks-cider' },
    { id: 'NCG153793', label: 'Här är nya Loka likes favorites', text: 'loka likes favorites - smakar glass och kokos ', slug: 'loka-favorites' },
    { id: 'NCG660063', label: 'Övrig läsk och vatten', text: 'Övrig läsk och vatten', slug: 'lask-och-vatten' },
  ];

export const SearchStory = Template.bind({})
SearchStory.title = 'Search Story'
SearchStory.args = {
    id: 'SearchId',
    results: [],
    isOpen: false,
    disabled: false,
    query: '',
    noResult: {
      label: 'Your search returned no results',
      text: 'Thank you, come again',
    },
    placeholder: 'Placeholder text',
}
