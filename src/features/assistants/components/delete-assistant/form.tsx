import { redirect } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { toast } from 'react-toastify';

import FormErrors from '@/shared/components/dashboard/errors';
import { deleteAssistantAction } from '../../api/delete-assistant';

import LoadingSpinner from '@/assets/icons/loading-spinner';

type DeleteAssistantFormProps = {
  close: () => void;
  assistantId: string;
  t: (key: string) => string;
};

function DeleteAssistantForm({
  t,
  close,
  assistantId,
}: DeleteAssistantFormProps) {
  const [state, formAction, pending] = useActionState(deleteAssistantAction, {
    message: undefined,
    id: assistantId,
  });

  const locale = useLocale();

  useEffect(() => {
    if (state.message === 'success') {
      toast.success(t('success'));
      redirect(`/${locale}/assistants/all`);
    }
  }, [state.message, locale, t]);

  return (
    <form action={formAction}>
      <div className="flex items-center gap-2">
        <button disabled={pending} className="button">
          {pending ? (
            <LoadingSpinner className="size-6 animate-spin" />
          ) : (
            t('button')
          )}
        </button>
        <button
          disabled={pending}
          type="button"
          onClick={close}
          className="button !bg-transparent text-current"
        >
          {t('cancel')}
        </button>
      </div>
      <FormErrors message={state.message} />
    </form>
  );
}

export default DeleteAssistantForm;
