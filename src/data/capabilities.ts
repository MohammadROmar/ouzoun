import type { ElementType } from 'react';

import DentistIcon from '@/assets/icons/dentist';
import EquipmentIcon from '@/assets/icons/equipment';
import ScheduleIcon from '@/assets/icons/schedule';
import ToolsIcon from '@/assets/icons/tools';

export type Capability = { title: string; body: string; icon: ElementType };

export function capabilities(t: (key: string) => string) {
  const CAPABILITIES_INDICES = [0, 1, 2, 3];

  const capabilitysHeading = CAPABILITIES_INDICES.map((i) =>
    t(`heading-list.capability${i}`),
  );
  const capabilitysBody = CAPABILITIES_INDICES.map((i) =>
    t(`body-list.capability${i}`),
  );
  const icons = [ScheduleIcon, ToolsIcon, DentistIcon, EquipmentIcon];

  const capabilitys: Capability[] = CAPABILITIES_INDICES.map((i) => ({
    title: capabilitysHeading[i],
    body: capabilitysBody[i],
    icon: icons[i],
  }));

  return capabilitys;
}
