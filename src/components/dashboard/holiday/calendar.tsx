'use client';

import { useLocale, useTranslations } from 'next-intl';
import { DateRangePicker } from 'react-date-range';
import { enUS, ar } from 'date-fns/locale';
import { differenceInDays, differenceInHours } from 'date-fns';

import { Holiday } from '@/models/holiday';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './calendar.css';
import { formatDate } from '@/utils/format-date';

type HolidayCalendarProps = { holiday: Holiday };

function HolidayCalendar({ holiday }: HolidayCalendarProps) {
  const locale = useLocale();
  const t = useTranslations('assistants-page.holidays.holiday');

  const startDate = new Date(holiday.from);
  const endDate = new Date(holiday.to);

  const hours = differenceInHours(endDate, startDate);
  const days = differenceInDays(endDate, startDate);

  return (
    <section className="mt-4">
      <h3 className="ltr:font-ubuntu mb-2 text-xl md:text-2xl">
        {`${t('duration')}: `}
        <span className="ltr:font-montserrat text-green">
          {days === 0 ? `${hours} ${t('hours')}` : `${days + 1} ${t('days')}`}
        </span>
      </h3>

      <p className="sr-only">
        {t('sr', {
          from: formatDate(startDate, locale),
          to: formatDate(endDate, locale),
        })}
      </p>

      <div aria-hidden>
        <DateRangePicker
          ranges={[{ startDate, endDate }]}
          onChange={() => {}}
          onRangeFocusChange={() => {}}
          editableDateInputs={false}
          className="sm"
          dragSelectionEnabled={false}
          dateDisplayFormat={days === 0 ? 'MMMM d, yyyy HH:mm' : 'MMMM d, yyyy'}
          locale={locale === 'ar' ? ar : enUS}
        />
      </div>
    </section>
  );
}

export default HolidayCalendar;
