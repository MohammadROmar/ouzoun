import { getLocale } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import ProcedureIcon from '@/assets/icons/procedure';
import { formatDate } from '@/utils/format-date';
import { DetailedProcedure } from '@/models/detailed-procedure';
import { Link } from '@/i18n/navigation';
import ChangeProcedureStstus from './change-status';

type ProcedureInfoProps = {
  procedure: DetailedProcedure;
  t: (key: string) => string;
};

type ProcedureInfoItemProps = { label: string } & PropsWithChildren;

async function ProcedureInfo({ procedure, t }: ProcedureInfoProps) {
  const locale = await getLocale();

  return (
    <section className="mt-4 space-y-2">
      <div className="text-green border-b-gray/50 flex items-center gap-4 border-b">
        <ProcedureIcon className="size-11" />
        <h2 className="ltr:font-ubuntu text-3xl">
          {t('procedure-details.procedure-info')}
        </h2>
      </div>

      <ul className="space-y-2">
        <ProcedureInfoItem label={t('procedure-details.doctor')}>
          <div className="flex items-center gap-2 max-sm:justify-between">
            <p>{procedure.doctor.userName}</p>
            <Link
              href={`/assistants/assign/${procedure.id}/${procedure.doctorId}`}
              className="button max-sm:text-sm"
            >
              {t('procedure-details.more')}
            </Link>
          </div>
        </ProcedureInfoItem>

        <ProcedureInfoItem label={t('procedure-details.clinic')}>
          <p>
            {procedure.doctor.clinic?.name ?? t('procedure-details.unknown')}
          </p>
        </ProcedureInfoItem>

        <ProcedureInfoItem label={t('procedure-details.date')}>
          <p>{formatDate(new Date(procedure.date), locale)}</p>
        </ProcedureInfoItem>

        <ProcedureInfoItem label={t('procedure-details.category')}>
          <p>
            {t(
              `procedure-details.${procedure.categoryId === 1 ? 'surgery' : 'recovery'}`,
            )}
          </p>
        </ProcedureInfoItem>

        <ChangeProcedureStstus status={procedure.status} />
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
