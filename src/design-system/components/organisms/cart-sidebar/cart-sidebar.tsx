import React, {useState} from 'react'
import { SlidingSidebar } from '../../molecules/sliding-sidebar/sliding-sidebar'
import styles from './cart-sidebar.module.css'

export interface ICartSidebar {
    isOpen: boolean
    onClose: CallableFunction
    title: string
}

function CartSidebar({isOpen, onClose, title}: ICartSidebar) {
  // const [showSidebar, setShowSidebar] = useState(isOpen)

  // function onSidebarClose(){
  //   setShowSidebar(false)
  // }

  return (
    <div>
      <SlidingSidebar isOpen={isOpen} onClose={()=>onClose()}>
        {title}
      </SlidingSidebar>
    </div>
  )
}

export { CartSidebar }