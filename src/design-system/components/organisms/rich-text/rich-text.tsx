import React from 'react'
import styles from './rich-text.module.css'
import { MaxWidth } from '../../layouts/max-width/max-width'

export interface IRichText {
    richTextContent: any
}

function RichText({richTextContent}:IRichText) {
  return (
    <div className={styles.richTextOuterWrapper}>
      <div className={styles.richText} dangerouslySetInnerHTML={{ __html: richTextContent }}></div>
    </div>
  )
}

export { RichText }