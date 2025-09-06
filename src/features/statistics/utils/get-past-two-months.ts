export function getCurrentAndPastTwoMonths(
  date: Date,
): { year: number; month: number }[] {
  const result: { year: number; month: number }[] = [];

  for (let i = 0; i < 3; i++) {
    const d = new Date(date);
    d.setMonth(d.getMonth() - i);

    result.push({
      year: d.getFullYear(),
      month: d.getMonth() + 1,
    });
  }

  return result;
}
