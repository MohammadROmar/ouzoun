import StatisticsCard, { type StatisticsCardItem } from './card';
import StarIcon from '@/assets/icons/star';
import { get } from '@/shared/api/get';
import { User } from '@/core/models/user';

type TopByRateProps = { t: (key: string) => string };

async function TopByRate({ t }: TopByRateProps) {
  const users = (await get(
    '/api/Statistics/GetTopFiveAssistantsByRatings',
  )) as User[];

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

  return <StatisticsCard title={t('assistants-rating')} items={items} />;
}

export default TopByRate;
