import { getLocale } from 'next-intl/server';

import { Link } from '@/i18n/navigation';
import {
  getProcedureStatus,
  getProcedureIcon,
} from '../../utils/get-procedure-status';
import { formatDate } from '@/shared/utils/format-date';
import { Procedure } from '../../models/procedure';

type ProcedureCardProps = { procedure: Procedure; t: (key: string) => string };

async function ProcedureCard({ procedure, t }: ProcedureCardProps) {
  const locale = await getLocale();

  const { id, date, doctor, assistants, status } = procedure;
  const procedureDate = new Date(date);
  const Icon = getProcedureIcon(status);

  return (
    <li>
      <Link
        href={`/assistants/assign/${id}`}
        className="bg-green-light relative z-0 flex size-full flex-col justify-between gap-2 overflow-hidden rounded-xl p-2 text-black"
      >
        <div>
          <h2 className="ltr:font-ubuntu text-green text-2xl">{`${t('dr')} ${doctor.userName}`}</h2>
          {doctor.clinic !== null && (
            <p className="text-sm opacity-85">{doctor.clinic.name}</p>
          )}
        </div>

        <div>
          <time dateTime={procedureDate.toISOString()}>
            {formatDate(procedureDate, locale)}
          </time>
          <p>
            {t('procedure-details.assistants.title')}: {assistants.length}
          </p>
        </div>

        <p>
          {t(`procedure-details.info.status.${getProcedureStatus(status)}`)}
        </p>

        <Icon className="modal-icon text-green top-1/6 h-3/4 translate-x-6 -rotate-12 opacity-50 rtl:-translate-x-6" />
      </Link>
    </li>
  );
}

export default ProcedureCard;
