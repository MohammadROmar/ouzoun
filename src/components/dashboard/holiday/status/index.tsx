'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import ChangeStatus from './change';
import { getHolidayStatus } from '@/utils/details/holiday-status';
import { Holiday } from '@/models/holiday';

type HolidayStatusProps = { holiday: Holiday };

function HolidayStatus({ holiday }: HolidayStatusProps) {
  const [open, setOpen] = useState(false);

  const t = useTranslations('assistants-page.holidays');

  return (
    <section className="mt-4 flex items-center gap-4">
      <ChangeStatus
        holiday={holiday}
        open={open}
        close={() => setOpen(false)}
        t={t}
      />

      <h3 className="ltr:font-ubuntu text-xl md:text-2xl">
        <span className="text-green">{t('holiday.status')}:</span>{' '}
        <span className="text-lg md:text-xl">
          {getHolidayStatus(holiday.status, t)}
        </span>
      </h3>

      <button onClick={() => setOpen(true)} className="button max-sm:text-sm">
        {t('holiday.change-status')}
      </button>
    </section>
  );
}

export default HolidayStatus;
