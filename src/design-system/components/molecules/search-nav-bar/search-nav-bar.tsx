import { useState, useEffect } from 'react'
import styles from './search-nav-bar.module.css'
import { Search } from '../../atoms/search/search'

export interface ISearchNavBar {
  linkComponent: any
  isOpen?: boolean
  itemsToFilterOn: Array<any>
}

const SearchNavBar = ({ itemsToFilterOn, isOpen=false }: ISearchNavBar) => {
  const [isSearchBarOpen, setIsOpen] = useState<boolean>(isOpen)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [results, setResults] = useState<Array<any>>([])

  useEffect(() => {
    const pattern = new RegExp(query.toLowerCase(), 'i')
    setResults(itemsToFilterOn.filter((item: any) => query && item.label && pattern.test(item.label.toLowerCase())))
  }, [query])

  function renderSearchBar(){
    return(
      <Search
        className={styles.searchComponent}
        id={'Search_Id'}
        query={query}
        setQuery={setQuery}
        results={results}
        isOpen={isSearchBarOpen}
        setIsOpen={setIsOpen}
        setIsFocused={setIsFocused}
        placeholder={'Sök på produkt'}
        noResult={{ label: 'Din sökning gav inga träffar', text: '' }}
      />
    )
  }

  return (
    <div className={styles.innerSearchWrapper} style={{ overflow: 'hidden' }}>
      {renderSearchBar()}
    </div>
  )
}

export { SearchNavBar }
