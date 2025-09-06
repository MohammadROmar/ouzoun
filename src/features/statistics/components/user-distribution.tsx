import CustomBarChart from './bar-chart';
import { ErrorText } from '@/shared/components/error';
import { get } from '@/shared/api/get';
import type { UserRoles } from '../models/roles';

type UserDistributionProps = { t: (key: string) => string };

async function UserDistribution({ t }: UserDistributionProps) {
  const responseData = await get<UserRoles>(
    '/api/Statistics/GetNumberOfUsersInEachRole',
  );

  let child = <ErrorText message={responseData.message} />;

  if (responseData.message === 'success') {
    const distribution = responseData.data;

    const chartData = Object.entries(distribution).map(([key, value]) => ({
      name: t(`roles.${key}`),
      userCount: value,
    }));

    child = <CustomBarChart chartData={chartData} name={t('user-count')} />;
  }

  return (
    <div className="card-shadow bg-bg-primary p-2 md:p-3">
      <h2 className="ltr:font-ubuntu mb-4 text-xl">{t('distribution')}</h2>

      <div dir="ltr" className="h-64 w-full overflow-hidden">
        {child}
      </div>
    </div>
  );
}

export default UserDistribution;
