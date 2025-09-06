import type { ReactNode } from 'react';

import FallbackImage from '@/shared/components/dashboard/fallback-image';
import userImg from '@/assets/images/user.jpg';

export type StatisticsCardItem = {
  label: string;
  value: ReactNode;
  imagePath?: string | null;
};
type StatisticsCardProps = {
  title: string;
  items: StatisticsCardItem[];
};

function StatisticsCard({ title, items }: StatisticsCardProps) {
  return (
    <div className="card-shadow bg-bg-primary size-full flex-1 space-y-4 rounded-xl p-2 md:p-3">
      <h2 className="ltr:font-ubuntu text-xl">{title}</h2>

      <ul className="space-y-2">
        {items.map(({ label, value, imagePath }, i) => (
          <li
            key={`${label}-${i}`}
            className="text-gray flex items-center justify-between gap-2 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="border-green relative size-6 overflow-hidden rounded-full border">
                <FallbackImage
                  src={`/api/images?imagePath=${imagePath}`}
                  fallbackSrc={userImg}
                  alt=""
                  fill
                  sizes="100px"
                  className="object-cover object-center"
                />
              </div>
              <p>{label}</p>
            </div>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatisticsCard;
