import type { ElementType } from 'react';
import { getTranslations } from 'next-intl/server';

import DentistIcon from '@/assets/icons/dentist';
import EquipmentIcon from '@/assets/icons/equipment';
import PerformanceIcon from '@/assets/icons/performance';
import OperationIcon from '@/assets/icons/operation';

export type Service = { title: string; body: string; icon: ElementType };

export async function services() {
  const t = await getTranslations('landing-page.services');

  const SERVICES_INDICES = [0, 1, 2, 3];

  const servicesHeading = SERVICES_INDICES.map((i) =>
    t(`heading-list.service${i}`),
  );
  const servicesBody = SERVICES_INDICES.map((i) => t(`body-list.service${i}`));
  const icons = [DentistIcon, EquipmentIcon, PerformanceIcon, OperationIcon];

  const services: Service[] = SERVICES_INDICES.map((i) => ({
    title: servicesHeading[i],
    body: servicesBody[i],
    icon: icons[i],
  }));

  return services;
}
