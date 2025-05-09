import { flushSync } from 'react-dom';
import { useCallback } from 'react';

type ViewTransitionCallback = (...args: any[]) => void | Promise<void>;

export function useViewTransition(callback: ViewTransitionCallback) {
  return useCallback(
    (...args: any[]) =>
      document.startViewTransition(() => flushSync(() => callback(...args))),
    [callback]
  );
}
