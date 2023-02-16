import { TouchEvent } from "react";
interface SwipeArgs {
    onSwipedLeft: () => void;
    onSwipedRight: () => void;
}
interface SwipeReturnEvents {
    onTouchStart: (e: TouchEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
}
export default function useSwipe(args: SwipeArgs): SwipeReturnEvents;
export {};
