import KitIcon from '@/assets/icons/kit';
import KitCard from '../../cards/kit';
import { Kit } from '@/models/kit';

type SurgicalKitsProps = { kits: Kit[]; t: (key: string) => string };

function SurgicalKits({ kits, t }: SurgicalKitsProps) {
  const isEmpty = kits.length === 0;

  return (
    <section className="mt-4 space-y-2">
      <div className="text-green border-b-gray/50 flex items-center gap-4 border-b">
        <KitIcon className="size-8" />
        <h2 className="ltr:font-ubuntu text-3xl">{t('surgical-kits')}</h2>
      </div>

      {!isEmpty && (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {kits.map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </ul>
      )}

      {isEmpty && <p className="to-gray text-center">{t('no-kits')}</p>}
    </section>
  );
}

export default SurgicalKits;
