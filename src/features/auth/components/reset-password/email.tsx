import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';

import Input from '@/shared/components/input';
import LoadingSpinner from '@/assets/icons/loading-spinner';
import { emailAction } from '../../api/email';

type EmailProps = { changeStep(step: number): void };

export default function Email({ changeStep }: EmailProps) {
  const [state, formAction] = useActionState(emailAction, {
    message: undefined,
  });

  const t = useTranslations('reset-password-page');

  useEffect(() => {
    if (state.message === 'success') {
      changeStep(1);
    }
  }, [state.message, changeStep]);

  return (
    <form aria-live="polite" action={formAction}>
      <Input
        id="email"
        label={t('step0.label')}
        type="email"
        required
        placeholder="example@email.com"
        autoComplete="email"
        defaultValue={state.email}
        error={state.message !== 'success' ? state?.message : undefined}
      />

      <SubmitButton text={t('next')} />
    </form>
  );
}

function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="button mt-6 w-full">
      {pending ? (
        <LoadingSpinner className="flex size-6 w-full animate-spin items-center" />
      ) : (
        text
      )}
    </button>
  );
}
