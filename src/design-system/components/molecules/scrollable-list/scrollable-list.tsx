import React, { useEffect, useRef, useState } from 'react'
import styles from './scrollable-list.module.css'
import cx from 'classnames'
import { Loader } from '../../atoms'

export interface IScrollableList {
  children: Array<React.ReactNode>
  loading?: boolean
  visibleItemsNumber?: number
  hasFade?: boolean
  className?: string
}

const ScrollableList = ({ children, loading, visibleItemsNumber, hasFade, className }: IScrollableList) => {
  const [height, setHeight] = useState(0)
  const [listHasFade, setListFade] = useState(hasFade)
  const ref = useRef<HTMLLIElement | null>(null)

  function handleScroll(e: React.UIEvent<HTMLUListElement, UIEvent>) {
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.clientHeight <= e.currentTarget.scrollTop + 50
    setListFade(!bottom)
  }

  function getItemsNumber(itemsNumber: number, selectedItemsNumber: number) {
    return itemsNumber < selectedItemsNumber ? itemsNumber : selectedItemsNumber
  }

  useEffect(() => {
    ref?.current?.clientHeight && setHeight(ref.current.clientHeight)
  }, [])

  if (!Array.isArray(children) || !children.length) return null

  return (
    <div className={cx(styles.cartProductList, className && className)}>
      {loading ? (
        <Loader visible={loading} size="sm" position="relative" color="orange" />
      ) : (
        <ul
          onScroll={hasFade ? handleScroll : undefined}
          className={cx(styles.list, listHasFade && visibleItemsNumber ? styles.listFade : '')}
          style={visibleItemsNumber ? { height: height * getItemsNumber(children.length, visibleItemsNumber) } : { height: height * children.length }}
        >
          {children?.map((item: React.ReactNode) => (
            <li key={Math.random()} ref={ref} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { ScrollableList }
