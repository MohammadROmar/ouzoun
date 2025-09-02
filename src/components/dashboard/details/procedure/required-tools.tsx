import ToolsIcon from '@/assets/icons/tools';
import { Tool } from '@/models/tool';
import ToolCard from '../../cards/tool';

type RequiredToolsProps = { tools: Tool[]; t: (key: string) => string };

function RequiredTools({ tools, t }: RequiredToolsProps) {
  const isEmpty = tools.length === 0;

  return (
    <section className="mt-4 space-y-2">
      <div className="text-green border-b-gray/50 flex items-center gap-4 border-b">
        <ToolsIcon className="size-8" />
        <h2 className="ltr:font-ubuntu text-3xl">{t('required-tools')}</h2>
      </div>

      {!isEmpty && (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </ul>
      )}

      {isEmpty && <p className="to-gray text-center">{t('no-tools')}</p>}
    </section>
  );
}

export default RequiredTools;
