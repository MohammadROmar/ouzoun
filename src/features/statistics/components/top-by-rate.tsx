import StatisticsCard, { type StatisticsCardItem } from './card';
import StarIcon from '@/assets/icons/star';
import { ErrorText } from '@/shared/components/error';
import { get } from '@/shared/api/get';
import { User } from '@/core/models/user';

type TopByRateProps = { t: (key: string) => string };

async function TopByRate({ t }: TopByRateProps) {
  const responseData = await get<User[]>(
    '/api/Statistics/GetTopFiveAssistantsByRatings',
  );

  let child = (
    <StatisticsCard
      title={t('assistants-rating')}
      items={[]}
      error={<ErrorText message={responseData.message} />}
    />
  );

  if (responseData.message === 'success') {
    const users = responseData.data;

    const items: StatisticsCardItem[] = users.map((user) => ({
      label: `${t('dr')} ${user.userName}`,
      value: (
        <div className="text-warning flex items-center gap-1">
          <p>{user.rate.toFixed(1)}</p>
          <StarIcon className="size-4" />
        </div>
      ),
      imagePath: user.profileImagePath,
    }));

    child = (
      <StatisticsCard
        title={t('assistants-rating')}
        items={items}
        noDataMessage={t('no-assistants')}
      />
    );
  }

  return child;
}

export default TopByRate;
