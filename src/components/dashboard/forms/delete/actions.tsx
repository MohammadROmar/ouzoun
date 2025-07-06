import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';

import LoadingSpinner from '@/components/shared/loading-spinner';

type ModalActionsProps = { close: () => void };

function ModalActions({ close }: ModalActionsProps) {
  const t = useTranslations('modal');
  const { pending } = useFormStatus();

  return (
    <div className="flex items-center gap-4">
      <button
        type="submit"
        disabled={pending}
        aria-label={pending ? t('processing') : undefined}
        className="button !bg-danger !text-white"
      >
        {pending ? (
          <LoadingSpinner className="size-6 animate-spin" />
        ) : (
          t('confirm')
        )}
      </button>
      <button
        type="button"
        disabled={pending}
        onClick={close}
        className="cursor-pointer transition-transform duration-300 hover:scale-95"
      >
        {t('cancel')}
      </button>
    </div>
  );
}

export default ModalActions;
