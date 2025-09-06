import { getLocale } from 'next-intl/server';

import CustomLineChart from './line-chart';
import { getMonthsProceduresCount } from '../utils/get-months-procedure-count';
import { ErrorText } from '@/shared/components/error';

type ProceduresCountProps = { t: (key: string) => string };

async function ProceduresCount({ t }: ProceduresCountProps) {
  const locale = await getLocale();
  const responseData = await getMonthsProceduresCount(locale);

  let child = <ErrorText message={responseData.message} />;

  if (responseData.message === 'success') {
    child = (
      <CustomLineChart name={t('procedure-count')} data={responseData.data} />
    );
  }

  return (
    <div className="card-shadow bg-bg-primary p-2 md:p-3">
      <h2 className="ltr:font-ubuntu mb-4 text-xl">{t('procedures')}</h2>

      <div dir="ltr" className="h-64 w-full overflow-hidden">
        {child}
      </div>
    </div>
  );
}

export default ProceduresCount;
