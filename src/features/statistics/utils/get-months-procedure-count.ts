import { get } from '@/shared/api/get';
import { getCurrentAndPastTwoMonths } from './get-past-two-months';

type Error = {
  message: 'fetch-error' | 'server-connection';
  data: { status: number };
};
type Success = {
  message: 'success';
  data: { name: string; proceduresCount: number };
};

type MonthProceduresCount = Error | Success;

type GetMonthProceduresCountProps = {
  month: number;
  year: number;
  locale: string;
};

async function getMonthProceduresCount({
  month,
  year,
  locale,
}: GetMonthProceduresCountProps): Promise<MonthProceduresCount> {
  const responseData = await get<{ result: number }>(
    `/api/Statistics/GetNumberOfProcedures?Month=${month}&Year=${year}`,
  );

  if (responseData.message !== 'success') {
    return {
      message: responseData.message,
      data: { status: responseData.data.status },
    };
  }

  const result = responseData.data.result;

  const date = new Date(year, month).toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
  });

  return { message: 'success', data: { name: date, proceduresCount: result } };
}

type OverallSuccess = {
  message: 'success';
  data: { name: string; proceduresCount: number }[];
};

type MonthsProceduresCount = Error | OverallSuccess;

export async function getMonthsProceduresCount(
  locale: string,
): Promise<MonthsProceduresCount> {
  const months = getCurrentAndPastTwoMonths(new Date());

  const data: {
    name: string;
    proceduresCount: number;
  }[] = [];

  for (const { month, year } of months) {
    const responseData = await getMonthProceduresCount({
      month,
      year,
      locale,
    });

    if (responseData.message !== 'success') {
      return {
        message: responseData.message,
        data: { status: responseData.data.status },
      };
    }

    data.push({ ...responseData.data });
  }

  return { message: 'success', data };
}
