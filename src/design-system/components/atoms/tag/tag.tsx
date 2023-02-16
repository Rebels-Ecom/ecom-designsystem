import styles from './tag.module.css'

export type TTagSize = 'large' | 'small';
export type TTagShape = 'rectangular' | 'round';
export interface ITag {
    text: string
    size: TTagSize
    shape: TTagShape
    className?: string
}

const Tag = ({text, size, shape, className}:ITag)=>{
    return(
        <div className={`${styles.tag} ${styles[size]} ${styles[shape]} ${className ? className : ''}`}>
            {text}
        </div>
    )
}

export { Tag }
