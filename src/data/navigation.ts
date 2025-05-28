import type { Locale } from '@/i18n/routing';
import type { NavigationLink } from '@/models/navigation-link';

export function landingNavigation(
  locale: Locale,
  t: (p: string) => string,
): NavigationLink[] {
  return [
    { label: t('navigation.landing.home'), to: `${locale}/` },
    {
      label: t('navigation.landing.capabilities'),
      to: `/${locale}/#capabilities`,
    },
    { label: t('navigation.landing.role'), to: `/${locale}/#role` },
    { label: t('navigation.landing.overview'), to: `/${locale}/#overview` },
  ];
}
