import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { ProductDescription } from './product-description'
import { ILoadingBar } from '../../atoms/loading-bar/loading-bar';
import { dummyProductBeerDetails } from '../product-details/dummy-product-details';
import { IProductDetail } from '../product-details/product-details';

const meta: Meta<typeof ProductDescription> = {
    title: 'Design System/Organisms/ProductDescription',
    component: ProductDescription
}

export default meta;
type Story = StoryObj<typeof ProductDescription>;

const ProductDescriptionStoryTemplate: Story = {   
    render: ({ ...args }) => {
        return(
            <ProductDescription {...args}/>
        )
    }
}

function getProductTags(tags:Array<any>){
    return tags.map((tag)=>{
        return{
            text: tag.Text,
            shape: tag.Shape ? tag.Shape : 'pill',
            color: tag.Class
        }
    });
}

function getSpecifications(specs:Array<any>){
    return specs.map((spec)=>{
        return{
            name: spec.Item1,
            value: spec.Item2
        }
    });
}

function getLoadingBars(loadingBars:Array<any>, category: string) : Array<ILoadingBar>{
    const barColor= category ==='Vin' ? 'purple' : 'orange'
    return loadingBars.map((bar)=>{
        return{
            name: bar.Key,
            value: bar.Value,
            color: barColor
        }
    });
}

function getProductDetails( productDetailsData: any) : IProductDetail {
    return { 
        visibleSpecs: getSpecifications(productDetailsData.VisibleInfo.Specifications),
        visibleDescription: productDetailsData.VisibleInfo.FullDescription,
        invisibleSpecs: getSpecifications(productDetailsData.InvisibleInfo.Specifications),
        invisibleDescription: productDetailsData.InvisibleInfo.FullDescription,
        tags: getProductTags(productDetailsData.Tags),
        loaderValues: getLoadingBars(productDetailsData.ClockValues, productDetailsData.CategoryString)
    }
}

const productDetailsArgs = getProductDetails(dummyProductBeerDetails)

const items = [
    {
        id: 'item1',
        btnLabel: 'Beskrivning',
        btnIcon: 'icon-info',
        descriptionContent: productDetailsArgs
    },
    {
        id: 'item2',
        btnLabel: 'Ladda ner produktbeskrivning',
        btnIcon: 'icon-download',
        onClick: ()=>{console.log('DOWNLOAD PRODUKTBLAD')},
    },
    {
        id: 'item3',
        btnLabel: 'Spela video',
        btnIcon: 'icon-play',
        descriptionContent: 'Some video might be played here one day'
    }
]

export const ProductDescriptionStory = {
    ...ProductDescriptionStoryTemplate,
    args: {
        productDescriptionItems: items
    }
}