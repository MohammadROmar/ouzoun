import { useActionState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

import Input from '@/components/ui/input';
import { resetPassword } from '@/actions/reset-password';

type ResetPasswordProps = { changeStep(step: number): void };

export default function ResetPassword({ changeStep }: ResetPasswordProps) {
  const [state, formAction] = useActionState(resetPassword, {
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

      {state.message && state.message !== 'success' && (
        <p className="mt-1 text-sm text-red-400">
          Please enter a valid password
        </p>
      )}

      <button className="button mt-6 w-full rounded-full">
        {t('change-password')}
      </button>
    </form>
  );
}
