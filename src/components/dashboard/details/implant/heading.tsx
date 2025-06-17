import { Link } from '@/i18n/navigation';
import KitIcon from '@/assets/icons/kit';

type ImplantHeadingProps = { title: string; kitId: string; action: string };

function ImplantHeading({ title, kitId, action }: ImplantHeadingProps) {
  return (
    <section className="flex gap-4">
      <div className="bg-green aspect-square w-1/3 rounded-lg md:w-1/6" />

      <div className="flex flex-col justify-center gap-4">
        <h2 className="ltr:font-ubuntu text-2xl md:text-3xl">{title}</h2>

        <Link
          href={`/kits/${kitId}`}
          className="button flex w-fit items-center gap-2 rounded-xl"
        >
          <KitIcon className="size-5" />
          <span>{action}</span>
        </Link>
      </div>
    </section>
  );
}

export default ImplantHeading;
