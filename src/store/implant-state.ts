'use client';

import { createContext, useContext } from 'react';

import type { ImplantActionState } from '@/actions/implant';

export const ImplantFormStateContext = createContext<ImplantActionState | null>(
  null,
);

export function useImplantState() {
  const state = useContext(ImplantFormStateContext);

  if (!state) {
    throw new Error('Implant state context is null');
  }

  return state;
}
