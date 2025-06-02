'use client';

import { useEffect, type PropsWithChildren } from 'react';
import { useLocale } from 'next-intl';
import clsx from 'clsx';

import { useSidebarContext } from '@/store/sidebar';
import type { Locale } from '@/i18n/routing';

export default function SidebarWrapper({ children }: PropsWithChildren) {
  const { isOpen, setIsOpen } = useSidebarContext();

  const locale = useLocale() as Locale;

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
        'fixed inset-0 z-50 transition-transform duration-500 ease-in-out md:hidden',
        isOpen
          ? 'translate-x-0'
          : locale === 'en'
            ? 'translate-x-full'
            : '-translate-x-full',
      )}
    >
      {children}
    </aside>
  );
}
