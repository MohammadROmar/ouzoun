export function formatDate(date: Date, locale: string) {
  const formattedDate = date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return formattedDate;
}
