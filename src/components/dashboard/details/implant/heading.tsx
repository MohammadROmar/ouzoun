import { Link } from '@/i18n/navigation';
import KitIcon from '@/assets/icons/kit';
import ImplantActions from './actions';
import type { Implant } from '@/models/implant';

type ImplantHeadingProps = { t: (key: string) => string; implant: Implant };

function ImplantHeading({ t, implant }: ImplantHeadingProps) {
  return (
    <section className="flex gap-4">
      <div className="bg-green aspect-square w-1/3 rounded-lg md:w-1/6" />

      <div className="flex flex-col justify-center gap-4">
        <h2 className="ltr:font-ubuntu text-2xl md:text-3xl">{implant.name}</h2>

        <Link
          href={`/kits/${implant.kitId}`}
          className="button flex w-fit items-center gap-2 rounded-xl"
        >
          <KitIcon className="size-5" />
          <span>{t('actions.view-kit')}</span>
        </Link>

        <div className="max-md:hidden">
          <ImplantActions implantId={implant.id} t={t} />
        </div>
      </div>
    </section>
  );
}

export default ImplantHeading;
