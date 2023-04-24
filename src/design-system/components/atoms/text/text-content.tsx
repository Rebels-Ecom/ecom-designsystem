import { Text } from '@mantine/core'

export type TTextAlignment = 'left' | 'center' | 'right'
export type TTextWeight = 'normal' | 'bold' 
export type TComponentType = 'a' | 'span'

export interface ITextContent {
    children: React.ReactNode
    componentType?: TComponentType
    href?: string
    align?: TTextAlignment
    color?: string
    underline?: boolean
    weight?: TTextWeight
}

function TextContent({ children, align='left', color='#000000', componentType, href, underline=false, weight='normal' } : ITextContent){
    return(
        <Text 
            component={componentType} 
            href={componentType==='a' && href!=='' ? href : ''} 
            align={align} 
            color={color}
            underline={underline}
            weight={weight}
            >
            { children }
        </Text>
    )
}

export { TextContent }
