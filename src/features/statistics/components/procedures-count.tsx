import { getLocale } from 'next-intl/server';

import CustomLineChart from './line-chart';
import { getMonthsProceduresCount } from '../utils/get-months-procedure-count';

type ProceduresCountProps = { t: (key: string) => string };

async function ProceduresCount({ t }: ProceduresCountProps) {
  const locale = await getLocale();
  const data = await getMonthsProceduresCount(locale);

  return (
    <div className="card-shadow bg-bg-primary p-2 md:p-3">
      <h2 className="ltr:font-ubuntu mb-4 text-xl">{t('procedures')}</h2>

      <div dir="ltr" className="h-64 w-full overflow-hidden">
        <CustomLineChart name={t('procedure-count')} data={data} />
      </div>
    </div>
  );
}

export default ProceduresCount;
