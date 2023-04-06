import { useState, useLayoutEffect } from 'react'
import useResizeObserver from '@react-hook/resize-observer'

function useCalculateSize(target: any){
    const [size, setSize] = useState()
  
    useLayoutEffect(() => {
      setSize(target?.current?.getBoundingClientRect())
    }, [target])
  
    useResizeObserver(target, (entry: any) => setSize(entry.contentRect))
    
    return size
}

export { useCalculateSize }