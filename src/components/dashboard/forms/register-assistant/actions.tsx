import { useFormStatus } from 'react-dom';

type RegisterAssistantActionsProps = { t(key: string): string };

function RegisterAssistantActions({ t }: RegisterAssistantActionsProps) {
  const { pending } = useFormStatus();

  return (
    <div className="flex items-center justify-end gap-2">
      <button disabled={pending} type="reset" className="button">
        {t('reset')}
      </button>
      <button disabled={pending} className="button">
        {t('action')}
      </button>
    </div>
  );
}

export default RegisterAssistantActions;
