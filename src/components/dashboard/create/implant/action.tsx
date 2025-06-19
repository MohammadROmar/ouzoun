import LoadingSpinner from '@/components/shared/loading-spinner';
import { useFormStatus } from 'react-dom';

type CreateImplantActionProps = { t: (key: string) => string };

function CreateImplantAction({ t }: CreateImplantActionProps) {
  const { pending } = useFormStatus();

  return (
    <div className="mt-4 flex items-center justify-end gap-2">
      <button disabled={pending} className="button rounded-lg" type="reset">
        {t('actions.reset')}
      </button>
      <button disabled={pending} className="button rounded-lg">
        {pending ? (
          <LoadingSpinner className="size-6 animate-spin" />
        ) : (
          t('actions.add')
        )}
      </button>
    </div>
  );
}

export default CreateImplantAction;
