import ToolCard from '../../../tools/components/card';
import ImplantIcon from '@/assets/icons/implant';
import ImplantCard from '../../../implants/components/card';
import { gatherImplantsAndTools } from '../../utils/gather-implants-n-tools';
import { Implant } from '@/features/implants/models/implant';
import { Tool } from '@/features/tools/models/tool';

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
