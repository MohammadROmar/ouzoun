import { useFormStatus } from 'react-dom';

import LoadingSpinner from '@/assets/icons/loading-spinner';

type RegisterAssistantActionsProps = { t(key: string): string };

function RegisterAssistantActions({ t }: RegisterAssistantActionsProps) {
  const { pending } = useFormStatus();

  return (
    <div className="flex items-center justify-end gap-2">
      <button disabled={pending} type="reset" className="button">
        {t('reset')}
      </button>
      <button disabled={pending} className="button">
        {pending ? (
          <LoadingSpinner className="size-6 animate-spin" />
        ) : (
          t('action')
        )}
      </button>
    </div>
  );
}

export default RegisterAssistantActions;
