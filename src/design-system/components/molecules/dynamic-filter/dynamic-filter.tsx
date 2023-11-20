import { Fragment, useEffect, useState } from 'react'
import { DrawerSidebar } from '../drawer-sidebar/drawer-sidebar'
import styles from './dynamic-filter.module.css'
import { ExpandableWrapper, Icon, Slider } from '../../atoms';

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

type TOptionType = {
  name: string;
  value: string;
}

type TSelected = {
  name: string,
  selectedOptions: TOptionType[]
}

type TFilterType = {
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
  onUpdate?: (data: TSelected[]) => void;
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

const DynamicFilter = ({ isOpen, onClose, filters, title, preSelected, onUpdate }: IDynamicFilter) => {
  const [openFilters, setOpenFilters] = useState<Array<string>>([]);
  const [selectedFilters, setSelectedFilters] = useState<TSelected[]>(preSelected ?? []);
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
  const handleUpdateFilter = (optionToUpdate: TOptionType, name: string, range?: boolean) => {
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
              // Add incoming optionToUpdate
              if (!existingOption) {
                return {
                  ...filterTypeExists,
                  selectedOptions: [...filterTypeExists.selectedOptions, optionToUpdate]
                }
              } else {
                // Update existing range optionToUpdate
                if (range) {
                  return {
                    ...filterTypeExists,
                    selectedOptions: [optionToUpdate],
                  }
                }
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
      
      onUpdate?.(updatedFilters);
      return updatedFilters;
    })
  }

  return (
    <DrawerSidebar isOpen={isOpen} onClose={onClose} from='left' width='sm'>
      <div className={styles.dynamicFilter}>
        {title && <h4 className={styles.title}>{title}</h4>}
        {filters.map(filter => {
          const isSelected = openFilters.includes(filter.name);
          return (
            <Fragment key={filter.name}>
              <button
                className={styles.filterItem}
                onClick={() => handleClickFilterItem(filter.name)}
              >
                <span className={styles.filterName}>{filter.name}</span>
                <Icon className={styles.filterItemIcon} icon={isSelected ? 'icon-chevron-up' : 'icon-chevron-down'} />
              </button>

              <ExpandableWrapper open={isSelected}>
                {filter.type === 'range' ? (
                  <Slider
                    key={filter.name}
                    min={getMinAndMaxValues(filter.options)?.min ?? 0}
                    max={getMinAndMaxValues(filter.options)?.max ?? 10}
                    withFields
                    step={10}
                    onChange={(range) => handleChangeRange(filter.name, filter.id, typeof range === 'object' ? range : { min: 0, max: 0 })}
                  />
                ) : <>{filter.options.map(option => {
                  switch(filter.type) {
                    case 'checkbox':
                    default:
                      return (
                        <button
                          key={option.name}
                          className={styles.checkboxItem}
                          onClick={() => handleUpdateFilter(option, filter.name)}
                          // disabled={disabled}
                        >
                          <input
                            type="checkbox"
                            // checked={option.name === selected?.name}
                            className={styles.checkbox}
                            readOnly
                          />
                          <span className={styles.label}>{option.name}</span>
                        </button>
                      )
                  }
                })}</>}
              </ExpandableWrapper>
            </Fragment>
          )
        })}
      </div>
    </DrawerSidebar>
  )
}

export {
  DynamicFilter
}
