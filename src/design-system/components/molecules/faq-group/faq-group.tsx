import React from 'react'
import styles from './faq-group.module.css'
import { FAQList, FAQListProps } from '../faq-list/faq-list'

type FAQGroupProps = {
  title: string
  imgSrc?: string
  linkComponent?: any
  viewMoreLink?: string
  viewMoreLabel?: string
} & Pick<FAQListProps, 'items'>

export function FAQGroup({ title, imgSrc, items, linkComponent: Link, viewMoreLink, viewMoreLabel }: FAQGroupProps) {
  if (!title) return null

  return (
    <li key={title} className={styles.faqGroup}>
      <div className={styles.titleContainer}>
        {imgSrc && <img className={styles.image} src={imgSrc} alt={`Icon for ${title}`} width={100} />}
        <h3 className={`h4 ${styles.title}`}>{title}</h3>
      </div>
      <article className={styles.listContainer}>
        <FAQList items={items} />
        {viewMoreLink && viewMoreLabel && (
          <Link to={viewMoreLink} aria-label={`Go to ${title}`}>
            {viewMoreLabel}
          </Link>
        )}
      </article>
    </li>
  )
}
