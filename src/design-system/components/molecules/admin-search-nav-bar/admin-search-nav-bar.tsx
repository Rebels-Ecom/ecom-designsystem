import { useState, useEffect } from 'react'
import styles from './admin-search-nav-bar.module.css'
import { AdminSearch } from '../../atoms'

export interface ISearchNavBar {
  itemsToFilterOn: Array<any>
  onClick: CallableFunction
  onClickSearchResult: CallableFunction
}

const AdminSearchNavBar = ({ itemsToFilterOn, onClick, onClickSearchResult }: ISearchNavBar) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [results, setResults] = useState<Array<any>>([])

  useEffect(() => {
    let pattern = new RegExp(query.toLowerCase(), 'i')
    setResults(itemsToFilterOn.filter((item) => query && (
      (item.name && pattern.test(item.name.toLowerCase())) ||
      (item.companyName && pattern.test(item.companyName.toLowerCase())) ||
      (item.companyId && pattern.test(item.companyId.toString().toLowerCase())) ||
      (item.email && pattern.test(item.email.toLowerCase()))
      )))
  }, [query])

  return (
    <div className={styles.innerSearchWrapper}>
      <AdminSearch
        className={styles.searchComponent}
        id={'Search_Id'}
        query={query}
        setQuery={setQuery}
        results={results}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsFocused={setIsFocused}
        searchBtnLabel={'Sök på en kund'}
        placeholder={'Sök på kundnummer, företag, namn'}
        noResult={{ text: 'Din sökning gav inga träffar'}} 
        onClick={onClick}
        onClickSearchResult={onClickSearchResult}/>
    </div>
  )
}

export { AdminSearchNavBar }
