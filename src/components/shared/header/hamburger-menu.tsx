'use client';

import { useTranslations } from 'next-intl';

import { useSidebarContext } from '@/store/theme-provider';
import HamburgerMenuIcon from '@/assets/icons/hamburger-menu';

export default function HamburgerMenu() {
  const { isOpen, setIsOpen } = useSidebarContext();
  const t = useTranslations('accessibility');

  return (
    <button
      className="cursor-pointer md:hidden"
      onClick={() => setIsOpen(true)}
      aria-label={t('hamburger-menu')}
      title={t('hamburger-menu')}
      aria-controls="sidebar"
      aria-expanded={isOpen}
    >
      <HamburgerMenuIcon className="size-5" />
    </button>
  );
}
