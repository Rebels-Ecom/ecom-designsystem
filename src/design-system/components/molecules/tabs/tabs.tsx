import React, { useState } from 'react'
import styles from './tabs.module.css'
import { Button } from '../../atoms/button/button';

export interface ITab {
    id: string,
    tabTitle: string,
    content: React.ReactNode
}

export interface ITabs {
    tabs: Array<ITab>
    isOpen: boolean
}

function Tabs({tabs, isOpen}: ITabs) {
    const [currentTab, setCurrentTab] = useState(tabs[0].id);

    const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentTab(e.currentTarget.id);
    }

    if(!isOpen)
        return null

    return (
        <div className={styles.tabsWrapper}>
            <div className={styles.tabs}>
                {tabs.map((tab, i) =>
                    <Button key={i} id={tab.id} className={styles.tabBtn} disabled={currentTab === `${tab.id}`} onClick={handleTabClick} type={'button'} surface={'secondary'}>{tab.tabTitle}</Button>
                )}
            </div>
            <div className={styles.tabContent}>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div>{tab.content}</div>}
                    </div>
                )}
            </div>
        </div>
    )
}

export { Tabs }