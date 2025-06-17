import { getTranslations } from 'next-intl/server';

import type { NavigationLink } from '@/models/navigation-link';

export async function landingNavigation(): Promise<NavigationLink[]> {
  const t = await getTranslations('navigation.landing');

  return [
    { label: t('home'), to: '/' },
    { label: t('capabilities'), to: '/#capabilities' },
    { label: t('role'), to: '/#role' },
    { label: t('overview'), to: '/#overview' },
  ];
}
