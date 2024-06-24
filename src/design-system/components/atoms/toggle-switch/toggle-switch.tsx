import React, { useState } from 'react'
import styles from './toggle-switch.module.css'

export interface IToggleSwitch {
    id: string
    onChangeToggle: CallableFunction
}

// TODO: Remove
/** @deprecated Will be removed */
function ToggleSwitch({id, onChangeToggle} : IToggleSwitch) {
  const [switchState, setSwitchState] = useState<boolean>(false)

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSwitchState(!switchState)
    onChangeToggle(e)
  }

  return (
    <div className={styles.toggleSwitch} id={id}>
        <input type="checkbox" className={styles.checkbox} checked={switchState} onChange={handleOnChange}/>
        <div className={styles.switchKnob}></div>
        <div className={styles.switchBackground}></div>
    </div>
  );
}

export { ToggleSwitch }