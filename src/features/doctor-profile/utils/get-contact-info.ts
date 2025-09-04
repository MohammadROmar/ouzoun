import EmailIcon from '@/assets/icons/email';
import MobileIcon from '@/assets/icons/mobile';
import { User } from '@/core/models/user';
import type { InfoCardDetailProps } from '../models/info-card-detail';

export function getContactInfo(
  doctor: User,
  t: (key: string) => string,
): InfoCardDetailProps[] {
  return [
    {
      icon: EmailIcon,
      title: t('email'),
      value: doctor.email,
    },
    {
      icon: MobileIcon,
      title: t('phone'),
      value: doctor.phoneNumber ? doctor.phoneNumber : t('unknow'),
    },
  ];
}
