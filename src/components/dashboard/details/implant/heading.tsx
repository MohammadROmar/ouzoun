import ImplantActions from './actions';
import type { Implant } from '@/models/implant';

type ImplantHeadingProps = { t: (key: string) => string; implant: Implant };

function ImplantHeading({ t, implant }: ImplantHeadingProps) {
  return (
    <section className="flex gap-4 max-sm:flex-col">
      <div className="bg-green aspect-square w-full max-w-3xs rounded-lg max-sm:m-auto sm:w-1/3 md:w-1/6" />

      <div className="flex flex-col justify-center gap-4">
        <h2 className="ltr:font-ubuntu text-2xl max-md:text-center md:text-3xl">
          {implant.name}
        </h2>

        <div className="max-md:hidden">
          <ImplantActions implantId={implant.id} kitId={implant.kitId} t={t} />
        </div>
      </div>
    </section>
  );
}

export default ImplantHeading;
