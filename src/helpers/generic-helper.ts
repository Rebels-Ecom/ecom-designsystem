import { useEffect, useRef, useMemo } from "react";
import { debounce } from "lodash";

const useDebounce = (callback: CallableFunction, delay: number) => {
  const ref = useRef<CallableFunction>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };
    return debounce(func, delay);
  }, []);

  return debouncedCallback;
};

export { useDebounce };
