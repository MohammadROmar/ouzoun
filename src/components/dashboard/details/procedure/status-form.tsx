import { useActionState } from 'react';

import StatusOptions from './status-options';
import LoadingSpinner from '@/components/shared/loading-spinner';
import { changeProcedureStatus } from '@/actions/change-procedure-status';

type ProcedureStatusFormProps = {
  t: (key: string) => string;
  onClose: () => void;
};

function ProcedureStatusForm({ t, onClose }: ProcedureStatusFormProps) {
  const [state, formAction, pending] = useActionState(changeProcedureStatus, {
    message: undefined,
  });

  return (
    <form action={formAction} className="mt-4">
      <StatusOptions t={t} defaultValue={state.status} />

      <div className="mt-12 flex items-center gap-2">
        <button disabled={pending} className="button">
          {pending ? (
            <LoadingSpinner className="size-6 animate-spin" />
          ) : (
            t('procedure-details.change')
          )}
        </button>
        <button
          type="button"
          onClick={onClose}
          disabled={pending}
          className="button !bg-transparent"
        >
          {t('procedure-details.cancel')}
        </button>
      </div>
    </form>
  );
}

export default ProcedureStatusForm;
