import styles from './heading.module.css'
import { Title } from '@mantine/core'

export type THeadingAlignment = 'left' | 'center' | 'right'
export type TOrder = 1 | 2 | 3 | 4 | 5 | 6

export interface IHeading {
    children: string
    order: TOrder
    align?: THeadingAlignment
    color?: string
}

function Heading({ children, order=3, align='left', color='#000000' } : IHeading){
    return(
       <Title order={order} align={align} color={color}>{ children }</Title>
    )
}

export { Heading }
