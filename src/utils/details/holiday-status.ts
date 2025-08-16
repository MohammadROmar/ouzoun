export function getHolidayStatus(status: number, t: (key: string) => string) {
  const statusAsString =
    status === 1
      ? t('status.pending')
      : status === 2
        ? t('status.accepted')
        : t('status.rejected');

  return statusAsString;
}
