import cx from 'classnames'
import { BlogCard, IBlogCard } from '../../molecules/blog-card/blog-card'
import styles from './blog-card-list.module.css'
import React, {useState} from 'react'

export interface IBlogCardList {
  title?: string
  blogCards: Array<IBlogCard>
}

function getColumnsNumber(columnsNumber: number) {
  return columnsNumber === 1 ? styles.fullWidth : (columnsNumber === 3 ? styles.maxColumnsThree : styles.maxColumnsFour);
}

const BlogCardList = ({ title, blogCards }: IBlogCardList) => {
  if(!Array.isArray(blogCards) || !blogCards.length)
    return null;

  const blogCardsList = blogCards.slice(0,4);

  return (
    <div className={styles.blogCardList}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <ul className={styles.list}>
        {blogCardsList.map((card: IBlogCard, i: number) => (
          <li key={i} className={cx(styles.listItem, getColumnsNumber(blogCardsList.length))}>
            <BlogCard {...card} fullWidth={blogCardsList.length===1}/>
          </li>
        ))}
      </ul>     
    </div>
  )
}

export { BlogCardList }
