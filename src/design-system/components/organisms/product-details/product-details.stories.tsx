import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IProductDetail, ProductDetails } from './product-details'
import { IProduct } from '../../../../types/product'
import { dummyBeerProduct, dummyWineProduct, dummyWineProductNoVariants, dummyWineProduct_VariantDefaultImg } from './dummy-product'
import { getProductPicture } from '../../../../helpers/picture-helper'
import { ButtonProductCardStory, ChangePackagingButtonStory } from '../../atoms/button/button.stories'
import { convertNumToStr } from '../../../../helpers/format-helper'
import { ILoadingBar } from '../../atoms/loading-bar/loading-bar'
import { dummyProductBeerDetails, dummyProductWineDetails } from './dummy-product-details'
import { ContentWrapper } from '../../layouts'

const meta: Meta<typeof ProductDetails> = {
  title: 'Design System/Organisms/ProductDetails',
  component: ProductDetails,
}

export default meta
type Story = StoryObj<typeof ProductDetails>

const ProductDetailsStoryTemplate: Story = {
  render: ({ ...args }) => {
    function handleAddToCart(product) {
      alert(`Adding to cart - ${product.productName} - ${product.packaging}. Quantity: ${product.quantity}, Total: ${product.totalPrice}`)
    }

    return (
      <ContentWrapper>
        <ProductDetails {...args} addToCart={handleAddToCart} />
      </ContentWrapper>
    )
  },
}

function getProductTags(tags: Array<any>) {
  return tags.map((tag) => {
    return {
      text: tag.Text,
      shape: tag.Shape ? tag.Shape : 'pill',
      color: tag.Class,
    }
  })
}

function getSpecifications(specs: Array<any>) {
  return specs.map((spec) => {
    return {
      name: spec.Item1,
      value: spec.Item2,
    }
  })
}

function getLoadingBars(loadingBars: Array<any>, category: string): Array<ILoadingBar> {
  const barColor = category === 'Vin' ? 'purple' : 'orange'
  return loadingBars.map((bar) => {
    return {
      name: bar.Key,
      value: bar.Value,
      color: barColor,
    }
  })
}

function getProductDetails(productDetailsData: any): IProductDetail {
  return {
    visibleSpecs: getSpecifications(productDetailsData.VisibleInfo.Specifications),
    visibleDescription: productDetailsData.VisibleInfo.FullDescription,
    invisibleSpecs: getSpecifications(productDetailsData.InvisibleInfo.Specifications),
    invisibleDescription: productDetailsData.InvisibleInfo.FullDescription,
    tags: getProductTags(productDetailsData.Tags),
    loaderValues: getLoadingBars(productDetailsData.ClockValues, productDetailsData.CategoryString),
  }
}

function getVariantsList(productName: string, variantsList: any) {
  const firstVariantId = variantsList[0].VariantId
  return variantsList.map((variant) => {
    return {
      productName: productName,
      variantName: variant.Name,
      variantId: variant.VariantId,
      country: Array.isArray(variant.ShortTexts) && variant.ShortTexts.length ? variant.ShortTexts[0] : '',
      listPricePerUnitString: variant.ListPricePerUnitString,
      price: variant.ListPricePerUnit,
      salesUnit: variant.SalesUnit,
      itemNumberPerSalesUnit: variant.UnitsPerBaseUnit,
      imageUrl: variant.PrimaryImageUrl,
      checked: variant.VariantId === firstVariantId,
      onChange: () => {},
    }
  })
}

function getProduct(productData: any): IProduct {
  const product = productData.Variants[0]
  return {
    productId: product.VariantId,
    productUrl: productData.ProductUrl,
    productName: productData.DisplayName,
    productImageUrl: product.PrimaryImageUrl,
    country: Array.isArray(product.ShortTexts) && product.ShortTexts.length ? product.ShortTexts[0] : '',
    packaging: product.VariantFullName,
    priceStr: product.ListPricePerUnitString,
    price: product.ListPricePerUnit,
    salesUnit: product.SalesUnit,
    itemNumberPerSalesUnit: product.UnitsPerBaseUnit,
    quantity: '1',
    totalPrice: convertNumToStr(product.ListPricePerUnit * product.UnitsPerBaseUnit),
    productVariantList: getVariantsList(productData.DisplayName, productData.Variants),
  }
}

const productArgs = getProduct(dummyBeerProduct)
const productArgsWine = getProduct(dummyWineProduct)
const productArgsWine_VariantDefaultImg = getProduct(dummyWineProduct_VariantDefaultImg)
const productArgsWineNoVariants = getProduct(dummyWineProductNoVariants)
const productDetailsArgs = getProductDetails(dummyProductBeerDetails)
const productDetailsArgsWine = getProductDetails(dummyProductWineDetails)

export const ProductDetailsStory = {
  ...ProductDetailsStoryTemplate,
  args: {
    ...productArgs,
    productDetail: productDetailsArgs,
    changePackagingButton: ChangePackagingButtonStory.args,
    addToCart: ButtonProductCardStory.args,
    campaign: {
      title: 'Campaign',
      description: 'Campaign description',
      subDescription: 'Campaign sub description',
    },
    addToCartBtnLabel: 'Lägg i varukorg',
  },
}

export const ProductDetailsStory_Wine = {
  ...ProductDetailsStoryTemplate,
  args: {
    ...productArgsWine,
    productDetail: productDetailsArgsWine,
    changePackagingButton: ChangePackagingButtonStory.args,
    addToCart: ButtonProductCardStory.args,
    addToCartBtnLabel: 'Lägg i varukorg',
  },
}

export const ProductDetailsStory_Wine_NoVariants = {
  ...ProductDetailsStoryTemplate,
  args: {
    ...productArgsWineNoVariants,
    productDetail: productDetailsArgsWine,
    changePackagingButton: ChangePackagingButtonStory.args,
    addToCart: ButtonProductCardStory.args,
    addToCartBtnLabel: 'Lägg i varukorg',
  },
}

export const ProductDetailsStory_Wine_VariantFallbackImg = {
  ...ProductDetailsStoryTemplate,
  args: {
    ...productArgsWine_VariantDefaultImg,
    productDetail: productDetailsArgsWine,
    changePackagingButton: ChangePackagingButtonStory.args,
    addToCart: ButtonProductCardStory.args,
    addToCartBtnLabel: 'Lägg i varukorg',
  },
}
