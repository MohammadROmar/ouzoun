import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';
import { Implant } from '@/models/implant';

type ImplantCardProps = { implant: Implant };

async function ImplantCard({ implant }: ImplantCardProps) {
  const t = await getTranslations('implants-page');

  return (
    <li className="bg-bg-primary card-shadow grid w-full grid-rows-[auto_1fr_auto] space-y-2 rounded-xl p-2">
      <div className="flex basis-0 gap-2">
        <div className="bg-green aspect-square w-1/4 rounded-lg" />

        <div className="flex flex-col justify-between">
          <h2 className="ltr:font-ubuntu text-lg">{implant.name}</h2>

          <ul className="flex gap-3">
            <li>
              <p className="flex flex-col">
                <span className="text-sm opacity-75">{t('item.quantity')}</span>
                <span>{implant.quantity}</span>
              </p>
            </li>
            <li>
              <p className="flex flex-col">
                <span className="text-sm opacity-75">{t('item.radius')}</span>
                <span>{implant.radius}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <p className="line-clamp-2 text-sm opacity-75">{implant.description}</p>

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
