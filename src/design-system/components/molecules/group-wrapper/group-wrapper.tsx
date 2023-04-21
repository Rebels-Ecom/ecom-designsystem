import { Group } from "@mantine/core"

export type TGroupPosition = 'left' | 'right' | 'center' |'apart'
export type TSpacing = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type TAlign = 'left' | 'right' | 'center' |'baseline' | 'flex-start' | 'flex-end'

export interface IGroupWrapper {
    children: React.ReactNode
    position?: TGroupPosition
    spacing?: TSpacing
    noWrap?: boolean
    align?: TAlign
}

function GroupWrapper({ children,  position='left', spacing='md', noWrap= true, align='flex-end' } : IGroupWrapper){
    return(
        <Group position={position} spacing={spacing} noWrap={noWrap} align={align}>{children}</Group>
    )
}

export { GroupWrapper } 