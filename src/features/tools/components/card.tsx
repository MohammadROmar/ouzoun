import { getTranslations } from 'next-intl/server';
import clsx from 'clsx';

import { Link } from '@/i18n/navigation';
import FallbackImage from '@/shared/components/dashboard/fallback-image';
import { getToolDimensions } from '../utils/details';
import toolsImg from '@/assets/images/tools.png';
import { Tool } from '../models/tool';

type ToolCardProps = { tool: Tool; className?: string };

async function ToolCard({ tool, className }: ToolCardProps) {
  const t = await getTranslations('tools-page');

  const dimensions = Object.entries(getToolDimensions(tool, t));

  return (
    <li
      className={clsx(
        'bg-bg-primary card-shadow space-y-2 rounded-xl p-2',
        className,
      )}
    >
      <div className="flex gap-2">
        <div className="bg-green relative aspect-square w-1/4 overflow-hidden rounded-lg">
          <FallbackImage
            src={tool.imagePath ? tool.imagePath : toolsImg}
            fallbackSrc={toolsImg}
            alt=""
            fill
            sizes="250px"
            aria-labelledby="implant-brand"
          />
        </div>

        <div className="flex flex-col justify-between">
          <h2 className="ltr:font-ubuntu text-lg">{tool.name}</h2>

          <p className="flex flex-col">
            <span className="text-sm opacity-75">{t('item.quantity')}</span>
            <span>{tool.quantity}</span>
          </p>
        </div>
      </div>

      <ul className="flex gap-3">
        {dimensions.map(([key, value]) => (
          <li key={key}>
            <p className="flex flex-col">
              <span className="text-sm opacity-75">{key}</span>
              <span>
                {value} {t('item.unit-cm')}
              </span>
            </p>
          </li>
        ))}
      </ul>

      <Link href={`/tools/${tool.id}`} className="button flex justify-center">
        {t('actions.card')}
      </Link>
    </li>
  );
}

export default ToolCard;
