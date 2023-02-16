import React, { useRef, useEffect } from 'react'
import { MoviePoster } from '../../atoms/movie-poster/movie-poster'
import { IPicture } from '../../atoms/picture/picture'
import { TLink, isExternalLink, isInternalLink } from '../../../../helpers/link-helper'
import useScrollLeft from '../../../hooks/useScrollLeft'
import { getItemSessionStorage, setItemSessionStorage } from '../../../../helpers/session-storage-helper'
import styles from './movie-poster-list.module.css'

export interface IMoviePosterList {
  heading?: string
  preamble?: React.ReactNode | string
  list: Array<IMoviePosterListItem>
  linkComponent?: any
  listSessionId?: string
}

export interface IMoviePosterListItem {
  image: IPicture
  heading?: string
  preamble?: string
  link?: TLink
}

function getInitialScrollLeft(sessionStorageId: string = ''): number {
  const scrollLeftPosition = typeof window !== 'undefined' && sessionStorageId ? getItemSessionStorage(sessionStorageId) : 0
  return scrollLeftPosition ? scrollLeftPosition : 0
}

const MoviePosterList = ({ heading, preamble, list = [], linkComponent: Link, listSessionId }: IMoviePosterList) => {
  const listRef = useRef<HTMLUListElement>(null)
  const scrollLeft = useScrollLeft(listRef, getInitialScrollLeft(listSessionId))

  useEffect(() => {
    if (listRef?.current) {
      listRef.current.scrollLeft = scrollLeft ? scrollLeft : 0
    }
  }, [])

  useEffect(() => {
    if (listSessionId) {
      setItemSessionStorage(listSessionId, scrollLeft)
    }
  }, [scrollLeft])

  function renderMoviePoster(li: IMoviePosterListItem) {
    if (li?.link && isExternalLink(li.link)) {
      return (
        <a href={li.link.href} target={li.link.target} title={li.link.title} className={styles.link}>
          <MoviePoster {...li.image} />
        </a>
      )
    } else if (li?.link && isInternalLink(li.link, Link)) {
      return (
        <Link to={li.link.href} target={li.link.target} title={li.link.title} className={styles.link}>
          <MoviePoster {...li.image} />
        </Link>
      )
    }

    return <MoviePoster {...li.image} />
  }

  return (
    <section>
      {heading && <h1 className={`headingS ${styles.heading} ${preamble ? styles.noMarginBottom : ''}`}>{heading}</h1>}
      {preamble && React.isValidElement(preamble) ? <div className={styles.preambleReactNode}>{preamble}</div> : <p className={styles.preamble}>{preamble}</p>}
      <ul ref={listRef} className={styles.list}>
        {list.map((li: IMoviePosterListItem, i: number) => (
          <li key={i} className={styles.listItem}>
            {renderMoviePoster(li)}
            {li.heading && <p className={`body bold ${styles.listItemHeading}`}>{li.heading}</p>}
            {li.preamble && <p className={`bodyS ${styles.listItemPreamble}`}>{li.preamble}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export { MoviePosterList }
