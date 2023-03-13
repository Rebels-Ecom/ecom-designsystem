import { useState, useEffect } from 'react'
import styles from './search-nav-bar.module.css'
import { Icon } from '../../atoms/icon/icon'
import { IPicture, Picture } from '../../atoms/picture/picture'
import { TNavLink } from '../../../../types/links'
import { Search } from '../../atoms/search/search'

export interface ISearchNavBar {
  linkComponent: any
  itemsToFilterOn: Array<any>
}

const SearchNavBar = ({ itemsToFilterOn }: ISearchNavBar) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [results, setResults] = useState<Array<any>>([])

  useEffect(() => {
    const pattern = new RegExp(query.toLowerCase(), 'i')
    setResults(itemsToFilterOn.filter((item: any) => query && item.label && pattern.test(item.label.toLowerCase())))
  }, [query])

  return (
    <div className={styles.innerSearchWrapper}>
      <Search
        className={styles.searchComponent}
        id={'Search_Id'}
        query={query}
        setQuery={setQuery}
        results={results}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsFocused={setIsFocused}
        placeholder={'Sök på produkt'}
        noResult={{ label: 'Din sökning gav inga träffar', text: '' }}
      />
    </div>
  )
}

export { SearchNavBar }
