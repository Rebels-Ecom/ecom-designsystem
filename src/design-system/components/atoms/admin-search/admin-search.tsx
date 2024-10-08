import React, { useCallback, useRef } from 'react'
import styles from './admin-search.module.css'
import { useCloseOnEscape, useOnClickOutside } from '../../../hooks'
import { Icon } from '../icon/icon'
import { InputText } from '../inputs/input-text/input-text'
import cx from 'classnames'
import { Loader } from '../loader/loader'

export interface IResult {
  name: string
  companyName: string
  email: string
}

export interface IAdminSearch {
  id: string
  isOpen: boolean
  isLoading?: boolean
  setIsOpen: (isOpen: boolean) => void
  query: string
  setQuery: (query: string) => void
  results: Array<IResult>
  onClickSearchResult: CallableFunction
  disabled?: boolean
  noResultText: React.ReactNode | string
  placeholder?: string
  className?: string
  onFocus?: CallableFunction,
}

function AdminSearch({
  className,
  id,
  isLoading = false,
  isOpen,
  setIsOpen,
  query,
  setQuery,
  results,
  onClickSearchResult,
  disabled,
  noResultText,
  placeholder,
  onFocus
}: IAdminSearch) {
  const searchWrapperElement = useRef<HTMLDivElement | null>(null)
  const inputField = useRef<HTMLInputElement | null>(null)

  const onClose = useCallback(() => {
    setIsOpen(false)
    return inputField?.current && inputField.current.blur()
  }, [setIsOpen])

  const onInputChange = useCallback(
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
        <div className={styles.searchIconWrapper}>
          <Icon className={styles.searchIcon} icon={'icon-search'}></Icon>
        </div>
        <InputText
          ref={inputField}
          type="text"
          id={id}
          onChange={onInputChange}
          onFocus={onFocus}
          value={query}
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
        <div className={styles.searchResultsContainer}>
          {isLoading ?
            <Loader visible={true} position='relative' color='orange' size='sm'/> :
            (
              <ul aria-labelledby={id}>
                {results.map((li: IResult, i: number) => (
                  <li key={`${id}_${i}`} className={styles.resultListItem}>
                    <button key={`${id}_${i}`} onClick={() => handleOnClickSearchResult(li)} className={styles.resultListItemBtn}>
                      <span className={styles.serchResultItemText}>{li.name}</span>
                      <span className={styles.serchResultItemText}>{li.companyName}</span>
                      <span className={styles.serchResultItemText}>{li.email}</span>
                    </button>
                  </li>
                ))}
                {results.length === 0 && query.length ? (
                  <li key={`search_no_result_${id}`} className={styles.noResultListItem}>
                    <span className={styles.serchResultItemText}>{noResultText}</span>
                  </li>
                ) : null}
              </ul>
            )
          }
        </div>
      )}
    </div>
  )
}

export { AdminSearch }
