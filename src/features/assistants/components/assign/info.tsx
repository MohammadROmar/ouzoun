import { getLocale, getTranslations } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import { Link } from '@/i18n/navigation';
import ProcedureIcon from '@/assets/icons/procedure';
import ManageProcedure from './manage-procedure';
import { get } from '@/shared/api/get';
import { formatDate } from '@/shared/utils/format-date';
import { getProcedureStatus } from '../../utils/get-procedure-status';
import { DetailedProcedure } from '../../models/detailed-procedure';

type ProcedureInfoProps = { procedure: DetailedProcedure };

type ProcedureInfoItemProps = { label: string } & PropsWithChildren;

async function ProcedureInfo({ procedure }: ProcedureInfoProps) {
  const locale = await getLocale();

  const t = await getTranslations(
    'assistants-page.assign.procedure-details.info',
  );

  const assistants = await get('/api/users?role=AssistantDoctor');

  return (
    <section className="mt-4 space-y-2">
      <div className="border-b-gray/50 flex items-center justify-between border-b">
        <div className="text-green flex items-center gap-4">
          <ProcedureIcon className="size-11" />
          <h2 className="ltr:font-ubuntu text-3xl">{t('title')}</h2>
        </div>

        <ManageProcedure procedure={procedure} assistants={assistants} />
      </div>

      <ul className="space-y-2">
        <ProcedureInfoItem label={t('doctor')}>
          <div className="flex items-center gap-2 max-sm:justify-between">
            <p>{procedure.doctor.userName}</p>
            <Link
              href={`/assistants/assign/${procedure.id}/${procedure.doctorId}`}
              className="button max-sm:text-sm"
            >
              {t('more')}
            </Link>
          </div>
        </ProcedureInfoItem>

        <ProcedureInfoItem label={t('clinic')}>
          <p>{procedure.doctor.clinic?.name ?? t('unknown')}</p>
        </ProcedureInfoItem>

        <ProcedureInfoItem label={t('date')}>
          <p>{formatDate(new Date(procedure.date), locale)}</p>
        </ProcedureInfoItem>

        <ProcedureInfoItem label={t('category.title')}>
          <p>
            {t(
              `category.${procedure.categoryId === 1 ? 'surgery' : 'recovery'}`,
            )}
          </p>
        </ProcedureInfoItem>

        <ProcedureInfoItem label={t('status.title')}>
          <p>{t(`status.${getProcedureStatus(procedure.status)}`)}</p>
        </ProcedureInfoItem>
      </ul>
    </section>
  );
}

export function ProcedureInfoItem({ label, children }: ProcedureInfoItemProps) {
  return (
    <li className="flex gap-4 max-sm:flex-col max-sm:gap-0 sm:items-center sm:justify-between">
      <p className="text-gray">{label}</p>
      {children}
    </li>
  );
}

export default ProcedureInfo;
