import DeleteIcon from '@/assets/icons/delete';
import EditIcon from '@/assets/icons/edit';
import { Link } from '@/i18n/navigation';

type ImplantActionsProps = { implantId: string; t: (key: string) => string };

function ImplantActions({ implantId, t }: ImplantActionsProps) {
  return (
    <div className="flex items-center gap-4 max-md:justify-end">
      <Link
        href={`/implants/${implantId}/edit`}
        className="bg-green max-md:bg-green flex items-center gap-2 rounded-xl bg-none px-4 py-2"
      >
        <EditIcon className="size-5" />
        <span>{t('actions.edit')}</span>
      </Link>
      <button className="flex cursor-pointer items-center gap-2 rounded-xl bg-red-400 bg-none px-4 py-2">
        <DeleteIcon className="size-5" />
        <span>{t('actions.delete')}</span>
      </button>
    </div>
  );
}

export default ImplantActions;
