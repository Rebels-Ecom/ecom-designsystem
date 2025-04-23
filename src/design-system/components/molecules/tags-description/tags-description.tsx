import cx from 'classnames'
import { TTagColor } from '../../atoms/tag/tag'
import styles from './tags-description.module.css'

type TTagDescription = {
  color: TTagColor
  text: string
  id: string
}

type TTagsDescription = {
  tags: Array<TTagDescription>
}
const TagsDescription = ({ tags = [] }: TTagsDescription) => {
  if (tags.length === 0) {
    return null
  }

  return (
    <div className={styles.tagsDescription}>
      {tags.map(({ color = 'green', text = '', id = '' }) => (
        <div key={id} className={styles.tagDescription}>
          <div key={`${id}-${color}`} className={cx(styles.color, styles[color])} />
          <p className={`${styles.text} body`}>{text}</p>
        </div>
      ))}
    </div>
  )
}

export { TagsDescription }
