import ImplantIcon from '@/assets/icons/implant';
import { Implant } from '@/models/implant';
import { Tool } from '@/models/tool';
import ImplantCard from '../../cards/implant';
import ToolCard from '../../cards/tool';
import { gatherImplantsAndTools } from '@/utils/gather-implants-n-tools';

type ImplantKitsProps = {
  implantKits: {
    implant: Implant;
    toolsWithImplant: Tool[];
  }[];
  t: (key: string) => string;
};

function ImplantKits({ implantKits, t }: ImplantKitsProps) {
  const { implants, tools } = gatherImplantsAndTools(implantKits);

  return (
    <section className="mt-4 space-y-2">
      <div className="text-green border-b-gray/50 flex items-center gap-4 border-b">
        <ImplantIcon className="size-8" />
        <h2 className="ltr:font-ubuntu text-3xl">{t('implant-kits')}</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl">{t('implants')}</h3>
          {implants.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {implants.map((implant, i) => (
                <ImplantCard key={`${implant.id}-${i}`} implant={implant} />
              ))}
            </ul>
          ) : (
            <p className="text-gray text-center">{t('no-implants')}</p>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl">{t('tools')}</h3>
          {tools.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </ul>
          ) : (
            <p className="to-gray text-center">{t('no-tools')}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ImplantKits;
