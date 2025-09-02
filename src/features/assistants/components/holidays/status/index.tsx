'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import ChangeStatus from './change';
import { getHolidayStatus } from '@/features/assistants/utils/get-holiday-status';
import { Holiday } from '@/features/assistants/models/holiday';

type HolidayStatusProps = { holiday: Holiday };

function HolidayStatus({ holiday }: HolidayStatusProps) {
  const [open, setOpen] = useState(false);

  const t = useTranslations('assistants-page.holidays');

  const canChangeStatus = holiday.status === 1;

  return (
    <section className="mt-4 flex items-center gap-4">
      {canChangeStatus && (
        <ChangeStatus
          holiday={holiday}
          open={open}
          close={() => setOpen(false)}
          t={t}
        />
      )}

      <h3 className="ltr:font-ubuntu text-xl md:text-2xl">
        <span className="text-green">{t('holiday.status')}:</span>{' '}
        <span className="text-lg md:text-xl">
          {t(getHolidayStatus(holiday.status))}
        </span>
      </h3>

      {canChangeStatus && (
        <button onClick={() => setOpen(true)} className="button max-sm:text-sm">
          {t('holiday.change-status')}
        </button>
      )}
    </section>
  );
}

export default HolidayStatus;
