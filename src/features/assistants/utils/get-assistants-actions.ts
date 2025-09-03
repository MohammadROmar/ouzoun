import LeaveIcon from '@/assets/icons/leave';
import RegisterIcon from '@/assets/icons/register';
import SurgeonIcon from '@/assets/icons/surgeon';
import DoctorsIcon from '@/assets/icons/doctors';

export function getAssistantsActions(t: (key: string) => string) {
  return [
    {
      icon: RegisterIcon,
      title: t('register-action'),
      description: t('register.description'),
      to: '/assistants/register',
    },
    {
      icon: SurgeonIcon,
      title: t('assign-action'),
      description: t('assign.description'),
      to: '/assistants/assign',
    },
    {
      icon: LeaveIcon,
      title: t('holidays-action'),
      description: t('holidays.description'),
      to: '/assistants/holidays',
    },
    {
      icon: DoctorsIcon,
      title: t('all.title'),
      description: t('all.description'),
      to: '/assistants/all',
    },
  ];
}
