import StatisticsCard, { type StatisticsCardItem } from './card';
import { get } from '@/shared/api/get';
import { User } from '@/core/models/user';

type TopDoctorsProps = { t: (key: string) => string };

async function TopDoctors({ t }: TopDoctorsProps) {
  const users = (await get('/api/Statistics/GetTopFiveDoctors')) as {
    userDto: User;
    procedureCount: number;
  }[];

  const items: StatisticsCardItem[] = users.map((user) => ({
    label: `${t('dr')} ${user.userDto.userName}`,
    value: <p>{user.procedureCount}</p>,
    imagePath: user.userDto.profileImagePath,
  }));

  return <StatisticsCard title={t('top-doctors')} items={items} />;
}

export default TopDoctors;
