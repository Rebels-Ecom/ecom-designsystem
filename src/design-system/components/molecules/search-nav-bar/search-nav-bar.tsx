import { useState, useEffect } from 'react'
import styles from './search-nav-bar.module.css'
import { Search } from '../../atoms/search/search'
import { motion } from 'framer-motion'
import { Below, Above } from '../../layouts'

export interface ISearchNavBar {
  linkComponent: any
  isOpen?: boolean
  itemsToFilterOn: Array<any>
}

const variants = {
  open: { y: 0, opacity: 1, width: '100%' },
  closed: { y: "-3.7rem", opacity: 0 },
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
    <div className={styles.innerSearchWrapper}>
      <Below breakpoint="lg">{(matches: any) => matches && 
        <motion.div initial={{opacity: 0}} animate={isOpen ? "open" : "closed"} transition={{duration: 1}} variants={variants}>
          {renderSearchBar()}
        </motion.div>}
      </Below>
      <Above breakpoint="lg">{(matches: any) => matches && 
          <>{renderSearchBar()}</>}
      </Above>
    </div>
  )
}

export { SearchNavBar }
