import { getTranslations } from 'next-intl/server';

import FallbackImage from '@/shared/components/dashboard/fallback-image';
import assistantImg from '@/assets/images/assistant.jpg';
import AssistantCredentials from './credentials';
import AssistantCardActions from './actions';
import { User } from '@/core/models/user';

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
          fallbackSrc={assistantImg}
          fill
          sizes="(min-width: 48rem) 50vw, (min-width: 64rem) 30vw, 90vw"
          alt=""
        />
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
