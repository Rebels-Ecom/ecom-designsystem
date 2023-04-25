import { Text } from '@mantine/core'

export type TTextAlignment = 'left' | 'center' | 'right'
export type TTextWeight = 'normal' | 'bold' 
export type TComponentType = 'a' | 'span'

export interface ITextContent {
    children: React.ReactNode
    componentType?: TComponentType
    href?: string
    align?: TTextAlignment
    underline?: boolean
    weight?: TTextWeight
}

function TextContent({ children, align='left', componentType, href, underline=false, weight='normal' } : ITextContent){

    function getTextColor(isLink: boolean){
        return isLink ? '#DE9034' : '#000000'
    }

    return(
        <Text 
            component={componentType} 
            href={componentType==='a' && href!=='' ? href : ''} 
            align={align} 
            color={getTextColor(componentType==='a' && href!=='')}
            underline={underline}
            weight={weight}
            >
            { children }
        </Text>
    )
}

export { TextContent }
