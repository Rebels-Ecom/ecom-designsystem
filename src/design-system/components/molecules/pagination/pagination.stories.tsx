import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Design System/Molecules/Pagination',
  component: Pagination,
}

export default meta
type Story = StoryObj<typeof Pagination>

const PaginationStoryTemplate: Story = {
  render: ({ ...args }) => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <div>
        <Pagination
          currentPage={currentPage}
          itemsCount={100}
          onNextClick={() => {
            if (currentPage < Math.ceil(100 / 25)) {
              setCurrentPage(currentPage + 1);
            }
          }}
          onPreviousClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
          onPageChange={(page) => setCurrentPage(page)}
          pageSize={25}
          scrollToTopEl={<></>}
        />
      </div>
    )
  },
}

export const PaginationStory = {
  ...PaginationStoryTemplate,
  args: {},
}
