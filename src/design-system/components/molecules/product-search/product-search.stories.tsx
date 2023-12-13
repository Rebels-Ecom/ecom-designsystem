import React, { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ProductSearch, IResult } from './product-search'
import { listOfSuggestions } from './dummy-list-of-suggestions'

const meta: Meta<typeof ProductSearch> = {
  title: 'Design System/Molecules/ProductSearch',
  component: ProductSearch,
}

export default meta
type Story = StoryObj<typeof ProductSearch>

const ProductSearchStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState<boolean>(args.isOpen)
    const [query, setQuery] = useState<string>(args.query)
    const [results, setResults] = useState<Array<any>>([])

    function handleOnClickSearchResult(clickedItem: IResult) {
      console.log('Handle clicked item', clickedItem)
    }

    useEffect(() => {
      let pattern = new RegExp(query.toLowerCase(), 'i')
      setResults(productSuggestions.filter((item) => query && item.productName && pattern.test(item.productName.toLowerCase())))
    }, [query])

    return (
      <div style={{ margin: '0 0 1rem 0', maxWidth: '616px' }}>
        <ProductSearch
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
      </div>
    )
  },
}

const productSuggestions = listOfSuggestions.map((product) => {
  const productHasVariants = product.Variants && product.Variants.length > 1
  const productVariants =
    productHasVariants &&
    product.Variants.map((variant) => {
      return {
        variantId: variant.VariantId,
        variantName: variant.Name,
        imageUrl: variant.PrimaryImageUrl,
      }
    })
  return {
    partNo: product.ExternalId,
    productName: product.DisplayName,
    primaryImageUrl: product.PrimaryImageUrl,
    productVariantList: productHasVariants ? productVariants : [],
  }
})

export const ProductSearchStory = {
  ...ProductSearchStoryTemplate,
  args: {
    id: 'SearchId',
    results: [],
    isOpen: false,
    disabled: false,
    query: '',
    noResultText: 'Your search returned no results',
    placeholder: 'Sök på namn, art.nr. mm',
  },
}

export const ProductSearchStory_Loading = {
  ...ProductSearchStoryTemplate,
  args: {
    id: 'SearchId',
    results: [],
    isOpen: false,
    isLoading: true,
    disabled: false,
    query: '',
    noResultText: 'Your search returned no results',
    placeholder: 'Sök på namn, art.nr. mm',
  },
}
