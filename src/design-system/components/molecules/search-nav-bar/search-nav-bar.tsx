import { useState, useEffect } from 'react';
import styles from './search-nav-bar.module.css';
import { Icon } from '../../atoms/icon/icon';
import { IPicture, Picture } from '../../atoms/picture/picture';
import { TNavLink} from '../../../../types/links';
import { Search } from '../../atoms/search/search';

export type INavigationLogo = {
    href: string
} & IPicture

export interface ISearchNavBar {
    logo: INavigationLogo, 
    searchNavLinks: Array<TNavLink>,  
    linkComponent: any, 
    searchArgs: any, 
    itemsToFilterOn: Array<any>
}

const SearchNavBar = ({logo, searchNavLinks, linkComponent:Link, searchArgs, itemsToFilterOn } : ISearchNavBar) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [query, setQuery] = useState<string>('')
    const [results, setResults] = useState<Array<any>>([])
  
    useEffect(() => {
        let pattern = new RegExp(query.toLowerCase(), 'i')
        setResults(itemsToFilterOn.filter((item: any) => query && item.label && pattern.test(item.label.toLowerCase())))
    }, [query]);
    
    return(
        <>
            {logo && (
                <Link to={logo.href} className={styles.linkLogo}>
                    <Picture {...logo} classNamePicture={styles.logoPicture} classNameImg={styles.logoImg} />
                </Link>
            )}
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
                    noResult = {
                    { label: 'Din sökning gav inga träffar',
                        text: ''}
                    }
                />
                {Array.isArray(searchNavLinks) && searchNavLinks.length && 
                    <ul className={styles.searchNavLinksWrapper}>
                        {searchNavLinks.map((link, index)=>(
                            <Link key={`${link.text}-${index}`} to={link.href} className={styles.searchNavLink}>
                                <Icon icon={link.navLinkType === 'favorites' ? 'icon-heart' : 'icon-shopping-cart'} className={styles.navIcon} />
                            </Link>
                        ))}
                    </ul>
                }
            </div> 
        </>
    )
}

export { SearchNavBar }