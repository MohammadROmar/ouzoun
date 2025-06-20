import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';
import { Implant } from '@/models/implant';

type ImplantCardProps = { implant: Implant };

async function ImplantCard({ implant }: ImplantCardProps) {
  const t = await getTranslations('implants-page');

  return (
    <li className="bg-bg-primary grid w-full grid-rows-[auto_1fr_auto] space-y-2 rounded-xl p-2 shadow-[0px_0px_4px] shadow-black/15 dark:shadow-white/30">
      <div className="flex basis-0 gap-2">
        <div className="bg-green aspect-square w-1/4 rounded-lg" />

        <div className="flex flex-col justify-between">
          <h2 className="ltr:font-ubuntu text-lg">{implant.name}</h2>

          <div className="text-gray space-y-1 text-sm">
            <p>
              {t('item.brand')}: {implant.brand}
            </p>
            <p>
              {t('item.quantity')}: {implant.quantity}
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray line-clamp-2 text-sm">{implant.description}</p>

      <Link
        href={`/implants/${implant.id}`}
        className="button flex w-full justify-center"
      >
        {t('actions.card')}
      </Link>
    </li>
  );
}

export default ImplantCard;
