import { PropsWithChildren, ReactNode } from 'react'
import styles from './swipe-list.module.css'

type TSwipeList = {
  items: Array<ReactNode>
}

export const SwipeListItem = (props: PropsWithChildren<{}>) => (
  <div className={styles.swipeListItem}>{props.children}</div>
)

/**
 * @deprecated Should use Carousel instead
 */
const SwipeList = (props: PropsWithChildren<{}>) => {
  return (
    <div className={styles.swipeList}>
      {props.children}
    </div>
  )
}

export {
  SwipeList
}
