import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import AssistantHolidayCard from '@/features/assistants/components/holidays/assistant-holiday-card';
import NoContent from '@/shared/components/no-content';
import { get } from '@/shared/api/get';
import { Holiday } from '@/features/assistants/models/holiday';

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
