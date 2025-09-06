import StatisticsCard, { type StatisticsCardItem } from './card';
import { ErrorText } from '@/shared/components/error';
import { get } from '@/shared/api/get';
import { User } from '@/core/models/user';

type TopDoctorsProps = { t: (key: string) => string };

async function TopDoctors({ t }: TopDoctorsProps) {
  const responseData = await get<
    {
      userDto: User;
      procedureCount: number;
    }[]
  >('/api/Statistics/GetTopFiveDoctors');

  let child = (
    <StatisticsCard
      title={t('top-doctors')}
      items={[]}
      error={<ErrorText message={responseData.message} />}
    />
  );

  if (responseData.message === 'success') {
    const users = responseData.data;

    const items: StatisticsCardItem[] = users.map((user) => ({
      label: `${t('dr')} ${user.userDto.userName}`,
      value: <p>{user.procedureCount}</p>,
      imagePath: user.userDto.profileImagePath,
    }));

    child = (
      <StatisticsCard
        title={t('top-doctors')}
        items={items}
        noDataMessage={t('no-doctors')}
      />
    );
  }

  return child;
}

export default TopDoctors;
