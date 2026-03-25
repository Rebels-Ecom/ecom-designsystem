import React, { useState } from 'react'
import { Heading, Icon, IconButton, InputText, Loader } from '../../atoms'
import { ContentWrapper } from '../../layouts'
import styles from './faq-hero.module.css'

export type FAQHeroProps = {
  title: string
  subtitle: string
  placeholder: string
  onQueryChange: (query: string) => void
  loading: boolean
}

export function FAQHero({ title, subtitle, placeholder, onQueryChange, loading }: FAQHeroProps) {
  const [query, setQuery] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setQuery(value)
    onQueryChange(value)
  }
  function onClear() {
    setQuery('')
    onQueryChange('')
  }

  return (
    <div className={styles.faqHero}>
      <ContentWrapper>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.faqHeroSubtitle}>{subtitle}</p>
        <div className={styles.faqHeroSearch}>
          <span className={styles.faqHeroSearchIcon}>
            <Icon icon="icon-search" />
          </span>
          <InputText
            id="faq-search"
            value={query}
            onChange={handleChange}
            placeholder={placeholder}
            ariaLabel={placeholder}
          />
          {loading && (
            <span className={styles.faqHeroSpinner}>
              <Loader position="relative" visible size="xs" />
            </span>
          )}
          {query && !loading && (
            <IconButton
              className={styles.clearBtn}
              icon="icon-x"
              type="button"
              onClick={onClear}
              size="small"
              isTransparent
              noBorder
            />
          )}
        </div>
      </ContentWrapper>
    </div>
  )
}
