'use client';

import { useTranslations } from 'next-intl';

import { useSidebarContext } from '@/store/theme-provider';
import XIcon from '@/assets/icons/x';

export default function CloseSidebarButton() {
  const { setIsOpen } = useSidebarContext();
  const t = useTranslations('accessibility');

  return (
    <button
      onClick={() => setIsOpen(false)}
      aria-label={t('sidebar-close')}
      title={t('sidebar-close')}
      className="cursor-pointer"
    >
      <XIcon className="size-4" />
    </button>
  );
}
