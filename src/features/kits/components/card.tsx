import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import FallbackImage from '@/shared/components/dashboard/fallback-image';
import kitImg from '@/assets/images/kit.png';
import { Kit } from '../models/kit';

type KitCardProps = { kit: Kit };

export default function KitCard({ kit }: KitCardProps) {
  const t = useTranslations('kits-page');

  return (
    <li
      key={kit.name}
      className="card-shadow bg-bg-primary space-y-2 rounded-xl p-2"
    >
      <div className="flex gap-2">
        <div className="bg-green relative aspect-square w-1/4 overflow-hidden rounded-lg">
          <FallbackImage
            src={`/api/images?imagePath=${kit.imagePath}`}
            fallbackSrc={kitImg}
            alt=""
            fill
            sizes="250px"
            aria-labelledby="implant-brand"
          />
        </div>

        <div className="flex flex-col justify-between gap-2">
          <h2 className="ltr:font-ubuntu text-lg">{kit.name}</h2>

          <div className="flex gap-3">
            <p className="flex flex-col">
              <span className="text-sm opacity-75">{t('item.tools')}</span>
              <span>{kit.toolCount}</span>
            </p>

            <p className="flex flex-col">
              <span className="text-sm opacity-75">{t('item.implant')}</span>
              <span className="line-clamp-1">{kit.implantCount}</span>
            </p>
          </div>
        </div>
      </div>

      <Link
        href={`/kits/${kit.id}`}
        prefetch={false}
        className="button flex justify-center"
      >
        {t('actions.card')}
      </Link>
    </li>
  );
}
