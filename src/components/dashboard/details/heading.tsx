import Actions from '../actions';
import type { TFunction } from '@/models/t-function';

type HeadingProps = {
  t: TFunction;
  title: string;
  kitId?: string;
  item: 'kits' | 'tools' | 'implants';
  id: string;
};

function Heading({ item, id, t, title, kitId }: HeadingProps) {
  return (
    <section className="flex gap-4 max-sm:flex-col md:max-lg:flex-col md:max-lg:items-center">
      <div className="bg-green aspect-square w-full max-w-3xs rounded-lg max-sm:m-auto sm:w-1/3 md:w-1/6 md:max-lg:w-1/3" />

      <div className="flex flex-col justify-center gap-4 md:max-lg:flex-col md:max-lg:items-center">
        <h2 className="ltr:font-ubuntu text-2xl max-md:text-center md:text-3xl">
          {title}
        </h2>

        <div className="max-md:hidden">
          <Actions item={item} id={id} kitId={kitId} t={t} />
        </div>
      </div>
    </section>
  );
}

export default Heading;
