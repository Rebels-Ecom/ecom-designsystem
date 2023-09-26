import React from 'react'
import styles from './filter.module.css'
import { ISelectOption, MultiSelect } from '../../atoms/multi-select/multi-select'
import { SingleSelect } from '../../atoms/single-select/single-select'

export interface IFilter {
    id: string
    name: string
    filterType: TFilterType
    options: Array<ISelectOption>
    selectedOptions: Array<string>
    updateFilterSelection?: CallableFunction
}

export type TFilterType = 'single' | 'multi' | 'range'

const Filter = ({id, name, filterType, options, selectedOptions, updateFilterSelection} : IFilter) => {

    const handleMultiselectChange = (option : ISelectOption) => {
        updateFilterSelection && updateFilterSelection(option.value)
    }

    function getFilterPerType( id: string, name: string, filterType: TFilterType, options: Array<ISelectOption>, selectedOpt: Array<string> ) {
        switch(filterType){
            case 'single':
                return <SingleSelect id={id} name={name} options={options} onChange={handleMultiselectChange}/>
            case 'range':
                return <div>Range filter</div>
            case 'multi':
            default:
                return <MultiSelect id={id} name={name} icon={{ icon: 'icon-chevron-down' }} options={options} selectedOptions={selectedOpt} onToggleOption={handleMultiselectChange}></MultiSelect>
        }
    }
        
    if(!id || !filterType || !options) 
        return null

    return(
        <div className={styles.filter}>
            {getFilterPerType(id, name, filterType, options, selectedOptions)}
        </div>
    )
}

export { Filter }