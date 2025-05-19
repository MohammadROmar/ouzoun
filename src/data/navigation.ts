import type { Locale } from '@/i18n/routing';
import type { NavigationLink } from '@/models/navigation-link';

export function landingNavigation(
  locale: Locale,
  t: (p: string) => string,
): NavigationLink[] {
  return [
    { label: t('navigation.landing.home'), to: `${locale}/` },
    { label: t('navigation.landing.services'), to: `/${locale}/#services` },
    { label: t('navigation.landing.about'), to: `/${locale}/#about` },
    { label: t('navigation.landing.why-us'), to: `/${locale}/#why-us` },
  ];
}
