'use client';

import { useTranslations } from 'next-intl';
import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

import { Link } from '../../../i18n/navigation';
import DeleteBtn from '@/shared/components/dashboard/delete-btn';
import EditIcon from '@/assets/icons/edit';
import KitIcon from '@/assets/icons/kit';
import {
  ActionContext,
  ActionsProps,
  useActionContext,
} from '@/shared/store/product-actions';

const sharedStyles =
  'button grid grid-cols-[1.25rem_auto] place-items-center justify-center gap-1 sm:gap-2';

function Root({ children, ...props }: ActionsProps & PropsWithChildren) {
  const t = useTranslations('actions');

  return (
    <ActionContext.Provider value={{ ...props, t }}>
      <div className="space-y-2 md:w-min">{children}</div>
    </ActionContext.Provider>
  );
}

function Delete() {
  const { id, item, t } = useActionContext();

  return (
    <DeleteBtn
      item={item}
      id={id}
      styles={clsx(sharedStyles, item === 'kits' && 'w-full')}
      label={t('delete')}
    />
  );
}

function Kit() {
  const { kitId, t } = useActionContext();

  return (
    <Link href={`/kits/${kitId}`} className={sharedStyles}>
      <span>
        <KitIcon className="size-5" />
      </span>
      <span>{t('view-kit')}</span>
    </Link>
  );
}

function Edit() {
  const { item, id, t } = useActionContext();

  return (
    <Link
      href={`/${item}/${id}/edit`}
      className={clsx(sharedStyles, 'bg-green/75')}
    >
      <span>
        <EditIcon className="size-5" />
      </span>

      <span>{t('edit')}</span>
    </Link>
  );
}

export { Root, Edit, Delete, Kit };
