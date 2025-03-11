import cx from 'classnames'
import styles from './placeholder.module.css'

export type TPlaceholderType = 'image' | 'tags' | 'heading' | 'p_long' | 'p_short'
export interface IPlaceholder {
  type: TPlaceholderType
  noMargin?: boolean
  className?: string
}

function Placeholder({ type = 'heading', noMargin, className = '' }: IPlaceholder) {
  function getPlaceholderType(type: TPlaceholderType) {
    switch (type) {
      case 'image':
        return 'placeholderImage'
      case 'tags':
        return 'placeholderTags'
      case 'p_long':
        return 'placeholderParagraphLong'
      case 'p_short':
        return 'placeholderParagraphShort'
      case 'heading':
      default:
        return 'placeholderHeading'
    }
  }

  return (
    <div
      className={cx(styles.placeholder, styles[getPlaceholderType(type)], { [styles.noMargin]: noMargin }, className)}
    />
  )
}

export { Placeholder }
