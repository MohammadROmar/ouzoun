import { getTranslations } from 'next-intl/server';

import FallbackImage from '@/shared/components/dashboard/fallback-image';
import AssistantCredentials from './credentials';
import AssistantCardActions from './actions';
import userImg from '@/assets/images/user.jpg';
import { User } from '@/core/models/user';
import StarIcon from '@/assets/icons/star';

export type AssistantCardProps = { assistant: User };

async function AssistantCard({ assistant }: AssistantCardProps) {
  const t = await getTranslations('assistants-page.all');

  return (
    <li
      key={assistant.id}
      className="relative h-72 transition-transform duration-500 hover:scale-95"
    >
      <div className="bg-gray card-shadow absolute top-0 left-1/2 z-10 aspect-square h-[50%] -translate-x-1/2 overflow-hidden rounded-xl">
        <FallbackImage
          src={`/api/images?imagePath=${assistant.profileImagePath}`}
          fallbackSrc={userImg}
          fill
          sizes="(min-width: 48rem) 50vw, (min-width: 64rem) 30vw, 90vw"
          alt=""
        />

        <div className="bg-warning absolute top-0 right-0 flex items-center gap-1 rounded-bl-sm p-1 text-white">
          <StarIcon className="size-4" />
          <p className="text-sm">{assistant.rate.toFixed(1)}</p>
        </div>
      </div>

      <div className="bg-bg-primary card-shadow absolute inset-0 top-[unset] flex h-[75%] flex-col items-center justify-between gap-2 rounded-xl p-4 text-center md:p-3">
        <h2 className="mt-18 text-lg leading-none font-semibold">
          {assistant.userName}
        </h2>

        <AssistantCredentials assistant={assistant} t={t} />
        <AssistantCardActions assistant={assistant} t={t} />
      </div>
    </li>
  );
}

export default AssistantCard;
