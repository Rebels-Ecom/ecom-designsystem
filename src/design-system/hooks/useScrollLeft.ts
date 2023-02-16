import { useLayoutEffect, useState } from 'react';

export default function useScrollLeft(ref:React.RefObject<HTMLElement>,initialPosition=0) {
  const [scrollPosition, setPosition] = useState(initialPosition);
    
  useLayoutEffect(() => {
    function updatePosition() {
        if(ref && ref.current){
            setPosition(ref.current.scrollLeft);
        }
    }

    if(ref && ref.current){
        ref.current.addEventListener('scroll', updatePosition);
    }

    updatePosition();

    return () => {
        if(ref && ref.current){
            ref.current.removeEventListener('scroll', updatePosition);
        }
    }
  }, []);

  return scrollPosition;
}