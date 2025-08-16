'use client';

import { useRef, useEffect, type DependencyList } from 'react';

export function useDialog(open: boolean, deps: DependencyList = []) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open, ...deps]);

  return dialogRef;
}
