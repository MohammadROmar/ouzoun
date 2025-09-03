import clsx from 'clsx';

import { Link } from '@/i18n/navigation';
import FallbackImage from '@/shared/components/dashboard/fallback-image';
import { getCardData } from '../utils/get-card-data';
import implantImg from '@/assets/images/implant.png';
import { Implant } from '../models/implant';
import { getTranslations } from 'next-intl/server';

type ImplantCardProps = { implant: Implant; className?: string };

async function ImplantCard({ implant, className }: ImplantCardProps) {
  const t = await getTranslations('implants-page');

  return (
    <li>
      <Link
        href={`/implants/${implant.id}`}
        className={clsx(
          'card-shadow bg-bg-primary border-gray/25 flex flex-col space-y-2 rounded-xl border p-2 md:p-3',
          className,
        )}
      >
        <div className="bg-green relative h-32 w-full overflow-hidden rounded-xl">
          <FallbackImage
            src={implant.imagePath ? implant.imagePath : implantImg}
            fallbackSrc={implantImg}
            alt=""
            fill
            sizes="250px"
            className="absolute w-fit object-contain object-center"
          />
        </div>

        <h2 className="ltr:font-ubuntu text-2xl">{implant.brand}</h2>
        <p className="text-gray border-b-gray/25 line-clamp-1 border-b pb-1">
          {implant.description}
        </p>

        <ul className="text-gray flex gap-3">
          {getCardData(implant).map(({ icon: Icon, label, value }, i) => (
            <li key={`${value}-${i}`} className="flex items-center gap-1">
              <span>
                <Icon
                  className="size-5"
                  aria-hidden={false}
                  aria-label={t(label)}
                />
              </span>
              <p className="text-sm">{value}</p>
            </li>
          ))}
        </ul>
      </Link>
    </li>
  );
}

export default ImplantCard;
