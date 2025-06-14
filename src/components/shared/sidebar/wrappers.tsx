'use client';

import { useEffect, type PropsWithChildren } from 'react';
import clsx from 'clsx';

import { useSidebarContext } from '@/store/sidebar';

type SidebarWrapperProps = { isAuthenticated: boolean } & PropsWithChildren;

function SidebarWrapper({ isAuthenticated, children }: SidebarWrapperProps) {
  const { isOpen, setIsOpen } = useSidebarContext();

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [setIsOpen]);

  return (
    <aside
      id="sidebar"
      aria-label="Sidebar"
      className={clsx(
        'md:rtl:border-l-gray/25 md:ltr:border-r-gray/25 fixed z-50 transition-transform duration-500 ease-in-out md:ltr:border-r md:rtl:border-l',
        isOpen
          ? 'translate-x-0'
          : 'max-md:ltr:translate-x-full max-md:rtl:-translate-x-full',
        !isAuthenticated && 'inset-0 md:hidden',
        isAuthenticated &&
          'max-md:inset-0 md:top-0 md:bottom-0 md:w-64 md:translate-x-0 md:ltr:left-0 md:rtl:right-0',
      )}
    >
      {children}
    </aside>
  );
}

export default SidebarWrapper;
