import { useEffect, RefObject } from 'react';

type UseCloseProps = {
  ref: RefObject<HTMLElement | null>;
  rootRef: RefObject<HTMLElement | null>;
  close: () => void;
};

export function useClose({ ref, rootRef, close }: UseCloseProps) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const clickedOutside = !ref.current?.contains(event.target as Node);
      const clickedOnRoot = rootRef.current?.contains(event.target as Node);

      if (clickedOutside && !clickedOnRoot) {
        close();
      }
    }

    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        close();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [ref, rootRef, close]);
}
