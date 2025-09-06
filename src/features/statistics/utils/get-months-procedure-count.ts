import { get } from '@/shared/api/get';
import { getCurrentAndPastTwoMonths } from './get-past-two-months';

type GetMonthProceduresCountProps = {
  month: number;
  year: number;
  locale: string;
};

async function getMonthProceduresCount({
  month,
  year,
  locale,
}: GetMonthProceduresCountProps) {
  const { result } = (await get(
    `/api/Statistics/GetNumberOfProcedures?Month=${month}&Year=${year}`,
  )) as { result: number };

  const date = new Date(year, month).toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
  });

  return { name: date, proceduresCount: result };
}

export async function getMonthsProceduresCount(locale: string) {
  const months = getCurrentAndPastTwoMonths(new Date());

  const data: {
    name: string;
    proceduresCount: number;
  }[] = [];

  for (const { month, year } of months) {
    const { name, proceduresCount } = await getMonthProceduresCount({
      month,
      year,
      locale,
    });

    data.push({ name, proceduresCount });
  }

  return data;
}
