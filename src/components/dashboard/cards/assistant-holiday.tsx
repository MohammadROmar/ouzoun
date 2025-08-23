import { Link } from '@/i18n/navigation';
import { Holiday } from '@/models/holiday';
import {
  getHolidayStatus,
  getHolidayIcon,
} from '@/utils/details/holiday-status';

type AssistantHolidayCardProps = {
  holiday: Holiday;
  t: (key: string) => string;
};

function AssistantHolidayCard({ holiday, t }: AssistantHolidayCardProps) {
  const Icon = getHolidayIcon(holiday.status);

  return (
    <li className="bg-green-light relative z-0 overflow-hidden rounded-xl p-2 text-black">
      <Link
        href={`/assistants/holidays/${holiday.id}`}
        className="flex flex-col gap-2"
      >
        <div>
          <h2 className="ltr:font-ubuntu text-green text-2xl">
            {holiday.userName ?? 'Unknown Assistant'}
          </h2>
          <p className="opacity-85">{holiday.note}</p>
        </div>

        <p className="text-sm">{t(getHolidayStatus(holiday.status))}</p>

        <Icon className="modal-icon text-green top-1/6 h-6/7 translate-x-2 -rotate-12 opacity-50 rtl:-translate-x-2" />
      </Link>
    </li>
  );
}

export default AssistantHolidayCard;
