import { type FC, SVGProps } from 'react';
import { getLocale, getTranslations } from 'next-intl/server';

import StatisticsIcon from '@/assets/icons/statistics';
import KitIcon from '@/assets/icons/kit';
import ToolsIcon from '@/assets/icons/tools';
import ImplantIcon from '@/assets/icons/implant';
import type { NavigationLink } from '@/models/navigation-link';

export type DashboardNavigationLink = {
  icon: FC<SVGProps<SVGSVGElement>>;
} & NavigationLink;

export async function dashboardNavigation(): Promise<
  DashboardNavigationLink[]
> {
  const locale = await getLocale();
  const t = await getTranslations('navigation.dashboard');

  return [
    {
      label: t('statistics'),
      to: `/${locale}/dashboard`,
      icon: StatisticsIcon,
    },
    { label: t('kits'), to: `/${locale}/kits`, icon: KitIcon },
    { label: t('tools'), to: `/${locale}/tools`, icon: ToolsIcon },
    { label: t('implants'), to: `/${locale}/implants`, icon: ImplantIcon },
  ];
}
