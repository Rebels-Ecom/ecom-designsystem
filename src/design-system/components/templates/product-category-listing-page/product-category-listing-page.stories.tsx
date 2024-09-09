import React, { useEffect, useMemo, useState } from 'react'
import type { Meta } from '@storybook/react'
import { Standard_Header } from '../../organisms/header/header.stories'
import { BreadcrumbsStoryWithoutBackground } from '../../organisms/breadcrumbs/breadcrumbs.stories'
import { FooterStory } from '../../organisms/footer/footer.stories'
import { ContentWrapper, FlexContainer } from '../../layouts'
import { Breadcrumbs, Footer } from '../../organisms'
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
    const [sortBy, setSortBy] = useState<string | undefined>();
    const [dataToDisplay, setDataToDisplay] = useState([]);
    function handleAddToCart(product:any) {
      alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    useEffect(() => {
      setDataToDisplay(args?.productCategoryListing?.productCards ?? [])
    }, [])
    
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


    return (
      <>
        {args.header && args.header()}
        <ContentWrapper>
          <FlexContainer flexDirection='column'>
            <Breadcrumbs {...args.breadcrumbs} />
            <FlexContainer justifyContent='space-between' stretch>
              <DynamicFilter
                title='Filter'
                {...Dynamic_Filter_Default.args}
                onUpdate={handleUpdate}
                preSelected={[]}
              />
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
    footer: FooterStory.args
  }
}
