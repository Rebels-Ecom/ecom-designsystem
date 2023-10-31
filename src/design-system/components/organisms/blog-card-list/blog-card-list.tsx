import { useRef, useState} from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { BlogCard, IBlogCard } from '../../molecules/blog-card/blog-card'
import { Button } from '../../atoms'
import styles from './blog-card-list.module.css'
import { SwipeList, SwipeListItem } from '../swipe-list/swipe-list'
import { Above, Below, ContentWrapper } from '../../layouts'

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
  const [list, setList] = useState<Array<IBlogCard>>(blogCards.slice(0, 4))

  const buttonRef = useRef<HTMLButtonElement>(null)

  const scrollToButton = () => {
    if (!buttonRef?.current) {
      return;
    }

    buttonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  const handleShowMore = () => {
    if (list.length === blogCards.length) {
      setList(blogCards.slice(0,4))
    } else {
      setList(blogCards.slice(0, list.length + 4))
    }
    
    setTimeout(() => scrollToButton(), 100)
  }

  return (
    <div className={styles.blogCardList}>
      {title && <h3 className={styles.title}>{title}</h3>}
      
      <Below breakpoint='md'>
        {(matches: any) => matches && (
          <SwipeList>
            {list.map((card: IBlogCard, i: number) => list.length > 1 ? (
              <SwipeListItem key={i}>
                  <BlogCard
                    {...card}
                    fullWidth={list.length === 1}
                    maxChar={list.length === 3 ? card.maxChar ?? 200 : undefined}
                  />
                </SwipeListItem>
              ) : (
                <BlogCard
                  key={i}
                  {...card}
                  fullWidth={list.length === 1}
                  maxChar={list.length === 3 ? card.maxChar ?? 200 : undefined}
                />
              ))}
          </SwipeList>
        )}
      </Below>
      <Above breakpoint='md'>
        {(matches) => matches && (
          <ContentWrapper>
            <ul className={styles.list}>
              {list.map((card: IBlogCard, i: number) => (
                <motion.li
                  key={i}
                  className={cx(styles.listItem, getColumnsNumber(list.length))}
                  initial={{ y: '-10%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <BlogCard
                    {...card}
                    fullWidth={list.length === 1}
                    maxChar={list.length === 3 ? card.maxChar ?? 200 : undefined}
                  />
                </motion.li>
              ))}
            </ul>

            {blogCards.length > 4 && (
              <Button
              ref={buttonRef}
              className={styles.showMoreButton}
              type="button"
              surface='primary'
              onClick={handleShowMore}
              >
                {list.length === blogCards.length ? "Visa färre" : "Visa fler"}
              </Button>
            )}
          </ContentWrapper>
        )}
      </Above>
    </div>
  )
}

export { BlogCardList }
