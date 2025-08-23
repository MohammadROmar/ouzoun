import HourglassIcon from '@/assets/icons/hourglass';
import checkMarkIcon from '@/assets/icons/check-mark';
import xCircleIcon from '@/assets/icons/x-circle';

export function getHolidayStatus(status: number) {
  return status === 1
    ? 'status.pending'
    : status === 2
      ? 'status.accepted'
      : 'status.rejected';
}

export function getHolidayIcon(status: number) {
  return status === 1
    ? HourglassIcon
    : status === 2
      ? checkMarkIcon
      : xCircleIcon;
}
