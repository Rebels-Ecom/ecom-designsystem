import React from 'react'
import { Drawer } from '@mantine/core'

export type TDrawerPosition = 'left' | 'right'
export type TDrawerSize = 'sm' | 'md' | 'lg' | 'xl'

export interface IDrawerSidebar {
    children: any
    isOpen: boolean
    onClose: ()=> void
    position: TDrawerPosition
    size: TDrawerSize
}

function DrawerSidebar({children, isOpen=false, onClose, position= 'right', size='lg' }: IDrawerSidebar) {  
  return (
    <Drawer onClose={onClose} opened={isOpen} position={position} size={size} zIndex={100000} overlayProps={{ opacity: 0.9, blur: 1, color: '#003E51', zIndex:100000}}>
      {children}
    </Drawer>
  )
}

export { DrawerSidebar }