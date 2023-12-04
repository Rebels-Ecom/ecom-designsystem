import { Fragment, useEffect, useState } from 'react'
import { DrawerSidebar } from '../drawer-sidebar/drawer-sidebar'
import styles from './dynamic-filter.module.css'
import { Button, Checkbox, ExpandableWrapper, Icon, RadioButton, Slider } from '../../atoms';
import { FlexContainer } from '../../layouts';

type TCheckbox = {
  type: 'checkbox';
}
type TRange = {
  type: 'range';
  id: string;
}
type TRadio = {
  type: 'radio';
}

export type TOptionType = {
  name: string;
  value: string;
}

export type TSelected = {
  name: string,
  selectedOptions: TOptionType[]
}

export type TFilterType = {
  type: 'checkbox' | 'range' | 'radio';
  name: string;
  options: TOptionType[];
} & (TCheckbox | TRange | TRadio)

interface IDynamicFilter {
  isOpen: boolean;
  onClose: () => void;
  filters: TFilterType[];
  preSelected: TSelected[];
  title?: string;
  onUpdate?: (option?: TOptionType, filters?: TSelected[]) => void;
  loading?: boolean;
  hideSliderFields?: boolean;
  /**
   * Defines if selected filters should be hidden
   * @default false
   */
  hideFilters?: boolean;
  /**
   * Defines how many options to display
   * The remaining will be hidden in a ExpandableWrapper (show more / show less)
   * @default 6
   */
  maxOptionsToShow?: number;
}

const getMinAndMaxValues = (options: TOptionType[]) => {
  if (!options || !Array.isArray(options)) {
    return;
  }
  const values = options.map(option => {
    return Number(option.name);
  });
  const max = Math.max(...values);
  const min = Math.min(...values);

  return {
    min,
    max: Math.ceil(max / 10) * 10,
  }
}

const DynamicFilter = ({
  isOpen,
  onClose,
  filters,
  title,
  preSelected,
  onUpdate,
  loading,
  hideSliderFields,
  hideFilters,
  maxOptionsToShow = 6
}: IDynamicFilter) => {
  const [openFilters, setOpenFilters] = useState<Array<string>>([]);
  const [selectedFilters, setSelectedFilters] = useState<TSelected[]>(preSelected ?? []);
  const [showMore, setShowMore] = useState(false);
  const handleClickFilterItem = (name: string) => {
    setOpenFilters(prevOpenFilters => {
      if (prevOpenFilters.includes(name)) {
        return prevOpenFilters.filter(x => x !== name);
      } else {
        return [...prevOpenFilters, name];
      }
    })
  }
  const handleChangeRange = (name: string, id: string, range: { min: number, max: number }) => {
    handleUpdateFilter({ name: id, value: `${id}_${range.min}-${range.max}` }, name, true)
  }
  const handleUpdateFilter = (optionToUpdate: TOptionType, name: string, singleSelect?: boolean) => {
    setSelectedFilters(prevSelectedFilters => {
      const prevFilters = prevSelectedFilters;
      
      let updatedFilters = [];
      const filterTypeExists = prevFilters.find(x => x.name === name);
      // Add new filter type including incoming optionToUpdate
      if (!filterTypeExists) {
        updatedFilters = [...prevFilters, {
          name,
          selectedOptions: [optionToUpdate],
        }];
      } else {
        // Update existing filter type and its selectedOptions
        const existingOption = filterTypeExists.selectedOptions.find(x => x.name === optionToUpdate.name);
        updatedFilters = [
          ...prevFilters.map(x => {
            if (x.name === filterTypeExists.name) {
              // If single select, only assign incoming option to selected options
              if (singleSelect) {
                console.log('2')
                return {
                  ...filterTypeExists,
                  selectedOptions: [optionToUpdate],
                }
              }

              // Add incoming optionToUpdate
              if (!existingOption) {
                console.log('1')
                return {
                  ...filterTypeExists,
                  selectedOptions: [...filterTypeExists.selectedOptions, optionToUpdate]
                }
              } else {
                // Remove incoming optionToUpdate
                return {
                  ...filterTypeExists,
                  selectedOptions: filterTypeExists.selectedOptions.filter(y => y.name !== existingOption.name),
                };
              }
            } else {
              return x;
            }
          })
        ]
      }

      const updatedFiltersWithValues = updatedFilters.filter(x => !!x.selectedOptions.length);
      
      onUpdate?.(optionToUpdate, updatedFiltersWithValues);
      return updatedFiltersWithValues;
    })
  }

  const handleRemoveFilter = (optionToRemove: TOptionType) => {
    setSelectedFilters(prevFilters => {
      const list = prevFilters;
      const updatedOptionsInFilters = list?.map(x => {
        return {
          ...x,
          selectedOptions: x.selectedOptions.filter(y => y.name !== optionToRemove.name)
        }
      });

      const updatedFilters = updatedOptionsInFilters.filter(x => !!x.selectedOptions.length);

      onUpdate?.(undefined, updatedFilters);
      return updatedFilters
    })
  }

  const handleRemoveAllFilters = () => {
    setSelectedFilters([]);
    onUpdate?.(undefined, [])
  }

  useEffect(() => {
    if (!isOpen) {
      setShowMore(false)
    }
  }, [isOpen]);

  const filterItems = (filter: TFilterType) => filter.options.map(option => {
    const activeCategory = selectedFilters.find(x => x.name === filter.name);
    const isActiveOption = activeCategory?.selectedOptions.find(y => y.value === option.value);
    switch(filter.type) {
      case 'radio':
        return (
          <button
            key={option.name}
            className={styles.checkboxItem}
            onClick={() => handleUpdateFilter(option, filter.name, true)}
            disabled={loading}
          >
            <RadioButton
              checked={!!isActiveOption}
              id={option.value}
              name={option.value}
              className={styles.radio}
              disabled={loading}
            />
            <span className={styles.label}>{option.name}</span>
          </button>
        )
      case 'checkbox':
      default:
        return (
          <button
            key={option.name}
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
            <span className={styles.label}>{option.name}</span>
          </button>
        )
    }
  })

  return (
    <>
      <FlexContainer>
        {!hideFilters && (
          <>
            {selectedFilters.map(selectedFilter => {
              {
                return selectedFilter.selectedOptions.map(selectedOption => {
                  return (
                    <button
                      className={styles.selectedFilter}
                      onClick={() => handleRemoveFilter(selectedOption)}
                    >
                      {selectedOption.name}
                      <Icon icon='icon-x' />
                    </button>
                  )
                })
              }
            })}
            {!!selectedFilters.length && (
              <button
                className={styles.selectedFilter}
                onClick={handleRemoveAllFilters}
              >Rensa <Icon icon='icon-x' /></button>
            )}
          </>
        )}
      </FlexContainer>
      <DrawerSidebar isOpen={isOpen} onClose={onClose} from='left' width='md'>
        <div className={styles.dynamicFilter}>
          {title && <h4 className={styles.title}>{title}</h4>}
          {filters.map(filter => {
            // TODO: extract helpers
            const isSelected = openFilters.includes(filter.name);
            const preSelectedSlider = filter.type === 'range' ? preSelected?.find(x => x.name === filter.name) : undefined;
            const preSelectedSliderObj = preSelectedSlider?.selectedOptions?.find(y => y.value);
            const preSelectedSliderValues = preSelectedSliderObj?.value?.split('_')[1]?.split('-').map(x => Number(x))
            return (
              <div className={styles.filterCategory} key={filter.name}>
                <button
                  className={styles.filterItem}
                  onClick={() => handleClickFilterItem(filter.name)}
                  >
                  <span className={styles.filterName}>{filter.name}</span>
                  <Icon className={styles.filterItemIcon} icon={isSelected ? 'icon-chevron-up' : 'icon-chevron-down'} />
                </button>

                <ExpandableWrapper open={isSelected} className={styles.expandableWrapper}>
                  {filter.type === 'range' ? (
                    <Slider
                      key={filter.name}
                      min={getMinAndMaxValues(filter.options)?.min ?? 0}
                      max={getMinAndMaxValues(filter.options)?.max ?? 10}
                      defaultMinVal={preSelectedSliderValues?.[0]}
                      defaultMaxVal={preSelectedSliderValues?.[1]}
                      withFields={!hideSliderFields}
                      formatLabel='kr'
                      step={10}
                      onChange={(range) => handleChangeRange(filter.name, filter.id, typeof range === 'object' ? range : { min: 0, max: 0 })}
                      disabled={loading}
                    />
                    ) : <>{filterItems(filter).slice(0, maxOptionsToShow)}</>}
                    {filterItems(filter).length > maxOptionsToShow && filter.type !== 'range' ? (
                      <>
                        <ExpandableWrapper open={showMore} >
                          {filterItems(filter).slice(maxOptionsToShow, filterItems(filter).length)}
                        </ExpandableWrapper>
                        <FlexContainer alignItems='center' justifyContent='center'>
                          <Button
                            type='button'
                            surface='x'
                            size='x-small'
                            iconRight={{ icon: showMore ? 'icon-chevron-up' : 'icon-chevron-down'}}
                            onClick={() => setShowMore(!showMore)}
                            className={styles.showMoreButton}
                          >{showMore ? 'Se mindre' : 'Se mer'}</Button>
                        </FlexContainer>
                      </>
                    ) : null}
                </ExpandableWrapper>
              </div>
            )
          })}
        </div>
      </DrawerSidebar>
    </>
  )
}

export {
  DynamicFilter
}
