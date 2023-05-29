import React from 'react'
import styles from './tags-list.module.css'
import { ITag, Tag } from '../../atoms/tag/tag'

function TagsList({tagsList=[]} : {tagsList:Array<ITag>}) {
    return(
        <ul className={styles.tagsList}>
            {Array.isArray(tagsList) && tagsList.length>0 && tagsList.map((tag, index)=>(
                <li key={index}>
                    <Tag {...tag} ></Tag>
                </li>
                ))
            }
        </ul>
    )
}

export { TagsList }