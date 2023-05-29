import React, { useCallback, useRef } from 'react'
import styles from './admin-search.module.css'
import { useCloseOnEscape, useOnClickOutside } from '../../../hooks'
import { Icon } from '../icon/icon'
import { InputText } from '../inputs/input-text/input-text'
import { Button } from '../button/button'
import cx from 'classnames'

export interface ISearchNoResult {
  text: React.ReactNode | string
}

export interface IResult {
  name: string
  companyName: string
  companyId: number
  email: string
}

export interface IAdminSearch {
  id: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  setIsFocused: (isFocused: boolean) => void
  query: string
  setQuery: (query: string) => void
  results: Array<IResult>
  onClick: CallableFunction
  onClickSearchResult: CallableFunction
  disabled?: boolean
  noResult: ISearchNoResult
  searchBtnLabel?: string
  placeholder?: string
  className?: string
}

function AdminSearch({ className, id, isOpen, setIsOpen, query, setQuery, setIsFocused, results, onClick, onClickSearchResult, disabled, noResult, placeholder, searchBtnLabel='Sök på en kund' }: IAdminSearch) {
  const searchWrapperElement = useRef<HTMLDivElement | null>(null)
  const inputField = useRef<HTMLInputElement | null>(null)

  const onClose = useCallback(() => {
    setIsOpen(false)
    return inputField?.current && inputField.current.blur()
  }, [setIsOpen])

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

  function handleOnClickSearchResult(item: IResult){
    onClickSearchResult(item)
    onClose()
    onClear()
  }

  useOnClickOutside({ ref: searchWrapperElement, onClose })
  useCloseOnEscape({ onClose, isOpen })

  return (
    <div ref={searchWrapperElement} className={cx(styles.search, className)}>
      <div className={styles.searchBar}>
        <Button type="button" surface="primary" size="small" iconLeft={{icon:"icon-search"}} className={styles.searchBtn} onClick={()=>onClick()}>
          <span className={styles.btnLabel}>{searchBtnLabel}</span>
        </Button>
        <InputText
          ref={inputField}
          type="text"
          id={id}
          onChange={onChange}
          value={query}
          onBlur={onBlur}
          other={{ autoComplete: 'off' }}
          disabled={disabled}
          placeholder={placeholder}
          wrapperClassName={styles.searchInput}
        />
        {query && (
          <button onClick={onClear} tabIndex={-1} type="button" className={styles.clearBtn}>
            <Icon icon="icon-x" className="text-icon" />
          </button>
        )}
      </div>

      {isOpen && query && (
        <div className={styles.searchResults}>
          <ul aria-labelledby={id}>
            {results.map((li: IResult, i: number) => (
              <li key={`${id}_${i}`} onClick={() => handleOnClickSearchResult(li)} className={styles.resultListItem}>
                <span className={styles.serchResultItemText}>{li.name}</span>
                <span className={styles.serchResultItemText}>{li.companyName}</span>
                <span className={styles.serchResultItemText}>{li.companyId}</span>
                <span className={styles.serchResultItemText}>{li.email}</span>
              </li>
            ))}
            {results.length === 0 && query.length ? (
              <li key={`search_no_result_${id}`} className={styles.noResultListItem}>
                <div >
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
