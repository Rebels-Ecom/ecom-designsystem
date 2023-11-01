import { Fragment, useRef, useState} from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { BlogCard, IBlogCard } from '../../molecules/blog-card/blog-card'
import { Button } from '../../atoms'
import styles from './blog-card-list.module.css'
import { SwipeList, SwipeListItem } from '../swipe-list/swipe-list'
import { Above, Below, ContentWrapper } from '../../layouts'
import { Carousel, CarouselItem } from '../carousel/carousel'

export interface IBlogCardList {
  title?: string
  blogCards: Array<IBlogCard>
}

function getColumnsNumber(columnsNumber: number) {
  return columnsNumber === 1 ? styles.fullWidth : (columnsNumber === 3 ? styles.maxColumnsThree : styles.maxColumnsFour);
}

const BlogCardList = ({ title, blogCards }: IBlogCardList) => {
  if (!Array.isArray(blogCards) || !blogCards.length) {
    return null;
  }

  const asCarousel = blogCards?.length > 3;

  const renderItem = (card: IBlogCard) => {
    return (
      <motion.li
        className={cx(styles.listItem, getColumnsNumber(blogCards.length))}
        initial={{ y: '-10%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <BlogCard
          {...card}
          fullWidth={blogCards.length === 1}
          maxChar={blogCards.length === 3 ? card.maxChar ?? 200 : undefined}
        />
      </motion.li>
    )
  }

  return (
    <div className={styles.blogCardList}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {
        <ContentWrapper>
          {asCarousel ? (
            <Carousel
              breakpoints={{
                lg: {
                  perPage: 4,
                },
                md: {
                  perPage: 2,
                },
              }}
            >
              {blogCards.map((card: IBlogCard, i: number) => (
                <CarouselItem>
                  {renderItem(card)}
                </CarouselItem>
              ))}
            </Carousel>
          ) : (
            <>
              <Below breakpoint='sm'>
                {(matches) => matches && (
                  <Carousel>
                    {blogCards.map((card: IBlogCard, i: number) => (
                      <CarouselItem>
                        {renderItem(card)}
                      </CarouselItem>
                    ))}
                  </Carousel>
                )}
              </Below>
              <Above breakpoint='sm'>
                {(matches) => matches && (
                  <ul className={styles.list}>
                    {blogCards.map((card: IBlogCard, i: number) => (
                      <Fragment key={i}>
                        {renderItem(card)}
                      </Fragment>
                    ))}
                  </ul>
                )}
              </Above>
            </>
          )}
        </ContentWrapper>
      }
    </div>
  )
}

export { BlogCardList }
