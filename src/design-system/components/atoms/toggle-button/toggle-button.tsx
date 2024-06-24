import React, { useState } from 'react'
import { Icon } from '../icon/icon'
import styles from './toggle-button.module.css'

export interface IToggleButton {
    toggleBtnLabelExpand: string
    toggleBtnLabelCollapse: string
    isExpanded: boolean
    onToggleClick: CallableFunction
}

// TODO: Remove
/** @deprecated Will be removed */
function ToggleButton({toggleBtnLabelExpand, toggleBtnLabelCollapse, isExpanded, onToggleClick} : IToggleButton) {
  function handleToggleClick() {
    onToggleClick()
  }

  return (
    <button className={styles.toggleButton} onClick={()=>handleToggleClick()}>
      <span className={styles.buttonText}>{isExpanded ? toggleBtnLabelCollapse : toggleBtnLabelExpand}</span>
      <Icon icon={isExpanded ? 'icon-x-circle' : 'icon-plus-circle'} className={styles.icon}></Icon>
    </button>
  );
}

export { ToggleButton }