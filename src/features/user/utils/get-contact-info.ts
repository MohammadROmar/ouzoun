import EmailIcon from '@/assets/icons/email';
import MobileIcon from '@/assets/icons/mobile';
import { User } from '@/core/models/user';
import type { InfoCardDetailProps } from '../models/info-card-detail';

export function getContactInfo(
  user: User,
  t: (key: string) => string,
): InfoCardDetailProps[] {
  return [
    {
      icon: EmailIcon,
      title: t('email'),
      value: user.email,
    },
    {
      icon: MobileIcon,
      title: t('phone'),
      value: user.phoneNumber ? user.phoneNumber : t('unknow'),
    },
  ];
}
