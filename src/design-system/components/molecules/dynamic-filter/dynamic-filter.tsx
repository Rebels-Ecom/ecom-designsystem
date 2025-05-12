import cx from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { Button, Checkbox, ExpandableWrapper, Icon } from '../../atoms'
import { RangeInput } from '../../atoms/range-input/range-input'
import { Above, Below, FlexContainer } from '../../layouts'
import { DrawerSidebar, IDrawerSidebar } from '../drawer-sidebar/drawer-sidebar'
import styles from './dynamic-filter.module.css'

type TCheckbox = {
  type: 'checkbox'
}
type TRange = {
  type: 'range'
  id: string
}
type TRadio = {
  type: 'radio'
}

export type TOptionType = {
  name: string
  value: string
  count?: string | number
}

export type TSelected = {
  name: string
  selectedOptions: TOptionType[]
}

export type TFilterType = {
  type: 'checkbox' | 'range' | 'radio'
  name: string
  options: TOptionType[]
} & (TCheckbox | TRange | TRadio)

interface IDynamicFilter {
  filters: TFilterType[]
  preSelected: TSelected[]
  title?: string
  onUpdate?: (option?: TOptionType, filters?: TSelected[]) => void
  loading?: boolean
  hideSliderFields?: boolean
  /**
   * Defines if selected filters should be hidden
   * @default false
   */
  hideFilters?: boolean
  /**
   * Defines how many options to display
   * The remaining will be hidden in a ExpandableWrapper (show more / show less)
   * @default 6
   */
  maxOptionsToShow?: number
  /**
   * If provided, a "show result (x)" button will be displayed at bottom of drawer
   */
  result?: number
  backdropOptions?: Pick<IDrawerSidebar, 'enableBackgroundScroll' | 'hideOverlay' | 'disableCloseOnOutsideClick'>
}

const getMinAndMaxValues = (options: TOptionType[]) => {
  if (!options || !Array.isArray(options)) {
    return
  }
  const values = options?.map((option) => {
    return Number(option.name)
  })
  const max = Math.max(...values)
  const min = Math.min(...values)

  return {
    min,
    max: Math.ceil(max / 10) * 10,
  }
}

// TODO: improve range select data model to avoid custom change handlers
const DynamicFilter = ({
  filters,
  title,
  preSelected,
  onUpdate,
  loading,
  hideSliderFields,
  hideFilters,
  maxOptionsToShow = 6,
  result,
  backdropOptions,
}: IDynamicFilter) => {
  const [open, setOpen] = useState(false)
  const [openFilters, setOpenFilters] = useState<Array<string>>([])
  const [selectedFilters, setSelectedFilters] = useState<TSelected[]>(preSelected ?? [])
  const [openOptions, setOpenOptions] = useState<Array<string>>([])
  const [showSelectedFilters, setShowSelectedFilters] = useState(false)

  const handleClickFilterItem = (name: string) => {
    setOpenFilters((prevOpenFilters) => {
      if (prevOpenFilters.includes(name)) {
        return prevOpenFilters.filter((x) => x !== name)
      } else {
        return [...prevOpenFilters, name]
      }
    })
  }
  const handleClickFilterOption = (name: string) => {
    setOpenOptions((prevOpenOptions) => {
      if (prevOpenOptions.includes(name)) {
        return prevOpenOptions.filter((x) => x !== name)
      } else {
        return [...prevOpenOptions, name]
      }
    })
  }
  const handleChangeRange = (name: string, id: string, range: { min: number; max: number }) => {
    handleUpdateFilter({ name: id, value: `${id}_${range.min}-${range.max}` }, id, true)
  }
  const handleUpdateFilter = (optionToUpdate: TOptionType, name: string, singleSelect?: boolean) => {
    setSelectedFilters((prevSelectedFilters) => {
      const prevFilters = prevSelectedFilters

      let updatedFilters = []
      const filterTypeExists = prevFilters?.find((x) => x.name === name)
      // Add new filter type including incoming optionToUpdate
      if (!filterTypeExists) {
        updatedFilters = [
          ...prevFilters,
          {
            name,
            selectedOptions: [optionToUpdate],
          },
        ]
      } else {
        // Update existing filter type and its selectedOptions
        const existingOption = filterTypeExists.selectedOptions?.find((x) => x.name === optionToUpdate.name)
        updatedFilters = [
          ...prevFilters?.map((x) => {
            if (x.name === filterTypeExists.name) {
              // If single select, only assign incoming option to selected options
              if (singleSelect) {
                return {
                  ...filterTypeExists,
                  selectedOptions: [optionToUpdate],
                }
              }

              // Add incoming optionToUpdate
              if (!existingOption) {
                return {
                  ...filterTypeExists,
                  selectedOptions: [...filterTypeExists.selectedOptions, optionToUpdate],
                }
              } else {
                // Remove incoming optionToUpdate
                return {
                  ...filterTypeExists,
                  selectedOptions: filterTypeExists.selectedOptions.filter((y) => y.name !== existingOption.name),
                }
              }
            } else {
              return x
            }
          }),
        ]
      }

      const updatedFiltersWithValues = updatedFilters.filter((x) => !!x.selectedOptions.length)

      onUpdate?.(optionToUpdate, updatedFiltersWithValues)
      return updatedFiltersWithValues
    })
  }

  const handleRemoveFilter = (optionToRemove: TOptionType, range?: boolean) => {
    setSelectedFilters((prevFilters) => {
      const list = prevFilters
      const updatedOptionsInFilters = list?.map((x) => {
        return {
          ...x,
          selectedOptions: x.selectedOptions.filter((y) => y.name !== optionToRemove.name),
        }
      })

      const updatedFilters = updatedOptionsInFilters.filter((x) => !!x.selectedOptions.length)

      if (range) {
        onUpdate?.({ name: optionToRemove.value, value: optionToRemove.name }, updatedFilters)
      } else {
        onUpdate?.(optionToRemove, updatedFilters)
      }

      return updatedFilters
    })
  }

  const handleRemoveAllFilters = () => {
    setSelectedFilters([])
    onUpdate?.(undefined, [])
  }

  const handleClose = () => setOpen(false)
  useEffect(() => {
    if (!open) {
      setOpenOptions([])
    }
  }, [open])

  const filterItems = (filter: TFilterType) =>
    filter.options?.map((option, i) => {
      const activeCategory = selectedFilters?.find((x) => x.name === filter.name)
      const isActiveOption = activeCategory?.selectedOptions?.find((y) => y.value === option.value)
      switch (filter.type) {
        // case 'radio':
        //   return (
        //     <button
        //       key={`${option.name}-${i}`}
        //       className={styles.radioItem}
        //       onClick={() => handleUpdateFilter(option, filter.name, true)}
        //       disabled={loading}
        //     >
        //       <RadioButton
        //         checked={!!isActiveOption}
        //         id={option.value}
        //         name={option.value}
        //         className={styles.radio}
        //         disabled={loading}
        //       />
        //       <span className={styles.label}>{option.name}</span>
        //       {option.count && <span className={cx(styles.label, styles.count)}>{option.count}</span>}
        //     </button>
        //   )
        case 'checkbox':
        case 'radio':
        default:
          return (
            <button
              key={`${option.name}-${i}`}
              className={styles.checkboxItem}
              onClick={() => handleUpdateFilter(option, filter.name)}
              disabled={loading}
            >
              <Checkbox
                checked={!!isActiveOption}
                id={option.value}
                name={option.value}
                className={styles.checkbox}
                disabled={loading}
              />
              <span className={styles.label}>{option.name?.replace(/\s*\(.*$/, '')}</span>
              {option.count && <span className={cx(styles.label, styles.count)}>{option.count}</span>}
            </button>
          )
      }
    })

  const renderSelectedFilters = useMemo(() => {
    return (
      <div className={styles.selectedFilters}>
        {selectedFilters?.map((selectedFilter) => {
          return selectedFilter.selectedOptions?.map((selectedOption, i) => {
            let name = selectedOption.name
            const rangeSelect = filters?.find(
              (x) => x.type === 'range' && x.options?.find((y) => y.value === selectedOption.name)
            )
            if (rangeSelect) {
              name = rangeSelect.name
            }

            return (
              <AnimatePresence
                key={`${selectedOption.value}-${i}`}
                exitBeforeEnter
                presenceAffectsLayout
                initial={false}
              >
                <motion.button
                  className={cx(styles.selectedFilter, styles.active)}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.25, opacity: 0 }}
                  onClick={() => handleRemoveFilter(selectedOption, !!rangeSelect)}
                >
                  <span>{name}</span>
                  <Icon icon="icon-x" />
                </motion.button>
              </AnimatePresence>
            )
          })
        })}
        {!!selectedFilters.length && (
          <button className={cx(styles.selectedFilter, styles.clear)} onClick={handleRemoveAllFilters}>
            <Icon icon="icon-trash-2" />
          </button>
        )}
      </div>
    )
  }, [selectedFilters, filters])

  const numberOfSelectedFilters = selectedFilters?.flatMap((x) => x?.selectedOptions)?.length

  return (
    <>
      <div className={styles.filtersWrapper}>
        {/* TODO: add translation */}
        <Button
          type="button"
          surface="x"
          size="xx-small"
          iconRight={{
            icon: 'icon-plus',
          }}
          onClick={() => setOpen(true)}
          className={styles.filterButton}
          disabled={loading}
        >
          Filtrera
        </Button>
        {!hideFilters && selectedFilters.length > 0 && (
          <>
            <Below breakpoint="md">
              {(matches: any) =>
                matches && (
                  <>
                    <Button
                      type="button"
                      surface="x"
                      size="xx-small"
                      onClick={() => setShowSelectedFilters(!showSelectedFilters)}
                      className={styles.filterButton}
                      iconRight={{ icon: showSelectedFilters ? 'icon-chevron-up' : 'icon-chevron-down' }}
                    >
                      {numberOfSelectedFilters > 0 ? `Valda filter (${numberOfSelectedFilters})` : 'Valda filter'}
                    </Button>
                    <ExpandableWrapper open={showSelectedFilters}>{renderSelectedFilters}</ExpandableWrapper>
                  </>
                )
              }
            </Below>
            <Above breakpoint="md">{(matches: any) => matches && <>{renderSelectedFilters}</>}</Above>
          </>
        )}
      </div>
      <DrawerSidebar isOpen={open} onClose={handleClose} from="left" width="md" {...backdropOptions}>
        <div className={styles.dynamicFilter}>
          {title && <h4 className={styles.title}>{title}</h4>}
          {filters?.map((filter, i) => {
            // TODO: extract helpers
            const isSelected = openFilters.includes(filter.name)
            const preSelectedSlider =
              filter.type === 'range' ? preSelected?.find((x) => x.name === filter.id) : undefined
            const preSelectedSliderOptions = preSelectedSlider?.selectedOptions?.[0]?.value?.split('-')
            const defMin = preSelectedSliderOptions?.[0] ? Number(preSelectedSliderOptions?.[0]) : undefined
            const defMax = preSelectedSliderOptions?.[1] ? Number(preSelectedSliderOptions?.[1]) : undefined
            const minVal =
              (getMinAndMaxValues(filter.options)?.min ?? 0) >= 10 ? getMinAndMaxValues(filter.options)?.min ?? 0 : 0
            const isExpanded = openOptions.includes(filter.name)

            return (
              <div className={styles.filterCategory} key={`${filter.name}-${i}`}>
                <button className={styles.filterItem} onClick={() => handleClickFilterItem(filter.name)}>
                  <span className={styles.filterName}>{filter.name}</span>
                  <Icon className={styles.filterItemIcon} icon={isSelected ? 'icon-chevron-up' : 'icon-chevron-down'} />
                </button>

                <ExpandableWrapper open={isSelected} className={styles.expandableWrapper}>
                  {filter.type === 'range' ? (
                    <RangeInput
                      min={minVal}
                      max={getMinAndMaxValues(filter.options)?.max ?? 10}
                      defaultMinVal={!!defMin ? (defMin >= 10 ? defMin : 0) : undefined}
                      defaultMaxVal={defMax}
                      withFields={!hideSliderFields}
                      formatLabel="kr"
                      step={10}
                      onChange={(range) =>
                        handleChangeRange(
                          filter.name,
                          filter.id,
                          typeof range === 'object' ? range : { min: 0, max: 0 }
                        )
                      }
                      disabled={loading}
                    />
                  ) : (
                    <>{filterItems(filter).slice(0, maxOptionsToShow)}</>
                  )}
                  {filterItems(filter).length > maxOptionsToShow && filter.type !== 'range' ? (
                    <>
                      <ExpandableWrapper open={isExpanded}>
                        {filterItems(filter).slice(maxOptionsToShow, filterItems(filter).length)}
                      </ExpandableWrapper>
                      <FlexContainer alignItems="center" justifyContent="center">
                        {isExpanded && (
                          <motion.button
                            key="open"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: !isExpanded ? 0 : 1 }}
                            exit={{ scale: 0.5 }}
                            onClick={() => handleClickFilterOption(filter.name)}
                            className={styles.showMoreButton}
                          >
                            <span className={styles.showMoreLabel}>{isExpanded ? 'Se mindre' : 'Se mer'}</span>
                            <Icon icon={isExpanded ? 'icon-x-circle' : 'icon-plus-circle'} />
                          </motion.button>
                        )}
                        {!isExpanded && (
                          <motion.button
                            key="close"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: isExpanded ? 0 : 1 }}
                            exit={{ scale: 0.5 }}
                            onClick={() => handleClickFilterOption(filter.name)}
                            className={styles.showMoreButton}
                          >
                            <span className={styles.showMoreLabel}>{isExpanded ? 'Se mindre' : 'Se mer'}</span>
                            <Icon icon={isExpanded ? 'icon-x-circle' : 'icon-plus-circle'} />
                          </motion.button>
                        )}
                      </FlexContainer>
                    </>
                  ) : null}
                </ExpandableWrapper>
              </div>
            )
          })}
        </div>
        {!!selectedFilters.length && (
          <button className={cx(styles.stickyResult, styles.removeAllBtn)} onClick={handleRemoveAllFilters}>
            <Icon icon="icon-trash-2" />
          </button>
        )}
        {(result || result === 0) && (
          <button className={styles.stickyResult} onClick={handleClose} disabled={result === 0}>
            {`Visa resultat (${result})`}
          </button>
        )}
      </DrawerSidebar>
    </>
  )
}

export { DynamicFilter }
