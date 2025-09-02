import { getTranslations } from 'next-intl/server';
import clsx from 'clsx';

import { Link } from '@/i18n/navigation';
import FallbackImage from '@/shared/components/dashboard/fallback-image';
import implantImg from '@/assets/images/implant.png';
import { Implant } from '../models/implant';

type ImplantCardProps = { implant: Implant; className?: string };

async function ImplantCard({ implant, className }: ImplantCardProps) {
  const t = await getTranslations('implants-page');

  return (
    <li
      className={clsx(
        'bg-bg-primary card-shadow grid w-full grid-rows-[auto_1fr_auto] space-y-2 rounded-xl p-2',
        className,
      )}
    >
      <div className="flex basis-0 gap-2">
        <div className="bg-green relative aspect-square w-1/4 overflow-hidden rounded-lg">
          <FallbackImage
            src={implant.imagePath ? implant.imagePath : implantImg}
            fallbackSrc={implantImg}
            alt=""
            fill
            sizes="250px"
            aria-labelledby="implant-brand"
          />
        </div>

        <div className="flex flex-col justify-between">
          <h2 id="implant-brand" className="ltr:font-ubuntu text-lg">
            {implant.brand}
          </h2>

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
        prefetch={false}
        className="button flex w-full justify-center"
      >
        {t('actions.card')}
      </Link>
    </li>
  );
}

export default ImplantCard;
