import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import HolidayCalendar from '@/components/dashboard/holiday/calendar';
import HolidayStatus from '@/components/dashboard/holiday/status';
import { get } from '@/actions/get';
import { Holiday } from '@/models/holiday';

type LeaveRequestPageProps = {
  params: Promise<{ locale: string; id: string }>;
};

async function LeaveRequestPage({ params }: LeaveRequestPageProps) {
  const { id } = await params;

  const holiday = (await get(`/api/holidays/${id}`)) as Holiday;

  if (!holiday) return notFound();

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
