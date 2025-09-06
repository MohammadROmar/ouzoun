import StatisticsCard, { type StatisticsCardItem } from './card';
import { ErrorText } from '@/shared/components/error';
import { get } from '@/shared/api/get';
import { User } from '@/core/models/user';

type TopByAssignmentsProps = { t: (key: string) => string };

async function TopByAssignments({ t }: TopByAssignmentsProps) {
  const responseData = await get<{ userDto: User; procedureCount: number }[]>(
    '/api/Statistics/GetTopFiveAssistantsByAssignments',
  );

  let child = (
    <StatisticsCard
      title={t('assistants-assignments')}
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
        title={t('assistants-assignments')}
        items={items}
        noDataMessage={t('no-assistants')}
      />
    );
  }

  return child;
}

export default TopByAssignments;
