'use client';

import {
  createContext,
  useContext,
  useReducer,
  type PropsWithChildren,
} from 'react';

type SidebarState = { isOpen: boolean };
type SidebarStateValue = SidebarState & { setIsOpen(value: boolean): void };

const SidebarContext = createContext<SidebarStateValue | null>(null);

function sidebarReducer(_: SidebarState, action: boolean): SidebarState {
  return { isOpen: action };
}

export default function SidebarContextProvider({
  children,
}: PropsWithChildren) {
  const initialState: SidebarState = { isOpen: false };

  const [sidebarState, dispatch] = useReducer(sidebarReducer, initialState);

  const ctx: SidebarStateValue = {
    isOpen: sidebarState.isOpen,
    setIsOpen(vlaue) {
      dispatch(vlaue);
    },
  };

  return (
    <SidebarContext.Provider value={ctx}>{children}</SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const sidebarContext = useContext(SidebarContext);

  if (sidebarContext === null) {
    throw new Error('Sidebar context is null');
  }

  return sidebarContext;
}
