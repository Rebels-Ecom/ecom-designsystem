import debounce from 'lodash/debounce'
import { useCallback, useEffect, useMemo, useRef } from 'react'

const useDebounce = (callback: CallableFunction, delay: number) => {
  const ref = useRef<CallableFunction>()

  useEffect(() => {
    ref.current = callback
  }, [callback])

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.()
    }
    return debounce(func, delay)
  }, [])

  return debouncedCallback
}

const useDebounceWithPayload = <T extends (...args: any[]) => any>(callback: T, delay: number) => {
  const callbackRef = useRef(callback)
  const debouncedFnRef = useRef<ReturnType<typeof debounce>>()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    debouncedFnRef.current = debounce((payload: any) => {
      callbackRef.current(payload)
    }, delay)

    return () => {
      debouncedFnRef.current?.cancel()
    }
  }, [delay])

  return useCallback((payload: any) => {
    debouncedFnRef.current?.(payload)
  }, [])
}

export { useDebounce, useDebounceWithPayload }
