import styles from './tag.module.css'
import cx from 'classnames'

export type TTagShape = 'rectangular' | 'round' | 'pill';
export type TTagSize = 'sm' | 'md' | 'lg';
export type TTagColor = 'green' | 'mint' | 'blue' | 'orange' | 'grey' | 'yellow' | 'purple';
export interface ITag {
    text: string
    shape: TTagShape
    color?: TTagColor
    size?: TTagSize
    className?: string
}

function getTagShape(shape:TTagShape){
    switch(shape){
        case 'round' : 
            return 'tagRound'
        case 'pill' : 
            return 'tagPill'
        case 'rectangular' : 
        default:
            return 'tagRectangular'
    }
}

function getTagSize(size:TTagSize){
    switch(size){
        case 'sm' : 
            return 'tagSmall'
        case 'md' : 
            return 'tagMedium'
        case 'lg' : 
        default:
            return 'tagLarge'
    }
}

const Tag = ({text, size='lg', shape, color='green', className}:ITag)=>{
    return(
        <div className={cx(styles.tagDefault, styles[getTagSize(size)], styles[getTagShape(shape)], styles[color], className ? className : '')}>
            {text}
        </div>
    )
}

export { Tag }
