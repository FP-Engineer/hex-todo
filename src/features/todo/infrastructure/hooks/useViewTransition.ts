import { flushSync } from 'react-dom';
import { useCallback } from 'react';

type ViewTransitionCallback = (...args: unknown[]) => void | Promise<void>;

export function useViewTransition(callback: ViewTransitionCallback) {
  return useCallback(
    (...args: unknown[]) =>
      document.startViewTransition(() => flushSync(() => callback(...args))),
    [callback]
  );
}
