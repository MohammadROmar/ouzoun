import { Link } from '@/i18n/navigation';

type ImplantActionsProps = { implantId: string; t: (key: string) => string };

function ImplantActions({ implantId, t }: ImplantActionsProps) {
  return (
    <section className="flex items-center gap-4">
      <Link
        href={`/implants/${implantId}/edit`}
        className="button rounded-xl bg-amber-400 max-md:text-sm"
      >
        {t('details.edit')}
      </Link>
      <button className="button rounded-xl bg-red-400 max-md:text-sm">
        {t('details.delete')}
      </button>
    </section>
  );
}

export default ImplantActions;
