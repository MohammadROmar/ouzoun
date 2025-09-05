import { useFormStatus } from 'react-dom';

import LoadingSpinner from '@/assets/icons/loading-spinner';

type ChangePasswordActionsProps = { t: (key: string) => string };

function ChangePasswordActions({ t }: ChangePasswordActionsProps) {
  const { pending } = useFormStatus();

  return (
    <div className="flex items-center justify-end gap-2">
      <button disabled={pending} className="button">
        {t('reset')}
      </button>
      <button disabled={pending} className="button">
        {pending ? (
          <LoadingSpinner className="size-6 animate-spin" />
        ) : (
          t('save')
        )}
      </button>
    </div>
  );
}

export default ChangePasswordActions;
