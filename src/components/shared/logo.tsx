'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import clsx from 'clsx';

import LogoIcon from '@/assets/icons/logo';
import type { Locale } from '@/i18n/routing';
import { ComponentPropsWithoutRef } from 'react';

export default function Logo(props: ComponentPropsWithoutRef<'a'>) {
  const locale = useLocale() as Locale;
  const t = useTranslations();

  return (
    <Link
      href={`/${locale}`}
      aria-label={t('accessibility.return-to-home')}
      title={t('accessibility.return-to-home')}
      className="flex items-center gap-2"
      {...props}
    >
      <LogoIcon className="size-6" />
      <span className={clsx('text-xl', locale === 'en' && 'font-ubuntu')}>
        {t('metadata.root.title')}
      </span>
    </Link>
  );
}
