import { useActionState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

import Input from '@/shared/components/input';
import ResetPasswordErrors from './errors';
import ResetPasswordAction from './action';
import { resetPasswordAction } from '../../api/reset-password';

type ResetPasswordProps = { changeStep(step: number): void };

export default function ResetPassword({ changeStep }: ResetPasswordProps) {
  const [state, formAction, pending] = useActionState(resetPasswordAction, {
    message: undefined,
  });

  const t = useTranslations('reset-password-page');

  useEffect(() => {
    if (state.message === 'success') {
      changeStep(3);
    }
  }, [state.message, changeStep]);

  return (
    <form aria-live="polite" action={formAction}>
      <div className="space-y-4">
        <Input
          id="password"
          label={t('step2.label')}
          type="password"
          required
          placeholder="********"
          autoComplete="new-password"
          defaultValue={state.password}
        />
        <Input
          id="confirm-password"
          label={t('step2.label2')}
          type="password"
          required
          placeholder="********"
          autoComplete="new-password"
          defaultValue={state.confirmPassword}
        />
      </div>

      {state.message === 'invalid-input' && (
        <p className="error-text">{t('error', { field: t('passwords') })}</p>
      )}
      <ResetPasswordAction label={t('change-password')} disabled={pending} />

      <ResetPasswordErrors message={state.message} t={t} />
    </form>
  );
}
