import { Fragment } from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { BlogCard, IBlogCard } from '../../molecules/blog-card/blog-card'
import styles from './blog-card-list.module.css'
import { Above, Below, ContentWrapper, FlexContainer } from '../../layouts'
import { Carousel, CarouselItem } from '../carousel/carousel'
import { FlexItem } from '../../molecules/flex-item/flex-item'

/** @deprecated Use ArticleList instead */
export interface IBlogCardList {
  blogCards: Array<IBlogCard>;
  title?: string;
  swipe?: boolean;
  /**
   * Applies a specific design for three card layouts only
   */
  oddHeights?: boolean;
  /**
   * If true, flex items will fill available width
   */
  stretchItems?: boolean;
}

const BlogCardList = ({ title, blogCards, swipe, oddHeights, stretchItems }: IBlogCardList) => {
  if (!Array.isArray(blogCards) || !blogCards.length) {
    return null;
  }

  const asCarousel = blogCards?.length > 3;

  const renderSpecialItem = (card: IBlogCard, even: boolean) => {
    return (
      <motion.div
        className={cx(styles.listItem, styles.maxColumnsThree, even ? styles.even : styles.odd)}
        initial={{ y: '-10%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <BlogCard
          {...card}
          fullWidth={card.fullWidth}
          maxChar={160}
        />
      </motion.div>
    )
  }

  const renderFlexItem = (card: IBlogCard) => {
    const flexValues = stretchItems ? '1 1' : '0 1';
    return (
      <FlexItem
        flex={card.fullWidth ?
          { lg: '1' } :
          {
            sm: `${flexValues} 100%`,
            md: `${flexValues} calc(33% - 1rem)`,
            lg: `${flexValues} calc(25% - 1rem)`
          }
        }
      >
        <BlogCard
          {...card}
          fullWidth={card.fullWidth}
          maxChar={card.fullWidth ? 600 : card.maxChar ?? 200}
        />
      </FlexItem>
    )
  }
  
  const renderCarouselItem = (card: IBlogCard) => {
    return (
      <BlogCard
        {...card}
        fullWidth={card.fullWidth}
        maxChar={card.maxChar ?? 200}
      />
    )
  }

  return (
    <div className={styles.blogCardList}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <Below breakpoint='md'>
        {(matches) => matches && (
          <>
            {swipe ? (
              <Carousel offsetArrows padding='2rem'>
                {blogCards.map((card: IBlogCard, i: number) => (
                  <CarouselItem key={i}>
                    {renderCarouselItem(card)}
                  </CarouselItem>
                ))}
              </Carousel>
            ) : (
              <ContentWrapper>
                <ul className={styles.list}>
                  {blogCards.map((card: IBlogCard, i: number) => (
                    <Fragment key={i}>
                      {renderFlexItem(card)}
                    </Fragment>
                  ))}
                </ul>
              </ContentWrapper>
            )}
          </>
        )}
      </Below>
      <Above breakpoint='md'>
        {(matches) => matches && (
          <ContentWrapper>
            {swipe && asCarousel ? (
              <Carousel
                offsetArrows
                breakpoints={{
                  lg: {
                    perPage: 4,
                    perMove: 4,
                  },
                  md: {
                    perPage: 2,
                    perMove: 2
                  },
                }}
              >
                {blogCards.map((card: IBlogCard, i: number) => (
                  <CarouselItem key={i}>
                    {renderCarouselItem(card)}
                  </CarouselItem>
                ))}
              </Carousel>
            ) : (
              <FlexContainer wrap className={styles.list} alignItems='stretch'>
                {blogCards.map((card: IBlogCard, i: number) => (
                  <Fragment key={i}>
                    {oddHeights ? renderSpecialItem(card, i % 2 == 0) : renderFlexItem(card)}
                  </Fragment>
                ))}
              </FlexContainer>
            )}
          </ContentWrapper>
        )}
      </Above>
    </div>
  )
}

export { BlogCardList }
