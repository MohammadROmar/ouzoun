import StatisticsCard, { type StatisticsCardItem } from './card';
import { get } from '@/shared/api/get';
import { User } from '@/core/models/user';

type TopByAssignmentsProps = { t: (key: string) => string };

async function TopByAssignments({ t }: TopByAssignmentsProps) {
  const users = (await get(
    '/api/Statistics/GetTopFiveAssistantsByAssignments',
  )) as { userDto: User; procedureCount: number }[];

  const items: StatisticsCardItem[] = users.map((user) => ({
    label: `${t('dr')} ${user.userDto.userName}`,
    value: <p>{user.procedureCount}</p>,
    imagePath: user.userDto.profileImagePath,
  }));

  return <StatisticsCard title={t('assistants-assignments')} items={items} />;
}

export default TopByAssignments;
