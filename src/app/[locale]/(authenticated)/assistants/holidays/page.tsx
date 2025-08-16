import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';
import Title from '@/components/dashboard/title';
import { get } from '@/actions/get';
import { getHolidayStatus } from '@/utils/details/holiday-status';
import { Holiday } from '@/models/holiday';

export default async function AssistantsLeaveRequestsPage() {
  const holidays = (await get('/api/holidays')) as Holiday[];

  const t = await getTranslations('assistants-page.holidays');

  return (
    <section>
      <Title title={t('title')} />

      <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {holidays.map((holiday) => (
          <li key={holiday.id} className="bg-green-light rounded-xl p-2">
            <Link
              href={`/assistants/holidays/${holiday.id}`}
              className="flex flex-col"
            >
              <h2 className="text-green ltr:font-ubuntu text-xl">
                {holiday.userName ?? 'Unknown Assistant'}
              </h2>
              <p className="mt-2 text-black">{holiday.note}</p>
              <p className="text-sm text-black/75">
                {getHolidayStatus(holiday.status, t)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
