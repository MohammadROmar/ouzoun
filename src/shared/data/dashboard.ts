import { SVGProps, type FC } from 'react';
import { getTranslations } from 'next-intl/server';

import StatisticsIcon from '@/assets/icons/statistics';
import KitIcon from '@/assets/icons/kit';
import ToolsIcon from '@/assets/icons/tools';
import ImplantIcon from '@/assets/icons/implant';
import AssistantIcon from '@/assets/icons/assistant';
import UserIcon from '@/assets/icons/user';
import NotificationIcon from '@/assets/icons/notifications';
import type { NavigationLink } from '@/core/models/navigation-link';

export type DashboardNavigationLink = {
  icon: FC<SVGProps<SVGElement>>;
} & NavigationLink;

export async function dashboardNavigation(): Promise<
  DashboardNavigationLink[]
> {
  const t = await getTranslations('navigation.dashboard');

  return [
    { label: t('statistics'), to: '/dashboard', icon: StatisticsIcon },
    { label: t('kits'), to: '/kits', icon: KitIcon },
    { label: t('tools'), to: '/tools', icon: ToolsIcon },
    { label: t('implants'), to: '/implants', icon: ImplantIcon },
    { label: t('assistants'), to: '/assistants', icon: AssistantIcon },
    { label: t('notifications'), to: '/notifications', icon: NotificationIcon },
    { label: t('account'), to: '/account', icon: UserIcon },
  ];
}
