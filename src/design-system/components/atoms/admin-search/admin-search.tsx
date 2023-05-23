import React, { useCallback, useRef } from 'react'
import styles from './admin-search.module.css'
import { useCloseOnEscape, useOnClickOutside } from '../../../hooks'
import { Icon } from '../icon/icon'
import { InputText } from '../inputs/input-text/input-text'
import { Button } from '../button/button'
import cx from 'classnames'

export interface ISearchNoResult {
  name: string
  text: React.ReactNode | string
}

export interface IResult {
  name: string
  text: string
  slug: string
}

export interface IAdminSearch {
  id: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  setIsFocused: (isFocused: boolean) => void
  query: string
  setQuery: (query: string) => void
  results: Array<IResult>
  disabled?: boolean
  noResult: ISearchNoResult
  placeholder?: string
  className?: string
}

function AdminSearch({ className, id, isOpen, setIsOpen, query, setQuery, setIsFocused, results, disabled, noResult, placeholder }: IAdminSearch) {
  const searchWrapperElement = useRef<HTMLDivElement | null>(null)
  const inputField = useRef<HTMLInputElement | null>(null)

  const onClose = useCallback(() => {
    setIsOpen(false)
    return inputField?.current && inputField.current.blur()
  }, [setIsOpen])

  const onFocus = useCallback(() => {
    setIsOpen(true)
    setIsFocused(true)
  }, [setIsOpen, setIsFocused])

  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [setIsFocused])

  const onChange = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (!isOpen) {
        setIsOpen(true)
      }
      setQuery(e.target.value)
    },
    [isOpen, setIsOpen, setQuery]
  )

  function onClear() {
    setQuery('')
    return inputField?.current && inputField.current.focus()
  }

  useOnClickOutside({ ref: searchWrapperElement, onClose })
  useCloseOnEscape({ onClose, isOpen })

  return (
    <div ref={searchWrapperElement} className={cx(styles.search, className)}>
      <div className={styles.searchBar}>
        <Button type="button" surface="tertiary" size="x-small">
          <Icon icon="icon-search" />
        </Button>
        <InputText
          ref={inputField}
          type="text"
          id={id}
          onChange={onChange}
          value={query}
          // onFocus={onFocus}
          onBlur={onBlur}
          other={{ autoComplete: 'off' }}
          disabled={disabled}
          placeholder={placeholder}
          wrapperClassName={styles.searchInput}
        />
        {query && (
          <button onClick={onClear} tabIndex={-1} type="button" className={styles.clearButton}>
            <Icon icon="icon-x" className="text-icon" />
          </button>
        )}
      </div>

      {isOpen && query && (
        <div className={styles.searchResults}>
          <ul aria-labelledby={id}>
            {results.map((li: IResult, i: number) => (
              <li key={`${id}_${i}`}>
                <a href={li.slug} className={styles.searchResultLink}>
                  <span className={styles.serchResultItemLabel}>{li.name}</span>
                  {li.text && <span> - </span>}
                  <span className={styles.serchResultItemText}>{li.text}</span>
                </a>
              </li>
            ))}
            {results.length === 0 && query.length ? (
              <li key={`search_no_result_${id}`}>
                <div className={styles.serchResultItem}>
                  <span className={styles.serchResultItemLabel}>{noResult.name}</span>
                  {noResult.text && <span>-</span>}
                  <span className={styles.serchResultItemText}>{noResult.text}</span>
                </div>
              </li>
            ) : null}
          </ul>
        </div>
      )}
    </div>
  )
}

export { AdminSearch }
