export function formatDate(date: Date, locale: string) {
  const formattedDate = date.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return formattedDate;
}
