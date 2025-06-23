import { Link } from '@/i18n/navigation';
import DeleteIcon from '@/assets/icons/delete';
import EditIcon from '@/assets/icons/edit';
import KitIcon from '@/assets/icons/kit';
import clsx from 'clsx';

type ActionsProps = {
  action: string;
  kitId: string;
  t: (key: string) => string;
  full?: boolean;
};

function Actions({ action, kitId, t, full }: ActionsProps) {
  const sharedStyles =
    'button grid grid-cols-[1.25rem_auto] place-items-center justify-center gap-1 sm:gap-2';

  return (
    <div className={clsx('space-y-2', !full && 'md:w-min')}>
      <div className="flex items-center gap-2 max-md:grid max-md:grid-cols-2 max-md:justify-end">
        <Link
          href={action}
          className={clsx(sharedStyles, 'bg-green/80 w-full')}
        >
          <span>
            <EditIcon className="size-5" />
          </span>
          <span>{t('actions.edit')}</span>
        </Link>

        <button className={clsx(sharedStyles, 'w-full bg-red-400')}>
          <span>
            <DeleteIcon className="size-5" />
          </span>
          <span>{t('actions.delete')}</span>
        </button>
      </div>

      <Link href={`/kits/${kitId}`} className={sharedStyles}>
        <span>
          <KitIcon className="size-5" />
        </span>
        <span>{t('actions.view-kit')}</span>
      </Link>
    </div>
  );
}

export default Actions;
