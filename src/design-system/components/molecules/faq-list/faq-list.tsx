import React, { useState } from 'react'
import { ClickableListItem } from '../clickable-list-item/clickable-list-item'
import { ExpandableWrapper } from '../../atoms'
import { RichTextProps } from '../../../../types/other'
import styles from './faq-list.module.css'

export type FAQListProps = { items: { Question: string; Answer?: React.FC<RichTextProps> }[]; bold?: boolean }

export const FAQList = ({ items, bold }: FAQListProps) => {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  if (!items?.length) return null

  return (
    <ul className={styles.faqList}>
      {items.map((item) => (
        <li key={item.Question} className={styles.faqListItem}>
          <ClickableListItem
            onClick={() => setOpenFaq(openFaq === item.Question ? null : item.Question)}
            icon={openFaq === item.Question ? 'icon-chevron-up' : 'icon-chevron-down'}
            label={item.Question}
            weight={bold ? 'bold' : 'normal'}
          />
          <ExpandableWrapper open={openFaq === item.Question}>
            <div className={styles.hiddenContent}>{item.Answer || '-'}</div>
          </ExpandableWrapper>
        </li>
      ))}
    </ul>
  )
}
