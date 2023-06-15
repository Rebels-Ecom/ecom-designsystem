import React, { useEffect, useRef, useState } from 'react'
import styles from './scrollable-list.module.css'
import cx from 'classnames'

export interface IScrollableList {
  children: Array<React.ReactNode>
  visibleItemsNumber?: number
  hasFade?: boolean
  className?: string
}

const ScrollableList = ({ children, visibleItemsNumber = 1, hasFade, className }: IScrollableList) => {

  const [height, setHeight] = useState(0)
  const [listHasFade, setListFade] = useState(hasFade)
  const ref = useRef<HTMLLIElement | null>(null)

  function handleScroll(e: React.UIEvent<HTMLUListElement, UIEvent>) {
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.clientHeight <= e.currentTarget.scrollTop + 50
    setListFade(!bottom)
  }

  useEffect(() => {
    ref?.current?.clientHeight && setHeight(ref.current.clientHeight)
  },[])

  if(!Array.isArray(children) || !children.length)
    return null

  return (
    <div className={cx(styles.cartProductList, className && className)}>
      <ul onScroll={hasFade ? handleScroll : undefined} className={cx(styles.list, listHasFade ? styles.listFade : '')} style={{height: (height * visibleItemsNumber)}}>
        { children?.map( (item: React.ReactNode) => <li key={Math.random()} ref={ref}>{item}</li>) }
      </ul>
    </div>
  )
}

export {ScrollableList}


