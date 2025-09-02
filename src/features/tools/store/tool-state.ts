'use client';

import { createContext, useContext } from 'react';

import type { ToolActionState } from '@/features/tools/models/tool-action-state';

export const ToolFormStateContext = createContext<ToolActionState | null>(null);

export function useToolState() {
  const state = useContext(ToolFormStateContext);

  if (!state) {
    throw new Error('Tool state context is null');
  }

  return state;
}
