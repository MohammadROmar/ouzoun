import { getLocale, getTranslations } from 'next-intl/server';

import type { Locale } from '@/i18n/routing';
import type { NavigationLink } from '@/models/navigation-link';

export async function landingNavigation(): Promise<NavigationLink[]> {
  const t = await getTranslations('navigation.landing');
  const locale = (await getLocale()) as Locale;

  return [
    { label: t('home'), to: `/${locale}/` },
    {
      label: t('capabilities'),
      to: `/${locale}/#capabilities`,
    },
    { label: t('role'), to: `/${locale}/#role` },
    { label: t('overview'), to: `/${locale}/#overview` },
  ];
}
