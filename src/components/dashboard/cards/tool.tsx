import { getTranslations } from 'next-intl/server';

import { getToolDimensions } from '@/utils/details/tool';
import { Tool } from '@/models/tool';
import ImplantActions from '../actions';

type ToolCardProps = { tool: Tool };

async function ToolCard({ tool }: ToolCardProps) {
  const t = await getTranslations('tools-page');

  const dimensions = Object.entries(getToolDimensions(tool, t));

  return (
    <li className="bg-bg-primary card-shadow space-y-2 rounded-xl p-2">
      <div className="flex gap-2">
        <div className="bg-green aspect-square w-1/4 rounded-lg" />

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

      <ImplantActions
        action={`/tools/${tool.id}/edit`}
        kitId={tool.kitId}
        t={t}
        full
      />
    </li>
  );
}

export default ToolCard;
