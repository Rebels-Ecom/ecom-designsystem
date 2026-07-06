import type { Ref, RefObject } from 'react'

/**
 * Combine several refs into one callback ref, so a component can keep its own internal ref to a node
 * while still forwarding the consumer's `ref` (and any extra setup callback) to the same node. Accepts
 * callback refs, ref objects, `null`, and `undefined`; empty ones are skipped.
 *
 * Usage: `<img ref={mergeRefs(internalRef, ref)} />`.
 */
export function mergeRefs<T>(
  ...refs: (Ref<T> | RefObject<T | null> | null | undefined)[]
): (node: T | null) => void {
  return (node) => {
    for (const ref of refs) {
      if (!ref) continue
      if (typeof ref === 'function') {
        ref(node)
      } else {
        ;(ref as { current: T | null }).current = node
      }
    }
  }
}
