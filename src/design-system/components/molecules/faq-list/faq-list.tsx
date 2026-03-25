import React, { useState } from 'react'
import { ClickableListItem } from '../clickable-list-item/clickable-list-item'
import { ExpandableWrapper } from '../../atoms'
import { RichTextProps } from '../../../../types/other'
import cx from 'classnames'
import styles from './faq-list.module.css'

const parseHighlight = (text: string): React.ReactNode => {
  const parts = text.split(/(==.+?==)/)
  if (parts.length === 1) return text
  return parts.map((part, i) =>
    part.startsWith('==') && part.endsWith('==')
      ? <mark key={i}>{part.slice(2, -2)}</mark>
      : part
  )
}

export type FAQListProps = {
  items: { Question: string; Answer?: React.FC<RichTextProps> }[]
  bold?: boolean
  limit?: number
  /**
   * @default false
   * Will generate a card design for the ClickableListItem
   */
  isCard?: boolean
}

export const FAQList = ({ items, bold, limit, isCard }: FAQListProps) => {
  const [openFaqs, setOpenFaqs] = useState<string[]>([])

  if (!items?.length) return null

  const displayedItems = limit ? items.slice(0, limit) : items

  const toggleFaq = (question: string) => {
    setOpenFaqs((prev) => (prev.includes(question) ? prev.filter((q) => q !== question) : [...prev, question]))
  }

  return (
    <ul className={cx(styles.faqList, { [styles.card]: isCard })} role="region" aria-label="Frequently Asked Questions">
      {displayedItems.map((item, index) => {
        if (!item?.Question) return null
        const questionText = item.Question.replace(/==/g, '')
        const isOpen = openFaqs.includes(questionText)
        const slug = questionText.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
        const contentId = `faq-panel-${slug}`
        const buttonId = `faq-button-${slug}`

        return (
          <li key={`${contentId}-${index}`} className={cx(styles.faqListItem, { [styles.card]: isCard })}>
            <ClickableListItem
              onClick={() => toggleFaq(questionText)}
              icon={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'}
              label={parseHighlight(item.Question)}
              weight={bold ? 'bold' : 'normal'}
              aria-expanded={isOpen}
              aria-controls={contentId}
              id={buttonId}
            />
            <ExpandableWrapper open={isOpen}>
              <div
                id={contentId}
                role="region"
                aria-labelledby={buttonId}
                className={cx(styles.hiddenContent, { [styles.card]: isCard })}
              >
                {item.Answer || '-'}
              </div>
            </ExpandableWrapper>
          </li>
        )
      })}
    </ul>
  )
}
