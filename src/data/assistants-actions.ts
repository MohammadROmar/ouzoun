import LeaveIcon from '@/assets/icons/leave';
import RegisterIcon from '@/assets/icons/register';
import SurgeonIcon from '@/assets/icons/surgeon';

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
      title: t('leave-requests-action'),
      description: t('leave-requests.description'),
      to: '/assistants/leave-requests',
    },
  ];
}
