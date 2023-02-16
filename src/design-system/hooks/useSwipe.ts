import {TouchEvent, useState} from "react";

interface SwipeArgs {
    onSwipedLeft: () => void
    onSwipedRight: () => void
}

interface SwipeReturnEvents  {
    onTouchStart: (e: TouchEvent) => void
    onTouchMove: (e: TouchEvent) => void
}

export default function useSwipe (args: SwipeArgs): SwipeReturnEvents {
    const [touchPosition, setTouchPosition] = useState(0);

    const minSwipeDistance = 5;

    const onTouchStart = (e: TouchEvent) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    const onTouchMove = (e: TouchEvent) => {
        const touchDown = touchPosition;
    
        if(touchDown === 0) {
            return;
        }
    
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;
    
        if (diff > minSwipeDistance) {
            args.onSwipedLeft();
        }
    
        if (diff < -minSwipeDistance) {
            args.onSwipedRight();
        }
    
        setTouchPosition(0);
    }

    return {
        onTouchStart,
        onTouchMove
    }
}