import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import HolidayCalendar from '@/features/assistants/components/holidays/calender';
import HolidayStatus from '@/features/assistants/components/holidays/status';
import ErrorHandler from '@/shared/components/error-handler';
import { get } from '@/shared/api/get';
import { Holiday } from '@/features/assistants/models/holiday';

type LeaveRequestPageProps = {
  params: Promise<{ locale: string; id: string }>;
};

async function LeaveRequestPage({ params }: LeaveRequestPageProps) {
  const { id } = await params;

  const responseData = await get<Holiday>(`/api/holidays/${id}`);

  if (responseData.message !== 'success') {
    return (
      <ErrorHandler
        message={responseData.message}
        status={responseData.data.status}
      />
    );
  }

  const holiday = responseData.data;

  const t = await getTranslations('assistants-page.holidays');

  return (
    <>
      <Title title={t('holiday.title')} />

      <section className="mt-4 space-y-2">
        <h2 className="ltr:font-ubuntu text-2xl md:text-3xl">
          <span className="text-green">{holiday.userName}</span>{' '}
          <span className="text-lg md:text-xl">{t('holiday.request')}</span>
        </h2>

        <p>{holiday.note}</p>
      </section>

      <HolidayStatus holiday={holiday} />

      <HolidayCalendar holiday={holiday} />
    </>
  );
}

export default LeaveRequestPage;
