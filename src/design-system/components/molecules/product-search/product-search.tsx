import React, { useCallback, useRef } from 'react'
import styles from './product-search.module.css'
import { useCloseOnEscape, useOnClickOutside } from '../../../hooks'
import { Loader, InputText, Icon, ProductSearchResultItem } from '../../atoms'
import { IProductVariant } from '../product-variant/product-variant'
import { getProductPicture } from '../../../../helpers/picture-helper'
import cx from 'classnames'

export interface ISearchNoResult {
  text: React.ReactNode | string
}

export interface IResult {
  productId: string
  productName: string
  productImageUrl: string
  productVariantList: Array<IProductVariant>
}

export interface IProductSearch {
  id: string
  isOpen: boolean
  isLoading?: boolean
  setIsOpen: (isOpen: boolean) => void
  query: string
  setQuery: (query: string) => void
  results: Array<IResult>
  onClickSearchResult: CallableFunction
  disabled?: boolean
  noResultText: ISearchNoResult
  placeholder?: string
  className?: string
}

function ProductSearch({
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
}: IProductSearch) {
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

  function handleOnClickSearchResult(item: IResult) {
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
      {isOpen && query && isLoading && (
        <div className={styles.searchResultsLoading}>
          <Loader visible={true} position="relative" color="orange" size="sm" />
        </div>
      )}
      {isOpen && query && !isLoading && (
        <div className={styles.searchResults}>
          <ul aria-labelledby={id} className={styles.searchResultsList}>
            {results.map((li: IResult, i: number) => {
              const productImage = getProductPicture(li.productId, li.productImageUrl)
              return (
                <li key={`${id}_${i}`} className={styles.resultListItem}>
                  <ProductSearchResultItem
                    key={`${id}_${li.productId}`}
                    productId={li.productId}
                    productName={li.productName}
                    productImage={productImage}
                    productVariantList={li.productVariantList}
                    onClick={handleOnClickSearchResult}
                  ></ProductSearchResultItem>
                </li>
              )
            })}
            {results.length === 0 && query.length ? (
              <li key={`search_no_result_${id}`} className={styles.noResultListItem}>
                <div>
                  <span className={styles.serchResultItemText}>{noResultText.text}</span>
                </div>
              </li>
            ) : null}
          </ul>
        </div>
      )}
    </div>
  )
}

export { ProductSearch }