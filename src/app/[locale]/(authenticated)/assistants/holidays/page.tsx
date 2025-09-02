import { getTranslations } from 'next-intl/server';

import Title from '@/components/dashboard/title';
import AssistantHolidayCard from '@/components/dashboard/cards/assistant-holiday';
import NoContent from '@/components/no-content';
import { get } from '@/actions/get';
import { Holiday } from '@/models/holiday';

export default async function AssistantsLeaveRequestsPage() {
  const holidays = (await get('/api/holidays')) as Holiday[];

  const t = await getTranslations('assistants-page.holidays');

  return (
    <>
      <Title title={t('title')} />

      <section className="mt-4">
        {holidays.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {holidays.map((holiday) => (
              <AssistantHolidayCard key={holiday.id} holiday={holiday} t={t} />
            ))}
          </ul>
        ) : (
          <NoContent />
        )}
      </section>
    </>
  );
}
