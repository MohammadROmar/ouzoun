import clsx from 'clsx';

import { Link } from '@/i18n/navigation';
import DeleteBtn from './delete-btn';
import EditIcon from '@/assets/icons/edit';
import KitIcon from '@/assets/icons/kit';

type ActionsProps = {
  item: 'kits' | 'tools' | 'implants';
  id: string;
  kitId?: string;
  t: (key: string) => string;
};

function Actions({ item, id, kitId, t }: ActionsProps) {
  const sharedStyles =
    'button grid grid-cols-[1.25rem_auto] place-items-center justify-center gap-1 sm:gap-2';

  return (
    <div className="space-y-2 md:w-min">
      <div className="flex items-center gap-2 max-md:grid max-md:grid-cols-2 max-md:justify-end">
        <Link
          href={`/${item}/${id}/edit`}
          className={clsx(sharedStyles, 'bg-green/75')}
        >
          <span>
            <EditIcon className="size-5" />
          </span>

          <span>{t('actions.edit')}</span>
        </Link>

        <DeleteBtn
          item={item}
          id={id}
          styles={sharedStyles}
          label={t('actions.delete')}
        />
      </div>

      {kitId && (
        <Link href={`/kits/${kitId}`} className={sharedStyles}>
          <span>
            <KitIcon className="size-5" />
          </span>
          <span>{t('actions.view-kit')}</span>
        </Link>
      )}
    </div>
  );
}

export default Actions;
