import { redirect } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { toast } from 'react-toastify';

import StatusOptions from './status-options';
import LoadingSpinner from '@/components/shared/loading-spinner';
import FormErrors from '../../forms/errors';
import { manageProcedureAction } from '@/actions/manage-procedure';
import { User } from '@/models/user';
import { DetailedProcedure } from '@/models/detailed-procedure';

type ManageProcedureFormProps = {
  procedure: DetailedProcedure;
  t: (key: string) => string;
  onClose: () => void;
  assistants: User[];
};

function ManageProcedureForm({
  procedure,
  assistants,
  t,
  onClose,
}: ManageProcedureFormProps) {
  const locale = useLocale();
  const [state, formAction, pending] = useActionState(manageProcedureAction, {
    message: undefined,
    id: procedure.id,
  });

  console.log(state);

  useEffect(() => {
    if (state.message === 'success') {
      toast.success(t('success'));
      redirect(`/${locale}/assistants/assign`);
    }
  }, [state.message, locale, t]);

  return (
    <form action={formAction} className="mt-4">
      <StatusOptions
        assistants={assistants}
        t={t}
        defaultValue={state.status}
        errors={state.errors}
      />

      <div className="mt-4 flex items-center gap-2">
        <button disabled={pending} className="button">
          {pending ? (
            <LoadingSpinner className="size-6 animate-spin" />
          ) : (
            t('save')
          )}
        </button>
        <button
          type="button"
          onClick={onClose}
          disabled={pending}
          className="button !bg-transparent text-current"
        >
          {t('cancel')}
        </button>
      </div>

      <FormErrors message={state.message} />
    </form>
  );
}

export default ManageProcedureForm;
