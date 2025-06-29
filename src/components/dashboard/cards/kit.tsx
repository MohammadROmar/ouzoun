import { Link } from '@/i18n/navigation';
import { Kit } from '@/models/kit';

type KitCardProps = { kit: Kit; t: (key: string) => string };

export default function KitCard({ kit, t }: KitCardProps) {
  return (
    <li key={kit.name} className="card-shadow space-y-2 rounded-xl p-2">
      <div className="flex gap-2">
        <div className="bg-green aspect-square w-1/4 rounded-lg" />

        <div className="flex flex-col justify-between gap-2">
          <h2 className="ltr:font-ubuntu text-lg">{kit.name}</h2>

          <div className="flex gap-3">
            <p className="flex flex-col">
              <span className="text-sm opacity-75">{t('item.tools-num')}</span>
              <span>{kit.tools.length}</span>
            </p>

            <p className="flex flex-col">
              <span className="text-sm opacity-75">
                {t('item.implants-num')}
              </span>
              <span>{kit.implant.length}</span>
            </p>
          </div>
        </div>
      </div>

      <Link href={`/kits/${kit.id}`} className="button flex justify-center">
        {t('actions.card')}
      </Link>
    </li>
  );
}
