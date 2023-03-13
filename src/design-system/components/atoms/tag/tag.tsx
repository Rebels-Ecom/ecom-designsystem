import styles from './tag.module.css'
import cx from 'classnames'

export type TTagShape = 'rectangular' | 'round' | 'pill';
export type TTagColor = 'green' | 'mint' | 'blue' | 'orange';
export interface ITag {
    text: string
    shape: TTagShape
    color: TTagColor
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

function getTagColor(color:TTagColor){
    switch(color){
        case 'mint' : 
            return 'mint'
        case 'blue' : 
            return 'blue'
        case 'orange' : 
            return 'orange'
        case 'green' : 
        default:
            return 'green'
    }
}

const Tag = ({text, shape, color, className}:ITag)=>{
    return(
        <div className={cx(styles.tagDefault, styles[getTagShape(shape)], styles[getTagColor(color)], className ? className : '')}>
            {text}
        </div>
    )
}

export { Tag }
