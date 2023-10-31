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

  const renderDesktopItem = (card: IBlogCard) => {
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
      
      <Below breakpoint='md'>
        {(matches: any) => matches && (
          <SwipeList>
            {blogCards.map((card: IBlogCard, i: number) => blogCards.length > 1 ? (
              <SwipeListItem key={i}>
                <BlogCard
                  {...card}
                  fullWidth={blogCards.length === 1}
                  maxChar={blogCards.length === 3 ? card.maxChar ?? 200 : undefined}
                />
              </SwipeListItem>
            ) : (
              <BlogCard
                key={i}
                {...card}
                fullWidth={blogCards.length === 1}
                maxChar={blogCards.length === 3 ? card.maxChar ?? 200 : undefined}
              />
            ))}
          </SwipeList>
        )}
      </Below>
      <Above breakpoint='md'>
        {(matches) => matches && (
          <ContentWrapper>
          {asCarousel ? (
            <Carousel maxPerPage={blogCards.length > 3 ? 4 : 3} className={styles.list}>
              {blogCards.map((card: IBlogCard, i: number) => (
                <CarouselItem>
                  {renderDesktopItem(card)}
                </CarouselItem>
              ))}
            </Carousel>
          ) : (
            <ul className={cx(styles.list, styles.static)}>
              {blogCards.map((card: IBlogCard, i: number) => (
                <Fragment key={i}>
                  {renderDesktopItem(card)}
                </Fragment>
              ))}
            </ul>
          )}
          </ContentWrapper>
        )}
      </Above>
    </div>
  )
}

export { BlogCardList }
