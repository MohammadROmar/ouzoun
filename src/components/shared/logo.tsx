'use client';

import { useTranslations } from 'next-intl';
import type { ComponentPropsWithoutRef } from 'react';

import { Link } from '@/i18n/navigation';
import LogoIcon from '@/assets/icons/logo';

export default function Logo(props: ComponentPropsWithoutRef<'a'>) {
  const t = useTranslations();

  return (
    <Link
      href="/"
      aria-label={t('accessibility.return-to-home')}
      title={t('accessibility.return-to-home')}
      className="flex items-center gap-2"
      {...props}
    >
      <LogoIcon className="size-6" />
      <span className="ltr:font-ubuntu text-xl">
        {t('metadata.root.title')}
      </span>
    </Link>
  );
}
