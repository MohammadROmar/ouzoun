import type { Locale } from '@/i18n/routing';
import type { NavigationLink } from '@/models/navigation-link';

export function landingNavigation(
  locale: Locale,
  t: (p: string) => string,
): NavigationLink[] {
  return [
    { label: t('Navigation.Landing.home'), to: `${locale}/` },
    { label: t('Navigation.Landing.services'), to: `/${locale}/#services` },
    { label: t('Navigation.Landing.about'), to: `/${locale}/#about` },
    { label: t('Navigation.Landing.why-us'), to: `/${locale}/#why-us` },
  ];
}
