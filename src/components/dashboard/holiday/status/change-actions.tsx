import { memo } from 'react';

import LoadingSpinner from '@/components/shared/loading-spinner';
import type { ModalProps } from './change';

type ChangeStatusActionsProps = ModalProps & { pending: boolean };

const ChangeStatusActions = memo(function ChangeStatusActions({
  t,
  close,
  pending,
}: ChangeStatusActionsProps) {
  return (
    <div className="mt-4 flex items-center gap-4">
      <button disabled={pending} className="button">
        {pending ? (
          <LoadingSpinner className="size-6 animate-spin" />
        ) : (
          t('holiday.modal.save')
        )}
      </button>
      <button
        type="button"
        disabled={pending}
        onClick={close}
        className="button bg-transparent p-0 text-current"
      >
        {t('holiday.modal.cancel')}
      </button>
    </div>
  );
});

export default ChangeStatusActions;
