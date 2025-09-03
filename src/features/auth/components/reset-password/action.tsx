import { useFormStatus } from 'react-dom';

import LoadingSpinner from '@/assets/icons/loading-spinner';

type ResetPasswordActionProps = { disabled: boolean; label: string };

function ResetPasswordAction({ disabled, label }: ResetPasswordActionProps) {
  const { pending } = useFormStatus();

  return (
    <button disabled={disabled} className="button mt-6 w-full">
      {pending ? (
        <LoadingSpinner className="flex size-6 w-full animate-spin items-center" />
      ) : (
        label
      )}
    </button>
  );
}

export default ResetPasswordAction;
