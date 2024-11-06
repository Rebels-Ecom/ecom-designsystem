import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MiniProductToast } from './mini-product-toast'
import { Button } from '../../atoms';
import { IProductCard } from '../product-card/product-card';
import { Product_Card_Horizontal } from '../product-card-horizontal/product-card-horizontal.stories';

const meta: Meta<typeof MiniProductToast> = {
    title: 'Design System/Molecules/MiniProductToast',
    component: MiniProductToast
};

export default meta;
type Story = StoryObj<typeof MiniProductToast>;

const p: IProductCard = {
  ...Product_Card_Horizontal.args,
  product: {
    ...Product_Card_Horizontal.args.product,
    tags: [],
    productVariantList: [],
  },
  showFavoriteIcon: false,
  showAddToPurchaseListIcon: false,
  hidePrice: true,
  hideCartButton: true,
  hideRemoveButton: true,
};

const MiniProductToastStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [content, setContent] = useState<IProductCard[]>([]);
    
    return (
      <div style={{ position: 'relative' }}>
        <Button
          type='button'
          surface='primary'
          children='Toggle'
          onClick={() => {
            if (content.length > 0) {
              setContent([]);
              return;
            }
            setContent([p])
          }}
        />
        <Button
          type='button'
          surface='primary'
          children='Add'
          onClick={() => {
            setContent((prevContent) => prevContent?.concat([{ ...p, product: {...p.product, productName: Math.ceil(Math.random() * 100).toString() }}]))
          }}
        />
        <MiniProductToast {...args} open={!!content.length} cartProducts={content} />
      </div>
    )
  }
};

export const MiniProductToastStory = {
    ...MiniProductToastStoryTemplate,
    args: {
      loading: false,
      notification: {
        quantity: 1,
        onClick: () => {
          alert('clicked notification')
        }
      }
    }
}
