import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import clsx from 'clsx';

import LogoIcon from '@/assets/icons/logo';
import type { Locale } from '@/i18n/routing';

export default async function Logo() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  return (
    <Link href={`/${locale}`} className="flex items-center gap-2">
      <LogoIcon className="size-6" />
      <p className={clsx('text-xl', locale === 'en' && 'font-ubuntu')}>
        {t('metadata.root.title')}
      </p>
    </Link>
  );
}
