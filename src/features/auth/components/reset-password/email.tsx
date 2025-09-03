import { useActionState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

import Input from '@/shared/components/input';
import ResetPasswordAction from './action';
import FormErrors from '@/shared/components/dashboard/errors';
import { emailAction } from '../../api/email';

type EmailProps = { changeStep(step: number): void };

export default function Email({ changeStep }: EmailProps) {
  const [state, formAction, pending] = useActionState(emailAction, {
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
        error={
          state.message === 'invalid-input'
            ? t('error', { field: t('step0.label') })
            : undefined
        }
      />

      <ResetPasswordAction label={t('next')} disabled={pending} />

      {state.message === 'failed-to-submit' ? (
        <p className="error-text">{t('error', { field: t('step1.label') })}</p>
      ) : (
        <FormErrors message={state.message} />
      )}
    </form>
  );
}
