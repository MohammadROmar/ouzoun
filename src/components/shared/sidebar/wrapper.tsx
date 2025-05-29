'use client';

import { useEffect, type PropsWithChildren } from 'react';
import clsx from 'clsx';

import { useSidebarContext } from '@/store/theme-provider';

export default function SidebarWrapper({ children }: PropsWithChildren) {
  const { isOpen, setIsOpen } = useSidebarContext();

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <aside
      id="sidebar"
      aria-label="Sidebar"
      className={clsx(
        'fixed inset-0 z-50 transition-transform duration-500 md:hidden',
        isOpen ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      {children}
    </aside>
  );
}
