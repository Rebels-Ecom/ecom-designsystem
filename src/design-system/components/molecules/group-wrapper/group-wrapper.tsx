import { Group } from "@mantine/core"

export type TGroupPosition = 'left' | 'right' | 'center' |'apart'
export type TSpacing = number | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface IGroupWrapper {
    children: React.ReactNode
    position?: TGroupPosition
    spacing?: TSpacing
    noWrap?: boolean
}

function GroupWrapper({ children,  position='left', spacing='md', noWrap= true } : IGroupWrapper){
    return(
        <Group position={position} spacing={spacing} noWrap={noWrap}>{children}</Group>
    )
}

export { GroupWrapper } 