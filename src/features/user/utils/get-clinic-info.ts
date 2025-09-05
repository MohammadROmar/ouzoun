import ClinicIcon from '@/assets/icons/clinic';
import AddressIcon from '@/assets/icons/address';
import { Clinic } from '@/core/models/clinic';
import type { InfoCardDetailProps } from '../models/info-card-detail';

export function getClinicInfo(
  clinic: Clinic,
  t: (key: string) => string,
): InfoCardDetailProps[] {
  return [
    {
      icon: ClinicIcon,
      title: t('clinic'),
      value: clinic.name,
    },
    {
      icon: AddressIcon,
      title: t('address'),
      value: clinic.address,
    },
  ];
}
