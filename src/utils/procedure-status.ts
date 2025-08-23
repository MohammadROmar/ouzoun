import HourglassIcon from '@/assets/icons/hourglass';
import InProgressIcon from '@/assets/icons/in-progress';
import checkMarkIcon from '@/assets/icons/check-mark';
import BanIcon from '@/assets/icons/ban';
import xCircleIcon from '@/assets/icons/x-circle';

export function getProcedureStatus(status: number) {
  return status === 0 || status === 1
    ? 'request-sent'
    : status === 2
      ? 'in-progress'
      : status === 3
        ? 'done'
        : status === 4
          ? 'declined'
          : 'cancelled';
}

export function getProcedureIcon(status: number) {
  return status === 0 || status === 1
    ? HourglassIcon
    : status === 2
      ? InProgressIcon
      : status === 3
        ? checkMarkIcon
        : status === 4
          ? BanIcon
          : xCircleIcon;
}
