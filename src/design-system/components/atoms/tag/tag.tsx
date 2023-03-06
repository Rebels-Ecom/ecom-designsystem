import cx from 'classnames'

export type TTagShape = 'rectangular' | 'round' | 'pill';
export type TTagColor = 'green' | 'mint' | 'blue' | 'orange';
export interface ITag {
    text: string
    shape: TTagShape
    color: TTagColor
    className?: string
}

export const tagDefaultClasses = 'inline-flex justify-center items-center font-secondary px-20 py-8'
export const rectangularTagClasses = 'h-fit rounded-sm text-tag-rectangular-sm lg:text-tag-rectangular-lg';
export const roundTagClasses = 'h-76 w-76 rounded-full text-tag-round-sm lg:text-tag-round-lg';
export const pillTagClasses = 'rounded-full text-tag-rectangular-sm lg:text-tag-rectangular-lg';

function getTagShape(shape:TTagShape){
    switch(shape){
        case 'round' : 
            return roundTagClasses
        case 'pill' : 
            return pillTagClasses
        case 'rectangular' : 
        default:
            return rectangularTagClasses
    }
}

function getTagColor(color:TTagColor){
    switch(color){
        case 'mint' : 
            return 'bg-tag-mint text-tag-blue'
        case 'blue' : 
            return 'bg-tag-blue text-tag-white'
        case 'orange' : 
            return 'bg-tag-orange text-tag-white'
        case 'green' : 
        default:
            return 'bg-tag-green text-tag-white'
    }
}

const Tag = ({text, shape, color, className}:ITag)=>{
    console.log('TAG STUFF', text, shape, color);
    return(
        <div className={cx(tagDefaultClasses, getTagShape(shape), getTagColor(color), className ? className : '' )}>
            {text}
        </div>
    )
}

export { Tag }