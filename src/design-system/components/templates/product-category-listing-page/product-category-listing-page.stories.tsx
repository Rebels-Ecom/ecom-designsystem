import React, { useEffect, useMemo, useState } from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { BreadcrumbsStoryWithoutBackground } from '../../organisms/breadcrumbs/breadcrumbs.stories'
import { ProductCardListStory } from '../../organisms/product-card-list/product-card-list.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { ContentWrapper, FlexContainer } from '../../layouts'
import { Breadcrumbs, Footer, ProductCardList } from '../../organisms'
import { DynamicFilter, SelectList } from '../../molecules'
import { Dynamic_Filter_Default } from '../../molecules/dynamic-filter/dynamic-filter.stories'
import { Button } from '../../atoms'

const meta: Meta = {
  title: 'Design System/Templates/ProductCategoryListingPage',
  parameters: {
    controls: {
      exclude:/.*/g,
      hideNoControlsWarning: true
    },
  },
};

export default meta;

// GUIDELINE for how to structure a product category listing page
const ProductCategoryListingPageStoryTemplate = {
  render: ({ ...args }) => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [sortBy, setSortBy] = useState<string | undefined>();
    const [dataToDisplay, setDataToDisplay] = useState([]);
    function handleAddToCart(product:any) {
      alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    useEffect(() => {
      setDataToDisplay(args?.productCategoryListing?.productCards ?? [])
    }, [])
    
    const handleSort = (a, b) => {
      if (sortBy === 'fallande') {
        if (a.product.productName > b.product.productName) {
          return 1;
        }
        if (a.product.productName < b.product.productName) {
          return -1;
        }
        return 0
      }
      
      if (sortBy === 'stigande') {
        if (a.product.productName > b.product.productName) {
          return -1;
        }
        if (a.product.productName < b.product.productName) {
          return 1;
        }
        return 0
      }

      return 0;
    }

    const handleUpdate = (_, updatedFilters) => {
      const filteredData = args.productCategoryListing.productCards?.filter(x =>
        updatedFilters?.find(y =>
          y.selectedOptions.find(z =>
            {
              return z.name?.toLowerCase() === x?.product?.country?.toLowerCase() ||
            z.name?.toLowerCase() === x.product?.producer}
          )
        ))
        // TODO: check both filterData and selectedFilters. Should display zero results if there is a selected filter but no matches.
      setDataToDisplay(filteredData.length ? filteredData : args.productCategoryListing.productCards);
    };

    const handleSorting = (sortItem) => {
      setSortBy(sortItem.value);
    }

    const productCardList = useMemo(() => <ProductCardList {...args.productCategoryListing} productCards={dataToDisplay.sort(handleSort)} addToCart={handleAddToCart} />, [dataToDisplay, sortBy])

    return (
      <>
        {args.header && args.header()}
        <ContentWrapper>
          <FlexContainer flexDirection='column'>
            <Breadcrumbs {...args.breadcrumbs} />
            <FlexContainer>
              <Button 
                type='button'
                surface='x'
                size='xx-small'
                iconRight={{ icon: filterOpen ? 'icon-chevron-left' : 'icon-chevron-right' }}
                onClick={() => setFilterOpen(true)}
              >Filtrera</Button>
              <SelectList
                placeholder='Sortera'
                options={[{
                  name: 'Fallande',
                  value: 'fallande'
                },
                {
                  name: 'Stigande',
                  value: 'stigande'
                }]}
                onClickItem={handleSorting}
              />
            </FlexContainer>
            <DynamicFilter
              {...Dynamic_Filter_Default.args}
              onUpdate={handleUpdate}
              isOpen={filterOpen}
              preSelected={[]}
              onClose={() => setFilterOpen(false)}
            />
            {productCardList}
          </FlexContainer>
        </ContentWrapper>
        <Footer {...args.footer} />
      </>
    )
  }
};

export const ProductCategoryListingPageStory = {
  ...ProductCategoryListingPageStoryTemplate,
  args: {
    header: Standard_Header.render,
    breadcrumbs: BreadcrumbsStoryWithoutBackground.args,
    productCategoryListing: ProductCardListStory.args,
    footer: FooterStory.args
  }
}
