import { ITag, Tag } from '../../atoms/tag/tag'
import styles from './tags-list.module.css'

function TagsList({ tagsList = [] }: { tagsList: Array<ITag> }) {
  return (
    <ul className={styles.tagsList}>
      {Array.isArray(tagsList) && tagsList.length > 0
        ? tagsList.map((tag, index) => (
            <li key={index}>
              <Tag {...tag} />
            </li>
          ))
        : null}
    </ul>
  )
}

export { TagsList }
