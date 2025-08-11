import React, { useState } from 'react'
import { ClickableListItem } from '../clickable-list-item/clickable-list-item'
import { ExpandableWrapper } from '../../atoms'
import { RichTextProps } from '../../../../types/other'
import styles from './faq-list.module.css'

export type FAQListProps = {
  items: { Question: string; Answer?: React.FC<RichTextProps> }[]
  bold?: boolean
  limit?: number
}

export const FAQList = ({ items, bold, limit }: FAQListProps) => {
  const [openFaqs, setOpenFaqs] = useState<string[]>([])

  if (!items?.length) return null

  const displayedItems = limit ? items.slice(0, limit) : items

  const toggleFaq = (question: string) => {
    setOpenFaqs((prev) => (prev.includes(question) ? prev.filter((q) => q !== question) : [...prev, question]))
  }

  return (
    <ul className={styles.faqList} role="region" aria-label="Frequently Asked Questions">
      {displayedItems.map((item, index) => {
        const isOpen = openFaqs.includes(item.Question)
        const contentId = `faq-panel-${index}`
        const buttonId = `faq-button-${index}`

        return (
          <li key={item.Question} className={styles.faqListItem}>
            <ClickableListItem
              onClick={() => toggleFaq(item.Question)}
              icon={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'}
              label={item.Question}
              weight={bold ? 'bold' : 'normal'}
              aria-expanded={isOpen}
              aria-controls={contentId}
              id={buttonId}
            />
            <ExpandableWrapper open={isOpen}>
              <div id={contentId} role="region" aria-labelledby={buttonId} className={styles.hiddenContent}>
                {item.Answer || '-'}
              </div>
            </ExpandableWrapper>
          </li>
        )
      })}
    </ul>
  )
}
